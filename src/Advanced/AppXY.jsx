import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [position, setPosition] = useState({x : 0, y: 0})
  return (
    // <div className='container' onMouseMove={mouseMove}>
    <div className='container' onPointerMove={(e) => {
      setPosition({x : e.clientX , y : e.clientY})
    }}>
      <div className='pointer'  style={{
          transform: `translate(${x}px, ${y}px)`,
        }} />
    </div>
  );
}
