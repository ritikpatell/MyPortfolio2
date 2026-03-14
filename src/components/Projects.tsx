"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Nova OS",
      description: "A futuristic operating system concept built entirely on the web.",
      category: "Web App",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Luminex Audio",
      description: "High-fidelity e-commerce experience with WebGL interactions.",
      category: "E-commerce",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Solstice",
      description: "Generative art engine for real-time visual installations.",
      category: "Creative Coding",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Aura Fintech",
      description: "Award-winning landing page for a modern banking solution.",
      category: "Landing Page",
      color: "from-indigo-500 to-cyan-500",
    },
  ];

  return (
    <section className="relative z-20 w-full min-h-screen bg-[#121212] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white tracking-tight">
            Selected Lab Projects
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl">
            A collection of digital experiences combining cutting-edge engineering with premium design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative cursor-pointer"
            >
              {/* Glassmorphism Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md p-8 aspect-square md:aspect-[4/3] flex flex-col justify-end transition-all duration-500 hover:border-white/20 hover:bg-white/10 z-10">
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
                  <div className={`absolute -inset-[100%] rounded-full bg-gradient-to-tr ${project.color} opacity-20 blur-[100px] animate-pulse`} />
                </div>
                
                <div className="relative z-20 w-full flex justify-between items-end">
                  <div className="space-y-2">
                    <p className="text-sm font-mono tracking-wider text-gray-400 uppercase">
                      {project.category}
                    </p>
                    <h3 className="text-3xl font-medium text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-colors duration-300">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                <div className="relative z-20 mt-4 overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                    <p className="text-gray-400 max-w-sm mb-4">
                      {project.description}
                    </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
