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
    const [showComparisonVideo, setShowComparisonVideo] = useState(false);
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
            videoRef.current.play().catch(e => {
                if (e.name !== 'AbortError') {
                    console.error("Video play failed:", e);
                }
            });
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


            {/* --- 2. DEEP DIVE SECTIONS --- */}
            {product.advancedFeatures ? (
                // --- RICH CONTENT MODE (For detailed products) ---
                <div className="bg-white">
                    {/* A. INTRO BULLETS & VARIANTS */}
                    <section className="py-16 container mx-auto px-6 md:px-8">
                        {product.tagline && (
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">{product.tagline}</h2>
                            </div>
                        )}

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                            {/* Intro Bullets */}
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500" /> Why This Machine?
                                </h3>
                                <ul className="space-y-4">
                                    {product.introBullets?.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Variants Table */}
                            {product.variants && (
                                <div className="rounded-3xl border border-slate-200 overflow-hidden">
                                    <div className="bg-slate-900 text-white p-4 font-bold text-sm uppercase tracking-wider text-center">Machine Variants</div>
                                    <div className="divide-y divide-slate-100">
                                        {product.variants.map((v, i) => (
                                            <div key={i} className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors">
                                                <span className="font-bold text-emerald-700 text-sm whitespace-nowrap">{v.model}</span>
                                                <span className="text-sm text-slate-600 text-right sm:text-left">{v.description}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* B. SPECS & CORE FEATURES */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
                            {/* Left: Specs */}
                            <div className="lg:col-span-4 lg:sticky lg:top-24 max-h-[80vh] overflow-y-auto bg-slate-50 rounded-2xl border border-slate-200">
                                <div className="p-4 border-b border-slate-200 font-bold text-slate-900 flex items-center gap-2 sticky top-0 bg-slate-50 z-10">
                                    <Activity className="w-5 h-5" /> Specifications
                                </div>
                                <div className="divide-y divide-slate-200">
                                    {product.specs.map((s, i) => (
                                        <div key={i} className="p-4 flex flex-col">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{s.label}</span>
                                            <span className="text-sm font-bold text-slate-900">{s.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Core Features Grid */}
                            <div className="lg:col-span-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8">Core Features</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {product.features.map((f, i) => (
                                        <div key={i} className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                                {IconMap[f.icon] ? <IconMap.Eye className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{f.title}</h4>
                                                <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* C. ADVANCED FEATURES DETAILS */}
                        <div className="mb-20">
                            <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">Advanced & Optional Features</h3>
                            <div className="space-y-12">
                                {product.advancedFeatures.map((af, i) => (
                                    <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200">
                                        <div className="w-full md:w-1/2">
                                            <div className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-2">Feature Focus</div>
                                            <h4 className="text-2xl font-black text-slate-900 mb-4">{af.title}</h4>
                                            <p className="text-slate-600 mb-6 font-medium">{af.description}</p>
                                            {af.items && (
                                                <ul className="space-y-3">
                                                    {af.items.map((item, j) => (
                                                        <li key={j} className="flex items-center gap-3 text-sm text-slate-700">
                                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        <div className="w-full md:w-1/2 h-64 bg-slate-200 rounded-2xl overflow-hidden relative">
                                            {/* Placeholder for feature image */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest">
                                                {af.title} Visual
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* D. WHY CHOOSE & ROI */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                            {/* Why Choose */}
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Cardwell?</h3>
                                <ul className="space-y-4">
                                    {product.whyChooseUs?.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                            <ShieldCheck className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                            <span className="text-slate-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ROI */}
                            {product.roi && (
                                <div className="bg-[#0F172A] rounded-3xl p-8 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                                    <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Investment & ROI</h3>

                                    <div className="mb-8 relative z-10">
                                        <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Typical ROI Period</div>
                                        <div className="text-4xl font-black text-emerald-400">{product.roi.period}</div>
                                    </div>

                                    <div className="space-y-6 relative z-10">
                                        <div>
                                            <strong className="block text-white mb-2">Key Benefits</strong>
                                            <div className="flex flex-wrap gap-2">
                                                {product.roi.benefits.map((b, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">{b}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <strong className="block text-white mb-2">Financial Highlights</strong>
                                            <ul className="space-y-2">
                                                {product.roi.highlights.map((h, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                                        <ArrowRight className="w-3 h-3 text-emerald-500" /> {h}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* E. INDUSTRIES & COMPARISON */}
                        <div className="mb-20">
                            <h3 className="text-center text-2xl font-bold text-slate-900 mb-8">Why Cardwell Stands Out</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200">
                                            <th className="p-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Cardwell Advantage</th>
                                            <th className="p-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Customer Benefit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {product.cardwellDifference?.map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                <td className="p-4 font-bold text-slate-900">{row.advantage}</td>
                                                <td className="p-4 text-slate-600 flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                                    {row.benefit}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            ) : (
                // --- DEFAULT GENERIC LAYOUT ---
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
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                                    <div>
                                        <h2 className="text-3xl font-black text-slate-900 mb-2">Why Choose Cardwell?</h2>
                                        <p className="text-slate-500 font-medium">Engineered for performance, safety, and long-term value.</p>
                                    </div>
                                    <button
                                        onClick={() => setShowComparisonVideo(true)}
                                        className="group flex items-center gap-3 px-5 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-xl hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white text-emerald-400 group-hover:text-emerald-600 transition-colors">
                                            <PlayCircle className="w-4 h-4 fill-current" />
                                        </div>
                                        <span>Watch Comparison</span>
                                    </button>
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
                                    <div className="bg-slate-900 rounded-3xl p-1 overflow-hidden shadow-2xl hidden">
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
                            </div>
                        </div>
                    </div>
                </section>
            )}



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
            {/* VIDEO COMPARISON MODAL */}
            {showComparisonVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md animate-fade-in" onClick={() => setShowComparisonVideo(false)}>
                    <div className="bg-[#0F172A] w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-slate-700 relative" onClick={e => e.stopPropagation()}>

                        <button
                            className="absolute top-4 right-4 z-50 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-red-500 transition-colors"
                            onClick={() => setShowComparisonVideo(false)}
                        >
                            <XCircle className="w-8 h-8" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh] md:h-[70vh]">
                            {/* LEFT: STANDARD */}
                            <div className="relative h-full border-r border-slate-700 bg-black flex flex-col justify-center items-center group">
                                <div className="absolute top-6 left-6 z-20 bg-red-500/20 text-red-400 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold border border-red-500/30 uppercase tracking-widest">
                                    Standard Market
                                </div>
                                {/* Placeholder Video (Reusing demo for now but grayscale) */}
                                <video
                                    src="/videos/demo.mp4"
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
                                    autoPlay loop muted playsInline
                                />
                                <div className="relative z-10 text-center p-8 bg-black/50 w-full backdrop-blur-[2px]">
                                    <h3 className="text-2xl font-bold text-white mb-2">Labor Intensive</h3>
                                    <p className="text-slate-300">Requires constant manual intervention and monitoring.</p>
                                </div>
                            </div>

                            {/* RIGHT: CARDWELL */}
                            <div className="relative h-full bg-black flex flex-col justify-center items-center group">
                                <div className="absolute top-6 right-6 z-20 bg-emerald-500 text-white px-6 py-2 rounded-full text-xs font-bold border border-emerald-400 uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                                    Cardwell Tech
                                </div>
                                <video
                                    src="/videos/demo.mp4"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    autoPlay loop muted playsInline
                                />
                                <div className="absolute bottom-10 inset-x-0 text-center p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                                    <h3 className="text-3xl font-black text-white mb-2">Automated Precision</h3>
                                    <p className="text-emerald-400 font-medium">Zero-touch reversing process with AI monitoring.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
