import React from "react";

function Testimonials({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      className="hidden md:block py-8 sm:py-12 md:py-20 px-4 bg-primary rounded-2xl sm:rounded-[3rem] my-6 sm:my-8 md:my-16 text-on-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent">
        {/* Fallback for webgl-shader */}
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 leading-tight">
              What Our Clients Say About Us
            </h2>
            <div className="flex gap-3 sm:gap-4 items-center">
              <div className="h-px bg-on-primary/30 flex-1"></div>
              <div className="flex gap-0.5 sm:gap-1 text-tertiary-container">
                <span
                  className="material-symbols-outlined text-base sm:text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-base sm:text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-base sm:text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-base sm:text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-base sm:text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/20">
              <p className="text-base sm:text-lg md:text-xl italic mb-4 sm:mb-6 leading-relaxed">
                "CA Shubham transformed our financial operations. Their tax
                strategy alone saved us six figures last fiscal year. They
                aren't just accountants; they are partners in our success."
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  alt="Sarah Jenkins"
                  className="size-12 sm:size-14 rounded-full object-cover ring-2 ring-white/50"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgB7XQMDKT_L7Rj6k6zA8d8dLhL2cgAQle_kOON69DdpdMle5qaGzYxS1sDv-5ysjgjtY-zWkMp0Pix02GCP9-XY8TRBEaRCFoXRFIkOtN_SQRAFGsOIswRkMqh-F9XMYOxSSDUMjzxdbjYzKdHMvYvJTKZMn-lX44G9UgW3f855kW3E9rjb3F1H655v8brBZTOrYfQJgnQX47m_L-6yA5HUm2aKMzoGP9N9E-CYmOXwsLWZxJgjX6Z6Yn5TbiBzTuuJC6bfJ6Kuo"
                />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">
                    Sarah Jenkins
                  </h4>
                  <p className="text-xs sm:text-sm opacity-70">
                    CEO, Lumina Tech Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
