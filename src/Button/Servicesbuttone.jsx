import React, { useRef } from 'react';
import { useMobileHooks } from '../hooks/useMobileHooks';
import { useNavigate } from 'react-router-dom';

function Servicesbuttone() {
    const { mobileView } = useMobileHooks();
    const navigate = useNavigate();
    const ref = useRef(null); // Define the ref

    const handleScheduleDemo = () => {
        if (ref.current) {
            ref.current.focus(); // Focus the element before navigation
        }
        navigate('/Contact', { state: { type: 'service' } });
    };

    return (
        <div>
            <button 
                type="button" 
                className="btn btn-light custom-buttons" 
                style={{ width: 'auto', padding: '10px', marginLeft: '3%', textAlign: mobileView ? "center" : "" }} 
                onClick={handleScheduleDemo} // Call handleScheduleDemo on click
                ref={ref} // Attach the ref here
            >
                Connect to an Expert now
            </button>
        </div>
    );
}

export default Servicesbuttone;
