package com.lumiereclinic.service;



import com.lumiereclinic.enums.StatusAgendamento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lumiereclinic.dto.AgendamentoRequest;
import com.lumiereclinic.exception.ResourceBadRequestException;
import com.lumiereclinic.model.*;
import com.lumiereclinic.repository.*;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class AgendamentoService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ServicoRepository servicoRepository;

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    public Agendamento criarAgendamentoPublico(AgendamentoRequest request) {

        if (request.getDataHora().isBefore(LocalDateTime.now())) {
            throw new ResourceBadRequestException("Não é possível agendar no passado");
        }

        if (agendamentoRepository.existsByDataHora(request.getDataHora())) {
            throw new ResourceBadRequestException("Horário já ocupado");
        }

        Cliente cliente = clienteRepository.findByEmail(request.getEmail())
                .orElseGet(() -> {
                    Cliente novo = new Cliente();
                    novo.setNome(request.getNome());
                    novo.setEmail(request.getEmail());
                    novo.setTelefone(request.getTelefone());
                    return clienteRepository.save(novo);
                });

        Servico servico = servicoRepository.findById(request.getServicoId())
                .orElseThrow(() -> new ResourceBadRequestException("Serviço não encontrado"));

        Agendamento agendamento = new Agendamento();
        agendamento.setCliente(cliente);
        agendamento.setServico(servico);
        agendamento.setDataHora(request.getDataHora());
        agendamento.setObservacao(request.getObservacao());

        return agendamentoRepository.save(agendamento);
    }
    public List<Agendamento> listarAgendamentos() {
        return agendamentoRepository.findAllByOrderByDataHoraAsc();
    }

    public Agendamento confirmarAgendamento(Long id) {
        Agendamento agendamento = agendamentoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Agendamento não encontrado"));

        agendamento.setStatus(StatusAgendamento.CONFIRMADO);

        return agendamentoRepository.save(agendamento);
    }

    public Agendamento cancelarAgendamento(Long id) {
        Agendamento agendamento = agendamentoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Agendamento não encontrado"));

        agendamento.setStatus(StatusAgendamento.CANCELADO);

        return agendamentoRepository.save(agendamento);
    }
}