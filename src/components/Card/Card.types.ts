import { ReactNode, HTMLAttributes } from "react";

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
