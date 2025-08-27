import { createStore, createEvent } from "effector";
import { useEffect } from "react";
import { useAppKitAccount } from "@reown/appkit/react";

export const walletConnected = createEvent<{ address: string }>();
export const walletDisconnected = createEvent();

export const $wallet = createStore<{ address: string | null }>({
  address: null,
})
  .on(walletConnected, (_, { address }) => ({ address }))
  .reset(walletDisconnected);

export const useWalletSync = () => {
  const { address } = useAppKitAccount();

  useEffect(() => {
    if (address) walletConnected({ address });
    else walletDisconnected();
  }, [address]);
};
