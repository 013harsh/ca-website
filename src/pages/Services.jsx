import React, { useEffect } from 'react';

function Services() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(card => {
      card.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12">
      <div className="flex flex-col gap-4 mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-black text-primary mb-2">Our Specialized Services</h1>
        <p className="text-lg text-secondary">
          Empowering businesses with strategic financial clarity. From complex tax compliance to robust auditing and corporate governance, we provide the authoritative guidance your enterprise deserves.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
        <div className="animate-on-scroll group flex flex-col gap-6 p-8 rounded-xl bg-surface-container-low border border-outline-variant hover:border-primary-container hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center size-14 rounded-full bg-primary-container text-white">
              <span className="material-symbols-outlined !text-3xl">receipt_long</span>
            </div>
            <span className="text-sm text-outline uppercase tracking-widest font-bold">Core Advisory</span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-primary group-hover:text-primary-container transition-colors">Tax Planning &amp; Compliance</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Navigating the ever-evolving tax landscape requires precision. We provide proactive tax strategies designed to minimize liabilities while ensuring strict adherence to regional and international statutory requirements.
            </p>
          </div>
          <div className="mt-auto pt-4 border-t border-outline-variant">
            <a className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all" href="#">
              Learn More <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="animate-on-scroll group flex flex-col gap-6 p-8 rounded-xl bg-surface-container-low border border-outline-variant hover:border-primary-container hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center size-14 rounded-full bg-primary-container text-white">
              <span className="material-symbols-outlined !text-3xl">verified_user</span>
            </div>
            <span className="text-sm text-outline uppercase tracking-widest font-bold">Quality Assurance</span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-primary group-hover:text-primary-container transition-colors">Auditing &amp; Assurance</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Enhance stakeholder confidence through our rigorous audit processes. We provide independent, high-quality assurance services that validate your financial integrity and identify operational efficiencies.
            </p>
          </div>
          <div className="mt-auto pt-4 border-t border-outline-variant">
            <a className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all" href="#">
              Learn More <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="animate-on-scroll group flex flex-col gap-6 p-8 rounded-xl bg-surface-container-low border border-outline-variant hover:border-primary-container hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center size-14 rounded-full bg-primary-container text-white">
              <span className="material-symbols-outlined !text-3xl">query_stats</span>
            </div>
            <span className="text-sm text-outline uppercase tracking-widest font-bold">Strategic Growth</span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-primary group-hover:text-primary-container transition-colors">Financial Advisory &amp; Wealth</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Unlock sustainable growth with data-driven advisory. From capital restructuring and investment appraisals to comprehensive wealth management, we help you build and preserve long-term financial stability.
            </p>
          </div>
          <div className="mt-auto pt-4 border-t border-outline-variant">
            <a className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all" href="#">
              Learn More <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="animate-on-scroll group flex flex-col gap-6 p-8 rounded-xl bg-surface-container-low border border-outline-variant hover:border-primary-container hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center size-14 rounded-full bg-primary-container text-white">
              <span className="material-symbols-outlined !text-3xl">account_balance</span>
            </div>
            <span className="text-sm text-outline uppercase tracking-widest font-bold">Structure &amp; Ethics</span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-primary group-hover:text-primary-container transition-colors">Corporate Governance &amp; Secretary</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Protect your organization's reputation with robust governance frameworks. We manage statutory filings, board secretarial duties, and compliance auditing to ensure your business operates within legal and ethical standards.
            </p>
          </div>
          <div className="mt-auto pt-4 border-t border-outline-variant">
            <a className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all" href="#">
              Learn More <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      <section className="animate-on-scroll relative overflow-hidden rounded-[3rem] py-16 px-4 md:px-10 bg-primary text-white text-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h3 className="text-4xl font-bold">Ready to Scale Your Financial Performance?</h3>
          <p className="text-lg max-w-2xl opacity-90">
            Join hundreds of successful businesses who trust Sterling Ledger for their strategic financial management.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-surface-dim transition-colors flex items-center gap-2">
              Schedule a Consultation
              <span className="material-symbols-outlined">calendar_month</span>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20 border-t border-outline-variant mt-20">
        <div className="flex flex-col gap-3 animate-on-scroll">
          <h4 className="text-2xl font-bold text-primary">Global Presence</h4>
          <div className="h-40 w-full rounded-xl overflow-hidden">
            <img alt="London Map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6DNTtY9sjU1xEkZE1VqEie_k3C3TrbxDxCil6HdKvP9MmqJ8kNO01JF1wjS0IbCMu-LM68RfCM0EE3K2g6hurD_j3uUAA9b_rHXM0FFwRWuyRkWoMGeGky1c10qBlA17tlbLdeHjHVeI9ZB4mMv1fl8yoyKgY2evRe6c5nsUDt-0eLofhhrrZJZWCuoEMUeJ3F-SVksIEtflH82NsfGWyrhow6eQOV3P78yT4K-wv2PH_MaTCD_NCaSpxFdvgyc3aqgW3FphE0M" />
          </div>
          <p className="text-sm text-on-surface-variant">Strategic offices in key financial hubs to serve your international needs.</p>
        </div>
        <div className="flex flex-col gap-3 animate-on-scroll">
          <h4 className="text-2xl font-bold text-primary">Certified Expertise</h4>
          <div className="flex flex-wrap gap-4 py-4">
            <div className="p-4 bg-surface-container rounded-lg border border-outline-variant flex flex-col items-center flex-1">
              <span className="material-symbols-outlined text-primary !text-4xl">license</span>
              <span className="text-sm font-bold mt-2 text-primary">FCA Accredited</span>
            </div>
            <div className="p-4 bg-surface-container rounded-lg border border-outline-variant flex flex-col items-center flex-1">
              <span className="material-symbols-outlined text-primary !text-4xl">workspace_premium</span>
              <span className="text-sm font-bold mt-2 text-primary">ISO Certified</span>
            </div>
          </div>
          <p className="text-sm text-on-surface-variant">Our team holds the highest industry certifications and follows rigorous ethical standards.</p>
        </div>
        <div className="flex flex-col gap-3 animate-on-scroll">
          <h4 className="text-2xl font-bold text-primary">Support Center</h4>
          <p className="text-on-surface-variant">Have questions about our specific engagement models? Our support team is available 24/7 for urgent client inquiries.</p>
          <div className="flex flex-col gap-2 mt-4">
            <a className="flex items-center gap-3 text-primary font-medium" href="tel:+1234567890">
              <span className="material-symbols-outlined">phone</span>
              +1 (800) ELITE-ACC
            </a>
            <a className="flex items-center gap-3 text-primary font-medium" href="mailto:services@eliteaccountants.com">
              <span className="material-symbols-outlined">mail</span>
              services@eliteaccountants.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
