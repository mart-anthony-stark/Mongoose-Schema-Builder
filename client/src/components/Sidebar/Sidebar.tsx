import { FC } from "react";
import { ScrollerProps, SidebarProps, TitleProps } from "./sidebar.types";

const Sidebar: FC<SidebarProps> & {
  Title: FC<TitleProps>;
  Scroller: FC<ScrollerProps>;
} = ({ className, children, ...props }): JSX.Element => {
  return (
    <aside
      className={`border-gray-700 max-w-[250px] w-full p-2 ${className}`}
      {...props}
    >
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

const Scroller: FC<ScrollerProps> = ({
  children,
  className,
  data,
  keyExtractor,
  RenderItem,
}): JSX.Element => {
  return (
    <div className={`h-[94%] overflow-y-auto mt-2 ${className}`}>
      {RenderItem &&
        keyExtractor &&
        data?.map((item: any) => (
          <RenderItem key={item[keyExtractor]} {...item} />
        ))}
      {children}
    </div>
  );
};

Sidebar.Title = Title;
Sidebar.Scroller = Scroller;

export default Sidebar;
