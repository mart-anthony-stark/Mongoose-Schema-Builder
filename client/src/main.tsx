import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ModelsContextProvider } from "./context/ModelsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ModelsContextProvider>
    <App />
  </ModelsContextProvider>
);
