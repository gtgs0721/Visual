import React from 'react';
import MyChart from './MyChart';
import KeplerMap from './KeplerMap';
import KeplerMap2 from './KeplerMap2';
import './App.css';
import SankeyDiagram from './SankeyDiagram';
import { data1, data2 } from './Data'; // 导入数据文件
// import TempleChart from './TempleChart';
import TreeChart from './TreeChart';


function App() {
  return (
    <div className="App">
      <h1>宗教活动场所数据可视化</h1>
      <MyChart data={data1} />
      <div className="map-container">
        <KeplerMap/>
        <KeplerMap2/>
      </div>
      <SankeyDiagram data={data2} />
      {/* <TempleChart /> */}
      <TreeChart />
    </div>
  );
}

export default App;
