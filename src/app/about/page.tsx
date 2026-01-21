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

            {/* 3. Visionary Leadership (Founders) */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-5/12">
                            <div className="relative h-[500px] w-full bg-slate-100 rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl">
                                <Image
                                    src="/img/founder_placeholder.jpg" // Placeholder or use a generic neat professional user icon if image missing
                                    alt="Mr. R. Balasundaram"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <h3 className="text-2xl font-bold uppercase tracking-wide">Mr. R. Balasundaram</h3>
                                    <p className="text-emerald-400 font-medium tracking-widest text-sm uppercase mt-1">Founder & Managing Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-7/12">
                            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-4 block">Leadership</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase leading-tight">
                                Guided by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">Experience</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                With over four decades of expertise in textile engineering, Mr. R. Balasundaram established Cardwell with a singular vision: to bring world-class manufacturing standards to the Indian textile market. His commitment to "Precision in Every Part" remains the cornerstone of our company's ethos.
                            </p>
                            <div className="p-6 bg-slate-50 border-l-4 border-emerald-500 rounded-r-xl">
                                <p className="italic text-slate-700 font-medium">
                                    "We don't just build machines; we engineer reliability. Our success is measured by the uninterrupted performance of our customers' mills."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Manufacturing Facility (Video/Image) */}
            <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-[0.05] pointer-events-none" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-4 block">Infrastructure</span>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">Manufacturing Facility</h2>
                        <p className="text-slate-400 text-lg">
                            Our state-of-the-art production unit in Coimbatore is equipped with advanced CNC machinery and rigorous quality control labs.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video bg-slate-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
                        {/* Placeholder for Video */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all z-20">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                            </div>
                        </div>
                        <Image
                            src="/img/hero_industrial_daylight.png"
                            alt="Factory Tour"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                        />
                        <div className="absolute bottom-6 right-6 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded">
                            WATCH TOUR
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Research & Development (R&D) */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl skew-x-[-2deg] hover:skew-x-0 transition-transform duration-500">
                                <Image
                                    src="/img/gears.png" // Using 'gears' as a proxy for R&D/Tech image. User asked for "web image" not AI.
                                    alt="R&D Lab"
                                    fill
                                    className="object-cover scale-110"
                                />
                                <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply" />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-4 block">Innovation Excellence</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase">Research & <span className="text-emerald-600">Development</span></h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-10">
                                Our in-house R&D division is the heartbeat of Cardwell. We continuously iterate on designs to improve energy efficiency and mechanical longevity.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Advanced Prototyping Lab",
                                    "Material Stress Testing",
                                    "Automation Logic Design",
                                    "Sustainable Tech Integration"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                                        <span className="font-bold text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why Choose Us & Team Combine */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Why Choose Us */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase flex items-center gap-3">
                                Why Choose Us
                                <Target className="w-8 h-8 text-emerald-500" />
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Heavy-duty Construction", desc: "Built with premium grade steel for vibration-free operation." },
                                    { title: "Custom-built Machines", desc: "Tailored engineering to match your specific mill layout." },
                                    { title: "Low Maintenance", desc: "Designed for minimal downtime and easy serviceability." },
                                    { title: "Energy Efficient", desc: "Optimized motors and drives reduce power consumption." },
                                    { title: "Reliable Support", desc: "24/7 After-sales support with readily available spares." }
                                ].map((item, i) => (
                                    <div key={i} className="group flex gap-4">
                                        <div className="w-12 h-12 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 text-emerald-600 font-bold text-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Team & Expertise */}
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase flex items-center gap-3">
                                Team & Expertise
                                <Users className="w-8 h-8 text-blue-500" />
                            </h2>
                            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-[100px] -z-0" />

                                <div className="relative z-10 flex items-center gap-5">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900">Skilled Engineers</h4>
                                        <p className="text-slate-500 text-sm">Experts in mechatronics and textile physics.</p>
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center gap-5">
                                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                                        <Target className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900">Experienced Technicians</h4>
                                        <p className="text-slate-500 text-sm">Hands-on problem solvers for onsite installation.</p>
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center gap-5">
                                    <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
                                        <Globe className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900">Customer Support Team</h4>
                                        <p className="text-slate-500 text-sm">Dedicated managers for seamless communication.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-slate-800 text-white p-8 rounded-3xl text-center">
                                <h4 className="text-xl font-bold mb-2">Join Our Network</h4>
                                <p className="text-slate-400 text-sm mb-6">Partner with a team that values your production goals.</p>
                                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-colors w-full uppercase tracking-widest text-sm">
                                    Contact Us Today
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
