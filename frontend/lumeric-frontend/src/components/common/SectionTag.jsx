function SectionTag({ children, dark = false }) {
  return (
    <p
      className={`inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] ${
        dark
          ? 'border-[rgba(212,175,55,0.22)] bg-[rgba(212,175,55,0.08)] text-[rgba(255,248,230,0.75)]'
          : 'border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.06)] text-[var(--color-gold-deep)]'
      }`}
    >
      {children}
    </p>
  );
}

export default SectionTag;
