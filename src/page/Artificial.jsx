import React, { useState, useEffect } from "react";
import "../Style/Blogs.css";
import { IconContext } from "react-icons";
import { useParams } from "react-router-dom";
import Footer from '../Componets/Footer';
import request from "../request";
import { IoTimeOutline } from "react-icons/io5";
import slidingImage from '../image/animation-01.png';
import { Container } from "react-bootstrap";

const Baseurl = "https://nodejs.spanglesinfotech.com";

function Artificial() {
    const { id } = useParams();
    const disableRightClick = (event) => {
        event.preventDefault();
    };

    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // New loading state

    useEffect(() => {
        fetchBlog();
    }, [id]);

    const fetchBlog = async () => {
        setLoading(true); // Set loading to true when fetching starts
        try {
            const response = await request.get(`/api/blog/${id}/data`);
            if (response.data && response.data.blogs) {
                setBlog(response.data.blogs);
                setError(null); // Clear error if data is fetched successfully
            } else {
                setBlog(null);
                setError("Blog not found");
            }
        } catch (error) {
            console.error("Error fetching blog:", error);
            setBlog(null);
            setError("Failed to fetch blog. Please try again later.");
        } finally {
            setLoading(false); // Set loading to false after fetch is complete
        }
    };

    if (loading) {
        return (
            <div className='containers'>
                <div className='mask1'>
                    <img
                        src={slidingImage}
                        alt="Sliding Image"
                        className='sliding-image'
                    />
                </div>
            </div>
        );
    }

    if (error) {
        return <div style={{ textAlign: 'center', marginTop: '20%' }}>Error: {error}</div>;
    }

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="Artificial" onContextMenu={disableRightClick}>
            <div className="container">
                <div className="mt-5">
                    <h1 className="bl3">
                        <b>{blog.title}</b>
                    </h1>
                </div>
                <div>
                    <IconContext.Provider value={{ size: "1.8em" }}>
                        <span className="d-flex justify-content-start mb-3">
                            {/* Assuming 'posted_on' is a valid date field */}
                            <IoTimeOutline /> <span className="bl4">{new Date(blog.posted_on).toLocaleDateString()} </span>
                        </span>
                    </IconContext.Provider>
                    <Container>


                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '700px',

                            padding: '20px',
                            backgroundColor: '#f9f9f9'
                        }}>
                            <img
                                src={`${Baseurl}/${blog.image}`}
                                alt={blog.title}
                                style={{
                                    height: '700px',

                                    width: '100%',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </div>



                    </Container>




                </div>
                <div className="bl5" style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}>
                    <p className="mt-3" dangerouslySetInnerHTML={{ __html: blog.content.replace(/<img/g, '<img class="blog-content-image"').replace(/<iframe/g, '<iframe class="blog-content-iframe"') }} style={{ width: '90%', margin: '0 auto' }}></p>
                </div>




                <div className="bl5" style={{ marginBottom: '15%' }}>
                    <p>
                        {blog.conclusion}
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Artificial;
