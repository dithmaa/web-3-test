import { createStore, createEvent } from "effector";

export const walletConnected = createEvent<{ address: string }>();
export const walletDisconnected = createEvent();

export const $wallet = createStore<{ address: string | null }>({
  address: null,
})
  .on(walletConnected, (_, { address }) => ({ address }))
  .reset(walletDisconnected);
