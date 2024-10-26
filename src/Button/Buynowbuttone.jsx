import React from 'react';
import { useMobileHooks } from '../hooks/useMobileHooks';
import { useNavigate } from 'react-router-dom';

function Buynowbuttone() {
    const { mobileView } = useMobileHooks();
    const navigate = useNavigate();

    const handleScheduleDemo = () => {
        navigate('/Contact', { state: { type: 'buy now' } }); // Passing type in navigation state
    };

    return (
        <div>
            <button type="button" className="btn btn-outline-custom" style={{ width: '200px', padding: '10px' }} onClick={handleScheduleDemo}>
                Contact Us To Buy Now

            </button>
        </div>
    );
}


export default Buynowbuttone
