import { Settings, Wrench, Cog, Activity, Truck, Users, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: <Settings className="w-8 h-8" />,
        title: "Fabric Processing Machines",
        description: "High-speed Fabric Reversing, Inspection Machines, and Automatic Packing Systems for modern textile mills."
    },
    {
        icon: <Wrench className="w-8 h-8" />,
        title: "Spinning Mill Accessories",
        description: "Precision engineered accessories for Carding, Comber, Simplex Engines, and Ring Frames to boost productivity."
    },
    {
        icon: <Activity className="w-8 h-8" />,
        title: "Process Optimization Devices",
        description: "Innovative devices like Acid Treatment Plants and Yarn Conditioning Systems for superior yarn quality."
    },
    {
        icon: <Truck className="w-8 h-8" />,
        title: "Global Machinery Export",
        description: "Trusted exporter of textile engineering solutions to Bangladesh, Vietnam, Africa, and South East Asia."
    },
    {
        icon: <Cog className="w-8 h-8" />,
        title: "Custom Textile Engineering",
        description: "Tailored automation and machinery architecture designed to meet specific spinning mill requirements."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Quality Control Systems",
        description: "Comprehensive inspection machines and auxiliary equipment ensuring zero-defect fabric production."
    }
];

export default function Services() {
    return (
        <section id="services" className="py-10 bg-[#F8FAFC] relative overflow-hidden">
            {/* Soft Gradient Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="text-center mb-6 max-w-2xl mx-auto animate-fade-slide-in">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-100/50 text-emerald-700 font-bold text-xs tracking-widest uppercase mb-3 border border-emerald-100">
                        Our Expertise
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Comprehensive Solutions for <span className="text-emerald-500">Modern Mills</span>
                    </h2>
                    <p className="text-slate-600 text-base leading-relaxed">
                        End-to-end technical infrastructure and machinery innovations designed to elevate your spinning and fabric production capabilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {services.map((service, index) => (
                        <div key={index} className="group relative bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500 hover:-translate-y-2">
                            <div className="mb-3 w-10 h-10 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                {service.icon}
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-500 leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <div className="flex items-center text-sm font-bold text-emerald-600">
                                <span className="group-hover:mr-2 transition-all duration-300">Learn more</span>
                                <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
