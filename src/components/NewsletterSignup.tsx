'use client';

import { useState } from 'react';
import { NoirCard, NoirCardContent } from './spm/cards/NoirCard';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribing(true);

    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'syndicate' }),
      });

      if (res.ok) {
        setSuccess(true);
        setEmail('');
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      alert('Subscription failed. Please try again.');
    } finally {
      setSubscribing(false);
    }
  };

  if (success) {
    return (
      <NoirCard variant="elevated">
        <NoirCardContent className="p-12 text-center">
          <div className="mb-4">
            <svg className="w-16 h-16 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-headline-lg text-white mb-4">
            You're In
          </h2>
          <p className="text-gray-300 mb-2">
            Check your email for a welcome message from The Toddfather.
          </p>
          <p className="text-sm text-gray-500">
            First SPM Reality digest drops next week.
          </p>
        </NoirCardContent>
      </NoirCard>
    );
  }

  return (
    <NoirCard variant="interactive" hover>
      <NoirCardContent className="p-12 text-center">
        <h2 className="text-headline-lg text-white mb-4">
          Join The Syndicate
        </h2>
        <p className="text-gray-300 mb-8">
          Free. No spam. Just SPM reality delivered weekly.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-6 py-4 bg-spm-black border-2 border-spm-purple-dark/30 rounded-lg text-white placeholder-gray-500 focus:border-spm-purple outline-none mb-4 transition-colors"
          />
          <button
            type="submit"
            disabled={subscribing}
            className="w-full px-8 py-4 bg-spm-purple hover:bg-spm-purple-light text-white font-semibold rounded-lg transition-all hover:shadow-purple-glow disabled:opacity-50"
          >
            {subscribing ? 'Subscribing...' : 'Subscribe to The Syndicate'}
          </button>
        </form>
      </NoirCardContent>
    </NoirCard>
  );
}
