import React from 'react';

function TrustTicker({ sectionRef }) {
  return (
    <section ref={sectionRef} className="py-8 sm:py-12 overflow-hidden border-y border-outline-variant my-8 sm:my-12">
      <div className="ticker-container whitespace-nowrap flex ticker-scroll">
        <div className="flex gap-6 sm:gap-8 md:gap-16 items-center px-3 sm:px-4 md:px-8">
          <span className="text-primary/40 text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider sm:tracking-widest italic">Lumina Tech</span>
          <span className="text-primary/40 text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider sm:tracking-widest italic">Vanguard Equity</span>
          <span className="text-primary/40 text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider sm:tracking-widest italic">Global Logistics</span>
          <span className="text-primary/40 text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider sm:tracking-widest italic">Apex Ventures</span>
          <span className="text-primary/40 text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider sm:tracking-widest italic">Horizon Bio</span>
          <span className="text-primary/40 text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider sm:tracking-widest italic">Nexus Digital</span>
        </div>
        <div className="flex gap-6 sm:gap-8 md:gap-16 items-center px-3 sm:px-4 md:px-8">
          <span className="text-primary/40 text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider sm:tracking-widest italic">Lumina Tech</span>
          <span className="text-primary/40 text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider sm:tracking-widest italic">Vanguard Equity</span>
          <span className="text-primary/40 text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider sm:tracking-widest italic">Global Logistics</span>
          <span className="text-primary/40 text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider sm:tracking-widest italic">Apex Ventures</span>
          <span className="text-primary/40 text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider sm:tracking-widest italic">Horizon Bio</span>
          <span className="text-primary/40 text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider sm:tracking-widest italic">Nexus Digital</span>
        </div>
      </div>
    </section>
  );
}

export default TrustTicker;
