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
import Sv from '../image/bc.png';
import sv from '../image/bc2.png';
import '../Style/Services.css'
import Footer from '../Componets/Footer';
import { Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useMobileHooks } from '../hooks/useMobileHooks';

function Bethclinic() {
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
        <div className='Bethclinic' onContextMenu={disableRightClick} >
            <Helmet>
                <title>Best Clinic Management Software | Spangles Infotech  </title>
                <meta name="description" content="Spangles Infotech provides top-tier clinic management software, ensuring seamless administrative operations and enhanced patient care. " />
                <meta name="keywords" content=" Clinic management software, Clinic management , Best clinic management software, clinic inventory management system, Crm for medical clinic, Best clinic software, Clinic patient management system" />

            </Helmet>
            <Container>
                <div style={{ textAlign: 'center', marginTop: '10%', marginBottom: '10%' }}>
                    <h1 className='text1'><b>Clinic Management Software</b></h1>
                    <p className='mt-5' style={{ width: '100%', fontSize: '20px' }}>
                        Efficiently manage appointments, patient records, and more with our clinic management software.         </p>
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
                            Clinical Management Software (CMS) is designed to streamline and enhance the operational efficiency of hospitals and other healthcare facilities. These systems are critical for managing clinical workflows, patient data, and administrative processes.
                        </p>
                        <p style={{ width: '90%' }}>
                            Experience the Best Clinical Management Software with our Clinical Management Software.  Clinical Management Software CMS is designed to provide healthcare facilities with an integrated, efficient, and user-friendly platform for managing all aspects of clinical operations. Our software aims to enhance patient care, streamline administrative processes, and improve overall operational efficiency.
                        </p>
                        <button type="button" className="btn btn-outline-custom" style={{width: '200px', padding: '10px'}}>
                <a href="Contact" style={{textDecoration: 'none', color: 'inherit'}}>
                  Contact us
                </a>
              </button>
        
                    </div>

                </div>
            </Container>

            <div style={{ backgroundColor: '#345261', height: '50%', marginTop: '10%' }}>
                <Container>
                    <div className='d-flex justify-content-between p-3'>


                        <h4 style={{ color: 'white', textAlign:mobileView ? "center" : "" }}  className='mt-1' >
                            Are you in search of the top clinical management software available?
                        </h4>
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
                        Why Clinical Management Software?                    </b></h2>
                    <p style={{ textAlign: 'center', marginBottom: '5%' }}>
                        Clinic management software streamlines administrative tasks and enhances patient care by providing quick access to medical records and improving communication between staff and patients. It optimizes resource allocation, ensures regulatory compliance, and contributes to overall operational efficiency in healthcare facilities.
                    </p>
                    <h2 style={{ textAlign: 'center', color: '#345261', marginBottom: '10%' }}> <b>
                        Essential Features Of Clinic Management Software:                   </b></h2>
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Appointment Scheduling :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Appointment scheduling in Clinical Management Software automates bookings and reminders, enhancing efficiency and reducing no-shows.
                    </p>
                    <img src={o1} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Patient Registration and Management :</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Patient registration and management streamline capturing, updating, and accessing patient information for efficient healthcare delivery.                    </p>
                    <img src={o2} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Electronic Health Records (EHR) :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Electronic Health Records (EHR) digitally store comprehensive patient health information, enabling seamless access and management by healthcare providers.                    </p>
                    <img src={o3} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Billing and Invoicing :</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Billing and invoicing in clinical management software automate the process of generating, tracking, and managing patient invoices and payments.
                    </p>
                    <img src={o4} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Prescription Management :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Prescription management streamlines the process of creating, tracking, and fulfilling medication prescriptions electronically.
                    </p>
                    <img src={o5} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Inventory Management :</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Inventory management efficiently tracks and manages medical supplies and pharmaceuticals to optimize stock levels and ensure availability.                    </p>
                    <img src={o6} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Reporting and Analytics :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Reporting and analytics in clinical management software provide insights through data analysis, facilitating informed decision-making and performance monitoring.                    </p>
                    <img src={o7} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Lab Integration :</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Lab integration enables seamless communication and data exchange with laboratory systems for efficient test ordering and results retrieval.                    </p>
                    <img src={o8} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Document Management :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Document management in clinical management software organizes and stores patient related documents for easy access, ensuring compliance and efficient information retrieval.                    </p>
                    <img src={o9} className="image image-left" alt="web designing" />
                </div>





                <div className='row' style={{ marginTop: '10%' }}>

                    <div className='col-sm-7 '>

                        <h2 style={{ textAlign: 'start', color: '#345261', marginTop: '10%' }}><b>
                            How Clinical Management Software Works?</b></h2>
                        <p className='mt-3'>
                            Clinical Management Software streamlines healthcare operations by digitizing administrative tasks like patient registration, appointment scheduling, and billing. Healthcare providers document patient encounters and treatment plans directly into the system, ensuring comprehensive and accurate electronic health records (EHR). The software offers decision support tools, such as medication alerts and clinical guidelines, to assist providers in making informed decisions. Automated billing processes generate invoices and submit insurance claims, reducing paperwork and billing errors. Reporting and analytics tools provide insights into clinic performance, enabling continuous improvement in patient care and operational efficiency.                        </p>
                   
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
                        <div className={`card mb-3 ${selectedType === 'Types1' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types1')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types1' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    What features does  Clinic’s clinic management
                                    software offer?
                                </p>
                            </div>
                        </div>

                        <div
                            className={`card mb-3 ${selectedType === 'Types2' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types2')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types2' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    Is Clinic’s software customizable to fit the specific needs of our clinic?                                                         </p>
                            </div>
                        </div>

                        {/* typ3  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types3' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types3')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types3' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    How easy is it to use Clinic’s software for both clinic staff and patients?                                                                   </p>
                            </div>
                        </div>
                        {/* typ4  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types4' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types4')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types4' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }} >

                                    Can Clinic’s software handle tasks such as appointment scheduling, patient records
                                    management, and billing efficiently?
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

                                    Does  Clinic’s software offer integration with other healthcare systems or third-party
                                    applications?

                                </p>                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card boxborders-gradient-4 '>
                            <div className='card-body'>
                                {selectedType === 'Types1' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            What features does Clinic’s clinic management
                                            software offer?
                                        </b></h4>
                                        <p className='p-2'>


                                            Clinic’s software offers features such as appointment scheduling, patient registration, electronic health records (EHR), billing and invoicing, inventory management, reporting and analytics, and integration with other healthcare systems.
                                        </p>
                                    </div>
                                )}
                                {selectedType === 'Types2' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            Is Clinic’s software customizable to fit the specific needs of our clinic?
                                        </b></h4>
                                        <p className='p-2' >

                                            Yes,Clinic’s software is highly customizable, allowing clinics to tailor it to their unique
                                            workflows, preferences, and requirements
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types3' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            How easy is it to use Clinic’s software for both clinic staff and patients?
                                        </b></h4>
                                        <p className='p-2' >


                                            Clinic’s software is designed with user-friendly interfaces and intuitive navigation, ensuring
                                            ease of use for both clinic staff and patients. Training and support are also provided to help users get
                                            started.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types4' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>


                                            Can Clinic’s software handle tasks such as appointment scheduling, patient records
                                            management, and billing efficiently?
                                        </b></h4>
                                        <p className='p-2' >
                                            Yes, Clinic’s software is specifically designed to streamline clinic operations, including
                                            appointment scheduling, patient records management, billing, and other administrative tasks,
                                            ensuring efficiency and accuracy
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types5' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3 ' style={{ textAlign: 'start' }}>
                                            <b>

                                                Does Clinic’s software offer integration with other healthcare systems or third-party
                                                applications?
                                            </b></h4>
                                        <p className='p-2'>
                                            Yes, Clinic’s software offers integration capabilities, allowing seamless data exchange with
                                            other healthcare systems and third-party applications to enhance interoperability and workflow
                                            efficiency
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










export default Bethclinic
