import React from 'react';

function Resources() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-10 space-y-6">
      <div className="flex flex-wrap justify-between gap-3 pt-6">
        <div className="flex min-w-[288px] flex-col gap-3">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-primary">Resources &amp; Insights</h1>
          <p className="text-secondary text-base font-normal leading-normal">Expert perspectives on tax, audit, and advisory delivered to your workspace.</p>
        </div>
      </div>

      <div className="py-3 sticky top-[72px] z-10 bg-surface/80 backdrop-blur-md">
        <label className="flex flex-col min-w-40 h-14 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm border border-outline-variant overflow-hidden">
            <div className="text-secondary flex bg-surface-container items-center justify-center pl-4 pr-2">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden text-on-surface focus:outline-0 focus:ring-0 border-none bg-surface-container h-full placeholder:text-secondary px-2 text-base font-normal leading-normal" placeholder="Search articles, guides, and more..." type="text" />
          </div>
        </label>
      </div>

      <div className="flex gap-3 flex-wrap">
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-6 transition-all hover:shadow-md">
          <p className="text-white text-sm font-semibold leading-normal">All Topics</p>
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-container-high px-6 transition-all hover:bg-outline-variant">
          <p className="text-on-surface text-sm font-medium leading-normal">Tax</p>
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-container-high px-6 transition-all hover:bg-outline-variant">
          <p className="text-on-surface text-sm font-medium leading-normal">Audit</p>
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-container-high px-6 transition-all hover:bg-outline-variant">
          <p className="text-on-surface text-sm font-medium leading-normal">Advisory</p>
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-container-high px-6 transition-all hover:bg-outline-variant">
          <p className="text-on-surface text-sm font-medium leading-normal">Strategy</p>
        </button>
      </div>

      <div className="group flex flex-col lg:flex-row items-stretch justify-start rounded-xl overflow-hidden border border-outline-variant bg-white shadow-sm hover:shadow-lg transition-all duration-300 mt-6">
        <div className="w-full lg:w-1/2 overflow-hidden h-64 lg:h-96">
          <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAr7bnBl_CG_B1wGFSkIAenZWtHVMvWeJm1R67Z3JcFIwxjHn2OlQluSISsoS2DoZ4dMWQjZvCDOq3mmGwNG8NXVdRlaQl6kpqGXQrEc74ukX6jMqhQs-2oZClSilp06vl6KODKtQ4JFGb-jZObsatdVwDWHmqj7pI9CPnG2vhvD879rufJlLz6wLU8nCHOBxVt9cFIgU3IvNJLOjEAw47b6gZYgXzY6jvx2NmkOgTOj4nDGdj9oi4Q07MGGdtDV5QVvpqFmBEddxo')" }}>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 grow flex-col items-stretch justify-center gap-4 p-6 lg:p-10">
          <div className="flex items-center gap-2">
            <span className="bg-primary-container text-on-primary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Featured</span>
            <span className="text-secondary text-sm">March 24, 2024</span>
          </div>
          <h3 className="text-on-surface text-2xl md:text-3xl font-black leading-tight tracking-tight">Navigating New Tax Regulations for 2024</h3>
          <p className="text-secondary text-base leading-relaxed">
            Stay ahead of the curve with our comprehensive guide to the upcoming fiscal changes and their impact on your business. From individual rate adjustments to new corporate reporting standards.
          </p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-primary-container flex items-center justify-center text-white font-bold text-xs">JD</div>
              <span className="text-sm font-semibold">Julianna Dorsey</span>
            </div>
            <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold transition-all hover:bg-primary-container">
              <span>Read Article</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <article className="flex flex-col bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div className="aspect-[16/9] overflow-hidden">
            <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJUVm-Vv_Tmluh7fa9kfqPNSKio-ihtCSETc-Y6e5YzlyVpJUPUd2jKGMcRDSETodKLz_y7oxfMK7o4XSjT4pPYfDvsGKsIWCP0q6FHNFha8juPUiCW3hCYnfeDjdpbRu9qKA2hYIuwxaiZejXniqyAAkeE3aSCkg3FK9EjJdmrLK4FXJC4t7j6eyuVefcKxrL4Mbg-m0zSTsEQVPS7-h8oK3G_3ytaMf5DanybykHcWDJHhmADyCko7O6t8OENpjf_ET8YzG5Do4')" }}>
            </div>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Financial Planning</span>
              <span className="text-secondary text-xs">5 min read</span>
            </div>
            <h4 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">Retirement Planning Tips for the Modern Professional</h4>
            <p className="text-secondary text-sm line-clamp-3">Strategic insights for securing your financial future in an era of market volatility and changing social security landscapes.</p>
            <a className="mt-2 text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
              Continue Reading <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </article>

        <article className="flex flex-col bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div className="aspect-[16/9] overflow-hidden">
            <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqrhSPJNQk5yrEy5taleVuUHtyxZZPMuc-PLzwx0WeWCkdAq_JaWYdRI6khFWV4XjH7nKz6ypvbA9N-iiuOhNGGK__X7pe7zV3nJisn5KwKz2sgKmpDdgt7E0jWSTb3pOa-3uysktfOHs7qpGQ0aZ9abX05Kg5YwJg0r7Kinf6nnGc4wi1ERpz8UO--GwxtPuroOAuih9HrHdOJIzZ3fV9FCoQjndfCWKWXsxzucaL3UKyVb3Zb6S2t1YWQzYJhxIOK55reiZGDW0')" }}>
            </div>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Compliance</span>
              <span className="text-secondary text-xs">8 min read</span>
            </div>
            <h4 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">Corporate Audit Checklist: Are You Fully Prepared?</h4>
            <p className="text-secondary text-sm line-clamp-3">A step-by-step framework to ensure your internal controls meet international standards before the auditor arrives.</p>
            <a className="mt-2 text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
              Continue Reading <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </article>

        <article className="flex flex-col bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div className="aspect-[16/9] overflow-hidden">
            <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBatY8L9lKRdQm6EELQ9ssIOyBcpzJx_XcDz_pYfPbHCJJ3c3ecpLcjG5p2iDP0nABBVVW9VFBubdkCsKRM2FSTBRdduf6Jvo1aCNkd4yLZFPccoAuFLRJ-4OYjbYliW93ELBoGESVHxqk_UDHmMcubWt9dJ9DGjBwgfao2ikWAyCRBxlLFSO52CLBNQa-Ojo9ctR9beHv7jIevuTKpENnmMYB_vrE2TscFHgZrrus4fYTPDvxW2E1ACVVj0kw4qqgLkUTrNYelAYo')" }}>
            </div>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Advisory</span>
              <span className="text-secondary text-xs">12 min read</span>
            </div>
            <h4 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">Strategic Advisory: Growth in the Digital Age</h4>
            <p className="text-secondary text-sm line-clamp-3">How leveraging data analytics and AI can transform your business strategy from reactive to proactively visionary.</p>
            <a className="mt-2 text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
              Continue Reading <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </article>

        <article className="flex flex-col bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div className="aspect-[16/9] overflow-hidden">
            <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDV5Jrnuvq9H9ih7ZloLEBneBqx-KGffB9brZvfVeAFemlsaAsWuC39066loRRDMoVKH0sV550C1zE0SjpEpj2SHltxSaimOXhu7fZ4TB37pwoBWgd1gslqSvAqvUYFbdxyQPyhf8ejG7DdQPclbamtoquVxhLhUBFnNiAULFNH17Niz7U0C9JcM9ILJx12nCshPeRVt3MoGsA1-rxsDiE4jIj6MMyyQB-CASQdNEvOCgmwk0ARq4C80Vzca7MeexzTtABhoAX5agY')" }}>
            </div>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">International Tax</span>
              <span className="text-secondary text-xs">10 min read</span>
            </div>
            <h4 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">Cross-Border Challenges in Modern Commerce</h4>
            <p className="text-secondary text-sm line-clamp-3">Navigating the complexities of international trade and the shifting landscape of global VAT and tariff regulations.</p>
            <a className="mt-2 text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
              Continue Reading <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </article>
      </div>

      <div className="flex justify-center py-10">
        <button className="flex items-center gap-2 px-8 py-3 bg-surface border border-outline text-on-surface font-bold rounded-lg hover:bg-surface-container transition-all">
          Load More Articles
          <span className="material-symbols-outlined">refresh</span>
        </button>
      </div>

      <div className="my-8 p-8 md:p-12 bg-primary rounded-3xl text-center text-white relative overflow-hidden group">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-fixed rounded-full opacity-10 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Never miss an update.</h2>
          <p className="text-inverse-primary text-base mb-8 max-w-md mx-auto">Subscribe to our weekly newsletter and get the latest insights delivered directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 px-4 py-3 rounded-xl text-on-surface focus:ring-2 focus:ring-primary-fixed-dim outline-none border-none" placeholder="Your email address" required type="email" />
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-surface-container transition-all" type="submit">
              Subscribe Now
            </button>
          </form>
          <p className="mt-4 text-xs text-inverse-primary opacity-70">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
        </div>
      </div>
    </div>
  );
}

export default Resources;
