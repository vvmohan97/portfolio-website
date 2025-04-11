import React from "react";
import "./Portfolio.css";
// import techIcon from '../asserts/tech_globe.png';
import techIcon from "../asserts/techicon1.png";

import avatarImage from "../asserts/project1.png"; // Add the path to your avatar image here
import appraisal from "../asserts/appraisal.jpg";
import chatbot from "../asserts/chattbot.png";
import adminpanel from "../asserts/adminpanel.jpg";
import npmlogo from "../asserts/npm_logo1.png";
import portfolio from "../asserts/portfolio.png";

const Portfolio = () => {
  const projects = [
    {
      name: "Appraisal Management  Application",
      techStack: "React,Redux",
      description:
        "This Application makes it easy for companies to review and track employee performance. It simplifies setting goals and creating clear, useful reports for everyone.",
      image: appraisal,
    },
    {
      name: "ChatBot for  Tourism Website",
      techStack: "ReactJs,Socket iO",
      description:
        "Created an interactive chatbot using React to enhance user engagement on the tourism chatbot.It helps to fetch real-time data,  up-to-dateinformation about tourist destinations, services, and booking options.",
      image: chatbot,
    },
    {
      name: "E-Commerce Admin Panel",
      techStack: "ReactJs, Firebase",
      description:
        "The E-Commerce Admin Panel allows businesses to efficiently manage products, orders, customers, and sales. It provides real-time analytics, inventory tracking, and user management to streamline store operations.",
      image: adminpanel,
    },
    {
      name: "NPM  Package",
      techStack: "ReactJs",
      description:
        "Enables developers to validate form input fields dynamically as users type, without requiring submission.",
      image: npmlogo,
    },
    {
      name: "Portfolio Website",
      techStack: "ReactJs",
      description:
        "The Portfolio Website showcases my skills, projects, and experience in frontend development. It features a clean, interactive design, smooth navigation, and responsive UI, allowing visitors to explore my work effortlessly.",
      image: portfolio,
    },
  ];

  return (
    <section id="portfolio">
      <div className="portfolio-container">
        {/* Heading and Description */}
        <div className="portfolio-content">
          <div className="text-content-div-portfolio">
            <h2 className="my-work-heading">My Works</h2>
            <h3>See My Works Which Will Amaze You!</h3>
            <p className="my-work-content">
              I build fast, reliable, and easy-to-manage websites that fit your
              business perfectly. Every site is crafted with clean,
              well-organized code for smooth performance and easy updates. With
              modern, user-friendly designs, even non-tech users can handle
              things with ease. Whether it’s a personal portfolio, online store,
              or a large business app — my websites are built to be responsive,
              efficient, and ready for long-term growth.
            </p>
          </div>
          <div className="avatar">
            <img src={avatarImage} alt="MohanKumar" />
          </div>
        </div>

        {/* Portfolio Cards */}
        <div className="portfolio-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-content">
                <div className="main-div-project-img">
                  <img className="project-image" src={project.image} />
                </div>
                <div className="heading-desc-content">
                  <h4 className="heading-project-title">{project.name}</h4>
                  <div className="project-content-div">
                    <p>{project.description}</p>
                  </div>
                </div>
                <div className="tech-div">
                  <div className="techstackicon-div">
                    <img
                      className="techstack-icon"
                      src={techIcon}
                      alt={project.name}
                    />
                  </div>
                  <p className="tech-stack-list-txt">{project.techStack}</p>
                </div>
              </div>

              {/* <div><p><span><img src={techIcon}/></span></p></div> */}
              {/* <div className="card-overlay">
                <h3>{project.name}</h3>
                <p>{project.techStack}</p>
                <div className="description">{project.description}</div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
