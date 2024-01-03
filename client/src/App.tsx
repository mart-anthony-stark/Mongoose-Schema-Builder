import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import ErrorModal from "./components/ErrorModal";

function App() {
  return (
    <>
      <ErrorModal />
      <Router>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
