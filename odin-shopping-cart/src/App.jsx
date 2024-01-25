import "./App.css";
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";

function App() {


  return (
    <>
      <div className="h-screen flex flex-col w-full">
        <Nav />
        <Outlet/>
      </div>
    </>
  );
}

export default App;
