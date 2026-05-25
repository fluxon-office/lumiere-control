import { heroImage, heroMobileImage } from '../../assets/imagensLumiere';

function SecaoHero({ heroCardRef }) {
  return (
    <section id="home" className="relative px-0 pb-0 pt-[calc(var(--hero-navbar-offset)+0.32rem)]">
      <div className="mx-auto max-w-none">
        <div className="relative min-h-[calc(100vh-var(--hero-navbar-offset))] overflow-hidden bg-[var(--color-ink)]">
          <div ref={heroCardRef} className="absolute inset-0">
            <picture>
              <source media="(max-width: 767px)" srcSet={heroMobileImage} />
              <img
                src={heroImage}
                alt="Lumiere Clinic hero"
                loading="eager"
                className="block h-full w-full object-cover object-[62%_center] max-[1180px]:object-[68%_center] max-md:object-center"
              />
            </picture>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(120,88,29,0.22)_0%,rgba(125,91,30,0.32)_14%,rgba(96,69,24,0.44)_30%,rgba(65,46,18,0.54)_46%,rgba(49,35,16,0.36)_62%,rgba(32,24,12,0.14)_80%,rgba(11,28,44,0)_100%)] max-[1180px]:bg-[linear-gradient(180deg,rgba(11,28,44,0.12)_0%,rgba(52,38,19,0.22)_34%,rgba(35,25,13,0.78)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.14),transparent_24%)]" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(94,68,23,0)_0%,rgba(104,75,26,0.08)_24%,rgba(116,84,28,0.18)_48%,rgba(126,92,31,0.26)_72%,rgba(136,99,33,0.34)_100%)]" />
          </div>
          <div className="relative z-10 flex min-h-[calc(100vh-var(--hero-navbar-offset))] items-center pt-12 max-[1180px]:min-h-[calc(100svh-var(--hero-navbar-offset))] max-[1180px]:items-stretch max-[1180px]:pb-10 max-[1180px]:pt-10 sm:pt-14 min-[1181px]:pt-16">
            <div className="flex max-w-[37rem] flex-col px-4 max-[1180px]:min-h-[calc(100svh-var(--hero-navbar-offset)-5rem)] max-[1180px]:max-w-[42rem] max-[1180px]:text-left sm:px-6 min-[1181px]:ml-[clamp(2rem,6vw,5.5rem)] min-[1181px]:px-0">
              <p
                data-hero-text
                className="mb-7 inline-flex items-center gap-3 border-b border-[rgba(255,255,255,0.22)] pb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.74)] max-[1180px]:mb-2 md:max-[1180px]:text-[rgba(255,255,255,0.62)] max-[480px]:tracking-[0.2em]"
              >
                <span className="h-px w-10 bg-[rgba(212,175,55,0.76)]" />
                Lumiere Clinic
              </p>
              <h1
                data-hero-text
                className="max-w-[10.5ch] font-['Inter'] text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.05em] text-white max-[1180px]:max-w-[11.5ch] max-[1180px]:text-[clamp(3rem,10vw,5rem)] max-md:mt-0 max-md:leading-[0.98] md:max-[1180px]:mt-8 md:max-[1180px]:text-white/72 max-[480px]:text-[clamp(2.45rem,13vw,3.35rem)] sm:text-[4.2rem] min-[1181px]:text-[5.4rem]"
              >
                Estética facial
                <br />
                corporal e
                <br />
                pele com
                <br />
                presença premium.
              </h1>
              <div className="max-[1180px]:mt-auto">
                <p
                  data-hero-text
                  className="mt-7 max-w-lg text-[15px] leading-7 text-[rgba(255,255,255,0.74)] max-md:mx-auto max-md:text-center max-[1180px]:text-[clamp(0.96rem,2.6vw,1.08rem)] max-[1180px]:leading-8 md:max-[1180px]:text-left md:max-[1180px]:text-[rgba(255,255,255,0.64)] sm:text-[17px] sm:leading-8"
                >
                  Uma experiência pensada para transmitir confiança, refinamento e clareza desde o primeiro contato.
                </p>
                <div data-hero-text className="mt-9 flex flex-col gap-4 max-md:items-center md:max-[1180px]:items-start sm:flex-row sm:max-md:justify-center md:max-[1180px]:justify-start">
                  <a
                    href="#servicos"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.05)] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-[rgba(255,255,255,0.32)] hover:bg-[rgba(255,255,255,0.09)] md:max-[1180px]:text-white/82 max-[480px]:w-full"
                  >
                    Conhecer tratamentos
                  </a>
                </div>
                <div
                  data-hero-text
                  className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.62)] max-md:justify-center md:max-[1180px]:flex-nowrap md:max-[1180px]:justify-start md:max-[1180px]:gap-x-5 md:max-[1180px]:text-[rgba(255,255,255,0.52)] max-[480px]:mt-8 max-[480px]:gap-x-4 max-[480px]:text-[10px] sm:text-[13px]"
                >
                  <span>Atendimento humanizado</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[rgba(212,175,55,0.8)]" />
                  <span>Estética avançada</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[rgba(255,255,255,0.42)]" />
                  <span>Jornada organizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecaoHero;
