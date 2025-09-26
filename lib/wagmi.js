import { http, createConfig } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import { metaMask, injected, walletConnect } from 'wagmi/connectors'

const projectId = '4f25eb016fc56ffafcd2c5ddef901505' // Replace with your WalletConnect project ID

export const config = createConfig({
  chains: [baseSepolia],
  connectors: [
    metaMask(),
    injected(),
    walletConnect({ projectId })
  ],
  transports: {
    [baseSepolia.id]: http()
  },
  ssr: true,
})

export const baseSepoliaChain = baseSepolia
