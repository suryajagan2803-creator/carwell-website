'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-[750px] w-full flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">

            {/* Background Image with Slow Zoom (Ken Burns Effect) */}
            <div className="absolute inset-0 z-0 select-none">
                <Image
                    src="/img/fabric_machines_banner.png"
                    alt="Textile Processing Machinery"
                    fill
                    className="object-cover transform scale-100 hover:scale-105 transition-transform duration-[20s] ease-linear origin-center"
                    priority
                />
                {/* Elegant Gradient overlays for depth and readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/70 to-transparent/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 to-transparent" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex items-center">

                {/* Floating "Glass" Content Card for Premium Feel */}
                <div className="max-w-2xl bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/60 shadow-2xl animate-fade-slide-in">

                    {/* Heritage Badge */}
                    <div className="inline-flex items-center gap-3 mb-6 bg-amber-50 border border-amber-100 px-4 py-1.5 rounded-full">
                        <Star className="w-4 h-4 text-amber-600 fill-current" />
                        <span className="text-xs font-bold text-amber-800 tracking-widest uppercase font-serif">
                            Est. 1984 • Excellence in Engineering
                        </span>
                    </div>

                    {/* Headline - Serif for Classical Authority */}
                    <h1 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 leading-[1.05] mb-6 tracking-tight">
                        Mastering the Art of <br />
                        <span className="text-emerald-800 italic pr-2">Fabric Perfection</span>
                    </h1>

                    {/* Description - Human & Engaging */}
                    <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8 max-w-lg">
                        We craft the world's most reliable textile processing machinery.
                        Simple to operate, built to last, and engineered for pure performance.
                    </p>

                    {/* Buttons - Tactile & Clear */}
                    <div className="flex flex-wrap items-center gap-5">
                        <Link
                            href="/products"
                            className="group relative px-8 py-4 bg-slate-900 text-white font-bold text-sm uppercase tracking-wider rounded shadow-xl hover:bg-emerald-800 transition-all overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-slate-900 font-bold text-sm uppercase tracking-wider rounded border border-slate-300 hover:border-slate-900 hover:bg-slate-50 transition-all shadow-sm"
                        >
                            Talk to an Expert
                        </Link>
                    </div>

                    {/* Trust Signals Divider */}
                    <div className="mt-10 pt-6 border-t border-slate-900/10 flex items-center gap-8">
                        <div className="flex flex-col">
                            <span className="text-2xl font-serif font-bold text-slate-900">30+</span>
                            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Countries Exported</span>
                        </div>
                        <div className="w-px h-8 bg-slate-900/10"></div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-serif font-bold text-slate-900">40<span className="text-sm align-top ml-0.5">Yrs</span></span>
                            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Of Heritage</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
