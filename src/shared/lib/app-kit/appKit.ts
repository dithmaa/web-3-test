import { createAppKit } from "@reown/appkit";
import { CHAINS } from "@/config/ethereum";

export const appKit = createAppKit({
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
  networks: [
    {
      id: CHAINS.mainnet.id,
      name: CHAINS.mainnet.name,
      rpcUrls: {
        default: {
          http: [CHAINS.mainnet.rpcUrl],
        },
      },
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
    },
    {
      id: CHAINS.sepolia.id,
      name: CHAINS.sepolia.name,
      rpcUrls: {
        default: {
          http: [CHAINS.sepolia.rpcUrl],
        },
      },
      nativeCurrency: {
        name: "Sepolia Ether",
        symbol: "SEP",
        decimals: 18,
      },
    },
  ] as const,
});
