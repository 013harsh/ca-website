import React, { useState } from "react";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const WEBHOOK_URL = import.meta.env.VITE_GOOGLESHEETURI;
      console.log(WEBHOOK_URL);

      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      setIsSent(true);
      e.target.reset();
      setTimeout(() => setIsSent(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      <section className="relative w-full px-5 py-10 mt-4 overflow-hidden border md:py-16 md:px-10 rounded-3xl border-outline-variant">
        <div className="absolute inset-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent pointer-events-none"></div>
        <div className="relative z-10 flex flex-col max-w-2xl gap-4">
          <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] md:text-4xl lg:text-5xl text-primary">
            Let's build something{" "}
            <span className="text-secondary">remarkable</span> together.
          </h1>
          <p className="text-base font-normal leading-relaxed md:text-lg text-on-surface-variant">
            Whether you have a specific project in mind or just want to explore
            how we can help your business grow, our team is ready to listen.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 py-10 md:gap-12 md:py-16 lg:grid-cols-12">
        <div className="p-6 border shadow-sm md:p-8 lg:col-span-7 bg-surface-container-lowest rounded-3xl border-outline-variant">
          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-bold text-primary">
              Send us a message
            </h3>
            <p className="text-on-surface-variant">
              We typically respond within 2 business hours.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-on-surface">
                  Full Name
                </span>
                <input
                  name="name"
                  className="px-4 py-3 transition-all rounded-lg form-input border-outline-variant bg-surface text-on-surface focus:border-primary"
                  placeholder="John Doe"
                  type="text"
                  required
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-on-surface">
                  Email Address
                </span>
                <input
                  name="email"
                  className="px-4 py-3 transition-all rounded-lg form-input border-outline-variant bg-surface text-on-surface focus:border-primary"
                  placeholder="john@company.com"
                  type="email"
                />
              </label>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-on-surface">
                  Phone Number
                </span>
                <input
                  name="phone"
                  className="px-4 py-3 transition-all rounded-lg form-input border-outline-variant bg-surface text-on-surface focus:border-primary"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-on-surface">
                  Service Interest
                </span>
                <select
                  name="service"
                  className="px-4 py-3 transition-all rounded-lg form-select border-outline-variant bg-surface text-on-surface focus:border-primary"
                >
                  <option>Strategic Consulting</option>
                  <option>Digital Transformation</option>
                  <option>Financial Advisory</option>
                  <option>Tax Planning</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-on-surface">
                How can we help?
              </span>
              <textarea
                name="message"
                className="px-4 py-3 transition-all rounded-lg resize-none form-input border-outline-variant bg-surface text-on-surface focus:border-primary"
                placeholder="Tell us about your project or inquiry..."
                rows="3"
              ></textarea>
            </label>
            <button
              className={`w-full text-on-primary font-bold py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 ${isSent ? "bg-green-600" : "bg-primary hover:bg-primary-container"}`}
              type="submit"
              disabled={isSubmitting || isSent}
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin">
                    progress_activity
                  </span>{" "}
                  Sending...
                </>
              ) : isSent ? (
                <>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>{" "}
                  Message Sent!
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">send</span> Send
                  Message
                </>
              )}
            </button>
          </form>
        </div>

        <div className="space-y-6 md:space-y-8 lg:col-span-5">
          <div className="p-6 md:p-8 bg-primary rounded-3xl text-on-primary">
            <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center p-3 rounded-full bg-primary-container text-on-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="mt-1 text-sm text-on-primary/80">
                    Pyramid Urban Homes Sector 67A
                    <br />
                    Flat Number 605, Tower 9
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center p-3 rounded-full bg-primary-container text-on-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="mt-1 text-sm text-on-primary/80">
                    <a href="tel:+919896024684" className="hover:underline">
                      +91 9896024684
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center p-3 rounded-full bg-primary-container text-on-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="mt-1 text-sm text-on-primary/80">
                    <a
                      href="mailto:hkagagrwal013@gmail.com"
                      className="hover:underline"
                    >
                      hkagagrwal013@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/3NUxjMoAejfnDom86"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full overflow-hidden border shadow-sm h-52 md:h-64 rounded-3xl border-outline-variant group"
          >
            <img
              alt="Map"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD79D13hHsfd8382PrNYbn720O2Ilspzf6ZChqojfEe_27EZiqSqcjpHhpfmSrbvfSJZwZo4PtscJmY-IQ48Y3kUH2AZOTqYxmvvwop4nKWD_r7CETCSmR3yUSr565hBJHG0QX4jW5OJgp0Lte2vFG1SLCpeIFwJH2ESJLZyUMWQrHfURmuxqmMsz1X1_zZpemEPEZ7uzOVKi71ZjF4YXGK7PFtRsvwoGTbczVCZkDoRKLTq5hejtZ93jvBWFIb2FyOMfOCk2ynyzo"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-primary/20 group-hover:opacity-100">
              <div className="flex flex-col items-center gap-2 p-4 border shadow-xl bg-surface rounded-xl border-outline-variant">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    explore
                  </span>
                  <span className="font-bold text-primary">
                    Open in Google Maps
                  </span>
                </div>
                <span className="text-xs font-medium text-center text-primary/80">
                  Pyramid Urban Homes Sector 67A
                  <br />
                  Flat Number 605, Tower 9
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
