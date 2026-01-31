import { Nav } from "../components/Nav";
import { Ribbon } from "../components/Ribbon";
import { Agents } from "../components/Agents";

const brand = {
  name: "Nexa CX Africa",
  email: "contact@nexacxafrica.com",
  whatsapp: "224600000000",
};

export default function Page() {
  return (
    <main className="w-full">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 relative">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="inline-flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700">
                  WhatsApp • Web • Telegram
                </span>
                <span className="rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold text-sky-700">
                  Chatbots + Support hybride
                </span>
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Automatisez 80% de votre support client — gardez l’humain pour le reste.
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                Nous déployons des chatbots multi-canaux et une organisation CX adaptée au marché guinéen.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  className="rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  WhatsApp
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Voir les services
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Disponible 24/7 • Français + langues locales • Reporting CSAT
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="glass rounded-3xl p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Démarrage rapide</p>
                <div className="mt-4 grid gap-3 text-sm">
                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 border border-slate-200/60">
                    <span className="text-slate-500">Canal principal</span>
                    <span className="font-semibold">WhatsApp</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 border border-slate-200/60">
                    <span className="text-slate-500">Cas d’usage</span>
                    <span className="font-semibold">FAQ • RDV • Réclamations</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 border border-slate-200/60">
                    <span className="text-slate-500">Délai</span>
                    <span className="font-semibold">Prototype → 30 jours</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 border border-slate-200/60">
                    <span className="text-slate-500">Contact</span>
                    <span className="font-semibold">{brand.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Ribbon
            badge="Ce que vous obtenez"
            title="Réponses rapides. Coûts réduits. Clients satisfaits."
            subtitle="Une approche simple, mesurable, et humaine."
          />
        </div>
      </section>

      {/* SERVICES (BG DELIMITER) */}
      <section id="services" className="bg-gradient-to-b from-white to-emerald-50/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Chatbots intelligents", "FAQ, rendez-vous, suivi de commandes, réclamations, avis clients."],
              ["Support hybride", "Le bot gère la majorité; les agents gèrent les cas complexes."],
              ["Pilotage CX", "Centralisation des canaux, historique client, CSAT et rapports."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200/60">
                <p className="font-semibold text-slate-900">{t}</p>
                <p className="mt-2 text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section id="secteurs" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Ribbon badge="Secteurs" title="Priorité Guinée (et Afrique francophone)" subtitle="Beaucoup de demandes clients, peu d’automatisation." />
          <div className="grid gap-4 md:grid-cols-5">
            {["Banques & microfinances","Cliniques & pharmacies","Écoles & universités privées","PME & commerces","ONG & projets internationaux"].map(x => (
              <div key={x} className="rounded-3xl border border-slate-200/60 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM (BG DELIMITER) */}
      <section id="equipe" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Ribbon badge="Équipe" title="Des agents humains quand ça compte" subtitle="Chaleur, empathie et suivi des cas sensibles." />
          <Agents />
        </div>
      </section>

      {/* CTA (STRONG BG) */}
      <section id="contact" className="bg-gradient-to-r from-emerald-600 to-emerald-500 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">Demandez une démo</h2>
          <p className="mt-3 text-emerald-100">
            Dites-nous votre secteur et votre canal principal. Réponse rapide.
          </p>
          <div className="mt-7 flex justify-center gap-4 flex-wrap">
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="rounded-2xl border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Email
            </a>
          </div>
          <p className="mt-6 text-sm text-emerald-100/90">
            © {new Date().getFullYear()} {brand.name}
          </p>
        </div>
      </section>
    </main>
  );
}
