import React, { useState } from 'react';
import './Contact.css';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import watching from '../asserts/contact.png';
import EmailIcon from '@mui/icons-material/Email';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const Contact = () => {
  // State to store form data

const socialLinks =[
    {title:'Github',url :'https://github.com/vvmohan97',icon:<GitHubIcon/>},
    {title:'LinkedIn',url :'https://www.linkedin.com/in/vvmohankumar-vv/',icon:<LinkedInIcon/>}
,
{title:'Twitter',url :'http://twitter.com',icon:<TwitterIcon/>}

]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can handle form submission logic here (e.g., send data to a server)
  };

  return (
    <section id="contact">
      <div className="contact-container">
        {/* Contact Heading */}
        <div className="contact-heading">
          <h2>Get in Touch</h2>
          <p>
              Feel free to reach out to me via the contact form or directly at
              the details below.
            </p>        </div>

        {/* Contact Content - Flexbox Layout */}
        <div className="contact-content">
     
              {/* Contact Information */}
          <div className="contact-info">
          <div className="contact-heading">
            <img src={watching}/>
          {/* <h2 style={{textAlign:'start'}}>Have Project in Mind<br/>Please Drop a Message</h2>
          <p style={{textAlign:'start'}}>Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as possible.</p>
         */}
        </div>
         
            <ul>
              <li >

                <strong style={{marginTop:'10px'}}><EmailIcon style={{marginTop:'10px'}} /></strong>
                <span className='span-cls-email'>
                <a type='email'  href='email'> vvmohan.vsr@gmail.com </a></span>
              </li>
              <li>
                <strong><PhoneAndroidIcon/></strong> +91-9524244117
              </li>
              <div className='social-icons-main-div'>
                {
                    socialLinks?.map((social,socialIndex)=>(
<div className='icon-div-social'>
                 <a target='blank' href={social?.url}>{social?.icon}</a>
                </div>
                    ))
                }
              
                {/* <div>
                    qwert
                </div> */}
              </div>
              {/* <li>
                <strong>LinkedIn:</strong>{' '}
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{' '}
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </li> */}
            </ul>
          </div>
          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Contact;
