import Link from 'next/link';
import Image from 'next/image';
import {
  NoirCard,
  NoirCardContent,
  NoirCardTitle,
  NoirCardDescription,
} from '@/components/spm/cards/NoirCard';
import {
  LearnIcon,
  AnalyzeIcon,
  BenchmarksIcon,
  VendorsIcon,
  CommunityIcon,
  ServicesIcon,
  UploadIcon,
  LibraryIcon,
  ScorecardIcon,
} from '@/components/spm/icons/NoirIcons';

export default function Homepage() {
  return (
    <div className="w-full">
      {/* Hero Section - Category Ownership */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background: Pure Noir Aesthetic with Toddfather Silhouette */}
        <div className="absolute inset-0 z-0">
          {/* Deep black base */}
          <div className="absolute inset-0 bg-spm-black" />

          {/* Toddfather noir panel - dramatic silhouette on left */}
          <Image
            src="/images/noir/toddfather_noir_panel_1_left.png"
            alt=""
            width={700}
            height={1050}
            className="absolute left-0 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none mix-blend-lighten"
            aria-hidden="true"
            priority
          />

          {/* Purple spotlight from top-right (film noir lighting) */}
          <div className="absolute inset-0 bg-gradient-to-bl from-spm-purple-dark/40 via-transparent to-spm-black" />

          {/* Orange accent from left (vintage warmth) */}
          <div className="absolute inset-0 bg-gradient-to-r from-spm-orange/5 via-transparent to-transparent" />

          {/* Dramatic purple glow center */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.2)_0%,transparent_50%)]" />

          {/* Crosshatch texture (woodcut effect) */}
          <div className="absolute inset-0 crosshatch opacity-30" />

          {/* Halftone dots */}
          <div className="absolute inset-0 halftone opacity-15" />

          {/* Dramatic vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,10,10,0.6)_70%,rgba(10,10,10,0.95)_100%)]" />

          {/* Bottom fade to black */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-spm-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-display text-transparent bg-clip-text bg-gradient-to-r from-spm-purple via-spm-copper to-spm-orange mb-6 drop-shadow-noir-lg">
            INTELLIGENT SPM
          </h1>

          <p className="text-headline-lg text-gray-100 mb-8 max-w-3xl mx-auto">
            The clearing house for sales compensation, governance, and
            performance truth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/analyze/plan-check"
              className="px-8 py-4 bg-gradient-to-r from-spm-purple to-spm-purple-light hover:from-spm-purple-light hover:to-spm-purple text-white text-lg font-semibold rounded-lg transition-all hover:shadow-purple-glow hover:scale-105 border border-spm-purple-light/30"
            >
              Run a Plan Check
            </Link>
            <Link
              href="/learn/library"
              className="px-8 py-4 border-2 border-spm-copper text-spm-copper hover:bg-spm-copper hover:text-spm-black text-lg font-semibold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(184,115,51,0.5)]"
            >
              Explore the SPM Library
            </Link>
          </div>

          {/* Proof bar */}
          <div className="flex items-center justify-center gap-3 text-sm">
            <span className="text-spm-copper">Tools</span>
            <span className="text-gray-600">•</span>
            <span className="text-spm-purple-light">Benchmarks</span>
            <span className="text-gray-600">•</span>
            <span className="text-spm-orange">Vendor Reality</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">Community</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-spm-purple-glow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Fast Paths (3 Tiles) */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-headline-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-spm-purple to-spm-copper mb-4">
          Start Here
        </h2>
        <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
          Three fast paths into the Intelligent SPM clearing house
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tile 1 */}
          <NoirCard variant="interactive" hover>
            <NoirCardContent className="p-8 text-center bg-gradient-to-br from-spm-purple/10 to-spm-black">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-spm-purple/20 rounded-full">
                <UploadIcon className="w-16 h-16 text-spm-purple" />
              </div>
              <NoirCardTitle className="text-spm-purple">Upload & Diagnose</NoirCardTitle>
              <NoirCardDescription className="text-gray-200">
                Run a Plan QA check in 60 seconds. Upload your comp plan and get instant risk scoring, governance recommendations, and implementation reality checks.
              </NoirCardDescription>
              <Link href="/analyze/plan-check" className="inline-block mt-6 text-spm-purple hover:text-spm-purple-light font-semibold transition-colors">
                Start Plan Check →
              </Link>
            </NoirCardContent>
          </NoirCard>

          {/* Tile 2 */}
          <NoirCard variant="interactive" hover>
            <NoirCardContent className="p-8 text-center bg-gradient-to-br from-spm-copper/10 to-spm-black">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-spm-copper/20 rounded-full">
                <LibraryIcon className="w-16 h-16 text-spm-copper" />
              </div>
              <NoirCardTitle className="text-spm-copper">SPM Component Cards</NoirCardTitle>
              <NoirCardDescription className="text-gray-200">
                Learn the building blocks of comp design. Deep dives on quotas, accelerators, splits, territories, hierarchies, and measures. Gotchas, best practices, and implementation guidance.
              </NoirCardDescription>
              <Link href="/learn/component-cards" className="inline-block mt-6 text-spm-copper hover:text-orange-300 font-semibold transition-colors">
                Browse Library →
              </Link>
            </NoirCardContent>
          </NoirCard>

          {/* Tile 3 */}
          <NoirCard variant="interactive" hover>
            <NoirCardContent className="p-8 text-center bg-gradient-to-br from-spm-orange/10 to-spm-black">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-spm-orange/20 rounded-full">
                <ScorecardIcon className="w-16 h-16 text-spm-orange" />
              </div>
              <NoirCardTitle className="text-spm-orange">Vendor Scorecards</NoirCardTitle>
              <NoirCardDescription className="text-gray-200">
                Who's good at what, who breaks where. Real implementation reality from actual rollouts. See what works, what doesn't, and why systems fail.
              </NoirCardDescription>
              <Link href="/vendors" className="inline-block mt-6 text-spm-orange hover:text-orange-300 font-semibold transition-colors">
                View Scorecards →
              </Link>
            </NoirCardContent>
          </NoirCard>
        </div>
      </section>

      {/* What We Are (6-lane grid) */}
      <section className="py-20 bg-spm-black-soft">
        <div className="container mx-auto px-6">
          <h2 className="text-headline-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-spm-purple to-spm-copper mb-4">
            What We Are
          </h2>
          <p className="text-center text-gray-200 mb-16 max-w-2xl mx-auto">
            The comprehensive SPM clearing house - six integrated capabilities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/learn">
              <NoirCard variant="interactive" hover className="h-full">
                <NoirCardContent className="p-8 text-center bg-gradient-to-br from-spm-purple/10 to-spm-black">
                  <div className="mb-6 flex items-center justify-center">
                    <LearnIcon className="w-20 h-20 text-spm-purple" />
                  </div>
                  <NoirCardTitle className="text-spm-purple">Learn</NoirCardTitle>
                  <NoirCardDescription>Glossary, guides, component cards</NoirCardDescription>
                </NoirCardContent>
              </NoirCard>
            </Link>

            <Link href="/analyze">
              <NoirCard variant="interactive" hover className="h-full">
                <NoirCardContent className="p-8 text-center bg-gradient-to-br from-spm-copper/10 to-spm-black">
                  <div className="mb-6 flex items-center justify-center">
                    <AnalyzeIcon className="w-20 h-20 text-spm-copper" />
                  </div>
                  <NoirCardTitle className="text-spm-copper">Analyze</NoirCardTitle>
                  <NoirCardDescription>Plan QA, risk scoring, simulators</NoirCardDescription>
                </NoirCardContent>
              </NoirCard>
            </Link>

            <Link href="/benchmarks">
              <NoirCard variant="interactive" hover className="h-full">
                <NoirCardContent className="p-8 text-center bg-gradient-to-br from-spm-orange/10 to-spm-black">
                  <div className="mb-6 flex items-center justify-center">
                    <BenchmarksIcon className="w-20 h-20 text-spm-orange" />
                  </div>
                  <NoirCardTitle className="text-spm-orange">Benchmarks</NoirCardTitle>
                  <NoirCardDescription>Curves, quota patterns, governance</NoirCardDescription>
                </NoirCardContent>
              </NoirCard>
            </Link>

            <Link href="/vendors">
              <NoirCard variant="interactive" hover className="h-full">
                <NoirCardContent className="p-8 text-center bg-gradient-to-br from-spm-purple-light/10 to-spm-black">
                  <div className="mb-6 flex items-center justify-center">
                    <VendorsIcon className="w-20 h-20 text-spm-purple-light" />
                  </div>
                  <NoirCardTitle className="text-spm-purple-light">Vendors</NoirCardTitle>
                  <NoirCardDescription>Scorecards, implementation reality</NoirCardDescription>
                </NoirCardContent>
              </NoirCard>
            </Link>

            <Link href="/syndicate">
              <NoirCard variant="interactive" hover className="h-full">
                <NoirCardContent className="p-8 text-center bg-gradient-to-br from-spm-purple/10 to-spm-black">
                  <div className="mb-6 flex items-center justify-center">
                    <CommunityIcon className="w-20 h-20 text-spm-purple" />
                  </div>
                  <NoirCardTitle className="text-spm-purple">Community</NoirCardTitle>
                  <NoirCardDescription>Syndicate, office hours, newsletter</NoirCardDescription>
                </NoirCardContent>
              </NoirCard>
            </Link>

            <Link href="/services">
              <NoirCard variant="interactive" hover className="h-full">
                <NoirCardContent className="p-8 text-center bg-gradient-to-br from-spm-copper/10 to-spm-black">
                  <div className="mb-6 flex items-center justify-center">
                    <ServicesIcon className="w-20 h-20 text-spm-copper" />
                  </div>
                  <NoirCardTitle className="text-spm-copper">Services</NoirCardTitle>
                  <NoirCardDescription>Assessment → redesign → governance</NoirCardDescription>
                </NoirCardContent>
              </NoirCard>
            </Link>
          </div>
        </div>
      </section>

      {/* SPM Reality Feed Preview */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-headline-lg text-transparent bg-clip-text bg-gradient-to-r from-spm-orange to-spm-copper mb-2">
              The SPM Reality
            </h2>
            <p className="text-gray-200">
              Latest insights on comp design, governance, and performance truth
            </p>
          </div>

          <div className="flex gap-2 mt-4 md:mt-0 flex-wrap">
            {['All', 'Comp Design', 'Governance', 'Analytics', 'AI'].map((filter) => (
              <button
                key={filter}
                className={
                  filter === 'All'
                    ? 'px-4 py-2 bg-spm-purple text-white text-sm rounded-lg font-semibold'
                    : 'px-4 py-2 bg-spm-black-soft border border-spm-purple-dark/30 text-gray-200 hover:text-white hover:border-spm-purple text-sm rounded-lg transition-colors'
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => {
            const colors = ['spm-purple', 'spm-copper', 'spm-orange'][i % 3];
            const colorClasses = {
              'spm-purple': { text: 'text-spm-purple', bg: 'bg-spm-purple/10', border: 'border-spm-purple/30' },
              'spm-copper': { text: 'text-spm-copper', bg: 'bg-spm-copper/10', border: 'border-spm-copper/30' },
              'spm-orange': { text: 'text-spm-orange', bg: 'bg-spm-orange/10', border: 'border-spm-orange/30' },
            }[colors] || { text: 'text-spm-purple', bg: 'bg-spm-purple/10', border: 'border-spm-purple/30' };

            return (
            <NoirCard key={i} variant="elevated">
              <NoirCardContent className={`p-6 border-l-4 ${colorClasses.border}`}>
                <div className={`text-xs ${colorClasses.text} font-semibold mb-2`}>
                  PODCAST • DEC {20 + i}, 2024
                </div>
                <NoirCardTitle className="text-xl mb-3 text-white">
                  Coming Soon: SPM Content
                </NoirCardTitle>
                <NoirCardDescription className="text-gray-200">
                  Episodes, articles, and insights from The Toddfather on SPM reality. Content will be populated from the studio and counsel library.
                </NoirCardDescription>
                <div className="mt-4 flex gap-2">
                  <span className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-xs rounded-full font-semibold`}>Governance</span>
                  <span className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-xs rounded-full font-semibold`}>Implementation</span>
                </div>
              </NoirCardContent>
            </NoirCard>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/learn/library" className="inline-block px-6 py-3 border-2 border-spm-purple text-spm-purple hover:bg-spm-purple hover:text-white rounded-lg font-semibold transition-all">
            View All Content
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-spm-purple-dark/20 via-spm-black to-spm-black border-t border-spm-purple-dark/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-headline-lg text-transparent bg-clip-text bg-gradient-to-r from-spm-purple via-spm-orange to-spm-copper mb-6">
            Ready to Check Your Plan?
          </h2>
          <p className="text-gray-100 mb-10 max-w-2xl mx-auto text-lg">
            Upload your comp plan and get instant risk scoring, governance recommendations, and implementation reality checks from The Toddfather.
          </p>
          <Link href="/analyze/plan-check" className="inline-block px-12 py-4 bg-gradient-to-r from-spm-purple to-spm-purple-light hover:from-spm-purple-light hover:to-spm-purple text-white text-lg font-semibold rounded-lg transition-all hover:shadow-purple-glow hover:scale-105 border border-spm-purple-light/30">
            Run a Plan Check — Free
          </Link>
        </div>
      </section>
    </div>
  );
}
