"use client";

import Image from "next/image";
import { useState } from "react";

export function InquirySection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Inquiry submitted:", formData);
        alert("Thank you for your inquiry! We will contact you shortly.");
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <section className="py-20 bg-accent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

                    {/* Left Side: Information */}
                    <div className="lg:pr-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Expert Guidance for Your Real Estate Journey
                        </h2>
                        <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                            Whether you&apos;re buying, selling, or investing, our team provides the professional insight and personalized attention you deserve. Let us help you navigate the market with confidence.
                        </p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start">
                                <span className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <div>
                                    <h4 className="font-semibold text-foreground">Personalized Strategy</h4>
                                    <p className="text-sm text-foreground/60">Tailored plans to meet your specific goals.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </span>
                                <div>
                                    <h4 className="font-semibold text-foreground">Market Analysis</h4>
                                    <p className="text-sm text-foreground/60">In-depth data to drive informed decisions.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Center: Image */}
                    <div className="relative h-[600px] flex items-end justify-center">
                        {/* Abstract Background Element */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-3xl transform translate-y-20 opacity-60"></div>

                        <div className="relative z-10 w-full h-full flex items-end justify-center">
                            <Image
                                src="https://pngimg.com/uploads/businessman/businessman_PNG6566.png"
                                alt="Professional Agent"
                                className="object-contain object-bottom w-full h-full drop-shadow-2xl translate-y-6"
                            />
                        </div>

                        {/* Name Card */}
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 bg-background/90 backdrop-blur-md border border-secondary p-4 rounded-xl shadow-lg text-center w-64">
                            <h3 className="font-bold text-foreground text-lg">Alex Sterling</h3>
                            <p className="text-primary text-sm font-medium">Senior Real Estate Agent</p>
                        </div>
                    </div>

                    {/* Right Side: Inquiry Form */}
                    <div className="bg-background p-8 rounded-2xl shadow-xl lg:ml-8">
                        <h3 className="text-2xl font-bold text-foreground mb-6">Quick Inquiry</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="inquiry-name" className="block text-sm font-medium text-foreground/80 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="inquiry-name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-accent/50 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="inquiry-email" className="block text-sm font-medium text-foreground/80 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="inquiry-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-accent/50 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="inquiry-phone" className="block text-sm font-medium text-foreground/80 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    id="inquiry-phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-accent/50 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground outline-none transition-all"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                            <div>
                                <label htmlFor="inquiry-message" className="block text-sm font-medium text-foreground/80 mb-1">Message</label>
                                <textarea
                                    id="inquiry-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full px-4 py-2 bg-accent/50 border border-secondary rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground outline-none transition-all resize-none"
                                    placeholder="I'm interested in..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-blue-700 text-primary-foreground font-bold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg mt-2"
                            >
                                Send Inquiry
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
