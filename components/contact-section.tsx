"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative z-10 py-10 md:py-20 mb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white/90 mb-4 text-shadow-lg">Start Your Journey</h2>
          <p className="text-white/90 text-lg font-light">
            Have questions about a property or need assistance? We&apos;re here to help.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-foreground/40 transition-all outline-none backdrop-blur-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-foreground/40 transition-all outline-none backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="mobile" className="block text-sm font-medium text-foreground/80 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-foreground/40 transition-all outline-none backdrop-blur-sm"
                  placeholder="+91 98765-43210"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground/80 mb-2"
              >
                Subject
              </label>

              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              >
                {/* Placeholder */}
                <option value="" disabled className="bg-white text-black">
                  Select a topic
                </option>

                {/* Options */}
                <option value="buy" className="bg-white text-black">
                  Interested in Buying
                </option>

                <option value="sell" className="bg-white text-black">
                  Selling Property
                </option>

                <option value="rent" className="bg-white text-black">
                  Rental Inquiry
                </option>

                <option value="other" className="bg-white text-black">
                  Other Inquiry
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-foreground/40 transition-all outline-none resize-none backdrop-blur-sm"
                placeholder="How can we assist you?"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-10 py-4 bg-gradient-to-r from-primary to-yellow-500 hover:from-yellow-400 hover:to-primary text-black font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20 w-full md:w-auto"
              >
                Schedule Free Meeting
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

