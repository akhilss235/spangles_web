import React from 'react';
import { useNavigate } from 'react-router-dom';

function Buttonecontact() {
    const navigate = useNavigate();

    const handleContactUs = () => {
        navigate('/Contact', { state: { type: 'contact' } }); // Passing type in navigation state
    };

    return (
        <div>
            <button 
                type="button" 
                className="btn btn-outline-custom   s" 
                style={{ width: '200px', padding: '10px' }} 
                onClick={handleContactUs}
            >
                Contact Us
            </button>   
        </div>
    );
}

export default Buttonecontact;
