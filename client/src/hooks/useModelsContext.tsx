import { useContext } from "react";
import { ModelsContext } from "../context/ModelsContext";
import { Model } from "../types";

type DispatchArg = {
  type: string;
  payload?: any;
};
type Error = {
  title: string;
  message: string;
};
export const useModelsContext = () => {
  const context = useContext(ModelsContext);

  if (!context) {
    throw Error(
      "useModelsContext must be used inside an ModelsContextProvider"
    );
  }
  return context as {
    selectedModel?: Model;
    models: Model[];
    error?: Error;
    dispatch: ({ type, payload }: DispatchArg) => void;
  };
};
