"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"RIDER" | "PILOT">("RIDER");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed");
        return;
      }

      // Auto sign-in after registration
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Account created but sign-in failed. Please log in manually.");
      } else {
        router.push(role === "PILOT" ? "/pilot-dashboard" : "/rider-dashboard");
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Left: Visual (Desktop Only) */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 aviation-gradient" />
        <div className="absolute inset-0 flex flex-col justify-end p-16">
          <span className="font-['Space_Grotesk'] text-secondary-container font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
            Join The Network
          </span>
          <h2 className="font-['Inter'] font-extrabold text-4xl text-white tracking-tighter leading-tight mb-4">
            The future of<br />transit is vertical.
          </h2>
          <p className="text-on-primary-container text-sm max-w-sm leading-relaxed">
            Whether you&apos;re a rider seeking faster commutes or a pilot ready to fly, Vuela connects you to the sky.
          </p>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 max-w-xl mx-auto w-full">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-primary-container mb-16 inline-block">
          Vuela
        </Link>

        <div className="mb-10">
          <span className="font-['Space_Grotesk'] text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Create Account
          </span>
          <h1 className="font-['Inter'] font-extrabold text-4xl tracking-tighter text-primary-container leading-tight mb-3">
            Begin your<br />aerial journey
          </h1>
          <p className="text-on-surface-variant text-sm">
            Choose your role and start exploring the stratospheric horizon.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-error-container text-on-error-container p-4 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          {/* Role Selection */}
          <div className="space-y-2">
            <label className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              I want to
            </label>
            <div className="flex bg-surface-container-low p-1.5 rounded-xl">
              <button
                type="button"
                onClick={() => setRole("RIDER")}
                className={`flex-1 py-3 rounded-lg font-['Space_Grotesk'] text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  role === "RIDER"
                    ? "bg-surface-container-lowest shadow-sm text-secondary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                <span className="material-symbols-outlined text-lg">flight_class</span>
                Fly as Rider
              </button>
              <button
                type="button"
                onClick={() => setRole("PILOT")}
                className={`flex-1 py-3 rounded-lg font-['Space_Grotesk'] text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  role === "PILOT"
                    ? "bg-surface-container-lowest shadow-sm text-secondary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                <span className="material-symbols-outlined text-lg">flight_takeoff</span>
                Pilot a Fleet
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-secondary/40 text-on-surface transition-all placeholder:text-outline"
              placeholder="Captain Alex Serra"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-secondary/40 text-on-surface transition-all placeholder:text-outline"
              placeholder="alex@vuela.aero"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-secondary/40 text-on-surface transition-all placeholder:text-outline"
              placeholder="Min. 8 characters"
              required
              minLength={8}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full aviation-gradient text-white font-['Space_Grotesk'] text-sm font-bold tracking-tight py-4 rounded-xl shadow-xl shadow-primary-container/20 hover:shadow-2xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                Creating account...
              </>
            ) : (
              <>
                Create {role === "PILOT" ? "Pilot" : "Rider"} Account
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </>
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-on-surface-variant">
          Already have an account?{" "}
          <Link href="/login" className="text-secondary font-bold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
