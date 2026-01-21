'use client';

import Link from 'next/link';
import { ArrowRight, Star, PlayCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroSlides = [
    {
        id: 1,
        type: 'video',
        src: '/videos/demo.mp4',
        headline: "THE GOLD STANDARD IN",
        subhead: "TEXTILE ENGINEERING"
    },
    {
        id: 2,
        type: 'video',
        src: '/videos/demo.mp4', // Reusing for demo as we only have one video asset
        headline: "PRECISION DRIVEN",
        subhead: "PERFORMANCE"
    },
    {
        id: 3,
        type: 'video',
        src: '/videos/demo.mp4', // Reusing for demo
        headline: "GLOBAL LEADER",
        subhead: "SINCE 1984"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 3000); // 3 seconds per slide as requested

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[85vh] w-full flex items-center overflow-hidden bg-slate-900 border-b border-slate-800">

            {/* Background Slides */}
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <video
                        src={slide.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full"
                    />
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>
            ))}

            <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex flex-col justify-center items-start text-white">

                {/* Animated Text Content */}
                <div className="max-w-4xl space-y-6">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-2 animate-fade-in-up">
                        <span className="px-3 py-1 bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded">
                            Excellence in Engineering
                        </span>
                        <div className="h-px w-10 bg-emerald-500/50"></div>
                    </div>

                    {/* Dynamic Headlines based on slide */}
                    <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tight drop-shadow-2xl">
                        {heroSlides[currentSlide].headline}
                        <span className="block text-emerald-400">{heroSlides[currentSlide].subhead}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl leading-relaxed drop-shadow-lg">
                        We engineer the machines that power the world's finest fabric mills. Precision, durability, and innovation in every component.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-6">
                        <Link
                            href="/products"
                            className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm uppercase tracking-widest rounded transition-all shadow-lg hover:shadow-emerald-500/40 flex items-center gap-2"
                        >
                            Explore Machines <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-black text-sm uppercase tracking-widest rounded border border-white/20 transition-all"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>

                {/* Slider Indicators */}
                <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-1 transition-all duration-300 rounded-full ${index === currentSlide ? 'w-12 bg-emerald-500' : 'w-4 bg-white/30 hover:bg-white/50'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
