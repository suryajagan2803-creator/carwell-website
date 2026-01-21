import { Cpu, Network, Zap, ShieldCheck } from 'lucide-react';

export default function Innovation() {
    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-emerald-50/40 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-slide-in">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                        The Cardwell <br />
                        <span className="text-emerald-500">Manufacturing Edge</span>
                    </h2>
                    <p className="text-slate-600 text-lg font-medium leading-relaxed">
                        We deliver machinery that defines industry reliability. Our focus is on tangible performance metrics: higher output, lower maintenance, and consistent textile quality.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                        {
                            icon: ShieldCheck,
                            title: "Heavy-Duty Build",
                            desc: "Constructed with high-grade industrial steel to withstand continuous 24/7 operation."
                        },
                        {
                            icon: Cpu,
                            title: "Precision Calibration",
                            desc: "Micron-level accuracy in rollers and moving parts for superior yarn uniformity."
                        },
                        {
                            icon: Zap,
                            title: "Power Efficiency",
                            desc: "Optimized drive systems designed to reduce energy consumption by up to 15%."
                        },
                        {
                            icon: Network,
                            title: "Seamless Integration",
                            desc: "Designed to fit perfectly into existing spinning lines with minimal retrofitting."
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#F8FAFC] rounded-[2rem] p-6 flex flex-col items-center text-center transition-all duration-500 hover:bg-emerald-50 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 border border-transparent hover:border-emerald-100"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-700 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm group-hover:text-emerald-600 group-hover:shadow-emerald-200">
                                <item.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
