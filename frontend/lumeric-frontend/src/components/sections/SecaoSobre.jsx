import { womanLumiereImage } from '../../assets/imagensLumiere';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '../icons/LandingIcons';

function SecaoSobre({ aboutTestimonials }) {
  return (
    <section id="sobre" className="py-20 max-md:py-16">
      <div data-reveal>
        <div className="relative overflow-hidden bg-[#5D4A3B]">
          <img
            src={womanLumiereImage}
            alt="Mulher em destaque na seção sobre Lumiere"
            loading="lazy"
            className="h-[17rem] w-full object-cover object-[center_28%] opacity-56 sm:h-[21rem] lg:h-[23rem]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(72,53,42,0.64)_0%,rgba(77,56,43,0.58)_35%,rgba(62,43,34,0.44)_100%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="max-w-4xl font-serif text-[2.4rem] italic leading-none text-white max-[480px]:text-[2rem] sm:text-[3.1rem] lg:text-[3.6rem]">
              Me acompanhe nas redes sociais.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(255,255,255,0.84)] sm:text-[1.1rem]">
              Acompanhe-nos nas redes sociais para ficar por dentro das novidades, dicas de cuidados com a pele e tendências em beleza.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Lumiere Clinic"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.94)] text-[var(--color-ink)] transition duration-300 hover:scale-[1.04]"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Lumiere Clinic"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.94)] text-[var(--color-ink)] transition duration-300 hover:scale-[1.04]"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Lumiere Clinic"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.94)] text-[var(--color-ink)] transition duration-300 hover:scale-[1.04]"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[84rem] px-6 pt-16 text-center sm:px-10 lg:px-18">
          <p className="text-[1.1rem] font-medium text-[var(--color-gold-deep)] sm:text-[1.3rem]">
            O que fazemos
          </p>
          <h3 className="mx-auto mt-2 max-w-6xl text-[2.2rem] font-medium leading-[1.14] tracking-[-0.035em] text-[var(--color-ink)] max-lg:text-[clamp(2.05rem,6.5vw,3.1rem)] sm:text-[3rem] lg:text-[3.65rem]">
            Proporcionamos cuidados estéticos personalizados com tecnologia de ponta.
          </h3>
        </div>

        <div className="mx-auto mt-10 max-w-[84rem] border-t border-[rgba(212,175,55,0.16)] px-6 pt-7 sm:px-10 lg:px-18">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:grid-cols-3 lg:gap-12">
            {aboutTestimonials.map((item, index) => (
              <article key={item.author} className="flex h-full min-h-[24rem] flex-col text-center">
                <div className="mb-6 flex justify-center gap-3">
                  {Array.from({ length: 5 }, (_, dotIndex) => (
                    <span
                      key={`${index}-${dotIndex}`}
                      className="h-[3px] w-[3px] rounded-full bg-[rgba(212,175,55,0.68)]"
                    />
                  ))}
                </div>
                <blockquote className="mx-auto flex flex-1 max-w-[23rem] items-start justify-center">
                  <p className="text-[1rem] leading-8 text-[rgba(44,44,44,0.78)] sm:text-[1.03rem] sm:leading-9">
                    “{item.quote}”
                  </p>
                </blockquote>
                <p className="mt-8 border-t border-[rgba(212,175,55,0.16)] pt-6 font-serif text-[1.8rem] italic leading-none text-[var(--color-ink)]">
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

export default SecaoSobre;
