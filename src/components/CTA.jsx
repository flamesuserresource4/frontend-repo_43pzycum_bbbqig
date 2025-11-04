import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="relative mx-auto max-w-5xl px-6 pb-24 sm:px-8">
      <div className="overflow-hidden rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-400/15 via-emerald-300/10 to-emerald-200/5 p-8 shadow-xl shadow-emerald-500/10 sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-semibold sm:text-3xl">Start automating in minutes</h3>
          <p className="mt-2 text-white/80">
            Create your first flow, invite your team, and connect your stack. The free plan includes unlimited drafts.
          </p>
        </div>
        <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:border-emerald-300/50"
          />
          <button
            type="submit"
            className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:brightness-110"
          >
            Get started free
          </button>
        </form>
        <div className="mx-auto mt-4 flex max-w-xl flex-wrap items-center justify-center gap-4 text-xs text-white/70">
          <div className="inline-flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-300" /> No credit card</div>
          <div className="inline-flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-300" /> Cancel anytime</div>
          <div className="inline-flex items-center gap-1"><CheckCircle2 size={14} className="text-emerald-300" /> SSL secured</div>
        </div>
      </div>
      <footer className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-white/60 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} FluxFlow, Inc. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#features" className="hover:text-white/90">Features</a>
          <a href="#testimonials" className="hover:text-white/90">Customers</a>
          <a href="#get-started" className="hover:text-white/90">Get started</a>
        </nav>
      </footer>
    </section>
  );
}
