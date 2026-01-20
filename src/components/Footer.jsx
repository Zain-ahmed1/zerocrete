import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Twitter, Instagram, Facebook, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Logo from "./../assets/logo.png"
import { styles } from '../Styles';

const Footer = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // null | 'success' | 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS IDS
        const SERVICE_ID = "service_tgx1ooo";
        const TEMPLATE_ID = "template_1os5ymy";
        const PUBLIC_KEY = "eyo7hIxtkXne6aBg_";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setLoading(false);
                setStatus('success');
                e.target.reset(); // Clear the form inputs
                // Remove success message after 5 seconds
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                setLoading(false);
                setStatus('error');
                console.error(error.text);
            });
    };

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
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 shadow-xl backdrop-blur-sm">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    required
                                    placeholder="Name"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 placeholder-slate-400 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Email"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 placeholder-slate-400 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Message"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 placeholder-slate-400 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 px-6 rounded-lg bg-primary hover:bg-darkprimary disabled:bg-emerald-800 disabled:cursor-not-allowed text-white font-semibold transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} /> Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-900/20 p-3 rounded-lg border border-emerald-900/50">
                                    <CheckCircle size={16} /> Message sent successfully! We'll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-900/50">
                                    <AlertCircle size={16} /> Something went wrong. Please try again later.
                                </div>
                            )}
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