import { ChevronLeftIcon, ChevronRightIcon } from '../icons/LandingIcons';

function ServicesSection({
  highlightedServices,
  serviceCarouselStart,
  serviceCarouselTrackRef,
  servicePages,
  whatsappLink,
  onPrevious,
  onNext,
}) {
  return (
    <section id="servicos" className="px-4 py-24 max-md:py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl" data-reveal>
        <div className="text-center">
          <p className="text-[1rem] font-medium text-[var(--color-gold-deep)] sm:text-[1.15rem]">
            Beleza, inovaÃ§Ã£o e sofisticaÃ§Ã£o
          </p>
          <h2 className="mx-auto mt-3 max-w-4xl text-[2.35rem] font-medium leading-[1.08] tracking-[-0.04em] text-[var(--color-ink)] max-lg:text-[clamp(2.15rem,7vw,3.25rem)] sm:text-[3.4rem]">
            Tecnologias para todas as soluÃ§Ãµes
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-[var(--color-muted)] sm:text-[1.12rem]">
            ConheÃ§a nossa abordagem em estÃ©tica com tecnologia avanÃ§ada, proporcionando cuidados personalizados para atender Ã s suas necessidades.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-[auto_1fr_auto] items-center gap-8 max-lg:grid-cols-[1fr_auto_auto_1fr] max-lg:gap-x-5 max-lg:gap-y-8 lg:gap-14">
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Ver serviÃ§os anteriores"
            className="flex h-12 w-12 items-center justify-center self-center rounded-full border border-[rgba(181,137,47,0.22)] bg-[linear-gradient(180deg,#D4AF37_0%,#C89A33_100%)] text-white shadow-[0_14px_30px_rgba(181,137,47,0.18)] transition duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(181,137,47,0.24)] active:scale-[0.96] max-lg:col-start-2 max-lg:row-start-2 lg:mr-6"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <div
            ref={serviceCarouselTrackRef}
            className={`services-carousel-grid grid gap-x-8 gap-y-10 max-lg:col-span-4 max-lg:row-start-1 max-lg:w-full max-lg:max-w-3xl max-lg:justify-self-center ${
              highlightedServices.length >= 4 ? 'justify-center md:justify-stretch' : 'justify-center'
            }`}
            style={{
              gridTemplateColumns:
                highlightedServices.length >= 4
                  ? `repeat(${highlightedServices.length}, minmax(0, 1fr))`
                  : `repeat(${highlightedServices.length}, minmax(12.75rem, 14.6rem))`,
            }}
          >
            {highlightedServices.map((service) => (
              <article key={`${serviceCarouselStart}-${service.title}`} data-service-slide className="grid content-start justify-items-center text-center">
                <div className="aspect-[0.84] w-full overflow-hidden border border-[rgba(11,28,44,0.08)] bg-[linear-gradient(180deg,#F6F2EB_0%,#ECE5D9_100%)] shadow-[0_14px_30px_rgba(12,24,38,0.06)]">
                  <img
                    src={service.image}
                    alt={service.imageAlt ?? service.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-6 flex min-h-[5rem] items-start justify-center text-center text-[1.58rem] font-medium leading-[1.14] tracking-[-0.03em] text-[var(--color-ink)]">
                  {service.title === 'Microagulhamento' ? (
                    <>
                      Micro
                      <br />
                      agulhamento
                    </>
                  ) : (
                    service.title
                  )}
                </h3>
                <p
                  className="mt-4 flex min-h-[8.75rem] items-start justify-center text-justify text-sm leading-7 text-[var(--color-muted)]"
                  style={{ textJustify: 'inter-word' }}
                >
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={onNext}
            aria-label="Ver prÃ³ximos serviÃ§os"
            className="flex h-12 w-12 items-center justify-center self-center rounded-full border border-[rgba(181,137,47,0.22)] bg-[linear-gradient(180deg,#D4AF37_0%,#C89A33_100%)] text-white shadow-[0_14px_30px_rgba(181,137,47,0.18)] transition duration-300 hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(181,137,47,0.24)] active:scale-[0.96] max-lg:col-start-3 max-lg:row-start-2 lg:ml-6"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {Array.from({ length: servicePages.length }, (_, index) => (
            <span
              key={index}
              className={`h-2.5 w-2.5 rounded-full ${
                index === serviceCarouselStart ? 'bg-[var(--color-gold)]' : 'bg-[rgba(212,175,55,0.24)]'
              }`}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-gold)] px-8 py-3 text-[1.12rem] font-medium text-white transition duration-300 hover:bg-[var(--color-gold-deep)] max-[480px]:w-full"
          >
            Agende sua consulta!
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
