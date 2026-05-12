const PT_BR = 'pt-BR';

const defaultWindows = {
  weekdays: [['09:00', '12:00'], ['14:00', '18:00']],
  saturday: [['09:00', '12:00']],
};

const procedureConfigurations = {
  'limpeza-de-pele': {
    label: 'Higienizacao profunda e renovacao de textura',
    windows: {
      weekdays: [['09:00', '11:30'], ['14:00', '18:00']],
      saturday: [['09:00', '12:00']],
    },
    stepMinutes: 30,
  },
  peeling: {
    label: 'Refinamento de pele com foco em brilho e clareza',
    windows: {
      weekdays: [['10:00', '12:00'], ['14:30', '18:30']],
      saturday: [['09:30', '12:00']],
    },
    stepMinutes: 30,
  },
  microagulhamento: {
    label: 'Sessao orientada para regeneracao e textura cutanea',
    windows: {
      weekdays: [['09:30', '11:30'], ['14:00', '17:30']],
      saturday: [['09:00', '11:30']],
    },
    stepMinutes: 60,
  },
  'massagem-relaxante': {
    label: 'Janela de bem-estar com ritmo mais desacelerado',
    windows: {
      weekdays: [['09:00', '12:00'], ['15:00', '18:30']],
      saturday: [['09:00', '13:00']],
    },
    stepMinutes: 30,
  },
  'drenagem-linfatica': {
    label: 'Protocolo corporal com agenda mais recorrente',
    windows: {
      weekdays: [['08:30', '11:30'], ['13:30', '17:30']],
      saturday: [['09:00', '12:30']],
    },
    stepMinutes: 30,
  },
  'preenchimento-labial': {
    label: 'Atendimento com pausa tecnica e leitura estetica',
    windows: {
      weekdays: [['10:00', '12:00'], ['15:00', '18:00']],
      saturday: [['09:30', '11:30']],
    },
    stepMinutes: 60,
  },
  bioestimulador: {
    label: 'Sessao com maior tempo de preparacao e orientacao',
    windows: {
      weekdays: [['09:00', '11:00'], ['14:30', '17:30']],
      saturday: [['09:00', '11:00']],
    },
    stepMinutes: 60,
  },
  botox: {
    label: 'Aplicacao objetiva com retorno visual refinado',
    windows: {
      weekdays: [['09:00', '12:00'], ['14:00', '18:30']],
      saturday: [['09:00', '12:00']],
    },
    stepMinutes: 30,
  },
  'secagem-de-vasinhos': {
    label: 'Atendimento tecnico com janelas mais concentradas',
    windows: {
      weekdays: [['10:00', '12:00'], ['15:00', '18:00']],
      saturday: [['09:30', '11:30']],
    },
    stepMinutes: 30,
  },
  'micro-labial': {
    label: 'Sessao detalhada para definicao e uniformidade',
    windows: {
      weekdays: [['09:30', '11:30'], ['14:30', '17:30']],
      saturday: [['09:00', '11:00']],
    },
    stepMinutes: 60,
  },
  'tratamento-para-gordura-localizada': {
    label: 'Planejamento corporal com leitura personalizada',
    windows: {
      weekdays: [['09:00', '11:30'], ['14:00', '17:30']],
      saturday: [['09:00', '11:30']],
    },
    stepMinutes: 30,
  },
  'enzimas-para-gordura-localizada': {
    label: 'Abordagem complementar para areas especificas',
    windows: {
      weekdays: [['10:00', '12:00'], ['15:00', '18:30']],
      saturday: [['09:30', '12:00']],
    },
    stepMinutes: 30,
  },
};

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function parseTimeToMinutes(value) {
  const [hours, minutes] = value.split(':').map(Number);
  return (hours * 60) + minutes;
}

function formatMinutesAsTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function normalizeProcedure(service) {
  const slug = slugify(service.nome);
  const configuration = procedureConfigurations[slug] || {};

  return {
    id: String(service.id),
    backendId: service.id,
    title: service.nome,
    description: configuration.label || service.descricao,
    duration: service.duracaoMinutos || 60,
    windows: configuration.windows || defaultWindows,
    stepMinutes: configuration.stepMinutes || 30,
  };
}

function buildProcedureOptions(services) {
  return services.map(normalizeProcedure);
}

function buildSlotsForDay(procedure, date, occupiedTimes = []) {
  const occupiedTimeSet = new Set(occupiedTimes);
  const isSaturday = date.getDay() === 6;
  const isSunday = date.getDay() === 0;

  if (isSunday) {
    return [];
  }

  const windows = isSaturday ? procedure.windows.saturday : procedure.windows.weekdays;
  const slots = [];

  windows.forEach(([start, end]) => {
    const startMinutes = parseTimeToMinutes(start);
    const endMinutes = parseTimeToMinutes(end);

    for (
      let currentMinutes = startMinutes;
      currentMinutes + procedure.duration <= endMinutes;
      currentMinutes += procedure.stepMinutes
    ) {
      const currentDate = new Date(date);
      const currentTime = formatMinutesAsTime(currentMinutes);
      currentDate.setHours(Math.floor(currentMinutes / 60), currentMinutes % 60, 0, 0);

      if (currentDate <= new Date() || occupiedTimeSet.has(currentTime)) {
        continue;
      }

      slots.push({
        value: currentTime,
        label: currentTime,
        endLabel: formatMinutesAsTime(currentMinutes + procedure.duration),
      });
    }
  });

  return slots;
}

function buildDayDetails(dateValue, date, procedure, occupiedTimes = []) {
  const slots = buildSlotsForDay(procedure, date, occupiedTimes);

  return {
    value: dateValue,
    dayLabel: date.toLocaleDateString(PT_BR, { weekday: 'short' }).replace('.', ''),
    dayNumber: date.toLocaleDateString(PT_BR, { day: '2-digit' }),
    monthLabel: date.toLocaleDateString(PT_BR, { month: 'short' }).replace('.', ''),
    fullLabel: date.toLocaleDateString(PT_BR, {
      day: '2-digit',
      month: 'long',
      weekday: 'long',
    }),
    slots,
  };
}

function buildAvailableDays(procedure, limit = 8) {
  if (!procedure) {
    return [];
  }

  const availableDays = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  while (availableDays.length < limit) {
    cursor.setDate(cursor.getDate() + 1);

    const dateValue = cursor.toISOString().split('T')[0];
    const dayDetails = buildDayDetails(dateValue, cursor, procedure);

    if (!dayDetails.slots.length) {
      continue;
    }

    availableDays.push(dayDetails);
  }

  return availableDays;
}

function buildSpecificDayAvailability(procedure, dateValue, occupiedTimes = []) {
  if (!procedure || !dateValue) {
    return null;
  }

  const targetDate = new Date(`${dateValue}T00:00:00`);

  if (Number.isNaN(targetDate.getTime())) {
    return null;
  }

  return buildDayDetails(dateValue, targetDate, procedure, occupiedTimes);
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
  buildAvailableDays,
  buildProcedureOptions,
  buildSpecificDayAvailability,
  formatAppointmentSummary,
};
