// import logo from './logo.svg';
import tak_image from "./images/member_photo/tak.jpg";
import seongyeomkim_image from "./images/member_photo/seongyeomkim.jpg";
import jeehunchoi_image from "./images/member_photo/jeehunchoi.jpg";
import joohyoungpark_image from "./images/member_photo/joohyoungpark.jpeg";
// import noun_person from "./images/noun_person.png";
import noun_person_svg from "./images/noun_Human_823373.svg";
import image_ids_all from "./images/project_photo/ids-all.png";
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

        {/* Section 1 Who We Are */}
        <section>
          <h2>Lab's Vision</h2>
          <p>
            Welcome to the AI Experience Lab (AEL) founded by prof. <a href="http://www.takyeonlee.com" target='_blank'>Tak Yeon Lee</a> in 2021. The following manifesto guides us to design innovative yet practical solutions using data and AI technology. 
          </p>

          <h3><em>Data-Centric Design</em> over Traditional Industrial Design</h3>
          <p className="indented">
            Digital transformation is fundamentally changing how products and services operate and deliver value to people. Data now has become the lens to understand people, and the oil that runs AI-powered machines. AEL's primary goal is to create innovative yet practical solutions for challenging problems. To achieve the goal, we leverage individual researchers' creative and constructive mindsets for finding insights from data, and building prototypes with data and AI technologies. 
          </p>

          <h3><em>System-oriented Design</em> over Human-Centered Design</h3>
          <p className="indented">
            While HCD has been a mainstream design agenda for several decades, the world as a giant network of people, businesses, and other stakeholders demands a system-oriented approach. For instance, we may design a system that does not involve any human users, or carefully negotiates the level of discomfort and stress that people experience. 
          </p>

          <h3><em>Minimal Viable Products</em> over High Fidelity Prototypes</h3>
          <p className="indented">
            We build a prototype to enlighten ourselves and to step up the next level of design iteration rather than persuading stakeholders with a high-fidelity mock-up.  
          </p>


          <h3><em>Problem Solving</em> over Problem Discovery</h3>
          <p className="indented">
            For the last couple decades designers have been very successful at finding interesting problems to solve. However, the digital transformation and AI technology offer unprecedented tools to solve boring (yet challenging) problems. Thus we focus more on innovative solutions rather than problems. 
          </p>
{/* 
          <h3><em>Media-agnostic</em> over Media-specific</h3>
          <p className="indented">
            When people ask "what do you design?" we carefully refuse to give a direct answer, because we do not limit ourselves within a specific medium such as user interface, service, or consumer products. Instead we focus on a specific type of problem (e.g. data-driven design issues) that may appear in many different domains. 
          </p> */}

          

