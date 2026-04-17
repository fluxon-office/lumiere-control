package com.lumiereclinic.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AgendamentoRequest {

    private String nome;
    private String email;
    private String telefone;
    private Long servicoId;
    private LocalDateTime dataHora;
    private String observacao;
}