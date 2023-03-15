// import logo from './logo.svg';
import Vision from "./Vision.jsx";
import People from "./People.jsx";
import Courses from "./Courses.jsx";
import Projects from "./Projects.jsx";
import Publications from "./Publications.jsx";

// import noun_person from "./images/noun_person.png";
import noun_person_svg from "./images/noun_Human_823373.svg";
// import SimpleImageSlider from "react-simple-image-slider";

import React, { Component } from 'react';
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
            AI EXPERIENCE LAB
          </div>
          {/* <div className="nav">
              <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/research">Research</NavLink></li>
                <li><NavLink to="/people">People</NavLink></li>
                <li>Join Us</li>
                <li>Contact</li>
              </ul>
            </div> */}
        </div>
      </header>
      <div className="content">
        {/* <Route path="/about" component={About}/>
          <Route path="/research" component={Research}/>
          <Route path="/People" component={People}/> */}

        
        {Vision}
        
        {People}


        {/* Section. What We Do */}
        <section>
          <h2>How to Join </h2>
          <p>
          We are always looking for students interested in AI-infused products and data-driven design. If you're interested in working with me, please read below and send me an email (takyeonlee at kaist dot ac dot kr).
          </p>
          <h3>Ph.D. student</h3>
          <p>
            An ideal candidate should have some prior research experience and technical skills such as prototyping or machine learning. If you are interested in, please send me an email containing some of the following information,
            <ul>
              <li>Cover letter that summarizes your experience and research interest</li>
              <li>A link to materials that demonstrate your technical capabilities such as source code repositories, a personal website, etc</li>
              <li>List of publications</li>
              <li>Any other information that demonstrates your potential as a researcher</li>
            </ul>
          </p>

          <h3>Master student</h3>
          <p>In KAIST, master’s program is research-oriented, which means that every student needs to join a research group and writes a thesis. In fact, after admission, students are allowed to select their preferred lab, and the department makes the best effort to accommodate these requests (though acceptance to a specific lab is not guaranteed, as it depends on the number of applications received).</p>

          <h3>Undergraduate Internship</h3>
          <p>
          If you are currently registered as a KAIST student (including a visiting student) and are interested in an internship, independent research in our lab or in starting a URP (Undergraduate Research Program) with me, please send an email with the following information,
          <ul>
            <li>What do you want to achieve at the end of your internship?</li>  
            <li>What research topic are you interested in?</li>
            <li>How long will your internship be? I prefer students to work with me at least for six months, but it's not a hard requirement.</li>
            <li>Any materials that demonstrate your expertise and capabilities such as design brief, video of working prototype, etc</li>
          </ul>
          </p>
          
        </section>

        {Courses}


        {Projects}
        
        {Publications}
      </div>

    </div>

    
    // </HashRouter>
  );
}

export default App;
