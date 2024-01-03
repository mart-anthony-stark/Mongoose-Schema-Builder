import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useModelsContext } from "../../hooks/useModelsContext";
import { TbFileDatabase } from "react-icons/tb";

import { IoLogoJavascript } from "react-icons/io5";
import { IconContext } from "react-icons";

const ModelsSidebar: React.FC = () => {
  const { models, selectedModel, dispatch } = useModelsContext();

  return (
    <Sidebar className="border-r-[1px]">
      <Sidebar.Title title="Models">
        <TbFileDatabase size={30} />
      </Sidebar.Title>

      <Sidebar.Scroller
        data={models}
        keyExtractor="_id"
        RenderItem={(item: any) => (
          <div
            onClick={() => {
              dispatch({ type: "SELECT_MODEL", payload: item._id });
            }}
            className={`flex items-center gap-2 cursor-pointer p-2 rounded-md ${
              selectedModel?._id === item._id && "bg-slate-800"
            }`}
          >
            <IconContext.Provider value={{ style: { color: "yellow" } }}>
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
