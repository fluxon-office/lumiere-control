function FooterColumn({ title, items }) {
  return (
    <div>
      <p className="font-['Inter'] text-2xl font-semibold text-white">{title}</p>
      <div className="mt-4 space-y-3 text-sm text-[rgba(255,255,255,0.62)]">
        {items.map(([label, href]) => (
          <a key={label} href={href} className="block transition duration-300 hover:text-[var(--color-gold)]">
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FooterColumn;
