import { motion } from 'motion/react';
import { QrCode, History, Users, Bell, BarChart3, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Features() {
  const features = [
    {
      title: "QR & Barcode Ready",
      description: "Scan assets directly from your mobile device. Print custom labels or use existing manufacturer codes.",
      icon: QrCode,
      className: "md:col-span-2 md:row-span-1",
      color: "bg-indigo-600 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
    },
    {
      title: "Full Audit Trail",
      description: "Every change is logged. Who had it, where it went, and when it returned.",
      icon: History,
      className: "md:col-span-1 md:row-span-1",
      color: "bg-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
    },
    {
      title: "User Assignment",
      description: "Assign laptops to employees and furniture to rooms with a single click.",
      icon: Users,
      className: "md:col-span-1 md:row-span-2",
      color: "bg-indigo-400 text-slate-950 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
    },
    {
      title: "Smart Alerts",
      description: "Get notified when an item is overdue or if maintenance is required.",
      icon: Bell,
      className: "md:col-span-1 md:row-span-1",
      color: "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
    },
    {
      title: "Advanced Analytics",
      description: "Visualize asset depreciation, department spending, and inventory turnover.",
      icon: BarChart3,
      className: "md:col-span-1 md:row-span-1",
      color: "bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
    },
    {
      title: "Multi-Office Sync",
      description: "Manage assets across continents. Real-time sync for global organizations.",
      icon: Globe,
      className: "md:col-span-2 md:row-span-1",
      color: "bg-slate-800 border border-white/10"
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-brand-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Features</h2>
            <p className="text-4xl lg:text-5xl font-bold text-white leading-tight">Everything you need to <br/> scale your inventory.</p>
          </div>
          <p className="text-slate-400 max-w-sm">
            Our modular approach lets you start simple and scale into a full enterprise resource management system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative p-8 rounded-3xl bg-white/[0.03] border border-white/5 overflow-hidden backdrop-blur-md hover:bg-white/[0.06] hover:border-white/10 transition-all",
                feature.className
              )}
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 transition-transform group-hover:scale-110 duration-300", feature.color)}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed max-w-xs">{feature.description}</p>
              
              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
