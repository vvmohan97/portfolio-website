import React from 'react';
import './Home.css';
import avatarImage from '../asserts/avatarhome2.png'; // Add the path to your avatar image here

const Home = () => {
  return (
    <section id="home">
      <div className="home-content">
        <div className="text-content">
          <h1><span className='hi-text'>Hi there,</span> I’m MohanKumar, a Frontend Developer.</h1>
          <p>
          A developer who loves crafting interactive and visually engaging experiences with React.js.
</p>
          <button className='get-in-touch-btn'><a style={{textDecoration:"none",color:"white"}} href='#contact'>Get In Touch</a></button>
          <p>Let’s build something amazing together!</p>
        </div>
        <div  className="avatar-home">
          <img src={avatarImage} alt="MohanKumar" />
        </div>
      </div>
    </section>
  );
};

export default Home;
