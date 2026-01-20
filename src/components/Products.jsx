import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import InfraCard from "./../assets/infra.jpeg";
import EcoCard from "./../assets/eco.jpeg";
import { styles } from '../Styles';

const Products = () => {
    const [activeModal, setActiveModal] = useState(null);

    const handleCtaClick = () => {
        setActiveModal(null);

        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Data for the Modals
    const productDetails = {
        infrastructure: {
            title: "Infrastructure Solutions",
            status: "Prototype Phase",
            description: "Our heavy-duty geopolymer solutions are engineered for high-traffic urban environments. By replacing standard cement with industrial byproducts, we offer pavements that are not only carbon-negative but resistant to chemical corrosion and extreme weather.",
            features: [
                "Interlocking Pavement Blocks",
                "Sidewalk & Pathway Bricks",
                "Road Dividers & Curbstones",
                "High Compressive Strength (>40 MPa)"
            ],
            cta: "Request Technical Data Sheet"
        },
        decor: {
            title: "Eco-Decor Collection",
            status: "Coming Soon",
            description: "Sustainable living meets modern design. Our Eco-Decor line proves that recycled materials can be beautiful. We are currently finalizing our designs for a range of household and garden items that turn waste into art.",
            features: [
                "Aesthetic Eco-Pots for Gardening",
                "Decorative Garden Tiles",
                "Geometric Household Ornaments",
                "Custom Color Finishes"
            ],
            cta: "Join Waitlist"
        }
    };

    return (
        <section id="products" className="py-16 md:py-20 bg-slate-50">
            <div className={`${styles.SectionWidth} px-4 sm:px-6 lg:px-8`}>

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800">
                        Products
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* --- Product 1: Infrastructure --- */}
                    <div className="group bg-white rounded-2xl overflow-hidden border border-primary shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <div className="h-48 md:h-64 bg-slate-200 relative overflow-hidden">
                            <img src={InfraCard} alt="Infrastructure Pavements" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 scale-105 transition-transform duration-700" />
                            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                Industrial Grade
                            </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="font-heading text-xl md:text-2xl font-bold text-concrete mb-3">
                                Infrastructure
                            </h3>
                            <p className="text-rawcon text-[16px] md:text-lg mb-6 flex-1">
                                Heavy-duty pavements and sidewalks engineered for the future. Carbon-negative durability for smarter cities.
                            </p>
                            <button
                                onClick={() => setActiveModal('infrastructure')}
                                className="w-full py-3 px-6 rounded-lg bg-primary hover:bg-darkprimary text-white font-semibold transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Learn Specifications
                            </button>
                        </div>
                    </div>

                    {/* --- Product 2: Eco-Decor --- */}
                    <div className="group bg-white rounded-2xl overflow-hidden border border-primary shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <div className="h-48 md:h-64 bg-slate-200 relative overflow-hidden">
                            <img src={EcoCard} alt="Eco Decor Pots" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 scale-105 transition-transform duration-700" />
                            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                Store Launching Soon
                            </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="font-heading text-xl md:text-2xl font-bold text-concrete mb-3">
                                Eco-Decor
                            </h3>
                            <p className="text-rawcon text-[16px] md:text-lg mb-6 flex-1">
                                Hand-crafted garden tiles and eco-pots. Bringing sustainability into your home with zero-carbon design.
                            </p>
                            <button
                                onClick={() => setActiveModal('decor')}
                                className="w-full py-3 px-6 rounded-lg bg-primary hover:bg-darkprimary text-white font-semibold transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                            >
                                View Catalog
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- POPUP MODAL --- */}
            {activeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-concrete/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setActiveModal(null)}>
                    <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>

                        {/* Close Button */}
                        <button
                            onClick={() => setActiveModal(null)}
                            className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
                        >
                            <X size={20} />
                        </button>

                        {/* Modal Header */}
                        <div className="bg-slate-50 p-8 border-b border-slate-100">
                            <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-darkprimary text-xs font-bold mb-3">
                                {productDetails[activeModal].status}
                            </div>
                            <h3 className="font-heading text-3xl font-bold text-concrete">
                                {productDetails[activeModal].title}
                            </h3>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            <p className="text-rawcon mb-6 leading-relaxed">
                                {productDetails[activeModal].description}
                            </p>

                            <h4 className="font-bold text-concrete mb-4 flex items-center gap-2">
                                <CheckCircle size={18} className="text-emerald-500" /> Target Products
                            </h4>
                            <ul className="space-y-3 mb-8">
                                {productDetails[activeModal].features.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-rawcon text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* --- UPDATED CTA BUTTON --- */}
                            <button
                                onClick={handleCtaClick}
                                className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                            >
                                {productDetails[activeModal].cta} <ArrowRight size={18} />
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </section>
    );
};

export default Products;