import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useModelsContext } from "../../hooks/useModelsContext";
import { TbFileDatabase } from "react-icons/tb";

import { IoLogoJavascript } from "react-icons/io5";
import { IconContext } from "react-icons";
import { MdDelete } from "react-icons/md";

const ModelsSidebar: React.FC = () => {
  const { models, selectedModel, dispatch } = useModelsContext();

  return (
    <Sidebar className="border-r-[1px]">
      <Sidebar.Title title="Models">
        <TbFileDatabase size={30} />
      </Sidebar.Title>

      <Sidebar.Scroller
        className="mt-2"
        data={models}
        keyExtractor="_id"
        RenderItem={(item: any) => (
          <div
            className={`model-file relative items-center cursor-pointer p-2 rounded-md ${
              selectedModel?._id === item._id && "bg-slate-800"
            }`}
          >
            <div
              onClick={() => {
                dispatch({ type: "SELECT_MODEL", payload: item._id });
              }}
              className="flex items-center gap-1"
            >
              <IconContext.Provider value={{ style: { color: "yellow" } }}>
                <IoLogoJavascript size={20} />
              </IconContext.Provider>

              <div>{item.name}.model.js</div>
            </div>

            <div
              className="delete-btn absolute top-3 right-1 rounded bg-slate-700 p-1"
              onClick={() => {
                dispatch({ type: "DELETE_MODEL", payload: item._id });
                if (selectedModel?._id === item._id)
                  dispatch({ type: "SELECT_MODEL", payload: item._id });
              }}
            >
              <IconContext.Provider value={{ className: "delete-icon" }}>
                <MdDelete />
              </IconContext.Provider>
            </div>
          </div>
        )}
      />
    </Sidebar>
  );
};

export default ModelsSidebar;
