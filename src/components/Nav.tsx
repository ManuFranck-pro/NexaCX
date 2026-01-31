export function Nav() {
  const items = [
    { href: "#services", label: "Services" },
    { href: "#secteurs", label: "Secteurs" },
    { href: "#equipe", label: "Équipe" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-600 text-white font-black">N</span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">Nexa CX Africa</div>
            <div className="text-xs text-slate-500">L’expérience client intelligente</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          {items.map(i => (
            <a key={i.href} href={i.href} className="hover:text-slate-900">{i.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="rounded-2xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700">
            Demander une démo
          </a>
        </div>
      </div>
    </header>
  );
}
