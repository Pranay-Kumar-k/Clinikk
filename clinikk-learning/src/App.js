import React from "react";
import './App.css';
import Sidebar from "./Components/Left/Sidebar";
import RightComponent from "./Components/Right/RightComponent";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <RightComponent />
    </div>
  );
}

export default App;
