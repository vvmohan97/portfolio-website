import React, { useRef, useState } from "react";
import "./Contact.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import watching from "../asserts/contact.png";
import EmailIcon from "@mui/icons-material/Email";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import emailjs from "emailjs-com";
import { Toast } from "primereact/toast";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import Loader from "../utils/loader/Loader";

const Contact = () => {
  // State to store form data
  const formRef = useRef();
  const toastCenter = useRef(null);
  const [loading, setLoading] = useState(false);

  const socialLinks = [
    {
      title: "Github",
      url: "https://github.com/vvmohan97",
      icon: <GitHubIcon />,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/vvmohankumar-vv/",
      icon: <LinkedInIcon />,
    },
    { title: "Twitter", url: "http://twitter.com", icon: <TwitterIcon /> },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",

    subject: "",
    message: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formRef.current);

    console.log("Form Data:", formData);
    if (Object.entries(formData).length === "") {
      console.log("12345678");
    } else {
      setLoading(true);

      setLoading(true);
      await emailjs
        .sendForm(
          "service_seeyhgh",
          "template_e23msni",
          formRef.current,
          "qgXyHUhtuW7eQC72_"
        )
        .then(
          (result) => {
            if (result?.status === 200) {
              const thanksNote = "Thanks for Reaching me";
              const response = "E-mail Sent Successfully!";
              setLoading(false);
              setFormData({
                name: "",
                email: "",

                subject: "",
                message: "",
              });

              let successToast = {
                severity: "success",
                summary: thanksNote,
                detail: response,
                life: 3000,
              };

              toastCenter.current.show(successToast);
            } else {
              const Note = "Thanks for Reaching me";
              const badRes = result.text;
              let basdToast = {
                severity: "error",
                summary: Note,
                detail: badRes,
                life: 3000,
              };
              setLoading(false);

              toastCenter.current.show(basdToast);
            }
            console.log("Email sent successfully:", result.text);
          },
          (error) => {
            const Note = "Thanks for Reaching me";
            const badRes = error.text;
            let basdToast = {
              severity: "error",
              summary: Note,
              detail: badRes,
              life: 3000,
            };
            setLoading(false);

            toastCenter.current.show(basdToast);
            console.error("Error sending email:", error.text);
          }
        );
    }
    // You can handle form submission logic here (e.g., send data to a server)
  };

  return (
    <section id="contact">
      <div className="contact-container">
        {/* Contact Heading */}
        <Toast ref={toastCenter} position="top-right" />
        <div className="contact-heading">
          <h2>Get in Touch</h2>
          <p>
            Feel free to reach out to me via the contact form or directly at the
            details below.
          </p>{" "}
        </div>

        {/* Contact Content - Flexbox Layout */}
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-heading">
              <img src={watching} />
              {/* <h2 style={{textAlign:'start'}}>Have Project in Mind<br/>Please Drop a Message</h2>
          <p style={{textAlign:'start'}}>Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as possible.</p>
         */}
            </div>

            <ul>
              <li>
                {/* <div  className='data-stlye'> */}
                {/* <strong style={{marginTop:'10px'}}> */}
                {/* <EmailIcon  /> */}
                E-mail :{/* </strong> */}
                <span className="span-cls-email">
                  <a>&nbsp; vvmohan.vsr@gmail.com </a>
                </span>
                {/* </div> */}
              </li>
              <li>
                {/* <strong> */}
                Phone :{/* </strong>  */}
                <a>&nbsp; +91-9524244117</a>
              </li>
              <div className="social-icons-main-div">
                {socialLinks?.map((social, socialIndex) => (
                  <div key={socialIndex} className="icon-div-social">
                    <a target="blank" href={social?.url}>
                      {social?.icon}
                    </a>
                  </div>
                ))}
              </div>
            </ul>
          </div>
          {/* Contact Form */}
          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit}>
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
                  maxLength="1300"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={loading ? { opacity: "0.5" } : { opacity: "1" }}
                className="submit-btn"
              >
                {loading ? <Loader /> : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
