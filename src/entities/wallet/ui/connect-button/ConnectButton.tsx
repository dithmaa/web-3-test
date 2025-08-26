import { useUnit } from "effector-react";

import { $wallet, connectWallet, disconnectWallet } from "../../model";
import { Button } from "@/shared/ui";
import { getShortAddress } from "@/shared/utils";

export const ConnectButton = () => {
  const { address } = useUnit($wallet);

  if (address) {
    return (
      <Button onClick={disconnectWallet}>
        Connected: {getShortAddress(address)} ...
      </Button>
    );
  } else {
    return <Button onClick={connectWallet}>Connect Wallet</Button>;
  }
};
