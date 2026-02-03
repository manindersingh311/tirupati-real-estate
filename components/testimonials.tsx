"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote: "Finding our dream home was effortless with Tirupati. Their team understood exactly what we were looking for and guided us through every step with patience.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "I've worked with many agencies, but none compare to the professionalism and market insight provided by this team. Highly recommended for serious investors.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    quote: "As a first-time buyer, I was nervous, but the team made me feel at ease. They answered all my questions and found me a perfect condo within my budget.",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white/90 rounded-2xl ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4 text-shadow-lg">Client Stories</h2>
          <p className="text-slate-800 text-lg max-w-2xl mx-auto font-light">
            Don&apos;t just take our word for it. Here is what our satisfied clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl border border-white/20 relative hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-slate-900/10 group-hover:text-primary/20 transition-colors">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.054 15.331 15.189 16.491 14.717C16.929 14.539 17.558 14.305 17.558 13.754L17.558 13.045C17.558 12.493 17.164 12.049 16.613 12.049C16.062 12.049 14.558 12.007 14.558 9.99803L14.558 4.29303C14.558 3.19003 15.454 2.29303 16.558 2.29303L21.558 2.29303C22.662 2.29303 23.558 3.19003 23.558 4.29303L23.558 12.293C23.558 16.896 19.349 21 14.017 21ZM5.01697 21L5.01697 18C5.01697 16.054 6.33097 15.189 7.49097 14.717C7.92897 14.539 8.55797 14.305 8.55797 13.754L8.55797 13.045C8.55797 12.493 8.16397 12.049 7.61297 12.049C7.06197 12.049 5.55797 12.007 5.55797 9.99803L5.55797 4.29303C5.55797 3.19003 6.45397 2.29303 7.55797 2.29303L12.558 2.29303C13.662 2.29303 14.558 3.19003 14.558 4.29303L14.558 12.293C14.558 16.896 10.349 21 5.01697 21Z" />
                </svg>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  quality={100}
                  className="rounded-full object-cover border-2 border-primary shadow-lg"
                />
                <div>
                  <h3 className="text-foreground font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-primary text-sm font-medium uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-foreground/80 italic leading-relaxed text-sm">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex text-yellow-500 mt-6 gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
