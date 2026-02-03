"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: "$2,500,000",
    address: "123 Palm Ave, Beverly Hills, CA",
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    tag: "For Sale"
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    price: "$1,800,000",
    address: "456 Skyline Dr, New York, NY",
    beds: 3,
    baths: 3,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    tag: "New Listing"
  },
  {
    id: 3,
    title: "Seaside Retreat",
    price: "$3,200,000",
    address: "321 Ocean Blvd, Malibu, CA",
    beds: 6,
    baths: 5,
    sqft: 5200,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    tag: "Signature"
  }
];


export function Showcase() {
  return (
    <section id="properties" className="relative z-10 py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white/90 mb-4 text-shadow-lg">Featured Projects</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto font-light">
            Explore our curated selection of premium properties in the most desirable locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 group border border-white/20"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  {property.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <p className="text-2xl font-bold text-white mb-1">{property.price}</p>
                    <p className="text-primary text-sm truncate max-w-[200px]">{property.address}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors font-serif">
                  {property.title}
                </h3>

                <div className="flex justify-between items-center text-foreground/70 text-sm border-t border-white/10 pt-4">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-lg text-foreground">{property.beds}</span>
                    <span className="text-xs uppercase tracking-wide">Beds</span>
                  </div>
                  <div className="w-px h-8 bg-white/20"></div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-lg text-foreground">{property.baths}</span>
                    <span className="text-xs uppercase tracking-wide">Baths</span>
                  </div>
                  <div className="w-px h-8 bg-white/20"></div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-lg text-foreground">{property.sqft}</span>
                    <span className="text-xs uppercase tracking-wide">Sqft</span>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 border border-primary/50 hover:bg-primary hover:text-black text-foreground font-semibold rounded-xl transition-all duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-gradient-to-r from-primary to-yellow-500 hover:from-yellow-400 hover:to-primary text-black font-bold rounded-full transition-all duration-300 shadow-lg shadow-yellow-500/20 transform hover:scale-105">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
