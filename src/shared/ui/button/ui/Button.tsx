import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = (props) => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
};
