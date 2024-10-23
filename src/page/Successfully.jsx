import React from 'react';
import Successfu from '../image/Mask group.png';
import sp from '../image/Spangles Colour 2.png';
import '../Style/Career.css';

function Successfully() {
    const disableRightClick = (event) => {
        event.preventDefault();
    };

    return (
        <div className="success-container" onContextMenu={disableRightClick}>
            <div className="success-content">
                <img src={Successfu} alt="Success" />
                <h3 className="Su2">Submitted Successfully</h3>
                <p className="Su3">We appreciate you for completing the form.</p>
                <img src={sp} alt="Logo" style={{width:'15rem'}}/>
            </div>
        </div>
    );
}

export default Successfully;
