"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "5-Level Warranty",
        description: "We provide extensive warranties on structure, finishing, and installations for peace of mind.",
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Quality Construction",
        description: "Built with premium materials and adherence to the highest safety standards.",
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    },
    {
        title: "Transparent Dealings",
        description: "No hidden costs. We believe in complete transparency from documentation to handover.",
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        )
    },
    {
        title: "Expert Team",
        description: "A dedicated team of architects, engineers, and support staff to guide you.",
        icon: (
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    }
];

 

export function Features() {
    return (
        <section className="relative z-10 py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="glass-card rounded-3xl p-10 md:p-16 border border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Why Choose Us</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                                The Gold Standard in <br />
                                <span className="text-primary">Construction & Service</span>
                            </h2>
                            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                                We don&apos;t just build structures; we build trust. Our commitment to quality and transparency makes us the preferred choice for hundreds of families.
                            </p>
                            <button className="px-8 py-3 bg-primary text-black font-bold rounded-xl shadow-lg hover:bg-yellow-400 transition-all">
                                Schedule a Consultation
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}