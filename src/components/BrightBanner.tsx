import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface BrightBannerProps {
    title: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

export default function BrightBanner({
    title,
    subtitle = "Industrial Division",
    description = "Leading the way in textile engineering with precision and innovation.",
    buttonText = "Read More"
}: BrightBannerProps) {
    return (
        <div className="relative w-full h-[500px] flex flex-col md:flex-row shadow-2xl overflow-hidden">

            {/* Left: Bright Info Block (40%) */}
            <div className="w-full md:w-5/12 bg-[#84cc16] relative flex flex-col justify-center px-10 md:px-16 z-20">
                {/* Tech Pattern */}
                <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-20 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />

                <div className="relative z-10 text-left">
                    <div className="inline-flex items-center gap-2 mb-6 border-b border-white/30 pb-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <h3 className="font-mono text-white uppercase tracking-[0.2em] text-xs font-bold">{subtitle}</h3>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight leading-[0.9] drop-shadow-sm">
                        {title}
                    </h1>

                    <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed mb-10 max-w-sm">
                        {description}
                    </p>

                    <button className="group flex items-center gap-3 bg-[#0F172A] hover:bg-white hover:text-[#0F172A] text-white font-bold py-4 px-8 rounded-none uppercase tracking-widest text-xs transition-all shadow-xl">
                        {buttonText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Right: Large Tech Image (60%) */}
            <div className="w-full md:w-7/12 relative h-full bg-slate-800 border-l-8 border-white">
                <Image
                    src="/img/hero_spindles_macro.png"
                    alt="Industrial Machinery Detail"
                    fill
                    className="object-cover transition-transform duration-[20s] hover:scale-110 ease-linear"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#84cc16]/90 via-transparent to-transparent opacity-80" />

                {/* Decorative Elements */}
                <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 max-w-xs hidden md:block">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] uppercase text-white font-bold tracking-widest">System Status</span>
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    </div>
                    <div className="h-0.5 w-full bg-white/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-emerald-400 w-2/3" />
                    </div>
                </div>
            </div>

        </div>
    );
}
