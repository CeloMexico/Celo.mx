import { http, createConfig } from 'wagmi';
import { celo, celoAlfajores } from 'wagmi/chains';
import { injected, metaMask, walletConnect } from 'wagmi/connectors';

export const config = createConfig({
  chains: [celoAlfajores, celo],
  connectors: [
    injected(),
    metaMask(),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '' }),
  ],
  transports: {
    [celoAlfajores.id]: http(),
    [celo.id]: http(),
  },
});
