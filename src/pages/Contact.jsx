import React, { useState } from 'react';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      e.target.reset();
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      <section className="relative w-full py-16 px-4 md:px-10 overflow-hidden rounded-3xl mt-4 border border-outline-variant">
        <div className="absolute inset-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent pointer-events-none"></div>
        <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-primary">Let's build something <span className="text-secondary">remarkable</span> together.</h1>
          <p className="text-on-surface-variant text-lg font-normal leading-relaxed">Whether you have a specific project in mind or just want to explore how we can help your business grow, our team is ready to listen.</p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
        <div className="lg:col-span-7 bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Send us a message</h3>
            <p className="text-on-surface-variant">We typically respond within 2 business hours.</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-on-surface">Full Name</span>
                <input className="form-input rounded-lg border-outline-variant bg-surface px-4 py-3 text-on-surface focus:border-primary transition-all" placeholder="John Doe" type="text" required />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-on-surface">Email Address</span>
                <input className="form-input rounded-lg border-outline-variant bg-surface px-4 py-3 text-on-surface focus:border-primary transition-all" placeholder="john@company.com" type="email" required />
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-on-surface">Phone Number</span>
                <input className="form-input rounded-lg border-outline-variant bg-surface px-4 py-3 text-on-surface focus:border-primary transition-all" placeholder="+1 (555) 000-0000" type="tel" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-on-surface">Service Interest</span>
                <select className="form-select rounded-lg border-outline-variant bg-surface px-4 py-3 text-on-surface focus:border-primary transition-all">
                  <option>Strategic Consulting</option>
                  <option>Digital Transformation</option>
                  <option>Financial Advisory</option>
                  <option>Tax Planning</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-on-surface">How can we help?</span>
              <textarea className="form-input rounded-lg border-outline-variant bg-surface px-4 py-3 text-on-surface focus:border-primary transition-all resize-none" placeholder="Tell us about your project or inquiry..." rows="5" required></textarea>
            </label>
            <button 
              className={`w-full text-on-primary font-bold py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 ${isSent ? 'bg-green-600' : 'bg-primary hover:bg-primary-container'}`} 
              type="submit" 
              disabled={isSubmitting || isSent}
            >
              {isSubmitting ? (
                <><span className="material-symbols-outlined animate-spin">progress_activity</span> Sending...</>
              ) : isSent ? (
                <><span className="material-symbols-outlined">check_circle</span> Message Sent!</>
              ) : (
                <><span className="material-symbols-outlined">send</span> Send Message</>
              )}
            </button>
          </form>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <div className="bg-primary p-8 rounded-3xl text-on-primary">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-container text-on-primary p-3 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold">Global Headquarters</h4>
                  <p className="text-on-primary/80 text-sm mt-1">1221 Ledger Heights<br />Financial District, NY 10005</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-container text-on-primary p-3 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-on-primary/80 text-sm mt-1">+1 (800) ELITE-ACC</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-container text-on-primary p-3 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-on-primary/80 text-sm mt-1">partners@sterlingledger.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-64 rounded-3xl overflow-hidden border border-outline-variant relative group shadow-sm">
            <img alt="Map" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD79D13hHsfd8382PrNYbn720O2Ilspzf6ZChqojfEe_27EZiqSqcjpHhpfmSrbvfSJZwZo4PtscJmY-IQ48Y3kUH2AZOTqYxmvvwop4nKWD_r7CETCSmR3yUSr565hBJHG0QX4jW5OJgp0Lte2vFG1SLCpeIFwJH2ESJLZyUMWQrHfURmuxqmMsz1X1_zZpemEPEZ7uzOVKi71ZjF4YXGK7PFtRsvwoGTbczVCZkDoRKLTq5hejtZ93jvBWFIb2FyOMfOCk2ynyzo" />
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-surface p-4 rounded-xl shadow-xl border border-outline-variant flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">explore</span>
                <span className="font-bold text-primary">Open in Google Maps</span>
              </div>
            </div>
          </div>

          <a className="block bg-surface border-2 border-dashed border-primary p-6 rounded-3xl hover:bg-surface-container-low transition-all text-center" href="#">
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-primary">calendar_month</span>
              <h4 className="text-xl font-bold text-primary">Schedule a Discovery Call</h4>
              <p className="text-on-surface-variant text-sm">Pick a time that works best for you. No obligation, just a 15-min chat about your goals.</p>
              <div className="mt-2 text-primary font-bold flex items-center gap-2">
                View Availability
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
