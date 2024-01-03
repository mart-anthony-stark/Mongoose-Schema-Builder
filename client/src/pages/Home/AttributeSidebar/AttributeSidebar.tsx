import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { IoIosAddCircle } from "react-icons/io";

const TYPES = [
  { type: "String", sample: '"John Doe"' },
  { type: "Number", sample: 21 },
  { type: "Object", sample: "{name:'John'}" },
  { type: "Array", sample: "[1,2]" },
  { type: "Date", sample: "[1,2]" },
];

const AttributeSidebar: React.FC = (): JSX.Element => {
  const [attributes, setAttributes] = useState<Array<any>>([]);
  const [name, setName] = useState<string>("");

  return (
    <Sidebar className="border-l-[1px] max-w-[300px]">
      <Sidebar.Title title="Attributes">
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn m-1">
            <IoIosAddCircle />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {TYPES.map((type) => (
              <li
                onClick={() => {
                  setAttributes([
                    ...attributes,
                    { _id: Date.now(), name: "", type: type.type },
                  ]);
                }}
                key={type.type}
              >
                <a>{type.type}</a>
              </li>
            ))}
          </ul>
        </div>
      </Sidebar.Title>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Model Name "
        className="input input-bordered w-full max-w-xs"
      />

      <Sidebar.Scroller
        data={attributes}
        keyExtractor="_id"
        RenderItem={(item: any) => (
          <div className="flex justify-between">
            <div>Name: {item.name}</div>
            <div>{item.type}</div>
          </div>
        )}
      />
    </Sidebar>
  );
};

export default AttributeSidebar;
