/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from '@/src/components/layout/Navbar';
import { Hero } from '@/src/components/home/Hero';
import { ProblemSolution } from '@/src/components/home/ProblemSolution';
import { Features } from '@/src/components/home/Features';
import { Benefits, HowItWorks } from '@/src/components/home/ValueProp';
import { Pricing } from '@/src/components/home/Pricing';
import { FAQ } from '@/src/components/home/FAQ';
import { Testimonials } from '@/src/components/home/Testimonials';
import { CallToAction, Footer } from '@/src/components/home/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-400 font-sans selection:bg-indigo-500/30 selection:text-white relative overflow-x-hidden">
      {/* Dynamic Background Decorations */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ProblemSolution />
          <HowItWorks />
          <Features />
          <Benefits />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </div>
  );
}

