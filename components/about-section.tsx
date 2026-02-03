"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative z-10 py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto text-center border-t border-white/40"
        >
          <h2 className="text-primary font-serif font-bold tracking-widest uppercase mb-4 text-sm">About Our Company</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8 text-shadow">
            Building Legacies, <span className="text-primary italic">Not Just Homes</span>
          </h3>
          <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            With over 15 years of excellence, we specialize in creating premium living spaces that blend modern architecture with timeless elegance. From luxury villas to commercial landmarks, we deliver perfection.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 border-t border-white/10 pt-8">
            <div>
              <h4 className="text-3xl font-bold text-primary">15+</h4>
              <p className="text-sm font-medium text-foreground/70 uppercase tracking-wider">Years Exp</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">500+</h4>
              <p className="text-sm font-medium text-foreground/70 uppercase tracking-wider">Happy Clients</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">50+</h4>
              <p className="text-sm font-medium text-foreground/70 uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">100%</h4>
              <p className="text-sm font-medium text-foreground/70 uppercase tracking-wider">Satisfaction</p>
            </div>
          </div>

          {/* <button className="text-foreground border-b-2 border-primary pb-1 hover:text-primary transition-all font-bold uppercase tracking-widest text-sm">
            Read Our Full Story
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
