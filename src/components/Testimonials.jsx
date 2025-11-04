import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'FluxFlow removed hours of manual work every week. We shipped integrations 3x faster and our ops are finally reliable.',
    name: 'Maya Patel',
    title: 'Head of Product, Northwind'
  },
  {
    quote:
      'The visual builder and built‑in error handling are game‑changers. Our team automated onboarding across six tools in a day.',
    name: 'Diego Alvarez',
    title: 'COO, Globex'
  }
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-amber-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Loved by modern teams</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Real results from companies automating with FluxFlow.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <figure key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/20">
            <Stars />
            <blockquote className="mt-4 text-white/90">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-white/60">
              <span className="font-medium text-white/80">{t.name}</span> · {t.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
