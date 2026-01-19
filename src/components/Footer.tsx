import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-950 pt-32 pb-10 border-t border-slate-800 relative text-slate-300 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-20">

                    {/* Brand Column (Span 4) */}
                    <div className="md:col-span-5 lg:col-span-4">
                        <Link href="/" className="block w-64 mb-8">
                            {/* Using a brightness filter to ensure logo pops on dark background if it's dark text, 
                               or assuming the png is suitable for dark. 
                               Adding a white glow/filter just in case. */}
                            <div className="relative bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                <img
                                    src="/cardwell-logo-new.png"
                                    alt="Cardwell Logo"
                                    className="w-full h-auto drop-shadow-2xl"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 mb-8 leading-relaxed font-medium text-lg max-w-sm">
                            Pioneering the future of textile automation with <span className="text-emerald-400 font-bold">intelligent engineering</span> solutions since 1984.
                        </p>
                        <div className="flex space-x-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-500 transition-all duration-300 group">
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns (Span 8) */}
                    <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 opacity-90">

                        {/* Column 1 */}
                        <div>
                            <h3 className="font-bold text-white mb-6 text-lg uppercase tracking-wider">Company</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/about" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors flex items-center gap-1 group">
                                        About Us
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">
                                        Our History
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">
                                        Contact Check
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h3 className="font-bold text-white mb-6 text-lg uppercase tracking-wider">Products</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/fabric-processing" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">
                                        Fabric Processing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/spinning-accessories" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">
                                        Spinning Accessories
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-slate-600 cursor-not-allowed">Acid Treatment (Coming Soon)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Contact Info */}
                        <div>
                            <h3 className="font-bold text-white mb-6 text-lg uppercase tracking-wider">Get in Touch</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <span className="text-slate-400 font-medium leading-relaxed">
                                        123 Industrial Estate,<br />Coimbatore, Tamil Nadu,<br />India.
                                    </span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <a href="mailto:info@cardwell.com" className="text-slate-400 font-medium hover:text-emerald-400 transition-colors">
                                        info@cardwell.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <a href="tel:+911234567890" className="text-slate-400 font-medium hover:text-emerald-400 transition-colors">
                                        +91 123 456 7890
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 font-medium text-sm">
                        &copy; {new Date().getFullYear()} Cardwell. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/" className="text-slate-600 hover:text-emerald-500 text-sm font-bold transition-colors">Privacy Policy</Link>
                        <Link href="/" className="text-slate-600 hover:text-emerald-500 text-sm font-bold transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
