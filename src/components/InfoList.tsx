"use client";

import { useEffect } from "react";
import { useAppKitEvents, useAppKitAccount } from "@reown/appkit/react";
import { useClientMounted } from "@/shared/hooks";

export const InfoList = () => {
  const { address, isConnected } = useAppKitAccount();
  const events = useAppKitEvents();
  const mounted = useClientMounted();

  useEffect(() => {
    console.log("Events: ", events);
  }, [events]);

  return !mounted ? null : (
   <section>
      <pre>
        Address: {address}
        <br />
        Connected: {isConnected.toString()}
        <br />
      </pre>
  </section>
  );
};
