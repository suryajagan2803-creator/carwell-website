export type Product = {
    id: string;
    name: string;
    category: string;
    image: string;
    description: string;
    highlights: string[];
    specs: { label: string; value: string }[];
    features: { title: string; description: string; icon: string }[];
    comparison: {
        feature: string;
        cardwell: string;
        market: string;
        advantage: boolean;
    }[];
    video?: string;
};

export const products: Product[] = [
    // FABRIC PROCESSING PRODUCTS (Sample of the 18)
    {
        id: "tubular-fabric-bio-wash-reversing-machine",
        name: "Tubular Fabric Reversing Machine (Bio-Wash)",
        category: "Fabric Processing",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        description: "High-speed tubular fabric reversing machine designed for bio-wash and heavy-duty applications. Ensures tension-free processing with automatic detwisting capabilities.",
        highlights: ["Automatic Detwisting", "Tension-Free Operation", "High-Speed Production"],
        specs: [
            { label: "Working Width", value: "36 to 48 inches" },
            { label: "Speed", value: "Up to 80 m/min" },
            { label: "Power Consumption", value: "2.5 KW" },
            { label: "Material", value: "Stainless Steel 304" },
        ],
        features: [
            { title: "Detwisting System", description: "Advanced optical sensors automatically detect and remove twists.", icon: "Scan" },
            { title: "Tension Control", description: "Ensures fabric integrity is maintained during high-speed reversing.", icon: "Activity" },
            { title: "Durability", description: "Built with heavy-gauge stainless steel for long-term industrial use.", icon: "ShieldCheck" },
        ],
        comparison: [
            { feature: "Tube Loading", cardwell: "Automatic & Pneumatic", market: "Manual / Mechanical", advantage: true },
            { feature: "Fabric Damage Risk", cardwell: "Near Zero (Air Cushion)", market: "Moderate (Friction)", advantage: true },
            { feature: "Speed", cardwell: "80 m/min", market: "45-50 m/min", advantage: true },
            { feature: "Maintenance", cardwell: "Lubrication Free", market: "Frequent Greasing", advantage: true },
        ]
    },
    {
        id: "open-width-inspection-machine",
        name: "Open Width Fabric Inspection Machine",
        category: "Fabric Inspection",
        image: "/img/speed-frame.png",
        video: "/videos/demo.mp4",
        description: "Premium inspection machine for open width knitted and woven fabrics. Features variable speed control and full-width illumination board.",
        highlights: ["Full Illumination", "Digital Length Counter", "Edge Alignment"],
        specs: [
            { label: "Roller Width", value: "72 to 96 inches" },
            { label: "Speed", value: "0-60 m/min (Variable)" },
            { label: "Lighting", value: "Top & Bottom LED" },
            { label: "Tension", value: "Adjustable Clutch" },
        ],
        features: [
            { title: "Visual Inspection", description: "High-intensity LED panel reveals minute defects instantly.", icon: "Eye" },
            { title: "Edge Guiding", description: "Automatic edge alignment system for perfect rolling.", icon: "Minimize" },
            { title: "Length Measurement", description: "Digital counter with accuracy of +/- 0.1%.", icon: "Hash" },
        ],
        comparison: [
            { feature: "Lighting System", cardwell: "Dual LED (Top/Bottom)", market: "Single Fluorescent", advantage: true },
            { feature: "Edge Alignment", cardwell: "Hydraulic/Electronic", market: "Manual", advantage: true },
            { feature: "Tension Control", cardwell: "Variable Frequency Drive", market: "Basic Clutch", advantage: true },
        ]
    },
    {
        id: "tubular-open-width-inspection",
        name: "Tubular / Open Width Fabric Inspection Machine",
        category: "Fabric Inspection",
        image: "/img/speed-frame.png",
        video: "/videos/demo.mp4",
        description: "Multi-functional machine capable of inspecting both tubular and open width fabrics efficiently.",
        highlights: ["Dual Mode Operation", "Versatile Usage", "Compact Design"],
        specs: [{ label: "Modes", value: "Tubular & Open Width" }, { label: "Speed", value: "0-50 m/min" }],
        features: [{ title: "Versatility", description: "Switch between modes effortlessly.", icon: "Activity" }],
        comparison: [{ feature: "Flexibility", cardwell: "High", market: "Low", advantage: true }]
    },
    {
        id: "tubular-fabric-inspection-machine",
        name: "Tubular Fabric Both Sides Inspection Machine",
        category: "Fabric Inspection",
        image: "/img/comber.png",
        video: "/videos/demo.mp4",
        description: "Specialized machine for inspecting both sides of tubular fabric simultaneously using mirrors.",
        highlights: ["360 Degree View", "Mirror System", "Defect Detection"],
        specs: [{ label: "Inspection Type", value: "Both Sides" }, { label: "Lighting", value: "Internal LED" }],
        features: [{ title: "Dual Sided", description: "Inspect front and back in one pass.", icon: "Eye" }],
        comparison: [{ feature: "Efficiency", cardwell: "Double", market: "Single Side", advantage: true }]
    },
    {
        id: "multipurpose-fabric-inspection",
        name: "Multipurpose Fabric Inspection Machine",
        category: "Fabric Inspection",
        image: "/img/speed-frame.png",
        video: "/videos/demo.mp4",
        description: "Universal inspection machine suitable for various fabric types including knits, wovens, and denim.",
        highlights: ["Universal Application", "Heavy Duty", "Precise Control"],
        specs: [{ label: "Fabric Types", value: "All" }, { label: "Load Capacity", value: "Heavy" }],
        features: [{ title: "Adaptability", description: "Handles diverse materials with ease.", icon: "ShieldCheck" }],
        comparison: [{ feature: "Versatility", cardwell: "All-in-One", market: "Specific", advantage: true }]
    },
    {
        id: "preparatory-machine-inspection",
        name: "Preparatory Machine with Inspection",
        category: "Fabric Preparation",
        image: "/img/apron-doffing.png",
        video: "/videos/demo.mp4",
        description: "Combines preparatory processes like batching or detwisting with an inspection stage.",
        highlights: ["Process Integration", "Space Saving", "Efficiency"],
        specs: [{ label: "Function", value: "Prep + Inspect" }, { label: "Footprint", value: "Compact" }],
        features: [{ title: "Integration", description: "Streamlines workflow by combining steps.", icon: "Activity" }],
        comparison: [{ feature: "Workflow", cardwell: "Integrated", market: "Separate Steps", advantage: true }]
    },
    {
        id: "fabric-relaxation-machine",
        name: "Fabric Relaxation Machine",
        category: "Fabric Finishing",
        image: "/img/comber.png",
        video: "/videos/demo.mp4",
        description: "Essential for relaxing knitted fabrics to prevent shrinkage and distortion before cutting.",
        highlights: ["Tensionless Feed", "Relaxation Conveyor", "Shrinkage Control"],
        specs: [{ label: "Relaxation", value: "Active Vibrator" }, { label: "Belt", value: "Teflon Coated" }],
        features: [{ title: "Quality", description: "Ensures dimensional stability of fabric.", icon: "ShieldCheck" }],
        comparison: [{ feature: "Relaxation", cardwell: "Active", market: "Passive", advantage: true }]
    },
    {
        id: "movable-batching-system",
        name: "Movable Batching System",
        category: "Fabric Batching",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        description: "Portable A-frame batching system for continuous processing lines.",
        highlights: ["Mobility", "Continuous Batching", "Easy Doffing"],
        specs: [{ label: "Capacity", value: "2000kg" }, { label: "Mobility", value: "Castor Wheels" }],
        features: [{ title: "Portability", description: "Move batches easily between machines.", icon: "Activity" }],
        comparison: [{ feature: "Mobility", cardwell: "Easy", market: "Fixed", advantage: true }]
    },
    {
        id: "fabric-winding-machine",
        name: "Fabric Winding Machine",
        category: "Fabric Winding",
        image: "/img/speed-frame.png",
        video: "/videos/demo.mp4",
        description: "Precision winding machine for creating compact and neat fabric rolls.",
        highlights: ["Edge Control", "Tension Control", "Perfect Rolls"],
        specs: [{ label: "Winding Type", value: "Surface/Center" }, { label: "Diameter", value: "Up to 1000mm" }],
        features: [{ title: "Precision", description: "Creating perfectly aligned rolls.", icon: "Minimize" }],
        comparison: [{ feature: "Edge Accuracy", cardwell: "<2mm", market: ">5mm", advantage: true }]
    },
    {
        id: "automatic-roll-packing-machine",
        name: "PLC Controlled Automatic Roll Packing Machine",
        category: "Packaging",
        image: "/img/apron-doffing.png",
        video: "/videos/demo.mp4",
        description: "Fully automated roll packing solution driven by PLC for high throughput.",
        highlights: ["PLC Control", "Automatic Sealing", "Labor Saving"],
        specs: [{ label: "Throughput", value: "60-80 rolls/hr" }, { label: "Control", value: "Siemens/Omron PLC" }],
        features: [{ title: "Automation", description: "Reduces manual labor significantly.", icon: "Activity" }],
        comparison: [{ feature: "Automation", cardwell: "Full", market: "Semi", advantage: true }]
    },
    {
        id: "woven-fabric-inspection",
        name: "Woven Fabric Inspection Machine",
        category: "Fabric Inspection",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        description: "Robust inspection machine specifically designed for woven fabrics.",
        highlights: ["Backlight", "Defect Mapping", "Fabric Handling"],
        specs: [{ label: "Application", value: "Woven" }, { label: "Speed", value: "0-60 m/min" }],
        features: [{ title: "Clarity", description: "Optimized lighting for weave defects.", icon: "Eye" }],
        comparison: [{ feature: "Handling", cardwell: "Gentle", market: "Standard", advantage: true }]
    },
    {
        id: "coated-fabric-inspection",
        name: "Coated Fabric Inspection Machine",
        category: "Fabric Inspection",
        image: "/img/speed-frame.png",
        video: "/videos/demo.mp4",
        description: "Designed for technical textiles and coated fabrics.",
        highlights: ["Surface Inspection", "Thickness Check", "Heavy Duty"],
        specs: [{ label: "Material", value: "Coated/Technical" }, { label: "Roll Weight", value: "Heavy" }],
        features: [{ title: "Robustness", description: "Handles heavy industrial rolls.", icon: "ShieldCheck" }],
        comparison: [{ feature: "Capacity", cardwell: "Heavy", market: "Medium", advantage: true }]
    },
    {
        id: "non-woven-inspection",
        name: "Non-Woven Fabric Inspection Machine",
        category: "Fabric Inspection",
        image: "/img/comber.png",
        video: "/videos/demo.mp4",
        description: "Specialized for non-woven fabrics handling delicate materials.",
        highlights: ["Tension Sensitive", "Static Control", "Clean inspection"],
        specs: [{ label: "Fabric", value: "Non-Woven" }, { label: "Tension", value: "Ultra Low" }],
        features: [{ title: "Delicate Handling", description: "Prevents stretching of non-wovens.", icon: "Activity" }],
        comparison: [{ feature: "Tension", cardwell: "Ultra Low", market: "Standard", advantage: true }]
    },
    {
        id: "coated-fabric-edge-cutter",
        name: "Coated Fabric Edge Cutter",
        category: "Fabric Cutting",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        description: "Machine for trimming edges of coated fabrics with precision.",
        highlights: ["Clean Cut", "Waste Removal", "Safety"],
        specs: [{ label: "Cutting Type", value: "Crush/Shear" }, { label: "Speed", value: "Variable" }],
        features: [{ title: "Precision", description: "Ensures straight edges.", icon: "Minimize" }],
        comparison: [{ feature: "Waste", cardwell: "Minimal", market: "Standard", advantage: true }]
    },
    {
        id: "brushing-unit",
        name: "Brushing Unit for Cleaning Both Sides",
        category: "Fabric Cleaning",
        image: "/img/speed-frame.png",
        video: "/videos/demo.mp4",
        description: "Removes loose fibers and dust from both sides of the fabric.",
        highlights: ["Double Sided", "Dust Collection", "Deep Cleaning"],
        specs: [{ label: "Brushes", value: "Nylon/Horse Hair" }, { label: "Suction", value: "High Power" }],
        features: [{ title: "Cleanliness", description: "Improves fabric quality before processing.", icon: "ShieldCheck" }],
        comparison: [{ feature: "Dust Removal", cardwell: ">95%", market: "~80%", advantage: true }]
    },
    {
        id: "fabric-roll-lifter",
        name: "Fabric Roll Lifter",
        category: "Material Handling",
        image: "/img/apron-doffing.png",
        video: "/videos/demo.mp4",
        description: "Hydraulic or electric lifter to handle heavy fabric rolls safely.",
        highlights: ["Safety", "Ergonomic", "Easy Operation"],
        specs: [{ label: "Lift Cap", value: "500-1000kg" }, { label: "Power", value: "Hydraulic/Battery" }],
        features: [{ title: "Safety", description: "Prevents workplace injuries.", icon: "ShieldCheck" }],
        comparison: [{ feature: "Ergonomics", cardwell: "High", market: "Low", advantage: true }]
    },
    {
        id: "fabric-meter-folding",
        name: "Fabric Meter Folding Machine",
        category: "Fabric Folding",
        image: "/img/comber.png",
        video: "/videos/demo.mp4",
        description: "Folds fabric into meter lengths for retail or packing.",
        highlights: ["Accurate folding", "Speed", "Counter"],
        specs: [{ label: "Fold Length", value: "1 meter" }, { label: "Speed", value: "Manual/Auto" }],
        features: [{ title: "Accuracy", description: "Standardized fold lengths.", icon: "Hash" }],
        comparison: [{ feature: "Accuracy", cardwell: "High", market: "Medium", advantage: true }]
    },
    {
        id: "fabric-pallet-folding",
        name: "Fabric Pallet Folding Machine",
        category: "Fabric Folding",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        description: "Large scale folding machine for palletizing fabrics.",
        highlights: ["Heavy Duty", "Pallet Output", "High production"],
        specs: [{ label: "Pallet Size", value: "Standard" }, { label: "Stack Height", value: "Max 2m" }],
        features: [{ title: "Efficiency", description: "Prepares fabric directly for shipping.", icon: "Activity" }],
        comparison: [{ feature: "Throughput", cardwell: "High", market: "Medium", advantage: true }]
    },
    {
        id: "apron-doffing-device",
        name: "Apron-Doffing Device",
        category: "Spinning Accessory",
        image: "/img/apron-doffing.png",
        video: "/videos/demo.mp4",
        description: "Automated apron-doffing device designed to increase efficiency and reduce manual labor in ring frames.",
        highlights: ["Automated Doffing", "Labor Saving", "Compact Design"],
        specs: [{ label: "Compatibility", value: "Ring Frames" }, { label: "Operation", value: "Pneumatic/Manual" }],
        features: [{ title: "Efficiency", description: "Reduces doffing time drastically.", icon: "Activity" }],
        comparison: [{ feature: "Speed", cardwell: "High", market: "Low", advantage: true }]
    },
    {
        id: "carding-solutions",
        name: "Carding Solutions",
        category: "Spinning Accessory",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        description: "Precision engineered components to enhance carding machine performance and sliver quality.",
        highlights: ["Improved Sliver", "Durability", "Precision Fit"],
        specs: [{ label: "Material", value: "High Grade Steel" }, { label: "Type", value: "Flats/Cylinders" }],
        features: [{ title: "Quality", description: "Ensures uniform sliver production.", icon: "ShieldCheck" }],
        comparison: [{ feature: "Life Span", cardwell: "Long", market: "Standard", advantage: true }]
    },
    {
        id: "comber-accessories",
        name: "Comber Accessories",
        category: "Spinning Accessory",
        image: "/img/comber.png",
        video: "/videos/demo.mp4",
        description: "High-performance parts for combers to ensure optimal removal of short fibers.",
        highlights: ["Nip Uniformity", "Less Noil", "High Speed"],
        specs: [{ label: "Application", value: "Comber" }, { label: "Finish", value: "Mirror Polish" }],
        features: [{ title: "Precision", description: "Critical for yarn strength.", icon: "Minimize" }],
        comparison: [{ feature: "Noil Saving", cardwell: "High", market: "Medium", advantage: true }]
    },
    {
        id: "simplex-frame-parts",
        name: "Simplex Frame Parts",
        category: "Spinning Accessory",
        image: "/img/speed-frame.png",
        video: "https://cdn.coverr.co/videos/coverr-industrial-machine-working-5536/1080p.mp4",
        description: "Robust spares for speed frames ensuring consistent roving tension and quality.",
        highlights: ["Vibration Free", "Consistent Tension", "Easy Fit"],
        specs: [{ label: "Machine", value: "Speed Frame" }, { label: "Material", value: "Alloy" }],
        features: [{ title: "Stability", description: "Reduces roving breaks.", icon: "Activity" }],
        comparison: [{ feature: "Breakage", cardwell: "Low", market: "High", advantage: true }]
    },
    {
        id: "ring-frame-components",
        name: "Ring Frame Components",
        category: "Spinning Accessory",
        image: "/img/apron-doffing.png",
        video: "https://cdn.coverr.co/videos/coverr-manufacturing-plant-5347/1080p.mp4",
        description: "Essential components for ring spinning frames to maintain high yarn quality and speed.",
        highlights: ["High Speed", "Yarn Quality", "Low Wear"],
        specs: [{ label: "Type", value: "Rings/Travelers" }, { label: "Speed", value: "High RPM" }],
        features: [{ title: "performance", description: "Supports high-speed spinning.", icon: "Activity" }],
        comparison: [{ feature: "Wear Rate", cardwell: "Low", market: "High", advantage: true }]
    }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
