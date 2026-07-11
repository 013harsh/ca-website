import React from "react";

function Features({ sectionRef }) {
  return (
    <section ref={sectionRef} className="px-4 py-10 sm:py-16">
      <div className="max-w-2xl mx-auto mb-8 text-center sm:mb-12 md:mb-16">
        <h2 className="mb-3 text-2xl font-black tracking-tight text-primary sm:text-3xl md:text-4xl sm:mb-4">
          Why Choose Us
        </h2>
        <p className="text-sm leading-relaxed text-on-surface-variant sm:text-base md:text-lg">
          We provide a foundation of trust and excellence in every financial
          engagement, ensuring your peace of mind.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
        {/* Pillar 1 */}
        <div className="flex flex-col items-center p-5 text-center transition-all border group sm:p-6 md:p-8 bg-surface-container-low rounded-2xl sm:rounded-3xl border-outline-variant hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 md:items-start md:text-left">
          <div className="flex items-center justify-center mb-4 transition-transform shadow-lg w-14 h-14 sm:w-16 sm:h-16 bg-primary text-on-primary rounded-xl sm:rounded-2xl sm:mb-6 group-hover:rotate-12">
            <span className="text-2xl material-symbols-outlined sm:text-3xl">
              lightbulb
            </span>
          </div>
          <h3 className="mb-3 text-xl font-bold text-primary sm:text-2xl sm:mb-4">
            Expertise
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-on-surface-variant sm:text-base sm:mb-6">
            Our team consists of senior chartered accountants with decades of
            experience across diverse industries from fintech to manufacturing.
          </p>
          <ul className="mx-auto mt-auto space-y-2 text-left sm:space-y-3 w-fit md:mx-0">
            <li className="flex items-center gap-2 text-xs font-semibold sm:text-sm text-primary">
              <span className="text-sm material-symbols-outlined">
                check_circle
              </span>{" "}
              Strategic Tax Planning
            </li>
            <li className="flex items-center gap-2 text-xs font-semibold sm:text-sm text-primary">
              <span className="text-sm material-symbols-outlined">
                check_circle
              </span>{" "}
              Forensic Auditing
            </li>
          </ul>
        </div>
        {/* Pillar 2 */}
        <div className="flex flex-col items-center p-5 text-center transition-all border group sm:p-6 md:p-8 bg-surface-container-low rounded-2xl sm:rounded-3xl border-outline-variant hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 md:items-start md:text-left">
          <div className="flex items-center justify-center mb-4 transition-transform shadow-lg w-14 h-14 sm:w-16 sm:h-16 bg-primary text-on-primary rounded-xl sm:rounded-2xl sm:mb-6 group-hover:rotate-12">
            <span className="text-2xl material-symbols-outlined sm:text-3xl">
              shield_lock
            </span>
          </div>
          <h3 className="mb-3 text-xl font-bold text-primary sm:text-2xl sm:mb-4">
            Integrity
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-on-surface-variant sm:text-base sm:mb-6">
            Transparency is our bedrock. We provide clear, honest communication
            and unwavering commitment to ethical financial practices.
          </p>
          <ul className="mx-auto mt-auto space-y-2 text-left sm:space-y-3 w-fit md:mx-0">
            <li className="flex items-center gap-2 text-xs font-semibold sm:text-sm text-primary">
              <span className="text-sm material-symbols-outlined">
                check_circle
              </span>{" "}
              100% Regulatory Compliance
            </li>
            <li className="flex items-center gap-2 text-xs font-semibold sm:text-sm text-primary">
              <span className="text-sm material-symbols-outlined">
                check_circle
              </span>{" "}
              Ethical Advisory
            </li>
          </ul>
        </div>
        {/* Pillar 3 */}
        <div className="flex flex-col items-center p-5 text-center transition-all border group sm:p-6 md:p-8 bg-surface-container-low rounded-2xl sm:rounded-3xl border-outline-variant hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 md:items-start md:text-left">
          <div className="flex items-center justify-center mb-4 transition-transform shadow-lg w-14 h-14 sm:w-16 sm:h-16 bg-primary text-on-primary rounded-xl sm:rounded-2xl sm:mb-6 group-hover:rotate-12">
            <span className="text-2xl material-symbols-outlined sm:text-3xl">
              trending_up
            </span>
          </div>
          <h3 className="mb-3 text-xl font-bold text-primary sm:text-2xl sm:mb-4">
            Results
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-on-surface-variant sm:text-base sm:mb-6">
            We focus on measurable outcomes. Whether it's reducing tax liability
            or optimizing cash flow, our results speak for themselves.
          </p>
          <ul className="mx-auto mt-auto space-y-2 text-left sm:space-y-3 w-fit md:mx-0">
            <li className="flex items-center gap-2 text-xs font-semibold sm:text-sm text-primary">
              <span className="text-sm material-symbols-outlined">
                check_circle
              </span>{" "}
              Average 15% Tax Savings
            </li>
            <li className="flex items-center gap-2 text-xs font-semibold sm:text-sm text-primary">
              <span className="text-sm material-symbols-outlined">
                check_circle
              </span>{" "}
              Data-Driven Insights
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
