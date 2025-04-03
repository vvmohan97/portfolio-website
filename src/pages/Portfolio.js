import React from 'react';
import './Portfolio.css';
import techIcon from '../asserts/tech_icon.png';
import avatarImage from '../asserts/project1.png'; // Add the path to your avatar image here

const Portfolio = () => {
  const projects = [
    {
      name: 'Appraisal Management  Application',
      techStack: 'React, Node.js, MongoDB',
      description: 'This Application makes it easy for companies to review and track employee performance. It simplifies setting goals and creating clear, useful reports for everyone.',
      image: 'https://via.placeholder.com/300x200.png?text=Project+1',
    },
    {
      name: 'ChatBot for  Tourism Website',
      techStack: 'ReactJs,SocketIO',
      description: 'Created an interactive chatbot using React to enhance user engagement on the tourism chatbot.It helps to fetch real-time data,  up-to-dateinformation about tourist destinations, services, and booking options.',
      image: 'https://via.placeholder.com/300x200.png?text=Project+2',
    },
    {
      name: 'E-Commerce Admin Panel',
      techStack: 'ReactJs, Firebase',
      description: 'The E-Commerce Admin Panel allows businesses to efficiently manage products, orders, customers, and sales. It provides real-time analytics, inventory tracking, and user management to streamline store operations.',
      image: 'https://via.placeholder.com/300x200.png?text=Project+3',
    },
    {
      name: 'NPM  Package',
      techStack: 'ReactJs',
      description: 'Enables developers to validate form input fields dynamically as users type, without requiring submission.',
      image: 'https://via.placeholder.com/300x200.png?text=Project+4',
    },
    {
        name: 'Portfolio Website',
        techStack: 'ReactJs',
        description: 'The Portfolio Website showcases my skills, projects, and experience in frontend development. It features a clean, interactive design, smooth navigation, and responsive UI, allowing visitors to explore my work effortlessly.',
        image: 'https://via.placeholder.com/300x200.png?text=Project+4',
      },
  ];

  return (
    <section id="portfolio">
      <div className="portfolio-container">
        {/* Heading and Description */}
        <div className="portfolio-content">
            <div className='text-content-div-portfolio'>
            <h2 className='my-work-heading'>My Works</h2>
            <h3>See My Works Which Will Amaze You!</h3>
          <p className='my-work-content'>
          We develop high-quality, scalable, and long-lasting websites tailored to meet business needs. Our solutions feature well-documented, clean, and maintainable code, ensuring seamless performance and easy future enhancements. With intuitive and elegant interfaces, we create user-friendly experiences that even non-technical clients can manage effortlessly. Whether it's a portfolio, e-commerce, or enterprise application, our websites are built for efficiency, responsiveness, and long-term success.










          </p>
          </div>
         <div  className="avatar">
                <img src={avatarImage} alt="MohanKumar" />
              </div>
           
     
        </div>

        {/* Portfolio Cards */}
        <div className="portfolio-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
                <div className='project-card-content'>
               <div className='heading-desc-content'>
                 <h4 className='heading-project-title'>{project.name}</h4>
                <p>{project.description}</p>
                </div>
                <div className='tech-div'>
                <div className='techstackicon-div'>
                <img className='techstack-icon' src={techIcon} alt={project.name} />
           
                    </div>
                    <p className='tech-stack-list-txt'>{project.techStack}</p>
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
