const IDIOMA_BR = 'pt-BR';

function montarOpcoesProcedimento(servicos) {
  return servicos.map((servico) => ({
    id: String(servico.id),
    backendId: servico.id,
    title: servico.nome,
    description: servico.descricao,
    duration: servico.duracaoMinutos || 60,
  }));
}

function somarMinutos(horario, minutosParaSomar) {
  const [horas, minutos] = horario.split(':').map(Number);
  const totalMinutos = (horas * 60) + minutos + minutosParaSomar;
  const proximasHoras = Math.floor(totalMinutos / 60);
  const proximosMinutos = totalMinutos % 60;

  return `${String(proximasHoras).padStart(2, '0')}:${String(proximosMinutos).padStart(2, '0')}`;
}

function mapearDiaDisponibilidade(dia, duracao = 0) {
  const dataAlvo = new Date(`${dia.data}T12:00:00`);
  const horarios = (dia.horariosDisponiveis || []).map((horario) => ({
    value: horario,
    label: horario,
    endLabel: somarMinutos(horario, duracao),
  }));

  return {
    value: dia.data,
    dayLabel: dataAlvo.toLocaleDateString(IDIOMA_BR, { weekday: 'short' }).replace('.', ''),
    dayNumber: dataAlvo.toLocaleDateString(IDIOMA_BR, { day: '2-digit' }),
    monthLabel: dataAlvo.toLocaleDateString(IDIOMA_BR, { month: 'short' }).replace('.', ''),
    fullLabel: dataAlvo.toLocaleDateString(IDIOMA_BR, {
      day: '2-digit',
      month: 'long',
      weekday: 'long',
    }),
    slots: horarios,
  };
}

function formatarResumoAgendamento({ data, tituloProcedimento, horario }) {
  if (!tituloProcedimento || !data || !horario) {
    return 'Selecione um procedimento, escolha uma data disponível e finalize com o melhor horário para você.';
  }

  const dataFormatada = new Date(`${data}T12:00:00`).toLocaleDateString(IDIOMA_BR, {
    day: '2-digit',
    month: 'long',
    weekday: 'long',
  });

  return `${tituloProcedimento} em ${dataFormatada} às ${horario}. A equipe recebe essa solicitação e faz o ajuste fino da confirmação.`;
}

export {
  formatarResumoAgendamento,
  mapearDiaDisponibilidade,
  montarOpcoesProcedimento,
};
