package com.lumiereclinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.lumiereclinic.model.Agendamento;

import java.time.LocalDateTime;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {

    boolean existsByDataHora(LocalDateTime dataHora);

}