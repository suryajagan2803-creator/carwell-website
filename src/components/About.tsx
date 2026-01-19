import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cpu, Zap, Network, Leaf, Activity } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-50 relative border-y border-slate-200">
            {/* Technical Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

                    {/* Left: Visuals & Stats */}
                    <div className="lg:w-1/2 relative min-h-[500px] flex flex-col">
                        <div className="relative flex-grow w-full bg-white border border-slate-200 shadow-sm overflow-hidden mb-8 group">
                            <Image
                                src="/img/gears.png"
                                alt="Advanced Textile Engineering"
                                fill
                                className="object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-slate-900/10" />

                            {/* Tech Overlay HUD */}
                            <div className="absolute top-4 right-4 flex flex-col items-end gap-1 opacity-80">
                                <div className="flex items-center gap-1.5 bg-slate-900/80 text-emerald-400 px-2 py-1 rounded-sm text-[9px] font-mono border border-emerald-500/30 backdrop-blur-sm">
                                    <Activity className="w-3 h-3" />
                                    <span>SYSTEM: ONLINE</span>
                                </div>
                                <div className="text-[9px] text-white font-mono tracking-widest">V.4.2.0 STABLE</div>
                            </div>

                            <div className="absolute bottom-0 left-0 bg-slate-900 text-white px-6 py-4 border-t-2 border-emerald-500">
                                <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 mb-1">R&D Center</div>
                                <div className="font-bold text-lg">Next-Gen Innovation Lab</div>
                            </div>
                        </div>

                        {/* Stats Strip */}
                        <div className="grid grid-cols-3 divide-x divide-slate-200 border border-slate-200 bg-white shadow-sm">
                            <div className="p-4 text-center group hover:bg-slate-50 transition-colors">
                                <div className="text-3xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">IoT</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Integrated Core</div>
                            </div>
                            <div className="p-4 text-center group hover:bg-slate-50 transition-colors">
                                <div className="text-3xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">4.0</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Industry Ready</div>
                            </div>
                            <div className="p-4 text-center group hover:bg-slate-50 transition-colors">
                                <div className="text-3xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">Zero</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Carbon Vision</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Technical Narrative */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-8 h-[2px] bg-emerald-600"></span>
                            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Future Vision</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1] uppercase tracking-tight">
                            Pioneering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">Intelligent Manufacturing</span>
                        </h2>

                        <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-sm md:text-base border-l-4 border-slate-200 pl-6 mb-8">
                            <p>
                                Cardwell is redefining the textile landscape by bridging the gap between heavy engineering and digital intelligence. We are building the <strong className="text-slate-900">Smart Factories</strong> of tomorrow.
                            </p>
                            <p>
                                By integrating <strong className="text-slate-900">AI-driven process control</strong> with our robust mechanical systems, we enable predictive maintenance, real-time resource optimization, and unparalleled consistency. Our mission is to engineer systems that not only produce but <em className="text-emerald-700 not-italic font-bold">think</em>.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { text: "Predictive Maintenance", icon: Network },
                                { text: "Cloud Analytics Capable", icon: Cpu },
                                { text: "Autonomous Logic Systems", icon: Activity },
                                { text: "Energy Recovery Units", icon: Leaf }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white border border-slate-100 p-4 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group cursor-default">
                                    <div className="w-8 h-8 rounded-sm bg-slate-100 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                                        <item.icon className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide group-hover:text-slate-900">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-slate-200">
                            <Link href="/about" className="text-slate-900 hover:text-emerald-700 font-bold text-sm uppercase tracking-widest flex items-center gap-3 group transition-colors">
                                Discover Our Roadmap
                                <span className="w-8 h-8 flex items-center justify-center bg-slate-900 text-white rounded-none group-hover:bg-emerald-600 transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
