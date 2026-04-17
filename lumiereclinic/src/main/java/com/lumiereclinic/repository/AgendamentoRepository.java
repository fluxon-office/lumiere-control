package com.lumiereclinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.lumiereclinic.model.Agendamento;

import java.time.LocalDateTime;
import java.util.List;


public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {

    List<Agendamento> findAllByOrderByDataHoraAsc();

    boolean existsByDataHora(LocalDateTime dataHora);

}