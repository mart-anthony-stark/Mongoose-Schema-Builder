import AppHeader from "../../components/AppHeader/AppHeader";
import ModelsSidebar from "./ModelsSidebar/ModelsSidebar";
import "./home.css";
import AttributeSidebar from "./AttributeSidebar/AttributeSidebar";
import { useModelsContext } from "../../hooks/useModelsContext";

function index() {
  const { selectedModel } = useModelsContext();
  return (
    <div className="h-[100vh]">
      <AppHeader />
      <div className="flex justify-between h-full pt-16">
        <ModelsSidebar />
        <main>{JSON.stringify(selectedModel)}</main>
        <AttributeSidebar />
      </div>
    </div>
  );
}

export default index;
