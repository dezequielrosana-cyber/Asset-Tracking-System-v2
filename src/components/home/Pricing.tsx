import { Check } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { cn } from '@/src/lib/utils';

export function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for small teams getting started with asset tracking.",
      features: [
        "Up to 50 assets",
        "1 Administrative user",
        "Basic QR scanning",
        "Email support",
        "Standard reporting"
      ],
      cta: "Get Started",
      featured: false
    },
    {
      name: "Professional",
      price: "49",
      description: "Best for growing businesses with multiple departments.",
      features: [
        "Unlimited assets",
        "5 Administrative users",
        "Priority QR/Barcode support",
        "Automated alerts",
        "Role-based access",
        "API access"
      ],
      cta: "Start Free Trial",
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced features for large organizations and governments.",
      features: [
        "SSO & SAML integration",
        "Multi-office management",
        "Custom fields & branding",
        "Dedicated account manager",
        "On-premise deployment option",
        "24/7 Phone support"
      ],
      cta: "Contact Sales",
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4">Pricing</h2>
          <p className="text-4xl font-bold text-white mb-6">Simple, transparent pricing.</p>
          <p className="text-lg text-slate-400">
            No hidden fees. No long-term contracts. Change or cancel your plan at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={cn(
                "relative flex flex-col p-8 rounded-3xl border transition-all duration-300",
                tier.featured 
                  ? "bg-white text-slate-950 border-white shadow-[0_0_50px_rgba(255,255,255,0.1)] scale-105 z-10" 
                  : "bg-white/[0.02] text-white border-white/5 hover:border-white/20"
              )}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={cn("text-xl font-bold mb-2", tier.featured ? "text-slate-950" : "text-white")}>{tier.name}</h3>
                <p className={cn("text-sm mb-6", tier.featured ? "text-slate-500" : "text-slate-400")}>
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={cn("text-5xl font-black tracking-tighter italic", tier.featured ? "text-slate-950" : "text-white")}>
                    {tier.price === "Custom" ? "" : "$"}
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && <span className={cn("text-sm font-bold uppercase tracking-widest", tier.featured ? "text-slate-400" : "text-slate-500")}>/mo</span>}
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Check className={cn("w-5 h-5 shrink-0", tier.featured ? "text-indigo-600" : "text-indigo-400")} />
                    <span className={cn("text-sm leading-tight font-medium", tier.featured ? "text-slate-600" : "text-slate-300")}>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={tier.featured ? "secondary" : "outline"}
                size="lg"
                className={cn(
                  "w-full rounded-xl font-bold uppercase tracking-widest text-xs h-12",
                  tier.featured ? "bg-slate-900 hover:bg-black" : "border-white/10 hover:bg-white/5"
                )}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
