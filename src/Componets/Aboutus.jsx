import React, { useState, useEffect } from 'react';
import LINE from '../image/Line 1.png';
import dp from '../image/Group.png';
import man from '../image/mbc.jpg';
import '../Style/About.css'
import Footer from './Footer';
import { Helmet } from "react-helmet";
import { useMobileHooks } from '../hooks/useMobileHooks';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return <h1 style={{ fontweight: 'bold', fontSize: '50px' }}>{count}+</h1>;
};
const Aboutus = () => {
  const {mobileView } = useMobileHooks()
  const disableRightClick = (event) => {
    event.preventDefault();
  };
  

  return (
    <>
      <Helmet>
        <title>About SPANGLES INFOTECH</title>
        <meta name="description" content="Spangles Infotech is a leading Software Company providing innovative and customised Software Solutions to our Clients. We excel in providing top-notch software services including web and mobile application development to clients worldwide" />
        <meta name="keywords" content="Software development company in Nagercoil, Website design company, Website development company, Web design services, Offshore software development, Custom software development companies, Software development firms, School management software, Student management software etc.
" />

      </Helmet>
      <div className='about' onContextMenu={disableRightClick}>

    <div className="about-head-section">
      <div className="col p-0">
        <div className="text-center">
          <h1 className="about3">
            <b>Your Vision, Our Expertise.</b>
          </h1>
          <div className="d-flex align-items-center justify-content-center stats-container mb-5">
            <div className='stats-item mx-5'>
              <h1>
                <b>
                  <Counter end={30} duration={500} className="counter-text" />
                </b>
              </h1>
              <p>Employees</p>
            </div>
            <img src={LINE} alt="Line separator" className='line-separator ' />
            <div className='stats-item mx-5'>
              <h1>
                <b>
                  <Counter end={50} duration={500} className="counter-text" />
                </b>
              </h1>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-6 fullwidth-cover">
        <img src={dp} alt="dp" className={`img-fluid`} />
      </div>
    </div>


        {/* SECTION 2  */}
      <div className='about4'>
        <div className='col-lg-12'>
          <div className='container'>
            <h1 className='about2'> <b>About Our Company</b> </h1>
            <p className='about5'>
            In the web and app development sector, Spangles Infotech, which was launched in 2016, We have helped hundreds of clients start their firms in practically every industry by enrolling them. Our objective is to respond to the increasing demand for top-notch
            web and mobile app development by building a strong and trustworthy development team. When we codetermine with a group of highly regarded, creative indigenous leaders, our viewpoint is expanded. Our crew aims to improve you by assisting you in realizing your ideas. Apart from accounting software and management systems, our team of experts provides outstanding solutions for churches, schools, universities, hotels, e-commerce sites, and web design. A company's convictions can entice customers in without being visible. With our sincere project and product outputs, we are happy to have won the trust of numerous clients; nonetheless, we must continue to work extremely hard to maintain this position. We are proud of our members for what they have accomplished, and we have always made priceless investments in them. Our crew has devoted our entire being and greatest endeavors to our work. Every member of our team strives to get better.
            </p>
            <p className='about5'>
              In the words of Spangles Infotech, unbelievable results are possible when marketing, technology, and creativity come together through strategic planning. We constantly prioritize business growth and conversions while acting in our client’s best interests.
            </p>
            <div className='about-vision-mission'>
              <div className="vision-cont">
                <h2 style={{ color: '#FFFFFF' }}> <b>OUR MISSION</b></h2>
                <p style={{ width: "100%", textAlign: mobileView ? "justify" : 'start', color: '#FFFFFF' }}>
                  Our mission is to become a leading software development and technology company that provides clients with anticipated technological and business solutions.
                </p>
              </div>
              <div className="mission-cont">
                <h2 style={{ textAlign: 'start', color: '#FFFFFF' }}> <b> OUR VISION</b></h2>
                <p style={{ color: '#FFFFFF', textAlign: mobileView ? "justify" : 'start', width: "100%" }}>
                  Our vision is to become an unrivalled software development and technology company by employing industry standards and cutting-edge technology to deliver pined for technological and business solutions to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    <div className="container cont">
      <h1 className="about7 mb-5" style={{ marginTop: '10%', marginBottom: '0%' }}>
        {/* <b> Our Team</b> */}
      </h1>

      <div className="row">
        <div className="black-box col-md-6 about-img-cont">
          <img src={man} alt="Logo" style={{ width: '80%', borderRadius: '10px'}} />
        </div>
        <div className="col-md-6">
          <div className="gray-box">
            <div className="card p-5 mt-3" style={{ borderRadius: '10px' }}>
              <h1><b style={{ fontSize: 'auto' }}>Jehu Vinsher</b></h1>
              <p style={{ fontSize: 'auto' }} className="Managing">Managing Director, Spangles</p>
              <p className="jesh " style={{ fontSize: 'auto' }} >
                I always place a high value on having close discourse with people throughout my career.
                Having ongoing interactions with our clients has helped me in better comprehending their demands
                and providing effective ideas. Our pie in the sky is to bid unique and phenomenal digital solutions
                for businesses worldwide. Placing myself in my peer's shoes and splurging the time to know them has
                helped me work hand in hand, and which in turn improved the outcome. Forging a milieu where everyone
                can reach their full potential and offering clients high added value is essential in this rapidly
                changing world. I make sure that my colleagues are evaluated meticulously with equal opportunity and
                support them with their career at SPANGLES. In times like now when profound changes cloud the future,
                I believe that SPANGLES can make an eloquent philanthropy to our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>



      </div>
      <Footer />
    </>
  )
}

export default Aboutus
