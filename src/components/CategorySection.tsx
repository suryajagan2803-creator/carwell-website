import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Layers, Settings } from 'lucide-react';

export default function CategorySection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">

            <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-fade-slide-in">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-6 h-[2px] bg-emerald-600"></span>
                            <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">Divisions</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight uppercase tracking-tight">
                            Product Categories
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Fabric Processing */}
                    <Link href="/fabric-processing" className="group relative h-[380px] overflow-hidden cursor-pointer border border-slate-200 hover:border-emerald-500 transition-colors duration-300">
                        <Image
                            src="/img/speed-frame.png"
                            alt="Fabric Processing Machines"
                            fill
                            className="object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-all duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />

                        <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                            <div className="flex items-center gap-2 mb-3 opacity-80">
                                <Layers className="w-4 h-4 text-emerald-400" />
                                <span className="text-white font-mono text-[10px] tracking-widest uppercase">Division 01</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
                                Fabric Processing
                            </h3>
                            <p className="text-slate-300 text-sm max-w-sm leading-relaxed mb-6 font-medium border-l-2 border-emerald-500 pl-4">
                                Advanced inspection, reversing, and continuous processing systems.
                            </p>

                            <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider group-hover:underline decoration-emerald-500 underline-offset-4">
                                Explore Division <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </Link>

                    {/* Spinning Accessories */}
                    <Link href="/spinning-accessories" className="group relative h-[380px] overflow-hidden cursor-pointer border border-slate-200 hover:border-emerald-500 transition-colors duration-300">
                        <Image
                            src="/img/apron-doffing.png"
                            alt="Spinning Accessories"
                            fill
                            className="object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-all duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />

                        <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                            <div className="flex items-center gap-2 mb-3 opacity-80">
                                <Settings className="w-4 h-4 text-emerald-400" />
                                <span className="text-white font-mono text-[10px] tracking-widest uppercase">Division 02</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
                                Spinning Accessories
                            </h3>
                            <p className="text-slate-300 text-sm max-w-sm leading-relaxed mb-6 font-medium border-l-2 border-emerald-500 pl-4">
                                High-precision components for carding, comber, and ring frames.
                            </p>

                            <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider group-hover:underline decoration-emerald-500 underline-offset-4">
                                Explore Division <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
}
