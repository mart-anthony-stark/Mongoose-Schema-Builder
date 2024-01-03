import React, { useRef, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { IoIosAdd } from "react-icons/io";
import FlatList from "../../../components/FlatList";

const TYPES = [
  { type: "String", sample: '"John Doe"' },
  { type: "Number", sample: 21 },
  { type: "Object", sample: "{name:'John'}" },
  { type: "Array", sample: "[1,2]" },
  { type: "Date", sample: "[1,2]" },
];

const AttributeSidebar: React.FC = (): JSX.Element => {
  const [attributes, setAttributes] = useState<Array<any>>([]);
  const [editing, setEditing] = useState();
  const editText = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<any>(null);

  const [name, setName] = useState<string>("");

  const closeDropdown = () => {
    if (dropdownRef.current.open) {
      dropdownRef.current.open = false;
    }
  };

  const handleChangeType = (e: any, item: any) => {
    const updatedAttr = attributes.map((attr) => {
      if (attr._id === item._id) {
        return { ...attr, type: e.target.value };
      }
      return attr;
    });
    setAttributes(updatedAttr);
  };

  const handleEditAttrName = (e: any, item: any) => {
    if (e.key === "Enter") {
      const updatedAttr = attributes.map((attr) => {
        if (attr._id === item._id) {
          return { ...attr, name: editText.current?.value };
        }
        return attr;
      });
      setAttributes(updatedAttr);

      setEditing(undefined);
    }
  };

  return (
    <Sidebar className="border-l-[1px] max-w-[300px] flex flex-col gap-3">
      <Sidebar.Title title="Attributes">
        <details className="dropdown dropdown-left " ref={dropdownRef}>
          <summary className="m-1 btn btn-sm btn-circle btn-accent">
            <IoIosAdd size={20} />
          </summary>
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

                  closeDropdown();
                }}
                key={type.type}
              >
                <a>{type.type}</a>
              </li>
            ))}
          </ul>
        </details>
      </Sidebar.Title>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Model Name "
        className="input input-bordered w-full max-w-xs"
      />

      <Sidebar.Scroller
        className="h-[60vh] mt-0"
        data={attributes}
        keyExtractor="_id"
        RenderItem={(item: any) => (
          <div className="grid grid-cols-[1fr_100px_20px] items-center mb-2">
            {/* ATTRIBUTE NAME */}
            {editing === item._id ? (
              <input
                type="text"
                ref={editText}
                placeholder="Attribute name"
                className="input input-bordered input-sm w-full max-w-xs"
                onKeyUp={(e) => handleEditAttrName(e, item)}
              />
            ) : (
              <span
                className={`cursor-pointer overflow-hidden ${
                  !item.name && "text-gray-600"
                }`}
                onClick={() => {
                  closeDropdown();
                  setEditing(item._id);

                  setTimeout(() => {
                    if (editText.current) editText.current.value = item.name;
                    editText.current?.focus();
                  }, 10);
                }}
              >
                {item.name || "Click to edit"}
              </span>
            )}

            {/* DATA TYPE DROPDOWN */}
            <select
              className="select select-ghost select-sm max-w-xs"
              value={item.type}
              onChange={(e) => handleChangeType(e, item)}
            >
              <FlatList
                data={TYPES}
                keyExtractor="type"
                RenderItem={(item) => <option>{item.type}</option>}
              />
            </select>

            {/* SET OTHER OPTIONS */}
          </div>
        )}
      />

      <button className="btn btn-accent">
        <span>Create Model</span>
      </button>
    </Sidebar>
  );
};

export default AttributeSidebar;
