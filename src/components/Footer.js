import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        {/* Footer Content */}
       {/* <p>MohanKumarV V <span className='hi-text'>.</span> */}
        {/* </p>  */}

        <div className="footer-content">
          <div>
          <p>&copy; {new Date().getFullYear()}&nbsp;<span className='blink-text-name' style={{color:'#f0a500'}}>MohanKumar V V.</span>  All rights Reserved.</p>
            </div>  
      
        </div>
      </div>
    </footer>
  );
};

export default Footer;
