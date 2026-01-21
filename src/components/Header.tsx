'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Globe, ShoppingCart, ChevronDown } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full font-sans text-sm">

            {/* Top Bar - Info & Socials (Hidden on small screens) */}
            <div className={`bg-slate-900 text-slate-300 py-2.5 hidden md:block transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden py-0 opacity-0' : 'h-10 opacity-100'}`}>
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center h-full">
                    {/* Left Info */}
                    <div className="flex items-center gap-8 text-xs font-medium tracking-wide">
                        <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <MapPin size={14} className="text-emerald-500" /> Coimbatore, India
                        </span>
                        <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <Phone size={14} className="text-emerald-500" /> +91 94848 48484
                        </span>
                        <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <Mail size={14} className="text-emerald-500" /> sales@cardwell.com
                        </span>
                    </div>

                    {/* Right Socials */}
                    <div className="flex items-center gap-5">
                        <Twitter size={14} className="hover:text-white cursor-pointer transition-colors" />
                        <Facebook size={14} className="hover:text-white cursor-pointer transition-colors" />
                        <Linkedin size={14} className="hover:text-white cursor-pointer transition-colors" />
                        <div className="w-px h-3 bg-white/20"></div>
                        <Globe size={14} className="hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>

            {/* Main Bar - Navigation */}
            <div className={`bg-white transition-all duration-300 border-b border-slate-100 ${isScrolled ? 'py-2 shadow-md' : 'py-3'}`}>
                <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">

                    {/* Logo Area */}
                    <Link href="/" className="group flex flex-col justify-center select-none">
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                Card<span className="text-emerald-600">Well</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-bold">®</span>
                        </div>
                        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest mt-0.5 group-hover:text-emerald-600 transition-colors">
                            Sri Ram Textile Engineering
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-8">
                        <Link href="/" className="text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-emerald-600 transition-colors">
                            Home
                        </Link>

                        {/* Products Dropdown */}
                        <div
                            className="relative group h-full py-4"
                            onMouseEnter={() => setIsMobileMenuOpen(true)} // Reusing state logic or simply group-hover css
                        >
                            <button className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-emerald-600 transition-colors">
                                Products <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[260px]">
                                <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden p-2 ring-1 ring-slate-900/5">
                                    <Link href="/fabric-processing" className="block px-4 py-3 rounded-md hover:bg-slate-50 group/item">
                                        <div className="text-sm font-bold text-slate-900 group-hover/item:text-emerald-600">Fabric Processing</div>
                                        <div className="text-[10px] text-slate-500 font-medium">Inspection, Finishing, Packing</div>
                                    </Link>
                                    <Link href="/spinning-accessories" className="block px-4 py-3 rounded-md hover:bg-slate-50 group/item">
                                        <div className="text-sm font-bold text-slate-900 group-hover/item:text-emerald-600">Spinning Accessories</div>
                                        <div className="text-[10px] text-slate-500 font-medium">Apron Doffing, Spares</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/about" className="text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-emerald-600 transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-emerald-600 transition-colors">
                            Contact
                        </Link>
                    </nav>

                    {/* Right Icons Actions */}
                    <div className="flex items-center gap-6 text-slate-800">
                        <div className="hidden md:flex items-center gap-5">
                            <Search className="w-5 h-5 hover:text-emerald-600 cursor-pointer transition-colors" />
                            <div className="relative group cursor-pointer">
                                <ShoppingCart className="w-5 h-5 hover:text-emerald-600 transition-colors" />
                                <span className="absolute -top-1.5 -right-1.5 bg-emerald-600 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">0</span>
                            </div>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            className="xl:hidden text-slate-900 hover:text-emerald-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>

                        {/* Desktop Menu Icon */}
                        <Menu className="w-6 h-6 hover:text-emerald-600 cursor-pointer transition-colors hidden xl:block" />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu Overlay */}
            <div className={`fixed inset-x-0 top-[110px] bg-white border-t border-slate-100 p-8 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-y-0 opacity-100 shadow-2xl' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col space-y-4">
                    <Link href="/" className="text-lg font-bold text-slate-900 hover:text-emerald-600" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <div className="pl-4 border-l-2 border-emerald-100 flex flex-col gap-3">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Products</div>
                        <Link href="/fabric-processing" className="text-base font-medium text-slate-700 hover:text-emerald-600" onClick={() => setIsMobileMenuOpen(false)}>Fabric Processing</Link>
                        <Link href="/spinning-accessories" className="text-base font-medium text-slate-700 hover:text-emerald-600" onClick={() => setIsMobileMenuOpen(false)}>Spinning Accessories</Link>
                    </div>
                    <Link href="/about" className="text-lg font-bold text-slate-900 hover:text-emerald-600" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link href="/contact" className="text-lg font-bold text-slate-900 hover:text-emerald-600" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </nav>
            </div>

        </header>
    );
}
