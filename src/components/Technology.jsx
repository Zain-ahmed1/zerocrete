import React from 'react';
import { FlaskConical, ArrowRight } from 'lucide-react';
import Flyash from "./../assets/flyash.png"
import Block from "./../assets/block.png"
import { styles } from '../Styles';

const Technology = () => (
    <section id="tech" className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
        <div className={`${styles.SectionWidth} px-4 sm:px-6 lg:px-8`}>

            {/* Section Header */}
            <div className="text-center mb-16 md:mb-24">
                <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white">
                    The Science of ZeroCrete
                </h2>
            </div>

            {/* Process Flow */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-0">

                {/* --- Step 01: Raw Materials --- */}
                <div className="flex flex-col items-center text-center w-full md:w-1/3 px-4">
                    <div className="font-heading text-3xl font-bold text-emerald-400 mb-4 md:mb-8">01</div>

                    <div className="h-32 flex items-center justify-center mb-6">
                        <img
                            src={Flyash}
                            alt="Raw Fly Ash"
                            className="w-48 object-contain drop-shadow-2xl"
                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
                        />
                        <div className="hidden text-slate-500 text-sm border border-slate-700 p-2 rounded">
                            Add ash-pile.png
                        </div>
                    </div>

                    <h3 className="font-heading text-xl font-bold mb-2 text-white">Raw Materials</h3>
                    <p className="text-slate-400 text-sm font-medium">(Fly Ash & Slag)</p>
                </div>

                {/* ARROW 1 ----------------------------------------------- */}

                {/* Desktop: Point Right */}
                <div className="hidden md:flex text-emerald-500 pt-28 justify-center w-12">
                    <ArrowRight size={32} strokeWidth={2} />
                </div>

                {/* Mobile: Point Down (Rotated 90 degrees) */}
                <div className="md:hidden text-emerald-500 my-4 transform rotate-90">
                    <ArrowRight size={32} strokeWidth={2} />
                </div>

                {/* ------------------------------------------------------- */}

                {/* --- Step 02: Activation --- */}
                <div className="flex flex-col items-center text-center w-full md:w-1/3 px-4">
                    <div className="font-heading text-3xl font-bold text-emerald-400 mb-4 md:mb-8">02</div>

                    <div className="h-32 flex items-center justify-center mb-6">
                        <FlaskConical strokeWidth={1.5} size={80} className="text-white" />
                    </div>

                    <h3 className="font-heading text-xl font-bold mb-2 text-white">Activation</h3>
                    <p className="text-slate-400 text-sm font-medium">(Alkali Solution)</p>
                </div>

                {/* ARROW 2 ----------------------------------------------- */}

                {/* Desktop: Point Right */}
                <div className="hidden md:flex text-emerald-500 pt-28 justify-center w-12">
                    <ArrowRight size={32} strokeWidth={2} />
                </div>

                {/* Mobile: Point Down (Rotated 90 degrees) */}
                <div className="md:hidden text-emerald-500 my-4 transform rotate-90">
                    <ArrowRight size={32} strokeWidth={2} />
                </div>

                {/* ------------------------------------------------------- */}

                {/* --- Step 03: Geopolymer --- */}
                <div className="flex flex-col items-center text-center w-full md:w-1/3 px-4">
                    <div className="font-heading text-3xl font-bold text-emerald-400 mb-4 md:mb-8">03</div>

                    <div className="h-32 flex items-center justify-center mb-6 relative group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-emerald-500/70 blur-2xl rounded-full"></div>
                        <img
                            src={Block}
                            alt="Geopolymer Block"
                            className="relative z-10 w-40 object-contain drop-shadow-xl"
                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
                        />
                        <div className="hidden relative z-10 text-slate-500 text-sm border border-slate-700 p-2 rounded">
                            Add concrete-block.png
                        </div>
                    </div>

                    <h3 className="font-heading text-xl font-bold mb-2 text-white">Geopolymer</h3>
                    <p className="text-slate-400 text-sm font-medium">(Zero-Carbon Concrete)</p>
                </div>

            </div>
        </div>
    </section>
);

export default Technology;