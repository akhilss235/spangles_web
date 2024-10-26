import React from 'react';
import { useMobileHooks } from '../hooks/useMobileHooks';
import { useNavigate } from 'react-router-dom';

function ScheduleDemo() {
    const { mobileView } = useMobileHooks();
    const navigate = useNavigate();

    const handleScheduleDemo = () => {
        navigate('/Contact', { state: { type: 'schedule demo' } }); // Passing type in navigation state
    };

    return (
        <div>
            <button
                type="button"
                className="btn btn-light custom-buttons"
                style={{ width: '300px', padding: '10px', marginLeft: '3%', textAlign: mobileView ? 'center' : 'center' }}
                onClick={handleScheduleDemo}
            >
                Schedule a demo
            </button>
        </div>
    );
}

export default ScheduleDemo;
