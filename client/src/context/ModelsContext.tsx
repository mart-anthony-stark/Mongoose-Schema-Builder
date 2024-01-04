import { FC, ReactNode, createContext, useReducer } from "react";
import { Model } from "../types";

export const ModelsContext = createContext(undefined);

export const ModelsReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_MODEL":
      return { ...state, models: [action.payload, ...state.models] };
    case "EDIT_MODEL":
      return {
        ...state,
        models: state.models?.map((model: Model) => {
          if (model._id === action.payload._id) {
            return action.payload;
          }
          return model;
        }),
      };
    case "DELETE_MODEL":
      return {
        ...state,
        models: state.models?.filter(
          (model: Model) => model._id !== action.payload
        ),
      };
    case "SELECT_MODEL":
      return {
        ...state,
        selectedModel: state.models?.find(
          (model: Model) => model._id === action.payload
        ),
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

type ContextProviderProps = {
  children: ReactNode;
};
export const ModelsContextProvider: FC<ContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(ModelsReducer, {
    models: [
      {
        _id: 1704346302021,
        name: "User",
        attributes: [
          { _id: 1704346277877, name: "username", type: "String" },
          { _id: 1704346283300, name: "email", type: "String" },
          { _id: 1704346298100, name: "password", type: "String" },
        ],
      },
    ],
    selectedModel: null,
    error: null,
  });

  return (
    <ModelsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ModelsContext.Provider>
  );
};
