import React from 'react';
import { Leaf, Recycle, Layers } from 'lucide-react';
import { styles } from '../Styles';

const Features = () => (
    <section id="mission" className="py-16 md:py-20 bg-white">
        <div className={` ${styles.SectionWidth} px-4 sm:px-6 lg:px-8`}>

            {/* Centered Heading */}
            <div className="text-center mb-8 md:mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-concrete">
                    Features
                </h2>
            </div>

            {/* Grid - Cards will naturally be taller due to more text */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Card 1: Eco-Friendly */}
                <div className="p-8 rounded-2xl bg-slate-50 border border-emerald-500 hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-6">
                        <Leaf size={48} className="text-emerald-600" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-concrete mb-4">
                        Eco-Friendly
                    </h3>
                    <p className="text-rawcon leading-relaxed text-[16px] md:text-lg">
                        It eliminates Portland cement entirely with a geopolymer binder, offering a truly sustainable alternative for a greener future without compromising on performance.
                    </p>
                </div>

                {/* Card 2: Circular Economy */}
                <div className="p-8 rounded-2xl bg-slate-50 border border-emerald-500 hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-6">
                        <Recycle size={48} className="text-blue-600" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-concrete mb-4">
                        Circular Economy
                    </h3>
                    <p className="text-rawcon leading-relaxed text-[16px] md:text-lg">
                        We transform industrial liabilities into construction assets. This circular approach preserves natural resources, reduces pollution, and creates value from what others consider "waste."
                    </p>
                </div>

                {/* Card 3: High Durability */}
                <div className="p-8 rounded-2xl bg-slate-50 border border-emerald-500 hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-6">
                        <Layers size={48} className="text-rawcon" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-concrete mb-4">
                        High Durability
                    </h3>
                    <p className="text-rawcon leading-relaxed text-[16px] md:text-lg">
                        ZeroCrete isn't just green; it's stronger. Our geopolymer matrix offers superior compressive strength and exceptional resistance to acid, sulfates, and fire compared to OPC.
                    </p>
                </div>

            </div>
        </div>
    </section>
);

export default Features;