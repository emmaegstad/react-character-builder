import React from 'react';
import './Preview.css';

export default function Preview() {
  return (
    <div className="Preview">
      <div className="charSection top">
        <img className="image" src={`${process.env.PUBLIC_URL}/assets/top-1.png`} alt="aquarius" />
      </div>
      <div className="charSection middle">
        <img
          className="image"
          src={`${process.env.PUBLIC_URL}/assets/middle-1.png`}
          alt="aquarius"
        />
      </div>
      <div className="charSection bottom">
        <img
          className="image"
          src={`${process.env.PUBLIC_URL}/assets/bottom-1.png`}
          alt="aquarius"
        />
      </div>
    </div>
  );
}
