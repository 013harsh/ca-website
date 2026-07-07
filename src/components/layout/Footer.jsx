import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="py-12 border-t border-outline-variant mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 text-primary mb-6">
            <div className="size-6">
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"></path></svg>
            </div>
            <h3 className="font-black text-lg">Sterling Ledger</h3>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Elite chartered accountants dedicated to fostering growth and financial stability for businesses worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li><Link className="hover:text-primary transition-colors" to="/services">Tax Advisory</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/services">Corporate Audits</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/services">Financial Planning</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/services">Risk Management</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6">Company</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/about">Our Team</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/resources">Case Studies</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6">Newsletter</h4>
          <p className="text-xs text-on-surface-variant mb-4">Get quarterly financial insights delivered to your inbox.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 bg-surface-container border-outline-variant rounded-lg text-sm px-4 focus:ring-primary focus:border-primary" placeholder="Email address" type="email" />
            <button className="bg-primary text-on-primary p-2 rounded-lg hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>
      </footer>
      <div className="py-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 px-4 text-xs text-on-surface-variant/60">
        <p>© 2024 Sterling Ledger Chartered Accountants. All rights reserved.</p>
        <div className="flex gap-6">
          <Link className="hover:text-primary" to="/">Privacy Policy</Link>
          <Link className="hover:text-primary" to="/">Terms of Service</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
