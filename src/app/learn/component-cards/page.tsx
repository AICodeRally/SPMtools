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
          <h1 className="text-display text-white mb-6">COMPONENT CARDS</h1>
          <p className="text-headline text-gray-200 max-w-3xl mx-auto">
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
                <h2 className="text-2xl font-headline text-spm-purple mb-4">
                  Component Cards Coming Soon
                </h2>
                <p className="text-gray-300 mb-6">
                  The Toddfather is building deep-dive cards on every SPM component.
                  Check back soon for:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
                  <div className="flex items-start gap-2">
                    <span className="text-spm-purple">•</span>
                    <span className="text-gray-400">Quotas (types, allocation, gotchas)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-spm-purple">•</span>
                    <span className="text-gray-400">Accelerators (curves, cliffs, timing)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-spm-purple">•</span>
                    <span className="text-gray-400">Splits (rules, overlays, credit)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-spm-purple">•</span>
                    <span className="text-gray-400">Territories (coverage, routing, gaps)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-spm-purple">•</span>
                    <span className="text-gray-400">Hierarchies (rollups, reporting, calc)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-spm-purple">•</span>
                    <span className="text-gray-400">Measures (bookings, revenue, ARR)</span>
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
            {cards.map((card) => (
              <NoirCard key={card.id} variant="interactive" hover>
                <NoirCardContent className="p-6">
                  <div className="mb-3">
                    <span className="text-xs px-2 py-1 bg-spm-purple/20 text-spm-purple rounded">
                      {card.category}
                    </span>
                  </div>
                  <NoirCardTitle className="text-xl mb-3">
                    {card.name}
                  </NoirCardTitle>
                  <NoirCardDescription className="mb-4">
                    {card.description}
                  </NoirCardDescription>

                  {card.bestFor.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-headline text-green-400 mb-1">Best For:</p>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {card.bestFor.slice(0, 2).map((item: string, i: number) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {card.gotchas.length > 0 && (
                    <div>
                      <p className="text-xs font-headline text-amber-400 mb-1">Gotchas:</p>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {card.gotchas.slice(0, 2).map((item: string, i: number) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </NoirCardContent>
              </NoirCard>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
