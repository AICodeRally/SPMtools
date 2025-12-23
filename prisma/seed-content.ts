import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient({ accelerateUrl: process.env.POSTGRES_PRISMA_URL }).$extends(withAccelerate())

async function main() {
  console.log('Seeding SPM content...')

  // Seed Glossary Terms
  const glossaryTerms = [
    {
      term: 'Accelerator',
      definition: 'A payout multiplier that increases when performance exceeds a threshold. Commonly misunderstood as a revenue driver - actually a timing device that shapes when deals close, not which deals close.',
      category: 'Comp Design',
      aliases: ['Kicker', 'Multiplier', 'Uplift'],
      relatedTerms: ['Quota', 'Payout Curve', 'Attainment'],
      examples: '100% accelerator at 100% quota means earning 2x on revenue beyond quota.',
    },
    {
      term: 'Quota',
      definition: 'The performance target used to calculate comp payout. Not the same as a forecast, a goal, or capacity. Quota is the number that determines what you earn.',
      category: 'Comp Design',
      aliases: ['Target', 'Goal (incorrect)'],
      relatedTerms: ['Attainment', 'Accelerator', 'Territory'],
      examples: 'Annual quota of $1M ARR for an Enterprise AE. Hit $1M = 100% attainment.',
    },
  ];

  for (const term of glossaryTerms) {
    await prisma.glossaryTerm.upsert({
      where: { term: term.term },
      update: term,
      create: term,
    });
  }

  // Seed Vendor Scorecards
  const vendors = [
    {
      vendorName: 'Xactly',
      slug: 'xactly',
      overallRating: 3.5,
      bestFor: ['Enterprise scale', 'Complex hierarchies', 'Regulatory compliance'],
      worstFor: ['Fast iteration', 'Modern UX', 'API flexibility'],
      implementationReality: 'Xactly is the enterprise workhorse. Handles massive scale and complex comp structures, but UI feels dated and implementation cycles are long.',
      gotchas: ['Long implementation times (6-12 months)', 'Expensive professional services', 'Dated user interface'],
      scores: { ease: 2, flexibility: 4, scale: 5, ux: 2, integration: 3 },
    },
    {
      vendorName: 'CaptivateIQ',
      slug: 'captivateiq',
      overallRating: 4.0,
      bestFor: ['Modern UI/UX', 'Fast implementation', 'Technical teams'],
      worstFor: ['Mega-enterprise scale', 'Legacy integrations'],
      implementationReality: 'Best modern SPM platform for mid-market to enterprise. Clean UI, fast setup, great for technical teams. Still maturing on mega-scale scenarios.',
      gotchas: ['Pricing can get expensive at scale', 'Less mature than Xactly/Varicent', 'Custom integrations may require dev work'],
      scores: { ease: 5, flexibility: 4, scale: 3, ux: 5, integration: 4 },
    },
  ];

  for (const vendor of vendors) {
    await prisma.vendorScorecard.upsert({
      where: { slug: vendor.slug },
      update: vendor,
      create: vendor,
    });
  }

  console.log('✓ Seeded glossary terms:', glossaryTerms.length);
  console.log('✓ Seeded vendor scorecards:', vendors.length);
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
