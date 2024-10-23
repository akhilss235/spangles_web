import React from "react";
import Logo from "../image/Spangles White 1.png";
import "../Style/Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { ImTumblr2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useMobileHooks } from "../hooks/useMobileHooks";

function Footer() {
  const disableRightClick = (event) => {
    event.preventDefault();
  };
  const {mobileView} = useMobileHooks()
  const logoMarginRight =  mobileView ? "0%" : "100%"
  const logoMarginLeft = mobileView ? "25%" : "0%" 
  const descriptionWidth = mobileView ? "100%" : "70%"


  return (
    <>
      <div className="footer " onContextMenu={disableRightClick}>
        <div style={{ marginTop: '6%',marginLeft:'6%',marginRight:'6%',marginBottom:'3%' }}>
          <div className="row ">
            <div className="col-lg-4 mb-5 ">
              <img src={Logo} alt="Logo" style={{ marginRight: logoMarginRight, marginLeft: logoMarginLeft,width: '50%', marginTop: '10%' }} />
              <div style={{ marginTop: '10%' }}>
                <div style={{ color: "white", textAlign: "start" }} >
                  <p style={{ width: descriptionWidth, color: 'white',textAlign: 'justify' }}>
                    In the words of Spangles Infotech, unbelievable results are
                    possible when marketing, technology, and creativity come
                    together through strategic planning. We constantly prioritize
                    business growth and conversions while acting in our client’s
                    best interests.</p>
                </div>
                <div style={{ color: "white", textAlign: "start", marginTop: '5%', marginBottom: '10%' }}>
                  <h3
                    style={{
                      color: "white",
                      marginTop: "25px",
                      textAlign: mobileView ?"center" : "start",
                    }}
                  >
                    Get connected with us
                  </h3>
                  <div className="mt-3 icon-container">


                    <Link to="https://www.instagram.com/spangles_infotech/ ">
                      <span className="icons1" style={{ color: "white" }}>
                        <FaInstagramSquare />
                      </span>
                    </Link>

                    <Link to='https://twitter.com/SpanglesI79310' style={{ color: "white" }}>
                      <span className="icons2 mb-5  mt-5">
                        <FaSquareXTwitter />
                      </span>
                    </Link>
                    <Link to='https://www.facebook.com/SpanglesInfotech' style={{ color: "white" }}>
                      <span className="icons3 mb-5 mt-5">
                        <FaFacebookSquare />
                      </span>
                    </Link>
                    <Link to='https://www.linkedin.com/in/spangles-infotech-8a6a17298/' style={{ color: "white" }}>
                      <span className="icons4 mb-5 mt-5">
                        <FaLinkedin />
                      </span>
                    </Link>


                    <Link to='https://www.youtube.com/channel/UCvRiHg7KK1wShmDNXZeQy_w/' style={{ color: "white", height: '50px' }}>
                      <span className="icons4 mb-5 mt-5">
                        <FaYoutubeSquare />
                      </span>
                    </Link>

                    <Link to='https://in.pinterest.com/infotech1131/' style={{ color: "white" }}>
                      <span className="icons4 mb-5 mt-5">
                        <FaPinterestSquare />
                      </span>
                    </Link>
                    {/* <Link to='https://www.tumblr.com/blog/spanglesinfotech/' style={{ color: "white" }}>
                      <span className="icons4 mb-5 mt-5">
                        <ImTumblr2 />

                      </span>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-2 mb-5"
              style={{ textAlign: 'start', marginTop: '4%' }}
            >
              <h3 style={{ color: "white", }}> Quick links</h3>
              <a href="/" style={{ color: "white", textDecoration: 'none' }}>
                <p style={{ color: "white", marginTop: '20%' }}>Home</p>
              </a>
              <a href="Aboutus" style={{ color: "white", textDecoration: 'none' }} >
                <p style={{ marginTop: '10%', color: 'white' }}>About Us</p></a>

              <a href="Services" style={{ color: "white", textDecoration: 'none' }} >
                <p style={{ marginTop: '10%', color: 'white' }}>Services</p></a>
              <a href="Portfolio" style={{ color: "white", textDecoration: 'none' }} >
                <p style={{ marginTop: '10%', color: 'white' }}>Portfolio</p></a>
              <a href="Ourproducts" style={{ color: "white", textDecoration: 'none' }} >
                <p style={{ marginTop: '10%', color: 'white' }}>Our Products</p></a>
              <a href="Blogs" style={{ color: "white", textDecoration: 'none' }} >
                <p style={{ marginTop: '10%', color: 'white' }}>Blogs</p></a>

            <a href="Gallery" style={{ color: "white", textDecoration: 'none' }} >
                <p style={{ marginTop: '10%',color:'white' }}>Gallery</p></a> 

              <a href="Career" style={{ color: "white", textDecoration: 'none' }} >
                <p style={{ marginTop: '10%', color: 'white' }}>Career</p></a>



              <a href="Contact" style={{ color: "white", textDecoration: 'none' }} >
                <p style={{ marginTop: '10%', color: 'white' }} >Contact us</p></a>

            </div>

            <div className="col-lg-3 mb-5" style={{ textAlign: 'start', marginTop: '4%' }}>
              <h3 style={{ color: "white", }}>Services</h3>
              <a href="Websitedesigningdevelopment" style={{ textDecoration: 'none' }}>
                <p style={{ color: "white", marginTop: '15%' }}>Website Designing and Development </p>
              </a>
              <a href="Webapplication" style={{ textDecoration: 'none' }}>
                <p style={{ color: "white", marginTop: '10%' }}>Website Application Development</p>
              </a>
              <a href="Mobileapp" style={{ textDecoration: 'none' }}>
                <p style={{ color: "white", marginTop: '10%' }}>Mobile App  Development</p>
              </a>
              <a href="Ecommerce" style={{ textDecoration: 'none' }}>
                <p style={{ color: "white", marginTop: '10%' }}>E-Commerce Development </p>
              </a>
              <a href="Testing" style={{ textDecoration: 'none' }}>
                <p style={{ color: "white", marginTop: '10%' }}>Software Testing </p>
              </a>
              <a href="UIUXdesigning" style={{ textDecoration: 'none' }}>
                <p style={{ color: "white", marginTop: '10%' }}>UI/UX Designing </p>
              </a>
            </div>
            <div className="col-lg-3 " style={{ textAlign: 'start', justifyContent: 'end' }}>
              <h3 style={{ color: "white", marginTop: '17%' }} >Support</h3>
              <p style={{ color: "white", marginTop: '13%' }}>Privacy Policy</p>
              <p style={{ color: "white", marginTop: '8%' }}>Terms of Service</p>
              <p style={{ color: "white", marginTop: '10%' }}>FAQ</p>
            </div>
            <hr style={{ color: "white" }}></hr>
          </div>

          <div className=" d-flex justify-content-between">
            <div style={{ textAlign: 'start', paddingTop: '1%' }} >
              <h3 style={{ color: "white", }} >Office Address</h3>
              <h6 style={{ color: "white", marginTop: '30px' }}>389, Joe Daniel st, Near palpannai,</h6>
              <h6 style={{ color: "white", marginTop: '15px' }}>Nagercoil, KK District -  629003 </h6>
            </div>
            <div style={{ textAlign: 'start', paddingTop: '1%' }}>
              <h3 style={{ color: "white", }}>Let's Talk</h3>
              <h6 style={{ color: "white", marginTop: '30px' }}>Office No :+91 8870731214 </h6>

              <h6 style={{ color: "white", marginTop: '15px' }}>
              Mail : info@spanglesinfotech.com
              

              </h6>
              <h6 style={{ color: "white", marginTop: '15px' }}>
                Gmail : spanglesinfotech@gmail.com 
              

              </h6>
            </div>
          </div>

        </div>
        <div className="footerend">
          <h6 style={{ color: "white", alignItems: 'center', textAlign: 'center' }}>
            2024 © spanglesinfotech.com. All rights reserved.
          </h6>
        </div>
      </div>
    </>
  );
}

export default Footer;






