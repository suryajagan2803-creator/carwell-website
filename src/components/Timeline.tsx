'use client';

import { useEffect, useRef, useState } from 'react';
import { Activity, Cog, Factory, TrendingUp, Zap, Cpu } from 'lucide-react';

const milestones = [
    {
        year: '2015',
        title: 'Foundation',
        desc: 'Established Cardwell with focus on textile engineering. Started with fabric inspection solutions.',
        icon: Factory
    },
    {
        year: '2017',
        title: 'First Fabric Processing Line',
        desc: 'Introduced tubular & open-width inspection machines. Supplied to local textile units.',
        icon: Cog
    },
    {
        year: '2019',
        title: 'Spinning Accessories Expansion',
        desc: 'Entered spinning machinery accessories. Carding, comber & ring frame components.',
        icon: Zap
    },
    {
        year: '2021',
        title: 'Automation & PLC Integration',
        desc: 'PLC-controlled roll packing machines. Improved speed, accuracy & productivity.',
        icon: Cpu
    },
    {
        year: '2023',
        title: 'Multi-Industry Applications',
        desc: 'Solutions for woven, knitted, coated & non-woven fabrics.',
        icon: Activity
    },
    {
        year: '2025',
        title: 'Future-Ready Manufacturing',
        desc: 'Focus on energy-efficient & smart textile machinery.',
        icon: TrendingUp,
        current: true
    },
];

export default function Timeline() {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const timelineRef = useRef<HTMLDivElement>(null);

    // Only keeping the IntersectionObserver for the fade-in of ITEMS. 
    // No scroll listener for the line itself.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setVisibleItems((prev) => (prev.includes(index) ? prev : [...prev, index]));
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px" }
        );

        const items = document.querySelectorAll('.timeline-item');
        items.forEach((item) => observer.observe(item));

        return () => items.forEach((item) => observer.unobserve(item));
    }, []);

    return (
        <section className="py-16 bg-slate-900 relative overflow-hidden text-white">
            {/* Background Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10" ref={timelineRef}>
                <div className="text-center mb-16 animate-fade-slide-in">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-2">
                        Our Journey in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Textile Machinery Innovation</span>
                    </h2>
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block">
                        From foundation to advanced fabric & spinning solutions
                    </span>
                </div>

                <div className="relative">
                    {/* Central Static Line (Faint Background) */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-800 rounded-full"></div>

                    {/* Active Line (Static Full Height - No Scroll Animation) */}
                    {/* We use a static gradient to look nice without moving */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-900 via-[#E5E7EB] to-slate-900 opacity-20 rounded-full"></div>

                    <div className="space-y-12 md:space-y-16 pb-12">
                        {milestones.map((item, index) => {
                            const isEven = index % 2 === 0;
                            const isVisible = visibleItems.includes(index);
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    data-index={index}
                                    className={`timeline-item relative flex flex-col md:flex-row items-center justify-between ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-300 ease-out`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    {/* Content Card (Left for Even, Right for Odd) */}
                                    <div className={`order-2 md:w-[45%] ${isEven ? 'md:order-1 md:text-right' : 'md:order-3 md:text-left'} pl-10 md:pl-0 md:px-0`}>
                                        <div className={`
                                            relative p-5 md:p-6 bg-slate-800/50 backdrop-blur-md border border-slate-700 hover:border-[#3C91E6] transition-colors duration-300 rounded-lg shadow-xl group
                                            ${item.current ? 'border-[#0A3D62] shadow-blue-900/20 bg-blue-900/10' : ''}
                                        `}>
                                            <div className="text-[#3C91E6] font-black text-4xl mb-2 opacity-20 group-hover:opacity-100 transition-opacity duration-500 select-none">
                                                {item.year}
                                            </div>

                                            <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#3C91E6] transition-colors flex items-center gap-3 md:inline-flex">
                                                {/* Mobile Icon */}
                                                <span className="md:hidden inline-flex p-1.5 rounded bg-blue-500/10 text-[#3C91E6]">
                                                    <Icon className="w-4 h-4" />
                                                </span>
                                                {item.title}
                                            </h3>

                                            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                                                {item.desc}
                                            </p>

                                            {item.current && (
                                                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-[#0A3D62] text-white text-[9px] uppercase font-bold tracking-widest rounded-full shadow-lg shadow-blue-600/20 animate-pulse">
                                                    Now
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Central Node */}
                                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center z-20">
                                        <div className={`
                                            w-3 h-3 rounded-full transition-all duration-700 delay-300
                                            ${isVisible ? 'bg-[#0A3D62] scale-100 shadow-[0_0_15px_rgba(10,61,98,0.5)]' : 'bg-slate-700 scale-50'}
                                        `}></div>
                                        {/* Icon Floating in center only on Desktop */}
                                        <div className={`
                                            hidden md:flex absolute items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-[#3C91E6] transition-all duration-500 delay-100
                                            ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                                            ${item.current ? 'border-[#0A3D62] text-white bg-[#0A3D62] shadow-lg shadow-blue-500/30' : ''}
                                        `}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Spacer for the other side */}
                                    <div className="order-3 md:w-[45%] md:block hidden"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
