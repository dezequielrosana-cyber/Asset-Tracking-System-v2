import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is our asset data secure?",
      answer: "Absolutely. We use enterprise-grade encryption for all data at rest and in transit (AES-256). We are SOC2 Type II compliant and offer private-cloud deployment for Enterprise customers."
    },
    {
      question: "Can I import my existing spreadsheet data?",
      answer: "Yes! You can import assets in bulk via CSV, Excel, or through our direct integrations with tools like Jamf and Microsoft Intune."
    },
    {
      question: "Do you support multiple locations?",
      answer: "Our Professional and Enterprise plans allow you to manage assets across multiple offices, warehouses, and remote employee locations with ease."
    },
    {
      question: "What hardware do I need for scanning?",
      answer: "No specialized hardware is required. Our mobile app (iOS & Android) turns any smartphone into a high-speed QR and barcode scanner."
    },
    {
      question: "is there a limit to how many assets I can track?",
      answer: "Our Starter plan supports up to 50 assets. Professional and Enterprise plans offer unlimited asset tracking to grow with your business."
    }
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">FAQ</h2>
          <p className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</p>
          <p className="text-lg text-slate-400">Everything you need to know about getting started.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/[0.04] transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-white">{faq.question}</span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-indigo-400 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-500 shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed italic border-l-2 border-indigo-500/30 ml-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
