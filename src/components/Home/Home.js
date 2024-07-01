import React from "react";
import { Container,  } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import pic11 from "../../Assets/pic11.svg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <img
             src={pic11}
             alt="home pic"
             style={{
              marginTop: "-100px",
              marginLeft: "-150px",
              marginRight: "70px",
              position:"absolute",
              zIndex:-1

            }}
           />
          <h1 style={{ marginTop:"800px",marginRight:"-75px",textAlign: "right"}} className="heading">
            各省数量概览{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              🏯
            </span>
          </h1>

          <div style={{  textAlign: "right" ,marginRight:"-75px",marginBottom:"1000px"}}>
            <Type />
          </div>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
