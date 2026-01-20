'use client';

import { use, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    CheckCircle2, XCircle, AlertCircle, ShieldCheck, Activity, Scan, Eye, Minimize, Hash,
    ChevronRight, Download, ArrowRight, Zap, Layers, Settings, BarChart3, ChevronDown, Cpu
} from 'lucide-react';
import { products } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Helper to map icon string names to components
const IconMap: any = {
    ShieldCheck, Activity, Scan, Eye, Minimize, Hash
};

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const product = products.find((p) => p.id === resolvedParams.slug);

    // State for carousel
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Prepare slides array, including video if available
    const slides = [
        { type: 'image', src: product?.image || '' },
        ...(product?.video ? [{ type: 'video', src: product.video }] : [])
    ];

    const nextSlide = () => setActiveSlideIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setActiveSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);

    // Effect to handle video playback when slide changes
    useEffect(() => {
        if (slides[activeSlideIndex].type === 'video' && videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(e => console.error("Video play failed:", e));
        } else if (videoRef.current) {
            videoRef.current.pause();
        }
    }, [activeSlideIndex, slides]);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">Product Not Found</div>;
    }

    return (
        <main className="min-h-screen font-sans bg-[#F8FAFC]">
            <Header />

            {/* --- 1. HERO SECTION: IMMEDIATE IMPACT --- */}
            <section className="relative pt-32 pb-20 bg-slate-50 text-slate-900 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-5 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

                <div className="container mx-auto px-6 md:px-8 relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-slate-900 font-bold">{product.name}</span>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-primary text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Series 2026 • High Performance
                            </span>

                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
                                {product.name}
                            </h1>

                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                {product.description}
                            </p>

                            {/* Quick Actions */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="bg-[#0F172A] hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-all shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-1 animate-sonar">
                                    Get Quotation <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-all shadow-sm">
                                    <Download className="w-5 h-5" /> Brochure
                                </button>
                            </div>
                        </div>

                        {/* Hero Media Carousel */}
                        <div className="w-full lg:w-1/2 relative group perspective-[1000px]">
                            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl bg-white rotate-y-6 group-hover:rotate-y-0 transition-transform duration-700">

                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                    >
                                        {slide.type === 'video' ? (
                                            <video
                                                ref={videoRef}
                                                src={slide.src}
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <Image
                                                src={slide.src}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
                                    </div>
                                ))}

                                {/* Overlay Stats */}
                                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3 z-20">
                                    {product.highlights.map((h, i) => (
                                        <div key={i} className="bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-white/50 text-center shadow-lg hover:-translate-y-1 transition-transform">
                                            <div className="text-primary mb-1"><Zap className="w-4 h-4 mx-auto" /></div>
                                            <div className="text-[10px] text-slate-800 font-bold uppercase">{h}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Controls */}
                                {slides.length > 1 && (
                                    <>
                                        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 text-slate-900 rounded-full hover:bg-white hover:scale-110 transition-all z-30 opacity-0 group-hover:opacity-100 shadow-lg">
                                            <ChevronRight className="w-5 h-5 rotate-180" />
                                        </button>
                                        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 text-slate-900 rounded-full hover:bg-white hover:scale-110 transition-all z-30 opacity-0 group-hover:opacity-100 shadow-lg">
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. DEEP DIVE SECTIONS (Sequential Layout) --- */}

            {/* A. ADVANCED FEATURES (Compact Tech Grid) */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
                        <div>
                            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">Core Architecture</span>
                            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">System Capabilities</h2>
                        </div>
                        <p className="text-slate-500 text-sm max-w-md text-right hidden md:block font-medium">
                            Next-gen engineering compressed into a compact, high-efficiency footprint.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
                        {product.features.map((feature, i) => {
                            const Icon = IconMap[feature.icon] || Activity;
                            // Make the first item span 2 cols for variety
                            const isLarge = i === 0;

                            return (
                                <div
                                    key={i}
                                    className={`
                                        group relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 hover:border-emerald-500/30 transition-all duration-500
                                        ${isLarge ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'}
                                    `}
                                >
                                    {/* Hover Gradient Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/10 transition-all duration-500" />

                                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                                        <div className="flex justify-between items-start">
                                            <div className={`
                                                rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm
                                                ${isLarge ? 'w-14 h-14 bg-white' : 'w-10 h-10 bg-white'}
                                            `}>
                                                <Icon className={isLarge ? "w-7 h-7" : "w-5 h-5"} />
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-slate-300 -rotate-45 group-hover:rotate-0 group-hover:text-emerald-500 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                        </div>

                                        <div>
                                            <h3 className={`font-bold text-slate-900 mb-2 leading-tight ${isLarge ? 'text-2xl' : 'text-sm'}`}>
                                                {feature.title}
                                            </h3>
                                            <p className={`text-slate-500 font-medium leading-relaxed transition-all duration-500 ${isLarge ? 'text-sm line-clamp-3' : 'text-[10px] opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto'}`}>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Decorative Tech Lines */}
                                    <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                                        <Icon className="w-24 h-24 transform -rotate-12 translate-x-4 translate-y-4" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* B. TECHNICAL SPECIFICATIONS */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-8 relative z-10">
                    <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div className="flex flex-col lg:flex-row gap-16">
                            <div className="lg:w-1/3">
                                <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">Data Sheet</span>
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">Technical<br />Specifications</h2>
                                <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                                    Detailed operating parameters and physical characteristics. We ensure transparency in our engineering capabilities.
                                </p>
                                <button className="text-primary hover:text-slate-900 transition-colors flex items-center gap-2 font-bold text-sm uppercase tracking-wide group">
                                    Download Full Spec Sheet <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                </button>
                            </div>

                            <div className="lg:w-2/3">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                    {product.specs.map((spec, i) => (
                                        <div key={i} className="border-b border-slate-100 pb-4">
                                            <div className="text-xs text-slate-400 uppercase tracking-widest mb-2 font-bold">{spec.label}</div>
                                            <div className="text-xl font-bold text-slate-900">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* C. MARKET COMPARISON - DETAILS & HIGHLIGHTS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">Performance Benchmark</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">The Cardwell Difference</h2>
                        <p className="text-slate-600 text-lg font-medium">
                            See specifically how our engineering outperforms standard market alternatives in critical production metrics.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/40">
                        {/* Column 1: Standard Market Solutions */}
                        <div className="bg-slate-50 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-slate-200">
                            <div className="flex items-center gap-4 mb-10 opacity-60">
                                <AlertCircle className="w-8 h-8 text-slate-400" />
                                <h3 className="text-2xl font-bold text-slate-500">Standard Machinery</h3>
                            </div>

                            <div className="space-y-10">
                                <div className="group">
                                    <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-rose-400" /> Mechanical Agitation
                                    </h4>
                                    <p className="text-slate-500 text-sm leading-relaxed pl-7">
                                        Relies on harsh beaters and friction that can damage delicate fibers, leading to higher piling and reduced fabric strength over time.
                                    </p>
                                </div>

                                <div className="group">
                                    <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-rose-400" /> High Chemical Dependency
                                    </h4>
                                    <p className="text-slate-500 text-sm leading-relaxed pl-7">
                                        Requires significant chemical softeners to achieve desired hand-feel, increasing operational costs and environmental footprint.
                                    </p>
                                </div>

                                <div className="group">
                                    <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-rose-400" /> Static Airflow
                                    </h4>
                                    <p className="text-slate-500 text-sm leading-relaxed pl-7">
                                        Fixed air channels create uneven drying zones, resulting in inconsistent shrinkage control and patchy dye absorption.
                                    </p>
                                </div>
                                <div className="group">
                                    <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-rose-400" /> Manual Calibration
                                    </h4>
                                    <p className="text-slate-500 text-sm leading-relaxed pl-7">
                                        Operators must manually adjust tension settings, leading to human error and batch-to-batch variations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Cardwell Advantage */}
                        <div className="bg-white p-10 md:p-14 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                            <div className="flex items-center gap-4 mb-10 relative z-10">
                                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                                <h3 className="text-2xl font-bold text-slate-900">Cardwell Series 2026</h3>
                            </div>

                            <div className="space-y-10 relative z-10">
                                <div className="group">
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-lg">
                                        <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><CheckCircle2 className="w-3 h-3" /></span>
                                        Aero-Dynamic Tumbling
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed pl-7 font-medium">
                                        Uses high-velocity air currents to gently tumble fabric against a cushion of air. This preserves fiber integrity while achieving maximum loft and softness.
                                    </p>
                                </div>

                                <div className="group">
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-lg">
                                        <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><CheckCircle2 className="w-3 h-3" /></span>
                                        Chemical-Free Softening
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed pl-7 font-medium">
                                        Achieves 40% better softness purely through mechanical airflow action, drastically reducing the need for chemical agents and water usage.
                                    </p>
                                </div>

                                <div className="group">
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-lg">
                                        <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><CheckCircle2 className="w-3 h-3" /></span>
                                        Multi-Vector Airflow
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed pl-7 font-medium">
                                        Proprietary oscillating nozzles ensure 100% uniform exposure, guaranteeing consistent shrinkage control (&lt; 1%) across the entire width.
                                    </p>
                                </div>

                                <div className="group">
                                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-lg">
                                        <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><CheckCircle2 className="w-3 h-3" /></span>
                                        AI-Driven Auto-Tension
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed pl-7 font-medium">
                                        Integrated load cells feed data to the PLC, which auto-corrects tension 50 times per second for perfect, stress-free fabric handling.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* F. HEAD-TO-HEAD BATTLE (Compact Marketing Version) */}
            <section className="py-20 bg-[#0B1121] text-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="text-center mb-10">
                        <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2 block">The Clear Choice</span>
                        <h2 className="text-3xl font-extrabold tracking-tight text-white">Why leaders switch to Cardwell</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 bg-slate-800/50 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
                        {/* LEFT: THE OLD WAY */}
                        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-700 relative">
                            <div className="absolute inset-0 bg-rose-500/5 pointer-events-none" />
                            <h3 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                                <XCircle className="w-4 h-4" /> Standard Machinery
                            </h3>
                            <div className="space-y-6">
                                <div className="flex gap-4 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                                    <AlertCircle className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                                    <div>
                                        <div className="font-bold text-slate-300">Unpredictable Shrinkage</div>
                                        <div className="text-xs text-slate-500 mt-1">Varies 3-5% per batch</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                                    <Zap className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                                    <div>
                                        <div className="font-bold text-slate-300">High Energy Costs</div>
                                        <div className="text-xs text-slate-500 mt-1">Outdated heating systems</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                                    <Settings className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                                    <div>
                                        <div className="font-bold text-slate-300">Manual Tuning</div>
                                        <div className="text-xs text-slate-500 mt-1">Operator errors common</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: THE NEW WAY */}
                        <div className="p-8 md:p-12 bg-emerald-900/10 relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
                            <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Cardwell Advantage
                            </h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 mt-1">
                                        <Scan className="w-3.5 h-3.5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">Guaranteed &lt; 1% Shrinkage</div>
                                        <div className="text-xs text-emerald-200/60 mt-1">Consistent every time</div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 mt-1">
                                        <Activity className="w-3.5 h-3.5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">40% Energy Savings</div>
                                        <div className="text-xs text-emerald-200/60 mt-1">Smart heat recovery</div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 mt-1">
                                        <Cpu className="w-3.5 h-3.5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">AI Auto-Pilot</div>
                                        <div className="text-xs text-emerald-200/60 mt-1">Zero operator dependency</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROI Banner */}
                    <div className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-lg shadow-emerald-500/20">
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm text-white">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Business Impact</div>
                                <div className="text-white font-black text-lg">Typical ROI in just 14 Months</div>
                            </div>
                        </div>
                        <button className="px-6 py-2 bg-white text-emerald-700 font-bold rounded-full text-sm hover:bg-emerald-50 transition-colors shadow-sm">
                            Calculate Your Savings
                        </button>
                    </div>
                </div>
            </section>

            {/* D. FAQ & SUPPORT */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">Knowledge Base</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
                            <p className="text-slate-500 mb-8 max-w-md bg-white p-6 rounded-2xl border border-slate-100 shadow-sm font-medium text-sm">
                                <Zap className="w-5 h-5 text-primary mb-3" />
                                Can't find an answer? Contact our live support team directly for machine-specific queries.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: "What is the warranty period?", a: "We offer a standard 2-year warranty on all mechanical parts and 1-year on electrical components." },
                                { q: "Do you provide installation services?", a: "Yes, our global field engineers provide onsite installation, calibration, and staff training." },
                                { q: "Is this machine compatible with Industry 4.0?", a: "Absolutely. All Series 2026 models come equipped with our proprietary IoT gateway for real-time monitoring." },
                            ].map((item, i) => (
                                <details key={i} className="group bg-white rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden open:shadow-lg border border-slate-100 transition-all cursor-pointer">
                                    <summary className="flex items-center justify-between gap-4 text-slate-900 font-bold">
                                        <span className="group-hover:text-primary transition-colors">{item.q}</span>
                                        <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 group-open:bg-primary group-open:text-white transition-all">
                                            <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                                        </span>
                                    </summary>
                                    <p className="mt-4 leading-relaxed text-slate-500 font-medium text-sm">
                                        {item.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* E. DEPLOYMENT TIMELINE */}
            <section className="py-32 bg-white text-slate-900 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 hidden md:block" />

                <div className="container mx-auto px-6 md:px-8 text-center mb-20 relative z-10">
                    <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block bg-white px-4 inline-block">Process</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold bg-white px-4 inline-block tracking-tight">Deployment Roadmap</h2>
                </div>

                <div className="container mx-auto px-6 md:px-8 max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Consultation", desc: "Requirements gathering & site audit" },
                            { step: "02", title: "Customization", desc: "Machine calibration to specs" },
                            { step: "03", title: "Installation", desc: "Field engineer deployment (5-7 Days)" },
                            { step: "04", title: "Go Live", desc: "Training & production ramp-up" }
                        ].map((item, i) => (
                            <div key={i} className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-emerald-200 hover:-translate-y-2 transition-all shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-emerald-500/10">
                                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center font-bold text-emerald-600 mb-6 mx-auto md:mx-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-center md:text-left text-slate-900">{item.title}</h3>
                                <p className="text-sm text-slate-500 font-medium text-center md:text-left leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. FINAL CTA --- */}
            <section className="py-24 bg-[#0F172A] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-[0.05] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

                <div className="container mx-auto px-6 text-center relative z-10 text-white">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Ready to Upgrade Your Line?</h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-medium">
                        Join industry leaders who trust Cardwell for their textile processing needs. Get a customized quote today.
                    </p>
                    <button className="bg-primary hover:bg-emerald-400 text-white font-bold py-5 px-10 rounded-full shadow-2xl hover:scale-105 transition-all animate-bounce-slow">
                        Contact Sales Team
                    </button>
                    <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-500">Response time: Usually within 24 hours</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
