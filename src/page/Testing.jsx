import React, { useState } from 'react';
import Sv from '../image/ts.png';
import sv from '../image/ts1.png';
import { useNavigate } from "react-router-dom";
import Group111 from '../image/Group41.png';
import Group222 from '../image/Group51.png';
import Group333 from '../image/Group52.png';
import Group444 from '../image/Group53.png';
import Group555 from '../image/Group54.png';
import Group666 from '../image/Group55.png';
import Group777 from '../image/Group56.png';
import Group888 from '../image/Group57.png';
import Group999 from '../image/Group58.png';
import Group100 from '../image/Group59.png';
import { Helmet } from "react-helmet";
import '../Style/Services.css'
import Footer from '../Componets/Footer';
import { Container } from 'react-bootstrap';
import { useMobileHooks } from '../hooks/useMobileHooks';
import Servicesbuttone from '../Button/Servicesbuttone';


function Testing() {
    const {mobileView} = useMobileHooks();
    const [selectedType, setSelectedType] = useState('Types1');

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };
    const navigate = useNavigate();

    const Contact = () => {
        navigate(`/Contact`);
      };
      const disableRightClick = (event) => {
        event.preventDefault();
      };
    return (

        <div className='Testing' onContextMenu={disableRightClick}>
            <Helmet>
        <title>Software Testing Company | Spangles Infotech </title>
        <meta name="description" content="Spangles Infotech, best Software Testing Company in Nagercoil, India providing reliable quality software testing Services. Contact us now." />
        <meta name="keywords" content="Software testing, Quality Assurance services, Software QA Testing Service, Quality Assurance Services" />

      </Helmet>
            <Container>

                <div style={{ textAlign: 'center', marginTop: '100px' }}>
                    <h1 className='text1'><b>Software Testing</b></h1>
                    <p className='mt-5' style={{ width: '100%', fontSize: '20px' }}>
                        Looking for peace of mind in software reliability? Choose our trusted testing solutions.</p>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img
                            src={Sv}
                            className="mb-3"
                            alt="web designing"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className='col-sm-6 mt-5'>
                        <p style={{ marginTop: '20px', width: '90%' }}>
                            Spangles Infotech is a leading technology service provider in Nagercoil, Kanyakumari, India renowned for its Software testing services. With a focus on quality assurance and reliability, we ensures that software products
                            meet stringent standards of functionality, usability, and performance. We boasts extensive experience and expertise in the technology sector, positioning itself as a leader in providing cutting-edge solutions. Offering a suite of software testing services, we caters to diverse needs, including functional testing, usability testing,
                            performance testing, security testing, and more.
                        </p>
                        <p style={{ width: '90%' }}>
                            Spangles Infotech prioritizes quality assurance throughout the software development lifecycle, employing rigorous testing methodologies and best practices to identify and resolve defects. Recognizing the unique requirements of each project, Spangles Infotech develops customized testing strategies to address specific challenges and objectives, ensuring optimal outcomes for clients. With a team of skilled testing professionals equipped with in-depth domain knowledge and technical expertise, Spangles Infotech delivers reliable and efficient testing solutions.
                        </p>


                        <p style={{ width: '90%' }}>
                            We specialize in providing comprehensive software testing services, ensuring that your software products meet the highest standards of quality, functionality, and reliability.

                        </p>

                    </div>

                </div>


            </Container>

            <div style={{ backgroundColor: '#345261', height: '50%' }}>
                <Container>
                    <div className='d-flex justify-content-between p-3 cnt-to-expt-cont'>


                        <h4 style={{ color: 'white', textAlign:mobileView ? "center" : "" }} className='mt-1'>
                            Looking for peace of mind in software reliability?
                            Choose our trusted testing solutions.
                        </h4>
                        {/* <a href="Contact" style={{ textDecoration: 'none', color: '#345261', textAlign:mobileView ? "center" : ""  }} >
                            <button type="button" class="btn btn-light custom-buttons " style={{ width: 'auto', padding: '10px', marginLeft: '3%' }}>
                                Connect to an Expert now
                            </button></a> */}
                      <Servicesbuttone />
                    </div>
                </Container>
            </div>


            <Container>
                <div>
                    <h2 style={{ textAlign: 'center', color: '#345261', marginTop: '10%', marginBottom: '10% ' }}> <b>Why Spangles Infotech For Your Software Testing Services?</b></h2>
                </div>
                <div className={mobileView ? "column" : 'row '}>
                    <div className='col card m-1'>
                        <div  className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group111}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}
                                />
                            </div>
                            <div className='col p-3'>
                                <p>Expertise and

                                    <br /> Experience</p>

                            </div>
                        </div>
                    </div>


                    <div className='col card m-1'>
                        <div  className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group222}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-2'>Comprehensive
                                    <br></br> Testing Solutions    </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div  className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group333}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-2'>Quality Assurance   </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div  className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group444}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-2'>Tailored Testing<br></br>
                                    Strategies </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div  className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group555}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-2'> Cutting-Edge Tools
                                    <br></br> and Technologies </p>

                            </div>
                        </div>
                    </div>
                </div>



                <div className={mobileView ? "column" : 'row '} style={{ marginBottom: '10%' }}>
                    <div className='col card m-1'>
                        <div  className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group666}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}
                                />
                            </div>
                            <div className='col p-3'>
                                <p>Cost-Effective

                                    <br />   Solutions</p>

                            </div>
                        </div>
                    </div>


                    <div className='col card m-1'>
                        <div  className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group777}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-2'>Timely Delivery    </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div  className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group888}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-2'>Client-Centric
                                    <br></br>  Approach </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div  className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group999}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-2'>Continuous Support
                                    <br></br> and Improvement  </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div  className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group100}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-2'>Proven Track Record  </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>


                    <div className="col-sm-6" >
                        <h2 style={{ textAlign: 'start', marginBottom: '5%', color: '#345261' }} ><b>
                            What We Do In Software Testing?</b>
                        </h2>

                        <li  >Functional Testing </li>
                        <li className='mt-3'>Performance Testing </li>
                        <li className='mt-3'> Security Testing</li>
                        <li className='mt-3'>Usability Testing </li>
                        <li className='mt-3'>Compatibility Testing </li>
                        <li className='mt-3'> Regression Testing</li>
                        <li className='mt-3'>Automation Testing </li>

                        <li className='mt-3'>Load Testing </li>
                        <li className='mt-3'> Integration Testing</li>
                        <li className='mt-3'>Mobile App Testing </li>

                    </div>
                    <div className="col-sm-6">

                        <img
                            src={sv}
                            alt="web designing"
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>











                <div>

                    <h2 style={{ fontSize: '80px', color: '#345261', marginBottom: '10%', marginTop: '10%' }}> <b>FAQs</b></h2>
                </div>

                <div className='row' >
                    <div className='col-sm-6'>
                        <div
                            className={`card mb-3 ${selectedType === 'Types1' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types1')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types1' ? 'active-bold' : ''}`}  style={{ textAlign: 'start' }}>
                                    What is software testing, and why is it important?
                                </p>
                            </div>
                        </div>

                        <div
                            className={`card mb-3 ${selectedType === 'Types2' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types2')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types2' ? 'active-bold' : ''}`}  style={{ textAlign: 'start' }}>
                                    What types of software testing are there?
                                </p>                            </div>
                        </div>

                        {/* typ3  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types3' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types3')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types3' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    When should software testing be performed?                                                                   </p>
                            </div>
                        </div>
                        {/* typ4  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types4' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types4')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types4' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    How is software testing conducted?
                                </p>
                            </div>
                        </div>
                        {/* typ5  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types5' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types5')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types5' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    What are the benefits of software testing?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card boxborders-gradient-4 '>
                            <div className='card-body'>
                                {selectedType === 'Types1' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            What is software testing, and why is it important?
                                        </b></h4>
                                        <p className='p-2'>

                                            Software testing is the process of evaluating a software application to ensure it meets specified requirements and works as expected. It’s important because it helps identify defects early, reduce risks, and deliver high-quality software products.
                                        </p>
                                    </div>
                                )}
                                {selectedType === 'Types2' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            What types of software testing are there?                                            </b></h4>
                                        <p className='p-2' >

                                            There are various types of software testing, including functional testing, performance
                                            testing, security testing, usability testing, regression testing, and more, each serving
                                            different purposes and objectives.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types3' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            When should software testing be performed?
                                        </b></h4>
                                        <p className='p-2' >

                                            Software testing should be performed throughout the software development lifecycle,
                                            starting from the initial stages of development and continuing until the final release. Testing
                                            early and often helps catch issues sooner, reducing the cost and effort of fixing them later.              </p>
                                    </div>
                                )}

                                {selectedType === 'Types4' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            How is software testing conducted?
                                        </b></h4>
                                        <p className='p-2' >
                                            Software testing is conducted using various techniques, methodologies, and tools,
                                            depending on the type of testing being performed. It involves creating test cases, executing
                                            tests, analyzing results, and reporting defects to ensure that the software meets specified
                                            requirements and standards.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types5' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3 ' style={{ textAlign: 'start' }}> <b>
                                            What are the benefits of software testing?
                                        </b></h4>
                                        <p className='p-2'>
                                            Software testing offers numerous benefits, including improved software quality, enhanced
                                            user experience, reduced costs, increased customer satisfaction, risk mitigation, faster time-
                                            to-market, better performance, and competitive advantage.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>



            </Container>


            <Footer />
        </div>

    )
}





export default Testing
