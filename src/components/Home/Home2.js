import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";



function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              浙江省 <span className="purple"> 寺庙分布 </span> 分析
            </h1>
            <p className="home-about-body">
              根据以上分析以及相关资料可知，这种现象出现的原因有以下几点： 
              <br />
              <br />1.东汉末年佛教进入浙江后，
                <b className="purple">稳定的社会政治环境和相对优越的经济环境，</b>
              <br />为佛教在浙江的发展孕育了肥沃的土壤。
              <br />
              <br />2.两晋南北朝时期的“衣冠南渡”致使
                <b className="purple">学术中心转移至南方，</b>
              <br />也为浙江带来了丰富的佛教人才。
              <br />
              <br />3.隋唐五代时期，<b className="purple">统治者对佛教的尊崇</b>为佛教的持续发展创造了条件。
              <br />
              <br />4.宋元时期，尽管浙江的佛教发展势头下滑，<b className="purple">但由于历史积累雄厚，</b>浙江称为当时汉地佛教的中心。
              <br />
              <br />5.明末清初，被誉为净土宗中国第八代高僧的云栖大师、第九代高僧的智旭则久居于浙江。
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row> */}
      </Container>
      <br />
      <br />
      <iframe title="1" src='https://pudding.cool/2018/10/city_3d/' width='100%' height='800' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0' ></iframe>
    </Container>
    
  );
}
export default Home2;
