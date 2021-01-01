import React from "react";
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Works} from "./Works/Works";
import {HireMe} from "./HireMe/HireMe";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <HireMe/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

// https://marketifythemes.com/html/arlo/index.html

export default App;
