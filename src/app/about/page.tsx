import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';
import Image from 'next/image';
import { CheckCircle, Award, Users, Globe, Building, Target } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen font-sans bg-white text-slate-900">
            <Header />

            {/* 1. Page Hero */}
            <section className="relative pt-40 pb-20 bg-slate-50 overflow-hidden border-b border-slate-200">
                <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-[0.03] pointer-events-none" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-[2px] bg-emerald-600"></span>
                            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">About Cardwell</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight uppercase tracking-tight mb-6">
                            Engineering the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">Fabric of Future</span>
                        </h1>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl border-l-4 border-slate-200 pl-6">
                            Since 1984, Cardwell has been at the forefront of textile machinery innovation. From our humble beginnings in Coimbatore to becoming a global leader in finishing technologies, our journey is defined by precision, endurance, and trust.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Key Stats / At a Glance */}
            <section className="py-12 border-b border-slate-100 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Founded", value: "1984", sub: "Since" },
                            { label: "Global Reach", value: "30+", sub: "Countries" },
                            { label: "Installations", value: "5000+", sub: "Machines" },
                            { label: "Awards", value: "12", sub: "Excellence Awards" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group hover:bg-slate-50 p-4 rounded-xl transition-colors">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.sub}</div>
                                <div className="text-4xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">{stat.value}</div>
                                <div className="text-sm font-bold text-slate-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. The Narrative & Infrastructure */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Image / Facility */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative h-[600px] w-full bg-slate-100 overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100">
                                {/* Ideally we'd have a factory image here, reusing generic for now */}
                                <Image
                                    src="/img/hero_industrial_daylight.png"
                                    alt="Cardwell Manufacturing Facility"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />

                                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 shadow-lg border-l-4 border-emerald-500">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Building className="w-5 h-5 text-emerald-600" />
                                        <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">State-of-the-Art Facility</span>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Spanning 50,000 sq.ft., our vertically integrated manufacturing unit houses the latest CNC machining centers, R&D labs, and assembly lines.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:w-1/2 space-y-10">
                            <div>
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight">Our Mission</h2>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    To empower the global textile industry with machinery that blends <span className="text-slate-900 font-bold">rugged durability</span> with <span className="text-slate-900 font-bold">digital intelligence</span>. We aim to reduce the environmental footprint of textile finishing through energy-efficient designs while maximizing output for our mill partners.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="bg-slate-50 p-6 border border-slate-100 hover:border-emerald-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                            <Target className="w-4 h-4" />
                                        </div>
                                        <h3 className="font-bold text-slate-900">Precision Engineering</h3>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Our "Zero Tolerance" quality policy ensures every component, from micro-controllers to heavy-duty gears, meets international standards.
                                    </p>
                                </div>
                                <div className="bg-slate-50 p-6 border border-slate-100 hover:border-emerald-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            <Globe className="w-4 h-4" />
                                        </div>
                                        <h3 className="font-bold text-slate-900">Global Standards</h3>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Our machines are exported to over 30 countries, complying with rigorous operational performance norms.
                                    </p>
                                </div>
                                <div className="bg-slate-50 p-6 border border-slate-100 hover:border-emerald-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                                            <Users className="w-4 h-4" />
                                        </div>
                                        <h3 className="font-bold text-slate-900">Customer Centricity</h3>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        With a dedicated team of 50+ service engineers, we ensure 24/7 support. Our relationship with clients extends decades beyond the point of sale.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Timeline Section */}
            <Timeline />

            {/* 5. Certifications & Badges */}

            {/* 5. Certifications & Badges */}


            <Footer />
        </main>
    );
}
