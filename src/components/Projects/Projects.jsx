import React from 'react';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from './ProjectCard';
import 'animate.css';
import './Projects.css'

import creative from '../../assets/images/Creative.PNG';
import gadget from '../../assets/images/Gadget.PNG';
import chatapp from '../../assets/images/ChatApp.PNG';
import tictac from '../../assets/images/TicTacToe.PNG';

export const Projects = () => {

  const projects = [
    {
      title: <a href="#">Creative Tutors</a>,
      description: 'Website about tutors and services they provide.',
      imgUrl: creative,
    },
    {
      title: 'Inverter Business',
      description: 'Gadget borrow website',
      imgUrl: gadget,
    },
    {
      title: 'Chat App',
      description: 'Website about tutors and services they provide.',
      imgUrl: chatapp,
    },
    {
      title: 'Tic Tac Toe - Game',
      description: 'Gadget borrow website',
      imgUrl: tictac,
    },
  ];

  return (
    <section className="project" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`animate__animated ${isVisible ? 'animate__fadeIn' : ''}`}>
                  <h2>Projects</h2>
                  <p>
                    Welcome to the heart of my digital journey – a collection of projects that embody my passion for coding and innovation. Each project is a testament to my commitment to delivering solutions that not only meet but exceed expectations.
                    <br /> Here's a sneak peek into my project portfolio:
                  </p>
                  <div className="row">
                    {projects.map((project, index) => (
                      <div className="project-card" key={index}>
                        <ProjectCard {...project} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Projects;







// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import TrackVisibility from 'react-on-screen';
// import { ProjectCard } from "./ProjectCard";
// import 'animate.css';
// import './Projects.css';

// /**
//  * Websites, Apps & Games
//  */
// import creative from "../../assets/images/Creative.PNG"
// import gadget from "../../assets/images/Gadget.PNG";
// import colorSharp2 from "../../assets/images/color-sharp2.png";
// import chatapp from "../../assets/images/ChatApp.PNG";
// import tictac from "../../assets/images/TicTacToe.PNG";
// import bank from "../../assets/images/BankApp.PNG";
// import metric from "../../assets/images/metric.PNG";
// /**
//  * Certificates
//  */
// import gitc from "../../assets/images/git-c.png";
// import javas from "../../assets/images/cert5.png";
// import javac from "../../assets/images/java.png";
// import htmlc from "../../assets/images/html-css.png"
// import innovator from "../../assets/images/port3.png";
// import iot from "../../assets/images/cert3.png";
// import intro from "../../assets/images/cert4.png";
// import ai from "../../assets/images/cert2.png";
// import cloud from "../../assets/images/cloud-intro.png";

// export const Projects = () => {

//   const projects = [
//     {
//       title: <a href="#" >Creative Tutors </a>,
//       description: "Website about tutors and services they provide.",
//       imgUrl: creative,
//     },
//     {
//       title: "Inverter Business",
//       description: "Gadget borrow website",
//       imgUrl: gadget,
//     },
//     // {
//     //   title: "Business Startup",
//     //   description: "Design & Development",
//     //   imgUrl: projImg3,
//     // }
//   ];

//   const apps = [
//     {
//       title: "Chat App",
//       description: "Website about tutors and services they provide.",
//       imgUrl: chatapp,
//     },
//     {
//       title: "Tic Tac Toe - Game",
//       description: "Gadget borrow website",
//       imgUrl: tictac,
//     },
//     {
//       title: "CodeX Banking App",
//       description: "Design & Development",
//       imgUrl: bank,
//     },
//     {
//       title: "Metric Converter App",
//       description: "Convert Metrics",
//       imgUrl: metric
//     }
//   ];

//   const cert = [
//     {
//       title: "Git",
//       description: "",
//       imgUrl: gitc,
//     },
//     {
//       title: "Java",
//       description: "",
//       imgUrl: javac,
//     },
//     {
//       title: "JavaScript",
//       description: "",
//       imgUrl: javas,
//     }
//     ,
//     {
//       title: "HTML-CSS",
//       description: "",
//       imgUrl: htmlc,
//     },
//     {
//       title: "Innovator",
//       description: "",
//       imgUrl: innovator,
//     },
//     {
//       title: "IOT",
//       description: "",
//       imgUrl: iot,
//     },
//     {
//       title: "Coding Intro",
//       description: "",
//       imgUrl: intro,
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>Welcome to the heart of my digital journey – a collection of projects that embody my passion for coding and innovation. Each project is a testament to my commitment to delivering solutions that not only meet but exceed expectations.<br/> Here's a sneak peek into my project portfolio:</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Websites</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Web Apps & Games</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Certificates</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="second">
//                       <Row>
//                           {
//                             apps.map((apps, index) => {
//                               return (
//                                 <ProjectCard
//                                   key={index}
//                                   {...apps}
//                                   />
//                               )
//                             })
//                           }
//                         </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                     <Row>
//                           {
//                             cert.map((cert, index) => {
//                               return (
//                                 <ProjectCard
//                                   key={index}
//                                   {...cert}
//                                   />
//                               )
//                             })
//                           }
//                         </Row>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       {/* <img className="background-image-right" src={colorSharp2}></img> */}
//     </section>
//   )
// }