'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Crown, CheckCircle2 } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-[700px] w-full flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Blurred subtle industrial mech */}
                <Image
                    src="/img/fabric_machines_banner.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-5 blur-xl"
                />
                {/* Radial Spotlight (Light Mode: Slate/Blue hint) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-20 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-center gap-12">

                    {/* LEFT: TEXT CONTENT */}
                    <div className="lg:col-span-7 flex flex-col justify-center animate-fade-slide-in pt-12 lg:pt-0">

                        {/* Top Label */}
                        <div className="flex flex-wrap items-center gap-3 md:gap-6 text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 mb-8 uppercase">
                            <span className="flex items-center gap-2 text-slate-700">
                                <Crown className="w-4 h-4 text-emerald-600 fill-current" /> CARDWELL SERIES
                            </span>
                            <span className="hidden md:block h-3 w-px bg-slate-300"></span>
                            <span className="text-slate-400">PRECISION MFG</span>
                            <span className="hidden md:block h-3 w-px bg-slate-300"></span>
                            <span className="text-slate-400">ISO 9001:2015</span>
                        </div>

                        {/* HEADLINE */}
                        <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tight mb-6">
                            TEXTILE <br />
                            ENGINEERING
                        </h1>
                        <h2 className="text-xl md:text-3xl font-light text-slate-500 tracking-[0.2em] uppercase mb-10">
                            AUTOMATION SYSTEMS
                        </h2>

                        {/* Description */}
                        <div className="relative mb-12">
                            <p className="text-xs md:text-sm text-slate-500 max-w-lg leading-relaxed uppercase tracking-wider font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                <span className="block mt-2 text-slate-700 font-bold">High-speed robotic yarn conditioning.</span>
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-6">
                            <Link href="/contact" className="px-10 py-4 bg-slate-900 hover:bg-emerald-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] rounded shadow-[0_20px_40px_rgba(15,23,42,0.2)] transition-all hover:-translate-y-1 hover:shadow-emerald-500/30">
                                GET QUOTE
                            </Link>
                            <Link href="/products" className="px-10 py-4 bg-white hover:bg-slate-50 text-slate-900 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] rounded border border-slate-200 transition-all hover:border-slate-300 shadow-sm">
                                VIEW CATALOG
                            </Link>
                        </div>

                    </div>

                    {/* RIGHT: 3D OBJECT */}
                    <div className="lg:col-span-5 relative h-[50vh] lg:h-full flex items-center justify-center pointer-events-none">
                        {/* Glowing Orb Behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-slate-200/50 rounded-full blur-[100px] animate-pulse"></div>

                        {/* The Gear/Machine Image */}
                        <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center">
                            <Image
                                src="/img/gears.png"
                                alt="3D Gears"
                                width={800}
                                height={800}
                                className="object-contain drop-shadow-2xl relative z-10"
                            />

                            {/* Highlight Flare */}
                            <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-white blur-[60px] rounded-full mix-blend-overlay z-20"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
