import { FC, ReactNode, createContext, useReducer } from "react";

export const ModelsContext = createContext(undefined);

export const ModelsReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_MODEL":
      return { models: [action.payload, ...state.models] };
    case "EDIT_MODEL":
      return {
        ...state,
        models: state.models.map((model: any) => {
          if (model._id === action.payload._id) {
            return action.payload;
          }
          return model;
        }),
      };
    default:
      return state; // Handle unknown actions
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
  });

  return (
    <ModelsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ModelsContext.Provider>
  );
};
