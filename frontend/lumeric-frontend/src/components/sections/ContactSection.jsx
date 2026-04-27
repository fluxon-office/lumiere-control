import SectionTag from '../common/SectionTag';
import { WhatsAppIcon } from '../icons/LandingIcons';

function ContactSection({ locationAddress, mapsEmbedLink, mapsLink, whatsappLink }) {
  return (
    <section id="contato" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center" data-reveal>
        <div>
          <SectionTag>Localizacao</SectionTag>
          <h2 className="section-title mt-4 text-[var(--color-ink)]">
            Presenca fisica clara, informacao objetiva e uma secao de contato que parece parte da experiencia.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)]">
            A Lumiere Clinic fica na {locationAddress.replace(', Sao Paulo - SP', '')}. A secao abaixo mostra o Google Maps dentro do mesmo acabamento visual da interface.
          </p>
          <div className="mt-8 rounded-[1.7rem] border border-slate-200/70 bg-white p-6 shadow-[0_18px_42px_rgba(12,24,38,0.08)]">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">Endereco</p>
            <p className="mt-4 font-['Inter'] text-3xl font-semibold text-[var(--color-ink)]">Av. Atlantica, 2113</p>
            <p className="mt-2 text-base text-[var(--color-muted)]">Jardim Tres Marias, Sao Paulo - SP</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={mapsLink} target="_blank" rel="noreferrer" className="btn-primary">Abrir no Google Maps</a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[#1FA855]/20 bg-[#25D366] px-6 py-3 text-sm font-semibold tracking-[0.04em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#20BD5C] hover:shadow-[0_18px_40px_rgba(37,211,102,0.28)] focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Solicitar atendimento
              </a>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(11,28,44,0.08)] bg-[linear-gradient(180deg,#F9F6F1_0%,#EFE9E0_100%)] p-5 shadow-[0_28px_70px_rgba(12,24,38,0.12)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.22),_transparent_28%)]" />
          <div className="relative rounded-[1.6rem] border border-[rgba(11,28,44,0.08)] bg-[linear-gradient(180deg,#18344F_0%,#0B1C2C_100%)] p-6">
            <div className="flex items-center justify-between text-[rgba(255,255,255,0.72)]">
              <span className="text-xs uppercase tracking-[0.28em]">Google Maps</span>
              <span className="rounded-full border border-white/12 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">Sao Paulo</span>
            </div>
            <div className="relative mt-6 h-[23rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
              <iframe
                title="Google Maps Lumiere Clinic"
                src={mapsEmbedLink}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
              <div className="pointer-events-none absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-[rgba(8,18,29,0.86)] px-4 py-3 text-sm text-[rgba(255,255,255,0.75)] backdrop-blur">Lumiere Clinic</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
