import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileMenu, closeMobileMenu } from "../../store/uiSlice";
import { Link } from "react-router-dom";

function Header() {
  const isMobileMenuOpen = useSelector((state) => state.ui.isMobileMenuOpen);
  const dispatch = useDispatch();

  const handleNavClick = () => {
    dispatch(closeMobileMenu());
  };

  return (
    <header className="sticky top-0 z-50 flex flex-col px-4 py-3 border-b border-solid rounded-lg shadow-sm whitespace-nowrap border-outline-variant lg:px-10 bg-surface-container-lowest">
      <div className="flex items-center justify-between w-full">
        <Link
          to="/"
          onClick={handleNavClick}
          className="flex items-center gap-4 transition-opacity text-primary hover:opacity-90"
        >
          <div className="w-10 h-10 ">
            <img src="/logo.jpeg" alt="error" />
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight text-primary">
            TAX NAVIGO
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="justify-end flex-1 hidden gap-8 md:flex">
          <div className="flex items-center gap-9">
            <Link
              to="/services"
              className="text-sm font-medium transition-colors text-on-surface hover:text-primary"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium transition-colors text-on-surface hover:text-primary"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium transition-colors text-on-surface hover:text-primary"
            >
              Contact
            </Link>
          </div>
          <Link
            to="/contact"
            className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary-container text-on-primary text-sm font-bold shadow-md hover:brightness-110 transition-all"
          >
            <span>Book Now</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            className="p-2 transition-colors rounded-lg text-primary hover:bg-surface-container"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="flex flex-col w-full gap-4 pt-6 pb-4 mt-4 border-t md:hidden border-outline-variant animate-in slide-in-from-top-4">
          <Link
            onClick={handleNavClick}
            to="/services"
            className="px-2 py-2 text-base font-medium rounded-lg text-on-surface hover:bg-surface-container"
          >
            Services
          </Link>
          <Link
            onClick={handleNavClick}
            to="/about"
            className="px-2 py-2 text-base font-medium rounded-lg text-on-surface hover:bg-surface-container"
          >
            About Us
          </Link>
          <Link
            onClick={handleNavClick}
            to="/contact"
            className="px-2 py-2 text-base font-medium rounded-lg text-on-surface hover:bg-surface-container"
          >
            Contact
          </Link>
          <Link
            onClick={handleNavClick}
            to="/contact"
            className="mt-2 w-full flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary-container text-on-primary text-base font-bold shadow-md"
          >
            <span>Book Now</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
