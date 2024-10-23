import React, { useState } from 'react';
import o1 from '../image/01.png';
import o2 from '../image/02.png';
import o3 from '../image/03.png';
import o4 from '../image/04.png';
import o5 from '../image/05.png';
import o6 from '../image/06.png';
import o7 from '../image/07.png';
import o8 from '../image/08.png';
import o9 from '../image/09.png';
import o10 from '../image/1010.png';
import Sv from '../image/tm.png';
import sv from '../image/tm2.png';
import '../Style/Services.css'
import Footer from '../Componets/Footer';
import { Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useMobileHooks } from '../hooks/useMobileHooks';

function Tuitionmanagement() {
    const {mobileView} = useMobileHooks()
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
        <div className='Tuitionmanagement' onContextMenu={disableRightClick}>
            <Helmet>
                <title> Best Tuition management Software | Spangles Infotech </title>
                <meta name="description" content="Spangles Infotech offers advanced tuition management software that streamlines administrative tasks, student enrollment, and fee collection. Our solution enhances communication and efficiency for educational institutions, ensuring a smooth and organized operation. " />
                <meta name="keywords" content="Tuition management software, Tuition management systems, tuition centre management system tutoring center management software " />

            </Helmet>
            <Container>
                <div style={{ textAlign: 'center', marginTop: '10%', marginBottom: '10%' }}>
                    <h1 className='text1'><b>Tuition Management Software</b></h1>
                    <p className='mt-5' style={{ width: '100%', fontSize: '20px' }}>
                        Empower your institution with seamless tuition management: simplifying payments,
                        optimizing financial aid, and ensuring student success.
                    </p>
                    <p style={{ width: '90%' }}>

                    </p>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img
                            src={Sv}
                            className="mb-3"
                            alt="web designing"
                            style={{ width: "80%" }}
                        />
                    </div>
                    <div className='col-sm-6 '>
                        <p style={{ marginTop: '20px', width: '90%' }}>
                            Tuition management software is a digital solution designed to streamline and automate the administrative tasks associated with managing tuition payments and student accounts in educational institutions. It facilitates the billing, invoicing, payment processing, and financial reporting processes, allowing schools, colleges, and universities to efficiently manage tuition fees, scholarships, financial aid, and student billing records. Additionally, tuition management software often integrates with student information systems (SIS) and accounting software to ensure seamless data flow and accurate financial management across the institution.
                        </p>
                        <button type="button" className="btn btn-outline-custom" style={{width: '200px', padding: '10px'}}>
                <a href="Contact" style={{textDecoration: 'none', color: 'inherit'}}>
                Contact Us 
                </a>
              </button>
                    </div>

                </div>
            </Container>

            <div style={{ backgroundColor: '#345261', height: '50%', marginTop: '10%' }}>
                <Container>
                    <div className='d-flex justify-content-between p-3 cnt-to-expt-cont'>


                        <h4 style={{ color: 'white', textAlign:mobileView ? "center" : "" }} className='mt-1'>
                            Searching for tuition management software to improve administrative efficiency?                                                      </h4>



                        <a href="Contact" style={{ textDecoration: 'none', color: '#345261', textAlign:mobileView ? "center" : "" }} >
                            <button type="button" class="btn btn-light custom-buttons " style={{ width: '300px', padding: '10px', marginLeft: '3%' }}>
                                Schedule a demo
                            </button></a>
                    </div>
                </Container>
            </div>


            <Container>
                <div>
                    <h2 style={{ textAlign: 'center', color: '#345261', marginTop: '10%', marginBottom: '5%' }}> <b>
                        Why Tuition Management Software?                  </b></h2>
                    <p style={{ textAlign: 'center', marginBottom: '5%' }}>
                        Tuition management software simplifies the billing and payment process for educational institutions, allowing them to efficiently manage student tuition fees, scholarships, and financial aid. It automates administrative tasks, enhances communication with students and parents, and provides real-time visibility into financial data, improving overall financial management and student satisfaction.

                    </p>
                    <h2 style={{ textAlign: 'center', color: '#345261', marginBottom: '10%' }}> <b>
                        Essential Features of Tuition Management Software :
                    </b></h2>
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Student Management :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Efficiently manage student records, enrollment, and academic records.

                    </p>
                    <img src={o1} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Course Management :</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Streamline course creation, scheduling, and enrollment.
                    </p>
                    <img src={o2} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Faculty Management  :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Simplify faculty administration, scheduling, and performance tracking.                    </p>
                    <img src={o3} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Assessment and Certification :</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Automate assessment processes and streamline certification tracking.

                    </p>
                    <img src={o4} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Administrative Functions :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Optimize administrative tasks and streamline operations.
                    </p>
                    <img src={o5} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Integration and Support :</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Seamless integration and dedicated support ensure smooth implementation and ongoing success
                    </p>
                    <img src={o6} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Reporting and Analytics :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Access a wealth of online learning materials and resources.
                    </p>
                    <img src={o7} className="image image-left" alt="web designing" />
                </div>



                <div className='row' style={{ marginTop: '10%' }}>

                    <div className='col-sm-7 ' >

                        <h2 style={{ textAlign: 'start', color: '#345261', }}><b>
                            How Tuition Management Software Works?</b></h2>
                        <p className='mt-3'>
                            Tuition management software simplifies tuition fee management by automating administrative tasks. It collects student information and calculates tuition fees based on enrollment details and financial aid. The software generates invoices and payment plans tailored to each student. Payments can be made through various channels, and the software tracks and updates payment statuses accordingly. Additionally, it provides reporting and communication features to facilitate financial transparency and efficient communication with students and parents.
                        </p>
                        <button type="button" className="btn btn-outline-custom" style={{width: '200px', padding: '10px'}}>
                <a href="Contact" style={{textDecoration: 'none', color: 'inherit'}}>
                Contact Us To Buy Now
                </a>
              </button>


                    </div>
                    <div className='col-sm-5'>
                        <img
                            src={sv}
                            className="mb-3"
                            alt="web designing"
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>



                <div>
                    <h2 style={{ fontSize: '80px', color: '#345261', marginBottom: '10%', marginTop: '10%' }}> <b>FAQs</b></h2>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <div
                            className={`card mb-3 ${selectedType === 'Types1' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types1')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types1' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    What features does the tuition management software offer?
                                </p>
                            </div>
                        </div>

                        <div
                            className={`card mb-3 ${selectedType === 'Types2' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types2')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types2' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    Is the tuition management software customizable to fit the specific needs of our
                                    educational institution?
                                </p>
                            </div>
                        </div>

                        {/* typ3  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types3' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types3')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types3' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>

                                    How user-friendly is the tuition management software for both administrators and
                                    students/parents?                                                                </p>
                            </div>
                        </div>
                        {/* typ4  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types4' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types4')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types4' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }} >
                                    Can the tuition management software handle tasks such as enrollment management, billing, and
                                    financial aid efficiently?
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


                                    Does the tuition management software offer integration with other educational systems or third-
                                    party applications?

                                </p>                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card boxborders-gradient-4 '>
                            <div className='card-body'>
                                {selectedType === 'Types1' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            What features does the tuition management software offer?
                                        </b></h4>
                                        <p className='p-2'>
                                            Tuition management software typically includes features such as student enrollment, tuition fee calculation, payment plan generation, billing and invoicing, financial aid management, reporting, and communication tools.
                                        </p>
                                    </div>
                                )}
                                {selectedType === 'Types2' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            Is the tuition management software customizable to fit the specific needs of our
                                            educational institution?

                                        </b></h4>
                                        <p className='p-2' >
                                            Many tuition management software platforms offer customization options to tailor the software to
                                            the unique requirements of your educational institution, including customizable payment plans,
                                            fields, and workflows.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types3' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            How user-friendly is the tuition management software for both administrators and
                                            students/parents?
                                        </b></h4>
                                        <p className='p-2' >


                                            Tuition management software is designed to be user-friendly, with intuitive interfaces and easy
                                            navigation. Most platforms offer training resources, tutorials, and customer support to help users
                                            get started and troubleshoot any issues.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types4' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>


                                            Can the tuition management software handle tasks such as enrollment management, billing, and
                                            financial aid efficiently?
                                        </b></h4>
                                        <p className='p-2' >
                                            Yes, top tuition management software platforms are capable of streamlining enrollment
                                            management, calculating tuition fees, generating payment plans, managing billing and invoicing, and
                                            handling financial aid processes efficiently.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types5' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3 ' style={{ textAlign: 'start' }}>
                                            <b>


                                                Does the tuition management software offer integration with other educational systems or third-
                                                party applications?

                                            </b></h4>
                                        <p className='p-2'>
                                            Many tuition management software platforms offer integrations with student information systems,
                                            accounting software, and other educational systems, allowing for seamless data sharing and
                                            workflow automation across different platforms.
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



export default Tuitionmanagement
