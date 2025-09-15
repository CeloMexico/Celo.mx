'use client';
import { openTransak } from '@/lib/ramps/transak';
import { openOnramper } from '@/lib/ramps/onramper';
import { useState } from 'react';

export default function RampLauncher() {
  const [provider, setProvider] = useState<'transak' | 'onramper'>('transak');
  return (
    <div className="celo-card celo-border rounded-2xl p-4 inline-flex items-center gap-3">
      <select
        value={provider}
        onChange={(e) => setProvider(e.target.value as any)}
        className="celo-border rounded-lg px-3 py-2 text-sm bg-transparent"
      >
        <option value="transak">Transak</option>
        <option value="onramper">Onramper</option>
      </select>
      <button
        className="rounded-lg bg-black text-white px-4 py-2"
        onClick={() => (provider === 'transak' ? openTransak() : openOnramper())}
      >
        Launch
      </button>
    </div>
  );
}



