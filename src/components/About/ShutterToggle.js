import React, { useState } from 'react';
import './ShutterToggle.css';

const ShutterToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIframe = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div >
            <button className="toggle-button" onClick={toggleIframe}>
                {isOpen ? '收起' : '点击查看更多信息'}
            </button>
            <div className={`iframe-container ${isOpen ? 'open' : ''}`}>
                <iframe
                    title="1"
                    src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1EhgoQ_4jnAepQG0F8U21SbVIunKaK8KfYqMC_k3Pi58&font=Default&lang=en&initial_zoom=1&start_at_slide=1&height=650"
                    height="800"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default ShutterToggle;
