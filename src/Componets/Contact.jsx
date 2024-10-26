import React, { useState, useEffect,useRef } from 'react';
import { IconContext } from 'react-icons';
import { IoMdCall, IoIosMail } from 'react-icons/io';
import Footer from './Footer'; // Fixed typo in import
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../Style/Contact.css';
import Contactus from '../page/Contactus';

function Contact() {
  const ref = useRef(null)
  useEffect(() => {
    ref.current.focus();
  }, []);
  const disableRightClick = (event) => {
    event.preventDefault();
  };

  return (
    <div >
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

      <div className='Contact' onContextMenu={disableRightClick} ref={ref} tabIndex={-1} >
        <div className='container' style={{ marginBottom: '10%' }}>
          <h1 className='con1 sv'><b>LET’S GET CONNECTED</b></h1>
          <Contactus />
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
    </div>
  );
}

export default Contact;
