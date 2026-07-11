import React from 'react';

function Features({ sectionRef }) {
  return (
    <section ref={sectionRef} className="py-10 sm:py-16 px-4">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-3 sm:mb-4">Why Choose Us</h2>
        <p className="text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed">We provide a foundation of trust and excellence in every financial engagement, ensuring your peace of mind.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Pillar 1 */}
        <div className="group flex flex-col p-5 sm:p-6 md:p-8 bg-surface-container-low rounded-2xl sm:rounded-3xl border border-outline-variant hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-2 items-center text-center md:items-start md:text-left">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-on-primary rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined text-2xl sm:text-3xl">lightbulb</span>
          </div>
          <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Expertise</h3>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">Our team consists of senior chartered accountants with decades of experience across diverse industries from fintech to manufacturing.</p>
          <ul className="mt-auto space-y-2 sm:space-y-3 w-fit mx-auto md:mx-0 text-left">
            <li className="flex items-center gap-2 text-xs sm:text-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">check_circle</span> Strategic Tax Planning
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">check_circle</span> Forensic Auditing
            </li>
          </ul>
        </div>
        {/* Pillar 2 */}
        <div className="group flex flex-col p-5 sm:p-6 md:p-8 bg-surface-container-low rounded-2xl sm:rounded-3xl border border-outline-variant hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-2 items-center text-center md:items-start md:text-left">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-on-primary rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined text-2xl sm:text-3xl">shield_lock</span>
          </div>
          <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Integrity</h3>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">Transparency is our bedrock. We provide clear, honest communication and unwavering commitment to ethical financial practices.</p>
          <ul className="mt-auto space-y-2 sm:space-y-3 w-fit mx-auto md:mx-0 text-left">
            <li className="flex items-center gap-2 text-xs sm:text-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">check_circle</span> 100% Regulatory Compliance
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">check_circle</span> Ethical Advisory
            </li>
          </ul>
        </div>
        {/* Pillar 3 */}
        <div className="group flex flex-col p-5 sm:p-6 md:p-8 bg-surface-container-low rounded-2xl sm:rounded-3xl border border-outline-variant hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-2 items-center text-center md:items-start md:text-left">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-on-primary rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined text-2xl sm:text-3xl">trending_up</span>
          </div>
          <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Results</h3>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">We focus on measurable outcomes. Whether it's reducing tax liability or optimizing cash flow, our results speak for themselves.</p>
          <ul className="mt-auto space-y-2 sm:space-y-3 w-fit mx-auto md:mx-0 text-left">
            <li className="flex items-center gap-2 text-xs sm:text-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">check_circle</span> Average 15% Tax Savings
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-sm text-primary font-semibold">
              <span className="material-symbols-outlined text-sm">check_circle</span> Data-Driven Insights
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
