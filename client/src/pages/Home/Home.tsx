import Sidebar from "../../components/Sidebar/Sidebar";
import AppHeader from "../../components/AppHeader/AppHeader";
import ModelsSidebar from "./ModelsSidebar/ModelsSidebar";
import "./home.css";

function index() {
  return (
    <div className="h-[100vh]">
      <AppHeader />
      <div className="flex justify-between h-full pt-16">
        <ModelsSidebar />
        <main></main>
        <Sidebar className="border-l-[1px]">
          <input
            type="text"
            placeholder="Model Name "
            className="input input-bordered w-full max-w-xs"
          />
        </Sidebar>
      </div>
    </div>
  );
}

export default index;
