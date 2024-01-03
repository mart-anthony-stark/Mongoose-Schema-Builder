import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.css";

function index() {
  return (
    <div className="h-[100vh]">
      <header className="absolute bg-slate-600 h-12 w-full p-2">
        Schema Builder
      </header>
      <div className="flex justify-between h-full pt-12">
        <Sidebar className="border-r-[1px]">
          <Sidebar.Title title="Models">
            <button className="btn btn-sm">Add Model</button>
          </Sidebar.Title>
        </Sidebar>
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
