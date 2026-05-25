function FormularioAgendamento({
  carregandoDisponibilidade,
  carregandoServicos,
  dataCalendario,
  dadosFormulario,
  diaSelecionado,
  diasDisponiveis,
  erroDisponibilidade,
  erroServicos,
  formatarTelefone,
  horarioSelecionado,
  onAlterarCalendario,
  onAlterarCampo,
  onAlterarProcedimento,
  onEnviar,
  onSelecionarDia,
  opcoesProcedimento,
  procedimentoSelecionado,
  resumoAgendamento,
  statusEnvio,
}) {
  return (
    <form
      onSubmit={onEnviar}
      className="h-full rounded-[2rem] border border-[rgba(255,246,232,0.22)] bg-[linear-gradient(180deg,rgba(84,46,12,0.34)_0%,rgba(103,61,20,0.22)_100%)] p-4 shadow-[0_28px_70px_rgba(86,49,14,0.18)] backdrop-blur-xl max-[480px]:rounded-[1.35rem] max-[480px]:p-2.5 sm:p-5 lg:p-6"
    >
      <div className="flex min-h-full flex-col rounded-[1.6rem] border border-[rgba(255,244,225,0.18)] bg-[linear-gradient(180deg,rgba(255,250,242,0.95)_0%,rgba(249,240,228,0.92)_100%)] p-5 text-[var(--color-ink)] max-[480px]:rounded-[1.1rem] max-[480px]:p-3.5 sm:p-6 lg:p-7 xl:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
              Solicitar horário
            </p>
            <h3 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-[-0.035em] text-[var(--color-ink)]">
              Monte sua consulta em poucos passos
            </h3>
          </div>
          <div className="rounded-2xl border border-[rgba(162,124,22,0.16)] bg-white/72 px-4 py-3 text-sm leading-6 text-[rgba(11,28,44,0.68)]">
            A equipe recebe os dados e ajusta a confirmação com você.
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:gap-5">
          <CampoFormulario label="Nome do cliente">
            <input
              value={dadosFormulario.nome}
              onChange={(event) => onAlterarCampo('nome', event.target.value)}
              placeholder="Como devemos chamar você"
              className="w-full rounded-[1.1rem] border border-[rgba(11,28,44,0.1)] bg-white px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition duration-300 placeholder:text-[rgba(11,28,44,0.34)] focus:border-[rgba(162,124,22,0.34)] focus:ring-2 focus:ring-[rgba(212,175,55,0.16)]"
            />
          </CampoFormulario>
          <CampoFormulario label="Número de contato">
            <input
              value={dadosFormulario.telefone}
              onChange={(event) => onAlterarCampo('telefone', formatarTelefone(event.target.value))}
              placeholder="(11) 99999-9999"
              className="w-full rounded-[1.1rem] border border-[rgba(11,28,44,0.1)] bg-white px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition duration-300 placeholder:text-[rgba(11,28,44,0.34)] focus:border-[rgba(162,124,22,0.34)] focus:ring-2 focus:ring-[rgba(212,175,55,0.16)]"
            />
          </CampoFormulario>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-5">
          <CampoFormulario label="E-mail">
            <input
              type="email"
              value={dadosFormulario.email}
              onChange={(event) => onAlterarCampo('email', event.target.value)}
              placeholder="seunome@exemplo.com"
              className="w-full rounded-[1.1rem] border border-[rgba(11,28,44,0.1)] bg-white px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none transition duration-300 placeholder:text-[rgba(11,28,44,0.34)] focus:border-[rgba(162,124,22,0.34)] focus:ring-2 focus:ring-[rgba(212,175,55,0.16)]"
            />
          </CampoFormulario>
          <CampoFormulario label="Procedimento desejado">
            <div className="relative">
              <select
                value={dadosFormulario.servicoId}
                onChange={(event) => onAlterarProcedimento(event.target.value)}
                disabled={carregandoServicos}
                className="w-full appearance-none rounded-[1.1rem] border border-[rgba(11,28,44,0.1)] bg-white px-4 py-3.5 pr-12 text-sm text-[var(--color-ink)] outline-none transition duration-300 focus:border-[rgba(162,124,22,0.34)] focus:ring-2 focus:ring-[rgba(212,175,55,0.16)] disabled:cursor-not-allowed disabled:bg-[rgba(245,239,230,0.86)]"
              >
                <option value="">
                  {carregandoServicos ? 'Carregando serviços...' : 'Selecione o procedimento'}
                </option>
                {opcoesProcedimento.map((procedimento) => (
                  <option key={procedimento.id} value={procedimento.id}>
                    {procedimento.title}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-gold-deep)]">
                ▾
              </span>
            </div>
            {erroServicos ? (
              <p className="mt-2 text-xs leading-5 text-[#8B3A1A]">
                {erroServicos}
              </p>
            ) : null}
          </CampoFormulario>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[rgba(162,124,22,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(249,244,236,0.88)_100%)] p-4 sm:p-5 lg:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
                Datas disponíveis
              </p>
              <p className="mt-2 text-sm leading-7 text-[rgba(11,28,44,0.68)]">
                {procedimentoSelecionado
                  ? `Para ${procedimentoSelecionado.title}, mostramos os próximos dias e consultamos os horários reais quando você escolhe a data.`
                  : 'Escolha um procedimento para revelar os dias com agenda disponível.'}
              </p>
            </div>
            {procedimentoSelecionado ? (
              <div className="rounded-full border border-[rgba(162,124,22,0.16)] bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-gold-deep)]">
                Duração média de {procedimentoSelecionado.duration} min
              </div>
            ) : null}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_16rem]">
            <div className="flex gap-3 overflow-x-auto pb-1">
              {diasDisponiveis.length ? (
                diasDisponiveis.map((dia) => (
                  <button
                    key={dia.value}
                    type="button"
                    onClick={() => onSelecionarDia(dia.value)}
                    className={`min-w-[6.25rem] rounded-[1.35rem] border px-4 py-4 text-left transition duration-300 ${
                      dadosFormulario.data === dia.value
                        ? 'border-[rgba(162,124,22,0.28)] bg-[linear-gradient(180deg,#18344F_0%,#10283D_100%)] text-white shadow-[0_18px_38px_rgba(12,24,38,0.16)]'
                        : 'border-[rgba(11,28,44,0.08)] bg-white text-[var(--color-ink)] hover:-translate-y-0.5 hover:border-[rgba(162,124,22,0.18)]'
                    }`}
                  >
                    <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
                      dadosFormulario.data === dia.value ? 'text-[rgba(255,242,214,0.72)]' : 'text-[rgba(11,28,44,0.44)]'
                    }`}>
                      {dia.dayLabel}
                    </p>
                    <p className="mt-2 text-[1.65rem] font-semibold leading-none">
                      {dia.dayNumber}
                    </p>
                    <p className={`mt-2 text-xs uppercase tracking-[0.2em] ${
                      dadosFormulario.data === dia.value ? 'text-[rgba(255,255,255,0.7)]' : 'text-[rgba(11,28,44,0.46)]'
                    }`}>
                      {dia.monthLabel}
                    </p>
                  </button>
                ))
              ) : (
                <div className="rounded-[1.25rem] border border-dashed border-[rgba(11,28,44,0.14)] bg-white/65 px-4 py-5 text-sm leading-7 text-[rgba(11,28,44,0.56)]">
                  A lista de datas aparece assim que um procedimento é selecionado.
                </div>
              )}
            </div>

            <div className="rounded-[1.25rem] border border-[rgba(11,28,44,0.08)] bg-white/78 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,28,44,0.48)]">
                Calendário
              </p>
              <p className="mt-2 text-sm leading-6 text-[rgba(11,28,44,0.64)]">
                Quer agendar mais adiante? Escolha uma data manualmente.
              </p>
              <input
                type="date"
                value={dataCalendario}
                min={new Date().toISOString().split('T')[0]}
                onChange={(event) => onAlterarCalendario(event.target.value)}
                className="mt-4 w-full rounded-[1rem] border border-[rgba(11,28,44,0.12)] bg-white px-3 py-3 text-sm text-[var(--color-ink)] outline-none transition duration-300 focus:border-[rgba(162,124,22,0.34)] focus:ring-2 focus:ring-[rgba(212,175,55,0.16)]"
              />
              {dataCalendario && diaSelecionado && diaSelecionado.value === dataCalendario ? (
                <p className="mt-3 text-xs leading-6 text-[rgba(11,28,44,0.56)]">
                  {diaSelecionado.slots.length
                    ? `A data ${diaSelecionado.fullLabel} tem horários disponíveis.`
                    : `A data ${diaSelecionado.fullLabel} não possui horários livres para este procedimento.`}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-[rgba(162,124,22,0.12)] bg-white/76 p-4 sm:p-5 lg:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
                Horários do dia
              </p>
              <p className="mt-2 text-sm leading-7 text-[rgba(11,28,44,0.68)]">
                {diaSelecionado
                  ? `Horários disponíveis para ${diaSelecionado.fullLabel}.`
                  : 'Escolha uma data para liberar os horários desse dia.'}
              </p>
            </div>
            {horarioSelecionado ? (
              <div className="rounded-full border border-[rgba(24,52,79,0.14)] bg-[rgba(24,52,79,0.06)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
                {horarioSelecionado.label} até {horarioSelecionado.endLabel}
              </div>
            ) : null}
          </div>

          {carregandoDisponibilidade ? (
            <div className="mt-5 rounded-[1.1rem] border border-[rgba(24,52,79,0.08)] bg-[rgba(24,52,79,0.04)] px-4 py-4 text-sm text-[rgba(11,28,44,0.68)]">
              Consultando disponibilidade real deste dia...
            </div>
          ) : null}

          {erroDisponibilidade ? (
            <div className="mt-5 rounded-[1.1rem] border border-[rgba(168,74,39,0.16)] bg-[rgba(168,74,39,0.06)] px-4 py-4 text-sm text-[#8B3A1A]">
              {erroDisponibilidade}
            </div>
          ) : null}

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {diaSelecionado?.slots?.length ? (
              diaSelecionado.slots.map((horario) => (
                <button
                  key={horario.value}
                  type="button"
                  onClick={() => onAlterarCampo('horario', horario.value)}
                  className={`rounded-[1.1rem] border px-4 py-3 text-left transition duration-300 ${
                    dadosFormulario.horario === horario.value
                      ? 'border-[rgba(162,124,22,0.26)] bg-[linear-gradient(180deg,#FFF0D4_0%,#F7E2B5_100%)] text-[#5B3412] shadow-[0_14px_26px_rgba(212,175,55,0.18)]'
                      : 'border-[rgba(11,28,44,0.08)] bg-[rgba(255,255,255,0.86)] text-[var(--color-ink)] hover:-translate-y-0.5 hover:border-[rgba(162,124,22,0.18)]'
                  }`}
                >
                  <p className="text-sm font-semibold">{horario.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[rgba(11,28,44,0.44)]">
                    até {horario.endLabel}
                  </p>
                </button>
              ))
            ) : (
              <div className="rounded-[1.25rem] border border-dashed border-[rgba(11,28,44,0.14)] bg-[rgba(255,255,255,0.72)] px-4 py-5 text-sm leading-7 text-[rgba(11,28,44,0.56)] sm:col-span-2 xl:col-span-3">
                Selecione uma data acima para exibir os horários livres.
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="min-w-0 rounded-[1.35rem] border border-[rgba(24,52,79,0.08)] bg-[linear-gradient(180deg,rgba(24,52,79,0.06)_0%,rgba(24,52,79,0.02)_100%)] px-4 py-4 text-sm leading-7 text-[rgba(11,28,44,0.68)] xl:max-w-[28rem]">
            {resumoAgendamento}
          </div>
          <button
            type="submit"
            disabled={statusEnvio.type === 'loading'}
            className="inline-flex min-h-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#18344F_0%,#0D2132_100%)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_36px_rgba(12,24,38,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_44px_rgba(12,24,38,0.24)] disabled:cursor-not-allowed disabled:opacity-75 max-[480px]:w-full max-[480px]:tracking-[0.12em]"
          >
            {statusEnvio.type === 'loading' ? 'Enviando...' : 'Solicitar agendamento'}
          </button>
        </div>

        {statusEnvio.message ? (
          <div
            className={`mt-5 rounded-[1.35rem] px-4 py-4 text-sm leading-7 ${
              statusEnvio.type === 'success'
                ? 'border border-[rgba(47,128,78,0.18)] bg-[linear-gradient(180deg,rgba(231,247,236,0.95)_0%,rgba(242,251,245,0.96)_100%)] text-[#24543A]'
                : statusEnvio.type === 'error'
                  ? 'border border-[rgba(168,74,39,0.18)] bg-[linear-gradient(180deg,rgba(253,241,236,0.95)_0%,rgba(255,247,244,0.96)_100%)] text-[#8B3A1A]'
                  : 'border border-[rgba(24,52,79,0.12)] bg-[rgba(24,52,79,0.05)] text-[var(--color-ink)]'
            }`}
          >
            {statusEnvio.message}
          </div>
        ) : null}
      </div>
    </form>
  );
}

function CampoFormulario({ children, label }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(11,28,44,0.56)]">
        {label}
      </span>
      {children}
    </label>
  );
}

export default FormularioAgendamento;
