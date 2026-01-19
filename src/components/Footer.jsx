import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import Logo from "./../assets/logo.png"
import { styles } from '../Styles';

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8">
            <div className={`${styles.SectionWidth} px-4 sm:px-6 lg:px-8`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Column: Brand & Info */}
                    <div>
                        <div className="flex items-center mb-6">
                            <a href="/">
                                <img src={Logo} alt="ZeroCrete" className="w-48 max-w-48 min-w-36" />
                            </a>
                        </div>
                        <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
                            ZeroCrete is on a mission and has developed reliable technology to provide developments, norhaments, infrastructures and zero-carbon concrete.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 shadow-xl backdrop-blur-sm">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 placeholder-slate-400 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 placeholder-slate-400 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Message"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 placeholder-slate-400 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors shadow-md hover:shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} ZeroCrete. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;