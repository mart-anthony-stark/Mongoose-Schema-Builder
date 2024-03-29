import AppHeader from "../../components/AppHeader";
import ModelsSidebar from "./ModelsSidebar";
import "./home.css";
import AttributeSidebar from "./AttributeSidebar";
import CodeViewer from "./CodeViewer";

function index() {
  return (
    <div className="h-[100vh]">
      <AppHeader />
      <div className="grid grid-cols-[250px_1fr_350px] h-full pt-16">
        <ModelsSidebar />
        <CodeViewer />
        <AttributeSidebar />
      </div>
    </div>
  );
}

export default index;
