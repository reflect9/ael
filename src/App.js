// import logo from './logo.svg';
import tak_image from "./images/member_photo/tak.jpg";
import seongyeomkim_image from "./images/member_photo/seongyeomkim.jpg";
import jeehunchoi_image from "./images/member_photo/jeehunchoi.jpg";
import joohyoungpark_image from "./images/member_photo/joohyoungpark.jpeg";
// import noun_person from "./images/noun_person.png";
import noun_person_svg from "./images/noun_Human_823373.svg";
import image_ids_all from "./images/project_photo/ids-all.png";
import maehwasoo from "./images/project_photo/maehwasoo.png";
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
          <h2>Vision</h2>
          <p>
            Welcome to the AI Experience Lab (AEL) founded by prof. <a href="http://www.takyeonlee.com" target='_blank'>Tak Yeon Lee</a> in 2021. We create innovation solutions for real-world problems by integrating the power of <em>design</em>, <em>data</em>, and <em>AI-technology</em>. The following manifesto tells about our approach in detail.
          </p>

          <h3><em>Data-Centric Design</em> over Traditional Industrial Design</h3>
          <p className="indented">
            Digital transformation is fundamentally changing how products and services operate and deliver value to people. Data now has become the lens to understand people, and the oil that runs AI-powered machines. AEL's primary goal is to create innovative yet practical solutions for challenging problems. To achieve the goal, we leverage individual researchers' creative and constructive mindsets for finding insights from data, and building prototypes with data and AI technologies. 
          </p>

          <h3><em>Network-oriented Design</em> over Human-Centered Design</h3>
          <p className="indented">
            The world is evolving into a giant network of human/non-human stakeholders. It gets harder and harder for designers to satisfy individual end-users. While holding the basic principles of HCD, we treat end-users with the same level of importance as other nodes such as other user groups, businesses, and even AI models. That being said, we try to mediate interests and tensions within the network rather than to satisfy a specific target users. 
          </p>

          <h3><em>Prototype for Iterative Learning</em> over Prototype for Demonstration</h3>
          <p className="indented">
            We build prototypes to test hypothesis, to enlighten ourselves and to step up the next cycle of iterations rather than showing off with high-fidelity prototypes.
          </p>


          <h3><em>Problem Solving</em> over Problem Discovery</h3>
          <p className="indented">
            For the last couple decades designers have been very successful at finding interesting problems to solve. However, the digital transformation and AI technology offer unprecedented tools to get low-hanging fruits (i.e. solving boring yet painful problems). For instance, using AI to remove a single step from daily tasks is as interesting as spotting a novel problem that no one thought.
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
              <a href="https://www.takyeonlee.com" target='_blank'><img src={tak_image} /></a>
              <div className="name">Tak Yeon, Lee</div>
              <div className="role">Assistant Professor</div>
              <div className="email">
                takyeonlee@kaist.ac.kr
              </div>
              <div className="website">
                <a href="https://www.takyeonlee.com">website</a>
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
              <div className="name">Juhyeong, Park</div>
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



        {/* Section. Projects */}
        <section>
          <h2>Projects</h2>
          <div className="project">
            <div className="title">
                AI-supported Tools for Authoring Immersive Data Storytelling
            </div>
            <div className="contributors">
              <b>Seon Gyeom Kim</b>, and <b>Tak Yeon lee</b>. 
              <span className="sponsor"> Sponsored by <b>Adobe Research, San Jose, USA</b></span>
            </div>
            <div className="time">
              March 2021 - 
            </div>
            <div className="description">
              This project aims to build an AI-assisted  authoring tool of immersive data storytelling (IDS). Our tool focuses on maximizing the following benefits of IDS: (1) Meaningful and engaging composition of charts in 3D space, (2) Embodied interaction between presenter and charts, (3) Enabling collaborative data exploration in a virtual space. Our tool makes IDS authoring easier and more effective by automating low-level specifications and recommending semantically meaningful chart arrangements. 
            </div>
            <div className="image" style={{margin:"20px auto", width:"80%",}}>
              <img src={image_ids_all}/>
            </div>
            
          </div>

          <div className="project">
            <div className="title">
                Data-Driven Discovery for Design Opportunities in the Context of Consumer Electronics
            </div>
            <div className="contributors">
              <b>Tak Yeon lee</b>. 
              <span className="sponsor"> Sponsored by <b>LG Electronics, South Korea</b></span>
            </div>
            <div className="time">
              March 2021 - September 2021
            </div>
            <div className="description">
              Data-driven discovery is a global trend for any business, and 
              consumer electronics is not an exception. This project aims to design, implement, and deliver 
              an interactive dashboard for in-house designers. Designers can use the dashboard to understand
              their customers' lifestyle and preferences on consumer electronics.  
              This is a six-month consulting project that prof Tak Yeon Lee did with LG Electronics. 
            </div>
          </div>

          <div className="project">
            <div className="title">
                MaeHwaSoo - Interactive Curriculum Explorer for College Students
            </div>
            <div className="contributors">
              <b>Minwoo Kim</b>. Guided by <b>Seok-Hyoung Bae</b>, <b>Tak Yeon lee</b>. 
              <span className="sponsor"> Sponsored by <b>AEL</b></span>
            </div>
            <div className="time">
              June 2021 - 
              
            </div>
            <div className="description">
              College students regularly spend time on checking their progress toward graduation. 
              MaeHwaSoo is a web-based interactive platform for students to quickly check 
              whether they are ready to graduate, and how many / what classes they need to take until graduation.
              This project was originally initiated by a undergraduate student Minwoo Kim, and now became an open-source 
              project maintained and improved by other contributors in KAIST. 
              <span className="link">
                <a href="https://uce-kaist-preview.herokuapp.com/" target="_blank">Visit the site</a>
              </span>
            </div>
            <div className="image" style={{margin:"20px auto", width:"80%",}}>
              <img src={maehwasoo}/>
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
                  An Evaluation-Focused Framework for Visualization Recommendation Algorithms
                </div>
                <div className="authors">
                Zehua Zeng, Phoebe Moh, Fan Du, Jane Hoffswell, <em>Tak Yeon Lee</em>, Sana Malik, Eunyee Koh, Leilani Battle
                </div>
                <div className="description">
                Proceedings of the 32nd IEEE VIS 2021, Visualization Conference
                <span class="acknowledgement">Honorable Mention</span>
                <a className="link" target="_blank" href="https://homes.cs.washington.edu/~leibatt/static/papers/zeng2021evaluation.pdf">[PDF]</a>
                </div>
              </div>
            </li>

            <li>
              <div className="bib-item">
                <div className="title">
                  Generating Accurate Caption Units for Figure Captioning
                  
                </div>
                <div className="authors">
                Xin Qian, Eunyee Koh, Fan Du, Sungchul Kim, Joel Chan, Ryan A Rossi, Sana Malik, <em>Tak Yeon Lee</em>
                </div>
                <div className="description">
                Proceedings of the Web Conference 2021 (WWW '21) Association for Computing Machinery, New York, NY, USA, 2792–2804. DOI:https://doi.org/10.1145/3442381.3449923
                <a className="link" target="_blank" href="https://terpconnect.umd.edu/~xinq/Figure_captioning_WWW21.pdf">[PDF]</a>
                </div>
              </div>
            </li>

            <li>
              <div className="bib-item">
                <div className="title">
                  EXACTA: Explainable Column Annotation
                </div>
                <div className="authors">
                Yikun Xian, Handong Zhao, <em>Tak Yeon Lee</em>, Sungchul Kim, Ryan Rossi, Zuohui Fu, Gerard de Melo and S. Muthukrishnan
                </div>
                <div className="description">
                KDD '21: Proceedings of the 19th ACM SIGKDD international conference on Knowledge discovery and data mining (ACM) Association for Computing Machinery, New York, NY, USA, 2792–2804. 
                <a className="link" target="_blank" href="https://orcax.github.io/publications/">[PDF]</a>
                </div>
              </div>
            </li>

            <li>
              <div className="bib-item">
                <div className="title">
                  Learning to Recommend Visualizations from Data
                </div>
                <div className="authors">
                Xin Qian, Ryan Rossi, Fan Du, Sungchul Kim, Eunyee Koh, Sana Malik, <em>Tak Yeon Lee</em>, and Joel Chan
                </div>
                <div className="description">
                KDD '21: Proceedings of the 19th ACM SIGKDD international conference on Knowledge discovery and data mining (ACM) Association for Computing Machinery, New York, NY, USA, 2792–2804. 
                <a className="link" target="_blank" href="https://www.terpconnect.umd.edu/~xinq/Learning_to_Recommend_Vis_from_Data_KDD21.pdf">[PDF]</a>
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
                Xin Qian, Ryan A Rossi, Fan Du, Sungchul Kim, Eunyee Koh, Sana Malik, <em>Tak Yeon Lee</em>, Nesreen K Ahmed
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
