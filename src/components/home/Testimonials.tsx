import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: "AssetFlow completely transformed our yearly audit. What used to take two weeks now takes three days. The QR scanning is lightning fast.",
      author: "David Miller",
      role: "Operations Director, TechCorp",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    },
    {
      text: "The visibility we now have across our three global offices is incredible. We found over $20k in 'lost' equipment in the first month alone.",
      author: "Samantha Reed",
      role: "Facilities Manager, GlobalLogistics",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Samantha"
    },
    {
      text: "Clean, intuitive, and powerful. My team actually enjoys using it, which is the biggest win for any new software implementation.",
      author: "Marcus Chen",
      role: "IT Head, Creative Agency",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
    }
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Social Proof</h2>
          <p className="text-4xl font-bold text-white">Trusted by modern organizations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl backdrop-blur-sm relative group hover:bg-white/[0.04] transition-all"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-white/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                ))}
              </div>

              <p className="text-lg text-slate-300 leading-relaxed mb-8 relative z-10 font-medium italic">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.author} className="w-12 h-12 rounded-full bg-slate-800 border-2 border-white/10" />
                <div>
                  <div className="font-bold text-white">{item.author}</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale contrast-150">
          {['Microsoft', 'Stripe', 'Airbnb', 'HubSpot', 'Linear'].map((logo) => (
            <span key={logo} className="text-2xl font-black text-white tracking-tighter uppercase italic">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
