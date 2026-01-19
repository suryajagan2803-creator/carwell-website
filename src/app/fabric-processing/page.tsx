import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata = {
    title: "Fabric Processing Machines | CARDWELL",
    description: "Explore our comprehensive range of 18+ fabric inspection, reversing, winding, and packing machines.",
};

const fabricMachines = [
    { slug: "tubular-fabric-reversing-machine", name: "Tubular Fabric / Bio-Wash Reversing Machine", category: "Reversing", image: "/img/draw-frame.png", desc: "Efficient reversing for tubular and bio-wash fabrics." },
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
            <Footer />
        </main>
    );
}
