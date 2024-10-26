import React, { useState } from 'react';
import o1 from '../image/01.png';
import o2 from '../image/02.png';
import o3 from '../image/03.png';
import o4 from '../image/04.png';
import o5 from '../image/05.png';
import o6 from '../image/06.png';
import o7 from '../image/07.png';
import Sv from '../image/OBJECTS.png';
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
import Group111 from '../image/Group111.png';
import Group222 from '../image/Group222.png';
import Group333 from '../image/Group333.png';
import Group444 from '../image/Group444.png';
import Group555 from '../image/Group555.png';
import Group666 from '../image/Group666.png';
import Group777 from '../image/Group777.png';
import Group888 from '../image/Group888.png';
import Group999 from '../image/Group999.png';
import Group100 from '../image/Group100.png';
import '../Style/Services.css'
import Footer from '../Componets/Footer';
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import { useMobileHooks } from '../hooks/useMobileHooks';
import Servicesbuttone from '../Button/Servicesbuttone';
import Buttonecontact from '../Button/Buttonecontact';

function Websitedesigningdevelopment() {
  const {mobileView} = useMobileHooks();

  const [selectedType, setSelectedType] = useState('Types1');

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const navigate = useNavigate();

  // const Contact = () => {
  //   navigate(`/Contact`);
  // };
  const disableRightClick = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Helmet>
        <title>Web design and development company | Spangles Infotech</title>
        <meta name="description" content="Spangles Infotech is a leading IT Company in Nagercoil, India offering end to end Website design and development Solutions. Contact us now." />
        <meta name="keywords" content="Website design company, Website development company, Web design services, Wordpress website designer,  Website designers, Web page design" />

      </Helmet>

      <div className='Websitedesigning' onContextMenu={disableRightClick} >
        <Container>

          <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1 className='text1'><b>Website Designing and Development 
            </b></h1>
            <p className='mt-5' style={{ width: '100%', fontSize: '20px' }}>Where Creativity Meets Technology - India’s Top Web Designing and Development Company.
            </p>
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
            <div className='col-sm-6 '>
              <p style={{ marginTop: '200px', width: '90%' }}>
              Spangles Infotech is a leading website designing and development company in Nagercoil, a city in the Kanyakumari district of India. Our company is renowned for its expertise in creating high-quality, visually appealing, and user-friendly websites. We caters to a diverse range of clients, providing tailored solutions that meet the unique needs and goals of each business. We earned a reputation for excellence in the field of web design and development due to its innovative approach, high-quality services, and customer-centric focus.

              </p>
              {/* <button type="button" className="btn btn-outline-custom" style={{width: '200px', padding: '10px'}}>
                <a href="Contact" style={{textDecoration: 'none', color: 'inherit'}}>
                  Contact us
                </a>
              </button> */}
              <Buttonecontact />
            </div>
            <div style={{ textAlign: 'center', marginTop: '100px', color: '#345261', marginBottom: '100px' }}>
              <h2><b>Our services likely encompass various aspects of web design, including</b></h2>
            </div>


          </div>




          <div className='boxborder-gradient-1'>
            <h5 > <b className='header'>Custom Website Design:</b> </h5>
            <p className='description ' style={{ marginLeft: '5%' }}> Crafting bespoke website layouts that align with the client’s brand identity and target audience.</p>
            <img
              src={o1}
              className="image image-left"
              alt="web designing"
              style={{ width: '120px' }}
            />
          </div>


          <div className='boxborder-gradient-2' >
            <h5 className='header header-right'> <b >Responsive Design  :</b> </h5>
            <p className='description description-right' style={{ marginRight: '5%' }}> Ensuring websites are optimized for all devices, from desktops to mobile phones.</p>

            <img
              src={o2}
              className="image image-right"
              alt="web designing"

            />
          </div>


          <div className='boxborder-gradient-1'  >
            <h5 > <b className='header'>E-commerce Solutions: </b> </h5>
            <p className='description' style={{ marginLeft: '5%' }}>

              Developing online stores with secure payment gateways, inventory management, and a
              seamless shopping experience              </p>
            <img
              src={o3}
              className="image image-left"
              alt="web designing"

            />
          </div>

          <div className='boxborder-gradient-2' >
            <h5 className='header header-right' > <b >Content Management Systems (CMS):</b> </h5>
            <p className='description description-right' style={{ marginRight: '5%' }}>
              Implementing easy-to-use platforms like  WordPress,
              Joomla, or custom CMS solutions for clients to manage their own content
            </p>

            <img
              src={o4}
              className="image image-right"
              alt="web designing"

            />
          </div>

          <div className='boxborder-gradient-1'>
            <h5 > <b className='header'>SEO Optimization:</b> </h5>
            <p className='description' style={{ marginLeft: '5%' }}>
              Integrating search engine optimization techniques to enhance website visibility and ranking
              on search engines.
            </p>
            <img
              src={o5}
              className="image image-left"
              alt="web designing"
            />
          </div>


          <div className='boxborder-gradient-2' >
            <h5 className='header header-right'> <b >Graphic Design:</b> </h5>
            <p className='description description-right' style={{ marginRight: '5%' }}>
              Providing visually engaging
              graphics, logos, and other visual elements to enhance the website’s appeal.               </p>

            <img
              src={o6}
              className="image image-right" alt="web designing"
            />
          </div>


          <div className='boxborder-gradient-1'>
            <h5 > <b className='header'>Website Maintenance:</b> </h5>
            <p className='description' style={{ marginLeft: '5%' }}>
              Offering ongoing support and updates to ensure the website remains current and functional.
            </p>
            <img
              src={o7}
              className="image image-left"
              alt="web designing"
            />
          </div>


          <div className='mt-5 mb-5' style={{ marginBottom: '10%', marginTop: '20%' }}>
            <p>
              Spangles Infotech prides itself on its customer-centric approach, delivering projects on time and within budget while maintaining high standards of quality and innovation. We ensures that each website is unique and aligned with the client’s brand identity and goals. Our dedication to customer satisfaction, timely project delivery, and the integration of cutting-edge technology makes them a leading choice for businesses seeking to enhance their online presence. Our local expertise in the Kanyakumari region combined with a professional, global outlook positions them as a leading choice for businesses seeking to establish or improve their online presence.</p>
          </div>
        </Container>

        <div style={{ backgroundColor: '#345261', height: '50%' }}>
          <Container>
            <div className='d-flex justify-content-between p-3 cnt-to-expt-cont'>


              <h4 style={{ color: 'white', textAlign:mobileView ? "center" : "" }} className='mt-1'>
              Looking for Expert Web Designers and Developers to Create Your Perfect Website?
                </h4>
              {/* <a href="Contact" style={{ textDecoration: 'none', color: '#345261', textAlign:mobileView ? "center" : "" }} >
                <button type="button" className="btn btn-light custom-buttons " style={{ width: 'auto', padding: '10px', marginLeft: '3%', justifyContent: 'end', justifyContent: 'end' }}>
                  Connect to an Expert now
                </button></a> */}
<Servicesbuttone />


            </div>
          </Container>
        </div>


        <Container>
          <div>
            <h2 style={{ textAlign: 'center', color: '#345261', marginTop: '10%' }}> <b> Why Website Design Is Important For Your Business?</b></h2>
            <p style={{ textAlign: 'center', color: '#345261', marginBottom: '7%' }}>Website design is crucial for your business for several reasons. Here are the key points:</p>
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
                <b> First Impressions Matter :</b>
              </h5>
              <p>Your website is often the first interaction potential customers have with your business. A well-designed website creates a positive first impression and establishes credibility.</p>
            </div>
          </div>

          <div className='row' style={{ marginTop: '5%' }}>
            <div className='col-sm-9'>
              <h5 style={{ color: '#345261', }}>
                <b>Brand Identity :</b>
              </h5>
              <p>
                A professionally designed website reflects your brand identity, reinforcing your brand’s values, mission, and uniqueness.              </p>

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
                <b> User Experience (UX) :</b>
              </h5>
              <p>
                Good web design ensures an intuitive and enjoyable user experience, making it easy for visitors to navigate your site and find the information they need.              </p>
            </div>
          </div>

          <div className='row' style={{ marginTop: '5%' }}>
            <div className='col-sm-9'>
              <h5 style={{ color: '#345261', }}>
                <b> SEO Optimization :</b>
              </h5>
              <p>
                A well-designed website with proper SEO practices improves your search engine rankings, making it easier for potential customers to find you online.            </p>

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
                <b> Mobile Responsiveness :</b>
              </h5>
              <p>
                With the increasing use of mobile devices, having a responsive website design ensures your site looks and functions well on all screen sizes.              </p>
            </div>
          </div>

          <div className='row' style={{ marginTop: '5%' }}>
            <div className='col-sm-9'>
              <h5 style={{ color: '#345261', }}>
                <b>Competitive Advantage :</b>
              </h5>
              <p>
                A unique and modern website design sets you apart from competitors, making your business more attractive to potential customers.              </p>

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
                <b>Conversion Rates :</b>
              </h5>
              <p>Effective web design includes clear calls-to-action and optimized landing pages, which can significantly improve conversion rates and drive sales.</p>
            </div>
          </div>

          <div className='row' style={{ marginTop: '5%' }}>
            <div className='col-sm-9'>
              <h5 style={{ color: '#345261', }}>
                <b> Customer Trust :</b>
              </h5>
              <p>
                A professional and aesthetically pleasing website builds trust with your audience, making them more likely to engage with your business.              </p>

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
                <b> Business Growth :</b>
              </h5>
              <p>
                A well-designed website can scale with your business, allowing you to add new features, services, and content as your business grows.              </p>
            </div>
          </div>
          <div className='row' style={{ marginTop: '5%' }}>
            <div className='col-sm-9'>
              <h5 style={{ color: '#345261', }}>
                <b> Cost-Effective Marketing :</b>
              </h5>
              <p>
                Your website acts as a 24/7 marketing tool, providing information, attracting leads, and promoting your products or services at all times.              </p>
            </div>
            <div className='col-sm-3 d-flex justify-content-end'>
              <img
                src={o20}
                alt="web designing"
                style={{ width: '200px' }}
              />
            </div>
          </div>
          <div className='row ' style={{ marginTop: '5%' }}>
            <div className='col-sm-3 '>
              <img
                src={o21}
                alt="web designing"
                style={{ width: '200px' }}
              />
            </div>
            <div className='col-sm-9'>
              <h5 style={{ color: '#345261', }}>
                <b> Customer Engagement :</b>
              </h5>
              <p>
                Interactive and engaging web design elements, such as blogs, forums, and social media integration, encourage user interaction and foster a community around your brand.              </p>
            </div>
          </div>
          <h2 style={{ textAlign: 'center', marginTop: '10%', color: '#345261', }}><b> Why Spangles Infotech for Best Web Designing and development Services?
          </b> </h2>
          <p style={{ alignContent: 'justify', textAlign: 'center', marginTop: '3%', marginBottom: '3%' }}>
          Spangles Infotech is a best Website Designing and development Company in Nagercoil, Kanyakumari, India. With our expertise and commitment to deliver high-quality web design and development solutions, we are evidently a trusted choice for businesses in the region. Our focus on providing comprehensive services, user-centric designs, and innovative solutions likely sets them apart as a preferred partner for businesses looking to establish a strong online presence. By staying abreast of industry advancements, we ensures that our designs are not only aesthetically pleasing but also incorporate cutting-edge functionalities and user experiences. By combining technical proficiency with a deep understanding of clients' needs, we consistently deliver exceptional web design and development solutions that drive business success.

                </p>


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
                  <p>Expertise and <br /> Professionalism</p>

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
                  <p>Comprehensive   <br /> Service Offerings</p>

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
                  <p>User Experience  (UX) <br />  Focus</p>

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
                  <p>SEO and Digital  <br />  Marketing Integration</p>

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
                  <p>Innovation and  <br /> Technology</p>

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
                  <p>Client-Centric <br />  Approach</p>

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
                  <p>Affordability and    <br /> Value </p>

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
                  <p>Proven Results <br />  </p>

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
                  <p>Scalability and  <br />    Flexibility</p>

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
                  <p>Commitment to  <br /> Quality</p>

                </div>
              </div>
            </div>
          </div>


          <div>
            <h2 style={{ textAlign: 'center', color: '#345261', marginTop: '10%', marginBottom: '10%' }}><b>LET US DESIGN YOUR DREAM WEBSITE FOR YOUR BUSINESS</b></h2>

            <h2 style={{ fontSize: '80px', color: '#345261', marginBottom: '10%' }}> <b>FAQs 
            </b></h2>
          </div>

          <div className='row'>
            <div className='col-sm-6'>
              <div
                className={`card mb-3 ${selectedType === 'Types1' ? 'boxborders-gradient-3' : ''}`}
                onClick={() => handleTypeClick('Types1')}
              >
                <div className='card-body'>
                  <p className={`card-title ${selectedType === 'Types1' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                   
                   What services do you offer in web designing and development?

                  </p>
                </div>
              </div>

              <div
                className={`card mb-3 ${selectedType === 'Types2' ? 'boxborders-gradient-3' : ''}`}
                onClick={() => handleTypeClick('Types2')}
              >
                <div className='card-body'>
                  <p className={`card-title ${selectedType === 'Types2' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                   Do you provide custom web design?

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
                Can you develop e-commerce websites?

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
                 What CMS platforms do you work with?

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
                What support do you offer after the website is launched?
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='card boxborders-gradient-4 '>
                <div className='card-body'>
                  {selectedType === 'Types1' && (
                    <div>
                      <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b> What services do you offer in web designing and development?
                      </b></h4>
                      <p className='p-2'>
                      We provide a comprehensive suite of services, including UI/UX design, responsive web design, front-end and back-end development, e-commerce solutions, CMS development, SEO, digital marketing, and ongoing website maintenance and support.
                       </p>
                    </div>
                  )}
                  {selectedType === 'Types2' && (
                    <div>
                      <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b> Do you provide custom web design?
                      </b></h4>
                      <p className='p-2' >
                      Yes, we offer fully customized web design services tailored to meet your brand's unique needs and goals, ensuring a distinctive and engaging user experience.
                      </p>
                    </div>
                  )}

                  {selectedType === 'Types3' && (
                    <div>
                      <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b> Can you develop e-commerce websites?
                      </b></h4>
                      <p className='p-2' >

                      Absolutely! We specialize in building robust e-commerce websites using platforms like Shopify, Magento, and WooCommerce, complete with secure payment gateway integration.
                                       </p>
                    </div>
                  )}

                  {selectedType === 'Types4' && (
                    <div>
                      <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b> What CMS platforms do you work with?
                      </b></h4>
                      <p className='p-2' >
                      We work with leading CMS platforms including WordPress, Drupal, Joomla, and Shopify, allowing us to efficiently create and manage your website content.

                      </p>
                    </div>
                  )}

                  {selectedType === 'Types5' && (
                    <div>
                      <h4 className='card-title mb-3 mt-3 ' style={{ textAlign: 'start' }}> <b> What support do you offer after the website is launched?
                      </b></h4>
                      <p className='p-2'>
                      We provide comprehensive ongoing maintenance and support, including regular updates, troubleshooting, performance optimization, and security enhancements to ensure your website runs smoothly.
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



export default Websitedesigningdevelopment
