package com.lumiereclinic;

import com.lumiereclinic.dto.ServicoRequest;
import com.lumiereclinic.dto.ServicoResponse;
import com.lumiereclinic.dto.RemarcacaoRequest;
import com.lumiereclinic.enums.StatusAgendamento;
import com.lumiereclinic.exception.ResourceBadRequestException;
import com.lumiereclinic.model.Agendamento;
import com.lumiereclinic.model.Cliente;
import com.lumiereclinic.model.Servico;
import com.lumiereclinic.model.Usuario;
import com.lumiereclinic.repository.AgendamentoRepository;
import com.lumiereclinic.repository.ClienteRepository;
import com.lumiereclinic.repository.ServicoRepository;
import com.lumiereclinic.repository.UsuarioRepository;
import com.lumiereclinic.service.AgendamentoService;
import com.lumiereclinic.service.ServicoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@Transactional
class ServicoServiceIntegrationTest {

    @Autowired
    private ServicoService servicoService;

    @Autowired
    private AgendamentoService agendamentoService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ServicoRepository servicoRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    private static final String EMPRESA_A = "empresa-a";
    private static final String EMPRESA_B = "empresa-b";

    @BeforeEach
    void setUp() {
        agendamentoRepository.deleteAll();
        clienteRepository.deleteAll();
        servicoRepository.deleteAll();
        usuarioRepository.deleteAll();

        usuarioRepository.save(criarUsuario("admin-a@teste.com", EMPRESA_A));
        usuarioRepository.save(criarUsuario("admin-b@teste.com", EMPRESA_B));
    }

    @Test
    void deveExecutarCrudCompletoComFiltrosEEscopoDaEmpresa() {
        ServicoResponse criado = servicoService.criarServico(criarRequest("Botox Premium", "Dra. Ana"), EMPRESA_A);

        Servico outroServico = new Servico();
        outroServico.setNome("Servico B");
        outroServico.setCategoria("Corporal");
        outroServico.setDescricao("Servico de outra empresa");
        outroServico.setProfissionalPrincipal("Dr. B");
        outroServico.setPreco(100.0);
        outroServico.setDuracaoMinutos(30);
        outroServico.setAtivo(true);
        outroServico.setPublicado(true);
        outroServico.setEmpresaId(EMPRESA_B);
        servicoRepository.save(outroServico);

        List<ServicoResponse> filtrados = servicoService.listarTodosServicos(EMPRESA_A, "Botox", "Facial", "ativo", "Ana");
        assertEquals(1, filtrados.size());
        assertEquals(criado.getId(), filtrados.getFirst().getId());

        ServicoResponse detalhado = servicoService.detalharServico(criado.getId(), EMPRESA_A);
        assertEquals("Dra. Ana", detalhado.getProfissionalPrincipal());

        ServicoRequest atualizacao = criarRequest("Botox Signature", "Dra. Carla");
        atualizacao.setPreco(990.0);
        atualizacao.setDuracaoMinutos(75);
        ServicoResponse atualizado = servicoService.atualizarServico(criado.getId(), atualizacao, EMPRESA_A);
        assertEquals("Botox Signature", atualizado.getNome());
        assertEquals("Dra. Carla", atualizado.getProfissionalPrincipal());
        assertEquals(75, atualizado.getDuracaoMinutos());

        ServicoResponse inativado = servicoService.atualizarStatus(criado.getId(), false, EMPRESA_A);
        assertEquals("inativo", inativado.getStatus());

        servicoService.excluirServico(criado.getId(), EMPRESA_A);
        assertEquals(0, servicoRepository.findAll().stream().filter(servico -> servico.getEmpresaId().equals(EMPRESA_A)).count());
    }

    @Test
    void deveImpedirExclusaoQuandoServicoEstiverVinculadoAAgendamento() {
        ServicoResponse criado = servicoService.criarServico(criarRequest("Peeling", "Dra. Teste"), EMPRESA_A);
        Servico servico = servicoRepository.findById(criado.getId()).orElseThrow();

        Cliente cliente = new Cliente();
        cliente.setNome("Cliente Teste");
        cliente.setEmail("cliente@teste.com");
        cliente.setTelefone("11999999999");
        cliente = clienteRepository.save(cliente);

        Agendamento agendamento = new Agendamento();
        agendamento.setCliente(cliente);
        agendamento.setServico(servico);
        agendamento.setDataHora(LocalDateTime.now().plusDays(2));
        agendamento.setStatus(StatusAgendamento.PENDENTE);
        agendamentoRepository.save(agendamento);

        ResourceBadRequestException exception = assertThrows(
                ResourceBadRequestException.class,
                () -> servicoService.excluirServico(criado.getId(), EMPRESA_A)
        );

        assertEquals("Nao e possivel excluir um servico vinculado a agendamentos", exception.getMessage());
    }

    @Test
    void deveRemarcarAgendamentoEAtualizarTelefoneComMensagemWhatsapp() {
        ServicoResponse criado = servicoService.criarServico(criarRequest("Botox", "Dra. Teste"), EMPRESA_A);
        Servico servico = servicoRepository.findById(criado.getId()).orElseThrow();

        Cliente cliente = new Cliente();
        cliente.setNome("Cliente Remarcacao");
        cliente.setEmail("remarcacao@teste.com");
        cliente.setTelefone("11999999999");
        cliente = clienteRepository.save(cliente);

        Agendamento agendamento = new Agendamento();
        agendamento.setCliente(cliente);
        agendamento.setServico(servico);
        agendamento.setDataHora(LocalDateTime.now().plusDays(2).withHour(10).withMinute(0).withSecond(0).withNano(0));
        agendamento.setStatus(StatusAgendamento.PENDENTE);
        agendamento = agendamentoRepository.save(agendamento);

        RemarcacaoRequest request = new RemarcacaoRequest();
        request.setDataHora(LocalDateTime.now().plusDays(3).withHour(14).withMinute(30).withSecond(0).withNano(0));
        request.setTelefone("(11) 98888-7777");
        request.setObservacao("Cliente pediu novo horario");

        Agendamento remarcado = agendamentoService.remarcarAgendamento(agendamento.getId(), request);

        assertEquals(StatusAgendamento.REMARCAR, remarcado.getStatus());
        assertEquals("11988887777", remarcado.getCliente().getTelefone());
        assertEquals(request.getDataHora(), remarcado.getDataHora());
        assertEquals("Cliente pediu novo horario", remarcado.getObservacao());
        assertTrue(remarcado.getWhatsappUrl() != null && remarcado.getWhatsappUrl().contains("wa.me"));
    }

    private Usuario criarUsuario(String email, String empresaId) {
        Usuario usuario = new Usuario();
        usuario.setNome("Admin");
        usuario.setEmail(email);
        usuario.setSenha(passwordEncoder.encode("123"));
        usuario.setTelefone("00000000000");
        usuario.setEmpresaId(empresaId);
        return usuario;
    }

    private ServicoRequest criarRequest(String nome, String profissional) {
        ServicoRequest request = new ServicoRequest();
        request.setNome(nome);
        request.setCategoria("Facial");
        request.setDescricao("Descricao de teste");
        request.setProfissionalPrincipal(profissional);
        request.setPreco(890.0);
        request.setDuracaoMinutos(60);
        request.setAtivo(true);
        request.setPublicado(true);
        return request;
    }
}
