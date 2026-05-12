import { useEffect, useMemo, useState } from 'react';
import { bookingWomanImage } from '../../assets/lumiereImages';
import { buildApiUrl, readJsonResponse } from '../../utils/api';
import { services as landingServices } from '../../utils/landingContent';
import {
  buildAvailableDays,
  buildProcedureOptions,
  buildSpecificDayAvailability,
  formatAppointmentSummary,
} from '../../utils/bookingExperience';

function BookingSection({ whatsappLink }) {
  const [panelOpen, setPanelOpen] = useState(false);
  const [calendarDate, setCalendarDate] = useState('');
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [servicesError, setServicesError] = useState('');
  const [availabilityLoading, setAvailabilityLoading] = useState(false);
  const [availabilityError, setAvailabilityError] = useState('');
  const [occupiedTimes, setOccupiedTimes] = useState([]);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servicoId: '',
    data: '',
    horario: '',
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadServices() {
      setServicesLoading(true);
      setServicesError('');

      try {
        const response = await fetch(buildApiUrl('/servicos'), { signal: controller.signal });
        const payload = await readJsonResponse(response);

        if (!response.ok) {
          throw new Error(payload?.mensagem || 'Nao foi possivel carregar os servicos agora.');
        }

        const normalizedServices = Array.isArray(payload) && payload.length
          ? payload
          : landingServices.map((service, index) => ({
            id: index + 1,
            nome: service.title,
            descricao: service.description,
            duracaoMinutos: 60,
          }));

        setServices(normalizedServices);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setServices(landingServices.map((service, index) => ({
            id: index + 1,
            nome: service.title,
            descricao: service.description,
            duracaoMinutos: 60,
          })));
          setServicesError(error.message || 'Nao foi possivel carregar os servicos agora.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setServicesLoading(false);
        }
      }
    }

    loadServices();

    return () => controller.abort();
  }, []);

  const procedureOptions = useMemo(() => buildProcedureOptions(services), [services]);
  const selectedProcedure = useMemo(
    () => procedureOptions.find((item) => item.id === formData.servicoId),
    [formData.servicoId, procedureOptions],
  );

  const quickAvailableDays = useMemo(
    () => (selectedProcedure ? buildAvailableDays(selectedProcedure) : []),
    [selectedProcedure],
  );

  useEffect(() => {
    if (!selectedProcedure || !formData.data) {
      setOccupiedTimes([]);
      setAvailabilityError('');
      setAvailabilityLoading(false);
      return undefined;
    }

    const controller = new AbortController();

    async function loadAvailability() {
      setAvailabilityLoading(true);
      setAvailabilityError('');

      try {
        const query = new URLSearchParams({
          servicoId: String(selectedProcedure.backendId),
          data: formData.data,
        });

        const response = await fetch(buildApiUrl(`/agendamentos/disponibilidade?${query.toString()}`), {
          signal: controller.signal,
        });
        const payload = await readJsonResponse(response);

        if (!response.ok) {
          throw new Error(payload?.mensagem || 'Nao foi possivel consultar os horarios deste dia.');
        }

        setOccupiedTimes(Array.isArray(payload?.horariosOcupados) ? payload.horariosOcupados : []);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setAvailabilityError(error.message || 'Nao foi possivel consultar os horarios deste dia.');
          setOccupiedTimes([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setAvailabilityLoading(false);
        }
      }
    }

    loadAvailability();

    return () => controller.abort();
  }, [formData.data, selectedProcedure]);

  const customCalendarDay = useMemo(
    () => (selectedProcedure && calendarDate
      ? buildSpecificDayAvailability(selectedProcedure, calendarDate, calendarDate === formData.data ? occupiedTimes : [])
      : null),
    [calendarDate, formData.data, occupiedTimes, selectedProcedure],
  );

  const selectedDay = useMemo(() => {
    if (!selectedProcedure || !formData.data) {
      return null;
    }

    return buildSpecificDayAvailability(selectedProcedure, formData.data, occupiedTimes);
  }, [formData.data, occupiedTimes, selectedProcedure]);

  const availableDays = useMemo(() => {
    if (!customCalendarDay) {
      return quickAvailableDays;
    }

    return quickAvailableDays.some((day) => day.value === customCalendarDay.value)
      ? quickAvailableDays
      : [...quickAvailableDays, customCalendarDay];
  }, [customCalendarDay, quickAvailableDays]);

  const selectedSlot = selectedDay?.slots.find((slot) => slot.value === formData.horario);
  const summaryText = formatAppointmentSummary({
    date: formData.data,
    procedureTitle: selectedProcedure?.title,
    time: formData.horario,
  });

  function formatPhoneInput(value) {
    const numbersOnly = value.replace(/\D/g, '').slice(0, 11);

    if (numbersOnly.length <= 2) {
      return numbersOnly;
    }

    if (numbersOnly.length <= 7) {
      return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2)}`;
    }

    if (numbersOnly.length <= 10) {
      return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2, 6)}-${numbersOnly.slice(6)}`;
    }

    return `(${numbersOnly.slice(0, 2)}) ${numbersOnly.slice(2, 7)}-${numbersOnly.slice(7)}`;
  }

  function resetFeedback() {
    setSubmitStatus({ type: '', message: '' });
  }

  function handleFieldChange(field, value) {
    resetFeedback();
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function handleProcedureChange(value) {
    resetFeedback();
    setCalendarDate('');
    setOccupiedTimes([]);
    setAvailabilityError('');
    setFormData((current) => ({
      ...current,
      servicoId: value,
      data: '',
      horario: '',
    }));
  }

  function handleDaySelection(value) {
    resetFeedback();
    setCalendarDate(value);
    setFormData((current) => ({
      ...current,
      data: value,
      horario: '',
    }));
  }

  function handleCalendarChange(value) {
    resetFeedback();
    setCalendarDate(value);
    setFormData((current) => ({
      ...current,
      data: value,
      horario: '',
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!formData.nome || !formData.telefone || !formData.email || !formData.servicoId || !formData.data || !formData.horario) {
      setSubmitStatus({
        type: 'error',
        message: 'Preencha nome, contato, email, procedimento, data e horario antes de continuar.',
      });
      return;
    }

    setSubmitStatus({ type: 'loading', message: 'Enviando sua solicitacao para a clinica...' });

    try {
      const response = await fetch(buildApiUrl('/agendamentos/publico'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          telefone: formData.telefone,
          email: formData.email,
          servicoId: Number(formData.servicoId),
          dataHora: `${formData.data}T${formData.horario}:00`,
          observacao: '',
        }),
      });

      const payload = await readJsonResponse(response);

      if (!response.ok) {
        throw new Error(payload?.mensagem || 'Nao foi possivel concluir o agendamento agora.');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Solicitacao enviada com sucesso. A equipe da clinica pode seguir com a confirmacao.',
      });
      setOccupiedTimes((current) => [...new Set([...current, formData.horario])]);
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        servicoId: '',
        data: '',
        horario: '',
      });
      setCalendarDate('');
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Nao foi possivel concluir o agendamento agora.',
      });
    }
  }

  return (
    <section id="agendamento" className="pb-24 pt-0 max-md:pb-16">
      <div className="w-full" data-reveal>
        <div className="relative overflow-hidden bg-[linear-gradient(180deg,#C8964D_0%,#CA9951_100%)] px-7 py-10 shadow-[0_24px_60px_rgba(163,111,33,0.18)] max-[480px]:px-4 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,247,233,0.28),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(119,67,14,0.14),transparent_26%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(34rem,1.12fr)] lg:items-start xl:grid-cols-[minmax(0,0.82fr)_minmax(38rem,1.18fr)]">
            <div className="relative z-10 flex max-w-[44rem] flex-col max-lg:mx-auto max-lg:text-center lg:min-h-[41rem]">
              <div className="inline-flex rounded-full border border-[rgba(255,248,234,0.34)] bg-[rgba(255,248,234,0.12)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgba(255,248,234,0.9)] max-lg:self-center max-[480px]:tracking-[0.18em]">
                Agendamento inteligente
              </div>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-[rgba(255,249,240,0.96)] sm:text-[1.18rem]">
                O primeiro passo e se conhecer
              </p>
              <h2 className="mt-2 max-w-[12ch] text-[2.55rem] font-medium leading-[0.98] tracking-[-0.045em] text-white max-lg:mx-auto max-lg:text-[clamp(2.35rem,8vw,4rem)] sm:text-[3.7rem] lg:text-[4.45rem]">
                Escolha o seu cuidado com mais clareza.
              </h2>
              <p className="mt-5 max-w-[38rem] text-base leading-8 text-[rgba(255,245,234,0.94)] max-lg:mx-auto sm:text-[1.08rem] sm:leading-9">
                Esta area agora consulta os servicos reais da clinica, verifica a disponibilidade do dia escolhido e envia a sua solicitacao direto para o sistema.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 max-lg:justify-center">
                {[
                  'Servicos carregados da API',
                  'Consulta de horarios por data',
                  'Agendamento enviado ao sistema',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgba(255,248,234,0.24)] bg-[rgba(255,248,234,0.12)] px-4 py-2 text-[12px] font-medium text-[rgba(255,250,242,0.92)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-auto lg:pt-16">
                <button
                  type="button"
                  onClick={() => setPanelOpen((current) => !current)}
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#FFF2D7_0%,#F5D091_44%,#E7B663_100%)] px-8 py-3 text-[1rem] font-semibold text-[#4F2F12] shadow-[0_22px_40px_rgba(97,58,13,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_48px_rgba(97,58,13,0.24)] max-[480px]:w-full"
                >
                  {panelOpen ? 'Fechar agenda visual' : 'Abrir agenda da clinica'}
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[rgba(255,255,255,0.72)] px-7 py-3 text-[1rem] font-medium text-white transition duration-300 hover:bg-[rgba(255,255,255,0.1)] max-[480px]:w-full"
                >
                  Falar com a equipe
                </a>
              </div>
            </div>

            <div className={`relative min-h-[31rem] transition-[min-height] duration-500 ease-out max-lg:min-h-0 ${panelOpen ? 'lg:min-h-[96rem] xl:min-h-[80rem]' : 'lg:min-h-[44rem]'}`}>
              <div className="pointer-events-none absolute inset-x-[10%] bottom-[8%] h-[72%] rounded-full bg-[radial-gradient(circle,rgba(245,207,173,0.34)_0%,rgba(232,179,124,0.18)_42%,transparent_76%)] blur-2xl lg:inset-x-[8%] lg:bottom-[4%] lg:h-[78%]" />

              <div
                className={`absolute inset-x-0 bottom-[-2.5rem] top-auto flex items-end justify-center transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] max-lg:hidden max-lg:relative max-lg:inset-auto max-lg:min-h-[24rem] lg:bottom-[-3.5rem] lg:justify-end ${
                  panelOpen ? 'translate-x-[120%] rotate-[8deg] opacity-0 max-lg:hidden' : 'translate-x-0 rotate-0 opacity-100'
                }`}
              >
                <img
                  src={bookingWomanImage}
                  alt="Mulher em destaque na secao de agendamento"
                  loading="lazy"
                  className="relative z-10 h-[24rem] w-auto max-w-full object-contain [filter:drop-shadow(0_22px_28px_rgba(132,83,30,0.12))] sm:h-[31rem] lg:translate-x-1 lg:h-[41rem] lg:max-w-none xl:translate-x-3"
                />
              </div>

              <div
                className={`absolute inset-0 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] max-lg:relative max-lg:inset-auto ${
                  panelOpen ? 'translate-x-0 opacity-100' : 'translate-x-[108%] opacity-0 max-lg:hidden'
                }`}
              >
                <BookingForm
                  availabilityError={availabilityError}
                  availabilityLoading={availabilityLoading}
                  availableDays={availableDays}
                  calendarDate={calendarDate}
                  formData={formData}
                  formatPhoneInput={formatPhoneInput}
                  onCalendarChange={handleCalendarChange}
                  onDaySelection={handleDaySelection}
                  onFieldChange={handleFieldChange}
                  onProcedureChange={handleProcedureChange}
                  onSubmit={handleSubmit}
                  selectedDay={selectedDay}
                  selectedProcedure={selectedProcedure}
                  selectedSlot={selectedSlot}
                  servicesError={servicesError}
                  servicesLoading={servicesLoading}
                  submitStatus={submitStatus}
                  summaryText={summaryText}
                  procedureOptions={procedureOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingForm({
  availabilityError,
  availabilityLoading,
  availableDays,
  calendarDate,
  formData,
  formatPhoneInput,
  onCalendarChange,
  onDaySelection,
  onFieldChange,
  onProcedureChange,
  onSubmit,
  procedureOptions,
  selectedDay,
  selectedProcedure,
  selectedSlot,
  servicesError,
  servicesLoading,
  submitStatus,
  summaryText,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="h-full rounded-[2rem] border border-[rgba(255,246,232,0.22)] bg-[linear-gradient(180deg,rgba(84,46,12,0.34)_0%,rgba(103,61,20,0.22)_100%)] p-4 shadow-[0_28px_70px_rgba(86,49,14,0.18)] backdrop-blur-xl max-[480px]:rounded-[1.35rem] max-[480px]:p-2.5 sm:p-5 lg:p-6"
    >
      <div className="flex min-h-full flex-col rounded-[1.6rem] border border-[rgba(255,244,225,0.18)] bg-[linear-gradient(180deg,rgba(255,250,242,0.95)_0%,rgba(249,240,228,0.92)_100%)] p-5 text-[var(--color-ink)] max-[480px]:rounded-[1.1rem] max-[480px]:p-3.5 sm:p-6 lg:p-7 xl:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
              Solicitar horario
            </p>
            <h3 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-[-0.035em] text-[var(--color-ink)]">
              Monte sua consulta em poucos passos
            </h3>
          </div>
          <div className="rounded-2xl border border-[rgba(162,124,22,0.16)] bg-white/72 px-4 py-3 text-sm leading-6 text-[rgba(11,28,44,0.68)]">
            A equipe recebe os dados e ajusta a confirmacao com voce.
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:gap-5">
          <FieldShell label="Nome do cliente">
            <input
              value={formData.nome}
              onChange={(event) => onFieldChange('nome', event.target.value)}
              placeholder="Como devemos chamar voce"
              className="w-full rounded-[1.1rem] border border-[rgba(11,28,44,0.1)] bg-white px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition duration-300 placeholder:text-[rgba(11,28,44,0.34)] focus:border-[rgba(162,124,22,0.34)] focus:ring-2 focus:ring-[rgba(212,175,55,0.16)]"
            />
          </FieldShell>
          <FieldShell label="Numero de contato">
            <input
              value={formData.telefone}
              onChange={(event) => onFieldChange('telefone', formatPhoneInput(event.target.value))}
              placeholder="(11) 99999-9999"
              className="w-full rounded-[1.1rem] border border-[rgba(11,28,44,0.1)] bg-white px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition duration-300 placeholder:text-[rgba(11,28,44,0.34)] focus:border-[rgba(162,124,22,0.34)] focus:ring-2 focus:ring-[rgba(212,175,55,0.16)]"
            />
          </FieldShell>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-5">
          <FieldShell label="E-mail">
            <input
              type="email"
              value={formData.email}
              onChange={(event) => onFieldChange('email', event.target.value)}
              placeholder="voce@exemplo.com"
              className="w-full rounded-[1.1rem] border border-[rgba(11,28,44,0.1)] bg-white px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition duration-300 placeholder:text-[rgba(11,28,44,0.34)] focus:border-[rgba(162,124,22,0.34)] focus:ring-2 focus:ring-[rgba(212,175,55,0.16)]"
            />
          </FieldShell>
          <FieldShell label="Procedimento desejado">
            <div className="relative">
              <select
                value={formData.servicoId}
                onChange={(event) => onProcedureChange(event.target.value)}
                disabled={servicesLoading}
                className="w-full appearance-none rounded-[1.1rem] border border-[rgba(11,28,44,0.1)] bg-white px-4 py-3.5 pr-12 text-sm text-[var(--color-ink)] outline-none transition duration-300 focus:border-[rgba(162,124,22,0.34)] focus:ring-2 focus:ring-[rgba(212,175,55,0.16)] disabled:cursor-not-allowed disabled:bg-[rgba(245,239,230,0.86)]"
              >
                <option value="">
                  {servicesLoading ? 'Carregando servicos...' : 'Selecione o procedimento'}
                </option>
                {procedureOptions.map((procedure) => (
                  <option key={procedure.id} value={procedure.id}>
                    {procedure.title}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-gold-deep)]">
                ▾
              </span>
            </div>
            {servicesError ? (
              <p className="mt-2 text-xs leading-5 text-[#8B3A1A]">
                {servicesError}
              </p>
            ) : null}
          </FieldShell>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[rgba(162,124,22,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(249,244,236,0.88)_100%)] p-4 sm:p-5 lg:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
                Datas disponiveis
              </p>
              <p className="mt-2 text-sm leading-7 text-[rgba(11,28,44,0.68)]">
                {selectedProcedure
                  ? `Para ${selectedProcedure.title}, mostramos os proximos dias e consultamos os horarios reais quando voce escolhe a data.`
                  : 'Escolha um procedimento para revelar os dias com agenda disponivel.'}
              </p>
            </div>
            {selectedProcedure ? (
              <div className="rounded-full border border-[rgba(162,124,22,0.16)] bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-gold-deep)]">
                Duracao media de {selectedProcedure.duration} min
              </div>
            ) : null}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_16rem]">
            <div className="flex gap-3 overflow-x-auto pb-1">
              {availableDays.length ? (
                availableDays.map((day) => (
                  <button
                    key={day.value}
                    type="button"
                    onClick={() => onDaySelection(day.value)}
                    className={`min-w-[6.25rem] rounded-[1.35rem] border px-4 py-4 text-left transition duration-300 ${
                      formData.data === day.value
                        ? 'border-[rgba(162,124,22,0.28)] bg-[linear-gradient(180deg,#18344F_0%,#10283D_100%)] text-white shadow-[0_18px_38px_rgba(12,24,38,0.16)]'
                        : 'border-[rgba(11,28,44,0.08)] bg-white text-[var(--color-ink)] hover:-translate-y-0.5 hover:border-[rgba(162,124,22,0.18)]'
                    }`}
                  >
                    <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
                      formData.data === day.value ? 'text-[rgba(255,242,214,0.72)]' : 'text-[rgba(11,28,44,0.44)]'
                    }`}>
                      {day.dayLabel}
                    </p>
                    <p className="mt-2 text-[1.65rem] font-semibold leading-none">
                      {day.dayNumber}
                    </p>
                    <p className={`mt-2 text-xs uppercase tracking-[0.2em] ${
                      formData.data === day.value ? 'text-[rgba(255,255,255,0.7)]' : 'text-[rgba(11,28,44,0.46)]'
                    }`}>
                      {day.monthLabel}
                    </p>
                  </button>
                ))
              ) : (
                <div className="rounded-[1.25rem] border border-dashed border-[rgba(11,28,44,0.14)] bg-white/65 px-4 py-5 text-sm leading-7 text-[rgba(11,28,44,0.56)]">
                  A lista de datas aparece assim que um procedimento e selecionado.
                </div>
              )}
            </div>

            <div className="rounded-[1.25rem] border border-[rgba(11,28,44,0.08)] bg-white/78 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,28,44,0.48)]">
                Calendario
              </p>
              <p className="mt-2 text-sm leading-6 text-[rgba(11,28,44,0.64)]">
                Quer agendar mais adiante? Escolha uma data manualmente.
              </p>
              <input
                type="date"
                value={calendarDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(event) => onCalendarChange(event.target.value)}
                className="mt-4 w-full rounded-[1rem] border border-[rgba(11,28,44,0.12)] bg-white px-3 py-3 text-sm text-[var(--color-ink)] outline-none transition duration-300 focus:border-[rgba(162,124,22,0.34)] focus:ring-2 focus:ring-[rgba(212,175,55,0.16)]"
              />
              {calendarDate && selectedDay && selectedDay.value === calendarDate ? (
                <p className="mt-3 text-xs leading-6 text-[rgba(11,28,44,0.56)]">
                  {selectedDay.slots.length
                    ? `A data ${selectedDay.fullLabel} tem horarios disponiveis.`
                    : `A data ${selectedDay.fullLabel} nao possui horarios livres para este procedimento.`}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-[rgba(162,124,22,0.12)] bg-white/76 p-4 sm:p-5 lg:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
                Horarios do dia
              </p>
              <p className="mt-2 text-sm leading-7 text-[rgba(11,28,44,0.68)]">
                {selectedDay
                  ? `Horarios disponiveis para ${selectedDay.fullLabel}.`
                  : 'Escolha uma data para liberar os horarios desse dia.'}
              </p>
            </div>
            {selectedSlot ? (
              <div className="rounded-full border border-[rgba(24,52,79,0.14)] bg-[rgba(24,52,79,0.06)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
                {selectedSlot.label} ate {selectedSlot.endLabel}
              </div>
            ) : null}
          </div>

          {availabilityLoading ? (
            <div className="mt-5 rounded-[1.1rem] border border-[rgba(24,52,79,0.08)] bg-[rgba(24,52,79,0.04)] px-4 py-4 text-sm text-[rgba(11,28,44,0.68)]">
              Consultando disponibilidade real deste dia...
            </div>
          ) : null}

          {availabilityError ? (
            <div className="mt-5 rounded-[1.1rem] border border-[rgba(168,74,39,0.16)] bg-[rgba(168,74,39,0.06)] px-4 py-4 text-sm text-[#8B3A1A]">
              {availabilityError}
            </div>
          ) : null}

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {selectedDay?.slots?.length ? (
              selectedDay.slots.map((slot) => (
                <button
                  key={slot.value}
                  type="button"
                  onClick={() => onFieldChange('horario', slot.value)}
                  className={`rounded-[1.1rem] border px-4 py-3 text-left transition duration-300 ${
                    formData.horario === slot.value
                      ? 'border-[rgba(162,124,22,0.26)] bg-[linear-gradient(180deg,#FFF0D4_0%,#F7E2B5_100%)] text-[#5B3412] shadow-[0_14px_26px_rgba(212,175,55,0.18)]'
                      : 'border-[rgba(11,28,44,0.08)] bg-[rgba(255,255,255,0.86)] text-[var(--color-ink)] hover:-translate-y-0.5 hover:border-[rgba(162,124,22,0.18)]'
                  }`}
                >
                  <p className="text-sm font-semibold">{slot.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[rgba(11,28,44,0.44)]">
                    ate {slot.endLabel}
                  </p>
                </button>
              ))
            ) : (
              <div className="rounded-[1.25rem] border border-dashed border-[rgba(11,28,44,0.14)] bg-[rgba(255,255,255,0.72)] px-4 py-5 text-sm leading-7 text-[rgba(11,28,44,0.56)] sm:col-span-2 xl:col-span-3">
                Selecione uma data acima para exibir os horarios livres.
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="min-w-0 rounded-[1.35rem] border border-[rgba(24,52,79,0.08)] bg-[linear-gradient(180deg,rgba(24,52,79,0.06)_0%,rgba(24,52,79,0.02)_100%)] px-4 py-4 text-sm leading-7 text-[rgba(11,28,44,0.68)] xl:max-w-[28rem]">
            {summaryText}
          </div>
          <button
            type="submit"
            disabled={submitStatus.type === 'loading'}
            className="inline-flex min-h-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#18344F_0%,#0D2132_100%)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_36px_rgba(12,24,38,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_44px_rgba(12,24,38,0.24)] disabled:cursor-not-allowed disabled:opacity-75 max-[480px]:w-full max-[480px]:tracking-[0.12em]"
          >
            {submitStatus.type === 'loading' ? 'Enviando...' : 'Solicitar agendamento'}
          </button>
        </div>

        {submitStatus.message ? (
          <div
            className={`mt-5 rounded-[1.35rem] px-4 py-4 text-sm leading-7 ${
              submitStatus.type === 'success'
                ? 'border border-[rgba(47,128,78,0.18)] bg-[linear-gradient(180deg,rgba(231,247,236,0.95)_0%,rgba(242,251,245,0.96)_100%)] text-[#24543A]'
                : submitStatus.type === 'error'
                  ? 'border border-[rgba(168,74,39,0.18)] bg-[linear-gradient(180deg,rgba(253,241,236,0.95)_0%,rgba(255,247,244,0.96)_100%)] text-[#8B3A1A]'
                  : 'border border-[rgba(24,52,79,0.12)] bg-[rgba(24,52,79,0.05)] text-[var(--color-ink)]'
            }`}
          >
            {submitStatus.message}
          </div>
        ) : null}
      </div>
    </form>
  );
}

function FieldShell({ children, label }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,28,44,0.56)]">
        {label}
      </span>
      {children}
    </label>
  );
}

export default BookingSection;
