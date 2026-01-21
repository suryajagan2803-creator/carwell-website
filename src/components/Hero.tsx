'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Activity } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-[600px] w-full flex items-center overflow-hidden bg-slate-900 border-b-4 border-emerald-600">

            {/* 1. Full Background Image (Raw, No Overlay) */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/img/hero_industrial_daylight.png"
                    alt="Advanced Textile Machinery"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Container (Compact Professional Card) */}
            <div className="container mx-auto px-6 md:px-8 relative z-20">
                <div className="max-w-xl bg-[#0F172A]/90 backdrop-blur-xl p-8 shadow-2xl border-l-8 border-emerald-500 animate-fade-slide-in rounded-r-3xl">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase">
                            Series 2026 Ready
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl md:text-5xl font-black text-white leading-none tracking-tight uppercase mb-4">
                        Engineered <br />
                        <span className="text-emerald-500">
                            Precision
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-sm md:text-base text-slate-400 font-medium leading-relaxed mb-6">
                        Cardwell powers the world's leading textile mills with automated Acid Treatment & Yarn Conditioning systems.
                        <strong className="block mt-1 text-white">
                            Zero downtime. Maximum efficiency.
                        </strong>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 font-bold text-xs uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/30 rounded-none group"
                        >
                            View Machinery
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white border-2 border-slate-700 font-bold text-xs uppercase tracking-widest hover:border-emerald-500 hover:text-emerald-400 transition-all rounded-none">
                            <Play className="w-3 h-3 fill-current" />
                            Live Demo
                        </button>
                    </div>

                    {/* Quick Stats Panel inside Card */}
                    <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-800">
                        <div>
                            <div className="text-xl font-black text-white">40+</div>
                            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Years</div>
                        </div>
                        <div>
                            <div className="text-xl font-black text-white">500+</div>
                            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Units</div>
                        </div>
                        <div>
                            <div className="text-xl font-black text-white">24/7</div>
                            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side Tech Highlights (Floating, No Overlay) */}
            <div className="absolute right-8 bottom-8 z-20 hidden lg:flex flex-col gap-4 items-end pointer-events-none">
                <div className="bg-white/90 backdrop-blur border-l-4 border-emerald-500 p-3 shadow-xl">
                    <div className="flex items-center gap-3">
                        <Activity className="w-5 h-5 text-emerald-600" />
                        <div>
                            <div className="text-[9px] uppercase font-bold text-slate-500">System Efficiency</div>
                            <div className="text-xl font-black text-slate-900">99.8%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
