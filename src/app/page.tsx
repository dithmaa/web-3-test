"use client";

import { ConnectButton, GetBalanceButton } from "@/entities/wallet";
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

export const GrayBgHeader = styled("header", {
  backgroundColor: "$text",
});

export default function Home() {
  return (
    <div className={"pages"}>
      <GrayBgHeader>
        <Container>
          <nav>
            <FlexBetween style={{ padding: "20px 0" }}>
              <a href="#">Web3 Logo</a>
              <Flex style={{ gap: "16px" }}>
                <ConnectButton />
                <GetBalanceButton />
              </Flex>
            </FlexBetween>
          </nav>
        </Container>
      </GrayBgHeader>
    </div>
  );
}
