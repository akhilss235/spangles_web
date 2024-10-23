import React from 'react'
import WEB from "../image/SERVICES1.png";
import APP from "../image/SERVICES2.png";
import MOB from "../image/SERVICES3.png";
import CD from "../image/SERVICES4.png";
import DM from "../image/SERVICES5.png";
import GP from "../image/SERVICES6.png";
import { Helmet } from "react-helmet";

import Footer from './Footer';
function Services() {
  const disableRightClick = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Helmet>
        <title>Software Development Services | IT Services | Spangles Infotech</title>
        <meta name="description" content="SPANGLES INFOTECH is a leading software company in Nagercoil, Kanyakumari, offering cutting-edge software and web solutions. We excel in delivering innovative and customized technology services to meet diverse business needs." />
        <meta name="keywords" content="Software development company, Website design company, Web design services, Offshore software development, Wordpress website designer, Web application development" />

      </Helmet>

      <div onContextMenu={disableRightClick}>
        <div
          className="contanier  gy-5 text-center"
          style={{ marginTop: "50px" }}
        >
          <h1 className="mt-5  sv ">
            <b>  SERVICES WE DELIVER</b>
          </h1>
          <center>
            <p >
              Preparing for your success, we provide truly prominent IT
              solutions.
            </p>
          </center>
          <div style={{ margin: '6%' }}>
            <div className="row">

              <div className="col-lg-4 mb-4   ">
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
                      <h4 className="card-title"> <b style={{ color: '#2C2C2C' }}>Website Designing and Development
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

              <div className="col-lg-4 mb-4 " >
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
              <div className="col-lg-4 mb-4 " >
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
              <div className="col-lg-4 mb-4  ">
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
              <div className="col-lg-4 mb-4 " >
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
                      <h4 className="card-title "><b style={{ color: '#2C2C2C' }}>Software testing </b> </h4>
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
              <div className="col-lg-4 mb-4 " >
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
                      <h4 className="card-title "><b style={{ color: '#2C2C2C' }}>UI/UX Designing  </b> </h4>
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
          </div></div>
        <Footer />
      </div>
    </>
  )
}

export default Services
