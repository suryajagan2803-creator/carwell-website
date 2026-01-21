'use client';

import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

const heroSlides = [
    {
        id: 1,
        type: 'video',
        src: '/videos/demo.mp4',
        headline: "PRECISION ENGINEERING",
        subhead: "DRIVING THE FUTURE OF TEXTILES"
    },
    {
        id: 2,
        type: 'video',
        src: '/videos/demo.mp4',
        headline: "GLOBAL INNOVATION",
        subhead: "SUSTAINABLE FABRIC SOLUTIONS"
    },
    {
        id: 3,
        type: 'video',
        src: '/videos/demo.mp4',
        headline: "MAXIMUM EFFICIENCY",
        subhead: "ZERO COMPROMISE ON QUALITY"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance logic
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // 5 seconds for better readability of large text
        return () => clearInterval(timer);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">

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
                    {/* Darker overlay for text contrast */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            ))}

            {/* Main Centered Content */}
            <div className="relative z-20 container mx-auto px-12 flex flex-col items-center text-center">

                {/* Headline - Massive Mode */}
                <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-sans font-black text-white uppercase leading-[0.9] tracking-tighter mb-6 drop-shadow-xl animate-fade-in-up max-w-[90vw]">
                    {heroSlides[currentSlide].headline}
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-2xl text-slate-100 font-light mb-12 max-w-3xl drop-shadow-md tracking-wide">
                    {heroSlides[currentSlide].subhead}
                </p>

                {/* "Baumeister" Style Split Button */}
                <div className="group flex items-stretch cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                    <Link
                        href="/products"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm uppercase tracking-widest px-10 py-5 flex items-center transition-colors"
                    >
                        Read More
                    </Link>
                    <div className="bg-slate-800 text-white px-5 flex items-center justify-center transition-colors group-hover:bg-slate-700">
                        <ArrowRight className="w-5 h-5" />
                    </div>
                </div>

            </div>

            {/* Navigation Arrows (Sides) */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-slate-100 w-16 h-16 flex items-center justify-center group transition-colors"
                aria-label="Previous Slide"
            >
                <ArrowLeft className="w-6 h-6 text-slate-900 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white hover:bg-slate-100 w-16 h-16 flex items-center justify-center group transition-colors"
                aria-label="Next Slide"
            >
                <ArrowRight className="w-6 h-6 text-slate-900 group-hover:translate-x-1 transition-transform" />
            </button>

        </section>
    );
}
