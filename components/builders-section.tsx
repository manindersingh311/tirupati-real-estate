"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "New Construction",
        description: "From ground-breaking to key handover, we manage the entire lifecycle of building your dream property with precision and quality.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    },
    {
        title: "Premium Renovation",
        description: "Transforming existing spaces into modern masterpieces. We specialize in luxury kitchen, bath, and full-home renovations.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Interior Architecture",
        description: "Our diverse team of architects and designers optimize your layout for flow, light, and lifestyle before construction begins.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        )
    }
];

const projects = [
    {
        title: "The Azure Villa",
        type: "Full Renovation",
        image: "https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Tech Hub Office",
        type: "Commercial Build",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"
    },
    {
        title: "Skyline Penthouse",
        type: "Interior Remodel",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop"
    }
];

const brands = [
    "Duravit", "Grohe", "Toto", "Kohler", "Bosch", "Siemens", "Dulux", "Asian Paints", "Schneider", "Havells"
];

export function BuildersSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    // GSAP Animation
    useEffect(() => {
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-20">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Construction & Renovation Experts
                    </h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-foreground/70 text-lg max-w-2xl mx-auto"
                    >
                        Beyond buying and selling, we build dreams. Our expert team handles everything from new constructions to luxury renovations.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-accent p-8 rounded-2xl border border-secondary shadow-lg hover:shadow-xl transition-all"
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                            <p className="text-foreground/60 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Projects */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-foreground">Featured Projects</h3>
                        <button className="text-primary font-semibold hover:underline">View All Projects →</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{project.type}</span>
                                    <h4 className="text-slate-900 text-xl font-bold">{project.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Brand Slider (Infinite Marquee) */}
            <div className="border-t border-secondary bg-accent/30 py-12 overflow-hidden">
                <h3 className="text-center text-foreground/50 text-sm font-semibold uppercase tracking-widest mb-8">Our Construction Partners & Brands</h3>

                <div className="relative w-full flex overflow-hidden">
                    <motion.div
                        className="flex space-x-16 items-center whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    >
                        {/* Repeat list twice for seamless loop */}
                        {[...brands, ...brands].map((brand, index) => (
                            <span key={index} className="text-2xl md:text-3xl font-bold text-foreground/40 hover:text-primary transition-colors cursor-default select-none">
                                {brand}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
