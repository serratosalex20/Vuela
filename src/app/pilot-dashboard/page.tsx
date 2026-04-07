"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import { DollarSign, Plane, Star, Map, CloudLightning, CheckCircle, AlertTriangle, Settings, Calendar } from "lucide-react";

interface Insight {
  id: number;
  type: string;
  text: string;
  actionText: string;
  icon: typeof Map;
  status: string;
}

export default function PilotDashboard() {
  const [insights, setInsights] = useState<Insight[]>([
    {
      id: 1,
      type: "demand",
      text: "High demand predicted in Downtown Financial District in 45 mins due to conference ending. Suggest repositioning.",
      actionText: "Accept Reroute",
      icon: Map,
      status: "pending",
    },
    {
      id: 2,
      type: "weather",
      text: "Weather alert: Mild crosswinds expected at 1500ft near Coastal Vertiport. Adjust approach speed.",
      actionText: "Check Radar",
      icon: CloudLightning,
      status: "pending",
    },
  ]);

  const handleInsightAction = (id: number) => {
    setInsights(
      insights.map((insight) =>
        insight.id === id ? { ...insight, status: "accepted" } : insight
      )
    );
  };

  return (
    <>
      <Navbar variant="pilot" activeLink="dashboard" />

      <main className="pt-8 px-6 max-w-7xl mx-auto pb-32">
        {/* Dashboard Hero / Stats Bar */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2 flex flex-col justify-end p-8 rounded-3xl bg-primary-container text-white relative overflow-hidden h-64 shadow-xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6BFdtul2ZLlQeyhIrF-98P7nUPt6f7ZM9m0lsauSMa_10iyA_urVc20lGsKolhMDejsyXgoNorBO9tVDQFtUDxOMUwCzrhYk86Ajllu_xPmYBa4I6h-i_epNgqosRzQXVy0UWK3mZ5iJ1eJnUVEs9n2tK3IcKC1qZyzMy4UfF4wN3PCGsqLuoXjO7NGapxOF5R4OgM70LZnkXD77GBT3a29CLC9H7xq3V-tSaqi_FhrsEgws3LQMzJAgxlK-7p24T3ZypgnxBkSM"
              alt="Aerospace cockpit view"
              fill
              className="object-cover opacity-40 mix-blend-overlay"
            />
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter font-['Inter'] mb-2">
                Clear Skies, Pilot.
              </h1>
              <p className="font-['Space_Grotesk'] text-secondary-fixed opacity-80 uppercase tracking-[0.2em] text-sm">
                System Status: Optimal
              </p>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-['Space_Grotesk'] text-xs text-outline uppercase tracking-widest">Today&apos;s Earnings</p>
                <p className="text-2xl font-['Space_Grotesk'] font-bold text-on-surface">$1,482</p>
                <span className="text-secondary text-xs font-bold">+12%</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Plane className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-['Space_Grotesk'] text-xs text-outline uppercase tracking-widest">Flights Today</p>
                <p className="text-2xl font-['Space_Grotesk'] font-bold text-on-surface">4</p>
                <span className="text-outline text-xs">2 VTOL, 2 Runway</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <p className="font-['Space_Grotesk'] text-xs text-outline uppercase tracking-widest">Pilot Rating</p>
                <p className="text-2xl font-['Space_Grotesk'] font-bold text-on-surface">4.98</p>
                <span className="text-outline text-xs">124 reviews</span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* AI Copilot Insights */}
            <div className="bg-primary-container rounded-3xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary/20 p-2.5 rounded-xl">
                  <AlertTriangle className="w-5 h-5 text-secondary-container" />
                </div>
                <h2 className="text-xl font-['Inter'] font-bold">AI Copilot Insights</h2>
              </div>
              <ul className="space-y-4">
                {insights.map((insight) => {
                  const Icon = insight.icon;
                  return (
                    <li key={insight.id} className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 bg-white/10 p-5 rounded-2xl backdrop-blur-sm">
                      <div className="flex items-start gap-3 flex-1">
                        <span className="text-secondary-container font-bold mt-0.5">•</span>
                        <p className="text-sm leading-relaxed text-on-primary-container">{insight.text}</p>
                      </div>
                      {insight.status === "pending" ? (
                        <button
                          onClick={() => handleInsightAction(insight.id)}
                          className="flex items-center justify-center gap-2 bg-white text-primary-container px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-all whitespace-nowrap active:scale-[0.98]"
                        >
                          <Icon className="w-4 h-4" />
                          {insight.actionText}
                        </button>
                      ) : (
                        <div className="flex items-center justify-center gap-2 text-secondary-container px-4 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                          <CheckCircle className="w-4 h-4" />
                          Actioned
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Flight Request Card */}
            <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full">
                  <span className="animate-pulse w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest">Priority</span>
                </div>
              </div>
              <h2 className="text-2xl font-['Inter'] font-bold mb-8">Flight Request</h2>
              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center gap-2 pt-1">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    <div className="w-px h-12 bg-slate-200" />
                    <div className="w-3 h-3 rounded-sm bg-primary-container" />
                  </div>
                  <div className="flex-1 space-y-8">
                    <div>
                      <p className="font-['Space_Grotesk'] text-xs text-outline uppercase tracking-widest mb-1">Pickup</p>
                      <p className="text-xl font-bold font-['Inter']">North District Hub V1</p>
                      <p className="text-sm text-outline">Terminal B, Gate 42</p>
                    </div>
                    <div>
                      <p className="font-['Space_Grotesk'] text-xs text-outline uppercase tracking-widest mb-1">Dropoff</p>
                      <p className="text-xl font-bold font-['Inter']">Sky-Pier Residences</p>
                      <p className="text-sm text-outline">Private Pad 09</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-blue-50 text-blue-800 text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Premium</div>
                    <p className="text-2xl font-['Space_Grotesk'] font-bold">14.2 NM</p>
                    <p className="font-['Space_Grotesk'] text-xs text-outline mt-1">2 passengers</p>
                    <p className="font-['Space_Grotesk'] text-lg font-bold text-green-600 mt-2">+$342.00</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-primary-container text-white py-4 rounded-xl font-bold font-['Inter'] hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
                  ACCEPT
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button className="px-8 py-4 rounded-xl font-bold font-['Inter'] border-2 border-outline-variant text-outline hover:bg-surface-container transition-all">
                  DECLINE
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Garage Link Card */}
            <a href="/pilot-dashboard/garage" className="block bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-['Inter'] font-bold text-lg group-hover:text-secondary transition-colors">AirCar Garage</h3>
                <Settings className="w-5 h-5 text-outline group-hover:text-secondary transition-colors" />
              </div>
              <p className="text-sm text-outline mb-4">Manage your vehicles, specs, and maintenance records.</p>
              <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-2xl">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white p-1 relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD97U4GdnfkqL0D7EtI7Qe6mZKr0sYVDPRn-7ftokWMK7wUpV7pDff7ikPhFUmVjk9cVTlJacAqbp19xP-bRLoQUcYduiXeOCKbK8nPilhJQZx_Vus4SztowPe95yDyJk2xtgH_C1zd0r6HgVhS2LH8BO5MZGLGcUjpIa7hDA-tTo0wjksU0rDC93XfJ-rwY-DiDsKjwrp7b8j8InvXr-l_APYEIUZRD4OlnTLUVEObBv9a4CkcoT2STfCOSPpYxkdNP_qePIEGiLo"
                    alt="Vuela craft"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-['Inter'] font-bold text-sm">Aura Mk. III</p>
                  <p className="text-xs text-outline mb-2">ID: VL-4029-X</p>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-24 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-4/5" />
                    </div>
                    <span className="font-['Space_Grotesk'] text-[10px] font-bold">82%</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Vehicle Vitals */}
            <div className="bg-surface-container p-8 rounded-3xl">
              <h3 className="font-['Inter'] font-bold text-lg mb-6 flex items-center gap-2">
                <Plane className="w-5 h-5 text-secondary" /> Vehicle Vitals
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-4 rounded-2xl">
                  <p className="font-['Space_Grotesk'] text-xs text-outline uppercase tracking-widest mb-1">Motor Temp</p>
                  <p className="font-['Space_Grotesk'] text-xl font-bold">42°C</p>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-2xl">
                  <p className="font-['Space_Grotesk'] text-xs text-outline uppercase tracking-widest mb-1">Next Maint.</p>
                  <p className="font-['Space_Grotesk'] text-xl font-bold">128H</p>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-2xl">
                  <p className="font-['Space_Grotesk'] text-xs text-outline uppercase tracking-widest mb-1">Alt Ceiling</p>
                  <p className="font-['Space_Grotesk'] text-xl font-bold">18.5K FT</p>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-2xl">
                  <p className="font-['Space_Grotesk'] text-xs text-outline uppercase tracking-widest mb-1">Range Left</p>
                  <p className="font-['Space_Grotesk'] text-xl font-bold">122 MI</p>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-['Inter'] font-bold text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary" /> Today&apos;s Schedule
                </h3>
                <button className="text-secondary font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest">View Full</button>
              </div>
              <div className="space-y-4">
                {[
                  { time: "14:00", name: "Downtown Shuttle", id: "#4021", fare: "$85.00", active: true },
                  { time: "15:30", name: "Harbor Crossing", id: "#4024", fare: "$124.00", active: false },
                  { time: "17:15", name: "Airport Express", id: "#4029", fare: "$342.00", active: false },
                ].map((flight) => (
                  <div key={flight.id} className={`flex items-center gap-4 group cursor-pointer p-3 rounded-xl hover:bg-surface-container-low transition-all ${!flight.active ? "opacity-60 hover:opacity-100" : ""}`}>
                    <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center font-['Space_Grotesk'] font-bold text-xs">
                      {flight.time}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">{flight.name}</p>
                      <p className="text-xs text-outline">{flight.id}</p>
                    </div>
                    <p className="font-['Space_Grotesk'] font-bold text-sm text-green-600">{flight.fare}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav activeTab="explore" />
    </>
  );
}
