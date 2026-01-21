import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata = {
    title: "Fabric Processing Machines | CARDWELL",
    description: "Explore our comprehensive range of 18+ fabric inspection, reversing, winding, and packing machines.",
};

const fabricMachines = [
    { slug: "tubular-fabric-bio-wash-reversing-machine", name: "Tubular Fabric / Bio-Wash Reversing Machine", category: "Reversing", image: "/img/draw-frame.png", desc: "Efficient reversing for tubular and bio-wash fabrics." },
    { slug: "open-width-inspection-machine", name: "Open Width Fabric Inspection Machine", category: "Inspection", image: "/img/draw-frame.png", desc: "Standard machine for open width fabric inspection." },
    { slug: "tubular-open-width-inspection", name: "Tubular / Open Width Fabric Inspection Machine", category: "Inspection", image: "/img/speed-frame.png", desc: "Versatile inspection for both tubular and open width." },
    { slug: "tubular-fabric-inspection-machine", name: "Tubular Fabric Both Sides Inspection Machine", category: "Inspection", image: "/img/comber.png", desc: "Dual-sided inspection for thorough quality control." },
    { slug: "multipurpose-fabric-inspection", name: "Multipurpose Fabric Inspection Machine", category: "Inspection", image: "/img/speed-frame.png", desc: "Adaptable solution for various fabric types." },
    { slug: "preparatory-machine-inspection", name: "Preparatory Machine with Inspection", category: "Preparation", image: "/img/apron-doffing.png", desc: "Combines preparation processes with inspection." },
    { slug: "fabric-relaxation-machine", name: "Fabric Relaxation Machine", category: "Processing", image: "/img/comber.png", desc: "Ensures tension-free relaxation of fabrics." },
    { slug: "movable-batching-system", name: "Movable Batching System", category: "Batching", image: "/img/draw-frame.png", desc: "Flexible system for efficient batching." },
    { slug: "fabric-winding-machine", name: "Fabric Winding Machine", category: "Winding", image: "/img/speed-frame.png", desc: "Precision winding capabilities for rolls." },
    { slug: "automatic-roll-packing-machine", name: "PLC Controlled Automatic Roll Packing Machine", category: "Packaging", image: "/img/apron-doffing.png", desc: "Automated packing with PLC specific control." },
    { slug: "woven-fabric-inspection", name: "Woven Fabric Inspection Machine", category: "Inspection", image: "/img/draw-frame.png", desc: "Specialized for woven fabric defects." },
    { slug: "coated-fabric-inspection", name: "Coated Fabric Inspection Machine", category: "Inspection", image: "/img/speed-frame.png", desc: "Designed for inspecting coated technical textiles." },
    { slug: "non-woven-inspection", name: "Non-Woven Fabric Inspection Machine", category: "Inspection", image: "/img/comber.png", desc: "Inspection solution for non-woven materials." },
    { slug: "coated-fabric-edge-cutter", name: "Coated Fabric Edge Cutter", category: "Cutting", image: "/img/draw-frame.png", desc: "Precise edge cutting for coated fabrics." },
    { slug: "brushing-unit", name: "Brushing Unit for Cleaning Both Sides", category: "Cleaning", image: "/img/speed-frame.png", desc: "Double-sided brushing for woven fabrics." },
    { slug: "fabric-roll-lifter", name: "Fabric Roll Lifter", category: "Handling", image: "/img/apron-doffing.png", desc: "Ergonomic lifting equipment for heavy rolls." },
    { slug: "fabric-meter-folding", name: "Fabric Meter Folding Machine", category: "Folding", image: "/img/comber.png", desc: "Accurate meter folding for fabrics." },
    { slug: "fabric-pallet-folding", name: "Fabric Pallet Folding Machine", category: "Folding", image: "/img/draw-frame.png", desc: "Heavy-duty pellet folding system." },
];

export default function FabricProcessingPage() {
    return (
        <main className="min-h-screen font-sans bg-gray-50">
            <Header />
            <ProductCatalog
                initialProducts={fabricMachines}
                title="FABRIC PROCESSING MACHINES"
                subtitle="Advanced solutions for inspection, reversing, and packaging."
            />

            {/* SYSTEM CAPABILITIES SECTION */}
            <section className="py-24 bg-white border-y border-slate-200">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <span className="text-emerald-700 font-bold text-xs tracking-widest uppercase mb-3 block">Engineering Excellence</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-medium text-slate-900 mb-4">
                            System Capabilities
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Our fabric processing line is engineered to deliver zero-defect output with minimal human intervention.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Capability 1 */}
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all group">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Precision Inspection</h3>
                            <p className="text-slate-600 leading-relaxed font-medium text-sm">
                                Advanced optical sensors and full-width illumination ensure 99.9% defect detection accuracy for both woven and knitted fabrics.
                            </p>
                        </div>
                        {/* Capability 2 */}
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all group">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">High-Speed Automation</h3>
                            <p className="text-slate-600 leading-relaxed font-medium text-sm">
                                Capable of running at speeds up to 80m/min with automatic tension control, significantly increasing daily throughput.
                            </p>
                        </div>
                        {/* Capability 3 */}
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all group">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">Material Versatility</h3>
                            <p className="text-slate-600 leading-relaxed font-medium text-sm">
                                Designed to handle everything from delicate bio-wash knits to heavy technical textiles without edge curling or distortion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEPLOYMENT ROADMAP SECTION */}
            <section className="py-24 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/3">
                            <span className="text-emerald-700 font-bold text-xs tracking-widest uppercase mb-3 block">Process</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 mb-6">
                                Deployment Roadmap
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                We don't just sell machines; we integrate solutions. Our proven deployment capability ensures your line is running at peak efficiency in record time.
                            </p>
                            <a href="/contact" className="inline-flex items-center font-bold text-slate-900 border-b-2 border-emerald-500 hover:text-emerald-700 transition-colors">
                                Start Your Project
                            </a>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-1 gap-8">
                            {[
                                { step: "01", title: "Consultation & Audit", text: "We analyze your current floor plan and production targets." },
                                { step: "02", title: "Custom Engineering", text: "Machines are calibrated to your specific fabric weight and width." },
                                { step: "03", title: "Installation & Training", text: "On-site setup by Cardwell engineers followed by operator training." },
                                { step: "04", title: "Lifecycle Support", text: "24/7 remote diagnostics and annual preventative maintenance." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-12 h-12 shrink-0 bg-white border border-slate-200 rounded-full flex items-center justify-center text-emerald-700 font-bold shadow-sm group-hover:border-emerald-500 group-hover:bg-emerald-50 transition-colors">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600/80 font-medium">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
