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
    // New rich content fields
    tagline?: string;
    introBullets?: string[];
    variants?: { model: string; description: string; items?: string[] }[];
    advancedFeatures?: { title: string; subtitle?: string; description: string; items?: string[] }[];
    whyChooseUs?: string[];
    cardwellDifference?: { advantage: string; benefit: string }[];
    roi?: { benefits: string[]; highlights: string[]; period: string };
    industries?: string[];
};

export const products: Product[] = [
    // FABRIC PROCESSING PRODUCTS (Sample of the 18)
    {
        id: "tubular-bio-wash-reversing",
        name: "Tubular Knitted Fabric Bio-Wash Reversing Machine",
        category: "Fabric Processing",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        tagline: "Bio-Wash Compatible | Low-Tension Handling | PLC Controlled",
        description: "The Tubular Knitted Fabric Bio-Wash Reversing Machine is designed to reverse tubular knitted fabrics after bio-wash processing, ensuring correct fabric orientation with minimum tension and no distortion. The machine is engineered to deliver industry-standard reversing performance, comparable to machines offered by Suntech Machine, while being optimized for wet and treated fabric conditions.",
        introBullets: [
            "Designed specifically for bio-washed / wet tubular fabrics",
            "Prevents fabric twisting, stretch, and surface damage",
            "Improves efficiency of inspection and finishing processes",
            "Reduces manual handling of treated fabrics"
        ],
        highlights: ["Bio-Wash Ready", "Low-Tension", "PLC Controlled", "Wet Process Safe"],
        specs: [
            { label: "Fabric type", value: "Tubular knitted (bio-washed / wet)" },
            { label: "Operation", value: "Post bio-wash fabric reversing" },
            { label: "Drive system", value: "Motor / Servo assisted" },
            { label: "Control system", value: "PLC controlled" },
            { label: "Fabric handling", value: "Low tension, wet-safe" },
            { label: "Power requirement", value: "Approx. 5–7 kW" },
            { label: "Machine weight", value: "Approx. 1600–2300 kg" },
        ],
        features: [
            { title: "Wet Fabric Handling", description: "Low-tension reversing suitable for wet fabrics.", icon: "Droplets" },
            { title: "PLC Control", description: "PLC controlled operation for stable performance.", icon: "Cpu" },
            { title: "Uniform Flow", description: "Smooth and uniform fabric flow.", icon: "Wind" },
            { title: "Robust Build", description: "Heavy-duty construction for finishing environments.", icon: "Shield" },
        ],
        advancedFeatures: [
            {
                title: "Comparison with Industry-Standard Machines",
                description: "Optimized for bio-wash compatibility.",
                items: [
                    "Corrosion-resistant design for wet processing",
                    "Fabric safety in wet conditions",
                    "Cost-effective alternative to imported machines"
                ]
            }
        ],
        whyChooseUs: [
            "Machines engineered for Indian dyeing & finishing conditions",
            "Focus on fabric protection after bio-wash",
            "Easy integration with existing finishing lines",
            "Faster service and local technical support"
        ],
        cardwellDifference: [
            { advantage: "Fabric-safe design", benefit: "No distortion or damage" },
            { advantage: "PLC controlled system", benefit: "Consistent and repeatable operation" },
            { advantage: "Robust build quality", benefit: "Long service life" },
            { advantage: "Cost-effective solution", benefit: "Value alternative to imports" }
        ],
        roi: {
            benefits: ["Reduced fabric damage after bio-wash", "Improved downstream process flow", "Lower reprocessing and handling losses"],
            highlights: ["Faster production flow", "Reduced reprocessing losses"],
            period: "10–18 months (based on production usage)"
        },
        industries: [
            "Dyeing & bio-wash plants",
            "Knitting units",
            "Fabric finishing units",
            "Garment manufacturing facilities"
        ],
        comparison: [
            { feature: "Wet Handling", cardwell: "Optimized", market: "Standard", advantage: true },
            { feature: "Corrosion Res.", cardwell: "High", market: "Medium", advantage: true },
            { feature: "Cost", cardwell: "Competitive", market: "High", advantage: true },
        ]
    },
    {
        id: "tubular-fabric-reversing-machine",
        name: "Tubular Knitted Fabric Reversing Machine",
        category: "Fabric Processing",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        tagline: "Damage-Free Reversing for Knitted Fabrics",
        description: "The Tubular Knitted Fabric Reversing Machine is designed to reverse tubular knitted fabrics smoothly, ensuring correct orientation without stretching or distortion.",
        introBullets: [
            "Prevents fabric twisting and damage",
            "Improves downstream processing efficiency",
            "Reduces manual fabric handling"
        ],
        highlights: ["Fabric Safe", "Low Tension", "PLC Controlled", "Fast Reversing"],
        specs: [
            { label: "Fabric type", value: "Tubular knitted fabrics" },
            { label: "Operation", value: "Fabric reversing" },
            { label: "Drive system", value: "Motor / Servo assisted" },
            { label: "Control system", value: "PLC controlled" },
            { label: "Fabric handling", value: "Low tension" },
            { label: "Operating speed", value: "Adjustable" },
            { label: "Power requirement", value: "Approx. 4–6 kW" },
            { label: "Machine weight", value: "Approx. 1400–2000 kg" },
        ],
        features: [
            { title: "Low-Tension Reversing", description: "Low-tension reversing mechanism.", icon: "Activity" },
            { title: "Stable Operation", description: "Stable and continuous operation.", icon: "Shield" },
            { title: "Uniform Flow", description: "Uniform fabric flow.", icon: "Wind" },
            { title: "Robust Build", description: "Robust mechanical construction.", icon: "Box" },
        ],
        advancedFeatures: [
            {
                title: "Advanced Capabilities",
                description: "Optimize your process.",
                items: [
                    "Adjustable fabric diameter support",
                    "Speed control for different fabric types",
                    "Integration with inspection and finishing lines"
                ]
            }
        ],
        whyChooseUs: [
            "Designed specifically for delicate knitted fabrics",
            "Reduces fabric waste from handling damage",
            "Simple, reliable operation",
            "Compact footprint available"
        ],
        cardwellDifference: [
            { advantage: "Low Tension", benefit: "No fabric shape distortion" },
            { advantage: "Efficiency", benefit: "Replaces manual turning completely" },
            { advantage: "Flexibility", benefit: "Handles various fabric diameters" },
            { advantage: "Value", benefit: "Rapid ROI through labor savings" }
        ],
        roi: {
            benefits: ["Eliminated manual labor for reversing", "Zero fabric damage", "Improved inspection speed"],
            highlights: ["Fast labor ROI", "Higher quality output"],
            period: "6–12 months"
        },
        industries: [
            "Knitting units",
            "Finishing and compaction lines"
        ],
        comparison: [
            { feature: "Fabric Safety", cardwell: "High", market: "Medium", advantage: true },
            { feature: "Throughput", cardwell: "Continuous", market: "Batch/Manual", advantage: true },
            { feature: "Tension", cardwell: "Low", market: "High", advantage: true },
        ]
    },
    {
        id: "open-width-inspection-machine",
        name: "Open Width Knitted Fabric Inspection Machine (Roll-to-Roll)",
        category: "Fabric Inspection",
        image: "/img/speed-frame.png",
        video: "/videos/demo.mp4",
        tagline: "Full-Surface Visibility for Quality Control",
        description: "The Open Width Knitted Fabric Inspection Machine allows full-surface inspection of knitted fabrics in open width form, helping identify defects clearly before cutting or finishing.",
        introBullets: [
            "Full open-width defect visibility",
            "Improved quality control",
            "Reduced downstream rejection"
        ],
        highlights: ["Full Visibility", "Open Width", "Quality Control", "Defect Detection"],
        specs: [
            { label: "Fabric type", value: "Knitted fabrics (open width)" },
            { label: "Inspection mode", value: "Roll-to-roll" },
            { label: "Working width", value: "As per fabric width" },
            { label: "Drive system", value: "Motor / Servo assisted" },
            { label: "Control system", value: "Operator / PLC" },
            { label: "Inspection speed", value: "Adjustable" },
            { label: "Power requirement", value: "Approx. 4–6 kW" },
            { label: "Machine weight", value: "Approx. 1300–2000 kg" },
        ],
        features: [
            { title: "Wide Lighting", description: "Wide inspection lighting for full coverage.", icon: "Sun" },
            { title: "Smooth Transport", description: "Smooth fabric transport without tension.", icon: "Wind" },
            { title: "Accurate Tracking", description: "Accurate length tracking.", icon: "Ruler" },
        ],
        advancedFeatures: [
            {
                title: "Advanced Capabilities",
                description: "Enhance inspection quality.",
                items: [
                    "Edge alignment system",
                    "Data logging and inspection records"
                ]
            }
        ],
        whyChooseUs: [
            "Absolute visibility of fabric defects",
            "Tension-free handling for sensitive knits",
            "Easy to operate control system",
            "Robust design for factory environments"
        ],
        cardwellDifference: [
            { advantage: "Lighting Quality", benefit: "No missed defects" },
            { advantage: "Fabric Handling", benefit: "No edge curling or stretching" },
            { advantage: "Data", benefit: "Traceable quality records" },
            { advantage: "Ergonomics", benefit: "Reduced operator fatigue" }
        ],
        roi: {
            benefits: ["Reduced garment rejection", " Higher quality fabric rating", "Reduced customer returns"],
            highlights: ["Quality assurance", "Brand reputation"],
            period: "12–16 months"
        },
        industries: [
            "Knitted fabric inspection",
            "Garment and processing units"
        ],
        comparison: [
            { feature: "Visibility", cardwell: "Full Width", market: "Restricted", advantage: true },
            { feature: "Tension", cardwell: "Zero", market: "Variable", advantage: true },
            { feature: "Lighting", cardwell: "High CRI", market: "Standard", advantage: true },
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
        description: "Critical post-processing machine for knitted fabrics. It mechanically agitates the fabric to release residual knitting tension, ensuring the final garment retains its shape after washing. A must-have for export-quality garment manufacturers.",
        highlights: ["Shrinkage Control <3%", "Vibration Conveyor", "Steam Chamber Option", "Continuous Process"],
        specs: [
            { label: "Working Width", value: "up to 96 inches" },
            { label: "Relaxation Method", value: "Vibrating Inclined Belt" },
            { label: "Throughput", value: "15 tonnes / day" },
            { label: "Steam Consumption", value: "150 kg/hr (Optional)" },
        ],
        features: [
            { title: "Dimensional Stability", description: "Reduces residual shrinkage significantly, preventing garments from warping.", icon: "Maximize" },
            { title: "Touch & Feel", description: "Enhances the hand-feel of the fabric, making it softer and loftier.", icon: "Feather" },
            { title: "Tensionless Plaiting", description: "Output fabric is plaited loosely to prevent re-introducing tension.", icon: "Layers" },
        ],
        comparison: [
            { feature: "Shrinkage Control", cardwell: "Guaranteed <3%", market: "Unpredictable", advantage: true },
            { feature: "Fabric Touch", cardwell: "Premium/Soft", market: "Standard", advantage: true },
            { feature: "Operation Cost", cardwell: "Low (efficient motors)", market: "High (High power)", advantage: true },
        ]
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
        name: "PLC Automatic Roll Packing Machine",
        category: "Packaging",
        image: "/img/apron-doffing.png",
        video: "/videos/demo.mp4",
        description: "A high-speed, fully automated solution for wrapping fabric rolls. Using Polythene (LDPE) film, it ensures rolls are dust-proof, moisture-proof, and ready for export. Integrated with weighing scales and barcode labeling for full traceability.",
        highlights: ["Siemens PLC Control", "Auto-Weighing & Labeling", "Film Saving Logic", "High Throughput"],
        specs: [
            { label: "Capacity", value: "60-90 rolls/hour" },
            { label: "Roll Diameter", value: "Max 500mm" },
            { label: "Film Material", value: "LDPE / PVC Stretch" },
            { label: "Air Consumption", value: "6 Bar Pressure" },
        ],
        features: [
            { title: "Material Saving", description: "Sensors measure roll diameter and cut film precisely, saving up to 20% plastic.", icon: "Leaf" },
            { title: "Side Sealing", description: "Perfect hermetic sealing on sides ensures complete weather protection.", icon: "Shield" },
            { title: "Data Connectivity", description: "Sends roll weight and ID directly to your ERP/Stock system.", icon: "Wifi" },
            { title: "Manpower Reduction", description: "Replaces 3-4 manual packers with a single machine.", icon: "Users" },
        ],
        comparison: [
            { feature: "Packing Consistency", cardwell: "100% Uniform", market: "Variable", advantage: true },
            { feature: "Plastic Usage", cardwell: "Optimized (Low)", market: "High Waste", advantage: true },
            { feature: "Labor Req.", cardwell: "1 Operator", market: "4 Operators", advantage: true },
        ]
    },
    {
        id: "woven-fabric-inspection",
        name: "Woven Fabric Inspection Machine (Roll-to-Roll)",
        category: "Fabric Inspection",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        tagline: "Precision Defect Detection & Roll-to-Roll Efficiency",
        description: "The Woven Fabric Inspection Machine (Roll-to-Roll) is designed to inspect woven fabrics for defects, length accuracy, and surface quality before further processing. It helps textile units improve quality control, reduce rejection, and maintain consistent fabric standards.",
        introBullets: [
            "Early defect identification",
            "Improved fabric quality assurance",
            "Reduced rework and wastage",
            "Suitable for continuous production environments"
        ],
        highlights: ["Defect Detection", "Roll-to-Roll", "Quality Assurance", "Continuous Process"],
        specs: [
            { label: "Fabric type", value: "Woven fabrics" },
            { label: "Inspection mode", value: "Roll-to-roll" },
            { label: "Working width", value: "As per customer requirement" },
            { label: "Drive system", value: "Motor / Servo (variant based)" },
            { label: "Control system", value: "Manual / PLC" },
            { label: "Inspection speed", value: "Adjustable" },
            { label: "Power requirement", value: "Approx. 3–6 kW" },
            { label: "Machine weight", value: "Approx. 1200–2000 kg" },
        ],
        features: [
            { title: "Smooth Movement", description: "Smooth roll-to-roll fabric movement.", icon: "Activity" },
            { title: "Uniform Lighting", description: "Uniform inspection lighting for defect visibility.", icon: "Sun" },
            { title: "Accurate Measurement", description: "Accurate fabric length measurement.", icon: "Ruler" },
            { title: "Stable Tension", description: "Stable tension control during inspection.", icon: "Minimize" },
            { title: "Industrial Build", description: "Heavy-duty industrial structure.", icon: "Shield" },
        ],
        advancedFeatures: [
            {
                title: "Advanced Capabilities",
                description: "Enhance your inspection line.",
                items: [
                    "Fabric cleaning & brushing unit with dust collection",
                    "3 HP filter box for lint removal",
                    "Auto roll transport conveyors",
                    "Reserve roll table with auto lifting",
                    "Power unwinder cradle",
                    "Fabric roll weighing cradle with digital display",
                    "Ethernet-based data transfer",
                    "Stretch film wrapping unit"
                ]
            }
        ],
        whyChooseUs: [
            "Decades of inspection machinery expertise",
            "Customizable working widths",
            "Robust design for 24/7 operation",
            "Seamless integration with ERP systems"
        ],
        cardwellDifference: [
            { advantage: "Heavy-duty Frame", benefit: "Vibration-free inspection at high speeds" },
            { advantage: "Modular Options", benefit: "Add features like brushing/weighing as needed" },
            { advantage: "Local Support", benefit: "Quick maintenance and spare parts" },
            { advantage: "Cost Efficiency", benefit: "Premium specs at competitive pricing" }
        ],
        roi: {
            benefits: ["Reduced material wastage", "Lower rejection rates downstream", "Improved customer satisfaction"],
            highlights: ["Payback in < 18 months", "Significant quality upgrade"],
            period: "12–18 months"
        },
        industries: [
            "Textile mills",
            "Fabric processing units",
            "Export-oriented fabric manufacturers"
        ],
        comparison: [
            { feature: "Defect Visibility", cardwell: "High CRI LED", market: "Standard Tube", advantage: true },
            { feature: "Tension Stability", cardwell: "Servo Control", market: "Manual Break", advantage: true },
            { feature: "Data Ready", cardwell: "Ethernet/IoT", market: "Offline", advantage: true },
        ]
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
        name: "Woven Fabric Folding Machine (Meter / Yard Type)",
        category: "Fabric Folding",
        image: "/img/comber.png",
        video: "/videos/demo.mp4",
        tagline: "Accurate Length Folding for Woven Fabrics",
        description: "The Woven Fabric Folding Machine (Meter / Yard Type) is designed for precise length-based folding of woven fabrics. Comparable to industry-standard woven folding machines offered by Suntech Machine, this machine ensures accurate measurement, uniform folding, and smooth fabric handling for packing and dispatch.",
        introBullets: [
            "Accurate meter / yard length measurement",
            "PLC controlled folding operation",
            "Uniform and repeatable fabric stacks",
            "Smooth fabric flow without edge distortion"
        ],
        highlights: ["Accurate Measurement", "PLC Controlled", "Uniform Folding", "Heavy Duty"],
        specs: [
            { label: "Fabric type", value: "Woven fabrics" },
            { label: "Folding mode", value: "Meter / Yard based" },
            { label: "Measurement system", value: "Encoder / digital measurement" },
            { label: "Control system", value: "PLC controlled" },
            { label: "Folding speed", value: "Adjustable" },
            { label: "Power requirement", value: "Approx. 3–5 kW" },
            { label: "Machine weight", value: "Approx. 1000–1600 kg" },
        ],
        features: [
            { title: "Accurate Measurement", description: "Accurate meter / yard length measurement.", icon: "Ruler" },
            { title: "PLC Control", description: "PLC controlled folding operation.", icon: "Cpu" },
            { title: "Uniform Stacks", description: "Uniform and repeatable fabric stacks.", icon: "Layers" },
            { title: "Smooth Flow", description: "Smooth fabric flow without edge distortion.", icon: "Wind" },
            { title: "Durability", description: "Heavy-duty frame for continuous industrial use.", icon: "Shield" },
        ],
        advancedFeatures: [
            {
                title: "Advanced Capabilities",
                description: "Benchmark-aligned performance.",
                items: [
                    "Adjustable folding length settings",
                    "Consistent stack alignment for packing",
                    "Production counter support",
                    "Integration-ready with inspection machines"
                ]
            }
        ],
        whyChooseUs: [
            "Precision folding comparable to global brands",
            "Designed for Indian production environments",
            "Simple operation and low maintenance",
            "Cost-effective alternative to imported machines"
        ],
        cardwellDifference: [
            { advantage: "Accurate Measurement", benefit: "Reduced giveaway and wastage" },
            { advantage: "Robust Build", benefit: "Designed for continuous industrial usage" },
            { advantage: "Simple Operation", benefit: "No specialized labor needed" },
            { advantage: "Import Alternative", benefit: "World-class quality at local price" }
        ],
        comparison: [
            { feature: "Accuracy", cardwell: "High (Encoder)", market: "Medium", advantage: true },
            { feature: "Maintenance", cardwell: "Low", market: "High", advantage: true },
            { feature: "Cost Effectiveness", cardwell: "High", market: "Medium", advantage: true },
        ]
    },
    {
        id: "fabric-pallet-folding",
        name: "Pallet Folding Machine",
        category: "Fabric Folding",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        tagline: "Automated Precision for Uniform Fabric Pallets",
        description: "The Pallet Folding Machine is used to fold woven fabrics into uniform pallets for easy handling, packing, and storage. The machine ensures consistent folding quality with minimal manual intervention.",
        introBullets: [
            "Uniform pallet formation",
            "Reduced manual folding effort",
            "Improved packing and logistics efficiency"
        ],
        highlights: ["Uniform Folding", "Servo-Driven", "Labor Saving", "Compact Design"],
        specs: [
            { label: "Fabric type", value: "Woven fabrics" },
            { label: "Folding type", value: "Pallet folding" },
            { label: "Drive system", value: "Servo driven" },
            { label: "Control system", value: "PLC controlled" },
            { label: "Pallet size", value: "As per requirement" },
            { label: "Folding speed", value: "Configurable" },
            { label: "Power requirement", value: "Approx. 4–7 kW" },
            { label: "Machine weight", value: "Approx. 1500–2200 kg" },
        ],
        features: [
            { title: "Servo Mechanism", description: "Servo-driven folding mechanism.", icon: "Activity" },
            { title: "PLC Operation", description: "PLC controlled operation for reliability.", icon: "Cpu" },
            { title: "Consistency", description: "Consistent and repeatable folding.", icon: "Layers" },
            { title: "Ease of Use", description: "Operator-friendly controls.", icon: "User" },
        ],
        advancedFeatures: [
            {
                title: "Advanced Capabilities",
                description: "Enhance your folding line.",
                items: [
                    "Adjustable pallet dimensions",
                    "Integration with inspection or packing lines",
                    "Production counter and monitoring"
                ]
            }
        ],
        whyChooseUs: [
            "Consistent folding quality reduces manual errors",
            "Significant labor cost reduction",
            "High-speed operation boosts throughput",
            "Robust design minimizes maintenance"
        ],
        cardwellDifference: [
            { advantage: "Servo Precision", benefit: "Perfectly aligned pallets every time" },
            { advantage: "Speed", benefit: "30-40% faster than manual folding" },
            { advantage: "Integration", benefit: "Seamlessly connects to packing lines" },
            { advantage: "Durability", benefit: "Low downtime and long life" }
        ],
        roi: {
            benefits: ["Reduced labor dependency", "Faster order dispatch", "Optimized warehouse space"],
            highlights: ["High labor separation", "Improved packing density"],
            period: "8–14 months"
        },
        industries: [
            "Fabric packing units",
            "Export houses",
            "Warehousing and logistics"
        ],
        comparison: [
            { feature: "Folding Uniformity", cardwell: "High (Servo)", market: "Variable (Manual)", advantage: true },
            { feature: "Speed", cardwell: "High", market: "Low", advantage: true },
            { feature: "Labor Req.", cardwell: "Minimal", market: "High", advantage: true },
        ]
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
