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
        <section className="py-20 bg-white relative overflow-hidden text-slate-900">
            {/* Background Tech Grid (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10" ref={timelineRef}>
                <div className="text-center mb-12 animate-fade-slide-in">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-3 bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full inline-block">
                        Our Legacy
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 mb-2">
                        Evolution <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A3D62] to-[#3C91E6]">Story</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-sm md:text-base max-w-xl mx-auto">
                        Swipe through our journey of innovation.
                    </p>
                </div>

                {/* Horizontal Swipe Container */}
                <div className="relative">
                    {/* Connecting Horizontal Line (Behind) */}
                    <div className="absolute top-24 left-0 right-0 h-1 bg-slate-100 hidden md:block w-full"></div>

                    <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory px-4 no-scrollbar items-stretch" style={{ scrollBehavior: 'smooth' }}>
                        {milestones.map((item, index) => {
                            const Icon = item.icon;
                            const isVisible = visibleItems.includes(index);

                            return (
                                <div
                                    key={index}
                                    data-index={index}
                                    className={`
                                        timeline-item flex-none w-[85vw] md:w-[350px] snap-center relative flex flex-col items-center text-center group
                                        transition-all duration-700 ease-out
                                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                                    `}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {/* Year Bubble (Top) */}
                                    <div className="mb-6 relative z-10">
                                        <div className={`
                                            w-16 h-16 rounded-full flex items-center justify-center border-4 bg-white transition-colors duration-300 shadow-lg
                                            ${item.current ? 'border-[#0A3D62] text-[#0A3D62]' : 'border-slate-100 text-slate-400 group-hover:border-[#3C91E6] group-hover:text-[#3C91E6]'}
                                        `}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 w-full h-full hover:-translate-y-2 transition-transform duration-300 flex flex-col relative overflow-hidden">
                                        {/* Decorative Year Number Background */}
                                        <div className="absolute -right-4 -top-4 text-8xl font-black text-slate-50 opacity-50 select-none z-0">
                                            {item.year}
                                        </div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{item.year}</span>
                                            <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#0A3D62] transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                                                {item.desc}
                                            </p>

                                            {item.current && (
                                                <div className="mt-auto self-center">
                                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A3D62] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-900/20 animate-pulse">
                                                        Current Focus
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Swipe Indicator (Mobile) */}
                <div className="flex justify-center gap-2 mt-4 md:hidden">
                    {milestones.map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#0A3D62]' : 'bg-slate-200'}`} />
                    ))}
                    <span className="text-[10px] text-slate-400 ml-2">Swipe &rarr;</span>
                </div>
            </div>
        </section>
    );
}
