import React from 'react'
import '../Style/Portfolio.css'
import GP8 from '../image/pd2.png';
import GP9 from '../image/bc.png';
import GP10 from '../image/bb2.png';
import GP11 from '../image/tm2.png';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Ourproducts() {
  const navigate = useNavigate();

  const Churchmanagement = () => {
    navigate(`/Churchmanagement`);
  };
  const Bethclinic = () => {
    navigate(`/Bethclinic`);
  };

  const Bestbilling = () => {
    navigate(`/Bestbilling`);

  };
  const Tuitionmanagement = () => {
    navigate(`/Tuitionmanagement`);
  };
  const disableRightClick = (event) => {
    event.preventDefault();
  };
  return (
    <div onContextMenu={disableRightClick}>
      <Helmet>
        <title>Spangles Software Products | Spangles Infotech</title>
        <meta name="description" content="Spangles Infotech offers cutting-edge software products tailored to enhance business operations and efficiency. Our innovative solutions cater to diverse industry needs, ensuring optimal performance and user satisfaction." />
        <meta name="keywords" content="Software Products, Enterprise Solutions, crm software, software solutions, all in one software solutions" />

      </Helmet>


      <div className='Product' onContextMenu={disableRightClick}>
        <div className='container' style={{ textAlign: 'center', marginTop: '100px', marginBottom: '10%' }}>

          <div style={{ marginBottom: '10%' }} >
            <h1 className='sv'><b>OUR PRODUCTS
            </b></h1>


            <h3
              className=" mt-5 mb-5 text111"
              style={{
                fontStyle: "normal",

                textAlign: 'center'
              }}
            >
              Revolutionize Your Workflow with Our Cutting-Edge Software
            </h3>
            <p
              style={{ fontSize: "20px", textAlign: 'center', }}
            >
              Experience seamless integration, enhanced productivity, and intuitive design. Transform your business operations and stay ahead of the competition with our all-in-one solution.
            </p>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col-lg-3 mb-3" onClick={Churchmanagement}>
              <div className="card " style={{ height: "300px" }}>
                <div className="card-img-zoom">
                  <img src={GP8} alt="card" style={{ height: '200PX' }} />
                </div>
                <div className="card-body">
                  <h4
                    className="card-title  text11  "
                    style={{ color: "#345261" }}
                  >
                    Church Management Software

                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-3" onClick={Bethclinic}>
              <div className="card" style={{ height: "300px" }}>
                <div className="card-img-zoom">
                  <img src={GP9} alt="card" style={{ height: '200PX' }} />
                </div>
                <div className="card-body">
                  <h4
                    className="card-title text11 "
                    style={{ color: "#345261" }}
                  >

                    Clinic Management Software
                  </h4>
                  {/* <p className='card-text text11'>Web Designing</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-3" onClick={Bestbilling}>
              <div className="card" style={{ height: "300px" }}>
                <div className="card-img-zoom ">
                  <img src={GP10} alt="card" style={{ height: '200PX' }} />
                </div>
                <div className="card-body">
                  <h4
                    className="card-title text11 "
                    style={{ color: "#345261" }}
                  >
                    Billing Software
                  </h4>
                  {/* <p className='card-text text11'>Mobile Application</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-3" onClick={Tuitionmanagement}>
              <div className="card" style={{ height: "300px" }}>
                <div className="card-img-zoom ">
                  <img src={GP11} alt="card" style={{ height: '200PX' }} />
                </div>
                <div className="card-body">
                  <h4
                    className="card-title text11 "
                    style={{ color: "#345261" }}
                  >
                    Tuition Management Software
                  </h4>
                  {/* <p className='card-text text11'>Mobile Application</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}



export default Ourproducts
