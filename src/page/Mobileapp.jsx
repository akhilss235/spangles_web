import React, { useState } from 'react';

import o1 from '../image/01.png';
import o2 from '../image/02.png';
import o3 from '../image/03.png';
import o4 from '../image/04.png';
import o5 from '../image/05.png';
import o6 from '../image/06.png';
import o7 from '../image/07.png';
import Sv from '../image/mob.png';
import { useNavigate } from "react-router-dom";
import Group111 from '../image/group21.png';
import Group222 from '../image/Group22.png';
import Group333 from '../image/Group23.png';
import Group444 from '../image/Group24.png';
import Group555 from '../image/Group25.png';
import Group666 from '../image/Group26.png';
import Group777 from '../image/group27.png';
import Group888 from '../image/group28.png';
import Group999 from '../image/group29.png';
import Group100 from '../image/Group30.png';
import { Helmet } from "react-helmet";

import '../Style/Services.css'
import Footer from '../Componets/Footer';
import { Container } from 'react-bootstrap';
import { useMobileHooks } from '../hooks/useMobileHooks';


function Mobileapp() {
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

        <div className='Mobileapp' onContextMenu={disableRightClick}>
            <Helmet>
                <title>Top mobile app development companies | Spangles Infotech</title>
                <meta name="description" content="Spangles Infotech, best mobile app development company in Nagercoil, India offers best mobile app development services. Contact now." />
                <meta name="keywords" content="Mobile app development company, Mobile app developer, Mobile app companies, Top mobile app development companies, Best mobile app development companies" />

            </Helmet>
            <Container>

                <div style={{ textAlign: 'center', marginTop: '100px' }}>
                    <h1 className='text1'><b>Mobile App Development</b></h1>
                    <p className='mt-5' style={{ width: '100%', fontSize: '20px' }}>
                        Spangles Infotech: Your Global Destination for Mobile App Development
                    </p>
                </div>
                <div className='row mt-5'>
                    <div className='col-sm-6'>
                        <img
                            src={Sv}
                            className=" mt-5 mb-5 "
                            alt="web designing"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className='col-sm-6 '>
                        <p style={{ marginTop: '20px', width: '90%' }}>
                            At Spangles Infotech, we take pride in offering world-class Mobile App Development Services to clients across the globe. With a team of skilled developers and designers, we specialize in creating innovative and user-friendly mobile applications tailored to meet the unique needs of businesses and users worldwide. Our Mobile App Development Services are customized to suit the specific requirements and objectives of each client. Whether it’s developing a native iOS app, an Android application, or a cross-platform solution, we leverage the latest technologies and best practices to deliver high-quality, feature-rich mobile apps that drive business growth and enhance user experiences.                        </p>
                        <p style={{ width: '90%' }}>
                            Our team of seasoned developers and designers is proficient in the latest mobile app development frameworks, tools, and platforms. From conceptualization and design to development, testing, and deployment, we ensure that every aspect of the mobile app development process is executed with precision and excellence. We prioritize the end-user experience in every mobile app we develop, ensuring that the applications are intuitive, user-friendly, and visually appealing.

                        </p>
                        <p style={{ width: '90%' }}>
                            We are committed to exceeding our client’s expectations and delivering solutions that add tangible value to their businesses. Our dedicated team works closely with clients at every stage of the project, providing transparent communication, timely updates, and exceptional customer service.
                        </p>
                        <p style={{ width: '90%' }}>
                            Mobile apps have become an integral part of everyday life for billions of people worldwide, with the widespread adoption of smartphones and tablets, mobile apps are accessible to a vast audience. Users carry their devices with them everywhere, allowing them to access apps anytime, anywhere. Mobile apps offer a more immersive and personalized user experience compared to mobile websites.
                        </p>
                    </div>
                </div>
            </Container>

            <div style={{ backgroundColor: '#345261', height: '50%', marginTop: '10%' }}>
                <Container>
                    <div className='d-flex justify-content-between  p-3 cnt-to-expt-cont'>


                        <h4 style={{ color: 'white', textAlign:mobileView ? "center" : "" }} className='mt-1'>
                            Empowering Innovation: Experience Our Mobile App
                            Development Services.
                        </h4>
                        <a href="Contact" style={{ textDecoration: 'none', color: '#345261', textAlign:mobileView ? "center" : "" }} >
                            <button type="button" class="btn btn-light custom-buttons " style={{ width: 'auto', padding: '10px', marginLeft: '3%' }}>
                                Connect to an Expert now
                            </button></a>

                    </div>
                </Container>
            </div>


            <Container>
                <div>
                    <h2 style={{ textAlign: 'center', color: '#345261', marginTop: '10%', marginBottom: '10%' }}> <b>
                        Why Spangles Infotech For Mobile App Development?
                    </b></h2>
                </div>

                <div className={mobileView ? "column" : 'row '}>
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
                                <p className='mt-3'>Expertise and Experience  <br /> </p>

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
                                <p className='mt-3'>Customized Solutions  <br /> </p>

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
                                <p className='mt-3'>Strategic Planning and Consulting  <br />  </p>

                            </div>
                        </div>
                    </div>

                </div>



                <div className={mobileView ? "column" : 'row '} style={{ marginBottom: '10%' }}>
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
                                <p className='mt-3'>User-Centric Design  <br />   </p>

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
                                <p className='mt-3'> Quality Assurance and Testing   <br /> </p>

                            </div>
                        </div>
                    </div>
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
                                <p className='mt-3'>Timely Delivery  <br />  </p>

                            </div>
                        </div>
                    </div>
                </div>




                <div className='boxborder-gradient-5 ' >
                    <h1 className='header2'></h1>
                    <p className='description2' >
                        With years of experience in the industry, Spangles Infotech boasts a team of highly skilled developers, designers, and project managers who excel in crafting innovative and user-centric mobile applications.                         </p>
                    <img
                        src={o1}
                        className="image2 image-left2"

                        alt="web designing"
                        style={{ width: '120px' }}
                    />
                </div>

                {/* <div className='boxborder-gradient-2' >
          <h5 className='header header-right'> <b >Graphic Design:</b> </h5>
          <p className='description description-right'>
            Providing visually engaging
            graphics, logos, and other visual elements to enhance the website’s appeal.               </p>

          <img
            src={o6}
            className="image image-right" alt="web designing"
          />
        </div> */}

                <div className='boxborder-gradient-6' >
                    <h1 className='header2 header-right2'></h1>
                    <p className='description2 description-right2'>
                        We understand that every client has unique requirements and objectives. At Spangles Infotech, we take a customized approach to mobile app development, ensuring that each app is tailored to meet the specific needs of our clients and their target audience.                         </p>

                    <img
                        src={o2}
                        className="image2 image-right2"
                        alt="web designing"

                    />
                </div>



                <div className='boxborder-gradient-5 ' >
                    <h1 className='header2'></h1>
                    <p className='description2' >

                        We offer strategic planning and consulting services to help clients define their app&#39;s goals, features, and monetization strategies, ensuring alignment with their business objectives.
                    </p>
                    <img
                        src={o3}
                        className="image2 image-left2"

                        alt="web designing"

                    />
                </div>

                <div className='boxborder-gradient-6' >
                    <h1 className='header2 header-right2'></h1>
                    <p className='description2 description-right2'>
                        User experience (UX) is at the forefront of our design process. We place a strong emphasis on creating intuitive, visually appealing, and engaging user interfaces that enhance usability and drive user satisfaction.
                    </p>

                    <img
                        src={o4}
                        className="image2 image-right2"
                        alt="web designing"

                    />
                </div>

                <div className='boxborder-gradient-5 ' >
                    <h1 className='header2'></h1>
                    <p className='description2' >
                        Quality is paramount in everything we do. Our dedicated quality assurance team conducts rigorous testing at every stage of development to identify and address any issues or bugs, ensuring that the final product meets the highest standards of performance, reliability, and security.
                    </p>
                    <img
                        src={o5}
                        className="image2 image-left2"

                        alt="web designing"
                    />
                </div>


                <div className='boxborder-gradient-6' >
                    <h1 className='header2 header-right2'></h1>
                    <p className='description2 description-right2'>
                        We understand the importance of meeting deadlines and strive to deliver projects on time and within budget. Our efficient project management practices and streamlined development processes enable us to consistently meet or exceed client expectations.
                    </p>

                    <img
                        src={o6}
                        className="image2 image-right2"
                        alt="web designing"
                    />
                </div>













                <div>
                    <h2 style={{ textAlign: 'center', color: '#345261', marginTop: '10%', marginBottom: '5%' }}><b>Mobile App Platforms To Develop Mobile Apps</b></h2>
                    <p style={{ textAlign: 'center', color: '#345261', marginBottom: '10%' }}>At Spangles Infotech, we specialize in developing mobile apps using a variety of platforms, each tailored to meet the specific requirements of different operating systems and devices. Our diverse expertise allows us to create high-quality mobile applications that deliver exceptional user experiences across various platforms.
                        Here’s an overview of the platforms we work with:
                    </p>
                </div>
                <div className={mobileView ? "column" : 'row '}>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group777}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-3'> IOS Development  </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group888}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-3'>Android Development </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group999}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}
                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-3'> Cross Platform Development </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group100}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}
                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-3'> Progressive Web Apps (PWAs) </p>

                            </div>
                        </div>
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
                                    How long does it take to develop a mobile app?                                </p>
                            </div>
                        </div>

                        <div
                            className={`card mb-3 ${selectedType === 'Types2' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types2')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types2' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    What platforms do you develop mobile apps for?
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
                                    How do you ensure the security of my mobile app?
                                </p>
                            </div>
                        </div>
                        {/* typ4  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types4' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types4')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types4' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>

                                    Can you help me with app store submission and approval?
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
                                    What steps are involved in the mobile app
                                    development process?</p>                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card boxborders-gradient-4 '>
                            <div className='card-body'>
                                {selectedType === 'Types1' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            How long does it take to develop a mobile app?
                                        </b></h4>
                                        <p className='p-2'>


                                            The time required to develop a mobile app can vary depending on factors such as the
                                            complexity of the app, the number of features and functionalities, the platform(s) targeted
                                            (iOS, Android, or both), the availability of resources, and the client&#39;s requirements. Simple
                                            apps may take a few weeks to develop, while complex apps can take several months or
                                            longer.
                                        </p>
                                    </div>
                                )}
                                {selectedType === 'Types2' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            What platforms do you develop mobile apps for?
                                        </b></h4>
                                        <p className='p-2' >

                                            We develop mobile apps for both iOS and Android platforms, ensuring compatibility with a
                                            wide range of devices and reaching a broader audience. We also offer cross-platform
                                            development solutions to maximize cost-effectiveness and efficiency.

                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types3' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            How do you ensure the security of my mobile app?
                                        </b></h4>
                                        <p className='p-2' >


                                            We prioritize security throughout the mobile app development lifecycle by implementing
                                            best practices such as secure coding, data encryption, authentication, authorization, input
                                            validation, and protection against common vulnerabilities like OWASP Top 10.

                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types4' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            Can you help me with app store submission and approval?
                                        </b></h4>
                                        <p className='p-2' >
                                            Yes, we assist our clients with the app store submission process for both the Apple App Store
                                            and Google Play Store. We ensure that the app meets the respective guidelines and
                                            requirements for submission and help navigate the approval process.

                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types5' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3 ' style={{ textAlign: 'start' }}>
                                            <b>
                                                What steps are involved in the mobile app
                                                development process?                                            </b></h4>
                                        <p className='p-2'>


                                            The mobile app development process typically includes requirements gathering, design, development, testing, deployment, and maintenance. Each step involves various tasks and activities aimed at creating a functional and user-friendly mobile app.

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

export default Mobileapp



