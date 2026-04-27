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
    <section id="servicos" className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl" data-reveal>
        <div className="text-center">
          <p className="text-[1rem] font-medium text-[var(--color-gold-deep)] sm:text-[1.15rem]">
            Beleza, inovacao e sofisticacao
          </p>
          <h2 className="mx-auto mt-3 max-w-4xl text-[2.35rem] font-medium leading-[1.08] tracking-[-0.04em] text-[var(--color-ink)] sm:text-[3.4rem]">
            Tecnologias para todas as solucoes
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-[var(--color-muted)] sm:text-[1.12rem]">
            Conheca nossa abordagem em estetica com tecnologia avancada, proporcionando cuidados personalizados para atender as suas necessidades.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-[auto_1fr_auto] items-center gap-8 lg:gap-14">
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Ver servicos anteriores"
            className="flex h-12 w-12 items-center justify-center self-center rounded-full border border-[rgba(181,137,47,0.22)] bg-[linear-gradient(180deg,#D4AF37_0%,#C89A33_100%)] text-white shadow-[0_14px_30px_rgba(181,137,47,0.18)] transition duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(181,137,47,0.24)] active:scale-[0.96] lg:mr-6"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <div
            ref={serviceCarouselTrackRef}
            className={`grid gap-x-8 gap-y-10 ${
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
                <div className="aspect-[0.84] w-full border border-[rgba(11,28,44,0.08)] bg-[linear-gradient(180deg,#F6F2EB_0%,#ECE5D9_100%)] shadow-[0_14px_30px_rgba(12,24,38,0.06)]">
                  <div className="flex h-full items-center justify-center px-6 text-center">
                    <span className="text-sm uppercase tracking-[0.22em] text-[rgba(11,28,44,0.36)]">
                      Imagem do servico
                    </span>
                  </div>
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
            aria-label="Ver proximos servicos"
            className="flex h-12 w-12 items-center justify-center self-center rounded-full border border-[rgba(181,137,47,0.22)] bg-[linear-gradient(180deg,#D4AF37_0%,#C89A33_100%)] text-white shadow-[0_14px_30px_rgba(181,137,47,0.18)] transition duration-300 hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(181,137,47,0.24)] active:scale-[0.96] lg:ml-6"
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
            className="inline-flex min-h-14 items-center rounded-full bg-[var(--color-gold)] px-8 py-3 text-[1.12rem] font-medium text-white transition duration-300 hover:bg-[var(--color-gold-deep)]"
          >
            Agende sua consulta!
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
