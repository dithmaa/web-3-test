'use client'

import { useDisconnect, useAppKit, useAppKitNetwork  } from '@reown/appkit/react'
import { networks } from '@/config/'
import { Button } from "@/shared/ui";

export const ActionButtonList = () => {
  const { disconnect } = useDisconnect();
  const { open } = useAppKit();

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error("Failed to disconnect:", error);
    }
  };
  
  return (
    <div>
      <Button onClick={() => open()}>Open</Button>
      <Button onClick={handleDisconnect}>Disconnect</Button>
    </div>
  );
};