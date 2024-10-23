import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Componets/Footer";
import slidingImage from '../image/animation-01.png';
import request from "../request";
import Jobapply from "../page/Jobapply";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWorkHistory } from "react-icons/md";
import { Container } from 'react-bootstrap';

const Baseurl = "https://nodejs.spanglesinfotech.com";

function Development() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  const fetchJobDetails = async () => {
    setLoading(true);
    try {
      const response = await request.get(`/api/job/${id}/data`);
      if (response.data && response.data.jobs) {
        setJob(response.data.jobs);
        setError(null);
      } else {
        setError("Job not found");
        setJob(null);
      }
    } catch (error) {
      console.error("Error fetching job details:", error);
      setError("Failed to fetch job details. Please try again later.");
      setJob(null);
    } finally {
      setLoading(false);
    }
  };

  const disableRightClick = (event) => {
    event.preventDefault();
  };

  if (loading) {
    return (
      <div className="containers">
        <div className="mask1 mask2">
          <img
            src={slidingImage}
            alt="Sliding Image"
            className="sliding-image"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="Jobapply" onContextMenu={disableRightClick}>
      <Helmet>
        <title>Spangles Infotech</title>
        <meta name="description" content="Job Details Page" />
      </Helmet>
      <div className="container mb-5" style={{ marginTop: '5%' }}>
      <div className="row">
  <div className="col-sm-10">
    <h1 className="des1">
      <b style={{ color: '#345261', fontSize: '50px', marginBottom: '5%', fontWeight: 'bold' }}>
        {job?.designation}
      </b>
    </h1>
    <div className="d-flex justify-content-start">
      <p className="mt-5 ">
        <b style={{ color: '#345261' }}>
          <MdOutlineWorkHistory className="mx-2" />
          {job?.work_experience}
        </b>
      </p>
      <p className="mt-5 mx-5  align-items-end" style={{ color: '#345261', textAlign: 'center'}}>
        <FaLocationDot className="mx-2" />
        {job?.location}
      </p>
    </div>
  </div>
          {/* <div className="col-sm-5 d-flex">

          </div> */}
          <div className="col-sm-2">
            <button
              type="button"
              id="buttonss"
              className="mt-5 mb-5 btn buttone"
              onClick={openForm}
            >
              Apply Now
            </button>
          </div>

<Container>
{job?.job_summary && (
            <>
              <h1 className="mb-5 mt-5" >Job Summary</h1>
              <p >{job.job_summary}</p>
            </>
          )}

          {job?.responsibilities_and_duties?.length > 0 && (
            <>
              <h1 className="mb-5 mt-5 ">Responsibilities and Duties</h1>
              <ul >
                {job.responsibilities_and_duties.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {job?.required_experience_and_qualifications?.length > 0 && (
            <>
              <h1 className="mb-5 mt-5">Qualifications</h1>
              <ul>
                {job.required_experience_and_qualifications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {job?.preferred_skills?.length > 0 && (
            <>
              <h1 className="mb-5 mt-5">Key Skills</h1>
              <ul>
                {job.preferred_skills.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
          </Container>
        </div>
      </div>
      <Footer />
      {showForm && <Jobapply onClose={closeForm} designation={job?.designation} category={job?.category} />}
    </div>
  );
}

export default Development;
