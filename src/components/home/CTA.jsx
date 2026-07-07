import React from 'react';

function CTA({ sectionRef }) {
  return (
    <section ref={sectionRef} className="py-20 text-center px-4">
      <div className="max-w-3xl mx-auto bg-surface-container-high p-12 lg:p-20 rounded-[3rem] shadow-sm border border-outline-variant relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <h2 className="text-primary text-4xl lg:text-5xl font-black mb-6">Ready to scale your business?</h2>
        <p className="text-on-surface-variant text-lg lg:text-xl mb-10">Schedule a free 30-minute discovery call with our senior partners today.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-on-primary text-lg font-bold shadow-lg hover:shadow-primary/30 transition-all">
            Book Now
          </button>
          <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-primary text-primary text-lg font-bold hover:bg-primary/5 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
