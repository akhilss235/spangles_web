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
import Sv from '../image/pd.png';
import sv from '../image/pd2.png';
import '../Style/Services.css'
import { Helmet } from "react-helmet";

import Footer from '../Componets/Footer';
import { useNavigate } from "react-router-dom";

import { Container } from 'react-bootstrap';
import { useMobileHooks } from '../hooks/useMobileHooks';
function Churchmanagement() {
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
        <div className='Churchmanagement' onContextMenu={disableRightClick}>
            <Helmet>
                <title>  Best Church management Software | Spangles Infotech</title>
                <meta name="description" content="Spangles Infotech offers the best church management software, designed to streamline church operations and enhance community engagement. Our secure and user-friendly platform ensures efficient administration, financial transparency, and effective communication for churches of all sizes. " />
                <meta name="keywords" content="Church management software, Church software for small churches, Best church management software, Best church software for small churches, Church management system " />

            </Helmet>
            <Container>
                <div style={{ textAlign: 'center', marginTop: '10%', marginBottom: '10%' }}>
                    <h1 className='text1'><b>Church Management Software</b></h1>
                    <p className='mt-5' style={{ width: '100%', fontSize: '20px' }}>
                        Elevate your ministry with advanced church management software that empowers leaders, engages
                        members, and promotes growth          </p>
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
                            Church management software (ChMS) is a specialized platform designed to help religious organizations efficiently manage various aspects of their operations. It typically includes features for Member Management, Donor Management, Event Planning and Management, Communication Tools, Volunteer Management,
                            Worship Planning, Calendar Integration, Small Group Management, Check-In Systems, Reporting and Analytics, Prayer Request System, Online Giving and Donations, Website Integration etc.
                        </p>
                        <p style={{ width: '90%' }}>
                            By centralizing these functions into one system, ChMS streamlines administrative tasks, enhances communication within the congregation, and facilitates better organization and planning for church leaders. Additionally, ChMS often offers tools for online giving, website integration, and reporting, enabling churches to
                            adapt to the digital age and better serve their communities
                        </p>
                        <button type="button" className="btn btn-outline-custom" style={{ width: '200px', padding: '10px' }}>
                            <a href="Contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Contact us
                            </a>
                        </button>
                    </div>

                </div>
            </Container>

            <div style={{ backgroundColor: '#345261', height: '50%', marginTop: '10%' }}>
                <Container>
                    <div className='d-flex justify-content-between p-3 cnt-to-expt-cont'>
                        <h4 style={{ color: 'white', textAlign:mobileView ? "center" : "" }}>
                            Are you in search of the perfect church management software to streamline
                            your ministry’s operations and enhance engagement with your congregation?
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
                    <h2 style={{ textAlign: 'center', color: '#345261', marginTop: '10%', marginBottom: '10%' }}> <b>
                        Essential Features of Church Management Software :
                    </b></h2>
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Member Management :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Church management software entails organizing and maintaining congregation information to facilitate personalized communication and engagement.
                    </p>
                    <img src={o1} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right' ><b>Donor Management :</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Donor management in church management software involves tracking and organizing contributions from members to facilitate efficient communication and stewardship.
                    </p>
                    <img src={o2} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Event Planning and Management :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Event planning and management entail orchestrating logistics and resources to ensure the successful execution of gatherings, fostering community engagement within the congregation.
                    </p>
                    <img src={o3} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Communication Tools:</b></h5>
                    <p className='description description-right'>
                        Communication tools in church management software facilitate seamless interaction and connection among congregation members, enabling efficient sharing of information, announcements, and updates.
                    </p>
                    <img src={o4} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Calendar Integration:</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Calendar integration in church management software syncs events and schedules with external calendars, ensuring seamless coordination and communication for congregation members.
                    </p>
                    <img src={o5} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Volunteer Management:</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Volunteer management in church management software involves organizing and coordinating volunteers’ tasks, schedules, and communications to optimize their involvement and contribution within the church community.
                    </p>
                    <img src={o6} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Prayer Request System:</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Prayer request systems in church management software enable congregation members to submit and receive prayer requests, fostering support and community within the church.
                    </p>
                    <img src={o7} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Website Integration:</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Website integration in church management software seamlessly connects the software’s features and data with the church’s website, enhancing online communication and engagement with congregation members.
                    </p>
                    <img src={o8} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Mobile App Access:</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Mobile app access in church management software provides convenient access to church information, event details, and communication tools, fostering engagement and connection among congregation members on-the-go.
                    </p>
                    <img src={o9} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>All Member Data Security and Compliance:</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Protecting all member data with stringent security measures ensures confidentiality and compliance with regulatory standards, fostering trust and integrity within our church community.
                    </p>
                    <img src={o10} className="image image-right" alt="web designing" />
                </div>














                <div className='row'>

                    <div className='col-sm-7 '>

                        <h2 style={{ textAlign: 'start', color: '#345261', marginTop: '10%' }}><b>
                            How Church Management Software Works?</b></h2>



                        <p className='mt-3'>
                            Church management software works by providing a centralized platform for churches to manage various aspects of their operations, including member management, event planning, donations tracking, communication, and more. It typically operates as a cloud-based solution, allowing users to access the software from any internet-enabled device. Users can input and update member information, track attendance and participation in events, manage volunteer schedules, process donations, and communicate with congregation members through email or messaging features. Some church management software also integrates with other tools and platforms, such as accounting software or online payment processors, to streamline workflows and enhance functionality. Overall, church management software simplifies administrative tasks, improves organization, and fosters better communication and engagement within the church community.
                        </p>
                        <button type="button" className="btn btn-outline-custom" style={{width: '200px', padding: '10px'}}>
                <a href="Contact" style={{textDecoration: 'none', color: 'inherit'}}>
                  Contact us To Buy Now
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
                                    What features does the church management
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
                                    Is the software customizable to meet our church’s specific needs?                                </p>
                            </div>
                        </div>

                        {/* typ3  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types3' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types3')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types3' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    How user-friendly is the software for both administrators and church members?                                </p>
                            </div>
                        </div>
                        {/* typ4  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types4' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types4')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types4' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>

                                    Can the software handle membership management, attendance tracking, and communication tasks
                                    efficiently?                                </p>
                            </div>
                        </div>
                        {/* typ5  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types5' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types5')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types5' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    Does the software integrate with other church tools or third-party applications?                                </p>                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card boxborders-gradient-4 '>
                            <div className='card-body'>
                                {selectedType === 'Types1' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            What features does the church management software offer?                                        </b></h4>
                                        <p className='p-2'>


                                            The church management software typically offers
                                            features such as membership management, attendance
                                            tracking, event management, donation tracking,
                                            communication tools, and reporting capabilities.
                                            It may also include features for volunteer management,
                                            small group organization, and online giving.
                                        </p>
                                    </div>
                                )}
                                {selectedType === 'Types2' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            Is the software customizable to meet our church’s specific needs?                                        </b></h4>
                                        <p className='p-2' >

                                            Yes, many church management software platforms offer customization options to tailor the software to the
                                            unique requirements of your church. You can often customize fields, workflows, and reports to align with your
                                            church’s processes and preferences.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types3' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            How user-friendly is the software for both administrators and church members?                                        </b></h4>
                                        <p className='p-2' >


                                            Church management software is designed to be user-friendly, with intuitive interfaces and easy navigation.
                                            Most platforms offer training resources, tutorials, and customer support to help users get started and
                                            troubleshoot any issues.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types4' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>

                                            Can the software handle membership management, attendance tracking, and communication tasks
                                            efficiently?
                                        </b></h4>
                                        <p className='p-2' >
                                            Yes, church management software is specifically designed to streamline membership management, track
                                            attendance at services and events, and facilitate communication with members through email, text messaging,
                                            and online portals
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types5' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3 ' style={{ textAlign: 'start' }}>
                                            <b>
                                                Does the software integrate with other church tools or third-party applications?
                                            </b></h4>
                                        <p className='p-2'>
                                            Many church management software platforms offer integrations with popular church tools, such as accounting
                                            software, website builders, online giving platforms, and communication tools. Integrations allow for seamless
                                            data sharing and workflow automation across different systems.
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








export default Churchmanagement
