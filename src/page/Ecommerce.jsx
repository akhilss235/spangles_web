import React, { useState } from 'react';
import Sv from '../image/ecom.png';
import Ss from '../image/ecom2.png';
import { useNavigate } from "react-router-dom";
import Group111 from '../image/Group31.png';
import Group222 from '../image/Group32.png';
import Group333 from '../image/Group33.png';
import Group444 from '../image/Group34.png';
import Group555 from '../image/Group35.png';
import Group666 from '../image/Group36.png';
import Group777 from '../image/Group37.png';
import Group888 from '../image/Group38.png';
import Group999 from '../image/Group40.png';
import { Helmet } from "react-helmet";
import '../Style/Services.css'
import Footer from '../Componets/Footer';
import { Container } from 'react-bootstrap';
import { useMobileHooks } from '../hooks/useMobileHooks';
import Servicesbuttone from '../Button/Servicesbuttone';
function Ecommerce() {
    
    const {mobileView} = useMobileHooks()
    const [selectedType, setSelectedType] = useState('Types1');

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };
    const navigate = useNavigate();


    const disableRightClick = (event) => {
        event.preventDefault();
      };
    return (

        <div className='Ecommerce'onContextMenu={disableRightClick} >
            <Helmet>
        <title>ECommerce app development company | Spangles Infotech</title>
        <meta name="description" content="Spangles Infotech, best E-commerce Website development Company in Nagercoil India, provides customised and advanced innovative e-commerce solutions." />
        <meta name="keywords" content="E commerce development company, Ecommerce website developer, Best ecommerce website development company, Ecommerce site developers, Ecommerce application development company" />

      </Helmet>
            <Container>

                <div style={{ textAlign: 'center', marginTop: '100px' }}>
                    <h1 className='text1'><b>E-Commerce Development</b></h1>
                    <p className='mt-5' style={{ width: '100%', fontSize: '20px' }}>
                    Your Global Partner for E-Commerce Development </p>
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
                    <div className='col-sm-6 mt-5'>
                        <p style={{ marginTop: '20px', width: '90%' }}>
                            Spangles Infotech specializes in providing comprehensive E-Commerce Development Services to clients around the world. With our expertise and dedication to excellence, we empower businesses to establish and grow their online presence, drive sales, and enhance customer experiences across various E-Commerce platforms. Our E-Commerce Development Services are tailored to meet the unique needs and objectives of each client. Whether you’re a small startup or a large enterprise, we offer customized solutions that align with your business goals and target audience.

                        </p>
                        <p style={{ width: '90%' }}>
                            We have extensive experience working with a wide range of E-Commerce platforms, including Shopify, WooCommerce, Magento, BigCommerce, and more. Our team of skilled developers and designers leverages the latest technologies and best practices to create robust, scalable, and feature-rich E-Commerce websites that deliver results. Our E-Commerce solutions come equipped with robust product management features, allowing clients to easily add, edit, and manage their product catalogue, inventory, pricing, and promotions. We understand the importance of visibility and discoverability in driving E-Commerce success.
                        </p>
                        <p style={{ width: '90%' }}>
                            Whether you’re looking to launch a new E-Commerce website, revamp an existing one, or optimize your online store for better performance, Spangles Infotech is your trusted partner for E-Commerce Development Services that drive success on a global scale. Contact us today to discuss your project requirements and take your E-Commerce business to new heights!
                        </p>

                    </div>
                </div>
            </Container>

            <div style={{ backgroundColor: '#345261', height: '50%', marginTop: '10%' }}>
                <Container>
                    <div className='d-flex justify-content-between p-3 cnt-to-expt-cont'>


                        <h4 style={{ color: 'white',  textAlign:mobileView ? "center" : "" }} className='mt-1'>
                            Start your E-Commerce Journey with the best
                            E-Commerce development company!
                        </h4>
                        {/* <a href="Contact" style={{ textDecoration: 'none', color: '#345261',  textAlign:mobileView ? "center" : "" }} >
                            <button type="button" class="btn btn-light custom-buttons " style={{ width: 'auto', padding: '10px', marginLeft: '3%' }}>
                                Connect to an Expert now
                            </button></a> */}
                            <Servicesbuttone />
                    </div>
                </Container>
            </div>


            <Container>
                <div>
                    <h2 style={{ textAlign: 'center', color: '#345261', marginTop: '10%', marginBottom: '10%' }}> <b>
                        Why Spangles Infotech For Your E-Commerce Development?                    </b></h2>
                </div>

                <div className={mobileView ? "column":"row"}>
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
                                <p className='mt-3'>Expertise and Experience  <br /> </p>

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
                                <p className='mt-3'>Customized Solutions <br /> </p>

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
                                <p className='mt-3'>Platform Proficiency  <br />  </p>

                            </div>
                        </div>
                    </div>

                </div>



                <div className={mobileView ? "column" : 'row '}>
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
                                <p className='mt-3'>User-Centric Design <br />   </p>

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
                                <p className='mt-3'> Mobile E-Commerce Optimization  <br /> </p>

                            </div>
                        </div>
                    </div>
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
                                <p className='mt-3'>Security and Compliance  <br />  </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={mobileView ? "column" : 'row '} style={{ marginBottom: '10%' }}>
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
                                <p className='mt-3'> E-Commerce SEO and Marketing
                                    Integration </p>

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
                                <p className='mt-3'>Scalability and Flexibility</p>

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
                                <p className='mt-3'> Proven Track Record </p>

                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <h6 style={{ color: '#345261', marginTop: '10%', width: '65%' }}><b>
                        E-Commerce Development Services typically include a comprehensive range of features and functionalities designed to create, manage, and optimize online stores. Here’s an overview of what these services include:
                    </b></h6>
                </div>
                <div className='row mt-5' style={{ marginBottom: '10%' }}>
                    <div className='col-sm-6'>
                        <ul style={{ color: '#345261' }}>
                            <li>

                                Custom E-Commerce Website Development
                            </li>
                            <li className='mt-2'>E-Commerce Platform Selection and Integration</li>
                            <li className='mt-2'>E-Commerce Shopping Cart Development</li>
                            <li className='mt-2'>E-Commerce Payment Gateway Integration</li>
                            <li className='mt-2'>E-Commerce Product Management</li>
                            <li className='mt-2'>E-Commerce Search Engine Optimization (SEO)</li>
                            <li className='mt-2'>E-Commerce Custom Plugins and Extensions</li>
                            <li className='mt-2'>E-Commerce Content Management System (CMS)</li>
                            <li className='mt-2'>E-Commerce Responsive Design</li>
                            <li className='mt-2'>E-Commerce Security and Compliance</li>
                            <li className='mt-2'>E-Commerce Marketing and Promotions</li>
                            <li className='mt-2'>E-Commerce Customer Support Features</li>
                            <li className='mt-2'>E-Commerce Maintenance and Support</li>
                            <li className='mt-2'>E-Commerce Migration and Upgradation Services</li>

                        </ul>
                    </div>
                    <div className='col-sm-6'>
                        <img
                            src={Ss}

                            alt="web designing"
                            style={{ width: "100%" }}
                        />
                    </div>
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
                                    How do I start an E-Commerce website? </p>                            </div>
                        </div>

                        <div
                            className={`card mb-3 ${selectedType === 'Types2' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types2')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types2' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    What E-Commerce platform should I use?
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
                                    How much does it cost to build an E-Commerce website?
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

                                    What shipping options should I offer?
                                </p>
                            </div>
                        </div>
                        {/* typ5  */}
                        {/* <div
                            className={`card mb-3 ${selectedType === 'Types5' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types5')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types5' ? 'active-bold' : ''}`}>
                                    Can you integrate third-party APIs and services into my web application?                                </p>
                            </div>
                        </div> */}
                    </div>
                    <div className='col-sm-6'>
                        <div className='card boxborders-gradient-4 '>
                            <div className='card-body'>
                                {selectedType === 'Types1' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            How do I start an E-Commerce website?
                                        </b></h4>
                                        <p className='p-2'>



                                            To start an E-Commerce website, you need to choose a platform, secure a domain name and
                                            hosting, design your site, set up product listings, integrate payment gateways, and implement SEO
                                            and marketing strategies.
                                        </p>
                                    </div>
                                )}
                                {selectedType === 'Types2' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            What E-Commerce platform should I use?
                                        </b></h4>
                                        <p className='p-2' >


                                            Popular E-Commerce platforms include Shopify, WooCommerce, Magento, BigCommerce, and
                                            Squarespace. The right choice depends on your specific needs, budget, and technical expertise.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types3' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            How much does it cost to build an E-Commerce website?
                                        </b></h4>
                                        <p className='p-2' >



                                            The cost can vary widely based on the complexity of the site, design requirements, features,
                                            platform, and development fees. It can range from a few hundred to several thousand dollars.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types4' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            What shipping options should I offer?
                                        </b></h4>
                                        <p className='p-2' >

                                            Offer a variety of shipping options such as standard, expedited, and international shipping. Partner
                                            with reliable carriers and provide clear shipping policies and tracking information.
                                        </p>
                                    </div>
                                )}

                                {/* {selectedType === 'Types5' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3 ' style={{ textAlign: 'start' }}>
                                            <b>
                                                Can you help me with app store submission and approval?
                                            </b></h4>
                                        <p className='p-2'>


                                            Yes, we assist our clients with the app store submission process for both the Apple App Store
                                            and Google Play Store. We ensure that the app meets the respective guidelines and
                                            requirements for submission and help navigate the approval process.

                                        </p>
                                    </div>
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>



            </Container>


            <Footer />
        </div>

    )
}

export default Ecommerce





