function chart1Render(){
var dom = document.getElementById('chart1');
var myChart = echarts.init(dom, null, {
renderer: 'canvas',
useDirtyRect: false
});
var app = {};

var option;

option = {
title: {
text: '超市门店直销占比',
// subtext: 'Fake Data',
left: 'center',
textStyle:{
    color:'#fff',
    fontSize:16
}
},
tooltip: {
trigger: 'item'
},
//   legend: {
//     orient: 'vertical',
//     left: 'left'
//   },
series: [
{
  name: '项目数据：',
  type: 'pie',
  radius: '70%',
  top:20, // 调节下方位置
  data: [
    { value: 1048, name: '广州分店' },
    { value: 735, name: '成都分店' },
    { value: 580, name: '深圳分店' },
    { value: 484, name: '上海分点' },
    { value: 300, name: '北京分店' }
  ],
  emphasis: {
    itemStyle: {
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      fontSize:40,
    }
  },
  label:{
    fontSize:10
  }
}
]
};

if (option && typeof option === 'object') {
myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
}
chart1Render();

function chart3Render(){
    var dom = document.getElementById('chart3');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
    title: {
        text: '超市品类收入占比',
        // subtext: 'Fake Data',
        left: 'center',
        textStyle:{
            color:'#fff',
            fontSize:16
        }
        },
  tooltip: {
    trigger: 'item'
  },
//   legend: {
//     top: '5%',
//     left: 'center'
//   },

  series: [
    {
      name: '项目数据：',
      type: 'pie',
      radius: ['40%', '65%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        // position: 'center'
      },
      top:20,
      data: [
        { value: 12345, name: '文具' },
        { value: 45334, name: '酒类' },
        { value: 34465, name: '饮料' },
        { value: 67765, name: '零食' },
        { value: 67867, name: '日用品' }
      ],
      label:{
        fontSize:10
      }
    },
    
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
}
chart3Render();


function chart2render() {
        // 第一行第二列
        // box1
        function row1box2box1render() {
          var dom = document.getElementById('row1_2_1');
          var myChart = echarts.init(dom, null, {
          renderer: 'canvas',
          useDirtyRect: false
          });
          var app = {};

          var option;

          option = {
              title: {
                  text: "同比",
                  textStyle: {
                      color: "white",
                      fontWeight: "bold"
                  },
                  left: "center"
              },
              series: [
                  {
                      radius: "70%",
                      pointer: false,
                      axisLabel: false,
                      axisTick:false,
                      type: 'gauge',
                      progress: {
                          show: true,
                          width: 18
                      },
                      axisLine: {
                          lineStyle: {
                              width: 18
                          }
                      },
                      splitLine: false,
                      anchor: false,
                      title: {
                          show: false
                      },
                      detail: {
                          valueAnimation: true,
                          fontSize: 30,
                          offsetCenter: [0, '0%'],
                          formatter: '{value}%',
                          color: "#0ec4ff"
                      },
                      data: [
                          {
                          value: 70
                          }
                      ]
                  }
              ]
              
          };

          if (option && typeof option === 'object') {
          myChart.setOption(option);
          }

          window.addEventListener('resize', myChart.resize);
      }
      row1box2box1render();

      // box2
      function row1box2box2render() {
          var dom = document.getElementById('row1_2_2');
          var myChart = echarts.init(dom, null, {
          renderer: 'canvas',
          useDirtyRect: false
          });
          var app = {};

          var option;

          option = {
              title: {
                  text: "环比",
                  textStyle: {
                      color: "white",
                      fontWeight: "bold"
                  },
                  left: "center"
              },
              series: [
                  {
                      radius: "70%",
                      pointer: false,
                      axisLabel: false,
                      axisTick:false,
                      type: 'gauge',
                      progress: {
                          show: true,
                          width: 18
                      },
                      axisLine: {
                          lineStyle: {
                              width: 18
                          }
                      },
                      splitLine: false,
                      anchor: false,
                      title: {
                          show: false
                      },
                      detail: {
                          valueAnimation: true,
                          fontSize: 30,
                          offsetCenter: [0, '0%'],
                          formatter: '{value}%',
                          color: "#0ec4ff"
                      },
                      data: [
                          {
                          value: 18
                          }
                      ]
                  }
              ]
              
          };

          if (option && typeof option === 'object') {
          myChart.setOption(option);
          }

          window.addEventListener('resize', myChart.resize);
      }
      row1box2box2render();

      // box3
      function row1box2box3render() {
          var dom = document.getElementById('row1_2_3');
          var myChart = echarts.init(dom, null, {
          renderer: 'canvas',
          useDirtyRect: false
          });
          var app = {};

          var option;

          option = {
              title: {
                  text: "毛利率",
                  textStyle: {
                      color: "white",
                      fontWeight: "bold"
                  },
                  left: "center"
              },
              series: [
                  {
                      radius: "70%",
                      pointer: false,
                      axisLabel: false,
                      axisTick:false,
                      splitLine: false,
                      anchor: false,
                      type: 'gauge',
                      progress: {
                          show: true,
                          width: 18
                      },
                      axisLine: {
                          lineStyle: {
                              width: 18
                          }
                      },
                      title: {
                          show: false
                      },
                      detail: {
                          valueAnimation: true,
                          fontSize: 30,
                          offsetCenter: [0, '0%'],
                          formatter: '{value}%',
                          color: "#0ec4ff"
                      },

                      // detail: {
                      //     valueAnimation: true,
                      //     width: '60%',
                      //     lineHeight: 40,
                      //     borderRadius: 8,
                      //     offsetCenter: [0, '-15%'],
                      //     fontSize: 60,
                      //     fontWeight: 'bolder',
                      //     formatter: '{value} °C',
                      //     color: 'auto'
                      // },

                      data: [
                          {
                          value: 80
                          }
                      ]
                  }
              ]
              
          };

          if (option && typeof option === 'object') {
          myChart.setOption(option);
          }

          window.addEventListener('resize', myChart.resize);
      }
      row1box2box3render();
}
chart2render();

function chart4Render() {
  var dom = document.getElementById('chart4');
  var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
  });
  var app = {};

  var option;

  option = {
      title: {
          text: '门店销售单价收入对比',
          left: 'center',
          textStyle: {
              color: "white",
              fontWeight: "bold"
          }
      },
      // 手动添加 ------
      textStyle:{
        color:"#fff"
      },
      grid:[
        {
          right:"5%",
          height:"40%",
          top:"25%"
        }
      ],
      // 手动添加 ------
      legend: {
          data: ['收入', '支出'],
          bottom: '15px',
          textStyle:{
            color:"#fff"
          },
      },
      xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      yAxis: {
          type: 'value',
      },
      series: [
          {
              name: "收入",
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
          },
          {
              name: "支出",
              data: [23, 64, 123, 54, 76, 13, 67],
              type: 'bar'
          }
      ]
  };

  if (option && typeof option === 'object') {
      myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);
}
chart4Render();

