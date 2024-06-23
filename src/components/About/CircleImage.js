import React, { useState, useEffect } from 'react';
import './CircleImage.css';
import treepic from "./资源 18@4x.png";

const CircleImage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState(0); // 新增旋转角度的状态
  const [opacity, setOpacity] = useState(1); // 新增透明度的状态

  const handleScroll = () => {
    const newScrollY = window.scrollY;
    setScrollY(newScrollY);

    // 根据滚动量计算反向旋转角度
    const newRotation = -newScrollY * 0.1; // 将旋转角度取反，实现反向旋转
    setRotation(newRotation);

    // 根据滚动量计算透明度
    const newOpacity = newScrollY > 6000 ? 0 : (1.0 - newScrollY /6000)*5;
    setOpacity(newOpacity);
  };

  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 计算新的尺寸和位置
  const size = Math.min(800 + scrollY * 2, 3400); // 初始大小100px，最大300px
  const left = Math.max(50 - scrollY * 0.05, -15); // 初始位置50%，最小-50%（即完全消失）


  return (
    <img
      src={treepic}
      className="circle-image"
      width={size}
      height={size}
      alt="circle"
      style={{
        left: `${left}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        opacity: opacity // 应用透明度
      }}
    />
  );
};

export default CircleImage;
