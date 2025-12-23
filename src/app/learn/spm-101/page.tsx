import Link from 'next/link';
import { NoirCard, NoirCardContent, NoirCardTitle, NoirCardDescription } from '@/components/spm/cards/NoirCard';

export const metadata = {
  title: 'SPM 101 | Learn',
  description: 'Introduction to Sales Performance Management. The essentials in plain English.',
};

export default function SPM101Page() {
  return (
    <div className="w-full">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-spm-black via-spm-purple-dark/20 to-spm-black" />
          <div className="absolute inset-0 crosshatch opacity-30" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-display text-transparent bg-clip-text bg-gradient-to-r from-spm-purple via-spm-orange to-spm-copper mb-6">SPM 101</h1>
          <p className="text-headline text-gray-100 max-w-3xl mx-auto">
            Sales Performance Management explained. No jargon, no vendor speak.
          </p>
        </div>
      </section>

      {/* What is SPM */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <NoirCard variant="elevated">
            <NoirCardContent className="p-12">
              <h2 className="text-headline-lg text-spm-purple mb-6">
                What is SPM?
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Sales Performance Management (SPM)</strong> is the system that calculates,
                  tracks, and pays out sales compensation. It's not your CRM. It's not your payroll system.
                  It's the specialized platform that turns "deals closed" into "comp earned."
                </p>
                <p>
                  SPM answers three questions:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white">What you earn</strong> - The payout calculation</li>
                  <li><strong className="text-white">When you get it</strong> - The payment timing</li>
                  <li><strong className="text-white">Why you earned it</strong> - The transaction audit trail</li>
                </ul>
              </div>
            </NoirCardContent>
          </NoirCard>

          {/* Core Components */}
          <NoirCard variant="elevated">
            <NoirCardContent className="p-12">
              <h2 className="text-headline-lg text-spm-purple mb-8">
                The Core Components
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-spm-purple pl-6 rounded-r-lg bg-spm-purple/5 p-6 -ml-6">
                  <h3 className="text-xl font-headline text-spm-purple mb-2">Comp Plan</h3>
                  <p className="text-gray-200 leading-relaxed">
                    The rules. Quotas, accelerators, splits, territories. What you need to do to earn what.
                  </p>
                </div>
                <div className="border-l-4 border-spm-copper pl-6 rounded-r-lg bg-spm-copper/5 p-6 -ml-6">
                  <h3 className="text-xl font-headline text-spm-copper mb-2">Data Pipeline</h3>
                  <p className="text-gray-200 leading-relaxed">
                    The plumbing. CRM deals, ERP revenue, manual adjustments. The data that flows in.
                  </p>
                </div>
                <div className="border-l-4 border-spm-orange pl-6 rounded-r-lg bg-spm-orange/5 p-6 -ml-6">
                  <h3 className="text-xl font-headline text-spm-orange mb-2">Calculation Engine</h3>
                  <p className="text-gray-200 leading-relaxed">
                    The math. Applies comp plan rules to data. Produces payout amounts.
                  </p>
                </div>
                <div className="border-l-4 border-spm-purple-light pl-6 rounded-r-lg bg-spm-purple-light/5 p-6 -ml-6">
                  <h3 className="text-xl font-headline text-spm-purple-light mb-2">Governance</h3>
                  <p className="text-gray-200 leading-relaxed">
                    The controls. Change management, approvals, audit trails. Prevents chaos.
                  </p>
                </div>
              </div>
            </NoirCardContent>
          </NoirCard>

          {/* Common Gotchas */}
          <NoirCard variant="elevated">
            <NoirCardContent className="p-12">
              <h2 className="text-headline-lg text-spm-purple mb-6">
                Common SPM Gotchas
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-headline text-white mb-2">
                    1. Accelerators ≠ Revenue Drivers
                  </h3>
                  <p className="text-gray-300">
                    Most teams think accelerators drive revenue growth. They don't. They drive deal timing.
                    Reps optimize when deals close, not which deals close. An accelerator cliff at 100% attainment
                    creates end-of-quarter timing games, not better selling.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-headline text-white mb-2">
                    2. "The System Will Handle It"
                  </h3>
                  <p className="text-gray-300">
                    No SPM system handles edge cases automatically. Split rules, territory overlaps, promotion timing -
                    every vendor claims their system "just works." They don't. You need governance, documentation, and
                    someone who knows what breaks.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-headline text-white mb-2">
                    3. Implementation ≠ The Demo
                  </h3>
                  <p className="text-gray-300">
                    Every SPM vendor demos beautifully. The sales engineer makes it look trivial. Then you get into
                    implementation and discover: your data is messy, your hierarchies are complex, your edge cases
                    aren't supported, and "configuration" means custom code.
                  </p>
                </div>
              </div>
            </NoirCardContent>
          </NoirCard>

          {/* Next Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NoirCard variant="interactive" hover>
              <NoirCardContent className="p-8 text-center">
                <NoirCardTitle className="mb-4">Dive Deeper</NoirCardTitle>
                <NoirCardDescription className="mb-6">
                  Explore the full SPM glossary. Terms, definitions, and real examples.
                </NoirCardDescription>
                <Link href="/learn/glossary" className="text-spm-purple hover:text-spm-purple-light font-semibold transition-colors">
                  Browse Glossary →
                </Link>
              </NoirCardContent>
            </NoirCard>

            <NoirCard variant="interactive" hover>
              <NoirCardContent className="p-8 text-center">
                <NoirCardTitle className="mb-4">Check Your Plan</NoirCardTitle>
                <NoirCardDescription className="mb-6">
                  Upload your comp plan and get instant risk analysis from The Toddfather.
                </NoirCardDescription>
                <Link href="/analyze/plan-check" className="text-spm-purple hover:text-spm-purple-light font-semibold transition-colors">
                  Run Plan Check →
                </Link>
              </NoirCardContent>
            </NoirCard>
          </div>
        </div>
      </section>
    </div>
  );
}
