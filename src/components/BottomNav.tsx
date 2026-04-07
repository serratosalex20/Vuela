import Link from "next/link";

interface BottomNavProps {
  activeTab?: "explore" | "flights" | "earnings" | "garage";
}

export default function BottomNav({ activeTab = "explore" }: BottomNavProps) {
  const tabs = [
    { id: "explore" as const, icon: "explore", label: "Explore", href: "/rider-dashboard" },
    { id: "flights" as const, icon: "flight_class", label: "Flights", href: "#" },
    { id: "earnings" as const, icon: "payments", label: "Earnings", href: "#" },
    { id: "garage" as const, icon: "precision_manufacturing", label: "Garage", href: "/pilot-dashboard/garage" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full flex justify-around p-4 pb-8 z-50 bg-white/80 backdrop-blur-2xl rounded-t-3xl border-t border-slate-200/10 shadow-[0px_-12px_40px_rgba(0,0,0,0.12)]">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.href}
          className={`flex flex-col items-center gap-1 ${
            activeTab === tab.id
              ? "text-sky-600 bg-sky-50 rounded-xl px-4 py-2"
              : "text-slate-400 hover:text-sky-500 transition-colors"
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={activeTab === tab.id ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            {tab.icon}
          </span>
          <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest">
            {tab.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
