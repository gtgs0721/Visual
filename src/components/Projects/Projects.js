import React from "react";
import { Container,} from "react-bootstrap";
import Particle from "../Particle";
// import Toolstack from "../Projects/Toolstack";
import SankeyDiagram from './src/SankeyDiagram';
import { data2 } from './src/Data'; // 导入数据文件
import { TreeData } from './src/Data3'; // 导入数据文件
import TreeChart from './src/TreeChart';


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      {/* <h1 className="project-heading">
           <strong className="purple">工具 </strong>
        </h1>
      <Toolstack /> */}
        <h1 className="project-heading">
         <strong className="purple">相关图表 </strong>
        </h1>
        <p style={{ color: "gray" }}>
          一些制作过程中的产物
        </p>
        <SankeyDiagram data={data2} />
        <TreeChart data={TreeData}/>
      </Container>
    </Container>
  );
}

export default Projects;
