import { womanLumiereImage } from '../../assets/lumiereImages';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '../icons/LandingIcons';

function AboutSection({ aboutTestimonials }) {
  return (
    <section id="sobre" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[84rem]" data-reveal>
        <div className="relative overflow-hidden bg-[#5D4A3B]">
          <img
            src={womanLumiereImage}
            alt="Mulher em destaque na secao sobre Lumiere"
            className="h-[17rem] w-full object-cover opacity-56 sm:h-[21rem] lg:h-[23rem]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(72,53,42,0.64)_0%,rgba(77,56,43,0.58)_35%,rgba(62,43,34,0.44)_100%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="max-w-4xl font-serif text-[2.4rem] italic leading-none text-white sm:text-[3.1rem] lg:text-[3.6rem]">
              Me acompanhe nas redes sociais.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(255,255,255,0.84)] sm:text-[1.1rem]">
              Acompanhe-nos nas redes sociais para ficar por dentro das novidades, dicas de cuidados com a pele e tendencias em beleza.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram Lumiere Clinic"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.94)] text-[var(--color-ink)] transition duration-300 hover:scale-[1.04]"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook Lumiere Clinic"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.94)] text-[var(--color-ink)] transition duration-300 hover:scale-[1.04]"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn Lumiere Clinic"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.94)] text-[var(--color-ink)] transition duration-300 hover:scale-[1.04]"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="px-2 pt-16 text-center sm:px-4 lg:px-8">
          <p className="text-[1.1rem] font-medium text-[var(--color-gold-deep)] sm:text-[1.3rem]">
            O que fazemos!
          </p>
          <h3 className="mx-auto mt-2 max-w-6xl text-[2.2rem] font-medium leading-[1.14] tracking-[-0.035em] text-[var(--color-ink)] sm:text-[3rem] lg:text-[3.65rem]">
            Proporcionamos cuidados esteticos personalizados com tecnologia de ponta
          </h3>
        </div>

        <div className="mt-10 border-t border-[rgba(212,175,55,0.16)] px-2 pt-7 sm:px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {aboutTestimonials.map((item, index) => (
              <article key={item.author} className="text-center">
                <div className="mb-7 flex justify-center gap-3">
                  {Array.from({ length: 5 }, (_, dotIndex) => (
                    <span
                      key={`${index}-${dotIndex}`}
                      className="h-[3px] w-[3px] rounded-full bg-[rgba(212,175,55,0.68)]"
                    />
                  ))}
                </div>
                <p className="mx-auto max-w-[23rem] text-[1.02rem] leading-10 text-[rgba(44,44,44,0.78)]">
                  â€œ{item.quote}â€
                </p>
                <p className="mt-8 font-serif text-[1.8rem] italic text-[var(--color-ink)]">
                  {item.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
