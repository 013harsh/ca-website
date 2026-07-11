import React from "react";
import { Link } from "react-router-dom";

function Hero({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col gap-6 px-4 py-6 overflow-hidden border shadow-sm sm:px-6 sm:py-8 lg:flex-row lg:items-center lg:py-4 hero-gradient rounded-2xl sm:rounded-3xl lg:px-12 border-outline-variant"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-10 bg-gradient-to-l from-primary/30 to-transparent">
        {/* Fallback for animated-svg */}
      </div>
      <div className="z-10 flex flex-col flex-1 gap-4 sm:gap-6 items-center lg:items-start text-center lg:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-xs font-bold rounded-full bg-secondary-container text-on-secondary-container w-fit">
          <span
            className="text-xs sm:text-sm material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
          LICENSED CHARTERED ACCOUNTANTS
        </div>
        <h1 className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
          Expert Financial Guidance for Your Future
        </h1>
        <p className="text-on-surface-variant text-base sm:text-lg lg:text-xl max-w-[600px] leading-relaxed">
          We go beyond basic accounting to provide strategic tax planning,
          auditing, and corporate advisory that accelerates your business
          growth.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 mt-2 w-full">
          <button className="flex w-full sm:w-auto min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-12 sm:h-14 px-6 sm:px-8 bg-primary text-on-primary text-sm sm:text-base font-bold shadow-lg hover:-translate-y-1 transition-all active:scale-95">
            <Link
              to="/contact"
              className="text-sm font-medium text-white transition-colors hover:text-white/80"
            >
              Book a Consultation
            </Link>
          </button>

          <button className="flex w-full sm:w-auto min-w-[140px] cursor-pointer items-center justify-center rounded-xl h-12 sm:h-14 px-6 sm:px-8 border-2 border-primary text-primary text-sm sm:text-base font-bold hover:bg-primary/5 transition-all active:scale-95">
            <Link
              to="/services"
              className="text-sm font-medium transition-colors text-primary hover:text-primary/80"
            >
              View Services
            </Link>
          </button>
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-3 mt-4 sm:mt-6">
          <div className="flex -space-x-2.5">
            <img
              alt="User 1"
              className="object-cover border-2 border-white rounded-full size-9 sm:size-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAszw328YahWU9vd8ZcGiIP7gLh6kL685FqBWUP8xNAIqQp2fa-MVYNS0yOcBjbSumLa_0QjCDe2TB2lW5MLGHwrGO0JOsTWlZVsBb--TNp_tP2gCMxywhUztWAAykwEEsEQAv48CqlIm5IYaVqVOh6HV6bEbLzsQXvyw12PIfuL2r-2yPk6eCj9NYjUfaHm6FYjRCla5AePFSmV3TmrpODAYoi7U2PT3OFWXFu3FB0MaJ5CnwwBYNTcW79aDn7dJCK38SSM8u3Ieg"
            />
            <img
              alt="User 2"
              className="object-cover border-2 border-white rounded-full size-9 sm:size-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjxxR_BVcOprD8GOhPGMVgx8v3NmGnXMMLNoBmkivcSAOpYUaw2A6eT0Cvw6wGuUSU2PgyYDPnFjKuRz3Slhx7ARYQKhQonTUIhCUIivP0F19THzHAi-CbAD4iRU4E8YLzV8lwDEeWnQGfa2BMjyHeMPTUKwwUs3NhFuFuJv6ymcFGf288hww5Sk5D3L7kh9WeIU-Dq88oT9bby-xu-HUgpaOim1DuemLRoJGa_XSzCJS9ee6OoYxEmFvWakyxe7vilXNtux7p6DY"
            />
            <img
              alt="User 3"
              className="object-cover border-2 border-white rounded-full size-9 sm:size-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5iMFEc9c6vTFDT4IgIRWtbA7FxbEvietZSTmlZwc5gxH_hbMKfbVUmyleXJwDlgmSodwgriEg3doSQwJ1KQgW2zzRrcrgQCpQZRomoZArKkIcCE-JddlrJ30Xe_MJQ8puPZCLXUf1lIVcEeFG6gk9v_AaJGNj4V6aCXJ3YI6GVTwcOhVgcB4xKFiPzXrjsESy3YkiXkrBde137kbHae7qdhjH70gCwpvwTp9CmqIzlHopvZItWBSVxPfdPdEnlx2HJCiIVbbMLgc"
            />
          </div>
          <p className="text-xs sm:text-sm font-medium text-on-surface-variant">
            Join <span className="font-bold text-primary">500+</span> global
            businesses
          </p>
        </div>
      </div>
      <div className="relative z-10 flex-1 w-full">
        <div className="overflow-hidden border-4 sm:border-8 border-white shadow-2xl aspect-video lg:aspect-square rounded-xl sm:rounded-2xl">
          <img
            alt="Hero Workspace"
            className="object-cover w-full h-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIfkaDCKejd477IPr51mO8HmwGn5uOowV9vKwCOqx_gSI06BVuEREEbih3BTvvUMkqMTt71Lpm4Ze_T2yPPGWu8SjoMMnbD0p2fJouUgz1kwrhLaRFACXt2efAIGyu6X8HJMbV5J394OG9hXko0i-GkA4ksReF6mfMDdwdwFdz1SfOCYnZIQl5iCoEFkH7bl4JKnBynj-BHNACVkWhVxciMnyec6A5gFb_MUPGm0NzGrb7FmVcMhjVvg54fVa1_USpJ5Wib9eLmTI"
          />
        </div>
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:-bottom-6 md:-left-6 bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-outline-variant max-w-[200px] sm:max-w-[240px] animate-bounce">
          <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
            <div className="p-1.5 sm:p-2 text-white rounded-lg bg-tertiary-container">
              <span className="material-symbols-outlined text-base sm:text-xl">trending_up</span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-primary">ROI Focused</span>
          </div>
          <p className="text-[10px] sm:text-xs text-on-surface-variant">
            Strategic planning that consistently outperforms market benchmarks.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
