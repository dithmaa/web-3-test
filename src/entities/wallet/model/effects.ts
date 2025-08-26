import { createEffect } from "effector";
import { ethers } from "ethers";
import { walletConnected, walletDisconnected } from "./walletStore";
import { MetaMaskInpageProvider } from "@metamask/providers";

type EthereumWindow = {
  ethereum?: MetaMaskInpageProvider;
};

const ethWindow = window as unknown as EthereumWindow;

export const connectWallet = createEffect(async (): Promise<string> => {
  if (!ethWindow.ethereum) {
    throw new Error("Metamask not found");
  }

  const provider = new ethers.BrowserProvider(ethWindow.ethereum);
  const accounts = await provider.send("eth_requestAccounts", []);
  const address = accounts[0];

  walletConnected({ address });
  return address;
});

export const disconnectWallet = createEffect(() => {
  walletDisconnected();
});
