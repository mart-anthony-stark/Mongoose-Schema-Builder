import React, { ReactNode } from "react";

type Props = {
  data: any[];
  keyExtractor: string;
  RenderItem: (item: any) => ReactNode;
};

const FlatList: React.FC<Props> = ({
  data,
  keyExtractor,
  RenderItem,
}): JSX.Element => (
  <>
    {data?.map((item: any) => (
      <RenderItem key={item[keyExtractor]} {...item} />
    ))}
  </>
);

export default FlatList;
