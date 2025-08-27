import { useAppKitProvider, useAppKitAccount } from "@reown/appkit/react";
import {
  BrowserProvider,
  Contract,
  Eip1193Provider,
  formatUnits,
} from "ethers";
import { Button } from "@/shared/ui";
import { USDTAbi, USDTAddress } from "../../model";

export const GetBalanceButton = () => {
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");

  const getBalance = async () => {
    if (!isConnected || !address) {
      throw Error("User disconnected");
    }

    const ethersProvider = new BrowserProvider(
      walletProvider as Eip1193Provider
    );
    const signer = await ethersProvider.getSigner();
    const USDTContract = new Contract(USDTAddress as string, USDTAbi, signer);

    const USDTBalance = await USDTContract.balanceOf(address!);
    console.log(formatUnits(USDTBalance, 18));
  };

  return <Button onClick={getBalance}>Get User Balance</Button>;
};
