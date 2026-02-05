"use client";

import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed z-50 transition-all duration-800 ease-in-out ${
        isScrolled
          ? "top-0 left-4 right-4 md:left-4 md:right-4 lg:left-12 lg:right-12 glass-effect py-4"
          : "top-5 left-4 right-4 md:left-4 md:right-4 lg:left-12 lg:right-12 bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <span className="flex items-center gap-1 font-serif font-bold text-black">
              <span className="text-3xl">Tirupati</span>
              <span className="text-primary text-3xl">|</span>
              <div className="text-lg leading-tight">
                Builders <br />
                Properties
              </div>
            </span>
          </div>

          {/* Desktop Location */}
          <div
            className="hidden md:flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <span className="flex items-center gap-1 font-serif font-bold text-black">
              <span className="text-4xl">
                <CiLocationOn />
              </span>

              <span className="text-primary text-4xl">|</span>
              <div className="text-sm leading-tight">
                EF-40, Ground Floor, <br />
                TDI Espinia Heights, <br />
                Sec-19, Sonipat-131001
              </div>
            </span>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:flex-col lg:flex-row items-start lg:items-center gap-3">
            <a
              href="tel:+919996126426"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-lg font-bold whitespace-nowrap"
            >
              <FiPhoneCall className="text-xl" />
              91 99961-26426
            </a>

            <a
              href="tel:+919871044320"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-lg font-bold whitespace-nowrap"
            >
              <FiPhoneCall className="text-xl" />
              91 98710-44320
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen
              ? "max-h-[600px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-4">
            {/* Mobile Location */}
            <div className="flex flex-col items-center gap-2 pb-4 border-b border-gray-200 w-full">
              <CiLocationOn className="text-3xl text-primary" />
              <div className="text-sm text-gray-700 leading-relaxed">
                EF-40, Ground Floor, <br />
                TDI Espinia Heights, <br />
                Sec-19, Sonipat-131001
              </div>
            </div>

            {/* Mobile Phone */}
            <a
              href="tel:+91 9996126426"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-lg font-bold whitespace-nowrap"
            >
              <FiPhoneCall className="text-2xl" />
              91 99961-26426
            </a>
            <a
              href="tel:+919871044320"
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-lg font-bold whitespace-nowrap"
            >
              <FiPhoneCall className="text-2xl" />
              91 98710-44320
            </a>

            {/* Book Site Visit Button */}
          </div>
        </div>
      </div>
    </nav>
  );
}
