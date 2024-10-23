import React from 'react';
import slidingImage from '../image/animation-01.png'; 

function Zoom() {
  return (
    <div className='containers'>
      <div className='mask1 mask2'>
        <img
          src={slidingImage}
          alt="Sliding Image"
          className='sliding-image'
        />
      </div>
    </div>
  );
}

export default Zoom;
