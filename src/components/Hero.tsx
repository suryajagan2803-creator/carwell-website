'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-[700px] w-full flex items-center overflow-hidden bg-slate-50 border-b border-slate-200">

            {/* Background Image - Clean & Sharp */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/img/fabric_machines_banner.png"
                    alt="Textile Processing Machinery"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Soft Light Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex flex-col justify-center">

                <div className="max-w-2xl animate-fade-slide-in">

                    {/* Badge / Tagline - Simple */}
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-8 h-[2px] bg-emerald-600"></span>
                        <span className="text-sm font-bold text-slate-600 tracking-widest uppercase">
                            Since 1984
                        </span>
                    </div>

                    {/* Headline - Classical & Heavy */}
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                        Precision <br />
                        <span className="text-emerald-700">Textile Machinery</span>
                    </h1>

                    {/* Description - Clear & Detailed */}
                    <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8 border-l-4 border-slate-300 pl-4">
                        We manufacture high-performance fabric processing and spinning accessories.
                        Engineered for durability, efficiency, and superior output quality.
                    </p>

                    {/* Buttons - Simple & Direct */}
                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg hover:translate-y-[-2px] transition-all"
                        >
                            Explore Machines
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-emerald-600 text-slate-800 hover:text-emerald-700 font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
                        >
                            Request Catalogue
                        </Link>
                    </div>

                    {/* Simple Trust Metrics */}
                    <div className="mt-12 flex items-center gap-8 text-slate-600">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            <span className="text-sm font-semibold">Global Exports</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            <span className="text-sm font-semibold">24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            <span className="text-sm font-semibold">Proven Technology</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
