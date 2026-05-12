package com.lumiereclinic.service;

import com.lumiereclinic.exception.ResourceNotFoundException;
import com.lumiereclinic.model.Servico;
import com.lumiereclinic.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicoService {

    @Autowired
    private ServicoRepository servicoRepository;

    public Servico criarServico(Servico servico) {
        servico.setAtivo(true);
        return servicoRepository.save(servico);
    }

    public List<Servico> listarServicosAtivos() {
        return servicoRepository.findByAtivoTrue();
    }

    public Servico atualizarServico(Long id, Servico servicoAtualizado) {
        Servico servico = servicoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Servico nao encontrado"));

        servico.setNome(servicoAtualizado.getNome());
        servico.setDescricao(servicoAtualizado.getDescricao());
        servico.setPreco(servicoAtualizado.getPreco());
        servico.setDuracaoMinutos(servicoAtualizado.getDuracaoMinutos());

        return servicoRepository.save(servico);
    }

    public void desativarServico(Long id) {
        Servico servico = servicoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Servico nao encontrado"));

        servico.setAtivo(false);
        servicoRepository.save(servico);
    }
}
