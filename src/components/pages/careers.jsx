import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, X, CheckCircle } from 'lucide-react';
import { styles } from './../../Styles';

const Careers = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    const jobs = [
        // {
        //     id: 1,
        //     title: "Lead Expert",
        //     type: "Full-Time",
        //     location: "Remote",
        //     department: "Sales",
        //     posted: "2 days ago",
        //     description: "We need a lead expert who can manage our sales and reach out to investors regarding our products and stuff",
        //     requirements: [
        //         "Fresh or 1+ years of experience in sales and marketing",
        //         "Basic understanding of online sales",
        //         "Willingness to work in a team",
        //         "Passion for sustainability"
        //     ]
        // },
        // {
        //     id: 2,
        //     title: "Social Media Manager",
        //     type: "Part-Time",
        //     location: "Remote",
        //     department: "Marketing",
        //     posted: "1 week ago",
        //     description: "We are looking for a creative storyteller to manage 'ZeroCrete' online presence. You will be responsible for creating engaging content that explains our mission to the world.",
        //     requirements: [
        //         "Experience with Instagram Reels & LinkedIn content",
        //         "Basic graphic design skills (Canva/Photoshop)",
        //         "Excellent English writing skills",
        //         "Interest in eco-friendly technology"
        //     ]
        // }
    ];

    return (
        <section id="careers" className="py-20 bg-white border-t border-slate-100">
            <div className={`${styles.SectionWidth} px-4 sm:px-6 lg:px-8`}>

                {/* Section Header */}
                <div className="text-center mt-8 mb-16">
                    <h2 className="font-heading text-4xl font-bold text-slate-900 mb-4">
                        Join Our Team
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Help us build a future without carbon. We are looking for passionate innovators to join our mission.
                    </p>
                </div>

                {/* Job Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-start"
                            onClick={() => setSelectedJob(job)}
                        >
                            <div className="w-full flex justify-between items-start mb-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${job.type.includes("Internship")
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-emerald-100 text-emerald-700"
                                    }`}>
                                    {job.type}
                                </span>
                                <span className="text-slate-400 text-sm">{job.posted}</span>
                            </div>

                            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                {job.title}
                            </h3>

                            <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
                                <div className="flex items-center gap-1">
                                    <Briefcase size={16} /> {job.department}
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPin size={16} /> {job.location}
                                </div>
                            </div>

                            <div className="mt-auto flex items-center text-emerald-600 font-bold group-hover:gap-2 transition-all">
                                View Details <ArrowRight size={18} className="ml-1" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Empty State (Use this if no jobs are open) --- */}
                {jobs.length === 0 && (
                    <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                        <p className="text-slate-500">No open positions right now. Check back later!</p>
                    </div>
                )}

            </div>

            {/* --- JOB DETAIL MODAL --- */}
            {selectedJob && (
                <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedJob(null)}>
                    <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedJob(null)}
                            className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
                        >
                            <X size={20} />
                        </button>

                        {/* Modal Content */}
                        <div className="p-8 md:p-10">
                            <div className="mb-6">
                                <span className="text-emerald-600 font-bold tracking-wide text-sm uppercase mb-2 block">
                                    {selectedJob.department}
                                </span>
                                <h3 className="font-heading text-3xl font-bold text-slate-900 mb-2">
                                    {selectedJob.title}
                                </h3>
                                <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                                    <span className="flex items-center gap-1"><Clock size={16} /> {selectedJob.type}</span>
                                    <span className="flex items-center gap-1"><MapPin size={16} /> {selectedJob.location}</span>
                                </div>
                            </div>

                            <div className="prose prose-slate mb-8">
                                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                    {selectedJob.description}
                                </p>

                                <h4 className="font-bold text-slate-900 text-lg mb-3">Requirements:</h4>
                                <ul className="space-y-2">
                                    {selectedJob.requirements.map((req, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <CheckCircle size={18} className="text-emerald-500 mt-1 shrink-0" />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Apply Action */}
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <p className="text-slate-900 font-bold">Interested?</p>
                                    <p className="text-slate-500 text-sm">Send your CV to our HR team.</p>
                                </div>
                                <a
                                    href={`mailto:zerocretepk@gmail.com?subject=Application for ${selectedJob.title}`}
                                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors shadow-md w-full sm:w-auto text-center"
                                >
                                    Apply via Email
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};

export default Careers;