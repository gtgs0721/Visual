// src/KeplerMap.js
import React from 'react';
import './KeplerMap.css';

const KeplerMap = () => {
  return (
    <div className="kepler-map-container">
      <div className="kepler-map-iframe-wrapper">
        <iframe
          src="http://127.0.0.1:5500/Portfolio-master/src/components/Projects/src/kepler.gl.html"
          title="Kepler Map"
          className="kepler-map-iframe"
        />
      </div>
    </div>
  );
};

export default KeplerMap;