{/* 

          <h3>1. Explore design opportunities enabled by AI and data</h3>
          <p className="indented">
            AEL's primary goal is to create innovative yet practical solutions for challenging problems. To achieve the goal, we leverage individual researchers' creative and constructive mindsets for finding insights from data, and building prototypes with data and AI technologies. 
          </p>
          
          <h3>Redefine designer's role and responsibility in the age of digital transformation</h3>
          <p>
            In the midst of digital transformation, we see lots of opportunities and problems are only accessible via data. Failing to use data properly may end up creating products that are useful for only a fraction of people, overlooking critical signals of unhappy users, and failing in business. Our research raises critical questions about what designers should learn and do in the age of digital transformation.
          </p>

          <h3>Back to <em>How</em> from <em>What to design</em></h3>
          <p>
            For the last couple decades designers have been very successful at finding novel problems. While the approach is still valid, the digital transformation and AI technology provide unprecedented tools to solve boring (yet challenging) problems. In that line of thought, we are interested in solving an existing (or even boring) problem in a novel way. 
          </p> */}



        </section>
        
        
        {/* Section. What We Do */}
        <section>
          <h2>Who We Are</h2>
          <ul className="people_list">
            <li>
              <a href="http://www.takyeonlee.com" target='_blank'><img src={tak_image} /></a>
              <div className="name">Tak Yeon, Lee</div>
              <div className="role">Assistant Professor</div>
              <div className="email">
                takyeonlee@kaist.ac.kr
              </div>
              <div className="website">
                <a href="www.takyeonlee.com">website</a>
              </div>
            </li>
            <li>
              <img src={seongyeomkim_image} />
              <div className="name">Seon Gyeom, Kim</div>
              <div className="role">Master Student</div>
              <div className="email">
                ksg_0320@kaist.ac.kr
              </div>
            </li>
            <li>
              <img src={joohyoungpark_image} />
              <div className="name">JooHyoung, Park</div>
              <div className="role">Master Student</div>
              <div className="email">
                wngud913@kaist.ac.kr
              </div>
            </li>
            <li>
              <img src={jeehunchoi_image} />
              <div className="name">Jee Hun, Choi</div>
              <div className="role">Undergraduate Researcher</div>
              <div className="email">
                jeehun@kaist.ac.kr
              </div>
            </li>
          </ul>
        </section>

        {/* Section. What We Do */}
        <section>
          <h2>How to Join</h2>
          <p>
          We are always looking for students interested in AI-infused products and data-driven design. If you're interested in working with me, please read below and send me an email (reflect9 at gmail dot com).
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



        {/* Section. Projects */}
        <section>
          <h2>Projects</h2>
          <div className="project">
            {/* <div className="carousel">
              <SimpleImageSlider
                width={400}
                height={250}
                images={images_ids}
                slideDuration={0.1}
                showBullets={true}
                showNavs={true}
                startIndex={0}
              />
            </div> */}
            <div className="title">
                AI-supported Tools for Authoring Immersive Data Storytelling
            </div>
            
            
            <div className="description">
              This project aims to build an AI-assisted authoring tool of immersive data storytelling (IDS). Our tool focuses on maximizing the following benefits of IDS: (1) Meaningful and engaging composition of charts in 3D space, (2) Embodied interaction between presenter and charts, (3) Enabling collaborative data exploration in a virtual space. Our tool makes IDS authoring easier and more effective by automating low-level specifications and recommending semantically meaningful chart arrangements. 
            </div>
            <div className="image" style={{margin:"20px 0", width:"90%"}}>
              <img src={image_ids_all}/>
            </div>
            <div className="participants">
                Seon Gyeom Kim, Tak Yeon lee (Sponsored by Adobe Research)
            </div>
            
            
          </div>
        </section>

        {/* Section. Publications */}
        <section>
          <h2>Publications</h2>
          <h3>2021</h3>
          <ul className="publications">
            <li>
              <div className="bib-item">
                <div className="title">
                  Generating Accurate Caption Units for Figure Captioning
                  
                </div>
                <div className="authors">
                Xin Qian, Eunyee Koh, Fan Du, Sungchul Kim, Joel Chan, Ryan A Rossi, Sana Malik, <em>Tak Yeon Lee</em>
                </div>
                <div className="description">
                Proceedings of the Web Conference 2021
                </div>
              </div>
            </li>

            <li>
              <div className="bib-item">
                <div className="title">
                  Insight-centric Visualization Recommendation
                </div>
                <div className="authors">
                Camille Harris, Ryan A Rossi, Sana Malik, Jane Hoffswell, Fan Du, <em>Tak Yeon Lee</em>, Eunyee Koh, Handong Zhao
                </div>
                <div className="description">
                arXiv preprint arXiv:2103.11297
                </div>
              </div>
            </li>

            <li>
              <div className="bib-item">
                <div className="title">
                  Personalized Visualization Recommendation
                </div>
                <div className="authors">
                Xin Qian, Ryan A Rossi, Fan Du, Sungchul Kim, Eunyee Koh, Sana Malik, Tak Yeon Lee, Nesreen K Ahmed
                </div>
                <div className="description">
                arXiv preprint arXiv:2102.06343
                </div>
              </div>
            </li>
          </ul>
          
          <h3>2020</h3>
            <p>Check Tak Yeon Lee's <a href="https://scholar.google.com/citations?hl=en&user=k2sjjrwAAAAJ" target="_blank">Google Scholar page</a> for publications before 2021</p>
        </section>

      </div>
    </div>
    // </HashRouter>
  );
}

export default App;