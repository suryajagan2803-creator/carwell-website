import Image from 'next/image';
import { Globe, Plane, Award, MapPin } from 'lucide-react';

export default function GlobalReach() {
    return (
        <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
            {/* Background Map Placeholder (Soft Dots) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-[radial-gradient(circle,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    <div className="md:w-1/2 animate-fade-slide-in">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs tracking-widest uppercase mb-6">
                            National Operations
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                            Trusted <br /><span className="text-emerald-500">Across India</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                            Our machinery powers textile production lines in major hubs across the nation. From the knitwear capital of Tirupur to the textile centers of Gujarat and Maharashtra, Cardwell engineering delivers consistent performance.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "States Covered", value: "12+", icon: Globe },
                                { label: "Active Installations", value: "2500+", icon: Award },
                                { label: "Service Network", value: "Pan-India", icon: Plane },
                                { label: "Support Centers", value: "24/7", icon: MapPin },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white border border-slate-100 p-6 rounded-[1.5rem] hover:border-emerald-200 transition-all hover:shadow-lg hover:shadow-emerald-500/10 group">
                                    <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                                        <stat.icon className="w-5 h-5" />
                                    </div>
                                    <div className="text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 relative h-[550px] flex items-center justify-center perspective-[1000px] animate-float">
                        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-slate-100">

                            <Image
                                src="/img/hero_spindles_macro.png"
                                alt="Global Network Operations"
                                fill
                                className="object-cover transition-transform duration-[20s] ease-linear hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />

                            {/* Floating Stats Label - Top Right */}
                            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md border border-slate-100 p-5 rounded-[1.5rem] shadow-xl animate-bounce-slow">
                                <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-1">Network Status</div>
                                <div className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    Operational
                                </div>
                            </div>

                            {/* Floating Context Labels */}
                            <div className="absolute bottom-10 left-10 space-y-3">
                                <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-slate-100 shadow-md">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                                    <span className="text-xs text-slate-800 font-bold uppercase tracking-wide">Node Sync</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-slate-100 shadow-md">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-75" />
                                    <span className="text-xs text-slate-800 font-bold uppercase tracking-wide">Data Active</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
