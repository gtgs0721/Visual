// data.js

const data1 = [
    { province: '浙江省', count: 5684 },
    { province: '福建省', count: 4309 },
    { province: '江西省', count: 4269 },
    { province: '湖南省', count: 4171 },
    { province: '云南省', count: 2765 },
    // 继续添加其他省份数据
  ];
  
  const data2 = {
    nodes: [
        { name: '道教' },
        { name: '佛教' },
        { name: '巴利语系' },
        { name: '藏语系' },
        { name: '汉语系' },
        { name: '全真' },
        { name: '正一' },

        { name: '北京市' },
        { name: '天津市' },
        { name: '河北省' },
        { name: '山西省' },
        { name: '内蒙古自治区' },
        { name: '辽宁省' },
        { name: '吉林省' },
        { name: '黑龙江省' },
        { name: '上海市' },
        { name: '江苏省' },
        { name: '浙江省' },
        { name: '安徽省' },
        { name: '福建省' },
        { name: '江西省' },
        { name: '山东省' },
        { name: '河南省' },
        { name: '湖北省' },
        { name: '湖南省' },
        { name: '广东省' },
        { name: '广西壮族自治区' },
        { name: '海南省' },
        { name: '重庆市' },
        { name: '四川省' },
        { name: '贵州省' },
        { name: '云南省' },
        { name: '西藏自治区' },
        { name: '陕西省' },
        { name: '甘肃省' },
        { name: '青海省' },
        { name: '宁夏回族自治区' },
        { name: '新疆维吾尔自治区' },



      ],
      links: [
        // 北京市
        { source: '道教', target: '北京市', value: 13 },
        { source: '佛教', target: '北京市', value: 26 },
        { source: '北京市', target: '汉语系', value: 25 },
        { source: '北京市', target: '藏语系', value: 1 },
        { source: '北京市', target: '全真', value: 9 },
        { source: '北京市', target: '正一', value: 4 },

        // 天津市
        { source: '佛教', target: '天津市', value: 20 },
        { source: '天津市', target: '汉语系', value: 20 },

        // 河北省
        { source: '道教', target: '河北省', value: 208 },
        { source: '佛教', target: '河北省', value: 741 },
        { source: '河北省', target: '藏语系', value: 2 },
        { source: '河北省', target: '汉语系', value: 739 },
        { source: '河北省', target: '全真', value: 180 },
        { source: '河北省', target: '正一', value: 28 },
        
        // 山西省
        { source: '道教', target: '山西省', value: 42 },
        { source: '佛教', target: '山西省', value: 598 },
        { source: '山西省', target: '藏语系', value: 11 },
        { source: '山西省', target: '汉语系', value: 587 },
        { source: '山西省', target: '全真', value: 28 },
        { source: '山西省', target: '正一', value: 14 },
      
        // 内蒙古自治区
        { source: '道教', target: '内蒙古自治区', value: 7 },
        { source: '佛教', target: '内蒙古自治区', value: 301 },
        { source: '内蒙古自治区', target: '藏语系', value: 170 },
        { source: '内蒙古自治区', target: '汉语系', value: 131},
        { source: '内蒙古自治区', target: '全真', value: 6 },
        { source: '内蒙古自治区', target: '正一', value: 1 },
              
        // 辽宁省
        { source: '道教', target: '辽宁省', value: 113 },
        { source: '佛教', target: '辽宁省', value: 758 },
        { source: '辽宁省', target: '藏语系', value: 26 },
        { source: '辽宁省', target: '汉语系', value: 732},
        { source: '辽宁省', target: '全真', value: 111 },
        { source: '辽宁省', target: '正一', value: 2 },
                      
        // 吉林省
        { source: '道教', target: '吉林省', value: 24 },
        { source: '佛教', target: '吉林省', value: 204 },
        { source: '吉林省', target: '藏语系', value: 1 },
        { source: '吉林省', target: '汉语系', value: 203},
        { source: '吉林省', target: '全真', value: 23 },
        { source: '吉林省', target: '正一', value: 1 },                      
                      
        // 黑龙江省
        { source: '道教', target: '黑龙江省', value: 9 },
        { source: '佛教', target: '黑龙江省', value: 88 },
        { source: '黑龙江省', target: '藏语系', value: 1 },
        { source: '黑龙江省', target: '汉语系', value: 87},
        { source: '黑龙江省', target: '全真', value: 9 },                      
        
        // 上海市
        { source: '道教', target: '上海市', value: 32 },
        { source: '佛教', target: '上海市', value: 108 },
        { source: '上海市', target: '汉语系', value: 108},
        { source: '上海市', target: '全真', value: 1 },
        { source: '上海市', target: '正一', value: 31 },    
                      
        // 江苏省
        { source: '道教', target: '江苏省', value: 167 },
        { source: '佛教', target: '江苏省', value: 1149 },
        { source: '江苏省', target: '汉语系', value: 1149},
        { source: '江苏省', target: '全真', value: 2 },
        { source: '江苏省', target: '正一', value: 165 },  
                              
        // 浙江省
        { source: '道教', target: '浙江省', value: 1659 },
        { source: '佛教', target: '浙江省', value: 4055 },
        { source: '浙江省', target: '藏语系', value: 1 },
        { source: '浙江省', target: '汉语系', value: 4054},
        { source: '浙江省', target: '全真', value: 562 },
        { source: '浙江省', target: '正一', value: 1097 },                                  
        
        // 安徽省
        { source: '道教', target: '安徽省', value: 60 },
        { source: '佛教', target: '安徽省', value: 1335 },
        { source: '安徽省', target: '汉语系', value: 1335},
        { source: '安徽省', target: '全真', value: 32 },
        { source: '安徽省', target: '正一', value: 28 },   
                                      
        // 福建省
        { source: '道教', target: '福建省', value: 918 },
        { source: '佛教', target: '福建省', value: 3396 },
        { source: '福建省', target: '汉语系', value: 3396},
        { source: '福建省', target: '全真', value: 57 },
        { source: '福建省', target: '正一', value: 861 },  
                                      
        // 江西省
        { source: '道教', target: '江西省', value: 1010 },
        { source: '佛教', target: '江西省', value: 3259 },
        { source: '江西省', target: '藏语系', value: 1 },
        { source: '江西省', target: '汉语系', value: 3258},
        { source: '江西省', target: '全真', value: 135 },
        { source: '江西省', target: '正一', value: 875 },
                                      
        // 山东省370000
        { source: '道教', target: '山东省', value: 87 },
        { source: '佛教', target: '山东省', value: 214 },
        { source: '山东省', target: '汉语系', value: 214},
        { source: '山东省', target: '全真', value: 87 }, 
                                      
        // 河南省410000
        { source: '道教', target: '河南省', value: 474 },
        { source: '佛教', target: '河南省', value: 715 },
        { source: '河南省', target: '汉语系', value: 715},
        { source: '河南省', target: '全真', value: 333 },
        { source: '河南省', target: '正一', value: 141 },  
                                      
        // 湖北省420000
        { source: '道教', target: '湖北省', value: 652 },
        { source: '佛教', target: '湖北省', value: 2012 },
        { source: '湖北省', target: '汉语系', value: 2012},
        { source: '湖北省', target: '全真', value: 573 },
        { source: '湖北省', target: '正一', value: 79 }, 
                                      
        // 湖南省430000
        { source: '道教', target: '湖南省', value: 952 },
        { source: '佛教', target: '湖南省', value: 3230 },
        { source: '湖南省', target: '藏语系', value: 2 },
        { source: '湖南省', target: '汉语系', value: 3228},
        { source: '湖南省', target: '全真', value: 241 },
        { source: '湖南省', target: '正一', value: 711 },   
                                      
        // 广东省440000
        { source: '道教', target: '广东省', value: 218 },
        { source: '佛教', target: '广东省', value: 1538 },
        { source: '广东省', target: '汉语系', value: 1538},
        { source: '广东省', target: '全真', value: 129 },
        { source: '广东省', target: '正一', value: 89 },   
                                      
        // 广西壮族自治区450000
        { source: '道教', target: '广西壮族自治区', value: 8 },
        { source: '佛教', target: '广西壮族自治区', value: 221 },
        { source: '广西壮族自治区', target: '汉语系', value: 221},
        { source: '广西壮族自治区', target: '全真', value: 2 },
        { source: '广西壮族自治区', target: '正一', value: 6 },   
                                      
        // 海南省460000
        { source: '道教', target: '海南省', value: 1 },
        { source: '佛教', target: '海南省', value: 20 },
        { source: '海南省', target: '汉语系', value: 20},
        { source: '海南省', target: '正一', value: 1 },   
                                      
        // 重庆市500000
        { source: '道教', target: '重庆市', value: 32 },
        { source: '佛教', target: '重庆市', value: 277 },
        { source: '重庆市', target: '汉语系', value: 277},
        { source: '重庆市', target: '全真', value: 25 },
        { source: '重庆市', target: '正一', value: 7 },   
                                      
        // 四川省510000
        { source: '道教', target: '四川省', value: 225 },
        { source: '佛教', target: '四川省', value: 2195 },
        { source: '四川省', target: '藏语系', value: 783 },
        { source: '四川省', target: '汉语系', value: 1412},
        { source: '四川省', target: '全真', value: 190 },
        { source: '四川省', target: '正一', value: 35 },   
                                      
        // 贵州省520000
        { source: '道教', target: '贵州省', value: 28 },
        { source: '佛教', target: '贵州省', value: 475 },
        { source: '贵州省', target: '汉语系', value: 475},
        { source: '贵州省', target: '全真', value: 8 },
        { source: '贵州省', target: '正一', value: 20 },   
                                      
        // 云南省530000
        { source: '道教', target: '云南省', value: 160 },
        { source: '佛教', target: '云南省', value: 2606 },
        { source: '云南省', target: '巴利语系', value: 1704 },
        { source: '云南省', target: '藏语系', value: 36 },
        { source: '云南省', target: '汉语系', value: 866},
        { source: '云南省', target: '全真', value: 98 },
        { source: '云南省', target: '正一', value: 62 },   
                                      
        // 西藏自治区540000
        { source: '佛教', target: '西藏自治区', value: 1786 },
        { source: '西藏自治区', target: '藏语系', value: 1780 },
        { source: '西藏自治区', target: '汉语系', value: 6},  
                                              
        // 陕西省610000
        { source: '道教', target: '陕西省', value: 461 },
        { source: '佛教', target: '陕西省', value: 707 },
        { source: '陕西省', target: '藏语系', value: 1 },
        { source: '陕西省', target: '汉语系', value: 706},
        { source: '陕西省', target: '全真', value: 461 }, 
                                              
        // 甘肃省620000
        { source: '道教', target: '甘肃省', value: 615 },
        { source: '佛教', target: '甘肃省', value: 756 },
        { source: '甘肃省', target: '藏语系', value: 226 },
        { source: '甘肃省', target: '汉语系', value: 530},
        { source: '甘肃省', target: '全真', value: 609 },
        { source: '甘肃省', target: '正一', value: 6 },  
                                              
        // 青海省630000
        { source: '道教', target: '青海省', value: 15 },
        { source: '佛教', target: '青海省', value: 801 },
        { source: '青海省', target: '藏语系', value: 775 },
        { source: '青海省', target: '汉语系', value: 26},
        { source: '青海省', target: '全真', value: 15 },
                                                      
        // 宁夏回族自治区640000
        { source: '道教', target: '宁夏回族自治区', value: 151 },
        { source: '佛教', target: '宁夏回族自治区', value: 411 },
        { source: '宁夏回族自治区', target: '汉语系', value: 411},
        { source: '宁夏回族自治区', target: '全真', value: 81 },
        { source: '宁夏回族自治区', target: '正一', value: 70 },  
                                                      
        // 新疆维吾尔自治区650000
        { source: '道教', target: '新疆维吾尔自治区', value: 1 },
        { source: '佛教', target: '新疆维吾尔自治区', value: 57 },
        { source: '新疆维吾尔自治区', target: '藏语系', value: 40 },
        { source: '新疆维吾尔自治区', target: '汉语系', value: 17},
        { source: '新疆维吾尔自治区', target: '正一', value: 1 },  
    

     
      ],
  };
  
  export { data1, data2 };
  