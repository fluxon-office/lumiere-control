package com.lumiereclinic.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.lumiereclinic.dto.AgendamentoRequest;
import com.lumiereclinic.model.Agendamento;
import com.lumiereclinic.service.AgendamentoService;
import java.util.List;

@RestController
@RequestMapping("/agendamentos")
public class AgendamentoController {

    @Autowired
    private AgendamentoService agendamentoService;

    @PostMapping("/publico")
    public Agendamento criarAgendamento(@RequestBody AgendamentoRequest request) {
        return agendamentoService.criarAgendamentoPublico(request);
    }

    @GetMapping
    public List<Agendamento> listarAgendamentos() {
        return agendamentoService.listarAgendamentos();
    }

    @PutMapping("/{id}/confirmar")
    public Agendamento confirmar(@PathVariable Long id) {
        return agendamentoService.confirmarAgendamento(id);
    }

    @PutMapping("/{id}/cancelar")
    public Agendamento cancelar(@PathVariable Long id) {
        return agendamentoService.cancelarAgendamento(id);
    }
}