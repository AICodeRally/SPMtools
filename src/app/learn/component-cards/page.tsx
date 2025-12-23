import Link from 'next/link';
import { NoirCard, NoirCardContent, NoirCardTitle, NoirCardDescription } from '@/components/spm/cards/NoirCard';
import { prisma } from '@/lib/db';

export const metadata = {
  title: 'SPM Component Cards | Learn',
  description: 'Deep dives on every SPM element: quotas, accelerators, splits, territories, hierarchies.',
};

async function getComponentCards() {
  const cards = await prisma.componentCard.findMany({
    orderBy: { name: 'asc' },
  });
  return cards;
}

export default async function ComponentCardsPage() {
  const cards = await getComponentCards();

  return (
    <div className="w-full">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-spm-black via-spm-purple-dark/20 to-spm-black" />
          <div className="absolute inset-0 crosshatch opacity-30" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-display text-transparent bg-clip-text bg-gradient-to-r from-spm-copper via-spm-purple to-spm-orange mb-6">COMPONENT CARDS</h1>
          <p className="text-headline text-gray-100 max-w-3xl mx-auto">
            The building blocks of comp design. Every element explained.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-spm-black-soft border-y border-spm-purple-dark/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {['All', 'Plan Elements', 'Rule Types', 'Admin Objects', 'Calculations', 'Hierarchies'].map((filter) => (
              <button
                key={filter}
                className={
                  filter === 'All'
                    ? 'px-4 py-2 bg-spm-purple text-white text-sm rounded-lg font-semibold'
                    : 'px-4 py-2 bg-spm-black border border-spm-purple-dark/30 text-gray-300 hover:text-white hover:border-spm-purple text-sm rounded-lg transition-colors'
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Component Cards Grid */}
      <section className="py-20 container mx-auto px-6">
        {cards.length === 0 ? (
          <div className="max-w-2xl mx-auto">
            <NoirCard variant="elevated">
              <NoirCardContent className="p-12 text-center">
                <h2 className="text-2xl font-headline bg-gradient-to-r from-spm-purple to-spm-orange bg-clip-text text-transparent mb-4">
                  Component Cards Coming Soon
                </h2>
                <p className="text-gray-200 mb-6">
                  The Toddfather is building deep-dive cards on every SPM component.
                  Check back soon for:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
                  <div className="flex items-start gap-2 bg-spm-purple/5 p-3 rounded-lg">
                    <span className="text-spm-purple flex-shrink-0">•</span>
                    <span className="text-gray-300">Quotas (types, allocation, gotchas)</span>
                  </div>
                  <div className="flex items-start gap-2 bg-spm-copper/5 p-3 rounded-lg">
                    <span className="text-spm-copper flex-shrink-0">•</span>
                    <span className="text-gray-300">Accelerators (curves, cliffs, timing)</span>
                  </div>
                  <div className="flex items-start gap-2 bg-spm-orange/5 p-3 rounded-lg">
                    <span className="text-spm-orange flex-shrink-0">•</span>
                    <span className="text-gray-300">Splits (rules, overlays, credit)</span>
                  </div>
                  <div className="flex items-start gap-2 bg-spm-purple-light/5 p-3 rounded-lg">
                    <span className="text-spm-purple-light flex-shrink-0">•</span>
                    <span className="text-gray-300">Territories (coverage, routing, gaps)</span>
                  </div>
                  <div className="flex items-start gap-2 bg-spm-purple/5 p-3 rounded-lg">
                    <span className="text-spm-purple flex-shrink-0">•</span>
                    <span className="text-gray-300">Hierarchies (rollups, reporting, calc)</span>
                  </div>
                  <div className="flex items-start gap-2 bg-spm-copper/5 p-3 rounded-lg">
                    <span className="text-spm-copper flex-shrink-0">•</span>
                    <span className="text-gray-300">Measures (bookings, revenue, ARR)</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/syndicate" className="inline-block px-8 py-3 bg-spm-purple hover:bg-spm-purple-light text-white rounded-lg font-semibold transition-all">
                    Join Syndicate for Updates
                  </Link>
                </div>
              </NoirCardContent>
            </NoirCard>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cards.map((card, idx) => {
              // Dynamic color mapping for categories
              const colorMap: { [key: string]: { bg: string; text: string; accent: string } } = {
                'Plan Elements': { bg: 'bg-spm-purple/10', text: 'text-spm-purple', accent: 'text-spm-purple' },
                'Rule Types': { bg: 'bg-spm-copper/10', text: 'text-spm-copper', accent: 'text-spm-copper' },
                'Admin Objects': { bg: 'bg-spm-orange/10', text: 'text-spm-orange', accent: 'text-spm-orange' },
                'Calculations': { bg: 'bg-spm-purple-light/10', text: 'text-spm-purple-light', accent: 'text-spm-purple-light' },
                'Hierarchies': { bg: 'bg-spm-copper/10', text: 'text-spm-copper', accent: 'text-spm-copper' },
              };
              const colors = colorMap[card.category] || { bg: 'bg-spm-purple/10', text: 'text-spm-purple', accent: 'text-spm-purple' };

              return (
              <NoirCard key={card.id} variant="interactive" hover>
                <NoirCardContent className="p-6">
                  <div className="mb-3">
                    <span className={`text-xs px-3 py-1 ${colors.bg} ${colors.text} rounded-full font-semibold`}>
                      {card.category}
                    </span>
                  </div>
                  <NoirCardTitle className="text-xl mb-3 text-white">
                    {card.name}
                  </NoirCardTitle>
                  <NoirCardDescription className="mb-4 text-gray-200">
                    {card.description}
                  </NoirCardDescription>

                  {card.bestFor.length > 0 && (
                    <div className="mb-3 bg-green-500/10 rounded-lg p-3">
                      <p className={`text-xs font-headline text-green-300 mb-1 font-semibold`}>✓ Best For:</p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {card.bestFor.slice(0, 2).map((item: string, i: number) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {card.gotchas.length > 0 && (
                    <div className="bg-amber-500/10 rounded-lg p-3">
                      <p className={`text-xs font-headline text-amber-300 mb-1 font-semibold`}>⚠ Gotchas:</p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {card.gotchas.slice(0, 2).map((item: string, i: number) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </NoirCardContent>
              </NoirCard>
            );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
