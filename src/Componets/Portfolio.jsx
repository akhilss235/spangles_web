import React from 'react'
import '../Style/Portfolio.css'
import GP8 from '../image/12.jpg';
import GP9 from '../image/OZI9ES2.jpg';
import GP10 from '../image/19.jpg';
import GP11 from '../image/20.jpg';
import GP12 from '../image/201.jpg';
import GP13 from '../image/22.jpg';
import GP14 from '../image/OW9BQF1.jpg';
import GP15 from '../image/OZI9ES1.jpg';
import Footer from '../Componets/Footer';
import { Helmet } from "react-helmet";

function Portfolio() {
  const disableRightClick = (event) => {
    event.preventDefault();
  };
    return (
<>
      <Helmet>
      <title>Our Portfolio | Spangles Infotech</title>
      <meta name="description" content="Our portfolio showcases a diverse range of successful projects, highlighting our expertise in software development, web solutions, and IT services. We have consistently delivered innovative and tailored solutions, driving success for businesses across various industries." />
      <meta name="keywords" content="Web design services, Web development company, Best website designers, Web app development companies, Custom web app development, Top mobile app development companies, Ecommerce web development services, Software testing firms" />
    </Helmet>
        <div className='Portfolio'onContextMenu={disableRightClick}>
            <div className='container' style={{ textAlign: 'center', marginTop: '100px',marginBottom:'10%' }}>
            <div style={{  marginBottom: '10%' }} >
            <h1 className='sv'><b>OUR RECENT WORKS</b></h1>
              <h3
                className=" mt-5 mb-5 text111"
                style={{
                  fontStyle: "normal",
                  textAlign:'center'
              
                }}
              >
                Proud projects that make us stand out
              </h3>
              <p
                style={{ fontSize: "20px", textAlign: 'center', }}
              >
                To achieve and maintain high standards we are committed to
                investing in the most talented IT support specialists in India,
                with the experience, creativity, and qualifications to exceed
                the highest expectations. We are known for our works and we hope
                you enjoy looking at some of our recent works.
              </p>
            </div>
            <div className="row ">
              <div className="col-lg-4 ">
                <div className="card " style={{ height: "330px" }}>
                  <div className="card-img-zoom">
                    <img src={GP8} alt="card" />
                  </div>
                    <h4
                      className=" text11 m-2 "
                      style={{ color: "#345261" }}
                    >
                      Beth clinic
                    </h4>
                 <p className='m-2' style={{color:'gray'}}>Clinic Manangement Software</p>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="card" style={{ height: "330px" }}>
                  <div className="card-img-zoom">
                    <img src={GP9} alt="card" />
                  </div>
            
                    <h4
                      className=" text11 m-2 "
                      style={{ color: "#345261" }}
                    >
                      Sree Krishna Textile
                    </h4>
                    <p className='m-2' style={{color:'gray'}}>E-Commerce Web Application </p>

                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="card" style={{ height: "330px" }}>
                  <div className="card-img-zoom ">
                    <img src={GP10} alt="card" />
                  </div>
                
                    <h4
                      className=" text11 m-2 "
                      style={{ color: "#345261" }}
                    >
                      Elyon
                    </h4>
                    <p className='m-2' style={{color:'gray'}}>Billing Software</p>

                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-4 ">
                <div className="card " style={{ height: "330px" }}>
                  <div className="card-img-zoom">
                    <img src={GP11} alt="card" />
                  </div>
                
                    <h4
                      className=" text11 m-2 "
                      style={{ color: "#345261" }}
                    >
                     SP Promoters 
                    </h4>
                    <p className='m-2' style={{color:'gray'}}> Website</p>

                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="card" style={{ height: "330px" }}>
                  <div className="card-img-zoom">
                    <img src={GP12} alt="card" />
                  </div>
            
                    <h4
                      className=" text11 m-2 "
                      style={{ color: "#345261" }}
                    >
                      CSI Church, Vyrakudi
                    </h4>
                    <p className='m-2' style={{color:'gray'}}>Church Manangement Software</p>

                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="card" style={{ height: "330px" }}>
                  <div className="card-img-zoom ">
                    <img src={GP13} alt="card" />
                  </div>
                
                    <h4
                      className=" text11 m-2 "
                      style={{ color: "#345261" }}
                    >
                  Oscar
                    </h4>
                    <p  className='m-2' style={{color:'gray'}}>Tuition Manangement Software</p>

                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 ">
                <div className="card " style={{ height: "330px" }}>
                  <div className="card-img-zoom">
                    <img src={GP14} alt="card" />
                  </div>
                
                    <h4
                      className=" text11 m-2 "
                      style={{ color: "#345261" }}
                    >
                      VM CSI Polytechnic College
                    </h4>
                    <p  className='m-2' style={{color:'gray'}}> Website</p>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="card" style={{ height: "330px" }}>
                  <div className="card-img-zoom">
                    <img src={GP15} alt="card" />
                  </div>
            
                    <h4
                      className=" text11 m-2 "
                      style={{ color: "#345261" }}
                    >
                      Nyc Ride
                    </h4>
                    <p  className='m-2' style={{color:'gray'}}> Web Application </p>

                </div>
              </div>

            </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Portfolio