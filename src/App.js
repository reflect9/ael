// import logo from './logo.svg';
import Vision from "./Vision.jsx";
import Life from "./Life.jsx";
import Join from "./Join.jsx";
import People from "./People.jsx";
import Courses from "./Courses.jsx";
import Projects from "./Projects.jsx";
import Publications from "./Publications.jsx";

// import noun_person from "./images/noun_person.png";
import logo_kaist from "./images/logo-kaist.png";
import logo_id from "./images/logo-id.png";

// import noun_person_svg from "./images/noun_Human_823373.svg";
// import SimpleImageSlider from "react-simple-image-slider";

import React from 'react';
// import {
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";
// import About from "./pages/About";
// import Research from "./pages/Research";
// import People from "./pages/People";

import './App.scss';


function App() {
  
  // const images_ids = [
  //   { url: "ids-arch1.png" },
  //   { url: "ids-arch2.png" },
  //   { url: "ids-screenshot.png" }
  // ];
  const scrollToSection = (sectionID) => {
    document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
  }

  return (
    // <HashRouter>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        <div className="App-header-content">
          <div className="lab_title">
            AEL  <span className="light">AI Experience Lab</span>
          </div>
          <div className="nav">
            <ul>
                <li><button onClick={()=>{scrollToSection("vision");}}>Vision</button></li>
                <li><button onClick={()=>{scrollToSection("people");}}>People</button></li>
                <li><button onClick={()=>{scrollToSection("join");}}>Join</button></li>
                <li><button onClick={()=>{scrollToSection("courses");}}>Courses</button></li>
                <li><button onClick={()=>{scrollToSection("projects");}}>Projects</button></li>
                <li><button onClick={()=>{scrollToSection("publications");}}>Publications</button></li>
                
            </ul>
            
          </div>
          <div className="right">
            <a href="https://www.kaist.ac.kr" target="kaist"><img className="logo_kaist" src={logo_kaist} /></a>
            {/* <a href="https://id.kaist.ac.kr" target="id"><img className="logo_id" src={logo_id} /></a> */}
            
          </div>
          
        </div>
      </header>
      <div className="content">
        {/* <Route path="/about" component={About}/>
          <Route path="/research" component={Research}/>
          <Route path="/People" component={People}/> */}

        
        {Vision}
        {People}
        {Life}
        {Join}

        
        {Courses}


        {Projects}
        
        {Publications}
      </div>

    </div>

    
    // </HashRouter>
  );
}

export default App;
