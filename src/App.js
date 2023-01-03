import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";

const App = () => {
  const [show, setshow] = useState(true);
  // const [hidden, sethidden] = useState(true);
  return (
    <div className="App">{show ? <Home setshow={setshow} /> : <Quiz />}</div>
  );
};

export default App;
