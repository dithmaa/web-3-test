"use client";

import { ConnectButton, GetBalanceButton } from "@/entities/wallet";
import { InfoList } from "@/components/InfoList";
import { ActionButtonList } from "@/components/ActionButtonList";
import { styled } from "@/shared/lib";
import type * as Stitches from '@stitches/react';

const BaseDiv = styled('div', {});

export const FlexBetween = styled(BaseDiv, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Flex = styled(BaseDiv, {
  display: "flex",
  alignItems: "center",
});

export default function Home() {
  return (
    <div className={"pages"}>
      <header>
        <nav>
          <FlexBetween>
            <a href="#">Web3 Logo</a>
            <Flex>
              <ConnectButton />
              <GetBalanceButton />
            </Flex>
          </FlexBetween>
        </nav>
      </header>

      <ActionButtonList />
      <InfoList />
    </div>
  );
}
