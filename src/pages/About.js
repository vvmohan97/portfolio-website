import React from 'react';
import './About.css';
import avatarImage from '../asserts/man_stand.png'; // Add the path to your avatar image here

const About = () => {
  return (
    <section id="about">
      <div className="about-content">
      <div className="avatar">
          <img src={avatarImage} alt="Jack Reacher" />
        </div>
        <div className="text-content-about">
          <h1>Need a Creative Product? I can Help You!</h1>
          <p>
            Hi! I’m MohanKumar, and I’m a developer who has passion for building clean web applications with intuitive functionalities.
             I enjoy the process of turning ideas into reality using creative solutions.
             
              I’m always curious about learning new skills, tools, and concepts.
              
          </p>
          <p>
          In addition to working on various solo Front-End projects, 
          I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.
          </p>
          <div className="buttons">
            <button className="hire-button">Hire Me</button>
            <button className="cv-button">Download CV</button>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default About;
