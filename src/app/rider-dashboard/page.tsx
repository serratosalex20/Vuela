import Image from "next/image";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";

export default function RiderDashboard() {
  return (
    <>
      <Navbar variant="rider" activeLink="explore" />

      <main className="relative min-h-screen pb-32 md:pb-0">
        {/* Interactive Map Layer (Background) */}
        <div className="fixed inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlyb6pI69x9Hqt2OZfMjpwWG8W1TqnKoXAahOJuYRn7Qvr3r2RQzXu4hir5HGWuLaZ-auUCb7jR-sM51ewID4OnA_hivv_Xb4g3rRMk-prGcLIjhKpNZV27usTPGV0xKszVKXQxpwzC9_4zRtZI_pwaSdfmw27SiZtd8l4-Cw2QatipxmBpOHe9Xv-PwAJQ6COGX10W9g_Ggx_yalIpnIC2ISauDFxH9IKFNFaXg7Lzex936afxSAKdvBvWK8VO_VfmuvCihaBjqU"
            alt="Regional Map"
            fill
            className="object-cover grayscale opacity-40 mix-blend-multiply"
          />
          <div className="absolute inset-0 map-gradient-overlay pointer-events-none" />
          {/* Floating eVTOL Markers */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-12 h-12 bg-secondary-container/20 rounded-full animate-ping" />
              <div className="bg-primary-container p-2 rounded-full shadow-lg border border-secondary-container/30">
                <span className="material-symbols-outlined text-secondary-container text-lg">flight_class</span>
              </div>
              <div className="absolute top-full mt-2 bg-white/90 backdrop-blur-md px-2 py-1 rounded-sm shadow-sm">
                <span className="font-['Space_Grotesk'] text-[10px] text-primary-container font-bold">V-204 ON APPROACH</span>
              </div>
            </div>
          </div>
          <div className="absolute top-2/3 right-1/4 z-10">
            <div className="bg-primary-container p-2 rounded-full shadow-lg border border-secondary-container/30">
              <span className="material-symbols-outlined text-secondary-container text-lg">flight_class</span>
            </div>
          </div>
        </div>

        {/* Rider Control Panel */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 pointer-events-none pt-8">
          <div className="md:col-span-4 lg:col-span-3 pointer-events-auto">
            <div className="bg-surface-container-lowest/90 backdrop-blur-2xl p-8 rounded-3xl shadow-[0px_24px_48px_rgba(19,27,46,0.06)] border border-white/40 flex flex-col gap-8">
              {/* Search Module */}
              <div className="space-y-4">
                <h1 className="font-['Inter'] text-2xl font-extrabold tracking-tight text-primary-container">Where to?</h1>
                <div className="space-y-2 relative">
                  {/* Visual Connector */}
                  <div className="absolute left-6 top-10 bottom-10 w-[1px] bg-outline-variant/30 z-0" />
                  <div className="relative flex items-center gap-4 bg-surface-container-low p-4 rounded-xl">
                    <span className="material-symbols-outlined text-secondary text-sm z-10">radio_button_checked</span>
                    <div className="flex-1">
                      <p className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-outline">Pickup Vertiport</p>
                      <input
                        className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold text-primary-container placeholder:text-slate-400"
                        placeholder="Current Location"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="relative flex items-center gap-4 bg-surface-container-low p-4 rounded-xl">
                    <span className="material-symbols-outlined text-error text-sm z-10">location_on</span>
                    <div className="flex-1">
                      <p className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-outline">Dropoff Landing Pad</p>
                      <input
                        className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm font-semibold text-primary-container placeholder:text-slate-400"
                        placeholder="Enter destination"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Flight Class Selection */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <h2 className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-outline">Flight Classes</h2>
                  <span className="font-['Space_Grotesk'] text-[10px] text-secondary font-bold">ESTIMATED TIMES</span>
                </div>
                <div className="space-y-3">
                  {/* Standard */}
                  <div className="group flex items-center justify-between p-4 bg-white rounded-2xl border-2 border-transparent hover:border-secondary-container transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center overflow-hidden relative">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCocd91ALbnZLbVPoJOYMZxkrl8OIvu23bGGNIq2Ty24vgdq3zSygWeEJ73wwXSpxTLuJVooUsWGqJ8WL98GHU_jCWfDEaqe8PMR8q31U-oTeJYB79rIc0gwi3bY7DWA-U2sdbiPBWjUhU0H3ex049eILOIdNQKZIjqf8pc8HBmlk5pRsf58QADfiFdBctpaUQjKrFZyFQALAOQv4MEe7jh6v6kYGnyZpzJYeIZPUTrmMfDxYdcPddrK4pH0kSPRE-bLVvV8i-EGBo" alt="Standard eVTOL" fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-primary-container">Standard</p>
                        <p className="font-['Space_Grotesk'] text-[10px] text-outline">12 min arrival</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-['Space_Grotesk'] font-bold text-sm text-primary-container">$42.50</p>
                      <p className="font-['Space_Grotesk'] text-[10px] text-secondary">READY</p>
                    </div>
                  </div>
                  {/* Executive — Selected */}
                  <div className="group flex items-center justify-between p-4 bg-sky-50/50 rounded-2xl border-2 border-secondary shadow-sm cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary-container/20 rounded-xl flex items-center justify-center overflow-hidden relative">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_OJMJf6LYsu8edAqucBC5TYc_JvFAvjyUYEWwVJQBrxmgcJteGiulraKklEPkM_Qs7m8cvpT06w3RyMnK7wccmTPSAPCJwYmYjap1pu2EWcESyItcUTbnar91Y8A8GngUegGe7ch3wUpsggnlhSMAEr1IJR6-BcBSVMA-k9HTdl0jBsND8u3bjz_wfE3a4rERtmrJ2ykP5hd_-dx5xJKO6KSS_TPanhpAr0rFggOj5KuTmLoL1aBigO34t1MpjbhLnfb0lx5jjow" alt="Executive eVTOL" fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-primary-container">Executive</p>
                        <p className="font-['Space_Grotesk'] text-[10px] text-outline">8 min arrival</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-['Space_Grotesk'] font-bold text-sm text-primary-container">$89.00</p>
                      <p className="font-['Space_Grotesk'] text-[10px] text-secondary font-bold">FASTER</p>
                    </div>
                  </div>
                  {/* XL */}
                  <div className="group flex items-center justify-between p-4 bg-white rounded-2xl border-2 border-transparent hover:border-secondary-container transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center overflow-hidden relative">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJiryN-m7MReHoda4ZcLvLmTpc4m8ZTnCV9_e4k4hP8e8c-gUF6b29DRgF4G9x6tK519WlwYE78XLjL0ZJ27XFIa4IaqFrwgw0-xwSvs-Mmh78sLXhMGVSJmnFsSeDKA2ES5VeFuWMiIXfpVnd4bHe5B-cRkven2nOYq-YuMOuA_XS_Cq7NrcxUVn1aNfiNtTXEL33EF53842aQExNmZtyfK38YhZKIdtb8vFSxadNrHHwjlfMRjd50Lnj1puWx_DKvBBXjKK44_o" alt="eVTOL XL" fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-primary-container">eVTOL-XL</p>
                        <p className="font-['Space_Grotesk'] text-[10px] text-outline">15 min arrival</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-['Space_Grotesk'] font-bold text-sm text-primary-container">$65.00</p>
                      <p className="font-['Space_Grotesk'] text-[10px] text-outline">6 SEATS</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Request CTA */}
              <button className="w-full py-5 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white font-['Space_Grotesk'] text-sm font-bold tracking-widest shadow-xl shadow-primary-container/20 active:scale-[0.98] transition-all">
                REQUEST FLIGHT
              </button>
            </div>
          </div>

          {/* Telemetry Cards (Desktop Only) */}
          <div className="hidden md:flex md:col-span-8 lg:col-span-9 flex-col justify-end pb-12 pointer-events-none">
            <div className="flex gap-6 pointer-events-auto">
              <div className="bg-primary-container/90 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col gap-1 w-48 shadow-2xl">
                <span className="font-['Space_Grotesk'] text-[10px] text-secondary uppercase tracking-[0.2em]">Wind Velocity</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-['Space_Grotesk'] text-2xl font-bold text-white">12</span>
                  <span className="font-['Space_Grotesk'] text-xs text-white/60">knots</span>
                </div>
              </div>
              <div className="bg-primary-container/90 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col gap-1 w-48 shadow-2xl">
                <span className="font-['Space_Grotesk'] text-[10px] text-secondary uppercase tracking-[0.2em]">Visibility</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-['Space_Grotesk'] text-2xl font-bold text-white">9.2</span>
                  <span className="font-['Space_Grotesk'] text-xs text-white/60">nmi</span>
                </div>
              </div>
              <div className="bg-secondary-container/90 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col gap-1 w-48 shadow-2xl">
                <span className="font-['Space_Grotesk'] text-[10px] text-primary-container uppercase tracking-[0.2em] font-bold">Clear Sky</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-['Space_Grotesk'] text-2xl font-bold text-primary-container">Optimum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav activeTab="explore" />
    </>
  );
}
