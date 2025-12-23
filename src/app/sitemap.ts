import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.intelligentspm.com'

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/learn`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/learn/spm-101`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/learn/glossary`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/learn/library`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/learn/component-cards`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/analyze`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/analyze/plan-check`, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/analyze/deal-payout`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/analyze/splits`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/benchmarks`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/benchmarks/payout-curves`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/benchmarks/quota-patterns`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/benchmarks/governance-maturity`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/vendors`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/vendors/scorecards`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/vendors/implementation-reality`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/syndicate`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/services/assessment`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/services/redesign`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/subscribe`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/search`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/toddfather`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/toddfather/podcast`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/toddfather/speaking`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/start`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/legal/privacy`, lastModified: new Date(), priority: 0.5 },
    { url: `${baseUrl}/legal/terms`, lastModified: new Date(), priority: 0.5 },
  ]
}
