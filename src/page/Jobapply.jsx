import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Offcanvas } from 'react-bootstrap';
import axios from 'axios';
import { useMobileHooks } from '../hooks/useMobileHooks';

const Baseurl = "https://nodejs.spanglesinfotech.com";

function Jobapply({ onClose, designation, category }) {
  const navigate = useNavigate();
  const {mobileView} = useMobileHooks()
  const [showOffcanvas, setShowOffcanvas] = useState(true);
  const [formData, setFormData] = useState({
    designation: designation || '',
    category: category || '',
    name: '',
    email: '',
    mobile_number: '',
    alternative_mobile_number: '',
    experience: '',
    skills: '',
    salary_expectation: '',
    resume: null,
    description: ''
  });
  const [error, setError] = useState(null);
  const [resumeError, setResumeError] = useState('');

  // Handle text and number input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'experience' || name === 'mobile_number' || name === 'alternative_mobile_number') {
      const sanitizedValue = value.replace(/[^0-9]/g, '');
      setFormData(prevData => ({
        ...prevData,
        [name]: name === 'experience' ? sanitizedValue.slice(0, 2) : sanitizedValue.slice(0, 10)
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  // Handle file input changes
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setResumeError('Only PDF files are allowed.');
        setFormData(prevData => ({
          ...prevData,
          resume: null
        }));
      } else {
        setResumeError('');
        setFormData(prevData => ({
          ...prevData,
          resume: file
        }));
      }
    }
  };

  // Handle Offcanvas close
  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    onClose();
  };

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (resumeError) {
      return;
    }
    
    const fd = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (key === 'resume' && formData[key]) {
          fd.append('resume', formData[key]);
        } else if (key !== 'resume') {
          fd.append(key, formData[key]);
        }
      }
    }

    try {
      await axios.post(`${Baseurl}/api/applicant/apply`, fd, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/Successfully');
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit the form. Please try again later.");
    }
  };

  // Prevent right-click context menu
  const disableRightClick = (event) => {
    event.preventDefault();
  };
  return (
    <div className='Designer' onContextMenu={disableRightClick}>
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" style={{ width: mobileView ? "90vw": '40vw' }}>
        <Offcanvas.Header closeButton>
          <p className='mt-5' style={{ textAlign: 'center', justifyContent: 'center' }}><b>SPANGLES Application</b></p>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="designation">
              <div className="float-label-control">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Designation" 
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  readOnly
                />
              </div>
            </Form.Group>
            <Form.Group>
              <div className="float-label-control mt-5">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Category" 
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  readOnly
                />
              </div>
            </Form.Group>
            <Form.Group style={{ marginTop: '5px' }}>
              <div className="float-label-control mt-5">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Your Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group style={{ marginTop: '5px' }}>
              <div className="float-label-control mt-5">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group style={{ marginTop: '5px' }}>
              <div className="float-label-control mt-5">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Mobile Number" 
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group style={{ marginTop: '5px' }}>
              <div className="float-label-control mt-5">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Alternate Mobile Number" 
                  name="alternative_mobile_number"
                  value={formData.alternative_mobile_number}
                  onChange={handleInputChange}
                />
              </div>
            </Form.Group>
            <Form.Group style={{ marginTop: '5px' }}>
              <div className="float-label-control mt-5">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Experience (in years)" 
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                />
              </div>
            </Form.Group>
            <Form.Group className="float-label-control mt-5">
                      <Form.Control 
                    className="form-control" 
                    placeholder="Skills" 
                    rows="1" 
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                      />
                    </Form.Group>
            <Form.Group style={{ marginTop: '5px' }}>
              <div className="float-label-control mt-5 mb-5">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Salary Expectation" 
                  name="salary_expectation"
                  value={formData.salary_expectation}
                  onChange={handleInputChange}
                />
              </div>
            </Form.Group>
            <Form.Group style={{ marginTop: '10px' }}>
              <Form.Control
                type="file"
                name="resume"
                className="form-control"
                style={{ display: 'none' }}
                id="resumeFile"
                onChange={handleFileChange}
              />
              <label htmlFor="resumeFile" className="profilesphoto form-label btn rounded p-1" style={{ width: '100%', height: '42px', color: 'rgba(52, 82, 97, 1)', borderColor: 'rgba(52, 82, 97, 1)', borderStyle: 'dotted' }}>
                Upload your Resume
              </label>
              {resumeError && <div className="text-danger mt-2">{resumeError}</div>}
              {formData.resume && (
                <div className="mt-3 d-flex">
                  <strong>Uploaded File:</strong> 
                  <p>{formData.resume.name}</p>
                </div>
              )}
            </Form.Group>


            <Form.Group className="float-label-control mt-5">
                      <Form.Control 
                     className="form-control" 
                     placeholder="Description" 
                     rows="1" 
                     name="description"
                     value={formData.description}
                     onChange={handleInputChange}
                      />
                    </Form.Group>




            <div className='mt-2 d-flex justify-content-center'>
              <Button variant="secondary" type="submit" className='buttone' style={{ width: '100px' }}>
                Submit
              </Button>
            </div>
            {error && <div className="text-danger mt-3">{error}</div>}
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Jobapply;
