import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";

function App() {

  const [cartItems, setCartItems] = useState([])


  return (
    <>
      <div className="h-screen flex flex-col w-screen overflow-x-hidden">
        <Nav />
        <Outlet context={[cartItems, setCartItems]}/>
      </div>
    </>
  );
}

export default App;
