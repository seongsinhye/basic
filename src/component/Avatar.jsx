import React from 'react';

export default function Avatar({images, isNew}) {
  return (
    <div className='avatar'>
     <img className='photo' src={images} alt='avatar'/> 
     {
        isNew && <span className='new'>new</span>
      }
    </div>
  );
}

