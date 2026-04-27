import SectionTag from '../common/SectionTag';

function FaqSection({ activeFaq, faqItems, onToggleFaq }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl" data-reveal>
        <SectionTag>FAQ</SectionTag>
        <h2 className="section-title mt-4 text-[var(--color-ink)]">
          Perguntas frequentes sobre atendimento, procedimentos e agendamento.
        </h2>
        <div className="mt-10 space-y-3">
          {faqItems.map((item, index) => {
            const open = activeFaq === index;

            return (
              <article
                key={item.question}
                className={`overflow-hidden rounded-[1.35rem] border transition duration-300 ${
                  open
                    ? 'border-[rgba(212,175,55,0.28)] bg-white shadow-[0_22px_44px_rgba(12,24,38,0.09)]'
                    : 'border-slate-200/80 bg-white/75'
                }`}
              >
                <button
                  type="button"
                  onClick={() => onToggleFaq(index, open)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="pr-4 text-sm font-semibold leading-7 text-[var(--color-ink)] sm:text-base">{item.question}</span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xl transition ${
                      open
                        ? 'border-[rgba(212,175,55,0.35)] bg-[rgba(212,175,55,0.12)] text-[var(--color-gold-deep)]'
                        : 'border-slate-200 text-slate-500'
                    }`}
                  >
                    {open ? '-' : '+'}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-[var(--color-muted)] sm:px-6 sm:text-[15px]">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
