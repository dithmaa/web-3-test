import { styled } from "@stitches/react";
import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Btn = styled("button", {
  backgroundColor: "$primary",
  color: "$white",
  padding: "12px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "background 0.2s ease",

  "&:hover": {
    backgroundColor: "$primaryHover",
  },
});

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};
