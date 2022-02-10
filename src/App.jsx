import React, {useState} from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import  "./components/modal.css";


const App = ()  =>{
    const [modalActive, setModalActive] = useState(true)

  return (
      <div className="app">
          <Navbar/>
          <main>
          <button className="open-btn">Log in</button>
          </main>
          <Modal active={modalActive} setActive={setModalActive}/>

      </div>
  );
}

export default App;

