"use client";

import { useEffect, useState } from "react";

export const useClientMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); // Runs only on mount

  return mounted;
};
