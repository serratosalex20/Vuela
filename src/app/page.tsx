import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar variant="landing" activeLink="book" />

      <main className="flex-1">
        {/* ============================================
            HERO SECTION
        ============================================ */}
        <section className="relative w-full max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-16 pb-20">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center max-w-xl">
            <span className="font-['Space_Grotesk'] text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-6">
              Urban Air Mobility — Now Boarding
            </span>
            <h1 className="font-['Inter'] font-extrabold text-5xl lg:text-7xl tracking-tighter text-primary-container leading-[0.95] mb-8">
              The Sky Is<br />Your New<br />Highway
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-md">
              Seamlessly book eVTOL flights across city skylines. Arrive in minutes, not hours. The future of transit is vertical.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/rider-dashboard"
                className="aviation-gradient text-white font-['Space_Grotesk'] text-sm font-bold tracking-tight px-8 py-4 rounded-xl shadow-xl shadow-primary-container/20 hover:shadow-2xl hover:shadow-primary-container/30 transition-all active:scale-[0.98] flex items-center gap-3 group"
              >
                Book a Flight
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link
                href="/pilot-dashboard"
                className="border-2 border-outline-variant text-on-surface font-['Space_Grotesk'] text-sm font-bold tracking-tight px-8 py-4 rounded-xl hover:bg-surface-container transition-all"
              >
                Become a Pilot
              </Link>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative aspect-[4/5] lg:aspect-auto rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPqnG5kxaAWXEBVrS4FBmLPfjH2-h2VFo5s7zJmY0Y-KoiFyhLH2s6axqnqUiUNiWTsKpIyhxkHvS1Gq-M_MNJ6AGBGKW7MkNndv2Fhce_Ef-k8mKwLkfFaT3RfwGSHNf2c-OC5Aqco-x_jSJUivKQBMp2aPj5fM-oqfbUB2HN_a-Xns-Wt-AW2gfL3W_EULIkK0dPxb-BN5hXe2DwaBIqMiUZGqKhCPbsH9oWl9RI2j12Bb9SiUg0nSn9fwfM3OLc9_wKLJSgo"
              alt="Futuristic eVTOL aircraft flying through a city skyline at sunset"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 via-transparent to-transparent" />
            {/* Floating Stat Badge */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex gap-3">
                <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
                  <span className="block font-['Space_Grotesk'] text-[10px] text-white/60 uppercase tracking-widest">Max Speed</span>
                  <span className="font-['Space_Grotesk'] text-white font-bold text-xl">180<small className="text-xs ml-1 opacity-60">MPH</small></span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
                  <span className="block font-['Space_Grotesk'] text-[10px] text-white/60 uppercase tracking-widest">Range</span>
                  <span className="font-['Space_Grotesk'] text-white font-bold text-xl">150<small className="text-xs ml-1 opacity-60">MI</small></span>
                </div>
                <div className="bg-secondary-container/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
                  <span className="block font-['Space_Grotesk'] text-[10px] text-primary-container uppercase tracking-widest font-bold">Emissions</span>
                  <span className="font-['Space_Grotesk'] text-primary-container font-bold text-xl">Zero</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            STATS BAR
        ============================================ */}
        <section className="w-full bg-primary-container">
          <div className="max-w-screen-2xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "180", unit: "MPH", label: "Cruising Speed" },
              { value: "75%", unit: "", label: "Time Saved vs Ground" },
              { value: "0", unit: "", label: "Carbon Emissions" },
              { value: "AAA", unit: "", label: "Safety Rating" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-['Space_Grotesk'] text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stat.value}<span className="text-secondary-container text-lg ml-1">{stat.unit}</span>
                </div>
                <div className="font-['Space_Grotesk'] text-[10px] text-on-primary-container uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================
            BENTO GRID — TECHNOLOGY & MISSION
        ============================================ */}
        <section className="w-full max-w-screen-2xl mx-auto px-8 py-20">
          <div className="mb-12">
            <span className="font-['Space_Grotesk'] text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Why Vuela
            </span>
            <h2 className="font-['Inter'] font-extrabold text-4xl lg:text-5xl tracking-tighter text-primary-container leading-tight">
              Aerospace-Grade<br />Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Safety */}
            <div className="bg-surface-container-lowest rounded-3xl p-10 shadow-[0px_24px_48px_rgba(19,27,46,0.04)] flex flex-col justify-between min-h-[320px] group hover:shadow-xl transition-all duration-500">
              <div>
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                </div>
                <h3 className="font-['Inter'] font-bold text-xl mb-3 text-primary-container">Triple-Redundant Safety</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Every AirCar features three independent flight control systems, real-time diagnostics, and autonomous emergency landing capabilities.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-secondary font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Card 2: Technology — Large */}
            <div className="relative bg-primary-container rounded-3xl p-10 shadow-xl min-h-[320px] overflow-hidden lg:row-span-2 flex flex-col justify-end">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqLpY9WKhY8CcvJFG2UeMNp5ELQM8RIl5FHGqLOxqRInxCH9tZtfiqO4Qfe-T1W5x3Y4QQPOEgr_s5AVN9PZ9CnFiw9snFqfBsUbY3EFNqRDWLqsRgNGCAWOxcvh8CjAbzSZvewfbqHkjKiNcdnJDx3YW3aqQCMTy2ooJpVNNqAJuGM9vCqN33ZNqMmyHy--mYtxROF1X3XhxaFLcMi2UzwQ_b2fLIQIUJnzPjFe5cKCBiVbk5WB0qRY5bF3DZV9Vl5OcClX9n-4"
                alt="Futuristic eVTOL cockpit with advanced digital displays"
                fill
                className="object-cover opacity-40 mix-blend-overlay"
              />
              <div className="relative z-10">
                <span className="font-['Space_Grotesk'] text-secondary-container font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
                  Next-Gen Propulsion
                </span>
                <h3 className="font-['Inter'] font-extrabold text-3xl text-white mb-4 tracking-tight leading-tight">
                  Distributed Electric<br />Propulsion System
                </h3>
                <p className="text-on-primary-container text-sm leading-relaxed max-w-sm">
                  Eight independently controlled electric motors provide unmatched stability, whisper-quiet operation at 45dB, and zero direct emissions.
                </p>
              </div>
            </div>

            {/* Card 3: Speed */}
            <div className="bg-surface-container-lowest rounded-3xl p-10 shadow-[0px_24px_48px_rgba(19,27,46,0.04)] flex flex-col justify-between min-h-[320px] group hover:shadow-xl transition-all duration-500">
              <div>
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
                </div>
                <h3 className="font-['Inter'] font-bold text-xl mb-3 text-primary-container">Door-to-Skyport in 3 Min</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Our city-wide vertiport network means your nearest takeoff point is always within a short walk. Skip the traffic entirely.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-secondary font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                View network <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Card 4: Sustainability */}
            <div className="bg-surface-container-lowest rounded-3xl p-10 shadow-[0px_24px_48px_rgba(19,27,46,0.04)] flex flex-col justify-between min-h-[320px] group hover:shadow-xl transition-all duration-500">
              <div>
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-green-600 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                </div>
                <h3 className="font-['Inter'] font-bold text-xl mb-3 text-primary-container">Carbon Negative by 2026</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  100% renewable energy charging, carbon offset partnerships, and the most efficient urban air vehicle on the market.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-secondary font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                Our commitment <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Card 5: Premium Experience */}
            <div className="bg-surface-container-lowest rounded-3xl p-10 shadow-[0px_24px_48px_rgba(19,27,46,0.04)] flex flex-col justify-between min-h-[320px] group hover:shadow-xl transition-all duration-500">
              <div>
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-amber-600 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                </div>
                <h3 className="font-['Inter'] font-bold text-xl mb-3 text-primary-container">Executive Class Available</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Premium leather interiors, noise-canceling cabins, and panoramic sky views. First-class in every sense of the word.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-secondary font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                Explore classes <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            TESTIMONIAL / CTA SECTION
        ============================================ */}
        <section className="w-full max-w-screen-2xl mx-auto px-8 py-20">
          <div className="bg-surface-container-low rounded-3xl p-12 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-['Space_Grotesk'] text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
                Travel Beyond the Gridlock
              </span>
              <h2 className="font-['Inter'] font-extrabold text-4xl lg:text-5xl tracking-tighter text-primary-container leading-tight mb-8">
                Your commute,<br />reimagined.
              </h2>
              <blockquote className="border-l-4 border-secondary-container pl-6 mb-8">
                <p className="text-on-surface-variant text-lg italic leading-relaxed mb-4">
                  &ldquo;What used to be a 90-minute crawl through downtown is now an 8-minute flight with a view. Vuela didn&apos;t just save my commute — it gave me my mornings back.&rdquo;
                </p>
                <cite className="text-on-surface-variant text-sm not-italic font-['Space_Grotesk'] font-bold">
                  — Sarah Chen, Executive Rider
                </cite>
              </blockquote>
              <Link
                href="/rider-dashboard"
                className="inline-flex items-center gap-3 aviation-gradient text-white font-['Space_Grotesk'] text-sm font-bold tracking-tight px-8 py-4 rounded-xl shadow-xl shadow-primary-container/20 hover:shadow-2xl transition-all active:scale-[0.98] group"
              >
                Start Flying Today
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYy6lnCMj_uVkftBaQKOKBQMrbH7ouHPGOHAkoC2Z9S8KXUGE5vPxYgqUew2e2j--qylbBTpEyXWCw6y110duwhtPZDQycxEo_bZX8XArA5temxpGcND14tD-tCRYaZ_hGIovGt8w_uI-BG-QGVNOKQr9rmy2L3G0zeSioukEnfExj1kwBx2a5i5NijBA-VDZmSRyji3yXHxcy1i3PPzJuHJ5Btlpr-v3R2DGGsc7BmOZyjF5YrydqRmDk5vsmwAlT343_qd_MExk"
                alt="Sleek white and carbon fiber futuristic aircar in a high-tech hangar"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* ============================================
            NEWSLETTER / WAITLIST CTA
        ============================================ */}
        <section className="w-full max-w-screen-2xl mx-auto px-8 pb-20">
          <div className="bg-primary-container rounded-3xl p-12 lg:p-20 text-center">
            <span className="font-['Space_Grotesk'] text-secondary-container font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
              Early Access
            </span>
            <h2 className="font-['Inter'] font-extrabold text-3xl lg:text-5xl text-white tracking-tighter mb-6">
              Join the Waitlist
            </h2>
            <p className="text-on-primary-container text-lg max-w-lg mx-auto mb-10">
              Be among the first to experience the future of urban air mobility. Priority access for early registrants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/10 text-white placeholder:text-white/40 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-secondary-container/40 font-['Space_Grotesk'] text-sm"
              />
              <button className="bg-secondary-container text-primary-container font-['Space_Grotesk'] text-sm font-bold px-8 py-4 rounded-xl hover:brightness-110 transition-all active:scale-[0.98] whitespace-nowrap">
                Get Early Access
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
