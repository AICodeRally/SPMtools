'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NoirCard, NoirCardContent, NoirCardTitle, NoirCardDescription } from '@/components/spm/cards/NoirCard';

export default function ComponentsAdminPage() {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/content/components').then(r => r.json()).then(d => setCards(d.cards || []));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this component card?')) return;
    await fetch(`/api/content/components/${id}`, { method: 'DELETE' });
    setCards(cards.filter(c => c.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between mb-12">
        <h1 className="text-4xl font-headline text-white">Component Cards</h1>
        <Link href="/studio/content/components/new" className="px-6 py-3 bg-spm-purple hover:bg-spm-purple-light text-white rounded-lg font-semibold">
          + Add Component
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(c => (
          <NoirCard key={c.id} variant="elevated">
            <NoirCardContent className="p-6">
              <div className="mb-3">
                <NoirCardTitle className="text-lg mb-2">{c.name}</NoirCardTitle>
                <span className="text-xs px-2 py-1 bg-spm-purple/20 text-spm-purple rounded">{c.category}</span>
              </div>
              <NoirCardDescription className="mb-4">{c.description.substring(0, 120)}...</NoirCardDescription>
              <div className="flex gap-2 pt-3 border-t border-spm-purple-dark/20">
                <Link href={`/studio/content/components/${c.id}`} className="flex-1 px-3 py-2 bg-spm-black-soft border border-spm-purple-dark/30 text-gray-300 rounded text-sm text-center">Edit</Link>
                <button onClick={() => handleDelete(c.id)} className="px-3 py-2 bg-red-950/20 border border-red-800/30 text-red-400 rounded text-sm">Delete</button>
              </div>
            </NoirCardContent>
          </NoirCard>
        ))}
      </div>
    </div>
  );
}
