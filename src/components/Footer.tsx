import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-16 px-8 mt-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 w-full max-w-screen-2xl mx-auto">
        <div className="col-span-2">
          <span className="text-xl font-bold text-white mb-4 block">Vuela</span>
          <p className="text-slate-400 text-sm max-w-xs mb-8">
            Pioneering the third dimension of urban transit with luxury electric aviation solutions.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer transition-colors">language</span>
            <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer transition-colors">share</span>
            <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer transition-colors">hub</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-white text-sm mb-2">Company</span>
          <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">About Us</Link>
          <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Newsroom</Link>
          <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Careers</Link>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-white text-sm mb-2">Services</span>
          <Link href="/rider-dashboard" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Book a Flight</Link>
          <Link href="/pilot-dashboard" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Become a Pilot</Link>
          <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Corporate Travel</Link>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-white text-sm mb-2">Safety</span>
          <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Flight Safety</Link>
          <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Pilot Training</Link>
          <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Maintenance</Link>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-white text-sm mb-2">Legal</span>
          <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Privacy Policy</Link>
          <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Terms of Service</Link>
          <Link href="#" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Investor Relations</Link>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">© 2024 Vuela Aerospace Inc. All rights reserved.</p>
        <div className="flex gap-8">
          <span className="font-['Space_Grotesk'] text-slate-500 text-xs">Sustainability</span>
          <span className="font-['Space_Grotesk'] text-slate-500 text-xs">Accessibility</span>
          <span className="font-['Space_Grotesk'] text-slate-500 text-xs">Cookie Preferences</span>
        </div>
      </div>
    </footer>
  );
}
