'use client';

import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        text: "Cardwell's reversing machine transformed our bio-wash line. We've seen a 40% reduction in fabric wastage and significant labor savings.",
        author: "Mr. Rajendran",
        position: "Managing Director",
        company: "Apex Knits, Tirupur",
        image: "/img/draw-frame.png" // Placeholder
    },
    {
        id: 2,
        text: "The precision of their open-width inspection system is unmatched. It has helped us maintain our zero-defect export policy consistently for 3 years.",
        author: "Sarah Jenkins",
        position: "Production Head",
        company: "Global Tex Solutions, Vietnam",
        image: "/img/speed-frame.png" // Placeholder
    },
    {
        id: 3,
        text: "Robust machinery that just keeps running. Their after-sales support is prompt, but honestly, we rarely need to call them.",
        author: "Mr. Ahmed",
        position: "Plant Manager",
        company: "Nile Fabrics, Egypt",
        image: "/img/comber.png" // Placeholder
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <span className="text-emerald-700 font-bold text-xs tracking-widest uppercase mb-3 block">Client Success</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-slate-900 mb-6">
                        Words from our Customers
                    </h2>
                    <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-lg transition-shadow">

                            <Quote className="w-10 h-10 text-emerald-100 absolute top-6 left-6" />

                            <div className="relative z-10">
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                                    ))}
                                </div>

                                <p className="text-slate-600 font-medium italic text-lg leading-relaxed mb-8">
                                    "{item.text}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden relative">
                                        <Image
                                            src={item.image}
                                            alt={item.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                                        <div className="text-xs text-slate-500 font-medium">{item.position}</div>
                                        <div className="text-xs text-emerald-600 font-bold uppercase tracking-wide mt-0.5">{item.company}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
