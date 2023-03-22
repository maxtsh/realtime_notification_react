import { ReactNode, HTMLProps } from "react";

export interface IProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}
