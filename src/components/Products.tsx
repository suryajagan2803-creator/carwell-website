import Image from 'next/image';

export default function Products() {
    const fabricMachines = [
        { name: "Tubular Fabric Reversing Machine", category: "Fabric Processing", image: "/img/draw-frame.png" },
        { name: "S.S. Reversing Machine", category: "Fabric Processing", image: "/img/speed-frame.png" },
        { name: "Open Width Inspection Machine", category: "Fabric Inspection", image: "/img/comber.png" },
        { name: "Fabric Relaxation Machine", category: "Fabric Processing", image: "/img/draw-frame.png" },
        { name: "Fabric Winding Machine", category: "Winding System", image: "/img/speed-frame.png" },
        { name: "Automatic Roll Packing Machine", category: "Packaging", image: "/img/apron-doffing.png" },
        { name: "Movable Batching System", category: "Batching", image: "/img/comber.png" },
        { name: "Fabric Roll Lifter", category: "Material Handling", image: "/img/draw-frame.png" },
    ];

    const spinningAccessories = [
        { name: "Apron-Doffing Device", category: "Spinning Accessory", image: "/img/apron-doffing.png" },
        { name: "Carding Solutions", category: "Carding", image: "/img/draw-frame.png" },
        { name: "Comber Accessories", category: "Comber", image: "/img/comber.png" },
        { name: "Simplex Frame Parts", category: "Speed Frame", image: "/img/speed-frame.png" },
        { name: "Ring Frame Components", category: "Ring Frame", image: "/img/apron-doffing.png" },
    ];

    return (
        <section id="products" className="py-24 bg-[#121C22] text-white relative overflow-hidden bg-grid-pattern-dark">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* Fabric Processing Machines Section */}
                <div id="products-fabric" className="mb-24">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-wider block mb-2">Our Products</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white">FABRIC PROCESSING MACHINES</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {fabricMachines.map((product, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative h-64 bg-gray-800 rounded-lg overflow-hidden mb-6 border border-white/5 group-hover:border-primary/50 transition-colors">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                                    {/* Horizontal Line on Hover */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />
                                </div>
                                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors leading-tight">{product.name}</h3>
                                <p className="text-gray-400 text-xs uppercase tracking-wider">{product.category}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Spinning Accessories Section */}
                <div id="products-spinning">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-wider block mb-2">High Precision</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white">SPINNING ACCESSORIES</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {spinningAccessories.map((product, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative h-64 bg-gray-800 rounded-lg overflow-hidden mb-6 border border-white/5 group-hover:border-primary/50 transition-colors">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                                    {/* Horizontal Line on Hover */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20" />
                                </div>
                                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors leading-tight">{product.name}</h3>
                                <p className="text-gray-400 text-xs uppercase tracking-wider">{product.category}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
