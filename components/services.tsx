"use client";

import { motion } from "framer-motion";
import { FaRegBuilding } from "react-icons/fa";
import { LuHouse } from "react-icons/lu";
import { MdOutlineCorporateFare } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { RiHomeSmileLine } from "react-icons/ri";
import { TbHomeDollar } from "react-icons/tb";

// const services = [
//   {
//     id: 1,
//     title: "Villas & Residences",
//     description:
//       "Bespoke luxury villas designed for comfort, style, and modern living.",
//     icon: <LuHouse className="text-primary w-10 h-10" />,
//   },
//   {
//     id: 2,
//     title: "Commercial Projects",
//     description: "High-end commercial spaces, offices, and shopping complexes.",
//     icon: <FaRegBuilding className="text-primary w-10 h-10" />,
//   },
//   {
//     id: 3,
//     title: "2BHK & 3BHK Homes",
//     description:
//       "Premium apartments focusing on space optimization and luxury amenities.",
//     icon: <PiBuildingApartment className="text-primary w-10 h-10" />,
//   },
//   {
//     id: 4,
//     title: "Architectural Design",
//     description:
//       "World-class architectural planning and interior design services.",
//     icon: <MdArchitecture className="text-primary w-10 h-10" />,
//   },
//   {
//     id: 5,
//     title: "Property Buying Assistance",
//     description:
//       "Expert guidance to help you find and buy the right residential or commercial property.",
//     icon: <RiHomeSmileLine className="text-primary w-10 h-10" />,
//   },
//   {
//     id: 6,
//     title: "Property Selling Services",
//     description:
//       "Strategic marketing and negotiation support to sell your property at the best value.",
//     icon: <TbHomeDollar className="text-primary w-10 h-10" />,
//   },
//   {
//     id: 7,
//     title: "Rental & Leasing",
//     description:
//       "End-to-end rental solutions for residential and commercial leasing needs.",
//     icon: <BsKey className="text-primary w-10 h-10" />,
//   },
//   {
//     id: 8,
//     title: "Legal & Documentation Support",
//     description:
//       "Complete assistance with property documentation, registration, and legal verification.",
//     icon: <HiOutlineDocumentText className="text-primary w-10 h-10" />,
//   },
// ];
const services = [
  {
    id: 1,
    title: "Residential Properties",
    description:
      "Buy and sell premium apartments, builder floors, and independent homes in prime locations.",
    icon: <LuHouse className="text-black w-10 h-10" />,
  },
  {
    id: 2,
    title: "Commercial Spaces",
    description:
      "Shops, showrooms, and commercial units offering high returns and excellent visibility.",
    icon: <FaRegBuilding className="text-black w-10 h-10" />,
  },
  {
    id: 3,
    title: "Land & Plots",
    description:
      "Residential and commercial plots with clear titles and strong future appreciation.",
    icon: <PiFarm className="text-black w-10 h-10" />,
  },
  {
    id: 4,
    title: "Corporate Offices",
    description:
      "Fully-furnished and bare-shell office spaces designed for modern businesses.",
    icon: <MdOutlineCorporateFare className="text-black w-10 h-10" />,
  },
  {
    id: 5,
    title: "Industrial Properties",
    description:
      "Warehouses, factories, and industrial land suited for manufacturing and logistics.",
    icon: <TbHomeDollar className="text-black w-10 h-10" />,
  },
  {
    id: 6,
    title: "Farmhouse & Villas",
    description:
      "Luxury villas and farmhouses offering privacy, comfort, and premium lifestyle living.",
    icon: <RiHomeSmileLine className="text-black w-10 h-10" />,
  },
];

export function Services() {
  return (
    <section id="services" className="relative z-10 py-10 md:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 text-shadow-lg">
            Our Premium Services
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto font-light">
            We offer comprehensive real estate solutions tailored to your unique
            needs and aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl p-[1px] overflow-hidden"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-purple-500/30 to-pink-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              {/* Card */}
              <div
                className="relative glass-card p-8 rounded-2xl border border-white/20 backdrop-blur-xl
        hover:border-primary/50 transition-all duration-500
        group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.4)]"
              >
                {/* Icon */}
                <div
                  className="mb-6 w-20 h-20 rounded-full bg-white/10 flex items-center justify-center
          transition-all duration-500
          group-hover:bg-primary/20
          group-hover:rotate-6
          group-hover:scale-110"
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-foreground mb-3 transition-all duration-300
          group-hover:text-black group-hover:tracking-wide"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-foreground/70 text-sm leading-relaxed transition-colors duration-300
          group-hover:text-black"
                >
                  {service.description}
                </p>

                {/* Glow overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
          bg-gradient-to-t from-primary/10 via-transparent to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

