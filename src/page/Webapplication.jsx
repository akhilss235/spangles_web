import React, { useState } from 'react';
import Sv from '../image/web.png';
import o11 from '../image/1.png';
import o12 from '../image/2.png';
import o13 from '../image/3.png';
import o14 from '../image/4.png';
import o15 from '../image/5.png';
import o16 from '../image/6.png';
import o17 from '../image/7.png';
import Group111 from '../image/Group10.png';
import Group222 from '../image/Group12.png';
import Group333 from '../image/Group13.png';
import Group444 from '../image/Group14.png';
import Group555 from '../image/Group15.png';
import Group666 from '../image/Group16.png';
import Group777 from '../image/Group17.png';
import Group888 from '../image/Group18.png';
import Group999 from '../image/Group19.png';
import Group100 from '../image/Group20.png';
import '../Style/Services.css'
import Footer from '../Componets/Footer';
import { Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Servicesbuttone from '../Button/Servicesbuttone';

import { useMobileHooks } from '../hooks/useMobileHooks';
function Webapplication() {
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
<>
<Helmet>
        <title>Web application development services | Spangles Infotech</title>
        <meta name="description" content="Spangles Infotech, best Web application development company providing full stack web app development services to the clients worldwide. Contact us now." />
        <meta name="keywords" content="Web application development companies, Custom web app development, Web application custom development, Web application development india, Custom web application development company" />

      </Helmet>


        <div className='Webapplication' onContextMenu={disableRightClick} >
            <Container>

                <div style={{ textAlign: 'center', marginTop: '100px' }}>
                    <h1 className='text1'><b>Web Application Development</b></h1>
                    <p className='mt-5' style={{ width: '100%', fontSize: '20px' }}>Cutting-Edge Web Application Development Services for Modern Businesses</p>
                </div>
                <div className='row mt-5'>
                    <div className='col-sm-6'>
                        <img
                            src={Sv}
                            className="mb-3"
                            alt="web designing"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className='col-sm-6 '>
                        <p style={{ marginTop: '20px', width: '90%' }}>
                            Spangles Infotech is a premier technology company that offers comprehensive web application development services to clients across the globe. Our expertise spans the entire development lifecycle, ensuring that businesses receive high-quality, custom web applications tailored to their specific needs. We caters to clients from various regions of the world understanding and adapting to diverse business environments and cultures.
                        </p>
                        <p style={{ width: '90%' }}>
                            We conduct in-depth consultations to understand the specific needs, goals, and challenges of clients from different parts of the world and create the project roadmap which creates detailed project plans that outline the scope, timelines, milestones, and resources needed, tailored to meet the unique demands of each client.
                        </p>
                        <p style={{ width: '90%' }}>
                            We develop visually appealing and intuitive user interfaces that are culturally relevant and appealing to diverse user bases. Ensuring the application provides a seamless and engaging user experience, tailored to the preferences and behavior of different target audiences. Web application development services encompass the creation, implementation, and maintenance of web-based applications that are tailored to meet the specific needs of businesses and their users. These services involve a wide range of tasks from initial planning and design to coding, testing, deployment, and ongoing support. Here’s a detailed overview of web application development services
                        </p>
                    </div>
                </div>
            </Container>

            <div style={{ backgroundColor: '#345261', height: '50%' }}>
                <Container>
                    <div className='d-flex justify-content-between p-3 cnt-to-expt-cont'>


                        <h4 style={{ color: 'white', textAlign:mobileView ? "center" : "" }} className='mt-1'>
                            Ready to elevate your online presence with the best web application development services in the industry?
                        </h4>
                        
                            {/* <button type="button" className="btn btn-light custom-buttons " style={{ width: 'auto', padding: '10px', marginLeft: '3%', textAlign:mobileView ? "center" : ""}}>
                                Connect to an Expert now
                            </button> */}
<Servicesbuttone />



                         

                    </div>
                </Container>
            </div>


            <Container>
                <div>
                    <h2 style={{ textAlign: 'center', color: '#345261', marginTop: '10%', marginBottom: '10%' }}> <b>Key Components of Web Application Development Services</b></h2>
                </div>

                <div className={mobileView ? "column": "row"}>
                    <div className='col card m-1'>  
                        <div className={mobileView ? "key-comp-item": "row"}>
                            <div className='col-sm-3 p-2'>
                                <img
                                    src={Group111}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}
                                />
                            </div>
                            <div className='col p-3'>
                                <p>Consultation and  <br /> Planning</p>

                            </div>
                        </div>
                    </div>


                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-3 p-2'>
                                <img
                                    src={Group222}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-3'>UI/UX Design   <br /> </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-3 p-2'>
                                <img
                                    src={Group333}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p>Front-End  <br />  Development</p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-3 p-2'>
                                <img
                                    src={Group444}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p>Back-End   <br />   Development</p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-3 p-2'>
                                <img
                                    src={Group555}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p> API Development and   <br /> Integration</p>

                            </div>
                        </div>
                    </div>
                </div>



                <div className={mobileView ? "column" : 'row '}>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-3 p-2'>
                                <img
                                    src={Group666}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}
                                />
                            </div>
                            <div className='col p-3'>
                                <p>Security  <br />  Implementation</p>

                            </div>
                        </div>
                    </div>


                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-3 p-2'>
                                <img
                                    src={Group777}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p>Testing and  Quality  <br />  Assurance </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-3 p-2'>
                                <img
                                    src={Group888}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p>Deployment and   <br /> Hosting </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-3 p-2'>
                                <img
                                    src={Group999}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p>Maintenance and   <br />    Support</p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-3 p-2'>
                                <img
                                    src={Group100}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p> Performance  <br /> Optimization</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 style={{ textAlign: 'center', color: '#345261', marginTop: '10%', marginBottom: '10%' }}><b>Benefits Of Web Application Development Services</b></h2>
                </div>

























                <div className='row' style={{ marginTop: '10%' }}>
                    <div className='col-sm-3'>
                        <img
                            src={o11}
                            alt="web designing"
                            style={{ width: '200px' }}
                        />
                    </div>
                    <div className='col-sm-9'>
                        <h5 style={{ color: '#345261', }}>
                            <b>Custom Solutions :</b>
                        </h5>
                        <p>Tailored web applications that meet specific business requirements and goals.</p>
                    </div>
                </div>

                <div className='row' style={{ marginTop: '5%' }}>
                    <div className='col-sm-9'>
                        <h5 style={{ color: '#345261', }}>
                            <b>Improved Efficiency :</b>
                        </h5>
                        <p>
                            Streamlined processes and automated tasks that improve operational efficiency.
                        </p>

                    </div>
                    <div className='col-sm-3 d-flex justify-content-end'>
                        <img
                            src={o12}
                            alt="web designing"
                            style={{ width: '200px' }}
                        />
                    </div>
                </div>
                <div className='row' style={{ marginTop: '5%' }}>
                    <div className='col-sm-3'>
                        <img
                            src={o13}
                            alt="web designing"
                            style={{ width: '200px' }}
                        />
                    </div>
                    <div className='col-sm-9'>
                        <h5 style={{ color: '#345261', }}>
                            <b> Enhanced User Engagement :</b>
                        </h5>
                        <p>
                            Interactive and user-friendly applications that engage and retain users.

                        </p>
                    </div>
                </div>

                <div className='row' style={{ marginTop: '5%' }}>
                    <div className='col-sm-9'>
                        <h5 style={{ color: '#345261', }}>
                            <b> Scalability :</b>
                        </h5>
                        <p>
                            Applications designed to grow with your business, accommodating new features and increased traffic.
                        </p>

                    </div>
                    <div className='col-sm-3 d-flex justify-content-end'>
                        <img
                            src={o14}
                            alt="web designing"
                            style={{ width: '200px' }}
                        />
                    </div>
                </div>
                <div className='row' style={{ marginTop: '5%' }}>
                    <div className='col-sm-3'>
                        <img
                            src={o15}
                            alt="web designing"
                            style={{ width: '200px' }}
                        />
                    </div>
                    <div className='col-sm-9'>
                        <h5 style={{ color: '#345261', }}>
                            <b>Competitive Advantage :</b>
                        </h5>
                        <p>
                            Unique and innovative web applications that set your business apart from competitors.
                        </p>
                    </div>
                </div>

                <div className='row' style={{ marginTop: '5%' }}>
                    <div className='col-sm-9'>
                        <h5 style={{ color: '#345261', }}>
                            <b>Data Security :</b>
                        </h5>
                        <p>
                            Robust security measures to protect sensitive data and ensure compliance with regulations.
                        </p>

                    </div>
                    <div className='col-sm-3 d-flex justify-content-end'>
                        <img
                            src={o16}
                            alt="web designing"
                            style={{ width: '200px' }}
                        />
                    </div>
                </div>
                <div className='row' style={{ marginTop: '5%' }}>
                    <div className='col-sm-3'>
                        <img
                            src={o17}
                            alt="web designing"
                            style={{ width: '200px' }}
                        />
                    </div>
                    <div className='col-sm-9'>
                        <h5 style={{ color: '#345261', }}>
                            <b>Cost-Effective :</b>
                        </h5>
                        <p>
                            Efficient use of resources and technology to deliver high-quality applications within budget.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '10%', marginBottom: '10%' }}>
                    <p>
                        Web application development services are essential for businesses looking to create custom, scalable, and secure web-based applications. These services cover every aspect of development from initial consultation and design to deployment, maintenance, and support. By leveraging professional web application development services, businesses can enhance their operational efficiency, engage users effectively, and gain a competitive edge in the market.
                    </p>
                </div>
                <div>
                    <h2 style={{ fontSize: '80px', color: '#345261', marginBottom: '10%' }}> <b>FAQs</b></h2>
                </div>

                <div className='row'>
                    <div className='col-sm-6'>
                        <div
                            className={`card mb-3 ${selectedType === 'Types1' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types1')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types1' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    What is web application development?
                                </p>
                            </div>
                        </div>

                        <div
                            className={`card mb-3 ${selectedType === 'Types2' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types2')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types2' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    What steps are involved in the web application development process? </p>                            </div>
                        </div>

                        {/* typ3  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types3' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types3')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types3' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    How do you choose the right technology stack for  my web application?                                </p>
                            </div>
                        </div>
                        {/* typ4  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types4' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types4')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types4' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    What security measures do you implement to protect my web application?                                </p>
                            </div>
                        </div>
                        {/* typ5  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types5' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types5')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types5' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    Can you integrate third-party APIs and services into my web application?                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card boxborders-gradient-4 '>
                            <div className='card-body'>
                                {selectedType === 'Types1' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            What is web application development?
                                        </b></h4>
                                        <p className='p-2'>

                                            Web application development is the process of creating software applications that run on web browsers. It’s important for businesses because it allows them to provide online services, reach a wider audience, streamline operations, and stay competitive in the digital marketplace.
                                        </p>
                                    </div>
                                )}
                                {selectedType === 'Types2' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            What steps are involved in the web application development process?
                                        </b></h4>
                                        <p className='p-2' >
                                            The web application development process typically includes requirement gathering, planning,
                                            design, development, testing, deployment, and maintenance. Each step involves various tasks
                                            and activities aimed at creating a functional and user-friendly web application.

                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types3' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            How do you choose the right technology stack for  my web application?
                                        </b></h4>
                                        <p className='p-2' >

                                            We assess your project requirements, scalability needs, performance goals, budget constraints,
                                            and future growth plans to recommend the most suitable technology stack. Factors such as
                                            programming languages, frameworks, libraries, and databases are considered during this
                                            process.

                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types4' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            What security measures do you implement to protect my web application?
                                        </b></h4>
                                        <p className='p-2' >

                                            We prioritize security throughout the development lifecycle by implementing best practices
                                            such as secure coding, data encryption, authentication, authorization, input validation, and
                                            protection against common vulnerabilities like XSS, CSRF, and SQL injection. Regular security
                                            audits and updates are also conducted.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types5' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3 ' style={{ textAlign: 'start' }}>
                                            <b>
                                                Can you integrate third-party APIs and services into my web application?
                                            </b></h4>
                                        <p className='p-2'>

                                            Yes, we can integrate third-party APIs and services to enhance the functionality and features of
                                            your web application. This includes payment gateways, social media integration, mapping
                                            services, email services, analytics, and more, depending on your specific requirements.
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
        </>
    )
}





export default Webapplication
