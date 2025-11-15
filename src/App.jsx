import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Commerce from "./Components/Commerce";
import "./App.css";

function App() {
  return (
    <div>
      <div className="position">
        <div className="video">
          <video
            autoPlay
            muted
            loop
            src="src/assets/images/Shopif.webm"
          ></video>
        </div>
        <div className="header-content">
          <Header />
        </div>
        <div className="hero-content">
          <Hero />
        </div>
      </div>
      <Commerce />
    </div>
  );
}

export default App;
