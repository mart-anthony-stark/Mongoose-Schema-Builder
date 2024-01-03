import "./home.css";

function index() {
  return (
    <div className="h-[100vh]">
      <header className="absolute bg-slate-600 h-12 w-full p-2">
        Schema Builder
      </header>
      <div className="flex justify-between h-full pt-12">
        <aside className="border-r-[1px] sidebar">
          <div className="flex justify-between items-center">
            <h4 className="text-xl">Models</h4>
            <button className="btn btn-sm">Add Model</button>
          </div>
        </aside>
        <main></main>
        <aside className="border-l-[1px] sidebar">
          <input
            type="text"
            placeholder="Model Name "
            className="input input-bordered w-full max-w-xs"
          />
        </aside>
      </div>
    </div>
  );
}

export default index;
