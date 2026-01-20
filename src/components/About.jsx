import React from 'react';
import { Award, GraduationCap, Microscope } from 'lucide-react';
import { styles } from '../Styles';

const About = () => {
    return (
        <section id="about" className="py-14 md:py-16 md:pb-8 bg-white relative overflow-hidden">
            {/* Background Decorative Blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 z-0"></div>

            <div className={`${styles.SectionWidth} relative z-10`}>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: The Story */}
                    <div>
                        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">
                            Who We Are
                        </h2>
                        <h3 className="font-heading text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            Engineers turning industrial waste into <span className="text-primary">green concrete.</span>
                        </h3>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                ZeroCrete started as a university research project at <strong>MUET</strong> with a simple question:
                                <em>"Why are we digging up mountains to make cement when we have mountains of industrial waste?"</em>
                            </p>
                            <p>
                                We are a team of Metallurgy & Materials Engineers who have cracked the code on <strong>Geopolymer technology</strong>. We create construction materials that are stronger than cement and 100% eco-friendly.
                            </p>
                        </div>

                        {/* Badges / Awards */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200 text-sm font-semibold text-slate-700">
                                <Award size={18} className="text-primary" />
                                Winner Innovista Startup Competition
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200 text-sm font-semibold text-slate-700">
                                <GraduationCap size={18} className="text-blue-500" />
                                Materials Engineering Experts
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Visual Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Stat Card 1 */}
                        <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-primary">
                            <div className="text-4xl font-bold text-slate-900 mb-1">80%</div>
                            <div className="text-sm text-slate-500 font-medium">Less CO2 Emissions</div>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-500">
                            <div className="text-4xl font-bold text-slate-900 mb-1">100%</div>
                            <div className="text-sm text-slate-500 font-medium">Cement-Free</div>
                        </div>

                        {/* Stat Card 3 */}
                        <div className="bg-slate-900 p-6 rounded-2xl col-span-2 text-white flex items-center justify-between">
                            <div>
                                <div className="text-2xl font-bold mb-1">Research Backed</div>
                                <div className="text-sm text-slate-400">Tested in University Labs</div>
                            </div>
                            <Microscope size={40} className="text-emerald-400 opacity-80" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;