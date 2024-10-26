import React, { useState, useEffect, useRef } from "react";
import "../Style/Home.css";
import "../Style/Animation.css";
import "../Style/Scroll.css";
import WEB from "../image/SERVICES1.png";
import APP from "../image/SERVICES2.png";
import MOB from "../image/SERVICES3.png";
import CD from "../image/SERVICES4.png";
import DM from "../image/SERVICES5.png";
import GP from "../image/SERVICES6.png";
import LINE from "../image/Line 1.png";
import NIL from "../image/NIL.png";
import ROCK from "../image/Rock.png";
import GP1 from "../image/group1.png";
import GP2 from "../image/group2.png";
import GP3 from "../image/Group3.png";
import GP4 from "../image/Group4.png";
import GP5 from "../image/Group5.png";
import GP6 from "../image/Group6.png";
import GP8 from '../image/12.jpg';
import GP9 from '../image/OZI9ES2.jpg';
import request from "../request";
import GP10 from '../image/19.jpg';
import Footer from "../Componets/Footer";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Helmet } from "react-helmet";
import { Form, Button } from 'react-bootstrap';
import Contactus from "../page/Contactus";
const Baseurl = "https://nodejs.spanglesinfotech.com";

const Home = () => {
  const [errors, setErrors] = useState({});


  const navigate = useNavigate();

 

 

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await request.get("/api/blog/list");
      if (response.data && response.data.blogs) {
        setBlogs(response.data.blogs);
      } else {
        setErrors("No blogs found");
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setErrors("Failed to fetch blogs. Please try again later.");
    }
  };


  

  const handleBlogClick = (id) => {
    navigate(`/Artificial/${id}`);
  };

  const [scrollY, setScrollY] = useState(0);
  const part1Ref = useRef(null);
  const part2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelection = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  const [waveAnimation, setWaveAnimation] = useState(false);
  const [colorTransition, setColorTransition] = useState(false);
  const [color1, setColor1] = useState("#3E606F");
  const [color2, setColor2] = useState("white");
  const [showSentence, setShowSentence] = useState(false);

  useEffect(() => {
    const startAnimations = () => {
      setWaveAnimation(true);
      setColorTransition(true);
      setTimeout(() => {
        setColor1("white");
        setColor2("#3E606F");
        setTimeout(() => {
          setColor2("rgba(52, 82, 97, 1)");
          setTimeout(() => setColorTransition(true), 100);
        }, 100);
      }, 1000);
    };
    startAnimations();
  }, []);


  const disableRightClick = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const doAnimations = () => {
      const offset = window.scrollY + window.innerHeight;
      const animatables = document.querySelectorAll(".animatable");
      let allAnimated = true;
      animatables.forEach((animatable) => {
        const rect = animatable.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible && animatable.classList.contains("animatable")) {
          animatable.classList.remove("animatable");
          animatable.classList.add("animated");
        }
        if (animatable.classList.contains("animatable")) {
          allAnimated = false;
        }
      });
      if (allAnimated) {
        window.removeEventListener("scroll", doAnimations);
      }
    };

    window.addEventListener("scroll", doAnimations);
    doAnimations();

    return () => {
      window.removeEventListener("scroll", doAnimations);
    };
  }, []);

  return (
    <>

      <Helmet>
        <title>Software Development Company in Nagercoil, India | Spangles Infotech</title>
        <meta name="description" content="Spangles Infotech is a leading IT services company in Nagercoil, India specializing in cutting-edge technology solutions and expert consulting. Contact us for more info." />
        <meta name="keywords" content="Software development company, Software development company in Nagercoil, Software Companies in Nagercoil, Best software development companies, Software development firms, Top software development companies" />
      </Helmet>
      {/* <div className="Home" onContextMenu={disableRightClick}> */}

      <div className="Home" onContextMenu={disableRightClick}>
        {showSentence && <p>This sentence will appear when you click the link</p>}

        <div className={`wave ${waveAnimation ? "" : ""}`} style={{ background: color2 }}>
  <h1
    className="wave1"
    style={{
      transition: colorTransition ? "ease 1s" : "",
      color: color1,
    }}
  >
    Brighten your business with our digital world
  </h1>
  <p
    className="wave2"
    style={{
      transition: colorTransition ? "ease 1s" : "",
      color: color1,
    }}
  >
    We are the prominent team to elevate your business to reach its zenith.
  </p>
</div>


        <div
          className="contanier  gy-5 text-center"
          style={{ marginTop: "50px" }}
        >
          <h1 className="mt-5  animatable bounceIn sv ">
            <b>SERVICES WE DELIVER</b>
          </h1>
          <center>
            <p className="animatable bounceInLeft">
              Preparing for your success, we provide truly prominent IT
              solutions.
            </p>
          </center>
          <div style={{ margin: '6%' }}>
            <div className="row">

              <div className="col-lg-4 mb-4   animatable bounceInRight">
                <a href="Websitedesigningdevelopment" style={{ textDecoration: 'none' }}>
                  <div className="card  sver" style={{ height: "550px" }}>
                    <center className="mt-5">
                      <img
                        src={WEB}
                        className="mb-3"
                        alt="web designing"
                        style={{ width: "100px" }}
                      />
                    </center>

                    <div className="card-body ">
                      <h4 className="card-title"> <b style={{ color: '#2C2C2C' }}>Website Designing Development
                      </b> </h4>
                      <p style={{ color: "#345261", padding: '5%', fontSize: '14px' }}>
                        The task of thinking about, planning, and formatting
                        electronic data to define their layout, colours, text,
                        styles, structures, graphics, and images—as well as the
                        usage of interactive features that show pages to site
                        visitors—is known as web design. With eight years of
                        expertise under our belt, we can handle any client
                        requirement for web design and development.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 mb-4 animatable fadeIn" >
                <a href="Webapplication" style={{ textDecoration: 'none' }}>
                  <div className="card sver " style={{ height: "550px" }}>
                    <center className="mt-5">
                      <img
                        src={APP}
                        className="mb-3"
                        alt="web designing"
                        style={{ width: "100px" }}
                      />
                    </center>

                    <div className="card-body ">
                      <h4 className="card-title"><b style={{ color: '#2C2C2C' }}>Web Application</b></h4>
                      <p style={{ color: "#345261", padding: '5%', fontSize: '14px' }}>
                        Elevate your digital presence with our web application
                        development service. We craft bespoke solutions tailored
                        to your unique needs, combining innovation with
                        functionality to deliver seamless user experiences. Let's
                        turn your ideas into reality and propel your business
                        forward in the digital age. Software that runs within your
                        web browser is dubbed an application. Companies need to
                        provide services remotely and share information. Web
                        applications are used by them to safely and conveniently
                        communicate with customers.{" "}
                      </p>
                    </div>
                  </div></a>
              </div>
              <div className="col-lg-4 mb-4 animatable fadeInDown" >
                <a href="Mobileapp" style={{ textDecoration: 'none' }}>

                  <div className="card sver" style={{ height: "550px" }} >
                    <center className="mt-5">
                      <img
                        src={MOB}
                        className="mb-3"
                        alt="web designing"
                        style={{ width: "100px" }}
                      />
                    </center>

                    <div className="card-body">
                      <h4 className="card-title"><b style={{ color: '#2C2C2C' }}>Mobile App Development</b> </h4>
                      <p style={{ color: "#345261", padding: '5%', fontSize: '14px' }}>
                        Experience the power of mobile with our app development
                        service. We specialize in creating intuitive and
                        feature-rich applications that engage users and drive
                        results. From concept to launch, we're with you every step
                        of the way, ensuring your app stands out in a crowded
                        marketplace. Let's build something incredible together.
                        The development of mobile apps is comparable to the
                        production of other software, including web apps. Planning
                        a smart digital solution, though, can be challenging.{" "}
                      </p>
                    </div>
                  </div></a>
              </div>
            </div>
            <div className="row ">
              <div className="col-sm-4 mb-4  animatable fadeInUp">
                <a href="Ecommerce" style={{ textDecoration: 'none' }}>

                  <div className="card sver " style={{ height: "550px" }}>
                    <center className="mt-5">
                      <img
                        src={CD}
                        className="mt-3 mb-3"
                        alt="web designing"
                        style={{ width: "100px" }}
                      />
                    </center>

                    <div className="card-body ">
                      <h4 className="card-title "><b style={{ color: '#2C2C2C' }}>E-Commerce Development</b> </h4>
                      <p style={{ color: "#345261", padding: '5%', fontSize: '14px' }}>
                        Unlock the potential of online retail with our eCommerce
                        development service. We specialize in creating tailored
                        solutions that elevate your brand and drive sales. From
                        intuitive user interfaces to secure payment gateways, we
                        ensure a seamless shopping experience for your customers.
                        Let's transform your eCommerce vision into reality and
                        take your business to new heights. E-commerce development
                        is a manner of designing and constructing websites that
                        allow companies to offer goods and services. The technique
                        of coming up with business strategies, marketing plans,
                        and possible expansion ideas.
                      </p>
                    </div>
                  </div></a>
              </div>
              <div className="col-sm-4 mb-4  animatable fadeInUp" >
                <a href="Testing" style={{ textDecoration: 'none' }}>

                  <div className="card sver " style={{ height: "550px" }}>
                    <center className="mt-5">
                      <img
                        src={DM}
                        className="mt-3 mb-3"
                        alt="web designing"
                        style={{ width: "100px" }}
                      />
                    </center>

                    <div className="card-body ">
                      <h4 className="card-title "><b style={{ color: '#2C2C2C' }}>Software Testing </b> </h4>
                      <p style={{ color: "#345261", padding: '5%', fontSize: '14px' }}>
                        Spangles Infotech is a leading technology service provider in Nagercoil, Kanyakumari, India renowned for its
                        Software testing services. With a focus on quality assurance and reliability, we ensures that software products
                        meet stringent standards of functionality, usability, and performance. We boasts extensive experience and
                        expertise in the technology sector, positioning itself as a leader in providing cutting-edge solutions. Offering a
                        suite of software testing services, we caters to diverse needs, including functional testing, usability testing,
                        performance testing, security testing, and more.
                      </p>
                    </div>
                  </div></a>
              </div>
              <div className="col-sm-4 mb-4  animatable fadeInUp" >
                <a href="UIUXdesigning" style={{ textDecoration: 'none' }}>

                  <div className="card sver" style={{ height: "550px" }}>
                    <center className="mt-5">
                      <img
                        src={GP}
                        className="mt-3 mb-3"
                        alt="web designing"
                        style={{ width: "100px" }}
                      />
                    </center>

                    <div className="card-body ">
                      <h4 className="card-title "><b style={{ color: '#2C2C2C' }}>UI/UX Designing </b> </h4>
                      <p style={{ color: "#345261", padding: '5%', fontSize: '14px' }}>
                        Spangles Infotech is a top technology service provider located in Nagercoil, Kanyakumari, India.
                        Specializing in UI/UX (User Interface/User Experience) designing services, We offer innovative
                        solutions to businesses seeking to enhance their digital presence and user engagement. We earned a
                        reputation as a leading technology service provider in the Nagercoil, Kanyakumari region, known for
                        our expertise in UI/UX designing services. Our team comprises skilled professionals with extensive
                        experience in crafting intuitive and visually appealing user interfaces and experiences.
                      </p>
                    </div>
                  </div></a>
              </div>

            </div>
            <div className="row" style={{ marginTop: '15%', marginBottom: '15%' }}>
              <div className="col">
                <h1 className="text3 animatable bounceInRight1">
                  <b>OUR MISSION & VISION</b>
                </h1>
              </div>
              <div className="col-1 animatable fadeInUp1 text-center">
                <img src={LINE} alt="web designing" className="img-fluid verticalline" />
              </div>
              <div className="col text5 animatable bounceInLeft1 ROCK ">
                <div className="d-flex justify-content-start">
                  <img src={ROCK} alt="web designing" className="img-fluid img1" />
                </div>
                <div className="d-flex justify-content-start">
                  <p>
                    Our mission is to become a leading software development
                    and technology company that provides clients with
                    anticipated technological and business solutions.
                  </p>
                </div>
                <div className="d-flex  justify-content-start">
                  <img src={NIL} alt="web designing" className="img-fluid img1 img2" />
                </div>
                <div className="d-flex justify-content-start">
                  <p>
                    Our vision is to become an unrivalled software development
                    and technology company by employing industry standards and
                    cutting-edge technology to deliver pined for technological
                    and business solutions to our clients.
                  </p>
                </div>
              </div>
            </div>



            <h1 className="text2 mt-5 mb-5 animatable fadeInDown">
              <b>WHY CHOOSE SPANGLES</b>
            </h1>

            <div className="row" style={{ marginbottom: '10%' }}>
              <div className="col-lg-4 text5 animatable bounceInLeft  ">
                <img src={GP1} className="mt-5 mb-3 " alt="web designing" />
                <h2 style={{ color: "#345261", marginTop: '5%', marginBottom: '5%' }}><b> Quick Response</b></h2>
                <p style={{ fontSize: '20px', width: '90%' }}>
                  We provide quick responses, ensuring your project requirements are addressed promptly and efficiently.
                </p>
              </div>
              <div className="col-lg-4 text5 animatable bounceInRight">
                <img src={GP2} className="mt-5 mb-3" alt="web designing" />
                <h2 style={{ color: "#345261", marginTop: '5%', marginBottom: '5%' }}><b>Requirement Gathering</b>   </h2>
                <p style={{ fontSize: '20px', width: '90%' }}>
                  We excel in requirement gathering, capturing detailed project specifications to ensure a seamless development process
                </p>
              </div>
              <div className="col-lg-4 text5  animatable bounceIn">
                <img src={GP3} className="mt-5 mb-3" alt="web designing" />
                <h2 style={{ color: "#345261", marginTop: '5%', marginBottom: '5%' }}><b> Experienced Staffs</b>  </h2>
                <p style={{ fontSize: '20px', width: '90%' }}>
                  Our experienced staff expertly capture and document precise project requirements for successful outcomes.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 text5 animatable bounceInRight">
                <img src={GP4} className="mt-5 mb-3" alt="web designing" />
                <h2 style={{ color: "#345261", marginTop: '5%', marginBottom: '5%' }}><b>Scaleable Platform</b>  </h2>
                <p style={{ fontSize: '20px', width: '90%' }}>
                  Our scalable platform adapts to your growing needs, ensuring long-term success and flexibility.
                </p>
              </div>
              <div className="col-lg-4 text5 animatable fadeInUp">
                <img src={GP5} className="mt-5 mb-3" alt="web designing" />
                <h2 style={{ color: "#345261", marginTop: '5%', marginBottom: '5%' }}><b>Legacy Free</b>   </h2>
                <p style={{ fontSize: '20px', width: '90%' }}>
                  Our legacy-free solutions ensure modern, up-to-date technology without outdated constraints.
                </p>
              </div>
              <div className="col-lg-4 mb-5 text5 animatable moveUp">
                <img src={GP6} className="mt-5 mb-3" alt="web designing" />
                <h2 style={{ color: "#345261", marginTop: '5%', marginBottom: '5%' }}><b> 100% Satisfaction</b> </h2>
                <p style={{ fontSize: '20px', width: '90%' }}>
                  We believe we are nothing without delivery to our clients’
                  absolute satisfaction.
                </p>
              </div>
            </div>
            {blogs.length>0&&(
              <>
          
            <a href="Blogs"><p className='text7 mt-5'>View All</p></a>
            <div className="row mt-5 mb-5" style={{ marginBottom: '10%', marginTop: '10%' }}>
              <div className="col-lg-3 block animatable moveUp">
                <h1 className="text6 ">

                  <b> Blogs</b>
                </h1>
                <p>Check our latest work</p>
              </div>
              {blogs.slice(0, 3).map((blog) => (
                <div className="col-lg-3 col-md-6 mb-4" key={blog._id}>
                  <a href={`/Artificial/${blog._id}`} style={{textDecoration:'none'}}>
                  <div className="card doderline" onClick={() => handleBlogClick(blog._id)}>
                    <img className="card-img-top" src={`${Baseurl}/${blog.image}`} alt={blog.title} style={{ width: '100%', height: '20rem' }} />
                    <div className="card-body" style={{ width: '100%', height: '10rem' }}>
                      <IconContext.Provider value={{ size: "1em" }}>
                        <span className="d-flex justify-content-start mb-3">
                          <IoTimeOutline className="mt-1 mx-1" />
                          <span className="text8">{new Date(blog.posted_on).toLocaleDateString()}</span>
                        </span>
                      </IconContext.Provider>
                      <p className="card-text"><b>{blog.title.substring(0, 50)}...</b></p>
                      <a href={`/Artificial/${blog._id}`} style={{ color: '#345261' }}>
                        Read More <IoIosArrowRoundForward />
                      </a>
                    </div>
                  </div></a>
                </div>
              ))}

            </div>    </>
)}



            <div style={{ marginTop: '10%', marginBottom: '10%' }} >
              <h1 className="sv  animatable moveUp"><b>OUR RECENT WORKS</b>   </h1>
              <h3
                className=" mt-5 mb-5 text111 animatable fadeIn"
                style={{
                  fontStyle: "normal",
                  // fontFamily: "Poppins"
                }}
              >
                Proud projects that make us stand out
              </h3>
              <p
                style={{ fontSize: "20px", textAlign: 'center', }}
              >
                To achieve and maintain high standards we are committed to
                investing in the most talented IT support specialists in India,
                with the experience, creativity, and qualifications to exceed
                the highest expectations. We are known for our works and we hope
                you enjoy looking at some of our recent works.
              </p>
            </div>

            <div className="row ">
              <a href="/Portfolio"><p className='text7'>View All</p></a>

              <div className="col-lg-4 ">
                <div className="card " style={{ height: "330px" }}>
                  <div className="card-img-zoom">
                    <img src={GP8} alt="card" />
                  </div>

                  <h4
                    className=" text11 m-2 "
                    style={{ color: "#345261" }}
                  >
                    Beth clinic
                  </h4>
                  <p className='m-2' style={{ color: 'gray' }}>Clinic Manangement Software</p>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="card" style={{ height: "330px" }}>
                  <div className="card-img-zoom">
                    <img src={GP9} alt="card" />
                  </div>

                  <h4
                    className=" text11 m-2 "
                    style={{ color: "#345261" }}
                  >
                    Sree Krishna Textile
                  </h4>
                  <p className='m-2' style={{ color: 'gray' }}>E-Commerce Web Application </p>

                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="card" style={{ height: "330px" }}>
                  <div className="card-img-zoom ">
                    <img src={GP10} alt="card" />
                  </div>

                  <h4
                    className=" text11 m-2 "
                    style={{ color: "#345261" }}
                  >
                    Elyon
                  </h4>
                  <p className='m-2' style={{ color: 'gray' }}>Billing Software</p>

                </div>
              </div>
            </div>
          </div>
          <h1 className="sv  animatable fadeInDown" style={{ marginBottom: '5%', marginTop: '15%' }}><b>LET’S GET CONNECTED</b>    </h1>
<Contactus />
          {/* <div className="container">
            <div className="contactss mb-5 mt-5 p-5" style={{ justifyContent: "center" }}>
            <div className="row">
                <div className="col-lg-6">
                  <div>
                    <h6 className="text15">CONTACT US</h6>
                    <h1 className="text17"><b>Say Hey!</b></h1>
                  </div>
                </div>
                <div className="col-lg-6 mt-5">
                  <form className="form mt-5 mb-5" onSubmit={handleFormSubmit}>
                    <Form.Group className="float-label-control mt-5">
                      <Form.Control 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="float-label-control mt-5">
                      <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="float-label-control mt-5">
                      <Form.Control 
                        as="textarea" 
                        rows="2" 
                        name="message"
                        placeholder="Your Message" 
                        className="custom-textarea"
                        value={formData.message}
                        onChange={handleInputChange}
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                      <Button 
                        type="submit"
                        id="buttons"
                        className="mt-5 mb-5" 
                        style={{ color: 'white', backgroundColor: '#345261' }}
                      >
                        Send Message
                      </Button>
                    </div>
                    {errors.form && <p className="error">{errors.form}</p>}
                    {formSubmitted && <p className="success">Your message has been sent successfully!</p>}
                  </form>
                </div>
              </div>
            </div>
          </div> */}
        
          <Footer />
        </div>
      </div>
    </>
  );
};




export default Home


// export default Home;
