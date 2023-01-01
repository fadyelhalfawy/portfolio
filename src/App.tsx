import React from 'react';
import './index.css';
import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";
import {SocialLinks} from "./components/SocialLinks";
import {About} from "./components/About";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Home />
        <About />
        <SocialLinks />
    </div>
  );
}

export default App;