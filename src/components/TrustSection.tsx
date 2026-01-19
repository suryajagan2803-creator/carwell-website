import { Hexagon, Anchor, Zap, Box, Triangle, Circle, Cpu, Globe } from 'lucide-react';

const companies = [
    { name: "TexSpin Global", icon: Hexagon },
    { name: "FiberTech Systems", icon: Zap },
    { name: "SpinMaster Ind", icon: Circle },
    { name: "DuraWeave Corp", icon: Box },
    { name: "CottonPro Ltd", icon: Anchor },
    { name: "ThreadWorks", icon: Triangle },
    { name: "NexGen Textiles", icon: Cpu },
    { name: "Global Fabrics", icon: Globe },
    // Duplicate for seamless loop
    { name: "TexSpin Global", icon: Hexagon },
    { name: "FiberTech Systems", icon: Zap },
    { name: "SpinMaster Ind", icon: Circle },
    { name: "DuraWeave Corp", icon: Box },
    { name: "CottonPro Ltd", icon: Anchor },
    { name: "ThreadWorks", icon: Triangle },
    { name: "NexGen Textiles", icon: Cpu },
    { name: "Global Fabrics", icon: Globe },
];

export default function TrustSection() {
    return (
        <section className="py-20 bg-white border-b border-slate-100 overflow-hidden relative">
            <div className="container mx-auto px-6 mb-12 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                    Trusted By Industry Leaders
                </p>
            </div>

            <div className="flex w-full overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                <div className="flex items-center space-x-24 animate-marquee whitespace-nowrap min-w-full pl-24">
                    {companies.map((company, index) => (
                        <div key={index} className="flex items-center space-x-3 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 cursor-default group">
                            <company.icon className="w-8 h-8 text-slate-900 group-hover:text-emerald-600 transition-colors" strokeWidth={1.5} />
                            <span className="text-xl font-bold text-slate-800 font-sans tracking-tight">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
