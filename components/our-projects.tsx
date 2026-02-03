"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const locations = [
  {
    id: 1,
    name: "Punjab",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: 2,
    name: "Chandigarh",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 3,
    name: "Bikaner",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    id: 4,
    name: "Haryana",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Gurugram",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Noida",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
  },
];

export function OurProjects() {
  return (
    <section className="relative z-10 py-10 md:py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 max-w-7xl mx-auto text-center border-t border-white/40"
        >
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8 text-shadow">
            Places We, <span className="text-primary italic">Deal In</span>
          </h3>
          <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            15+ years of excellence in premium real estate across Punjab,
            Chandigarh, Bikaner, Haryana, Gurugram and Noida. We offer luxury residences and commercial
            spaces crafted with modern design and timeless appeal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 border-t border-white/10 pt-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all hover:scale-105 cursor-pointer"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">
                    {location.name}
                  </h4>
                  {/* <p className="text-sm text-foreground/70">
                    {location.description}
                  </p> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
