'use client';
import { usePrivy } from '@privy-io/react-auth';

// Force dynamic rendering to avoid Privy issues during build
export const dynamic = 'force-dynamic';
import Section from '@/components/Section';
import { useEffect, useState } from 'react';
import { getAddress, createPublicClient, http, Chain } from 'viem';

const celo: Chain = {
  id: 42220,
  name: 'Celo',
  nativeCurrency: { name: 'CELO', symbol: 'CELO', decimals: 18 },
  rpcUrls: { default: { http: ['https://forno.celo.org'] } },
};

export default function DashboardPage() {
  const { authenticated, login, user, ready } = usePrivy();
  const [chainId, setChainId] = useState<number | null>(null);

  useEffect(() => {
    const client = createPublicClient({ chain: celo, transport: http() });
    client.getChainId().then(setChainId).catch(() => setChainId(null));
  }, []);

  if (!ready) return null;
  if (!authenticated) {
    return (
      <Section title="Dashboard protegido">
        <p className="mb-4">Inicia sesión para continuar.</p>
        <button className="px-4 py-2 rounded-lg bg-black text-white" onClick={login}>Conectar</button>
      </Section>
    );
  }

  const addr = user?.wallet?.address ? getAddress(user.wallet.address) : '—';

  return (
    <div className="space-y-10 pb-24">
      <Section title="Tu progreso on-chain" subtitle="Mock de retos y estado de cuenta">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="celo-card celo-border border rounded-2xl p-6">
            <div className="text-sm opacity-70">Chain ID</div>
            <div className="text-2xl font-display">{chainId ?? '—'}</div>
          </div>
          <div className="celo-card celo-border border rounded-2xl p-6">
            <div className="text-sm opacity-70">Wallet</div>
            <div className="text-2xl break-all font-display">{addr}</div>
          </div>
          <div className="celo-card celo-border border rounded-2xl p-6">
            <div className="text-sm opacity-70">Retos</div>
            <div className="text-2xl font-display">3/6</div>
          </div>
        </div>
      </Section>
    </div>
  );
}



