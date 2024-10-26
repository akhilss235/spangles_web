import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import request from '../request';
import '../Style/Contact.css';

const Contactushomepage = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
        type: 'contact' // Initialize type field
    });

    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const type = location.state?.type; // Get type from location state
        if (type) {
            setFormData(prev => ({ ...prev, type })); // Set the type in form data
        }
    }, [location.state]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.mobile) newErrors.mobile = 'Mobile is required';
        if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no errors
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' })); // Clear error on change
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return; // Prevent submission if invalid

        try {
            await request.post('api/enquiries&messages/add/new', formData);
            setFormSubmitted(true);
            navigate('/Successfully');
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors(prev => ({ ...prev, form: 'Failed to submit the form. Please try again later.' }));
        }
    };

    return (
        <div >
            <div className='Contact'  >
                <div className="container">
                    <div className="contactss mb-5 mt-5 p-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h6 className="text15">CONTACT US</h6>
                                <h1 className="text17"><b>Say Hey!</b></h1>
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
                                            type="tel" // Change to 'tel' for mobile number
                                            name="mobile"
                                            placeholder="Your Mobile"
                                            value={formData.mobile}
                                            onChange={handleInputChange}
                                            isInvalid={!!errors.mobile}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.mobile}
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
                </div>
            </div>
        </div>
    );
};



export default Contactushomepage