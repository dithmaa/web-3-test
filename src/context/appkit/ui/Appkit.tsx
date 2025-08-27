"use client";

import { ethersAdapter, projectId, networks } from "@/config";
import { createAppKit } from "@reown/appkit/react";
import React, { type ReactNode } from "react";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

const metadata = {
  name: "next-reown-appkit",
  description: "next-reown-appkit",
  url: "https://github.com/0xonerb/next-reown-appkit-ssr",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

export const modal = createAppKit({
  adapters: [ethersAdapter],
  projectId,
  networks,
  metadata,
  themeMode: "light",
  features: {
    analytics: true,
  },
  themeVariables: {
    "--w3m-accent": "#000000",
  },
});

export const AppkitProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
