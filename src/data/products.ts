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
    variants?: { model: string; description: string }[];
    advancedFeatures?: { title: string; subtitle?: string; description: string; items?: string[] }[];
    whyChooseUs?: string[];
    cardwellDifference?: { advantage: string; benefit: string }[];
    roi?: { benefits: string[]; highlights: string[]; period: string };
    industries?: string[];
};

export const products: Product[] = [
    // FABRIC PROCESSING PRODUCTS (Sample of the 18)
    {
        id: "tubular-fabric-bio-wash-reversing-machine",
        name: "Tubular Fabric Reversing Machine (Bio-Wash)",
        category: "Fabric Processing",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        description: "Engineered specifically for the rigorous demands of bio-wash finishing units. This high-torque reversing machine effortlessly handles wet, heavy tubular fabrics without causing abrasion marks or elongation. Key for preparing fabrics for dyeing or compacting processes.",
        highlights: ["Handles Wet/Heavy Fabrics", "Optical Twist Detection", "Zero-Abrasion Design", "High Torque Gearbox"],
        specs: [
            { label: "Working Width", value: "36 to 48 inches" },
            { label: "Operating Speed", value: "Up to 80 m/min (Variable)" },
            { label: "Loading Capacity", value: "500kg per batch" },
            { label: "Power Consumption", value: "3.5 HP with VFD" },
            { label: "Construction", value: "SS 304 (Corrosion Resistant)" },
        ],
        features: [
            { title: "Smart Untwisting", description: "Dual optical sensors instantly detect twist direction and correct it pneumatically.", icon: "Scan" },
            { title: "Air-Cushion Loading", description: "Uses airflow to assist fabric loading, reducing friction and manual effort by 70%.", icon: "Wind" },
            { title: "Wet-Process Ready", description: "Sealed bearings and waterproof controls designed for high-humidity dye house environments.", icon: "Droplets" },
            { title: "Tension Control", description: "Synchronized feed system prevents fabric elongation during reversing.", icon: "Activity" },
        ],
        comparison: [
            { feature: "Wet Fabric Handling", cardwell: "Optimized (High Torque)", market: "Struggles/Slips", advantage: true },
            { feature: "Operator Fatigue", cardwell: "Low (Pneumatic Assist)", market: "High (Manual Pull)", advantage: true },
            { feature: "Throughput", cardwell: "1.5 Tonnes/Shift", market: "0.8 Tonnes/Shift", advantage: true },
            { feature: "Maintenance", cardwell: "Sealed/Lubed for Life", market: "Daily Greasing", advantage: true },
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
        name: "Pallet Folding Machine (Servo Driven | PLC Controlled)",
        category: "Fabric Folding",
        image: "/img/draw-frame.png",
        video: "/videos/demo.mp4",
        tagline: "High-Speed Fabric Folding. Precision Control. Export-Ready Output.",
        description: "The Pallet Folding Machine is designed for accurate, uniform, and high-speed folding of woven fabrics directly into pallets. Built with servo-driven motion and PLC control, this machine ensures consistent folding quality while significantly reducing manual handling and labor dependency.",
        introBullets: [
            "Produces perfectly aligned fabric pallets",
            "Suitable for export-oriented fabric units",
            "Reduces manpower and folding errors",
            "Ensures uniform fabric presentation & packing"
        ],
        highlights: ["Servo Driven", "PLC Controlled", "High Precision", "Export Quality"],
        specs: [
            { label: "Machine Type", value: "Pallet Folding Machine" },
            { label: "Fabric Type", value: "Woven fabric" },
            { label: "Folding Type", value: "Pallet folding" },
            { label: "Drive Mechanism", value: "Servo driven" },
            { label: "Control", value: "PLC control system" },
            { label: "Folding Accuracy", value: "High precision" },
            { label: "Production Mode", value: "Continuous" },
        ],
        features: [
            { title: "Precision Folding", description: "Servo-driven folding for precise fabric placement.", icon: "Minimize" },
            { title: "Reliability", description: "PLC-controlled operation for repeatability & reliability.", icon: "ShieldCheck" },
            { title: "Gentle Handling", description: "Smooth fabric movement without tension damage.", icon: "Activity" },
            { title: "Durability", description: "Heavy-duty structure for long working hours.", icon: "Shield" },
        ],
        advancedFeatures: [
            {
                title: "Advanced Capabilities",
                description: "High-speed synchronized folding cycles.",
                items: ["Uniform pallet height and alignment", "Reduced fabric edge distortion", "Ideal for integration with inspection & packing lines"]
            }
        ],
        whyChooseUs: [
            "Machines engineered for real shop-floor conditions",
            "Focus on reliability, accuracy, and serviceability",
            "Modular integration with upstream & downstream machines",
            "Transparent pricing and long-term support"
        ],
        cardwellDifference: [
            { advantage: "Servo + PLC technology", benefit: "Higher accuracy & control" },
            { advantage: "Robust mechanical design", benefit: "Long machine life" },
            { advantage: "Consistent pallet output", benefit: "Better packing & export quality" },
            { advantage: "Low maintenance design", benefit: "Reduced operating cost" }
        ],
        roi: {
            benefits: ["Faster pallet preparation", "Reduced manual folding labor", "Improved packing efficiency", "Lower fabric handling damage"],
            highlights: ["Faster turnaround time", "Reduced manpower cost", "Improved consistency for bulk orders"],
            period: "12–18 months (depending on volume)"
        },
        industries: [
            "Textile Mills",
            "Fabric Processing Units",
            "Export Fabric Manufacturers",
            "Warehousing & Packing Units"
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
