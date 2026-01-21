'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Globe, ShoppingCart } from 'lucide-react';

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
            <div className={`bg-[#0f172a] border-b border-white/5 text-slate-400 py-2.5 hidden md:block transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden py-0 opacity-0' : 'h-10 opacity-100'}`}>
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center h-full">
                    {/* Left Info */}
                    <div className="flex items-center gap-8 text-xs font-medium tracking-wide">
                        <span className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer">
                            <MapPin size={12} className="text-emerald-500" /> Tirupur, India
                        </span>
                        <span className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer">
                            <Phone size={12} className="text-emerald-500" /> +91 94848 48484
                        </span>
                        <span className="flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer">
                            <Mail size={12} className="text-emerald-500" /> sales@cardwell.com
                        </span>
                    </div>

                    {/* Right Socials */}
                    <div className="flex items-center gap-5">
                        <Twitter size={12} className="hover:text-white cursor-pointer transition-colors" />
                        <Facebook size={12} className="hover:text-white cursor-pointer transition-colors" />
                        <Linkedin size={12} className="hover:text-white cursor-pointer transition-colors" />
                        <div className="w-px h-3 bg-white/20"></div>
                        <Globe size={14} className="hover:text-emerald-400 cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>

            {/* Main Bar - Navigation */}
            <div className={`bg-[#020617] transition-all duration-300 border-b border-white/5 ${isScrolled ? 'py-4 shadow-xl' : 'py-6'}`}>
                <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">

                    {/* Logo - Text Style to match Reference */}
                    <Link href="/" className="group flex items-center gap-2 select-none">
                        <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter group-hover:opacity-90 transition-opacity">
                            Card<span className="text-emerald-500">Well</span>
                            <span className="align-top text-[10px] text-slate-500 font-medium ml-1">®</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-10">
                        {['Home', 'Products', 'About', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className={`text-[13px] font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${item === 'Home' ? 'text-emerald-500' : 'text-white hover:text-emerald-400'
                                    }`}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Icons Actions */}
                    <div className="flex items-center gap-6 text-white">
                        <div className="hidden md:flex items-center gap-6">
                            <Search className="w-5 h-5 hover:text-emerald-400 cursor-pointer transition-colors" />
                            <div className="relative group cursor-pointer">
                                <ShoppingCart className="w-5 h-5 hover:text-emerald-400 transition-colors" />
                                <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">0</span>
                            </div>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            className="xl:hidden text-white hover:text-emerald-400 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>

                        {/* Desktop Menu Icon (Decorative as per ref) */}
                        <Menu className="w-6 h-6 hover:text-emerald-400 cursor-pointer transition-colors hidden xl:block" />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu Overlay */}
            <div className={`fixed inset-x-0 top-[110px] bg-[#020617] border-t border-white/10 p-8 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col space-y-6">
                    {['Home', 'Products', 'About', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="text-lg font-bold uppercase tracking-widest text-white hover:text-emerald-400 border-b border-white/5 pb-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>

        </header>
    );
}
