import { useState } from 'react';
import useAgendamento from '../../hooks/useAgendamento';
import FormularioAgendamento from './FormularioAgendamento';

function SecaoAgendamento({ whatsappLink }) {
  const [agendaAberta, setAgendaAberta] = useState(false);
  const agendamento = useAgendamento();

  return (
    <section id="agendamento" className="pb-24 pt-0 max-md:pb-16">
      <div className="w-full" data-reveal>
        <div className={`relative bg-[linear-gradient(180deg,#B98B17_0%,#9F6F13_50%,#7A4C00_100%)] px-7 py-10 shadow-[0_24px_60px_rgba(101,64,10,0.24)] max-[480px]:px-4 sm:px-10 sm:py-12 lg:px-16 lg:py-12 ${agendaAberta ? 'overflow-visible' : 'overflow-hidden'}`}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,247,233,0.2),transparent_28%),linear-gradient(90deg,rgba(16,32,51,0.2),transparent_52%),radial-gradient(circle_at_bottom_right,rgba(42,24,5,0.24),transparent_30%)]" />
          <div className={`relative grid gap-10 lg:items-start ${
            agendaAberta
              ? 'lg:grid-cols-[minmax(0,0.88fr)_minmax(34rem,1.12fr)] xl:grid-cols-[minmax(0,0.82fr)_minmax(38rem,1.18fr)]'
              : 'lg:grid-cols-[minmax(0,44rem)] lg:justify-center'
          }`}>
            <div className={`relative z-10 flex max-w-[44rem] flex-col max-lg:mx-auto max-lg:text-center ${agendaAberta ? 'lg:min-h-[41rem]' : 'lg:min-h-0 lg:text-center'}`}>
              <div className="inline-flex rounded-full border border-[rgba(255,248,234,0.34)] bg-[rgba(255,248,234,0.12)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgba(255,248,234,0.9)] max-lg:self-center max-[480px]:tracking-[0.18em]">
                Agendamento inteligente
              </div>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-[rgba(255,249,240,0.98)] sm:text-[1.18rem]">
                O primeiro passo é se conhecer
              </p>
              <h2 className="mt-2 max-w-[12ch] text-[2.55rem] font-medium leading-[0.98] tracking-[-0.045em] text-white max-lg:mx-auto max-lg:text-[clamp(2.35rem,8vw,4rem)] sm:text-[3.7rem] lg:text-[4.45rem]">
                Escolha o seu cuidado com mais clareza.
              </h2>
              <p className="mt-5 max-w-[38rem] text-base leading-8 text-[rgba(255,245,234,0.98)] max-lg:mx-auto sm:text-[1.08rem] sm:leading-9">
                Esta área consulta os serviços da clínica, verifica a disponibilidade do dia escolhido e envia a sua solicitação direto para a equipe.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 max-lg:justify-center">
                {[
                  'Serviços atualizados',
                  'Consulta de horários por data',
                  'Agendamento enviado ao sistema',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgba(255,248,234,0.36)] bg-[rgba(32,18,4,0.18)] px-4 py-2 text-[12px] font-semibold text-[rgba(255,250,242,0.98)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className={`mt-9 flex flex-col gap-4 sm:flex-row sm:items-center ${agendaAberta ? 'lg:mt-auto lg:pt-16' : 'lg:justify-center'}`}>
                <button
                  type="button"
                  onClick={() => setAgendaAberta((atual) => !atual)}
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#FFF2D7_0%,#F5D091_44%,#E7B663_100%)] px-8 py-3 text-[1rem] font-semibold text-[#4F2F12] shadow-[0_22px_40px_rgba(97,58,13,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_48px_rgba(97,58,13,0.24)] max-[480px]:w-full"
                >
                  {agendaAberta ? 'Fechar agenda visual' : 'Abrir agenda da clínica'}
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

            <div className={`relative transition-[min-height] duration-500 ease-out max-lg:min-h-0 ${agendaAberta ? 'min-h-[31rem] lg:min-h-0' : 'min-h-0'}`}>

              <div
                className={`${agendaAberta ? 'relative inset-auto' : 'absolute inset-0'} transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] max-lg:relative max-lg:inset-auto ${
                  agendaAberta ? 'translate-x-0 opacity-100' : 'translate-x-[108%] opacity-0 max-lg:hidden'
                }`}
              >
                <FormularioAgendamento
                  carregandoDisponibilidade={agendamento.carregandoDisponibilidade}
                  carregandoServicos={agendamento.carregandoServicos}
                  dataCalendario={agendamento.dataCalendario}
                  dadosFormulario={agendamento.dadosFormulario}
                  diaSelecionado={agendamento.diaSelecionado}
                  diasDisponiveis={agendamento.diasDisponiveis}
                  erroDisponibilidade={agendamento.erroDisponibilidade}
                  erroServicos={agendamento.erroServicos}
                  formatarTelefone={agendamento.formatarTelefone}
                  horarioSelecionado={agendamento.horarioSelecionado}
                  onAlterarCalendario={agendamento.alterarCalendario}
                  onAlterarCampo={agendamento.alterarCampo}
                  onAlterarProcedimento={agendamento.alterarProcedimento}
                  onEnviar={agendamento.enviarAgendamento}
                  onSelecionarDia={agendamento.selecionarDia}
                  opcoesProcedimento={agendamento.opcoesProcedimento}
                  procedimentoSelecionado={agendamento.procedimentoSelecionado}
                  resumoAgendamento={agendamento.resumoAgendamento}
                  statusEnvio={agendamento.statusEnvio}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecaoAgendamento;
