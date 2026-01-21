'use client';

import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Complete Knit Processing Plant",
        location: "Dhaka, Bangladesh",
        description: "Turnkey installation of reversers, inspection lines, and packing systems for a 20-ton/day facility.",
        image: "/img/fabric_machines_banner.png", // Reusing banner for now
        tag: "Turnkey Project"
    },
    {
        id: 2,
        title: "High-Speed Auto Packing Upgrade",
        location: "Coimbatore, India",
        description: "Replaced legacy manual packing with our PLC-controlled Automatic Roll Packing system, increasing output by 300%.",
        image: "/img/gears.png", // Reusing placeholder
        tag: "Modernization"
    },
    {
        id: 3,
        title: "Technical Textile Inspection Line",
        location: "Bursa, Turkey",
        description: "Customized wide-width inspection machines for heavy industrial canvas and coated fabrics.",
        image: "/img/hero_industrial_daylight.png", // Reusing placeholder
        tag: "Custom Engineering"
    }
];

export default function LatestProjects() {
    return (
        <section className="py-24 bg-white border-t border-slate-200">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-emerald-700 font-bold text-xs tracking-widest uppercase mb-3 block">Portfolio</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-medium text-slate-900">
                            Latest Projects
                        </h2>
                    </div>
                    <a href="/projects" className="group flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-sm hover:text-emerald-700 transition-colors">
                        View All Works
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-slate-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-slate-900">
                                    {project.tag}
                                </div>
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
                            </div>

                            <div className="flex items-center gap-2 text-emerald-600 mb-2">
                                <MapPin className="w-3 h-3" />
                                <span className="text-xs font-bold uppercase tracking-wide">{project.location}</span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors font-serif">
                                {project.title}
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
