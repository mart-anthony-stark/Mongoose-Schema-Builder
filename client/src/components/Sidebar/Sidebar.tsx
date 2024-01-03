import { FC } from "react";
import { ScrollerProps, SidebarProps, TitleProps } from "./sidebar.types";

const Sidebar: FC<SidebarProps> & {
  Title: FC<TitleProps>;
  Scroller: FC<ScrollerProps>;
} = ({ className, children, ...props }): JSX.Element => {
  return (
    <aside className={`sidebar ${className}`} {...props}>
      {children}
    </aside>
  );
};

const Title: FC<TitleProps> = ({ title, children }): JSX.Element => {
  return (
    <div className="flex justify-between items-center">
      <h4 className="text-xl">{title}</h4>
      {children}
    </div>
  );
};

const Scroller: FC<ScrollerProps> = ({ children }) => {
  return <div>{children}</div>;
};

Sidebar.Title = Title;
Sidebar.Scroller = Scroller;

export default Sidebar;
