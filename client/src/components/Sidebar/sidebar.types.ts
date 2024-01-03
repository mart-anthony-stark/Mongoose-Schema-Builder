import { ReactNode } from "react";

export type SidebarProps = {
  className?: string;
  children?: ReactNode;
  props?: any;
};

export type TitleProps = {
  title: string;
  children?: ReactNode;
};

export type ScrollerProps = {
  children?: ReactNode;
};
