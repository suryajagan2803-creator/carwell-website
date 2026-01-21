'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Activity } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-[600px] w-full flex items-center overflow-hidden bg-slate-900 border-b-4 border-emerald-600">

            {/* 1. Full Background Image (Dark Gradient Theme) */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/img/hero_industrial_daylight.png"
                    alt="Advanced Textile Machinery"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
            </div>

            {/* Content Container (Immersive Floating Layout) */}
            <div className="container mx-auto px-6 md:px-8 relative z-20 h-full flex items-center">
                <div className="max-w-3xl animate-fade-slide-in pt-12">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full pr-4 pl-1 py-1">
                        <span className="flex h-6 w-6 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-500 border-2 border-slate-900"></span>
                        </span>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase">
                            Series 2026
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight uppercase mb-6 drop-shadow-2xl">
                        Engineered <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 filter drop-shadow-lg">
                            Precision
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base md:text-xl text-slate-300 font-medium leading-relaxed mb-10 max-w-2xl text-shadow-sm">
                        Cardwell powers the world's leading textile mills with automated Acid Treatment & Yarn Conditioning systems.
                        <span className="block mt-2 text-white font-bold">
                            Zero downtime. Maximum efficiency.
                        </span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center gap-3 bg-emerald-600 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] rounded-full group"
                        >
                            View Machinery
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/20 font-bold text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all rounded-full">
                            <Play className="w-4 h-4 fill-white" />
                            Live Demo
                        </button>
                    </div>

                    {/* Quick Stats (Integrated into layout) */}
                    <div className="flex gap-12 mt-12 border-t border-slate-800/50 pt-8">
                        <div>
                            <div className="text-3xl font-black text-white">40+</div>
                            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-1">Years Excellence</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-white">500+</div>
                            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-1">Units Deployed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-white">Global</div>
                            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-1">Service Network</div>
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
