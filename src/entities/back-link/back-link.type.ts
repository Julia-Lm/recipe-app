import { LinkProps } from "react-router-dom";
import { ReactNode } from "react";

export interface BackLinkProp extends LinkProps {
  children?: ReactNode;
}
