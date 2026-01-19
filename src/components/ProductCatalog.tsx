'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Grid, List, Zap, Filter, ArrowRight, SlidersHorizontal, ChevronDown, CheckCircle2, PlayCircle } from 'lucide-react';
import BrightBanner from './BrightBanner';

interface Product {
    slug: string;
    name: string;
    category: string;
    image: string;
    desc: string;
    video?: string; // URL to the preview video
}

interface ProductCatalogProps {
    initialProducts: Product[];
    title: string;
    subtitle: string;
}

function ProductCard({ product, index }: { product: Product; index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleMouseEnter = () => {
        if (product.video && videoRef.current) {
            videoRef.current.play().catch(e => console.log('Video play failed/interrupted', e));
            setIsVideoPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (product.video && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setIsVideoPlaying(false);
        }
    };

    return (
        <Link
            href={`/product/${product.slug}`}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Tech Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            </div>

            {/* Image/Video Box */}
            <div className="relative w-full h-56 bg-gray-200 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
                />

                {/* Hover Video */}
                {product.video && (
                    <video
                        ref={videoRef}
                        src={product.video}
                        muted
                        loop
                        playsInline
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isVideoPlaying ? 'opacity-100' : 'opacity-0'}`}
                    />
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121C22] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Scanning Line Effect (Only if video is NOT playing) */}
                {!isVideoPlaying && (
                    <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-[-100%] transition-transform duration-[1.5s] ease-in-out z-10 pointer-events-none" />
                )}

                {/* Category Tag */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#121C22]/80 backdrop-blur-sm text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded border border-white/10">
                        {product.category}
                    </span>
                </div>

                {/* Video Indicator Badge */}
                {product.video && (
                    <div className="absolute top-4 right-4 z-20">
                        <span className={`flex items-center gap-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase px-2 py-1 rounded transition-opacity ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}>
                            <PlayCircle className="w-3 h-3" /> Preview
                        </span>
                    </div>
                )}
            </div>

            {/* Content Box */}
            <div className="p-6 relative bg-white flex-grow flex flex-col">
                {/* Decorative Line */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gray-100 group-hover:bg-primary/30 transition-colors duration-500" />

                <div className="flex justify-between items-center mb-4 opacity-60 text-xs font-mono font-bold text-gray-400">
                    <span>ID: {product.slug.slice(0, 6).toUpperCase()}</span>
                    <span>SERIES: 2026</span>
                </div>

                <h3 className="text-xl md:text-2xl font-extrabold text-[#121C22] mb-3 group-hover:text-primary transition-colors leading-tight">
                    {product.name}
                </h3>

                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">{product.desc}</p>

                <div className="mt-auto flex items-center justify-between">
                    <span className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide group-hover:gap-3 transition-all">
                        VIEW SPECIFICATIONS <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default function ProductCatalog({ initialProducts, title, subtitle }: ProductCatalogProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Extract unique categories
    const categories = ['All', ...Array.from(new Set(initialProducts.map(p => p.category)))];

    // Filter products
    const filteredProducts = initialProducts.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="min-h-screen bg-slate-50 font-sans relative">
            {/* Banner Section */}
            <div className="mb-12">
                <BrightBanner
                    title={title}
                    description={subtitle}
                    subtitle="Cardwell Series 2026"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 pb-24">
                {/* Controls Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 sticky top-4 z-40 backdrop-blur-md bg-white/90">

                    {/* Category Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`
                                    px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border
                                    ${selectedCategory === cat
                                        ? 'bg-primary text-white border-primary shadow-md shadow-emerald-500/20'
                                        : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-emerald-200 hover:text-primary'}
                                `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* View Toggles & Search */}
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-grow md:flex-grow-0">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search models..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-9 pr-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm font-medium w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>

                        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <Grid className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Products Display */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 text-slate-400">
                        <p className="text-lg">No matching products found.</p>
                        <button onClick={() => { setSearchQuery(''); setSelectedCategory('All') }} className="mt-4 text-primary font-bold hover:underline">Clear Filters</button>
                    </div>
                ) : (
                    <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                        {filteredProducts.map((product, index) => (
                            viewMode === 'grid' ? (
                                <ProductCard key={index} product={product} index={index} />
                            ) : (
                                <Link
                                    key={index}
                                    href={`/product/${product.slug}`}
                                    className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 bg-slate-200">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur text-white text-[10px] font-mono px-2 py-1 rounded border border-white/20">
                                            {product.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            <span>Series 2026</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                            <span>Industrial Grade</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                                        <p className="text-slate-500 text-sm mb-4 line-clamp-2 max-w-2xl">{product.desc}</p>
                                        <span className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                                            View Tech Specs <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </Link>
                            )
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
