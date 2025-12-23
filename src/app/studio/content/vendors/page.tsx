'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NoirCard, NoirCardContent, NoirCardTitle } from '@/components/spm/cards/NoirCard';

export default function VendorsAdminPage() {
  const [vendors, setVendors] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/content/vendors').then(r => r.json()).then(d => setVendors(d.vendors || []));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this vendor?')) return;
    await fetch(`/api/content/vendors/${id}`, { method: 'DELETE' });
    setVendors(vendors.filter(v => v.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between mb-12">
        <h1 className="text-4xl font-headline text-white">Vendor Scorecards</h1>
        <Link href="/studio/content/vendors/new" className="px-6 py-3 bg-spm-purple hover:bg-spm-purple-light text-white rounded-lg font-semibold">
          + Add Vendor
        </Link>
      </div>
      <div className="space-y-4">
        {vendors.map(v => (
          <NoirCard key={v.id} variant="elevated">
            <NoirCardContent className="p-6 flex justify-between items-start">
              <div>
                <NoirCardTitle>{v.vendorName}</NoirCardTitle>
                <p className="text-sm text-gray-400">Rating: {v.overallRating}/5</p>
              </div>
              <div className="flex gap-2">
                <Link href={`/studio/content/vendors/${v.id}`} className="px-4 py-2 bg-spm-black-soft border border-spm-purple-dark/30 text-gray-300 rounded text-sm">Edit</Link>
                <button onClick={() => handleDelete(v.id)} className="px-4 py-2 bg-red-950/20 border border-red-800/30 text-red-400 rounded text-sm">Delete</button>
              </div>
            </NoirCardContent>
          </NoirCard>
        ))}
      </div>
    </div>
  );
}
