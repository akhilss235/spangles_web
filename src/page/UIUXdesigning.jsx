import React, { useState } from 'react';

import o1 from '../image/01.png';
import o2 from '../image/02.png';
import o3 from '../image/03.png';
import o4 from '../image/04.png';
import o5 from '../image/05.png';
import o6 from '../image/06.png';
import o7 from '../image/07.png';
import Sv from '../image/ui.png';

import sv from '../image/ui2.png';
import { useNavigate } from "react-router-dom";

import o11 from '../image/1.png';
import o12 from '../image/2.png';
import o13 from '../image/3.png';
import o14 from '../image/4.png';
import o15 from '../image/5.png';
import o16 from '../image/6.png';
import o17 from '../image/7.png';

import o18 from '../image/8.png';
import o19 from '../image/9.png';
import o20 from '../image/10.png';
import o21 from '../image/11.png';

import Group111 from '../image/Group41.png';
import Group222 from '../image/Group42.png';
import Group333 from '../image/Group43.png';
import Group444 from '../image/Group44.png';
import Group555 from '../image/Group45.png';
import Group666 from '../image/Group46.png';
import Group777 from '../image/Group47.png';
import Group888 from '../image/Group48.png';
import Group999 from '../image/Group49.png';
import Group100 from '../image/Group50.png';
import { Helmet } from "react-helmet";

