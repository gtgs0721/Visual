import React from "react";
import { Container,} from "react-bootstrap";
import CircleImage from './CircleImage';
import timeline from "./资源 15@4x.png";
import biaoti from "./资源 19@2x.png";
import OBJModel from './OBJModel';
import ShutterToggle from './ShutterToggle';
import BuddhismTreeChart from './BuddhismTreeChart';
import liubian from "./资源 20@2x.png";

function About() {
  return (
    <Container fluid className="about-section">
      <div className="App">
      <img
             src={biaoti}
             alt="home pic"
             style={{
              marginLeft: '-950px',
              marginTop: '-90px',
              maxWidth: "25%",
              justifyItems: "left",
              zIndex:1

      }}></img>
      <CircleImage/>
      <div style={{ height: '6000px' }}>
        {/* 用于测试滚动效果的内容 */}
      </div>
      </div>
      <img
             src={timeline}
             alt="home pic"
             style={{
              marginLeft: '20px',
              maxWidth: "99%",
              justifyItems: "center",
              zIndex:1

            }}></img>
      <div className="App">
            <ShutterToggle />
      </div>
      <div>
        <BuddhismTreeChart />
        <OBJModel/>
        <img
             src={liubian}
             alt="home pic"
             style={{
              position: 'relative',
              marginLeft: '-1000px',
              top:"-1740px",
              maxWidth: "23%",
              justifyItems: "left",
              zIndex:1

      }}></img>
      </div>                              
    </Container>
    
  );
}

export default About;
