import React from 'react';
import { FlaskConical, ShoppingCart, Award, Factory } from 'lucide-react';
import { styles } from '../Styles';

const Roadmap = () => {
    const milestones = [
        {
            id: "M1",
            title: "Finalize Validation",
            description: "Complete lab testing for compressive strength. Finalize molds for decorative pots.",
            icon: <FlaskConical size={28} />,
            status: "current" // current, upcoming, completed
        },
        {
            id: "M2-3",
            title: "Pilot Sales (B2C)",
            description: "Launch online store for 'Eco-Pots'. Sell first 50 units to homeowners to prove demand.",
            icon: <ShoppingCart size={28} />,
            status: "upcoming"
        },
        {
            id: "M4-5",
            title: "B2B Certification",
            description: "Secure safety certification for Road Bricks. Sign first Letter of Intent (LOI) with a local housing society.",
            icon: <Award size={28} />,
            status: "upcoming"
        },
        {
            id: "M6",
            title: "Production Upgrade",
            description: "Deploy semi-automated brick machine. Open Seed Funding round for factory expansion.",
            icon: <Factory size={28} />,
            status: "upcoming"
        }
    ];

    return (
        <section id="roadmap" className="pt-20 pb-8 bg-slate-50 overflow-hidden">
            <div className={`${styles.SectionWidth} px-4 sm:px-6 lg:px-8`}>

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">
                        Trajectory
                    </h2>
                    <h3 className="font-heading text-3xl md:text-4xl font-bold text-concrete">
                        6-Month Roadmap
                    </h3>
                </div>

                <div className="relative">
                    {/* --- DESKTOP CONNECTING LINE --- */}
                    {/* This grey line sits behind the cards on large screens */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-slate-200 -translate-y-1/2 rounded-full z-0"></div>

                    {/* --- MOBILE CONNECTING LINE --- */}
                    {/* Vertical line for small screens */}
                    <div className="md:hidden absolute top-0 bottom-0 left-8 w-1 bg-slate-200 z-0"></div>

                    {/* GRID LAYOUT */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">

                        {milestones.map((item, index) => (
                            <div key={index} className="relative flex md:flex-col items-center md:text-center group">

                                {/* 1. THE NODE (Circle with Icon) */}
                                <div className={`
                  w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center border-4 shadow-lg transition-transform duration-300 bg-white
                  ${index === 0 ? 'border-darkprimary text-primary' : 'border-slate-300 text-slate-400'}
                `}>
                                    {item.icon}
                                </div>

                                {/* 2. CONTENT CARD */}
                                <div className="ml-6 md:ml-0 md:mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-darkprimary transition-shadow w-full md:w-auto min-h-45 flex flex-col">

                                    {/* Milestone Tag */}
                                    <span className={`text-xs font-bold uppercase mb-2 ${index === 0 ? 'text-primary' : 'text-slate-400'}`}>
                                        {item.id}
                                    </span>

                                    <h4 className="font-bold text-slate-900 text-lg mb-3 leading-tight">
                                        {item.title}
                                    </h4>

                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;