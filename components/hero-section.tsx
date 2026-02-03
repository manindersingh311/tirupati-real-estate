"use client";

import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // const scrollToProjects = () => {
  //   document
  //     .getElementById("properties")
  //     ?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <section
      id="home"
      className="min-h-screen flex items-start justify-center px-6 relative pt-28 ml-12 mt-6 mr-12 overflow-visible"
      style={{
        backgroundImage: "url('/househero.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center relative z-10 max-w-5xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-semibold text-black mb-8 leading-tight tracking-tight text-shadow-lg">
            We Build <span className="text-primary italic">Premium</span>{" "}
            <span className="whitespace-nowrap">Properties</span> <br />
            Residential and{" "}
            <span className="text-primary italic">Commercial</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-primary to-yellow-500 hover:from-yellow-400 hover:to-primary text-slate-900 font-bold rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/30 min-w-[200px]"
          >
            <a href="tel:+91 98881-19100">Book Free Site Visit</a>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
