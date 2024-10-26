import React from 'react';
import { useMobileHooks } from '../hooks/useMobileHooks';
import { useNavigate } from 'react-router-dom';

function Servicesbuttone() {
    const { mobileView } = useMobileHooks();
    const navigate = useNavigate();

    const handleScheduleDemo = () => {
        navigate('/Contact', { state: { type: 'service' } }); // Passing type in navigation state
    };

    return (
        <div>
            <button type="button" className="btn btn-light custom-buttons " style={{ width: 'auto', padding: '10px', marginLeft: '3%', textAlign: mobileView ? "center" : "" }} onClick={handleScheduleDemo}>
                Connect to an Expert now
            </button>
        </div>
    );
}


export default Servicesbuttone
