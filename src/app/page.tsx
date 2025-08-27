"use client";

import { ConnectButton, GetBalanceButton } from "@/entities/wallet";
import { InfoList } from "@/components/InfoList";
import { ActionButtonList } from "@/components/ActionButtonList";
import { styled } from "@/shared/lib";

export const FlexBetween = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const Container = styled("div", {
  maxWidth: "1170px",
  width: "90%",
  margin: "0 auto",
});

export default function Home() {
  return (
    <div className={"pages"}>
      <Container>
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
      </Container>
    </div>
  );
}
