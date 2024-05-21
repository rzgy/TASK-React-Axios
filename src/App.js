import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import { useState } from "react";

function App() {
  // const [name, setName] = useState("");
  // const getName = () => {
  //   setName("abdulrazak");
  //   console.log(name);
  // };
  return (
    <div className="font-mono">
      {/* <button onClick={getName}>Change name</button>
      <h1>{name}</h1> */}
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/PetList" Component={PetList} />
        <Route path="/PetDetail/:petId" Component={PetDetail} />
      </Routes>
    </div>
  );
}

export default App;
