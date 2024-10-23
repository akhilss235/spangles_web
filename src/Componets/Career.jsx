import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Helmet } from "react-helmet";
import request from "../request";
import Footer from '../Componets/Footer';

const Baseurl = "https://nodejs.spanglesinfotech.com";

function Career() {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Positions');

    useEffect(() => {
        fetchJobs();
    }, []);

    useEffect(() => {
        if (jobs.length) {
            const uniqueCategories = ['All Positions', ...new Set(jobs.map(job => job.category))];
            setCategories(uniqueCategories);
        }
    }, [jobs]);

    const fetchJobs = async () => {
        try {
            const response = await request.get("/api/job/list/");
            if (response.data && response.data.jobs) {
                // Filter out jobs that are not active
                const activeJobs = response.data.jobs.filter(job => job.status === 'Active');
                setJobs(activeJobs);
            } else {
                setError("No jobs found");
            }
        } catch (error) {
            console.error("Error fetching jobs:", error);
            setError("Failed to fetch jobs. Please try again later.");
        }
    };

    const disableRightClick = (event) => {
        event.preventDefault();
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredJobs = selectedCategory === 'All Positions' 
        ? jobs 
        : jobs.filter(job => job.category === selectedCategory);

    return (
        <>
            <Helmet>
                <title>Spangles Infotech Careers</title>
                <meta name="description" content="Spangles Infotech careers refers to opportunities available at Spangles Infotech for individuals seeking employment. It encompasses job openings across various roles within the company, offering prospects to join a dynamic team committed to innovation in software development, IT solutions, and more." />
                <meta name="keywords" content="Job Openings, Employment Opportunities, Career Growth, Professional Development" />
            </Helmet>

            <div className="Career" onContextMenu={disableRightClick}>
                <div className="container">
                    <h1 className="ca1 sv"><b>OPEN POSITIONS AT  SPANGLES INFOTECH </b></h1>

                    <div>
                        <ul style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}>
                            {categories.map(category => (
                                <li key={category} style={{ display: 'inline', margin: '0 10px' }}>
                                    <Link 
                                        onClick={() => handleCategoryChange(category)}
                                        style={{
                                            cursor: 'pointer',
                                            fontWeight: selectedCategory === category ? 'bold' : 'normal',
                                            textDecoration: 'none',
                                            color: '#345261',
                                            borderBottom: selectedCategory === category ? '2px solid #345261' : 'none'
                                        }}
                                    >
                                        {category}
                                    </Link>
                                </li>
                            ))}
                              <hr />
                        </ul>
                      
                    </div>
         
                    <div className="row ca2">
                        {filteredJobs.map((job) => (
                            <div className="col-lg-4 mt-5" key={job._id}>
                                <div className="boxss" onClick={() => navigate(`/Development/${job._id}`)}>
                                    <h4 className="ca3">{job.designation}</h4>
                                    <p className="ca4">{job.work_experience}</p>
                                    <IconContext.Provider value={{ size: '1.4em' }}>
                                        <span className="d-flex justify-content-start mb-4">
                                            <IoLocationOutline /> <span className="ca5">{job.location}</span>
                                        </span>
                                    </IconContext.Provider>
                                    <div className="d-flex">
                                        <p className="ca6">{new Date(job.posted_on).toLocaleDateString()}</p>
                                        <IconContext.Provider value={{ size: '1.9em' }}>
                                            <span className="d-flex justify-content-end ca8">
                                                <IoIosArrowRoundForward />
                                            </span>
                                        </IconContext.Provider>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Career;
