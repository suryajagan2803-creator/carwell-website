'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X, ChevronDown, Zap, ArrowRight } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? 'w-[95%] md:w-[90%] max-w-7xl mx-auto'
                : 'w-full px-6'
                }`}
        >
            <div className={`relative flex justify-between items-center transition-all duration-500 px-0 py-3`}>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-80 h-28 transition-transform hover:scale-105">
                        <img
                            src="/cardwell-logo-new.png"
                            alt="Cardwell Logo"
                            className="object-contain object-left w-full h-full drop-shadow-xl filter"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center space-x-1">
                    <div className="flex items-center bg-white/90 backdrop-blur-md rounded-full px-4 py-2 border border-white/50 shadow-xl shadow-slate-200/50">
                        <Link
                            href="/"
                            className="px-5 py-2 text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors"
                        >
                            Home
                        </Link>

                        {/* Products Dropdown */}
                        <div
                            className="relative group h-full"
                            onMouseEnter={() => setIsProductDropdownOpen(true)}
                            onMouseLeave={() => setIsProductDropdownOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1 px-5 py-2 text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors"
                            >
                                Products <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300">
                                <div className="bg-white/80 backdrop-blur-xl w-72 border border-slate-100 rounded-2xl shadow-2xl overflow-hidden p-2 ring-1 ring-slate-900/5">
                                    <Link
                                        href="/fabric-processing"
                                        className="block p-4 rounded-xl transition-colors group/link"
                                    >
                                        <div className="text-sm font-bold text-slate-900 mb-1 group-hover/link:text-emerald-600 transition-colors">Fabric Processing</div>
                                        <div className="text-[10px] text-slate-500 font-medium">Inspection, Finishing, Packing</div>
                                    </Link>
                                    <Link
                                        href="/spinning-accessories"
                                        className="block p-4 rounded-xl transition-colors group/link"
                                    >
                                        <div className="text-sm font-bold text-slate-900 mb-1 group-hover/link:text-emerald-600 transition-colors">Spinning Accessories</div>
                                        <div className="text-[10px] text-slate-500 font-medium">Apron Doffing, Spares</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/about"
                            className="px-5 py-2 text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors"
                        >
                            Company
                        </Link>
                        <Link
                            href="/#contact"
                            className="px-5 py-2 text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="bg-white/90 backdrop-blur shadow-lg text-slate-700 hover:text-emerald-600 transition-colors p-3 rounded-full border border-white/50">
                        <Search className="w-5 h-5" />
                    </button>
                    <Link
                        href="/contact"
                        className="group relative flex items-center gap-2 bg-slate-900 hover:bg-emerald-600 text-white text-sm font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-xl hover:shadow-emerald-600/30"
                    >
                        <span>Get Quote</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="xl:hidden p-3 text-slate-800 bg-white/90 backdrop-blur shadow-lg rounded-full border border-white/50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="xl:hidden absolute top-full left-4 right-4 mt-4 bg-white border border-slate-100 rounded-3xl shadow-2xl p-6 flex flex-col space-y-4 ring-1 ring-slate-900/5">
                    <Link
                        href="/"
                        className="text-lg font-bold text-slate-900 hover:text-emerald-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>

                    <div className="pl-4 border-l-2 border-slate-100 flex flex-col gap-4">
                        <Link
                            href="/fabric-processing"
                            className="text-base font-semibold text-slate-600 hover:text-emerald-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Fabric Processing
                        </Link>
                        <Link
                            href="/spinning-accessories"
                            className="text-base font-semibold text-slate-600 hover:text-emerald-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Spinning Accessories
                        </Link>
                    </div>

                    <Link
                        href="/about"
                        className="text-lg font-bold text-slate-800 hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Company
                    </Link>
                    <Link
                        href="/#contact"
                        className="text-lg font-bold text-slate-800 hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>

                    <div className="pt-4 mt-4 border-t border-slate-100">
                        <Link
                            href="/contact"
                            className="flex items-center justify-center gap-2 bg-[#0F172A] text-white font-bold py-3 rounded-full"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Custom Quote
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
