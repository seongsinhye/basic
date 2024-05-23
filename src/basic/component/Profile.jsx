import React from 'react';
import Avatar from './Avatar';

export default function Profile({images, name, title, isNew}) {
  return (
    <div className='profile'>
      <Avatar images={images} isNew={isNew}/>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

