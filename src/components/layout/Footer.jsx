import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="grid grid-cols-1 gap-8 px-4 py-12 mt-12 border-t border-outline-variant md:grid-cols-4">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <div className="size-6">
              <svg
                className="w-full h-full"
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-black">CA Shubham</h3>
          </div>
          <p className="text-sm leading-relaxed text-on-surface-variant">
            Elite chartered accountants dedicated to fostering growth and
            financial stability for businesses worldwide.
          </p>
        </div>
        <div>
          <h4 className="mb-6 font-bold text-primary">Services</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li>Tax Advisory</li>
            <li>Corporate Audits</li>
            <li>Financial Planning</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 font-bold text-primary">Company</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 font-bold text-primary">Newsletter</h4>
          <p className="mb-4 text-xs text-on-surface-variant">
            Get quarterly financial insights delivered to your inbox.
          </p>
        </div>
      </footer>
      <div className="flex flex-col items-center justify-between gap-4 px-4 py-8 text-xs border-t border-outline-variant md:flex-row text-on-surface-variant/60">
        <p>© 2026. All rights reserved.</p>
        <div className="flex gap-6">Privacy Policy || Terms of Service</div>
      </div>
    </>
  );
}

export default Footer;
