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
            { label: "Fabric Type", value: "Tubular knitted fabrics (post bio-wash)" },
            { label: "Function", value: "Fabric reversing" },
            { label: "Control System", value: "PLC controlled" },
            { label: "Operation", value: "Continuous reversing process" },
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
    }, {
        id: "tubular-fabric-bio-wash-reversing-machine",
        name: "Tubular Knitted Fabric Reversing Machine",
        category: "Fabric Processing",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        tagline: "Low-Tension Reversing | PLC Controlled | Process-Ready Handling",
        description: "The Tubular Knitted Fabric Reversing Machine is designed to reverse tubular knitted fabrics smoothly and safely, ensuring correct fabric orientation for downstream processes. The machine delivers stable, low-tension fabric flow, comparable to industry-standard machines from Suntech Machine.",
        introBullets: [
            "Ensures correct tubular fabric orientation",
            "Prevents twisting, stretching, and fabric damage",
            "Improves efficiency of inspection and finishing processes",
            "Reduces manual handling and rework"
        ],
        highlights: ["Low-Tension", "PLC Controlled", "Continuous Process", "Process-Ready"],
        specs: [
            { label: "Fabric Type", value: "Tubular knitted fabrics" },
            { label: "Machine Function", value: "Fabric reversing" },
            { label: "Control System", value: "PLC controlled" },
            { label: "Drive System", value: "Motor / servo assisted" },
            { label: "Fabric Handling", value: "Low tension" },
            { label: "Operation Mode", value: "Continuous" },
            { label: "Integration", value: "Inspection & finishing lines" },
        ],
        features: [
            { title: "Smooth Reversing", description: "Smooth tubular fabric reversing mechanism.", icon: "RefreshCw" },
            { title: "PLC Control", description: "PLC controlled operation for reliability.", icon: "Cpu" },
            { title: "Low Tension", description: "Low-tension fabric handling to prevent distortion.", icon: "Activity" },
            { title: "Stable Flow", description: "Uniform and stable fabric flow.", icon: "Wind" },
            { title: "Construction", description: "Heavy-duty industrial construction.", icon: "Shield" },
        ],
        advancedFeatures: [
            {
                title: "Advanced Capabilities",
                description: "Features for continuous production environments.",
                items: [
                    "Adjustable fabric diameter handling",
                    "Controlled reversing speed",
                    "Integration with compaction, bio-wash, and finishing lines",
                    "Designed for continuous production environments"
                ]
            }
        ],
        whyChooseUs: [
            "Machines engineered for knitted fabric behavior",
            "Reliable performance under shop-floor conditions",
            "Easy integration with existing production lines",
            "Strong local service and technical support"
        ],
        cardwellDifference: [
            { advantage: "Fabric-safe design", benefit: "No distortion or damage" },
            { advantage: "PLC controlled system", benefit: "Consistent and repeatable operation" },
            { advantage: "Robust build quality", benefit: "Long service life" },
            { advantage: "Cost-effective solution", benefit: "Value alternative to imports" }
        ],
        roi: {
            benefits: ["Reduced fabric damage", "Improved downstream efficiency", "Lower labor dependency"],
            highlights: ["Faster production flow", "Reduced reprocessing losses"],
            period: "10–16 months (depending on usage)"
        },
        industries: [
            "Knitting units",
            "Dyeing and finishing plants",
            "Bio-wash units",
            "Garment manufacturing units"
        ],
        comparison: [
            { feature: "Fabric Safety", cardwell: "High", market: "Medium", advantage: true },
            { feature: "Tension Control", cardwell: "Optimized", market: "Variable", advantage: true },
            { feature: "Integration", cardwell: "Easy", market: "Complex", advantage: true },
        ]
    },
    {
        id: "open-width-inspection-machine",
        name: "Open Width Fabric Inspection Machine",
        category: "Fabric Inspection",
        image: "/img/speed-frame.png",
        video: "/videos/demo.mp4",
        description: "The industry standard for final quality control of woven and high-value knitted fabrics. Designed with ‘Zero-Tension’ logic to handle delicate fabrics like Lycra, Viscose, and Modal without stretching. Includes data logging capabilities for ERP integration.",
        highlights: ["Relaxed Fabric Feed", "ERP Data Integration", "Edge-to-Edge Alignment", "Full Width Illumination"],
        specs: [
            { label: "Roller Width", value: "72 to 96 inches" },
            { label: "Inspection Speed", value: "0-60 m/min (Inverter Drive)" },
            { label: "Lighting", value: "Top & Bottom (Variable Lux)" },
            { label: "Edge Control", value: "Hydraulic / Electronic Sensor" },
            { label: "Counter Accuracy", value: "+/- 0.1%" },
        ],
        features: [
            { title: "Defect Mapping", description: "Operators can tag defects digitally, generating a roll map for cutting optimization.", icon: "Map" },
            { title: "Tensionless Loop", description: "Input J-Scray accumulator ensures fabric is inspecting in a completely relaxed state.", icon: "Minimize" },
            { title: "Visual Clarity", description: "High-CRI LED lighting ensures accurate color matching and defect visibility.", icon: "Eye" },
            { title: "Perfect Rolling", description: "Automatic edge guiding system ensures perfectly straight cylindrical rolls for shipping.", icon: "Box" },
        ],
        comparison: [
            { feature: "Lycra Handling", cardwell: "Distortion Free", market: "Stretches/Bows", advantage: true },
            { feature: "Defect Recording", cardwell: "Digital/Software", market: "Manual Paper", advantage: true },
            { feature: "Edge Alignment", cardwell: "+/- 2mm", market: "+/- 10mm", advantage: true },
            { feature: "Lighting lifespan", cardwell: "50,000 Hrs (LED)", market: "5,000 Hrs (Tube)", advantage: true },
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
        tagline: "Precision Inspection. Modular Automation. Higher Fabric Quality.",
        description: "Our Woven Fabric Inspection Machine (Roll-to-Roll) is engineered to deliver accurate defect detection, smooth fabric handling, and scalable automation for modern textile units. Designed with modular optional systems, this machine allows manufacturers to start lean and scale seamlessly as production grows.",
        introBullets: [
            "Ensures consistent fabric quality through roll-to-roll inspection",
            "Reduces rejections, rework, and downstream losses",
            "Modular design supports automation upgrades without replacing the base machine",
            "Suitable for small units to large-scale processing plants"
        ],
        highlights: ["Precision Inspection", "Modular Automation", "Scalable Design", "Industry 4.0 Ready"],
        specs: [
            { label: "Inspection Type", value: "Roll-to-Roll" },
            { label: "Fabric Type", value: "Woven fabrics" },
            { label: "Operation Mode", value: "Manual / Semi-Automatic / Automatic (Model based)" },
            { label: "Roll Handling", value: "Forward & reverse inspection" },
            { label: "Power Supply", value: "Industrial standard" },
            { label: "Upgrade Capability", value: "Fully modular" },
            { label: "Optional Automation", value: "Yes" },
        ],
        variants: [
            { model: "ECO Model", description: "Cost-effective inspection solution for basic quality control" },
            { model: "Standard Model", description: "Balanced performance with enhanced operational flexibility" },
            { model: "Auto Draft Model", description: "Advanced inspection with higher automation & productivity" },
        ],
        features: [
            { title: "Inspection System", description: "Roll-to-roll fabric inspection system.", icon: "Eye" },
            { title: "Tension Control", description: "Smooth fabric tension control.", icon: "Activity" },
            { title: "Lighting", description: "Uniform inspection lighting.", icon: "Sun" },
            { title: "Ergonomics", description: "Operator-friendly control layout.", icon: "User" },
            { title: "Durability", description: "Heavy-duty frame for continuous operation.", icon: "Shield" },
            { title: "Alignment", description: "Accurate roll alignment & rewinding.", icon: "Minimize" },
        ],
        advancedFeatures: [
            {
                title: "Fabric Cleaning & Brushing System",
                description: "Improves inspection accuracy by removing lint and dust.",
                items: ["Integrated brushing unit", "Dust collection system with 3 HP filter box"]
            },
            {
                title: "Automatic Fabric Roll Handling",
                description: "Seamless material movement.",
                items: ["Roll transport conveyors", "Lifting-type conveyor options (per meter)", "Automatic roll transfer between stations"]
            },
            {
                title: "Auto Feed & Unwinding System",
                description: "Reduces manual handling & labor dependency.",
                items: ["Reserve roll table", "Auto lifting mechanism", "Power unwinder cradle"]
            },
            {
                title: "Weighing & Data Management",
                description: "Industry 4.0 ready data transfer.",
                items: ["Fabric roll weighing cradle", "Digital display control unit", "Roll weight storage", "Data transfer via Ethernet cable"]
            },
            {
                title: "Stretch Film Wrapping Unit",
                description: "Professional packing finish.",
                items: ["Automatic fabric roll wrapping", "Ensures safe handling & transport"]
            }
        ],
        whyChooseUs: [
            "Decades of textile machinery engineering expertise",
            "Machines designed for Indian & global production conditions",
            "Transparent pricing & modular configuration",
            "Faster service response and technical support",
            "Custom-built solutions based on customer workflow"
        ],
        cardwellDifference: [
            { advantage: "Modular machine design", benefit: "Lower initial investment" },
            { advantage: "Optional automation", benefit: "Pay only for what you need" },
            { advantage: "Industry 4.0 ready options", benefit: "Digital traceability" },
            { advantage: "Robust build quality", benefit: "Long machine life" },
            { advantage: "Local support", benefit: "Reduced downtime" }
        ],
        roi: {
            benefits: ["Lower fabric rejection rates", "Reduced labor costs", "Improved packing & handling efficiency", "Scalable automation without replacing machinery"],
            highlights: ["Faster payback through quality improvement", "Reduced wastage & rework", "Higher throughput with automation", "Long-term operational savings"],
            period: "12–24 months (based on production volume & selected options)"
        },
        industries: [
            "Textile Mills",
            "Fabric Processing Units",
            "Garment Manufacturers",
            "Export-oriented Fabric Units"
        ],
        comparison: [
            { feature: "Rejection Rate", cardwell: "Minimal (<1%)", market: "Standard (3-5%)", advantage: true },
            { feature: "ROI Period", cardwell: "12-24 Months", market: "36+ Months", advantage: true },
            { feature: "Labor Efficiency", cardwell: "High (Auto Feed)", market: "Low (Manual)", advantage: true },
            { feature: "Cleanliness", cardwell: "Active Dust Removal", market: "None", advantage: true },
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
            { label: "Fabric Type", value: "Woven fabrics" },
            { label: "Folding Type", value: "Meter / Yard length folding" },
            { label: "Measurement System", value: "Encoder / digital length measurement" },
            { label: "Drive System", value: "Motor driven" },
            { label: "Control System", value: "PLC controlled" },
            { label: "Operation", value: "Continuous folding" },
            { label: "Fabric Handling", value: "Low tension, damage-free" },
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
        name: "Pallet Folding Machine (Servo Driven | PLC Controlled)",
        category: "Fabric Folding",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        tagline: "Servo Driven | PLC Controlled | Export-Ready Folding",
        description: "The Pallet Folding Machine is engineered for high-precision folding of woven fabrics into uniform pallets. With multiple variants, this machine allows textile manufacturers to select the right level of automation based on production volume, quality requirement, and investment plan.",
        introBullets: [
            "Produces uniform, export-quality fabric pallets",
            "Reduces manual folding and labor dependency",
            "Ensures consistent fabric presentation",
            "Improves packing efficiency and storage handling"
        ],
        highlights: ["Servo Driven", "PLC Controlled", "High Precision", "Export Quality"],
        specs: [
            { label: "Fabric Type", value: "Woven fabrics" },
            { label: "Folding Type", value: "Pallet folding" },
            { label: "Control System", value: "PLC controlled" },
            { label: "Drive System", value: "Servo driven (variant-based)" },
            { label: "Pallet Size", value: "Fixed / Adjustable (variant-based)" },
            { label: "Operating Mode", value: "Semi / Fully automatic" },
            { label: "Upgrade Capability", value: "Yes" },
        ],
        variants: [
            {
                model: "Standard Model",
                description: "Best suited for: Small to mid-scale production",
                items: ["PLC controlled operation", "Semi-automatic pallet folding", "Fixed pallet size", "Reliable and cost-effective solution"]
            },
            {
                model: "Servo Model",
                description: "Best suited for: High-accuracy folding requirements",
                items: ["Servo-driven folding system", "PLC with touch panel control", "Adjustable pallet dimensions", "Higher folding precision and speed"]
            },
            {
                model: "High-Speed Servo Model",
                description: "Best suited for: Large-scale & export-oriented units",
                items: ["Multiple servo drives", "High-speed synchronized folding", "Automatic pallet positioning", "Continuous, high-output operation"]
            }
        ],
        features: [
            { title: "Precision Folding", description: "Servo & PLC controlled precision folding.", icon: "Minimize" },
            { title: "Fabric Handling", description: "Smooth fabric handling without distortion.", icon: "Activity" },
            { title: "Consistency", description: "Consistent pallet formation.", icon: "Layers" },
            { title: "Structure", description: "Heavy-duty mechanical structure.", icon: "Shield" },
            { title: "Usage", description: "Operator-friendly interface.", icon: "User" },
        ],
        advancedFeatures: [
            {
                title: "Advanced & Optional Features",
                description: "Enhance your line with these capabilities.",
                items: [
                    "Edge alignment system",
                    "Automatic pallet loading & unloading",
                    "Production counter & monitoring",
                    "Integration with inspection & packing lines",
                    "Safety interlocks and emergency stop systems"
                ]
            }
        ],
        whyChooseUs: [
            "Proven expertise in textile machinery solutions",
            "Machines designed for continuous industrial use",
            "Custom configurations based on customer workflow",
            "Reliable after-sales support"
        ],
        cardwellDifference: [
            { advantage: "Multiple machine variants", benefit: "Right investment for every scale" },
            { advantage: "Servo-driven precision", benefit: "Consistent folding accuracy" },
            { advantage: "Modular automation", benefit: "Easy future upgrades" },
            { advantage: "Robust build quality", benefit: "Long service life" }
        ],
        roi: {
            benefits: ["Reduced manpower cost", "Faster folding cycles", "Improved packing consistency", "Lower fabric handling losses"],
            highlights: ["Faster payback through labor savings", "Increased throughput for bulk orders", "Improved customer acceptance for export consignments"],
            period: "12–18 months (based on production volume)"
        },
        industries: [
            "Textile mills",
            "Fabric processing units",
            "Garment export houses",
            "Fabric warehousing & packing units"
        ],
        comparison: [
            { feature: "Folding Accuracy", cardwell: "High (Servo)", market: "Avg (Mechanical)", advantage: true },
            { feature: "Throughput", cardwell: "High", market: "Medium", advantage: true },
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
