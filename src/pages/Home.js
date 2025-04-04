import React from 'react';
import './Home.css';
import avatarImage from '../asserts/avatarhome2.png'; // Add the path to your avatar image here

const Home = () => {
  return (
    <section id="home">
      <div className="home-content">
        <div className="text-content">
          <h1><span className='hi-text'>Hi there,</span> I’m MohanKumar.V V, a Frontend Developer.</h1>
          <p>
          A React.js developer who focuses on making websites that look great and work well.</p>
          <button className='get-in-touch-btn'><a style={{textDecoration:"none",color:"white"}} href='#contact'>Get In Touch</a></button>
          <p style={{marginTop:'15px'}}>Let’s build something amazing together!</p>
        </div>
        <div  className="avatar-home">
          <img src={avatarImage} alt="MohanKumar" />
        </div>
      </div>
    </section>
  );
};

export default Home;
