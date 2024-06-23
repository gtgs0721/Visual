import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  const typewriterStyle = {
    fontFamily: "FZSUXSGYSJW",
    fontSize: "15px",
  };

  return (
    <div style={typewriterStyle}>
      <Typewriter
        options={{
          strings: [

           "浙江省：5714座", "福建省：4314座", "江西省：4269座", "湖南省：4182座", "云南省：2766座", "湖北省：2664座", "四川省：2420座", "西藏自治区：1786座", "广东省：1756座", "安徽省：1395座", "甘肃省：1371座", "江苏省：1316座", "河南省：1189座", "陕西省：1168座", "河北省：949座", "辽宁省：871座", "青海省：816座", "山西省：640座", "宁夏回族自治区：562座", "贵州省：503座", "重庆市：309座", "内蒙古自治区：308座", "山东省：301座", "广西壮族自治区：229座", "吉林省：228座", "上海市：140座", "黑龙江省：97座", "新疆维吾尔自治区：58座", "北京市：39座", "海南省：21座", "天津市：20座"

          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
