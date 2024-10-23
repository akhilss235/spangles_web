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
import Sv from '../image/bb.png';
import sv from '../image/bb2.png';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import '../Style/Services.css'
import Footer from '../Componets/Footer';
import { Container } from 'react-bootstrap';
import { useMobileHooks } from '../hooks/useMobileHooks';
function Bestbilling() {
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
        <div className='Bestbilling' onContextMenu={disableRightClick}>
            <Helmet>
                <title>  Best Billing Software | Spangles Infotech</title>
                <meta name="description" content="Spangles Infotech delivers comprehensive billing software that simplifies invoicing, payment processing, and financial reporting. Our user-friendly solution ensures accuracy and efficiency, saving time and reducing errors for businesses of all sizes. " />
                <meta name="keywords" content=" Billing software, Invoicing software, Invoicing software for small business, Legal billing software
Billing software for small business, Online invoicing software" />

            </Helmet>
            <Container>
                <div style={{ textAlign: 'center', marginTop: '10%', marginBottom: '10%' }}>
                    <h1 className='text1'><b> Billing Software</b></h1>
                    <p className='mt-5' style={{ width: '100%', fontSize: '20px' }}>
                        Effortlessly manage invoices and payments with our advanced billing solution.
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
                            Billing software revolutionizes the way businesses manage their financial transactions by automating the invoicing and payment process. It offers a centralized platform for creating, sending, and tracking invoices, eliminating the need for manual paperwork and reducing errors. With customizable invoice templates and automated billing schedules, businesses can efficiently manage recurring charges and tailor invoices to meet the unique needs of their clients. Additionally, billing software often integrates with accounting systems, enabling seamless transfer of data and simplifying the reconciliation process.                        </p>
                        <p style={{ width: '90%' }}>
                            Moreover, billing software provides valuable insights into the financial health of a business through reporting and analytics tools. Users can generate detailed reports on outstanding invoices, payment histories, and revenue trends, empowering them to make informed decisions to optimize cash flow and drive business growth. By streamlining billing processes and improving accuracy and efficiency, billing software enables businesses to focus on delivering exceptional products and services while maintaining strong financial control.
                        </p>

                        <button type="button" className="btn btn-outline-custom" style={{ width: '200px', padding: '10px' }}>
                            <a href="Contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Contact Us
                            </a>
                        </button>                    </div>

                </div>
            </Container>

            <div style={{ backgroundColor: '#345261', height: '50%', marginTop: '10%' }}>
                <Container>
                    <div className='d-flex justify-content-between p-3 cnt-to-expt-cont'>


                        <h4 style={{ color: 'white', textAlign:mobileView ? "center" : "" }} className='mt-1'>
                            Discover the best billing software to streamline your invoicing process.
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
                        Why Billing Software?                   </b></h2>
                    <p style={{ textAlign: 'center', marginBottom: '5%' }}>
                        Billing software automates invoicing processes, reducing manual errors and saving time, while also ensuring accurate financial records and improving cash flow management for businesses. It enhances customer satisfaction through timely billing and provides valuable financial insights through reporting,
                        aiding in informed decision-making.
                    </p>
                    <h2 style={{ textAlign: 'center', color: '#345261', marginBottom: '10%' }}> <b>
                        Essential Features Of Billing Software :                 </b></h2>
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Voice Generation :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Voice generation offers spoken alerts and hands-free interaction, enhancing user accessibility and efficiency in financial management tasks.                    </p>
                    <img src={o1} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Recurring Billing :</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Recurring billing automates the process of generating and managing regular invoices for subscription-based services or recurring payments.                                          </p>
                    <img src={o2} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Payment Processing :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Payment processing in billing software streamlines the handling of financial transactions, facilitating secure and efficient payments for goods and services rendered.
                    </p>
                    <img src={o3} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Tax Calculation :</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Tax calculation in billing software automates the computation of taxes for invoices, ensuring accurate and compliant taxation for financial transactions.
                    </p>
                    <img src={o4} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Mobile Access :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Mobile access enables users to manage invoices, payments, and financial data conveniently from their smartphones or tablets, facilitating on-the-go financial management.
                    </p>
                    <img src={o5} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Custom Payment terms :</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Custom payment terms allow users to define unique payment schedules and conditions tailored to their specific business needs, enhancing flexibility and accommodating diverse billing requirements.

                    </p>
                    <img src={o6} className="image image-right" alt="web designing" />
                </div>

                <div className='boxborder-gradient-7'>
                    <h5><b className='header'>Reporting and Analytics :</b></h5>
                    <p className='description' style={{ marginLeft: '5%' }}>
                        Reporting and analytics in clinical management software provide insights through data analysis, facilitating informed decision-making and performance monitoring.                    </p>
                    <img src={o7} className="image image-left" alt="web designing" />
                </div>

                <div className='boxborder-gradient-8'>
                    <h5 className='header header-right'><b>Discount and Promo Code Management :</b></h5>
                    <p className='description description-right' style={{ marginRight: '5%' }}>
                        Discount and promo code management enables users to apply and track discounts and promotional offers seamlessly, optimizing customer engagement and sales.
                    </p>
                    <img src={o8} className="image image-right" alt="web designing" />
                </div>







                <div className='row' style={{ marginTop: '10%' }}>

                    <div className='col-sm-7 ' >

                        <h2 style={{ textAlign: 'start', color: '#345261', }}><b>
                            How Billing Software Works?</b></h2>
                        <p className='mt-3'>
                            Billing software automates the creation and delivery of invoices based on inputted billing
                            information and customer details. It offers various payment options, allowing customers to pay
                            directly through the invoice or online portal. The software tracks invoice statuses and sends
                            automated reminders for overdue payments, reducing manual follow-up. Payments received are
                            recorded and updated in the software, maintaining accurate financial records. Users can generate
                            reports on invoicing activity and financial performance, providing insights for informed
                            decision-making.
                        </p>
                        <button type="button" className="btn btn-outline-custom" style={{ width: '200px', padding: '10px' }}>
                            <a href="Contact" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                                    What features does the billing software offer?
                                </p>
                            </div>
                        </div>

                        <div
                            className={`card mb-3 ${selectedType === 'Types2' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types2')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types2' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    Is the billing software customizable to fit the specific needs of our business?                                                        </p>
                            </div>
                        </div>

                        {/* typ3  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types3' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types3')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types3' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }}>
                                    How user-friendly is the billing software for both administrators and customers?                                                                </p>
                            </div>
                        </div>
                        {/* typ4  */}
                        <div
                            className={`card mb-3 ${selectedType === 'Types4' ? 'boxborders-gradient-3' : ''}`}
                            onClick={() => handleTypeClick('Types4')}
                        >
                            <div className='card-body'>
                                <p className={`card-title ${selectedType === 'Types4' ? 'active-bold' : ''}`} style={{ textAlign: 'start' }} >

                                    Can the billing software handle tasks such as recurring billing, subscription management, and
                                    automatic payment reminders efficiently?
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

                                    Does the billing software offer integration with other business tools or third-party applications?


                                </p>                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card boxborders-gradient-4 '>
                            <div className='card-body'>
                                {selectedType === 'Types1' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            What features does the billing software offer?
                                        </b></h4>
                                        <p className='p-2'>


                                            The top billing software typically includes features such as invoice creation, payment processing, expense tracking, reporting and analytics, and integration with accounting systems.
                                        </p>
                                    </div>
                                )}
                                {selectedType === 'Types2' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            Is the billing software customizable to fit the specific needs of our business?                                        </b></h4>
                                        <p className='p-2' >

                                            Many billing software platforms offer customization options to tailor the software to the unique
                                            requirements of your business, including customizable invoice templates, payment terms, and billing
                                            workflows.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types3' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>
                                            How user-friendly is the billing software for both administrators and customers?                                        </b></h4>
                                        <p className='p-2' >


                                            Billing software is designed to be user-friendly, with intuitive interfaces and easy navigation. Most
                                            platforms offer training resources, tutorials, and customer support to help users get started and
                                            troubleshoot any issues.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types4' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3' style={{ textAlign: 'start' }}> <b>


                                            Can the billing software handle tasks such as recurring billing, subscription management, and
                                            automatic payment reminders efficiently?
                                        </b></h4>
                                        <p className='p-2' >
                                            Yes, top billing software is capable of automating recurring billing processes, managing subscriptions,
                                            and sending automatic payment reminders to customers, improving efficiency and reducing manual
                                            tasks.
                                        </p>
                                    </div>
                                )}

                                {selectedType === 'Types5' && (
                                    <div>
                                        <h4 className='card-title mb-3 mt-3 ' style={{ textAlign: 'start' }}>
                                            <b>

                                                Does the billing software offer integration with other business tools or third-party applications?
                                            </b></h4>
                                        <p className='p-2'>
                                            Many billing software platforms offer integrations with popular accounting software, CRM systems,
                                            payment gateways, and other business tools, allowing for seamless data sharing and workflow
                                            automation across different systems.
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


export default Bestbilling
