import AppHeader from "../../components/AppHeader";
import ModelsSidebar from "./ModelsSidebar";
import "./home.css";
import AttributeSidebar from "./AttributeSidebar";
import { useModelsContext } from "../../hooks/useModelsContext";

function index() {
  const { selectedModel } = useModelsContext();
  return (
    <div className="h-[100vh]">
      <AppHeader />
      <div className="grid grid-cols-[200px_1fr_300px] h-full pt-16">
        <ModelsSidebar />
        <main className="flex-1 w-full">{JSON.stringify(selectedModel)}</main>
        <AttributeSidebar />
      </div>
    </div>
  );
}

export default index;
