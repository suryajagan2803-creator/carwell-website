'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Crown, Zap, Cpu, Scan, Network } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-[800px] w-full flex items-center overflow-hidden bg-white border-b border-slate-200">

            {/* Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/img/future_textile_hero.png"
                    alt="Futuristic Smart Factory"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Tech Overlays */}
                <div className="absolute inset-0 bg-white/30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:via-white/50" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="container mx-auto px-6 md:px-8 relative z-20 h-full flex flex-col justify-center">

                {/* HUD Elements Top */}
                <div className="absolute top-8 left-8 right-8 flex justify-between items-center opacity-60 hidden md:flex">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        System Online | v.4.0.2
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        Data Stream: Secure
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Main Content */}
                    <div className="animate-fade-slide-in space-y-8">

                        {/* Chip/Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur border border-slate-200 rounded-full shadow-sm">
                            <Cpu className="w-4 h-4 text-cyan-600" />
                            <span className="text-[10px] font-bold tracking-widest text-slate-600 uppercase">
                                Next-Gen Automation
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tight">
                            FUTURE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">FABRIC</span> <br />
                            SYSTEMS
                        </h1>

                        <p className="text-lg text-slate-600 font-medium max-w-xl leading-relaxed">
                            Experience the convergence of AI-driven inspection and high-speed mechanical precision.
                            <span className="block mt-2 text-slate-900 font-bold">The smart factory is here.</span>
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link href="/products" className="group relative px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest overflow-hidden rounded-xl shadow-xl hover:shadow-cyan-500/20 transition-all hover:-translate-y-1">
                                <span className="relative z-10 flex items-center gap-3 text-xs">
                                    Initialize
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>

                            <button className="flex items-center gap-3 px-8 py-4 bg-white/60 backdrop-blur-md border border-white/50 text-slate-800 font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg hover:bg-white transition-all">
                                <Play className="w-4 h-4 fill-current" />
                                Simulation
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Feature Holograms */}
                    <div className="hidden lg:grid grid-cols-2 gap-4 relative">
                        {/* Decorative connecting lines */}
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent border-t border-dashed border-cyan-400/30 -z-10"></div>
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent border-l border-dashed border-cyan-400/30 -z-10"></div>

                        {/* Feature Card 1 */}
                        <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:scale-105 transition-transform group cursor-default">
                            <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                                <Zap className="w-5 h-5 text-cyan-600 group-hover:text-white transition-colors" />
                            </div>
                            <div className="text-2xl font-black text-slate-900 mb-1">98%</div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Energy Efficiency</div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:scale-105 transition-transform group cursor-default translate-y-8">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                                <Network className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <div className="text-2xl font-black text-slate-900 mb-1">IoT</div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Real-time Analytics</div>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:scale-105 transition-transform group cursor-default -translate-y-4">
                            <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                                <Crown className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                            </div>
                            <div className="text-2xl font-black text-slate-900 mb-1">ISO</div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Certified Quality</div>
                        </div>

                        {/* Feature Card 4 */}
                        <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:scale-105 transition-transform group cursor-default translate-y-4">
                            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
                                <Cpu className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors" />
                            </div>
                            <div className="text-2xl font-black text-slate-900 mb-1">AI</div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Defect Detection</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
