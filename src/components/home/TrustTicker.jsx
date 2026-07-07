import React from 'react';

function TrustTicker({ sectionRef }) {
  return (
    <section ref={sectionRef} className="py-12 overflow-hidden border-y border-outline-variant my-12">
      <div className="ticker-container whitespace-nowrap flex ticker-scroll">
        <div className="flex gap-16 items-center px-8">
          <span className="text-primary/40 text-2xl font-black uppercase tracking-widest italic">Lumina Tech</span>
          <span className="text-primary/40 text-2xl font-black uppercase tracking-widest italic">Vanguard Equity</span>
          <span className="text-primary/40 text-2xl font-black uppercase tracking-widest italic">Global Logistics</span>
          <span className="text-primary/40 text-2xl font-black uppercase tracking-widest italic">Apex Ventures</span>
          <span className="text-primary/40 text-2xl font-black uppercase tracking-widest italic">Horizon Bio</span>
          <span className="text-primary/40 text-2xl font-black uppercase tracking-widest italic">Nexus Digital</span>
        </div>
        <div className="flex gap-16 items-center px-8">
          <span className="text-primary/40 text-2xl font-black uppercase tracking-widest italic">Lumina Tech</span>
          <span className="text-primary/40 text-2xl font-black uppercase tracking-widest italic">Vanguard Equity</span>
          <span className="text-primary/40 text-2xl font-black uppercase tracking-widest italic">Global Logistics</span>
          <span className="text-primary/40 text-2xl font-black uppercase tracking-widest italic">Apex Ventures</span>
          <span className="text-primary/40 text-2xl font-black uppercase tracking-widest italic">Horizon Bio</span>
          <span className="text-primary/40 text-2xl font-black uppercase tracking-widest italic">Nexus Digital</span>
        </div>
      </div>
    </section>
  );
}

export default TrustTicker;
