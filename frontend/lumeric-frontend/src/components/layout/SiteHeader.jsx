function SiteHeader({ logoImage, menuOpen, navItems, onMenuToggle, onMenuClose }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[calc(var(--hero-navbar-offset)+0.64rem)] bg-[linear-gradient(180deg,rgba(245,241,235,0.94)_0%,rgba(242,236,228,0.88)_54%,rgba(242,236,228,0.16)_84%,transparent_100%)] backdrop-blur-xl" />
      <div className="w-full px-4 py-[0.32rem] sm:px-6 lg:px-10">
        <div className="relative flex min-h-[var(--hero-navbar-offset)] items-center border border-[rgba(212,175,55,0.16)] bg-[linear-gradient(180deg,rgba(248,244,238,0.94)_0%,rgba(244,238,230,0.9)_100%)] px-4 py-2.5 shadow-[0_10px_22px_rgba(43,30,18,0.08)] backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.9)_32%,rgba(255,255,255,0.18)_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-[linear-gradient(90deg,rgba(221,186,90,0.82)_0%,rgba(212,175,55,0.92)_50%,rgba(184,135,27,0.84)_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-[-1.1rem] h-5 bg-[linear-gradient(180deg,rgba(162,124,22,0.12)_0%,rgba(162,124,22,0.04)_55%,transparent_100%)]" />

          <a href="#home" className="flex min-w-[16rem] items-center gap-3 lg:min-w-[19rem]">
            <img
              src={logoImage}
              alt="Logo Lumiere Clinic"
              className="h-12 w-12 rounded-full object-cover shadow-[0_10px_18px_rgba(34,64,68,0.1)]"
            />
            <div className="min-w-0">
              <p className="truncate font-['Georgia'] text-[1.25rem] italic leading-none text-[#5C4A34]">
                Lumiere Clinic
              </p>
              <p className="mt-1 truncate text-[11px] font-medium leading-none text-[rgba(92,74,52,0.62)]">
                Estética facial, corporal e pele
              </p>
            </div>
          </a>

          <div className="hidden flex-1 justify-center lg:flex">
            <nav className="flex items-center gap-12">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[15px] font-medium text-[rgba(92,74,52,0.78)] transition duration-300 hover:text-[var(--color-gold-deep)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <a
              href="#agendamento"
              className="hidden min-h-[2.95rem] items-center justify-center rounded-[0.22rem] border border-[rgba(162,124,22,0.32)] bg-[linear-gradient(180deg,#E2C36D_0%,#D9B752_46%,#CDA741_100%)] px-6 text-[14px] font-semibold text-[#3E2A12] shadow-[0_8px_18px_rgba(162,124,22,0.18)] transition duration-300 hover:brightness-[1.03] lg:inline-flex"
            >
              Agendar uma avaliação
            </a>
            <button
              type="button"
              onClick={onMenuToggle}
              className="inline-flex h-12 w-12 items-center justify-center border border-[rgba(212,175,55,0.18)] bg-[rgba(255,251,245,0.9)] text-[rgba(92,74,52,0.82)] transition duration-300 hover:border-[rgba(162,124,22,0.34)] hover:text-[var(--color-gold-deep)] lg:hidden"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-current transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 bg-current transition ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block h-0.5 w-5 bg-current transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className={`px-4 transition-all duration-300 sm:px-6 lg:hidden ${menuOpen ? 'max-h-[24rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border border-t-0 border-[rgba(212,175,55,0.16)] bg-[linear-gradient(180deg,rgba(248,244,238,0.98)_0%,rgba(244,238,230,0.95)_100%)] p-4 shadow-[0_14px_24px_rgba(43,30,18,0.08)]">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 py-3 text-[15px] font-medium text-[rgba(92,74,52,0.82)] transition duration-300 hover:text-[var(--color-gold-deep)]"
                onClick={onMenuClose}
              >
                {item.label}
              </a>
            ))}
          <a
            href="#agendamento"
            className="mt-2 inline-flex min-h-[2.95rem] items-center justify-center rounded-[0.22rem] border border-[rgba(162,124,22,0.32)] bg-[linear-gradient(180deg,#E2C36D_0%,#D9B752_46%,#CDA741_100%)] px-6 text-[14px] font-semibold text-[#3E2A12] shadow-[0_8px_18px_rgba(162,124,22,0.18)]"
            onClick={onMenuClose}
          >
            Agendar uma avaliação
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
