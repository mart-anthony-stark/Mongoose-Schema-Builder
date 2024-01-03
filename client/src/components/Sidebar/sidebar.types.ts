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
  children?: React.ReactNode;
  className?: string;
  data?: any[];
  keyExtractor?: string;
  RenderItem?: (item: any) => React.ReactNode;
};
