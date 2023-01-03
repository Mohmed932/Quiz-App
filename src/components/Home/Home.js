import React from "react";
import "./Home.css";
import mainImage from "../../photo/1.png";

const Home = ({ setshow }) => {
  return (
    <div className="Home">
      <div className="Home-image">
        <img src={mainImage} alt="Quiz App" />
      </div>
      <div className="Home-word">
        <h1>Welcome to ask Your seniors</h1>
        <button onClick={() => setshow(false)}>Start Quiz</button>
      </div>
    </div>
  );
};

export default Home;
