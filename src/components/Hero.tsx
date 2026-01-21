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
                    src="/img/cardwell_hero_bold.png"
                    alt="Textile Processing Machinery"
                    fill
                    className="object-cover transform scale-100 hover:scale-105 transition-transform duration-[20s] ease-linear origin-center"
                    priority
                />
                {/* Elegant Gradient overlays for depth and readability - Reduced opacity for clarity */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/40 to-transparent/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 to-transparent" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex items-center">

                {/* Floating "Solid" Content Card for Clearer, Bolder Look */}
                <div className="max-w-xl bg-white p-10 md:p-14 rounded-2xl shadow-2xl animate-fade-slide-in border-l-8 border-emerald-600">

                    {/* Bold Badge */}
                    <div className="inline-flex items-center gap-2 mb-8">
                        <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                            Since 1984
                        </span>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-[0.2em]">
                            Global Leader
                        </span>
                    </div>

                    {/* Headline - Strong, Bold, Clear */}
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
                        THE GOLD STANDARD IN
                        <span className="text-emerald-700 block">TEXTILE ENGINEERING</span>
                    </h1>

                    {/* Description - Direct & Confident */}
                    <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 border-l-2 border-slate-200 pl-6">
                        We engineer the machines that power the world's finest fabric mills. Precision, durability, and innovation in every component.
                    </p>

                    {/* Buttons - High Contrast */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/products"
                            className="inline-flex justify-center items-center px-8 py-4 bg-emerald-700 text-white font-black text-sm uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-lg hover:shadow-emerald-500/30"
                        >
                            Explore Machines
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex justify-center items-center px-8 py-4 bg-slate-900 text-white font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all"
                        >
                            Get A Quote
                        </Link>
                    </div>

                    {/* Stats - Tech Focused */}
                    <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-3 gap-4">
                        <div>
                            <div className="text-3xl font-black text-slate-900">12+</div>
                            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">States Covered</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-slate-900">2.5k</div>
                            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Installations</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-slate-900">100%</div>
                            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">R&D In-House</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
