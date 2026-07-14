import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Services() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((card) => {
      card.classList.add(
        "transition-all",
        "duration-700",
        "opacity-0",
        "translate-y-8",
      );
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12">
      <div className="flex flex-col max-w-3xl gap-4 mx-auto mb-16 text-center">
        <h1 className="mb-2 text-4xl font-black md:text-5xl text-primary">
          Our Specialized Services
        </h1>
        <p className="text-lg text-secondary">
          Empowering businesses with strategic financial clarity. From complex
          tax compliance to robust auditing and corporate governance, we provide
          the authoritative guidance your enterprise deserves.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col gap-6 p-6 transition-all duration-300 border md:p-8 animate-on-scroll group rounded-xl bg-surface-container-low border-outline-variant hover:border-primary-container hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center text-white rounded-full size-14 bg-primary-container">
              <span className="material-symbols-outlined !text-3xl">
                receipt_long
              </span>
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-outline">
              Core Service
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold transition-colors text-primary group-hover:text-primary-container">
              Accounting
            </h2>
            <p className="leading-relaxed text-on-surface-variant">
              Comprehensive bookkeeping and accounting solutions designed to
              streamline your financial operations. We ensure accuracy,
              compliance, and provide clear visibility into your business
              performance.
            </p>
          </div>
          <div className="pt-4 mt-auto border-t border-outline-variant">
            <a
              className="inline-flex items-center gap-2 font-semibold transition-all text-primary hover:gap-3"
              href="https://www.forbes.com/advisor/business/software/best-online-bookkeeping-services/"
              target="_blank" rel="noopener noreferrer"
            >
              Learn More{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-6 transition-all duration-300 border md:p-8 animate-on-scroll group rounded-xl bg-surface-container-low border-outline-variant hover:border-primary-container hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center text-white rounded-full size-14 bg-primary-container">
              <span className="material-symbols-outlined !text-3xl">
                account_balance
              </span>
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-outline">
              Taxation Services
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold transition-colors text-primary group-hover:text-primary-container">
              Taxation
            </h2>
            <p className="leading-relaxed text-on-surface-variant">
              Navigating the ever-evolving tax landscape requires precision. We
              provide proactive tax strategies designed to minimize liabilities
              while ensuring strict adherence to regional and international
              statutory requirements.
            </p>
          </div>
          <div className="pt-4 mt-auto border-t border-outline-variant">
            <a
              className="inline-flex items-center gap-2 font-semibold transition-all text-primary hover:gap-3"
              href="https://www.irs.gov/businesses/small-businesses-self-employed"
              target="_blank" rel="noopener noreferrer"
            >
              Learn More{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-6 transition-all duration-300 border md:p-8 animate-on-scroll group rounded-xl bg-surface-container-low border-outline-variant hover:border-primary-container hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center text-white rounded-full size-14 bg-primary-container">
              <span className="material-symbols-outlined !text-3xl">
                verified_user
              </span>
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-outline">
              Compliance &amp; Governance
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold transition-colors text-primary group-hover:text-primary-container">
              SOX
            </h2>
            <p className="leading-relaxed text-on-surface-variant">
              Robust Sarbanes-Oxley (SOX) compliance and internal control
              testing. We help establish strong financial governance to mitigate
              risks, ensure regulatory compliance, and protect stakeholder
              value.
            </p>
          </div>
          <div className="pt-4 mt-auto border-t border-outline-variant">
            <a
              className="inline-flex items-center gap-2 font-semibold transition-all text-primary hover:gap-3"
              href="https://rnbcapitalcpas.com/blog-and-resources/b/sox-compliance-advisory-what-it-is-why-it-matters-and-how-to-get-it-right"
              target="_blank" rel="noopener noreferrer"
            >
              Learn More{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-6 transition-all duration-300 border md:p-8 animate-on-scroll group rounded-xl bg-surface-container-low border-outline-variant hover:border-primary-container hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center text-white rounded-full size-14 bg-primary-container">
              <span className="material-symbols-outlined !text-3xl">
                query_stats
              </span>
            </div>
            <span className="text-sm font-bold tracking-widest uppercase text-outline">
              Strategic Growth
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold transition-colors text-primary group-hover:text-primary-container">
              Advisory
            </h2>
            <p className="leading-relaxed text-on-surface-variant">
              Unlock sustainable growth with data-driven advisory. From capital
              restructuring and investment appraisals to comprehensive business
              strategy, we help you build and preserve long-term financial
              stability.
            </p>
          </div>
          <div className="pt-4 mt-auto border-t border-outline-variant">
            <a
              className="inline-flex items-center gap-2 font-semibold transition-all text-primary hover:gap-3"
              href="https://www.bdo.ca/services/financial-advisory-services"
              target="_blank" rel="noopener noreferrer"
            >
              Learn More{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      <section className="animate-on-scroll relative overflow-hidden rounded-[3rem] py-12 md:py-16 px-5 md:px-10 bg-primary text-white text-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h3 className="text-3xl font-bold md:text-4xl">
            Ready to Scale Your Financial Performance?
          </h3>
          <p className="max-w-2xl text-base md:text-lg opacity-90">
            Join hundreds of successful businesses who trustTAX NAVIGO for their
            strategic financial management.
          </p>
          <div className="flex flex-col flex-wrap justify-center w-full gap-4 mt-4 sm:flex-row">
            <button className="flex items-center justify-center w-full gap-2 px-8 py-4 font-bold transition-colors bg-white sm:w-auto text-primary rounded-xl hover:bg-surface-dim">
              <Link to="/contact">Schedule a Consultation</Link>
              <span className="material-symbols-outlined">calendar_month</span>
            </button>
            <button className="w-full px-8 py-4 font-bold text-white transition-colors bg-transparent border-2 border-white sm:w-auto rounded-xl hover:bg-white/10">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
