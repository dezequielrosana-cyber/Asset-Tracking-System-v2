import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Button';
import { CheckCircle2, Play, Search, Laptop, Monitor, Tablet, HardDrive } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Enterprise Asset Intelligence
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
              Master your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Assets</span>, not your spreadsheets.
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 max-w-md leading-relaxed">
              Reduce loss by 30% and save hundreds of hours with the automated inventory system built for modern facility teams.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
              <Button variant="primary" size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-slate-200 border-none font-bold rounded-xl px-10">
                Book a Live Demo
              </Button>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-bg bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="user" />
                    </div>
                  ))}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-brand-bg bg-indigo-600 text-[10px] font-bold text-white">
                    +2k
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-500">Trusted by 2,000+ teams</span>
              </div>
            </div>
          </motion.div>

          {/* Artistic Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative z-20">
              {/* Fake Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs font-mono text-slate-500 tracking-widest uppercase">Global Inventory Dashboard</div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Total Assets', value: '12,842', color: 'text-white' },
                  { label: 'In Transit', value: '142', color: 'text-indigo-400' },
                  { label: 'Maintenance', value: '18', color: 'text-amber-400' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/5">
                    <div className="text-xs text-slate-500 mb-1 font-medium">{stat.label}</div>
                    <div className={cn("text-2xl font-bold tracking-tight", stat.color)}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {[
                  { initial: 'MB', name: 'MacBook Pro M3 - 14"', id: 'INV-8821-X', dept: 'Marketing Dept', status: 'Assigned', color: 'text-indigo-400', bg: 'bg-indigo-500/20' },
                  { initial: 'HM', name: 'Aeron Chair (Graphite)', id: 'INV-3390-A', dept: 'London HQ', status: 'In Transit', color: 'text-indigo-400', bg: 'bg-indigo-600/20' },
                  { initial: 'LG', name: '34" Curved Monitor', id: 'INV-1102-M', dept: 'Remote/Home', status: 'Maintenance', color: 'text-amber-400', bg: 'bg-amber-500/20' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={cn("w-10 h-10 rounded flex items-center justify-center font-bold text-sm", item.bg, item.color)}>
                        {item.initial}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{item.name}</div>
                        <div className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">ID: {item.id}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-slate-300">{item.dept}</div>
                      <div className={cn("text-[10px] font-bold flex items-center justify-end gap-1.5 mt-0.5", item.status === 'Assigned' ? 'text-emerald-400' : item.color)}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {item.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Progress Float */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 w-64 p-6 bg-indigo-600 rounded-2xl shadow-2xl z-30 border border-white/20"
            >
              <div className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Audit Progress</div>
              <div className="flex items-baseline gap-2 mb-3">
                <div className="text-4xl font-black text-white italic">94%</div>
                <div className="text-xs text-white/60">Verified</div>
              </div>
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="w-[94%] h-full bg-white rounded-full shadow-[0_0_15px_white]" />
              </div>
              <div className="mt-4 text-[11px] text-white/80 font-medium italic leading-snug">
                "Verified 400 assets in 12 minutes using QR."
              </div>
            </motion.div>

            {/* Glowing Orbs for the Mockup */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-indigo-500/20 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
