import React from "react";
import { Link } from "react-router-dom";

function CTA({ sectionRef }) {
  return (
    <section ref={sectionRef} className="px-4 py-8 sm:py-12 md:py-20 text-center">
      <div className="max-w-3xl mx-auto bg-surface-container-high p-6 sm:p-8 md:p-12 lg:p-20 rounded-2xl sm:rounded-[3rem] shadow-sm border border-outline-variant relative overflow-hidden">
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full -top-16 -right-16 sm:-top-24 sm:-right-24 bg-primary/5 blur-3xl"></div>
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full -bottom-16 -left-16 sm:-bottom-24 sm:-left-24 bg-primary/5 blur-3xl"></div>
        <h2 className="relative mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-black text-primary lg:text-5xl">
          Ready to scale your business?
        </h2>
        <p className="relative mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg text-on-surface-variant lg:text-xl">
          Schedule a free 30-minute discovery call with our senior partners
          today.
        </p>
        <div className="relative flex flex-col justify-center gap-3 sm:gap-4 sm:flex-row">
          <button className="flex w-full sm:w-auto min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-12 sm:h-14 px-6 sm:px-8 bg-primary text-on-primary text-base sm:text-lg font-bold shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
            <Link to="/contact">Book Now</Link>
          </button>
          <button className="flex w-full sm:w-auto min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-12 sm:h-14 px-6 sm:px-8 border-2 border-primary text-primary text-base sm:text-lg font-bold hover:bg-primary/5 transition-all active:scale-95">
            <Link to="/contact">Contact Sales</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
