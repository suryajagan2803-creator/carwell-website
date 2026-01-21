'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, CheckCircle } from 'lucide-react';
import { products } from '@/data/products';

function FeaturedCard({ product }: { product: any }) {
    return (
        <Link
            href={`/product/${product.id}`}
            className="group relative h-[320px] bg-white border border-slate-200 hover:border-emerald-500 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-emerald-500/10"
        >
            {/* Media Area */}
            <div className="relative w-full h-48 bg-slate-100 overflow-hidden shrink-0 border-b border-slate-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Tech Overlay */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />

                {/* Badge */}
                <div className="absolute top-3 left-3 z-20">
                    <span className="bg-white/95 backdrop-blur-md text-slate-900 text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-slate-200 shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {product.category}
                    </span>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-5 relative bg-white flex flex-col grow">
                <div className="mb-2">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                            <CheckCircle className="w-3 h-3 text-emerald-500" />
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Series 2026</span>
                        </div>
                        <span className="text-[9px] font-mono text-slate-300 uppercase">ID: {product.id.substring(0, 4).toUpperCase()}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
                        {product.name}
                    </h3>
                </div>

                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
                    {product.description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider group-hover:text-emerald-700 transition-colors">View Specs</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
}

export default function FeaturedProducts() {
    // Select specific products for the homepage
    const featuredDocs = [
        'tubular-fabric-bio-wash-reversing-machine',
        'open-width-inspection-machine',
        'tubular-fabric-inspection-machine',
        'automatic-roll-packing-machine',
        'apron-doffing-device'
    ];

    const featuredItems = products.filter(p => featuredDocs.includes(p.id));

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/40 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
                    <div className="animate-fade-up">
                        <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest block mb-4 bg-emerald-50 inline-block px-3 py-1 rounded-full border border-emerald-100">
                            Innovation Hub
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                            Engineered for <br />
                            <span className="text-emerald-500">Textile Excellence</span>
                        </h2>
                    </div>

                    <div className="hidden md:block">
                        <Link href="/products" className="group flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors">
                            View All Machinery <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    {featuredItems.map((product, index) => (
                        <FeaturedCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
