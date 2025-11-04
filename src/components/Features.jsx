import React from 'react';
import { Zap, Cog, Shield, Workflow } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Drag‑and‑drop workflows',
    desc: 'Design complex automations visually. Trigger from webhooks, schedule, or events.'
  },
  {
    icon: Cog,
    title: '200+ integrations',
    desc: 'Connect your favorite tools from CRMs to data warehouses in minutes.'
  },
  {
    icon: Workflow,
    title: 'Branching & retries',
    desc: 'Built‑in logic, automatic retries, and error handling keep things running.'
  },
  {
    icon: Shield,
    title: 'Enterprise‑grade security',
    desc: 'SSO, audit logs, SOC 2 readiness, and granular permissions by default.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Everything you need to automate at scale</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Build resilient flows, connect systems, and ship faster with a platform made for modern teams.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((f, i) => (
          <div key={i} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-lg shadow-black/20 transition hover:border-white/15">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-300/20">
              <f.icon size={20} />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Trust bar */}
      <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
        <p className="text-sm text-white/70">
          Trusted by product, growth, and operations teams at startups and enterprises alike.
        </p>
        <div className="mt-4 grid grid-cols-2 items-center justify-center gap-6 opacity-80 sm:grid-cols-4">
          <div className="text-xs uppercase tracking-widest text-white/60">Acme Co.</div>
          <div className="text-xs uppercase tracking-widest text-white/60">Northwind</div>
          <div className="text-xs uppercase tracking-widest text-white/60">Globex</div>
          <div className="text-xs uppercase tracking-widest text-white/60">Umbrella</div>
        </div>
      </div>
    </section>
  );
}
