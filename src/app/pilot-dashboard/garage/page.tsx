import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PilotGarage() {
  return (
    <>
      <Navbar variant="pilot" activeLink="garage" />

      <main className="w-full max-w-screen-2xl mx-auto px-8 py-12 lg:py-20">
        {/* Hero & Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8">
            <span className="font-['Space_Grotesk'] text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">Fleet Management Console</span>
            <h1 className="font-['Inter'] font-extrabold text-5xl lg:text-7xl tracking-tighter text-on-surface-variant leading-none mb-6">Pilot Garage</h1>
            <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">Streamline your aerial operations. Register your fleet, monitor airworthiness, and manage FAA compliance with precision engineering controls.</p>
          </div>
          <div className="lg:col-span-4 flex items-end justify-end">
            <div className="bg-surface-container-low p-6 rounded-xl flex items-center gap-6 w-full lg:w-auto">
              <div className="text-right">
                <div className="font-['Space_Grotesk'] text-sm text-on-surface-variant">Active Fleet</div>
                <div className="font-['Space_Grotesk'] text-3xl font-bold">12 Ships</div>
              </div>
              <div className="h-12 w-px bg-outline-variant/30" />
              <div className="text-right">
                <div className="font-['Space_Grotesk'] text-sm text-on-surface-variant">Fleet Status</div>
                <div className="font-['Space_Grotesk'] text-3xl font-bold text-secondary">Ready</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column: Form & Actions */}
          <div className="lg:col-span-7 space-y-10">
            {/* AirCar Specifications Form */}
            <section className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-[0px_24px_48px_rgba(19,27,46,0.04)]">
              <div className="flex items-center gap-3 mb-10">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>flight_takeoff</span>
                <h2 className="font-['Inter'] font-bold text-2xl">AirCar Specifications</h2>
              </div>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-on-surface-variant">Manufacturer (Make)</label>
                    <select className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-secondary/40 transition-all">
                      <option>Klein Vision</option>
                      <option>AeroMobil</option>
                      <option>Alef Aeronautics</option>
                      <option>Honda eVTOL</option>
                      <option>Joby Aviation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-on-surface-variant">Model Designation</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg p-4 text-on-surface focus:ring-2 focus:ring-secondary/40 transition-all placeholder:text-outline" placeholder="e.g. AirCar Gen-V" type="text" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-on-surface-variant">Take-off Configuration</label>
                    <div className="flex bg-surface-container-low p-1.5 rounded-lg">
                      <button className="flex-1 bg-surface-container-lowest shadow-sm py-2.5 rounded-sm font-['Space_Grotesk'] text-sm font-bold text-secondary transition-all" type="button">VTOL</button>
                      <button className="flex-1 py-2.5 rounded-sm font-['Space_Grotesk'] text-sm font-medium text-on-surface-variant hover:text-on-surface transition-all" type="button">Runway</button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-on-surface-variant">Payload Capacity (KG)</label>
                    <div className="relative">
                      <input className="w-full bg-surface-container-low border-none rounded-lg p-4 font-['Space_Grotesk'] font-bold text-on-surface focus:ring-2 focus:ring-secondary/40 transition-all" placeholder="500" type="number" />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 font-['Space_Grotesk'] text-xs font-bold text-outline-variant">KG</span>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <button className="w-full bg-primary-container text-white font-['Space_Grotesk'] text-sm font-bold tracking-tight py-5 rounded-lg hover:bg-black transition-all flex justify-center items-center gap-3" type="submit">
                    <span className="material-symbols-outlined text-lg">add_circle</span>
                    Register to Fleet
                  </button>
                </div>
              </form>
            </section>

            {/* Compliance Records */}
            <section className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-[0px_24px_48px_rgba(19,27,46,0.04)]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
                  <h2 className="font-['Inter'] font-bold text-2xl">Compliance Records</h2>
                </div>
                <span className="font-['Space_Grotesk'] text-[10px] bg-secondary-fixed text-on-secondary-fixed px-2 py-1 rounded-sm font-bold uppercase tracking-tighter">SECURE CLOUD STORAGE</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group relative border-2 border-dashed border-outline-variant/30 rounded-xl p-8 text-center hover:bg-surface-container-low transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-secondary mb-4 block transition-colors">upload_file</span>
                  <h3 className="font-['Inter'] font-bold text-sm mb-1">FAA Pilot License</h3>
                  <p className="text-xs text-on-surface-variant font-['Space_Grotesk']">Drag &amp; drop PDF or high-res JPG</p>
                  <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                </div>
                <div className="group relative border-2 border-dashed border-outline-variant/30 rounded-xl p-8 text-center hover:bg-surface-container-low transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-secondary mb-4 block transition-colors">engineering</span>
                  <h3 className="font-['Inter'] font-bold text-sm mb-1">Maintenance Records</h3>
                  <p className="text-xs text-on-surface-variant font-['Space_Grotesk']">Service logs &amp; certifications</p>
                  <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Visual Feedback & Analytics */}
          <div className="lg:col-span-5 space-y-10">
            {/* Featured Fleet Item */}
            <div className="relative group aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYy6lnCMj_uVkftBaQKOKBQMrbH7ouHPGOHAkoC2Z9S8KXUGE5vPxYgqUew2e2j--qylbBTpEyXWCw6y110duwhtPZDQycxEo_bZX8XArA5temxpGcND14tD-tCRYaZ_hGIovGt8w_uI-BG-QGVNOKQr9rmy2L3G0zeSioukEnfExj1kwBx2a5i5NijBA-VDZmSRyji3yXHxcy1i3PPzJuHJ5Btlpr-v3R2DGGsc7BmOZyjF5YrydqRmDk5vsmwAlT343_qd_MExk"
                alt="Futuristic AirCar in hangar"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-secondary-container" />
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-secondary-container uppercase tracking-widest">Active Vessel</span>
                </div>
                <h3 className="text-white font-['Inter'] font-extrabold text-3xl mb-4 tracking-tight leading-tight">Vuela Horizon-9<br />Precision Interceptor</h3>
                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <span className="block font-['Space_Grotesk'] text-[10px] text-white/60 uppercase">Max Alt</span>
                    <span className="font-['Space_Grotesk'] text-white font-bold text-lg italic">18,500<small className="text-[10px] ml-1 opacity-60">FT</small></span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <span className="block font-['Space_Grotesk'] text-[10px] text-white/60 uppercase">Cruise Speed</span>
                    <span className="font-['Space_Grotesk'] text-white font-bold text-lg italic">240<small className="text-[10px] ml-1 opacity-60">MPH</small></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fleet Performance */}
            <section className="bg-primary-container text-white rounded-xl p-8 shadow-xl">
              <h3 className="font-['Inter'] font-bold text-lg mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container">query_stats</span>
                Fleet Performance
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-['Space_Grotesk'] text-xs text-on-primary-container font-bold uppercase tracking-widest mb-1">Fuel Efficiency</p>
                    <p className="font-['Space_Grotesk'] text-3xl font-bold">94.2%</p>
                  </div>
                  <div className="h-10 w-24 bg-surface-container-highest/10 rounded-sm overflow-hidden flex items-end px-1 gap-1">
                    <div className="bg-secondary-container h-1/2 w-full" />
                    <div className="bg-secondary-container h-3/4 w-full" />
                    <div className="bg-secondary-container h-2/3 w-full" />
                    <div className="bg-secondary-container h-full w-full" />
                    <div className="bg-secondary-container h-5/6 w-full" />
                  </div>
                </div>
                <div className="h-px bg-white/5 w-full" />
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-['Space_Grotesk']">
                    <span className="text-on-primary-container">Next Maintenance</span>
                    <span className="font-bold">14 Days</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-secondary-container h-full w-[85%]" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
