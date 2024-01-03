import { useContext } from "react";
import { ModelsContext } from "../context/ModelsContext";

type DispatchArg = {
  type: string;
  payload?: any;
};
export const useModelsContext = () => {
  const context = useContext(ModelsContext);

  if (!context) {
    throw Error(
      "useModelsContext must be used inside an ModelsContextProvider"
    );
  }
  return context as {
    models: any[];
    dispatch: ({ type, payload }: DispatchArg) => void;
  };
};
