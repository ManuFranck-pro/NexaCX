export function Agents() {
  const agents = [
    {
      name: "Aïssatou",
      role: "Customer Support",
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Mamadou",
      role: "CX Agent",
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328f1b8a?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Sarah",
      role: "Chatbot Supervisor",
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {agents.map((a) => (
        <div key={a.name} className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200/60">
          <div className="flex items-center gap-4">
            <img
              src={a.img}
              alt={a.name}
              className="h-16 w-16 rounded-2xl object-cover"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-slate-900">{a.name}</p>
              <p className="text-sm text-slate-500">{a.role}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Support humain rapide, ton chaleureux, et suivi des demandes sensibles.
          </p>
        </div>
      ))}
    </div>
  );
}
