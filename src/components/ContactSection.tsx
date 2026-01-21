'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, CheckCircle, Globe } from 'lucide-react';

export default function ContactSection() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formState);
        alert('Thank you for your inquiry. Our team will contact you shortly.');
    };

    return (
        <section id="contact" className="py-16 bg-[#F8FAFC] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 border border-white/50 relative overflow-hidden">

                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 relative z-10">
                        {/* Contact Info & Context */}
                        <div className="lg:w-5/12 pt-8">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-8">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span>Global Support Online</span>
                            </span>

                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                                Ready to Optimize <br />
                                <span className="text-emerald-500">Your Production?</span>
                            </h2>

                            <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
                                Our team of Textile Automation Engineers is ready to discuss your specific requirements. Whether you need a Custom Machine Consultation or a full Textile Plant Audit.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-6 p-3 rounded-2xl transition-all group hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100">
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold mb-1 text-sm uppercase tracking-wide">Call Us Directly</h4>
                                        <a href="tel:+919842233213" className="text-lg font-mono font-bold text-slate-600 group-hover:text-emerald-600 transition-colors">
                                            +91 98422 33213
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 p-3 rounded-2xl transition-all group hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100">
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold mb-1 text-sm uppercase tracking-wide">Email Support</h4>
                                        <a href="mailto:admin@clickcardwell.com" className="text-lg font-bold text-slate-600 group-hover:text-emerald-600 transition-colors">
                                            admin@clickcardwell.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 p-3 rounded-2xl transition-all group hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100">
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold mb-1 text-sm uppercase tracking-wide">Visit HQ</h4>
                                        <p className="text-slate-600 font-medium">
                                            Coimbatore, TN, India.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Integration */}
                            <div className="mt-8 rounded-3xl overflow-hidden border border-slate-100 shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44143491953!2d76.8848328678255!3d11.014261494510007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c565f9b63266!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-7/12 bg-white rounded-[2/5rem] p-8 md:p-12 border border-slate-100 relative shadow-lg">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <MessageSquare className="w-6 h-6 text-emerald-500" />
                                Send us a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-4 group-focus-within:text-emerald-600 transition-colors">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-0 focus:border-emerald-500 transition-all font-medium shadow-sm outline-none placeholder:text-slate-300"
                                            placeholder="John Doe"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label htmlFor="company" className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-4 group-focus-within:text-emerald-600 transition-colors">Company Name</label>
                                        <input
                                            type="text"
                                            id="company"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-0 focus:border-emerald-500 transition-all font-medium shadow-sm outline-none placeholder:text-slate-300"
                                            placeholder="Mills Pvt Ltd"
                                            value={formState.company}
                                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-4 group-focus-within:text-emerald-600 transition-colors">Work Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-0 focus:border-emerald-500 transition-all font-medium shadow-sm outline-none placeholder:text-slate-300"
                                            placeholder="john@company.com"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label htmlFor="phone" className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-4 group-focus-within:text-emerald-600 transition-colors">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:ring-0 focus:border-emerald-500 transition-all font-medium shadow-sm outline-none placeholder:text-slate-300"
                                            placeholder="+91 99999 99999"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-4 group-focus-within:text-emerald-600 transition-colors">Project Details</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full bg-slate-50 border border-slate-100 rounded-3xl px-6 py-4 text-slate-900 focus:ring-0 focus:border-emerald-500 transition-all resize-none font-medium shadow-sm outline-none placeholder:text-slate-300"
                                        placeholder="Tell us about your machinery requirements..."
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#0F172A] hover:bg-emerald-600 text-white font-bold py-5 px-8 rounded-full flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-1 group"
                                >
                                    <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    SEND REQUEST
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
