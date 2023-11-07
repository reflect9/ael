import iitp from "./images/project_photo/iitp.png";
import fush from "./images/project_photo/fush.png";
import skully from "./images/project_photo/skully.png";
import ids from "./images/project_photo/ids.png";
import korail from "./images/project_photo/korail.png";
import image_sgd_all from "./images/project_photo/SGD/sgd_all.jpg";
import maehwasoo from "./images/project_photo/maehwasoo.png";

const Projects=(
<section id="projects">
<h2>Projects</h2>


<div className="project">
  <div className="title">
      Data Visualization for Alleviating Stress of Emotional Labor Over the Phone
  </div>
  <div className="contributors">
    <b>AEL in collaboration with many labs @ KAIST, Yonsei University, and industry</b>. 
    <span className="sponsor"> Sponsored by <b><a target='_blank' href='https://www.iitp.kr/main.it'>IITP 정보통신평가원</a></b></span>
  </div>
  <div className="time">
    2022 - 
  </div>
  <div className="description">
    As part of a large research team, AEL has been working on an IITP-funded project. The project's goal is to 
    alleviate the stress of emotional workers at call centers. Our team's responsibility is to visualize digital twin of emotional workers' 
    work-related stress factors. 
  </div>
  <div className="image" style={{margin:"20px auto", width:"80%",}}>
    <img src={iitp}/>
  </div>
</div>

<div className="project">
  <div className="title">
      Future Home for Family 
  </div>
  <div className="contributors">
    <b>AEL in collaboration with many labs @ KAIST</b>. 
    <span className="sponsor"> Sponsored by <b>TaeJae Research Foundation (<a target='_blank' href='http://www.dbew.or.kr/'>태재연구재단</a>)</b></span>
  </div>
  <div className="time">
    2022 - 
  </div>
  <div className="description">
    As part of a large research team at KAIST, AEL has been working on how future home should support family members. 
    During the first year the team has led the System Design class, and created some interesting <a href='https://takyeon.notion.site/Term-Projects-ID403-a6407bf323bc4f0cb0e0496944a640bb'>design concepts</a>. 
  </div>
  <div className="image" style={{margin:"20px auto", width:"80%",}}>
    <img src={fush}/>
  </div>
</div>

<div className="project">
  <div className="title">
      Interactive Gender Estimation of Human Skull
  </div>
  <div className="contributors">
    <b>SeungHo Baek</b>, and <b>Tak Yeon lee</b>. 
    <span className="sponsor"> Sponsored by <b>National Forensic Service (국립과학수사연구원)</b></span>
  </div>
  <div className="time">
    March 2022 - November 2022
  </div>
  <div className="description">
    Gender estimation is the first step when an unidentified skull is found. Gender estimation is currently done by forensic experts. However, we developed a novel web appication that allows non-expert users to estimate gender of any skull with only three images. We trained a computer vision model from rendered images of 800 3D skull models, which exceeds state-of-the-art   
  </div>
  <div className="image" style={{margin:"20px auto", width:"80%",}}>
    <img src={skully}/>
  </div>
</div>

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
    <img src={ids}/>
  </div>
</div>

<div className="project">
  <div className="title">
      Interactive Dashboard for High-Speed Train Safety Management
  </div>
  <div className="contributors">
    <span className="sponsor"> Sponsored by <b>KORAIL, South Korea</b></span>
  </div>
  <div className="time">
    March 2021 - September 2021
  </div>
  <div className="description">
    Sensor data is a critical source of information for high-speed train safety management. However, it is not easy to understand the overall status of the train from the raw sensor data. This project aims to design, implement, and deliver an interactive dashboard for train operators. Operators can use the dashboard to understand the overall status of the train, and to quickly identify abnormal situations. 
  </div>
  <div className="image" style={{margin:"20px auto", width:"80%",}}>
    <img src={korail}/>
  </div>
</div>

{/* <div className="project">
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
</div> */}

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
      <a href="https://graduate-kaist.herokuapp.com/" target="_blank">Visit the site</a>
    </span>
  </div>
  <div className="image" style={{margin:"20px auto", width:"80%",}}>
    <img src={maehwasoo}/>
  </div>
</div>
</section>
);

export default Projects;