function chart6Render() {
  var dom = document.getElementById('chart6');
  var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
  });
  var app = {};

  var option;

  option = {
      title: {
          text: '区域数据单品对比',
          left: 'center',
          textStyle: {
              color: "white",
              fontWeight: "bold"
          }
      },
      // 手动添加 开始------
      textStyle:{
        color:"#fff"
      },
      grid:[
        {
          right:"5%",
          height:"40%",
          top:"25%"
        }
      ],
      // 手动添加 结束------
      legend: {
          data: ['收入', '支出'],
          bottom: '15px',
          textStyle:{
            color:"#fff"
          },
      },
      xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      yAxis: {
          type: 'value',
      },
      series: [
          {
              name: "收入",
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
          },
          {
              name: "支出",
              data: [23, 64, 123, 54, 76, 13, 67],
              type: 'bar'
          }
      ]
  };

  if (option && typeof option === 'object') {
      myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);
}
chart6Render();


function chart7Render() {
  var dom = document.getElementById('chart7');
  var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
  });
  var app = {};

  var option;

  option = {
      title: {
          text: "超市生活用品情况",
          left: "center",
          textStyle: {
              color: "white",
              fontWeight: "bold"
          }
      },
      // 手动添加 开始------
      textStyle:{
        color:"#fff"
      },
      grid:[
        {
          
          height:"45%",
          top:"35%"
        }
      ],
      // 手动添加 结束------
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              crossStyle: {
                  color: '#999'
              }
          }
      },
      // toolbox: {
      //     feature: {
      //         dataView: { show: true, readOnly: false },
      //         magicType: { show: true, type: ['line', 'bar'] },
      //         restore: { show: true },
      //         saveAsImage: { show: true }
      //     }
      // },
      legend: {
          data: ['数量', '收入', '成本', '毛利'],
          // 手动修改 开始------
          right: "5%",
          textStyle:{
            color:"#fff"
          },
          // 手动修改 开始------
      },
      xAxis: [
          {
          type: 'category',
          data: ['其他玩具', '压缩袋', '收纳盒', '晾晒/置物', '母婴用品', '灯具', '生活竹炭', "茶"],
          axisPointer: {
              type: 'shadow'
          }
          }
      ],
      yAxis: [
          {
              type: 'value',
              name: '数量',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                  formatter: '{value} 件'
              }
          },
          {
              type: 'value',
              name: '收入',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                  formatter: '{value} 元'
              }
          },
          {
              type: 'value',
              name: '成本',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                  formatter: '{value} 元'
              }
          },
          {
              type: 'value',
              name: '毛利',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                  formatter: '{value} 元'
              }
          }
      ],
      series: [
          {
              name: '数量',
              type: 'bar',
              tooltip: {
                  valueFormatter: function (value) {
                      return value + ' 件';
                  }
              },
              data: [
                  50, 30, 100, 90, 200, 120, 150, 60
              ]
          },
          {
              name: '收入',
              type: 'bar',
              tooltip: {
                  valueFormatter: function (value) {
                  return value + ' 元';
                  }
              },
              data: [
                  102, 138, 155, 277, 191, 150, 97, 117
              ]
          },
          {
              name: '成本',
              type: 'bar',
              yAxisIndex: 1,
              tooltip: {
                  valueFormatter: function (value) {
                  return value + ' 元';
                  }
              },
              data: [
                  196, 188, 128, 130, 160, 250, 241, 257
              ]
          }
      ] 
  };

  if (option && typeof option === 'object') {
  myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);
}
chart7Render();

function chart8Render() {
  var dom = document.getElementById('chart8');
  var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
  });


  var option;

  const labelRight = {
      position: 'right'
  };
  option = {
      title: {
          text: '区域收入成本对比',
          left: "center",
          textStyle: {
              color: "white",
              fontWeight: "bold"
          }
      },
      
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      grid: {
          top: 60,
          bottom: 30,
          height:"55%"
      },
      xAxis: {
          type: 'value',
          position: 'top',
          splitLine: {
              lineStyle: {
                  type: 'dashed'
              }
          }
      },
      yAxis: {
          type: 'category',
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: [
              '深圳1',
              '深圳2',
              '广州1',
              '广州2',
              '山西1',
              '山西2',
              '上海1',
              '上海2'
          ]
      },
      series: [
          {
              name: 'Cost',
              type: 'bar',
              stack: 'Total',
              label: {
                  show: true,
                  formatter: '{b}'
              },
              data: [
                  3000,
                  -4000,
                  5000,
                  -4500,
                  -5400,
                  6000,
                  -7000,
                  4800
              ]
          }
      ]
      
  };

  if (option && typeof option === 'object') {
      myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);
}
chart8Render();