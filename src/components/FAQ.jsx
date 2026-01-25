import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { styles } from '../Styles';

const FAQ = () => {
  // State to track which FAQ is open (null = all closed)
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What exactly is 'ZeroCrete'?",
      answer: "ZeroCrete is a geopolymer-based construction material. Unlike traditional concrete that uses Ordinary Portland Cement (a major CO2 emitter), we use a proprietary blend of industrial byproducts like fly ash, steel slag, and alkaline activators. The result is a 'concrete' that is 100% cement-free and significantly reduces carbon emissions."
    },
    {
      question: "Is it as strong as regular concrete?",
      answer: "Yes, and often stronger. Our infrastructure-grade pavers achieve compressive strengths exceeding 40 MPa (Megapascals), making them suitable for heavy-duty roads, sidewalks, and industrial flooring. Additionally, geopolymer concrete is naturally more resistant to chemical corrosion and extreme temperatures than standard cement."
    },
    {
      question: "How does this help the environment?",
      answer: "We solve two problems at once. First, we reduce the demand for cement manufacturing, which is responsible for ~8% of global CO2 emissions. Second, we upcycle industrial waste that would otherwise end up in landfills. Our production process emits up to 80% less CO2 compared to traditional methods."
    },
    {
      question: "Can I buy ZeroCrete for my home?",
      answer: "Currently, our infrastructure products (pavers, dividers) are available for B2B commercial projects. However, we are launching our 'Eco-Decor' line (pots, tiles, and ornaments) for homeowners very soon. Join our waitlist to be notified when our online store goes live!"
    },
    {
      question: "Does it look different from normal concrete?",
      answer: "It looks and feels very similar to high-quality finished concrete. However, because we control the chemical mixture, we can achieve smoother finishes and unique color variations that standard concrete often lacks. It is raw, industrial, and aesthetically pleasing."
    }
  ];

  return (
    <section id="faq" className="py-12 bg-slate-50 border-t border-slate-200">
      <div className={`${styles.SectionWidth} px-4 sm:px-6 lg:px-8`}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-darkprimary font-bold tracking-wide uppercase text-sm mb-2 block">
            Common Questions
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-concrete">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-2xl border transition-all duration-300
                ${activeIndex === index ? 'border-emerald-500 shadow-lg' : 'border-slate-200 shadow-sm hover:border-darkprimary/80'}
              `}
            >
              {/* Question Header (Button) */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 py-4  cursor-pointer text-left focus:outline-none"
              >
                <span className={`font-bold text-base md:text-lg ${activeIndex === index ? 'text-darkprimary' : 'text-slate-800'}`}>
                  {item.question}
                </span>
                <span className={`
                  p-2 rounded-full transition-colors duration-300
                  ${activeIndex === index ? 'bg-emerald-100 text-darkprimary' : 'bg-slate-100 text-slate-400'}
                `}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              {/* Smooth Collapse Animation Wrapper */}
              <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-rawcon leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Contact Nudge */}
        <div className="text-center mt-12">
          <p className="text-slate-500">
            Have a technical question? 
            <a href="#contact" className="text-darkprimary font-bold ml-1 hover:underline">
              Contact our team
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;