export const CHAINS = {
  mainnet: {
    id: 1,
    rpcUrl: "https://mainnet.infura.io/v3/KEY",
    name: "Ethereum Mainnet",
  },
  sepolia: {
    id: 11155111,
    rpcUrl: "https://sepolia.infura.io/v3/KEY",
    name: "Sepolia Testnet",
  },
} as const;
