import { Button } from '@/src/components/ui/Button';

export function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[150px]" />
        <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
          Master your assets, <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 italic">not your spreadsheets.</span>
        </h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-medium">
          Join 2,000+ organizations saving time and money with AssetFlow. Start your 14-day free trial today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" className="w-full sm:w-auto h-16 px-12 text-lg font-black uppercase tracking-widest bg-white text-black hover:bg-slate-200 rounded-2xl">
            Start Free Trial
          </Button>
          <Button variant="ghost" className="w-full sm:w-auto h-16 px-12 text-lg text-white hover:bg-white/10 font-bold border border-white/10 rounded-2xl">
            Book a Demo
          </Button>
        </div>
        <p className="mt-8 text-[10px] text-slate-600 font-black uppercase tracking-[0.2em] italic">
          No credit card required ● Cancel anytime ● SOC2 Compliant
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                A
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">AssetFlow</span>
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed mb-8 font-medium">
              The modern standard for enterprise asset management. Built for precision, speed, and accountability.
            </p>
            <div className="flex gap-4 items-center">
               <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">Security Verified</span>
               <div className="h-4 w-[1px] bg-white/10" />
               <div className="flex gap-4 opacity-50 contrast-125">
                 <div className="w-12 h-3 bg-slate-800 rounded-sm" />
                 <div className="w-16 h-3 bg-slate-800 rounded-sm" />
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.2em]">Product</h4>
            <ul className="space-y-4">
              {['Features', 'QR Scanning', 'Audit Trail', 'Reporting', 'Security'].map(item => (
                <li key={item}><a href="#" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors font-medium">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.2em]">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Customers', 'Contact'].map(item => (
                <li key={item}><a href="#" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors font-medium">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.2em]">Legal</h4>
            <ul className="space-y-4">
              {['Privacy', 'Terms', 'Codes', 'Trust Center'].map(item => (
                <li key={item}><a href="#" className="text-sm text-slate-500 hover:text-indigo-400 transition-colors font-medium">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
             <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
               <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2 block">System Status</span>
               <div className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-xs text-white font-bold">All Systems Operational</span>
               </div>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-600 font-bold uppercase tracking-widest whitespace-nowrap">
            © 2024 AssetFlow Inc. ● 100% Immutable Audit Logs
          </p>
          <div className="flex items-center gap-8">
            {['Twitter', 'LinkedIn', 'Github'].map(platform => (
              <a key={platform} href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">{platform}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
