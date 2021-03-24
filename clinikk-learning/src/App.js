import React, { useEffect } from "react";
import './App.css';
import Sidebar from "./Components/Left/Sidebar";
import RightComponent from "./Components/Right/RightComponent";
import {useDispatch} from "react-redux";
import { getAllCoursesData, getUserData } from "./Redux/actionCreator";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserData())
    dispatch(getAllCoursesData())
  }, [])
  return (
    <div className="App">
      <Sidebar />
      <RightComponent />
    </div>
  );
}

export default App;
