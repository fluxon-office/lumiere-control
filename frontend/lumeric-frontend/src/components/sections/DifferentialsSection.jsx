function DifferentialsSection({ differentials, whatsappLink }) {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl" data-reveal>
        <div className="text-center">
          <p className="text-[1rem] font-medium text-[var(--color-gold-deep)] sm:text-[1.15rem]">
            Nosso diferencial
          </p>
          <h2 className="mx-auto mt-3 max-w-5xl text-[2.35rem] font-medium leading-[1.08] tracking-[-0.04em] text-[var(--color-ink)] sm:text-[3.25rem]">
            Seu guia para beleza, bem-estar e autoestima
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-[var(--color-muted)] sm:text-[1.12rem]">
            Mudamos a vida das pessoas para melhor com atendimento de ponta, acolhimento real e uma experiencia 5 estrelas no Google que fortalece confianca, bem-estar e autoestima.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {differentials.map((item) => (
            <article key={item.title}>
              <div className="aspect-[0.96] w-full border border-[rgba(11,28,44,0.08)] bg-[linear-gradient(180deg,#F6F2EB_0%,#ECE5D9_100%)] shadow-[0_14px_30px_rgba(12,24,38,0.06)]">
                <div className="flex h-full items-center justify-center px-6 text-center">
                  <span className="text-sm uppercase tracking-[0.22em] text-[rgba(11,28,44,0.36)]">
                    Imagem do diferencial
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[0.96rem] uppercase tracking-[0.08em] text-[rgba(11,28,44,0.58)]">
                  {item.category}
                </p>
                <h3 className="mt-3 max-w-[14ch] text-[1.95rem] font-medium leading-[1.08] tracking-[-0.03em] text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[1rem] text-[rgba(107,114,128,0.92)]">
                  {item.date}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 items-center rounded-full bg-[var(--color-gold)] px-8 py-3 text-[1.12rem] font-medium text-white transition duration-300 hover:bg-[var(--color-gold-deep)]"
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
}

export default DifferentialsSection;
