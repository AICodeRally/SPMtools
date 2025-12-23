import Link from 'next/link';
import { NoirCard, NoirCardContent, NoirCardTitle, NoirCardDescription } from '@/components/spm/cards/NoirCard';

export const metadata = {
  title: 'Get Started | Intelligent SPM',
  description: 'Start your SPM journey. Tools, content, and guidance from The Toddfather.',
};

export default function StartPage() {
  return (
    <div className="w-full">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-spm-black via-spm-purple-dark/30 to-spm-black" />
          <div className="absolute inset-0 crosshatch opacity-40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-display text-white mb-6">GET STARTED</h1>
          <p className="text-headline-lg text-gray-200 mb-12 max-w-3xl mx-auto">
            Three paths into Intelligent SPM. Pick your entry point.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Path 1: I Need Help Now */}
            <NoirCard variant="interactive" hover>
              <NoirCardContent className="p-8 text-center">
                <div className="text-5xl mb-6">🚨</div>
                <NoirCardTitle className="mb-4">I Need Help Now</NoirCardTitle>
                <NoirCardDescription className="mb-6">
                  Your comp plan is broken, your rollout is failing, or you're evaluating vendors.
                  Get immediate analysis.
                </NoirCardDescription>
                <div className="space-y-3">
                  <Link
                    href="/analyze/plan-check"
                    className="block px-6 py-3 bg-spm-purple hover:bg-spm-purple-light text-white rounded-lg font-semibold transition-all"
                  >
                    Check My Plan
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-sm text-spm-purple hover:text-spm-purple-light transition-colors"
                  >
                    Or contact The Toddfather →
                  </Link>
                </div>
              </NoirCardContent>
            </NoirCard>

            {/* Path 2: I'm Learning SPM */}
            <NoirCard variant="interactive" hover>
              <NoirCardContent className="p-8 text-center">
                <div className="text-5xl mb-6">📚</div>
                <NoirCardTitle className="mb-4">I'm Learning SPM</NoirCardTitle>
                <NoirCardDescription className="mb-6">
                  New to Sales Performance Management or want to level up your knowledge.
                  Start with the fundamentals.
                </NoirCardDescription>
                <div className="space-y-3">
                  <Link
                    href="/learn/spm-101"
                    className="block px-6 py-3 bg-spm-purple hover:bg-spm-purple-light text-white rounded-lg font-semibold transition-all"
                  >
                    SPM 101
                  </Link>
                  <Link
                    href="/learn/glossary"
                    className="block text-sm text-spm-purple hover:text-spm-purple-light transition-colors"
                  >
                    Browse Glossary →
                  </Link>
                </div>
              </NoirCardContent>
            </NoirCard>

            {/* Path 3: I Want The Reality */}
            <NoirCard variant="interactive" hover>
              <NoirCardContent className="p-8 text-center">
                <div className="text-5xl mb-6">🎙️</div>
                <NoirCardTitle className="mb-4">I Want The Reality</NoirCardTitle>
                <NoirCardDescription className="mb-6">
                  Skip the fluff. Get vendor truth, implementation gotchas, and SPM patterns that work.
                  Join The Syndicate.
                </NoirCardDescription>
                <div className="space-y-3">
                  <Link
                    href="/syndicate"
                    className="block px-6 py-3 bg-spm-purple hover:bg-spm-purple-light text-white rounded-lg font-semibold transition-all"
                  >
                    Join The Syndicate
                  </Link>
                  <Link
                    href="/toddfather/podcast"
                    className="block text-sm text-spm-purple hover:text-spm-purple-light transition-colors"
                  >
                    Listen to Podcast →
                  </Link>
                </div>
              </NoirCardContent>
            </NoirCard>
          </div>

          {/* Or Browse */}
          <div className="mt-16">
            <p className="text-gray-400 mb-4">Or explore everything:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/learn" className="px-4 py-2 bg-spm-black-soft border border-spm-purple-dark/30 text-gray-300 hover:border-spm-purple rounded-lg text-sm transition-colors">
                Learn
              </Link>
              <Link href="/analyze" className="px-4 py-2 bg-spm-black-soft border border-spm-purple-dark/30 text-gray-300 hover:border-spm-purple rounded-lg text-sm transition-colors">
                Tools
              </Link>
              <Link href="/benchmarks" className="px-4 py-2 bg-spm-black-soft border border-spm-purple-dark/30 text-gray-300 hover:border-spm-purple rounded-lg text-sm transition-colors">
                Benchmarks
              </Link>
              <Link href="/vendors" className="px-4 py-2 bg-spm-black-soft border border-spm-purple-dark/30 text-gray-300 hover:border-spm-purple rounded-lg text-sm transition-colors">
                Vendors
              </Link>
              <Link href="/services" className="px-4 py-2 bg-spm-black-soft border border-spm-purple-dark/30 text-gray-300 hover:border-spm-purple rounded-lg text-sm transition-colors">
                Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
