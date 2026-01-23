'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Plus, Minus, FileText } from 'lucide-react';
import { products } from '@/data/products';

export default function FeaturedProducts() {
    const featuredDocs = [
        'woven-fabric-inspection',
        'fabric-pallet-folding',
        'fabric-meter-folding',
        'tubular-fabric-reversing-machine',
        'tubular-bio-wash-reversing',
        'open-width-inspection-machine',
    ];

    const tabNames: Record<string, string> = {
        'woven-fabric-inspection': 'Woven Inspection',
        'fabric-pallet-folding': 'Pallet Folding',
        'fabric-meter-folding': 'Meter Folding',
        'tubular-fabric-reversing-machine': 'Tubular Reversing',
        'tubular-bio-wash-reversing': 'Bio-Wash Reversing',
        'open-width-inspection-machine': 'Open Width Inspection',
    };

    const featuredItems = products.filter(p => featuredDocs.includes(p.id));
    const [activeTabId, setActiveTabId] = useState(featuredDocs[0]);
    const [isSpecsOpen, setIsSpecsOpen] = useState(false);

    const activeProduct = featuredItems.find(p => p.id === activeTabId) || featuredItems[0];

    // Safety check to prevent white-screen crashes if data is missing
    if (!activeProduct) return null;

    return (
        <section className="py-8 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-7xl">

                {/* Header - Compact */}
                <div className="mb-6 text-center max-w-3xl mx-auto">
                    <span className="text-emerald-600 font-bold text-[10px] uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        Top Machinery
                    </span>
                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-1.5 font-serif">
                        Precision Engineering
                    </h2>
                </div>

                {/* Tabs Navigation - Compact */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {featuredItems.map((product) => (
                        <button
                            key={product.id}
                            onClick={() => {
                                setActiveTabId(product.id);
                                setIsSpecsOpen(false);
                            }}
                            className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide transition-all duration-300 border ${activeTabId === product.id
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-md transform scale-105'
                                    : 'bg-white text-slate-500 border-slate-200 hover:border-emerald-500 hover:text-emerald-600'
                                }`}
                        >
                            {tabNames[product.id]}
                        </button>
                    ))}
                </div>

                {/* Main Content Content - Wide & Very Short Height */}
                <div className="bg-white rounded-xl shadow-lg shadow-slate-200 border border-slate-100 overflow-hidden max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[320px]">

                        {/* Left: Image Section */}
                        <div className="relative bg-slate-100 h-[200px] md:h-full group overflow-hidden">
                            <Image
                                src={activeProduct.image}
                                alt={activeProduct.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3">
                                <div className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    {activeProduct.category}
                                </div>
                            </div>
                        </div>

                        {/* Right: Info Section */}
                        <div className="p-5 flex flex-col h-full bg-white overflow-y-auto">
                            <div className="mb-2 shrink-0">
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-0.5 font-serif leading-tight">
                                    {activeProduct.name}
                                </h3>
                                <p className="text-emerald-700 font-medium text-[10px] border-l-2 border-emerald-500 pl-2 py-0.5 italic">
                                    {activeProduct.tagline}
                                </p>
                            </div>

                            <p className="text-slate-600 text-[10px] md:text-[11px] leading-relaxed text-justify mb-3 border-b border-slate-100 pb-2">
                                {activeProduct.description}
                            </p>

                            {/* Feature Highlights */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-3 shrink-0">
                                {activeProduct.highlights?.slice(0, 4).map((highlight, idx) => (
                                    <div key={idx} className="flex items-center gap-1.5">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                        <span className="text-slate-700 font-bold text-[9px] uppercase tracking-wide truncate">{highlight}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Action Accordion for Specs */}
                            <div className="mt-auto shrink-0">
                                <button
                                    onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                                    className="w-full flex items-center justify-between p-2 bg-slate-50 hover:bg-slate-100 rounded border border-slate-200 transition-colors group mb-2"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors">
                                            <FileText className="w-3 h-3" />
                                        </div>
                                        <span className="font-bold text-slate-900 uppercase tracking-widest text-[9px]">
                                            Specs
                                        </span>
                                    </div>
                                    {isSpecsOpen ? (
                                        <Minus className="w-3 h-3 text-emerald-600" />
                                    ) : (
                                        <Plus className="w-3 h-3 text-slate-400 group-hover:text-emerald-600" />
                                    )}
                                </button>

                                {/* Expanded Specs Panel */}
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSpecsOpen ? 'max-h-[200px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                                    <div className="bg-slate-50 rounded border border-slate-200 p-2 text-[9px]">
                                        <div className="space-y-1">
                                            {activeProduct.specs?.slice(0, 4).map((spec, idx) => (
                                                <div key={idx} className="flex justify-between border-b border-slate-200 last:border-0 pb-1 last:pb-0 border-dashed">
                                                    <span className="text-slate-500 font-medium truncate pr-2">{spec.label}</span>
                                                    <span className="text-slate-900 font-bold text-right shrink-0">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Main CTA */}
                                <Link
                                    href={`/product/${activeProduct.id}`}
                                    className="flex w-full items-center justify-center gap-1.5 bg-slate-900 hover:bg-emerald-600 text-white py-2 rounded font-bold uppercase tracking-widest text-[9px] transition-all duration-300 shadow-sm hover:shadow-emerald-500/20"
                                >
                                    View Details
                                    <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
