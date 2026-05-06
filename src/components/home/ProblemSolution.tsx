import { motion } from 'motion/react';
import { AlertCircle, Zap, ShieldCheck, Clock } from 'lucide-react';

export function ProblemSolution() {
  const points = [
    {
      title: "The Spreadsheet Chaos",
      problem: "Using manual spreadsheets is a nightmare. Data gets stale, formulas break, and items disappear into the void.",
      solution: "Centralized real-time ledger that updates as things move. No more manual data entry errors.",
      icon: AlertCircle,
      color: "text-red-400",
      bg: "bg-red-500/10"
    },
    {
      title: "Lost Accountability",
      problem: "When assets move between departments or employees, the paper trail usually stops, leading to theft or loss.",
      solution: "Digital check-in/out with electronic signatures and GPS tagging for high-value items.",
      icon: ShieldCheck,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10"
    },
    {
      title: "The Audit Panic",
      problem: "Yearly audits take weeks of manual scanning and room-to-room checks. It's a massive drain on resources.",
      solution: "Generate compliant audit reports in seconds. Bulk QR scanning makes inventory counts effortless.",
      icon: Clock,
      color: "text-amber-400",
      bg: "bg-amber-500/10"
    }
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Why AssetFlow?</h2>
          <p className="text-4xl font-bold text-white mb-6">Stop losing items. Start saving time.</p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Legacy inventory methods are costing your organization thousands in lost property and wasted labor. 
            We replaced the friction with flow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] hover:shadow-2xl hover:border-white/10 transition-all"
            >
              <div className={`${point.bg} ${point.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
              
              <div className="mb-6">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">The Problem</div>
                <p className="text-sm text-slate-400 leading-relaxed italic border-l-2 border-red-500/30 pl-4">"{point.problem}"</p>
              </div>

              <div>
                <div className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider mb-2">The Solution</div>
                <div className="flex gap-2">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <p className="text-sm text-slate-300 font-medium leading-relaxed">{point.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
