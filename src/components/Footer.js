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
          <p>Designed & Built by&nbsp;<span className='blink-text-name' style={{color:'#f0a500'}}>MohanKumar V V.&nbsp;</span>&copy; {new Date().getFullYear()}&nbsp;  All rights Reserved.</p>
            </div>  
      
        </div>
      </div>
    </footer>
  );
};

export default Footer;
