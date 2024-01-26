import "./App.css";
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";

function App() {


  return (
    <>
      <div className="h-screen flex flex-col w-screen overflow-x-hidden">
        <Nav />
        <Outlet/>
      </div>
    </>
  );
}

export default App;
