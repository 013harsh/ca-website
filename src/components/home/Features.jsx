import React from 'react';

function Features({ sectionRef }) {
  return (
    <section ref={sectionRef} className="py-16 px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-primary text-4xl font-black tracking-tight mb-4">Why Choose Us</h2>
        <p className="text-on-surface-variant text-lg">We provide a foundation of trust and excellence in every financial engagement, ensuring your peace of mind.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Pillar 1 */}
        <div className="group flex flex-col p-8 bg-surface-container-low rounded-3xl border border-outline-variant hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-2">
          <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined text-3xl">lightbulb</span>
          </div>
          <h3 className="text-primary text-2xl font-bold mb-4">Expertise</h3>
          <p className="text-on-surface-variant leading-relaxed mb-6">Our team consists of senior chartered accountants with decades of experience across diverse industries from fintech to manufacturing.</p>
          <ul className="mt-auto space-y-3">
            <li className="flex items-center gap-2 text-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">check_circle</span> Strategic Tax Planning
            </li>
            <li className="flex items-center gap-2 text-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">check_circle</span> Forensic Auditing
            </li>
          </ul>
        </div>
        {/* Pillar 2 */}
        <div className="group flex flex-col p-8 bg-surface-container-low rounded-3xl border border-outline-variant hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-2">
          <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined text-3xl">shield_lock</span>
          </div>
          <h3 className="text-primary text-2xl font-bold mb-4">Integrity</h3>
          <p className="text-on-surface-variant leading-relaxed mb-6">Transparency is our bedrock. We provide clear, honest communication and unwavering commitment to ethical financial practices.</p>
          <ul className="mt-auto space-y-3">
            <li className="flex items-center gap-2 text-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">check_circle</span> 100% Regulatory Compliance
            </li>
            <li className="flex items-center gap-2 text-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">check_circle</span> Ethical Advisory
            </li>
          </ul>
        </div>
        {/* Pillar 3 */}
        <div className="group flex flex-col p-8 bg-surface-container-low rounded-3xl border border-outline-variant hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-2">
          <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined text-3xl">trending_up</span>
          </div>
          <h3 className="text-primary text-2xl font-bold mb-4">Results</h3>
          <p className="text-on-surface-variant leading-relaxed mb-6">We focus on measurable outcomes. Whether it's reducing tax liability or optimizing cash flow, our results speak for themselves.</p>
          <ul className="mt-auto space-y-3">
            <li className="flex items-center gap-2 text-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">check_circle</span> Average 15% Tax Savings
            </li>
            <li className="flex items-center gap-2 text-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">check_circle</span> Data-Driven Insights
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
