import React, { useEffect } from 'react';

function AboutUs() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(section => {
      section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12 space-y-24">
      <section className="animate-on-scroll flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Established 1995</span>
          <h1 className="text-5xl font-black text-primary leading-tight">About Sterling Ledger</h1>
          <p className="text-lg text-secondary leading-relaxed">
            Precision, Integrity, and Growth. We are more than just accountants; we are your strategic partners in navigating the complexities of modern finance.
          </p>
        </div>
        <div className="flex-1 w-full relative">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img alt="Office" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDYJUWYi3fBqAzWswhMkzDvhyOAN5wJLBArzN-u094OhQVz8UFZTHTgg70pSrZwxr2R5EATnHUgNENmm6PJy0UcVAswbDjlMWF3yIlM9VKVKSe-Zfwl8r2Rd1lQyYYyL6v5wu9nSlIpBxyHm3qDH1LoJKJEJR71qXExZJ0-TzlxibmHMteQdFTzs9J-OAQLbZrlbHgZHSKYkVg1nuuP29GQiaFKTeUQQhqjwZGs7ynoNO6gCfPvZKc9Hm8YOu4gXU6f8N_aqnBMlg" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg text-on-primary shadow-xl hidden md:block">
            <p className="text-3xl font-bold">28+</p>
            <p className="text-sm opacity-80">Years of Excellence</p>
          </div>
        </div>
      </section>

      <section className="animate-on-scroll bg-surface-container rounded-xl p-8 md:p-16" id="our-story">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-primary">Our Story</h2>
            <div className="h-1 w-20 bg-tertiary-container mx-auto"></div>
          </div>
          <div className="space-y-6 text-lg text-on-surface-variant leading-loose">
            <p>Founded in 1995, Sterling Ledger began with a simple mission: to provide transparent and precise financial guidance to small businesses. What started as a small, two-person operation in a quiet suburban office has blossomed into a premier regional powerhouse.</p>
            <p>Over the decades, we have weathered economic shifts and technological revolutions by remaining anchored to our unwavering commitment to client success and fiscal integrity. We believe that every ledger tells a story, and our job is to ensure yours is one of sustained growth and security.</p>
            <p>Today, Sterling Ledger serves a diverse portfolio of clients, from innovative tech startups to established multi-generational family enterprises, treating every account with the same meticulous care that defined our first day in business.</p>
          </div>
        </div>
      </section>

      <section className="animate-on-scroll space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-primary">Our Philosophy</h2>
          <p className="text-secondary max-w-xl mx-auto">The principles that guide every decision we make and every client we serve.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:border-primary transition-all duration-300 hover:shadow-lg text-center">
            <div className="size-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">Absolute Integrity</h3>
            <p className="text-secondary">Trust is the currency of our industry. We maintain the highest ethical standards in every audit, filing, and consultation.</p>
          </div>
          <div className="group bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:border-primary transition-all duration-300 hover:shadow-lg text-center">
            <div className="size-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">insights</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">Strategic Insight</h3>
            <p className="text-secondary">We look beyond the numbers to provide actionable intelligence that fuels long-term business scalability and personal wealth.</p>
          </div>
          <div className="group bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:border-primary transition-all duration-300 hover:shadow-lg text-center">
            <div className="size-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">handshake</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">Client Partnership</h3>
            <p className="text-secondary">Your goals are our goals. We offer personalized attention and proactive support, standing by you through every financial milestone.</p>
          </div>
        </div>
      </section>

      <section className="animate-on-scroll space-y-12" id="meet-the-partners">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-outline-variant pb-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-primary">Meet the Partners</h2>
            <p className="text-secondary">Expert leadership with over 60 combined years of financial experience.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative group">
              <img alt="Arthur Sterling" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZjeKUpRFJfgKCw0lXDGVuN0LepG_ZGk0jg8E9zsF2cjA61NJSceUiGH9_rKrxPLHlPbd8TS0B0JE6PsPopubbubAYFAdLfbf9HNJkMdwX15qVLsLQSi2a4GBUNBmATaUc3qbWTBy20zOBrC8Zxg6bMsP8vRlk0AHUZOGjvjmyxpa3fKzXukN5BAG4PPk-tWyQBTAclOqDQ47VoRHh8q2Vv0xJJn1_IWF2_el-1QLKH2Ysbcj8pOFrokPQmKlXUsBIf4FtnYXfba4" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-primary">Arthur Sterling, CPA</h3>
              <p className="text-tertiary font-medium">Founding Partner</p>
              <p className="text-sm text-secondary pt-2">Specializing in tax strategy and estate planning for high-net-worth individuals.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative group">
              <img alt="Elena Rodriguez" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhjfaDsnL1AqEoGdrZE4B3urU76PKVy6cdmL5i8lcjdGmDM6Vr_TD9GukqLyV0AjyEYuBwwhIZixooA44qIMZ9ipLXBLlDozd2ezF3FY72ErDr5hwjjag3UOim80LXdn6-XVmpdxbjr2DeNUdIrZyOB28Un7gHeyyICw3ZnSoWyT-4xWgUBUgH8kAPJesk8nUDQFvehxE0gBwoaM9gkwHXuhiWFt4xWgNjIfIfy9bzYqTgqUvPalADx7l0KvBgfoeEhfvUdWK2Koo" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-primary">Elena Rodriguez, CFA</h3>
              <p className="text-tertiary font-medium">Managing Partner</p>
              <p className="text-sm text-secondary pt-2">Expert in corporate restructuring and international investment advisory.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative group">
              <img alt="David Chen" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5LuqBriMUPt3LmcZxaW-8FDFSbD09PwinX8NsEshVMACdoto_JKzmifzFAMQJhxy--x5z1aFHiS5eQuN_w71c_1SdBS4Wcf7AXVKlIIpyCjWRgcZIon9JNzrONHriD-f89a51X3GgIhC7WZ46YsVGMm1B933APenazou0t8mRKzYbqlMwQDQH2cMELxDAAnbNJJpk2Ncs9TY-E90lI4mOFNPPZxRQF0udgA22H8ttFnpQxsiMjN2VgKbSVjf-YbZamKrFWWYaTlk" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-primary">David Chen, MBA</h3>
              <p className="text-tertiary font-medium">Head of Advisory</p>
              <p className="text-sm text-secondary pt-2">Focuses on business valuations and M&amp;A consulting for mid-market companies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="animate-on-scroll relative rounded-2xl overflow-hidden bg-primary text-on-primary p-12 md:p-20 text-center space-y-8">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
        <div className="relative z-10 space-y-6">
          <h2 className="text-5xl font-black">Ready to Write Your Success Story?</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">Let Sterling Ledger provide the financial clarity you need to grow your business with confidence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-4 bg-tertiary-container text-on-tertiary-container font-bold rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
              Schedule a Consultation
              <span className="material-symbols-outlined">calendar_month</span>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-on-primary text-on-primary font-bold rounded-xl hover:bg-on-primary hover:text-primary transition-all">
              View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
