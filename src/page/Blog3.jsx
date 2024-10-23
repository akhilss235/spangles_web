// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { IconContext } from 'react-icons';
// import { IoLocationOutline } from "react-icons/io5";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { Helmet } from "react-helmet";
// import request from "../request";
// import Careerbar from '../Componets/Careerbar';
// import Footer from '../Componets/Footer';

// const Baseurl = "https://nodejs.spanglesinfotech.com";

// function Career() {
//     const navigate = useNavigate();
//     const [jobs, setJobs] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchJobs();
//     }, []);

//     const fetchJobs = async () => {
//         try {
//             const response = await request.get("/api/job/list/");
//             if (response.data && response.data.jobs) {
//                 setJobs(response.data.jobs);
//             } else {
//                 setError("No jobs found");
//             }
//         } catch (error) {
//             console.error("Error fetching jobs:", error);
//             setError("Failed to fetch jobs. Please try again later.");
//         }
//     };

//     const disableRightClick = (event) => {
//         event.preventDefault();
//     };

//     return (
//         <>
//             <Helmet>
//                 <title>Spangles Infotech Careers</title>
//                 <meta name="description" content="Spangles Infotech careers refers to opportunities available at Spangles Infotech for individuals seeking employment. It encompasses job openings across various roles within the company, offering prospects to join a dynamic team committed to innovation in software development, IT solutions, and more." />
//                 <meta name="keywords" content="Job Openings, Employment Opportunities, Career Growth, Professional Development" />
//             </Helmet>

//             <div className="Career" onContextMenu={disableRightClick}>
//                 <div className="container">
//                     <h1 className="ca1 sv "><b>Open positions at Spangles Infotech</b></h1>
//                     <Careerbar />
//                     <div className="row ca2">
//                         {jobs.map((job) => (
//                             <div className="col-lg-4" key={job._id}>
//                                     <div className="boxss" onClick={() => navigate(`/Development/${job._id}`)}>
//                                         <h4 className="ca3">{job.designation}</h4>
//                                         <p className="ca4">{job.work_experience}</p>
//                                         <IconContext.Provider value={{ size: '1.4em' }}>
//                                             <span className="d-flex justify-content-start mb-4">
//                                                 <IoLocationOutline /> <span className="ca5">{job.location}</span>
//                                             </span>
//                                         </IconContext.Provider>
//                                         <div className="d-flex">
//                                             <p className="ca6">{new Date(job.posted_on).toLocaleDateString()}</p>
//                                             <IconContext.Provider value={{ size: '1.9em' }}>
//                                                 <span className="d-flex justify-content-end ca8">
//                                                     <IoIosArrowRoundForward />
//                                                 </span>
//                                             </IconContext.Provider>
//                                         </div>
//                                     </div>
                           
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <Footer />
//             </div>
//         </>
//     );
// }

// export default Career;
