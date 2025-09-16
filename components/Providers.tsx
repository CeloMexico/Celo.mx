'use client';
import { ThemeProvider } from 'next-themes';
import { PrivyProvider } from '@privy-io/react-auth';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@/lib/wagmi';
import { ToastProvider } from '@/components/ui/toast';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID ?? '';
  
  // During build time or when no app ID is provided, render without Privy
  if (!appId || typeof window === 'undefined') {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </QueryClientProvider>
    );
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <PrivyProvider appId={appId} config={{ loginMethods: ['email', 'google', 'twitter', 'wallet'], appearance: { theme: 'dark' } }}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <ToastProvider>
              {children}
            </ToastProvider>
          </ThemeProvider>
        </PrivyProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}



