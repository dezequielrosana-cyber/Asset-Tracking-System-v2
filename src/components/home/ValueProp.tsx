import { motion } from 'motion/react';
import { Target, TrendingUp, UserCheck, Search } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      title: "Eliminate Ghost Assets",
      desc: "Stop paying licenses and maintenance for equipment you no longer own. Average savings of $1,200/yr per 10 employees.",
      icon: Search
    },
    {
      title: "Boost Efficiency",
      desc: "Reduce time spent searching for assets by 80%. Know exactly where everything is, from laptops to power cables.",
      icon: TrendingUp
    },
    {
      title: "Iron-Clad Compliance",
      desc: "Pass any audit with flying colors. Automated logs provide a tamper-proof history of every asset you've ever owned.",
      icon: UserCheck
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div>
             <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">The Impact</h2>
             <p className="text-4xl font-bold text-white mb-8 leading-tight">
               Built for the bottom line. <br/> Loved by administrators.
             </p>
             <div className="space-y-10">
               {benefits.map((b, i) => (
                 <div key={i} className="flex gap-6 group">
                   <div className="shrink-0 w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white shadow-sm group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all">
                     <b.icon className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                     <p className="text-slate-400 leading-relaxed">{b.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="relative">
              <div className="bg-indigo-600 rounded-[2.5rem] p-12 text-white relative z-10 overflow-hidden shadow-2xl">
                 <Target className="w-20 h-20 opacity-10 absolute -top-4 -right-4" />
                 <h3 className="text-3xl font-bold mb-8 leading-tight">"AssetFlow reduced our inventory variance by 98% in just three months."</h3>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-xl border-2 border-white/20">L</div>
                    <div>
                      <div className="font-bold text-lg">Liam Peterson</div>
                      <div className="text-indigo-200 text-sm italic font-medium">Chief Financial Officer, Horizon Media</div>
                    </div>
                 </div>
              </div>
              <div className="absolute top-10 left-10 w-full h-full bg-indigo-500/10 rounded-[2.5rem] -z-10 blur-xl" />
           </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Tag Everything",
      desc: "Apply QR labels to your physical assets. Use our bulk-generator to print thousands of tags in minutes."
    },
    {
      num: "02",
      title: "Scan & Assign",
      desc: "Assign assets to employees, departments, or office locations with a quick mobile scan."
    },
    {
      num: "03",
      title: "Audit with Ease",
      desc: "Run scheduled audits and generate comprehensive reports for taxes, insurance, and management."
    }
  ];

  return (
    <section className="py-24 relative bg-slate-950/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">The Process</h2>
          <p className="text-4xl font-bold text-white">Get running in hours, not days.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-white/10 -z-10" />
          
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 rounded-full bg-brand-bg border-4 border-indigo-600 flex items-center justify-center text-white text-2xl font-black mx-auto mb-6 shadow-[0_0_20px_rgba(79,70,229,0.3)] relative z-10 transition-transform group-hover:scale-110">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 italic tracking-tight">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
