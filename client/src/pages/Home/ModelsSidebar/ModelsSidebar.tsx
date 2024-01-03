import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";

const ModelsSidebar: React.FC = () => (
  <Sidebar className="border-r-[1px]">
    <Sidebar.Title title="Models">
      <button className="btn btn-sm">Add Model</button>
    </Sidebar.Title>

    <Sidebar.Scroller></Sidebar.Scroller>
  </Sidebar>
);

export default ModelsSidebar;
