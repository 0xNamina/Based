'use client'

import './globals.css'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from '../lib/wagmi'
import { useState } from 'react'

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <html lang="en">
      <head>
        <title>Smart Contract Deployer</title>
        <meta name="description" content="Deploy smart contracts to Base Sepolia Testnet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  )
}