import '../Style/Services.css'
import Footer from '../Componets/Footer';
import { Container } from 'react-bootstrap';
import { useMobileHooks } from '../hooks/useMobileHooks';
import Servicesbuttone from '../Button/Servicesbuttone';
function UIUXdesigning() {
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

        <div className='UIUXdesigning' onContextMenu={disableRightClick}>
            <Helmet>
        <title>Best ui ux design companies | Spangles Infotech</title>
        <meta name="description" content="Spangles Infotech provides top notch UI& UX designing Services that prioritize creating intuitive, visually appealing interfaces. Contact us now." />
        <meta name="keywords" content="UI designing services, UX designing services, Best ui ux design companies, UI ux design consultants, Ui ux design firm" />

      </Helmet>
            <Container>

                <div style={{ textAlign: 'center', marginTop: '100px' }}>
                    <h1 className='text1'><b>UI/UX Designing</b></h1>
                    <p className='mt-5' style={{ width: '100%', fontSize: '20px' }}>
                    Transforming Ideas into Intuitive Experiences                        </p>
                </div>
                <div className='row'>

                    <div className='col-sm-6 mt-5'>
                        <p style={{ marginTop: '20px', width: mobileView ? "100%" : '90%', textAlign: mobileView ?"justify" :"" }}>
                            Spangles Infotech is a top technology service provider located in Nagercoil, Kanyakumari, India. Specializing in UI/UX (User Interface/User Experience) designing services, We offer innovative solutions to businesses seeking to enhance their digital presence and user engagement. We earned a reputation as a leading technology service provider in the Nagercoil, Kanyakumari region, known for our expertise in UI/UX designing services. Our team comprises skilled professionals with extensive experience in crafting intuitive and visually appealing user interfaces and experiences.
                        </p>
                        <p style={{ width: mobileView ? "100%" : '90%', textAlign: mobileView ?"justify" :"" }}>
                            We offers a comprehensive range of UI/UX design services tailored
                             to meet the unique needs of our clients. From initial concept
                              development to final implementation, our services cover all
                               aspects of the design process, including user research,
                                wireframing, prototyping, and usability testing. With
                                 our client centric approach, we prioritizes understanding
                                  the specific requirements and goals of each client.
                                   We collaborate closely with clients throughout the
                                    design process, ensuring that the final product aligns with
                                     our vision, brand identity, and target audience preferences. We has a proven track record of success, with a portfolio showcasing our past UI/UX design projects across various industries.                        </p>
                        <p style={{ width: mobileView ? "100%" : '90%', textAlign: mobileView ?"justify" :"" }}>
                            We offer comprehensive UI/UX designing services to create intuitive and visually appealing digital experiences that resonate with users and drive engagement.                        </p>

                    </div>
                    <div className='col-sm-6'>
                        <img
                            src={Sv}
                            className="mb-3"
                            alt="web designing"
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>


            </Container>

            <div style={{ backgroundColor: '#345261', height: '50%' }}>
                <Container>
                    <div className='d-flex justify-content-between p-3 cnt-to-expt-cont'>
                        <h4 style={{ color: 'white', textAlign:mobileView ? "center" : ""}}>
                            Empower your brand with the power of intuitive
                            design – choose our best UI/UX designing services
                        </h4>
                        {/* <a href="Contact" style={{ textDecoration: 'none', color: '#345261', textAlign:mobileView ? "center" : "" }} >
                            <button type="button" class="btn btn-light custom-buttons " style={{ width: 'auto', padding: '10px', marginLeft: '3%' }}>
                                Connect to an Expert now
                            </button>
                        </a> */}
<Servicesbuttone />

                    </div>
                </Container>
            </div>


            <Container>
                <div>
                    <h2 style={{ textAlign: 'center', color: '#345261', marginTop: '10%',marginBottom:'10%' }}> <b>Why Spangles Infotech For Your UI/UX Designing Services?</b></h2>
                </div>
                {/* <div className={mobileView ? "column":'row '}> */}
                <div className={mobileView ? "column" : 'row '}>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

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
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group222}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-2'>Innovative Approach     </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group333}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-2'>Client-Centric Focus   </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group444}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-2'>Customized Solutions  </p>

                            </div>
                        </div>
                    </div>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group555}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}

                                />
                            </div>
                            <div className='col p-3'>
                                <p className='mt-2'> Quality Assurance   </p>

                            </div>
                        </div>
                    </div>
                </div>



                <div className={mobileView ? "column" : 'row '} style={{ marginBottom: '10%' }}>
                    <div className='col card m-1'>
                        <div className={mobileView ? "key-comp-item": "row"}>

                            <div className='col-sm-2 p-2'>
                                <img
                                    src={Group666}
                                    alt="web designing"
                                    style={{ width: '50px', marginTop: '10px' }}
                                />
                            </div>
                            <div className='col p-3'>
                                <p>Collaborative
                                    <br />  Partnership</p>

                            </div>
                        </div>
                    </div>


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
                                <p className='mt-2'>Proven Track Record     </p>

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
                                <p className='mt-2'>Timely Delivery </p>

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
                                <p className='mt-2'>Continuous Support  </p>

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
                                <p className='mt-2'>Value for Investment  </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-sm-6">

                        <img
                            src={sv}
                            alt="web designing"
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div className="col-sm-6" >
                        <h2 style={{ textAlign: 'start', marginBottom: '5%', color: '#345261' }} ><b>
                            Benefits Of Our UI/UX Designing Services</b>
                        </h2>

                        <li  >Enhanced User Experience </li>
                        <li className='mt-3'>Increased User Engagement </li>
                        <li className='mt-3'> Improved Brand Perception</li>
                        <li className='mt-3'>Higher Conversion Rates </li>
                        <li className='mt-3'>Competitive Advantage </li>
                        <li className='mt-3'> Cost-Effectiveness</li>
                        <li className='mt-3'>Scalability and Flexibility </li>


                    </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '10%', color: '#345261', marginTop: '10%' }}>
                    <h2 className='mb-5'><b>
                        What We Do In UI/UX Designing?</b>
                    </h2>
                    <p>
                        In UI/UX designing, we focus on creating intuitive and visually appealing digital experiences that
                        prioritize user needs and preferences. Here&#39;s what we do:
                    </p>
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
                            <b> User Research :</b>
                        </h5>
                        <p>
                            We conduct thorough user research to understand your target audience, their behaviors, needs, and pain points, informing our design decisions.                        </p>
                    </div>
                </div>

                <div className='row' style={{ marginTop: '5%' }}>
                    <div className='col-sm-9'>
                        <h5 style={{ color: '#345261', }}>
                            <b>Wire framing :</b>
                        </h5>
                        <p>
                            We create wireframes to outline the structure and layout of the interface, focusing on functionality and content organization before moving to visual design.</p>
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
                            <b> Prototyping :</b>
                        </h5>
                        <p>
                            We develop interactive prototypes to visualize the user flow and interactions, allowing for user testing and validation before finalizing the design.
                        </p>
                    </div>
                </div>

                <div className='row' style={{ marginTop: '5%' }}>
                    <div className='col-sm-9'>
                        <h5 style={{ color: '#345261', }}>
                            <b> Visual Design :</b>
                        </h5>
                        <p>
                            We craft visually appealing designs that align with your brand identity, incorporating colours, typography, imagery, and other visual elements to create a cohesive and engaging user interface.
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
                            <b>Interaction Design :</b>
                        </h5>
                        <p>
                            We design intuitive interactions and animations that enhance usability and provide feedback to users, creating a seamless and enjoyable user experience.
                        </p>
                    </div>
                </div>

                <div className='row' style={{ marginTop: '5%' }}>
                    <div className='col-sm-9'>
                        <h5 style={{ color: '#345261', }}>
                            <b>Responsive Design :</b>
                        </h5>
                        <p>
                            We ensure that designs are responsive and adaptable to different devices and screen sizes, providing a consistent experience across desktop, tablet, and mobile platforms.
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
                            <b>Usability Testing :</b>
                        </h5>

                        <p>We conduct usability testing to gather feedback from real users, identifying usability issues and areas for improvement to refine the design and enhance user satisfaction.</p>
                    </div>
                </div>

                <div className='row' style={{ marginTop: '5%' }}>
                    <div className='col-sm-9'>
                        <h5 style={{ color: '#345261', }}>
                            <b> Accessibility :</b>
                        </h5>
                        <p>
                            We design with accessibility in mind, ensuring that the interface is usable by all users, including those with disabilities, and complies with relevant accessibility standards and guidelines.
                        </p>
                    </div>
                    <div className='col-sm-3 d-flex justify-content-end'>
                        <img
                            src={o18}
                            alt="web designing"
                            style={{ width: '200px' }}
                        />
                    </div>
                </div>

                <div className='row' style={{ marginTop: '5%' }}>
                    <div className='col-sm-3'>
                        <img
                            src={o19}
                            alt="web designing"
                            style={{ width: '200px' }}
                        />
                    </div>
                    <div className='col-sm-9'>
                        <h5 style={{ color: '#345261', }}>
                            <b> Iterative Design Process :</b>
                        </h5>
                        <p>
                            We follow an iterative design process, continuously refining and improving the design based.
                        </p>
                    </div>
                </div>
                <div className='row' style={{ marginTop: '5%' }}>
                    <div className='col-sm-9'>
                        <h5 style={{ color: '#345261', }}>
                            <b> Collaboration and Communication :</b>
                        </h5>
                        <p>
                            On user feedback and insights to achieve the best possible outcome.
                        </p>
                    </div>
                    <div className='col-sm-3 d-flex justify-content-end'>
                        <img
                            src={o20}
                            alt="web designing"
                            style={{ width: '200px' }}
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
                                    What is UI/UX designing, and why is it important
                                    for digital products?
                                </p>
                            </div>
                        </div>

                        <div
                            className={`card mb-3 ${selectedType === 'Types2' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types2')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types2' ? 'active-bold' : ''}`}  style={{ textAlign: 'start' }}>
                                    What’s the difference between UI and UX design?                                </p>
                            </div>
                        </div>

                        {/* typ3  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types3' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types3')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types3' ? 'active-bold' : ''}`}  style={{ textAlign: 'start' }}>
                                    How does UI/UX design impact the success of a digital product?                                </p>
                            </div>
                        </div>
                        {/* typ4  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types4' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types4')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types4' ? 'active-bold' : ''}`}  style={{ textAlign: 'start' }}>
                                    What steps are involved in the UI/UX design process?                                </p>
                            </div>
                        </div>
                        {/* typ5  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types5' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types5')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types5' ? 'active-bold' : ''}`}  style={{ textAlign: 'start' }}>
                                    How do you ensure that the design meets the needs of our target audience?                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card boxborders-gradient-4 '>
                            <div className='card-body'>
                                {selectedType === 'Types1' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>What is UI/UX designing, and why is it important for
                                            digital products?</b></h4>
                                        <p className='p-2'>

                                            UI/UX designing involves creating intuitive user interfaces and seamless user experiences for digital products. It’s essential for enhancing usability, engagement, and satisfaction among users.

                                        </p>
                                    </div>
                                )}
                                {selectedType === 'Types2' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>What’s the difference between UI and UX design?</b></h4>
                                        <p className='p-2' >

                                            UI (User Interface) design focuses on the visual elements of a digital product, such as layout,
                                            colors, typography, and imagery. UX (User Experience) design focuses on the overall
                                            experience of the user, including usability, accessibility, and interaction flow                      </p>
                                    </div>
                                )}

                                {selectedType === 'Types3' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>How does UI/UX design impact the success of a digital product?</b></h4>
                                        <p className='p-2' >

                                            Good UI/UX design can significantly impact the success of a digital product by improving
                                            user satisfaction, increasing user engagement, reducing user errors, and ultimately driving
                                            business growth and success               </p>
                                    </div>
                                )}

                                {selectedType === 'Types4' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b> What steps are involved in the UI/UX design process?</b></h4>
                                        <p className='p-2' >
                                            The UI/UX design process typically involves user research, wireframing, prototyping, visual
                                            design, interaction design, usability testing, and iteration based on user feedback.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types5' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3 ' style={{ textAlign: 'start' }}> <b>How do you ensure that the design meets the needs of our target audience?</b></h4>
                                        <p className='p-2'>
                                            We conduct thorough user research to understand the needs, preferences, and behaviors of
                                            your target audience, informing our design decisions and ensuring that the design resonates
                                            with users
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



export default UIUXdesigning

