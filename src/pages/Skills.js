import React, { useState } from 'react';
import './Skills.css';
import webpackLogo from '../asserts/webpack_logo.png';
import gitLogo from '../asserts/git_logo.png';
import nodeLogo from '../asserts/node_logo.png';
import jsLogo from '../asserts/js_logo.png';
import reactLogo from '../asserts/react_logo.png';
import reduxLogo from '../asserts/redux_logo.jpg';
import vscodeLogo from '../asserts/vscode_logo.jpg';
import html5 from '../asserts/html_logo.jpg';
import cssLogo from '../asserts/css_logo.png';

const Skills = () => {
  const [showSkills, setShowSkills] = useState(true);
const skillSet =[
    {skillName : "HTML5", logo: html5},
    {skillName : "CSS", logo: cssLogo},

    {skillName : "React.js", logo: reactLogo},
    {skillName : "Redux", logo: reduxLogo},
    {skillName : "Node.js", logo: nodeLogo},
    {skillName : "JavaScript", logo: jsLogo},

]
const toolsSet =

[
    {toolName : "VS Code", logo: vscodeLogo},
    {toolName : "Git", logo: gitLogo},
    {toolName : "Webpack", logo: webpackLogo},
]
  const toggleSkills = () => setShowSkills(true);
  const toggleTools = () => setShowSkills(false);

  return (
    <section id="skills">
      <div className="skills-container">
        {/* Left Side: Content and Toggles */}
        <div className="skills-content">
          <h2>My Skills</h2>
          <p>
            Here are some of the skills and tools I work with. Click the toggles below to explore more about my capabilities.
          </p>
          <div className="toggle-buttons">
            <button
              onClick={toggleSkills}
              className={showSkills ? 'active' : ''}
            >
              Skills
            </button>
            <button
              onClick={toggleTools}
              className={!showSkills ? 'active' : ''}
            >
              Tools
            </button>
          </div>
        </div>

        {/* Right Side: Skills/Tools List */}
        <div className="skills-list">
          {showSkills ? (
            <div className="skills">
              <div className="cards-container">
      
               {
                    skillSet?.map((skill,skillIndex)=>(
                        // <>
                        <div className="card">
                  <img src={skill.logo} alt={skill.logo} />
                  <div className="card-info">
                    <span>{skill.skillName}</span>
                  </div>
                  </div>

                    ))
                }
          
                
                </div>
                </div>
              
            
          ) : (
            <div className="tools">
              <div className="cards-container">
                {
                    toolsSet?.map((tools,toolsIndex)=>(
                        <div className="card">
                        <img src={tools.logo} alt={tools.logo} />
                        <div className="card-info">
                          <span>{tools.toolName}</span>
                        </div>
                        </div>
                    ))
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
