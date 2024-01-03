import AppHeader from "../../components/AppHeader/AppHeader";
import ModelsSidebar from "./ModelsSidebar/ModelsSidebar";
import "./home.css";
import AttributeSidebar from "./AttributeSidebar/AttributeSidebar";

function index() {
  return (
    <div className="h-[100vh]">
      <AppHeader />
      <div className="flex justify-between h-full pt-16">
        <ModelsSidebar />
        <main></main>
        <AttributeSidebar />
      </div>
    </div>
  );
}

export default index;
