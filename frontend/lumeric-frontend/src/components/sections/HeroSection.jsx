import { heroImage } from '../../assets/lumiereImages';

function HeroSection({ heroCardRef }) {
  return (
    <section id="home" className="relative px-0 pb-0 pt-[calc(var(--hero-navbar-offset)+0.32rem)]">
      <div className="mx-auto max-w-none">
        <div className="relative min-h-[calc(100vh-var(--hero-navbar-offset))] overflow-hidden bg-[var(--color-ink)]">
          <div ref={heroCardRef} className="absolute inset-0">
            <img
              src={heroImage}
              alt="Lumiere Clinic hero"
              className="block h-full w-full object-cover object-[64%_16%]"
            />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(120,88,29,0.22)_0%,rgba(125,91,30,0.32)_14%,rgba(96,69,24,0.44)_30%,rgba(65,46,18,0.54)_46%,rgba(49,35,16,0.36)_62%,rgba(32,24,12,0.14)_80%,rgba(11,28,44,0)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.14),transparent_24%)]" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(94,68,23,0)_0%,rgba(104,75,26,0.08)_24%,rgba(116,84,28,0.18)_48%,rgba(126,92,31,0.26)_72%,rgba(136,99,33,0.34)_100%)]" />
          </div>
          <div className="relative z-10 flex min-h-[calc(100vh-var(--hero-navbar-offset))] items-center pt-12 sm:pt-14 lg:pt-16">
            <div className="max-w-[37rem] px-4 sm:px-6 lg:ml-[clamp(2rem,6vw,5.5rem)] lg:px-0">
              <p
                data-hero-text
                className="mb-7 inline-flex items-center gap-3 border-b border-[rgba(255,255,255,0.22)] pb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.74)]"
              >
                <span className="h-px w-10 bg-[rgba(212,175,55,0.76)]" />
                Lumiere Clinic
              </p>
              <h1
                data-hero-text
                className="max-w-[10.5ch] font-['Inter'] text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-[4.2rem] lg:text-[5.4rem]"
              >
                Estetica facial,
                <br />
                corporal e
                <br />
                pele com
                <br />
                presenca premium.
              </h1>
              <p
                data-hero-text
                className="mt-7 max-w-lg text-[15px] leading-7 text-[rgba(255,255,255,0.74)] sm:text-[17px] sm:leading-8"
              >
                Uma experiencia pensada para transmitir confianca, refinamento e clareza desde o primeiro contato.
              </p>
              <div data-hero-text className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.05)] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-[rgba(255,255,255,0.32)] hover:bg-[rgba(255,255,255,0.09)]"
                >
                  Conhecer tratamentos
                </a>
              </div>
              <div
                data-hero-text
                className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.62)] sm:text-[13px]"
              >
                <span>Atendimento humanizado</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[rgba(212,175,55,0.8)]" />
                <span>Estetica avancada</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[rgba(255,255,255,0.42)]" />
                <span>Jornada organizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
