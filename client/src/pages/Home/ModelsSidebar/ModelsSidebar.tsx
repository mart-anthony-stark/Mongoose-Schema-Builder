import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useModelsContext } from "../../../hooks/useModelsContext";
import { TbFileDatabase } from "react-icons/tb";

import { IoLogoJavascript } from "react-icons/io5";
import { IconContext } from "react-icons";

const ModelsSidebar: React.FC = () => {
  const { models } = useModelsContext();
  return (
    <Sidebar className="border-r-[1px]">
      <Sidebar.Title title="Models">
        <TbFileDatabase size={30} />
      </Sidebar.Title>

      <Sidebar.Scroller
        data={models}
        keyExtractor="_id"
        RenderItem={(item: any) => (
          <div className="flex items-center gap-2">
            <IconContext.Provider value={{ className: "text-yellow-6  00" }}>
              <IoLogoJavascript size={20} />
            </IconContext.Provider>
            <div>{item.name}.model.js</div>
          </div>
        )}
      />
    </Sidebar>
  );
};

export default ModelsSidebar;
