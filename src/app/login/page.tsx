"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/rider-dashboard");
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
      {/* Left: Form */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 max-w-xl mx-auto w-full">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-primary-container mb-16 inline-block">
          Vuela
        </Link>

        <div className="mb-10">
          <span className="font-['Space_Grotesk'] text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Welcome Back
          </span>
          <h1 className="font-['Inter'] font-extrabold text-4xl tracking-tighter text-primary-container leading-tight mb-3">
            Sign in to<br />your cockpit
          </h1>
          <p className="text-on-surface-variant text-sm">
            Access your dashboard, manage flights, and track your aerial journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-error-container text-on-error-container p-4 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-secondary/40 text-on-surface transition-all placeholder:text-outline"
              placeholder="pilot@vuela.aero"
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
              placeholder="••••••••"
              required
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
                Authenticating...
              </>
            ) : (
              <>
                Sign In
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </>
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-on-surface-variant">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-secondary font-bold hover:underline">
            Create one
          </Link>
        </p>
      </div>

      {/* Right: Visual (Desktop Only) */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 aviation-gradient" />
        <div className="absolute inset-0 flex flex-col justify-end p-16">
          <span className="font-['Space_Grotesk'] text-secondary-container font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
            The Stratospheric Horizon
          </span>
          <h2 className="font-['Inter'] font-extrabold text-4xl text-white tracking-tighter leading-tight mb-4">
            Fly beyond<br />the gridlock.
          </h2>
          <p className="text-on-primary-container text-sm max-w-sm leading-relaxed">
            Join thousands of riders and pilots who have embraced the future of urban air mobility.
          </p>
        </div>
      </div>
    </div>
  );
}
