'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { NoirCard, NoirCardContent, NoirCardTitle } from '@/components/spm/cards/NoirCard';

export default function EditVendorPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    vendorName: '',
    slug: '',
    overallRating: 3.0,
    bestFor: '',
    worstFor: '',
    implementationReality: '',
    gotchas: '',
    easeScore: 3,
    flexibilityScore: 3,
    scaleScore: 3,
    uxScore: 3,
    integrationScore: 3,
  });

  useEffect(() => {
    loadVendor();
  }, []);

  const loadVendor = async () => {
    try {
      const res = await fetch(`/api/content/vendors/${params.id}`);
      if (res.ok) {
        const { vendor } = await res.json();
        const scores = vendor.scores as any;
        setFormData({
          vendorName: vendor.vendorName,
          slug: vendor.slug,
          overallRating: vendor.overallRating,
          bestFor: vendor.bestFor.join(', '),
          worstFor: vendor.worstFor.join(', '),
          implementationReality: vendor.implementationReality,
          gotchas: vendor.gotchas.join(', '),
          easeScore: scores?.ease || 3,
          flexibilityScore: scores?.flexibility || 3,
          scaleScore: scores?.scale || 3,
          uxScore: scores?.ux || 3,
          integrationScore: scores?.integration || 3,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`/api/content/vendors/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vendorName: formData.vendorName,
          slug: formData.slug,
          overallRating: formData.overallRating,
          bestFor: formData.bestFor.split(',').map(b => b.trim()).filter(Boolean),
          worstFor: formData.worstFor.split(',').map(w => w.trim()).filter(Boolean),
          implementationReality: formData.implementationReality,
          gotchas: formData.gotchas.split(',').map(g => g.trim()).filter(Boolean),
          scores: {
            ease: formData.easeScore,
            flexibility: formData.flexibilityScore,
            scale: formData.scaleScore,
            ux: formData.uxScore,
            integration: formData.integrationScore,
          },
        }),
      });

      if (res.ok) {
        router.push('/studio/content/vendors');
      } else {
        alert('Failed to update vendor');
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="max-w-4xl mx-auto px-6 py-12"><p className="text-gray-400">Loading...</p></div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-headline text-white mb-8">Edit Vendor Scorecard</h1>
      <NoirCard variant="elevated">
        <NoirCardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-headline text-gray-300 mb-2">Vendor Name *</label>
              <input type="text" required value={formData.vendorName} onChange={(e) => setFormData({ ...formData, vendorName: e.target.value })} className="w-full px-4 py-3 bg-spm-black border-2 border-spm-purple-dark/30 rounded-lg text-white focus:border-spm-purple outline-none" />
            </div>

            <div>
              <label className="block text-sm font-headline text-gray-300 mb-2">Overall Rating</label>
              <div className="flex items-center gap-4">
                <input type="range" min="1" max="5" step="0.5" value={formData.overallRating} onChange={(e) => setFormData({ ...formData, overallRating: parseFloat(e.target.value) })} className="flex-1" />
                <span className="text-2xl text-spm-purple font-bold w-16 text-right">{formData.overallRating}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-headline text-gray-300 mb-2">Best For *</label>
              <input type="text" required value={formData.bestFor} onChange={(e) => setFormData({ ...formData, bestFor: e.target.value })} className="w-full px-4 py-3 bg-spm-black border-2 border-spm-purple-dark/30 rounded-lg text-white focus:border-spm-purple outline-none" />
            </div>

            <div>
              <label className="block text-sm font-headline text-gray-300 mb-2">Worst For *</label>
              <input type="text" required value={formData.worstFor} onChange={(e) => setFormData({ ...formData, worstFor: e.target.value })} className="w-full px-4 py-3 bg-spm-black border-2 border-spm-purple-dark/30 rounded-lg text-white focus:border-spm-purple outline-none" />
            </div>

            <div>
              <label className="block text-sm font-headline text-gray-300 mb-2">Implementation Reality *</label>
              <textarea required rows={4} value={formData.implementationReality} onChange={(e) => setFormData({ ...formData, implementationReality: e.target.value })} className="w-full px-4 py-3 bg-spm-black border-2 border-spm-purple-dark/30 rounded-lg text-white focus:border-spm-purple outline-none resize-none" />
            </div>

            <div className="flex gap-4 pt-4">
              <button type="submit" disabled={saving} className="flex-1 px-8 py-4 bg-spm-purple hover:bg-spm-purple-light text-white text-lg font-semibold rounded-lg transition-all disabled:opacity-50">
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
              <button type="button" onClick={() => router.back()} className="px-8 py-4 border-2 border-spm-purple-dark/30 text-gray-300 hover:text-white rounded-lg font-semibold">Cancel</button>
            </div>
          </form>
        </NoirCardContent>
      </NoirCard>
    </div>
  );
}
