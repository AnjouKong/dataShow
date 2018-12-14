
// 散点闪烁
function bubbleBlur(speed) {
  var min = 0.5;
  // var symbolSize = 3; //圆的缩放比例
  var _speed = 0.01 * (_speed || 1);
  var _scale = 1;
  setInterval(function() {
    var a = 1;
    var parsent = 0;
    // 缩放比例为1-min,到最小时，会增大。
    _scale >= 1 || _scale <= min ? _speed = -_speed : 0;
    _scale += _speed;

    // 根据系列的格式动态添加变化。
    var length = chartPointMap.getOption().series.length;
    var series = []; // series的第一个对象为底层地图,不要更改

    function getSymbolSize(val) {
      if (a % 2 === 0) {
          parsent = _scale
      } else {
          parsent = (1 - _scale) + min
      }
      a++;
      // return val[2] / 40 * symbolSize * parsent;
      return 20 * parsent;
    };

    for (var i = 0; i < length; i++) {
      series.push({
        symbolSize: getSymbolSize
      })
    }
    chartPointMap.setOption({
      series: series
    });
  }, 30);
}

// $.get('js/provinceData/json/liaoning.json', function (lNjson) {
//   echarts.registerMap('辽宁', lNjson);
// });

var chartPointMap = echarts.init(document.getElementById('pointMap'));
optionPointMap = {
  // backgroundColor: '#404a59',
  title: {
    text: '辽宁省统计图',
    x: 'center',
    textStyle : {
        color: '#fff'
    }
  },
  tooltip: {
    show: true,
    formatter: function (params) {
      return params.seriesName +"<br/>"+ params.marker + params.name + "：" + params.data.value[2];
    },
  },
  dataRange: {
    min: 0,
    max: 500,
    text: ['高','低'],
    textStyle : {
      color: '#fff'
    },
    realtime: true,
    calculable: true,
    color: ['green','orangered','yellow']
  },
  geo: {
    map: '辽宁',
    label: {
      emphasis: {
        show: false,
        color: '#fff'
      }
    },
    roam: true,
    itemStyle: {
        normal: {
            areaColor: '#323c48',
            borderColor: '#6495ed',
        },
        emphasis: {
            areaColor: '#1b1b1b'
        }
    }
  },
  series: [{
    name: '入住人数',
    type: 'effectScatter',
    map: '辽宁',
    coordinateSystem: 'geo', // series坐标系类型
    // symbolSize: 9, //散点半径
    mapLocation: {
      y: 60
    },
    data:[
      {
        name: '营口市西市区', // 数据项名称，在这里指地区名称
        value: [122.23, 40.67, 350] // 经度，纬度，数值
      },
      {name: '鲅鱼圈', value: [122.15, 40.24, 270]},
      {name: '营口市盖州市', value: [122.5,40.39, 170]},
    ]},
  ]
};
chartPointMap.setOption(optionPointMap);
bubbleBlur();
