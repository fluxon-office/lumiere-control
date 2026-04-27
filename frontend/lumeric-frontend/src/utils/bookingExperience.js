import { services } from './landingContent';

const PT_BR = 'pt-BR';

const procedureConfigurations = {
  'limpeza-de-pele': {
    duration: 70,
    label: 'Higienização profunda e renovação de textura',
    windows: {
      weekdays: [['09:00', '11:30'], ['14:00', '18:00']],
      saturday: [['09:00', '12:00']],
    },
    stepMinutes: 30,
  },
  peeling: {
    duration: 50,
    label: 'Refinamento de pele com foco em brilho e clareza',
    windows: {
      weekdays: [['10:00', '12:00'], ['14:30', '18:30']],
      saturday: [['09:30', '12:00']],
    },
    stepMinutes: 30,
  },
  microagulhamento: {
    duration: 80,
    label: 'Sessão orientada para regeneração e textura cutânea',
    windows: {
      weekdays: [['09:30', '11:30'], ['14:00', '17:30']],
      saturday: [['09:00', '11:30']],
    },
    stepMinutes: 60,
  },
  'massagem-relaxante': {
    duration: 60,
    label: 'Janela de bem-estar com ritmo mais desacelerado',
    windows: {
      weekdays: [['09:00', '12:00'], ['15:00', '18:30']],
      saturday: [['09:00', '13:00']],
    },
    stepMinutes: 30,
  },
  'drenagem-linfatica': {
    duration: 60,
    label: 'Protocolo corporal com agenda mais recorrente',
    windows: {
      weekdays: [['08:30', '11:30'], ['13:30', '17:30']],
      saturday: [['09:00', '12:30']],
    },
    stepMinutes: 30,
  },
  'preenchimento-labial': {
    duration: 75,
    label: 'Atendimento com pausa técnica e leitura estética',
    windows: {
      weekdays: [['10:00', '12:00'], ['15:00', '18:00']],
      saturday: [['09:30', '11:30']],
    },
    stepMinutes: 60,
  },
  bioestimulador: {
    duration: 90,
    label: 'Sessão com maior tempo de preparação e orientação',
    windows: {
      weekdays: [['09:00', '11:00'], ['14:30', '17:30']],
      saturday: [['09:00', '11:00']],
    },
    stepMinutes: 60,
  },
  botox: {
    duration: 45,
    label: 'Aplicação objetiva com retorno visual refinado',
    windows: {
      weekdays: [['09:00', '12:00'], ['14:00', '18:30']],
      saturday: [['09:00', '12:00']],
    },
    stepMinutes: 30,
  },
  'secagem-de-vazinhos': {
    duration: 50,
    label: 'Atendimento técnico com janelas mais concentradas',
    windows: {
      weekdays: [['10:00', '12:00'], ['15:00', '18:00']],
      saturday: [['09:30', '11:30']],
    },
    stepMinutes: 30,
  },
  'micro-labial': {
    duration: 90,
    label: 'Sessão detalhada para definição e uniformidade',
    windows: {
      weekdays: [['09:30', '11:30'], ['14:30', '17:30']],
      saturday: [['09:00', '11:00']],
    },
    stepMinutes: 60,
  },
  'tratamento-para-gordura-localizada': {
    duration: 75,
    label: 'Planejamento corporal com leitura personalizada',
    windows: {
      weekdays: [['09:00', '11:30'], ['14:00', '17:30']],
      saturday: [['09:00', '11:30']],
    },
    stepMinutes: 30,
  },
  'enzimas-para-gordura-localizada': {
    duration: 45,
    label: 'Abordagem pontual com encaixes mais dinâmicos',
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

function createProcedureOption(service) {
  const id = slugify(service.title);
  const configuration = procedureConfigurations[id];

  return {
    id,
    title: service.title,
    description: configuration.label,
    duration: configuration.duration,
  };
}

function buildSlotsForDay(procedure, date) {
  const isSaturday = date.getDay() === 6;
  const isSunday = date.getDay() === 0;

  if (isSunday) {
    return [];
  }

  const config = procedureConfigurations[procedure.id];
  const windows = isSaturday ? config.windows.saturday : config.windows.weekdays;
  const slots = [];

  windows.forEach(([start, end]) => {
    const startMinutes = parseTimeToMinutes(start);
    const endMinutes = parseTimeToMinutes(end);

    for (
      let currentMinutes = startMinutes;
      currentMinutes + procedure.duration <= endMinutes;
      currentMinutes += config.stepMinutes
    ) {
      const currentDate = new Date(date);
      currentDate.setHours(Math.floor(currentMinutes / 60), currentMinutes % 60, 0, 0);

      if (currentDate <= new Date()) {
        continue;
      }

      slots.push({
        value: formatMinutesAsTime(currentMinutes),
        label: formatMinutesAsTime(currentMinutes),
        endLabel: formatMinutesAsTime(currentMinutes + procedure.duration),
      });
    }
  });

  return slots;
}

function buildAvailableDays(procedureId, limit = 8) {
  const procedure = bookingProcedureOptions.find((item) => item.id === procedureId);

  if (!procedure) {
    return [];
  }

  const availableDays = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  while (availableDays.length < limit) {
    cursor.setDate(cursor.getDate() + 1);

    const daySlots = buildSlotsForDay(procedure, cursor);

    if (!daySlots.length) {
      continue;
    }

    const dateValue = cursor.toISOString().split('T')[0];

    availableDays.push({
      value: dateValue,
      dayLabel: cursor.toLocaleDateString(PT_BR, { weekday: 'short' }).replace('.', ''),
      dayNumber: cursor.toLocaleDateString(PT_BR, { day: '2-digit' }),
      monthLabel: cursor.toLocaleDateString(PT_BR, { month: 'short' }).replace('.', ''),
      fullLabel: cursor.toLocaleDateString(PT_BR, {
        day: '2-digit',
        month: 'long',
        weekday: 'long',
      }),
      slots: daySlots,
    });
  }

  return availableDays;
}

function buildSpecificDayAvailability(procedureId, dateValue) {
  const procedure = bookingProcedureOptions.find((item) => item.id === procedureId);

  if (!procedure || !dateValue) {
    return null;
  }

  const targetDate = new Date(`${dateValue}T00:00:00`);

  if (Number.isNaN(targetDate.getTime())) {
    return null;
  }

  const slots = buildSlotsForDay(procedure, targetDate);

  return {
    value: dateValue,
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

function formatAppointmentSummary({ date, procedureTitle, time }) {
  if (!procedureTitle || !date || !time) {
    return 'Selecione um procedimento, escolha uma data disponível e finalize com o melhor horário para você.';
  }

  const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString(PT_BR, {
    day: '2-digit',
    month: 'long',
    weekday: 'long',
  });

  return `${procedureTitle} em ${formattedDate} às ${time}. A equipe recebe essa solicitação e faz o ajuste fino da confirmação.`;
}

const bookingProcedureOptions = services.map(createProcedureOption);

export {
  bookingProcedureOptions,
  buildAvailableDays,
  buildSpecificDayAvailability,
  formatAppointmentSummary,
};
