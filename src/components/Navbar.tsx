import Link from "next/link";

interface NavbarProps {
  variant?: "landing" | "rider" | "pilot";
  activeLink?: string;
}

export default function Navbar({ variant = "landing", activeLink }: NavbarProps) {
  const isLanding = variant === "landing";
  const isPilot = variant === "pilot";

  return (
    <header className={`${isLanding ? 'bg-slate-50/80' : 'bg-slate-50/60'} backdrop-blur-xl sticky top-0 z-50 transition-all duration-300 ${!isLanding ? 'shadow-2xl shadow-slate-900/5' : ''}`}>
      <div className="flex justify-between items-center h-20 px-8 w-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {!isLanding && (
            <span className="material-symbols-outlined text-slate-900 text-2xl">flight_takeoff</span>
          )}
          <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900">
            Vuela
          </Link>
        </div>

        {/* Desktop Nav */}
        {isLanding ? (
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`text-sm tracking-tight font-['Space_Grotesk'] ${activeLink === 'book' ? 'text-slate-900 border-b-2 border-slate-900 pb-1' : 'text-slate-500 font-medium hover:text-slate-900 transition-all duration-300'}`}>
              Book a Flight
            </Link>
            <Link href="/pilot-dashboard" className={`text-sm tracking-tight font-['Space_Grotesk'] ${activeLink === 'pilot' ? 'text-slate-900 border-b-2 border-slate-900 pb-1' : 'text-slate-500 font-medium hover:text-slate-900 transition-all duration-300'}`}>
              Become a Pilot
            </Link>
            <Link href="#safety" className="text-slate-500 font-medium hover:text-slate-900 transition-all duration-300 font-['Space_Grotesk'] text-sm tracking-tight">
              Safety
            </Link>
            <Link href="#company" className="text-slate-500 font-medium hover:text-slate-900 transition-all duration-300 font-['Space_Grotesk'] text-sm tracking-tight">
              Company
            </Link>
          </nav>
        ) : (
          <nav className="hidden md:flex items-center gap-8">
            {isPilot ? (
              <>
                <Link href="/pilot-dashboard" className={`font-['Space_Grotesk'] text-xs uppercase tracking-widest ${activeLink === 'dashboard' ? 'text-sky-600 font-bold' : 'text-slate-500 hover:text-sky-500 transition-all'}`}>
                  Dashboard
                </Link>
                <Link href="/pilot-dashboard/garage" className={`font-['Space_Grotesk'] text-xs uppercase tracking-widest ${activeLink === 'garage' ? 'text-sky-600 font-bold' : 'text-slate-500 hover:text-sky-500 transition-all'}`}>
                  Garage
                </Link>
                <Link href="#" className="text-slate-500 hover:text-sky-500 transition-all font-['Space_Grotesk'] text-xs uppercase tracking-widest">
                  Schedule
                </Link>
                <Link href="#" className="text-slate-500 hover:text-sky-500 transition-all font-['Space_Grotesk'] text-xs uppercase tracking-widest">
                  Logbook
                </Link>
              </>
            ) : (
              <>
                <Link href="/rider-dashboard" className={`font-['Space_Grotesk'] text-xs uppercase tracking-widest ${activeLink === 'explore' ? 'text-sky-600 font-bold' : 'text-slate-500 hover:text-sky-500 transition-all'}`}>
                  Explore
                </Link>
                <Link href="#" className="text-slate-500 hover:text-sky-500 transition-all font-['Space_Grotesk'] text-xs uppercase tracking-widest">
                  Flights
                </Link>
                <Link href="#" className="text-slate-500 hover:text-sky-500 transition-all font-['Space_Grotesk'] text-xs uppercase tracking-widest">
                  Earnings
                </Link>
                <Link href="#" className="text-slate-500 hover:text-sky-500 transition-all font-['Space_Grotesk'] text-xs uppercase tracking-widest">
                  Garage
                </Link>
              </>
            )}
          </nav>
        )}

        {/* Auth Buttons */}
        <div className="flex items-center gap-6">
          {isLanding ? (
            <>
              <Link href="/login" className="text-slate-900 font-medium font-['Space_Grotesk'] text-sm tracking-tight px-4 py-2 hover:bg-slate-200/50 transition-all duration-300 rounded-lg">
                Login
              </Link>
              <Link href="/signup" className="bg-primary-container text-on-primary px-6 py-2.5 rounded-lg font-bold font-['Space_Grotesk'] text-sm tracking-tight active:opacity-80 transition-transform">
                Sign Up
              </Link>
            </>
          ) : (
            <Link href="/login" className="font-['Space_Grotesk'] text-xs tracking-widest text-slate-900 bg-surface-container hover:bg-slate-200/50 transition-all px-6 py-2 rounded-xl">
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
