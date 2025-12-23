'use client';

import { useState } from 'react';
import { NoirCard, NoirCardContent, NoirCardTitle } from '@/components/spm/cards/NoirCard';

export default function DealPayoutCalculatorPage() {
  const [inputs, setInputs] = useState({
    dealSize: 100000,
    quota: 1000000,
    baseSalary: 80000,
    ote: 160000,
    acceleratorThreshold: 100,
    acceleratorRate: 2.0,
    currentAttainment: 85,
  });

  const [results, setResults] = useState<any>(null);

  const calculate = () => {
    const variable = inputs.ote - inputs.baseSalary;
    const commission = variable / inputs.quota;

    // Calculate current attainment after this deal
    const currentEarned = (inputs.quota * inputs.currentAttainment) / 100;
    const newTotal = currentEarned + inputs.dealSize;
    const newAttainment = (newTotal / inputs.quota) * 100;

    // Calculate payout based on curve
    let payout = 0;

    if (newAttainment >= inputs.acceleratorThreshold) {
      // Deal pushes over accelerator threshold
      const acceleratedPortion = newTotal - ((inputs.acceleratorThreshold / 100) * inputs.quota);
      const normalPortion = newTotal - acceleratedPortion;
      payout = (normalPortion * commission) + (acceleratedPortion * commission * inputs.acceleratorRate);
    } else {
      // Below threshold
      payout = newTotal * commission;
    }

    const previousPayout = currentEarned * commission;
    const incrementalPayout = payout - previousPayout;

    setResults({
      incrementalPayout,
      totalPayout: payout,
      newAttainment,
      crossedThreshold: inputs.currentAttainment < inputs.acceleratorThreshold && newAttainment >= inputs.acceleratorThreshold,
      effectiveRate: (incrementalPayout / inputs.dealSize) * 100,
    });
  };

  return (
    <div className="w-full">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-spm-black via-spm-purple-dark/20 to-spm-black" />
          <div className="absolute inset-0 crosshatch opacity-30" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-display text-white mb-6">DEAL PAYOUT</h1>
          <p className="text-headline text-gray-200 max-w-3xl mx-auto">
            Model individual deal payouts. See the math before the reps do.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <NoirCard variant="elevated">
              <NoirCardContent className="p-8">
                <NoirCardTitle className="mb-6">Deal & Comp Parameters</NoirCardTitle>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Deal Size ($)</label>
                    <input
                      type="number"
                      value={inputs.dealSize}
                      onChange={(e) => setInputs({ ...inputs, dealSize: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 bg-spm-black border-2 border-spm-purple-dark/30 rounded-lg text-white focus:border-spm-purple outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Annual Quota ($)</label>
                    <input
                      type="number"
                      value={inputs.quota}
                      onChange={(e) => setInputs({ ...inputs, quota: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 bg-spm-black border-2 border-spm-purple-dark/30 rounded-lg text-white focus:border-spm-purple outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Base Salary ($)</label>
                    <input
                      type="number"
                      value={inputs.baseSalary}
                      onChange={(e) => setInputs({ ...inputs, baseSalary: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 bg-spm-black border-2 border-spm-purple-dark/30 rounded-lg text-white focus:border-spm-purple outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Target OTE ($)</label>
                    <input
                      type="number"
                      value={inputs.ote}
                      onChange={(e) => setInputs({ ...inputs, ote: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 bg-spm-black border-2 border-spm-purple-dark/30 rounded-lg text-white focus:border-spm-purple outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Accelerator Threshold (%)</label>
                    <input
                      type="number"
                      value={inputs.acceleratorThreshold}
                      onChange={(e) => setInputs({ ...inputs, acceleratorThreshold: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 bg-spm-black border-2 border-spm-purple-dark/30 rounded-lg text-white focus:border-spm-purple outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Accelerator Rate (multiplier)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={inputs.acceleratorRate}
                      onChange={(e) => setInputs({ ...inputs, acceleratorRate: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 bg-spm-black border-2 border-spm-purple-dark/30 rounded-lg text-white focus:border-spm-purple outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Current Attainment (%)</label>
                    <input
                      type="number"
                      value={inputs.currentAttainment}
                      onChange={(e) => setInputs({ ...inputs, currentAttainment: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 bg-spm-black border-2 border-spm-purple-dark/30 rounded-lg text-white focus:border-spm-purple outline-none"
                    />
                  </div>

                  <button
                    onClick={calculate}
                    className="w-full px-8 py-4 bg-spm-purple hover:bg-spm-purple-light text-white text-lg font-semibold rounded-lg transition-all hover:shadow-purple-glow"
                  >
                    Calculate Payout
                  </button>
                </div>
              </NoirCardContent>
            </NoirCard>

            {/* Results */}
            <div className="space-y-6">
              {results ? (
                <>
                  <NoirCard variant="elevated">
                    <NoirCardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="text-5xl font-display text-spm-purple mb-2">
                          ${results.incrementalPayout.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                        <p className="text-gray-400">Incremental Payout</p>
                      </div>

                      <div className="space-y-4 pt-6 border-t border-spm-purple-dark/20">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">New Attainment:</span>
                          <span className="text-white font-semibold">{results.newAttainment.toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Total Payout YTD:</span>
                          <span className="text-white font-semibold">${results.totalPayout.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Effective Rate:</span>
                          <span className="text-white font-semibold">{results.effectiveRate.toFixed(2)}%</span>
                        </div>
                      </div>

                      {results.crossedThreshold && (
                        <div className="mt-6 p-4 bg-spm-purple/20 border border-spm-purple rounded-lg">
                          <p className="text-sm text-spm-purple-light font-semibold">
                            🎯 This deal crosses the accelerator threshold!
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Rep earns {inputs.acceleratorRate}x on accelerated portion.
                          </p>
                        </div>
                      )}
                    </NoirCardContent>
                  </NoirCard>

                  <NoirCard variant="elevated">
                    <NoirCardContent className="p-6">
                      <h3 className="text-lg font-headline text-spm-purple mb-3">Timing Analysis</h3>
                      <p className="text-sm text-gray-300">
                        {results.crossedThreshold
                          ? 'This deal creates a timing incentive. Rep may push to close before period end to capture the accelerator.'
                          : results.newAttainment > 95 && results.newAttainment < inputs.acceleratorThreshold
                          ? 'Rep is approaching accelerator threshold. Timing manipulation risk on next deals.'
                          : 'No accelerator timing issues with this deal.'}
                      </p>
                    </NoirCardContent>
                  </NoirCard>
                </>
              ) : (
                <NoirCard variant="elevated">
                  <NoirCardContent className="p-12 text-center">
                    <p className="text-gray-400">
                      Enter deal parameters and click "Calculate Payout" to see the math.
                    </p>
                  </NoirCardContent>
                </NoirCard>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
