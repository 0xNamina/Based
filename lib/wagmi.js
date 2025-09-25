import { http, createConfig } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import { metaMask, injected, walletConnect } from 'wagmi/connectors'

const projectId = '2f5a2b5c5d4e6c7d8e9f0a1b2c3d4e5f' // Replace with your WalletConnect project ID

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