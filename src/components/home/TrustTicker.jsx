import React from "react";

function TrustTicker({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      className="hidden md:block py-8 my-8 overflow-hidden sm:py-12 border-y border-outline-variant sm:my-12"
    >
      <div className="flex ticker-container whitespace-nowrap ticker-scroll">
        <div className="flex items-center gap-6 px-3 sm:gap-8 md:gap-16 sm:px-4 md:px-8">
          <span className="text-base italic font-black tracking-wider uppercase text-primary/40 sm:text-xl md:text-2xl sm:tracking-widest">
            Lumina Tech
          </span>
          <span className="text-base italic font-black tracking-wider uppercase text-primary/40 sm:text-xl md:text-2xl sm:tracking-widest">
            Vanguard Equity
          </span>
          <span className="text-base italic font-black tracking-wider uppercase text-primary/40 sm:text-xl md:text-2xl sm:tracking-widest">
            Global Logistics
          </span>
          <span className="text-base italic font-black tracking-wider uppercase text-primary/40 sm:text-xl md:text-2xl sm:tracking-widest">
            Apex Ventures
          </span>
          <span className="text-base italic font-black tracking-wider uppercase text-primary/40 sm:text-xl md:text-2xl sm:tracking-widest">
            Horizon Bio
          </span>
          <span className="text-base italic font-black tracking-wider uppercase text-primary/40 sm:text-xl md:text-2xl sm:tracking-widest">
            Nexus Digital
          </span>
        </div>
        <div className="flex items-center gap-6 px-3 sm:gap-8 md:gap-16 sm:px-4 md:px-8">
          <span className="text-base italic font-black tracking-wider uppercase text-primary/40 sm:text-xl md:text-2xl sm:tracking-widest">
            Lumina Tech
          </span>
          <span className="text-base italic font-black tracking-wider uppercase text-primary/40 sm:text-xl md:text-2xl sm:tracking-widest">
            Vanguard Equity
          </span>
          <span className="text-base italic font-black tracking-wider uppercase text-primary/40 sm:text-xl md:text-2xl sm:tracking-widest">
            Global Logistics
          </span>
          <span className="text-base italic font-black tracking-wider uppercase text-primary/40 sm:text-xl md:text-2xl sm:tracking-widest">
            Apex Ventures
          </span>
          <span className="text-base italic font-black tracking-wider uppercase text-primary/40 sm:text-xl md:text-2xl sm:tracking-widest">
            Horizon Bio
          </span>
          <span className="text-base italic font-black tracking-wider uppercase text-primary/40 sm:text-xl md:text-2xl sm:tracking-widest">
            Nexus Digital
          </span>
        </div>
      </div>
    </section>
  );
}

export default TrustTicker;
