import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { IoMdCall, IoIosMail } from 'react-icons/io';
import Footer from './Footer'; // Fixed typo in import
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import request from '../request';
import '../Style/Contact.css';

const Baseurl = "https://nodejs.spanglesinfotech.com";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: '' // Clear error for the specific field when user starts typing
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    try {
      await request.post("api/enquiries&messages/add/new", formData);
      setFormSubmitted(true);
      navigate(`/Successfully`);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({
        ...errors,
        form: "Failed to submit the form. Please try again later."
      });
    }
  };



  const disableRightClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta 
          name="description" 
          content="Contact us - Easily connect with us for inquiries, collaborations, or support regarding our innovative IT solutions and services. We're here to assist you in achieving your business goals effectively and efficiently" 
        />
        <meta 
          name="keywords" 
          content="Get in Touch, Inquiry, Contact Information, Support, Collaboration, Customer Service" 
        />
      </Helmet>

      <div className='Contact' onContextMenu={disableRightClick}>
        <div className='container' style={{ marginBottom: '10%' }}>
          <h1 className='con1 sv'><b>LET’S GET CONNECTED</b></h1>
          <div className="container">
            <div className="contactss mb-5 mt-5 p-5" style={{ justifyContent: "center" }}>
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <h6 className="text15">CONTACT US</h6>
                    <h1 className="text17"><b>Say Hey!</b></h1>
                  </div>
                </div>
                <div className="col-lg-6 mt-5">
                  <form className="form mt-5 mb-5" onSubmit={handleFormSubmit}>
                    <Form.Group className="float-label-control mt-5">
                      <Form.Control 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="float-label-control mt-5">
                      <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="float-label-control mt-5">
                      <Form.Control 
                        as="textarea" 
                        rows="2" 
                        name="message"
                        placeholder="Your Message" 
                        className="custom-textarea"
                        value={formData.message}
                        onChange={handleInputChange}
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                      <Button 
                        type="submit"
                        id="buttons"
                        className="mt-5 mb-5" 
                        style={{ color: 'white', backgroundColor: '#345261' }}
                      >
                        Send Message
                      </Button>
                    </div>
                    {errors.form && <p className="error">{errors.form}</p>}
                    {formSubmitted && <p className="success">Your message has been sent successfully!</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <span className='d-flex justify-content-center'>
                <IconContext.Provider value={{ size: '5.4em' }}>
                  <a href="tel:+918870731214" className="card con2">
                    <IoMdCall />
                  </a>
                </IconContext.Provider>
              </span>
              <h4 style={{ textAlign: 'center', color: '#345261', marginTop: '3%' }}>Phone Number</h4>
              <h6 style={{ textAlign: 'center', color: '#345261', marginTop: '2%' }}>+91 8870731214</h6>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-center">
                <IconContext.Provider value={{ size: '5.4em' }}>
                  <Link to="mailto:info@spanglesinfotech.com" className="card con2">
                    <IoIosMail />
                  </Link>
                </IconContext.Provider>
              </div>
              <h4 style={{ textAlign: 'center', color: '#345261', marginTop: '3%' }}>Mail</h4>
              <h6 style={{ textAlign: 'center', color: '#345261', marginTop: '2%' }}>info@spanglesinfotech.com</h6>
            </div>
          </div>
          <div className='con3' style={{ color: '#3E606F', backgroundColor: '#3E606F' }}>
            <iframe
              title="Embedded Content"
              width="100%"
              height="500px"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14165.38210584505!2d77.41265112817068!3d8.190894859831353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f167d777838f%3A0x7e8d376d21e96817!2sSpangles%20Infotech!5e0!3m2!1sen!2sin!4v1707979516679!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
