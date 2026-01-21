'use client';

import { use, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    CheckCircle2, XCircle, AlertCircle, ShieldCheck, Activity, Scan, Eye, Minimize, Hash,
    ChevronRight, Download, ArrowRight, Zap, Layers, Settings, BarChart3, ChevronDown, Cpu, Grid, PlayCircle
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

            {/* B. & C. SCROLLING "ROLLING" LAYOUT: FIXED SPECS + SCROLLING FEATURES */}
            <section className="py-12 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 md:px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative items-start">

                        {/* LEFT: STICKY SPECIFICATIONS (Fixed Position) */}
                        <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start h-fit bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden z-10 transition-all">
                            <div className="p-6 border-b border-slate-100 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-slate-900" />
                                <h3 className="font-bold text-slate-900 text-lg">Specifications</h3>
                            </div>
                            <div className="divide-y divide-slate-100 max-h-[70vh] overflow-y-auto custom-scrollbar">
                                {product?.specs?.map((spec, i) => (
                                    <div key={i} className="p-5 flex flex-col gap-1 hover:bg-slate-50 transition-colors">
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">{spec.label}</div>
                                        <div className="font-medium text-slate-900">{spec.value}</div>
                                    </div>
                                ))}
                                <div className="p-5 flex flex-col gap-1 hover:bg-slate-50 transition-colors">
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Warranty</div>
                                    <div className="font-medium text-slate-900">2 Years Standard</div>
                                </div>
                            </div>
                            <div className="p-4 bg-slate-50 border-t border-slate-100">
                                <button className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl shadow hover:bg-emerald-600 transition-all flex items-center justify-center gap-2">
                                    <Download className="w-4 h-4" /> Download Brochure
                                </button>
                            </div>
                        </div>

                        {/* RIGHT: WHY CHOOSE CARDWELL */}
                        <div className="lg:col-span-8 space-y-8">
                            {/* Section Header */}
                            <div className="text-left">
                                <h2 className="text-3xl font-black text-slate-900 mb-2">Why Choose Cardwell?</h2>
                                <p className="text-slate-500 font-medium">Engineered for performance, safety, and long-term value.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Card 1 */}
                                <div className="bg-[#0F172A] p-8 rounded-[2rem] flex flex-col items-start gap-6 hover:scale-[1.01] transition-transform shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors" />

                                    <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 shadow-lg group-hover:border-emerald-500/50 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-white font-bold text-xl mb-3">Innovative Air Stream</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                            Proprietary system prevents fabric damage with <span className="text-emerald-400">zero mechanical traction</span>, ensuring safety for even the most delicate lots.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-[#0F172A] p-8 rounded-[2rem] flex flex-col items-start gap-6 hover:scale-[1.01] transition-transform shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors" />

                                    <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 shadow-lg group-hover:border-emerald-500/50 transition-colors">
                                        <Activity className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-white font-bold text-xl mb-3">Massive Labor Savings</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                            Designed for high-speed automated operation, reducing manual workforce requirements by <span className="text-emerald-400">up to 60%</span> annually.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 3 (Full Width) */}
                                <div className="bg-[#0F172A] p-8 rounded-[2rem] flex flex-col items-start gap-6 hover:scale-[1.01] transition-transform shadow-2xl relative overflow-hidden group md:col-span-2">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-colors" />

                                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 shadow-lg group-hover:border-emerald-500/50 transition-colors shrink-0">
                                            <Settings className="w-6 h-6 text-emerald-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-xl mb-2">Versatile Visual Configurations</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-xl">
                                                Modular design architecture capable of adapting to any production scale or factory layout constraint without performance compromise.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RESTORED CONTENT: VISUAL & DATA DEEP DIVE */}
                            <div className="space-y-8">

                                {/* 1. VISUAL COMPARISON CARD */}
                                <div className="bg-slate-900 rounded-3xl p-1 overflow-hidden shadow-2xl">
                                    <div className="relative h-64 md:h-80 bg-slate-800 rounded-[20px] overflow-hidden group">
                                        {/* Split View */}
                                        <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-800 border-r border-slate-700/50 flex flex-col justify-center items-center text-center p-6">
                                            <div className="bg-slate-700/50 p-4 rounded-full mb-4 grayscale opacity-50 group-hover:opacity-100 transition-opacity">
                                                {/* Placeholder for "Old Way" */}
                                                <Layers className="w-8 h-8 text-slate-400" />
                                            </div>
                                            <h4 className="text-slate-400 font-bold text-sm uppercase mb-1">Standard Market</h4>
                                            <p className="text-slate-600 text-xs">Manual Operation</p>
                                        </div>
                                        <div className="absolute inset-y-0 right-0 w-1/2 bg-emerald-900/10 flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-emerald-500/10 animate-pulse" />
                                            <div className="bg-emerald-500 p-4 rounded-full mb-4 shadow-[0_0_20px_rgba(16,185,129,0.4)] relative z-10">
                                                <Zap className="w-8 h-8 text-white" />
                                            </div>
                                            <h4 className="text-white font-bold text-sm uppercase mb-1 relative z-10">Cardwell Tech</h4>
                                            <p className="text-emerald-400 text-xs relative z-10">AI-Driven Automation</p>
                                        </div>

                                        {/* VS Badge */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white font-black italic rounded-full w-12 h-12 flex items-center justify-center border-4 border-slate-800 z-20 shadow-xl">
                                            VS
                                        </div>
                                    </div>
                                </div>

                                {/* 2. DETAILED COMPARISON TABLE */}
                                <div className="bg-[#0F172A] rounded-3xl p-6 md:p-8 flex flex-col shadow-2xl relative overflow-hidden">
                                    {/* Background Elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 relative z-10">
                                        <div>
                                            <h2 className="text-2xl font-bold text-white mb-1">Why Cardwell Stands Out</h2>
                                            <p className="text-slate-400 text-xs">Direct feature comparison.</p>
                                        </div>
                                        <div className="flex bg-slate-800/50 p-1 rounded-lg border border-slate-700/50">
                                            <span className="px-3 py-1 bg-slate-700 rounded text-white text-[10px] font-bold shadow-sm">Table View</span>
                                        </div>
                                    </div>

                                    <div className="bg-slate-800/40 rounded-2xl border border-slate-700/50 overflow-hidden relative z-10">
                                        <div className="grid grid-cols-12 bg-slate-800/80 border-b border-slate-700 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                            <div className="col-span-6 p-4 md:pl-6">Feature</div>
                                            <div className="col-span-3 p-4 text-center text-emerald-400">Cardwell</div>
                                            <div className="col-span-3 p-4 text-center text-slate-500">Standard</div>
                                        </div>
                                        <div className="divide-y divide-slate-700/50">
                                            {product?.comparison?.map((row, i) => (
                                                <div key={i} className="grid grid-cols-12 items-center hover:bg-white/5 transition-colors group">
                                                    <div className="col-span-6 p-3 md:pl-6 font-medium text-slate-200 text-xs md:text-sm">{row.feature}</div>
                                                    <div className="col-span-3 p-3 flex justify-center">
                                                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                                        </div>
                                                    </div>
                                                    <div className="col-span-3 p-3 flex justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                                                        <div className="w-5 h-5 rounded-full bg-slate-700/50 flex items-center justify-center">
                                                            <XCircle className="w-3 h-3 text-rose-500" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* 3. ADDITIONAL FEATURES / ROI CARD */}
                                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4">Investment ROI</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { label: "Production Increase", val: "+45%", desc: "vs standard manual machines" },
                                            { label: "Labor Saving", val: "60%", desc: "Return on investment in < 8 months" },
                                            { label: "Power Efficiency", val: "A++", desc: "IE3 Premium Efficiency Motors" },
                                            { label: "Maintenance", val: "Zero", desc: "Lubrication-free bearings" }
                                        ].map((stat, i) => (
                                            <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-300 transition-all">
                                                <div className="text-3xl font-black text-slate-900 mb-1">{stat.val}</div>
                                                <div className="text-xs font-bold text-slate-500 uppercase mb-1">{stat.label}</div>
                                                <div className="text-[10px] text-slate-400">{stat.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div></div>
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
