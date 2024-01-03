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
        models: state.models?.filter((model: Model) => model._id),
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
    models: [{ _id: 1, name: "User", attributes: [] }],
    selectedModel: null,
    error: null,
  });

  return (
    <ModelsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ModelsContext.Provider>
  );
};
