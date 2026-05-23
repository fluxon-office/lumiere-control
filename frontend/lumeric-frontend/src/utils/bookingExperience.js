const PT_BR = 'pt-BR';

function buildProcedureOptions(services) {
  return services.map((service) => ({
    id: String(service.id),
    backendId: service.id,
    title: service.nome,
    description: service.descricao,
    duration: service.duracaoMinutos || 60,
  }));
}

function mapAvailabilityDay(day, duration = 0) {
  const targetDate = new Date(`${day.data}T12:00:00`);
  const slots = (day.horariosDisponiveis || []).map((time) => ({
    value: time,
    label: time,
    endLabel: addMinutes(time, duration),
  }));

  return {
    value: day.data,
    dayLabel: targetDate.toLocaleDateString(PT_BR, { weekday: 'short' }).replace('.', ''),
    dayNumber: targetDate.toLocaleDateString(PT_BR, { day: '2-digit' }),
    monthLabel: targetDate.toLocaleDateString(PT_BR, { month: 'short' }).replace('.', ''),
    fullLabel: targetDate.toLocaleDateString(PT_BR, {
      day: '2-digit',
      month: 'long',
      weekday: 'long',
    }),
    slots,
  };
}

function addMinutes(time, minutesToAdd) {
  const [hours, minutes] = time.split(':').map(Number);
  const totalMinutes = (hours * 60) + minutes + minutesToAdd;
  const nextHours = Math.floor(totalMinutes / 60);
  const nextMinutes = totalMinutes % 60;
  return `${String(nextHours).padStart(2, '0')}:${String(nextMinutes).padStart(2, '0')}`;
}

function formatAppointmentSummary({ date, procedureTitle, time }) {
  if (!procedureTitle || !date || !time) {
    return 'Selecione um procedimento, escolha uma data disponivel e finalize com o melhor horario para voce.';
  }

  const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString(PT_BR, {
    day: '2-digit',
    month: 'long',
    weekday: 'long',
  });

  return `${procedureTitle} em ${formattedDate} as ${time}. A equipe recebe essa solicitacao e faz o ajuste fino da confirmacao.`;
}

export {
  buildProcedureOptions,
  formatAppointmentSummary,
  mapAvailabilityDay,
};
