// src/KeplerMap.js
import React from 'react';
import './KeplerMap2.css';

const KeplerMap = () => {
  return (
    <div className="kepler-map-container">
      <div className="kepler-map-iframe-wrapper">
        <iframe
          src="/kepler.gl.html"
          title="Kepler Map"
          className="kepler-map-iframe"
        />
      </div>
    </div>
  );
};

export default KeplerMap;
