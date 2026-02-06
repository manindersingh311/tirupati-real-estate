"use client";

import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { LiaFacebookF, LiaInstagram, LiaYoutube } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";

export function Footer() {
  function scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <footer className="relative z-10 bg-white/90 text-slate-900 pt-10 pb-8 border-t rounded-2xl border-slate-200 mx-4 lg:mx-12 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div
              className="mb-6 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <span className="flex items-center gap-1 font-serif font-bold text-black">
                <span className="text-2xl lg:text-3xl">Tirupati</span>
                <span className="text-primary text-2xl">|</span>
                <div className="text-sm lg:text-lg leading-tight">
                  Builders <br />
                  Properties
                </div>
              </span>
            </div>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Your trusted partner for buying, selling, and building. We deliver
              excellence in every square foot, crafting homes that last
              generations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@Tirupati_Builders"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all"
              >
                <LiaYoutube className="text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/tirupatibuilder_s/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all"
              >
                <LiaInstagram className="text-3xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587665035908"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all"
              >
                <LiaFacebookF className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-serif font-bold mb-4 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-600 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-600 hover:text-primary transition-colors text-sm"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("showcase")}
                  className="text-slate-600 hover:text-primary transition-colors text-sm"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-600 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 font-serif font-bold mb-4 text-lg">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-primary transition-colors text-sm"
                >
                  Construction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-primary transition-colors text-sm"
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-primary transition-colors text-sm"
                >
                  Architecture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-primary transition-colors text-sm"
                >
                  Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 font-serif font-bold mb-4 text-lg">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {/* Email */}
              <li className="flex items-start gap-3">
                <MdOutlineMail className="text-2xl text-slate-600 mt-0.5" />
                <a
                  href="mailto:info@tirupatibuilders.com"
                  className="text-slate-600 hover:text-slate-900 text-sm leading-relaxed break-all"
                >
                  info@tirupatibuilders.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <FiPhoneCall className="text-2xl text-slate-600 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919996126426"
                    className="text-slate-600 hover:text-slate-900 text-sm whitespace-nowrap"
                  >
                    +91 99961-26426
                  </a>
                  <a
                    href="tel:+919871044320"
                    className="text-slate-600 hover:text-slate-900 text-sm whitespace-nowrap"
                  >
                    +91 98710-44320
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <CiLocationOn className="text-3xl text-slate-600 mt-1" />
                <span className="text-slate-600 text-sm leading-relaxed">
                  EF-40, Ground Floor, <br />
                  TDI Espinia Heights, <br />
                  Sec-19, Sonipat-131001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © 2024 Tirupati Builders & Properties. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-slate-500 hover:text-slate-900 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-slate-900 transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="https://bytsmartz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors text-sm"
            >
              Designed By Bytsmartz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
