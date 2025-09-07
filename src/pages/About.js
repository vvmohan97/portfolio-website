import React from 'react';
import './About.css';
import avatarImage from '../asserts/man_stand.png'; // Add the path to your avatar image here
import pdfFile from '../asserts/files/MohanKumar_VV_CV_FS.pdf'
const About = () => {
  return (
    <section id="about">
      <div className="about-content">
      <div className="avatar">
          <img src={avatarImage} alt="Jack Reacher" />
        </div>
        <div className="text-content-about">
          <h1>Need a Creative Product?<br/> I can Help You!</h1>
          <p>
          Hi! I’m MohanKumar. I’m a developer who loves building clean and easy-to-use websites. I enjoy turning ideas into real projects by finding creative solutions. I’m always excited to learn new skills, tools, and ideas.

              
          </p>
          <p>
          Along with working on my own front-end projects, I’ve also worked with teams where we had daily meetings, shared our code, and managed tasks together.
          </p>
          <div className="buttons">
            <button className="hire-button"><a href='#contact' style={{textDecoration:'none',color:'white'}}>Hire Me</a></button>
            <button className="cv-button"><a target='blank' style={{textDecoration:'none',color:'white'}} href={pdfFile}>Download CV </a></button>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default About;
