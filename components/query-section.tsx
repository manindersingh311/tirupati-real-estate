"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function QuerySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Query submitted:", formData);
    alert("Thank you! We will connect with you shortly.");
  };

  return (
    <section className="relative z-20 bg-white mx-4 lg:mx-12">
      {/* Cloud/Mist Effect Overlay - Blends Hero into this section */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
          {/* Left Column: Information */}
          <div className="col-span-1 space-y-6 self-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-4">
                Let&apos;s Find Your{" "}
                <span className="text-primary">Dream Home</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our expert consultants are ready to guide you through every step
                of your real estate journey. Whether buying, selling, or
                investing, we provide personalized solutions.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                      Call Us Directly
                    </p>
                    <p className="text-xl font-bold text-slate-900">
                      {" "}
                      <a
                        href="tel:+91 9996126426"
                        className="text-slate-600 hover:text-slate-900 text-lg font-bold text-center py-2"
                      >
                        +91 99961-26426
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center Column: Formal Broker Image */}
          <div className="col-span-1 relative flex justify-center items-end h-full min-h-[400px] md:min-h-[500px]">
            {/* The image is positioned to "stand" on the bottom of the grid, potentially overlapping visually if we wanted, but here it sits nicely in the center */}
            <div className="relative w-full h-full flex items-end justify-center">
              <div className="absolute bottom-0 w-full h-[110%] md:h-[120%] z-10">
                {/* Using overflow-visible on parent or specific positioning to allow head to pop up if needed, but container clips by default. 
                        For "half image", we'll fit it nicely. */}
                <Image
                  src="/agent.png"
                  alt="Expert Real Estate Consultant"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
              {/* Decorative Circle/Glow behind head */}
              <div className="absolute bottom-0 w-[80%] aspect-square bg-gradient-to-t from-slate-200 to-transparent rounded-full opacity-50 blur-3xl -z-10" />
            </div>
          </div>

          {/* Right Column: Query Form */}
          <div className="col-span-1 self-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 relative z-20"
            >
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                Quick Inquiry
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="q_name"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="q_name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="q_email"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="q_email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="q_phone"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="q_phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900"
                    placeholder="+91"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 mt-2 bg-gradient-to-r from-primary to-yellow-500 hover:from-yellow-400 hover:to-primary text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Get a Call Back
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
