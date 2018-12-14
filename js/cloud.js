
// fontColor,fontSize,fontFamily,fontWeight,fontStyle,fontStretch都可以设置
var number1 = 945;
var number2 = 345;
var number3 = 299;
var size1 = 28;
var size2 = 24;
var size3 = 20;
var color1 = '#a6c84c';
var color2 = '#ffa022';
var color3 = '#46bee9';
var entries = [
  { label: '动作', tooltip: '总数'+number1, fontColor: color1, fontSize: size1, url: '#', target: '_top' },
  { label: '冒险', tooltip: '总数'+number2, fontColor: color2, fontSize: size2, url: '#', target: '_top' },
  { label: '喜剧', tooltip: '总数'+number3, fontColor: color3, fontSize: size3, url: '#', target: '_top' },
  { label: '爱情', tooltip: '总数'+number1, fontColor: color1, fontSize: size1, url: '#', target: '_top' },
  { label: '战争', tooltip: '总数'+number2, fontColor: color2, fontSize: size2, url: '#', target: '_top' },
  { label: '恐怖', tooltip: '总数'+number3, fontColor: color3, fontSize: size3, url: '#', target: '_top' },
  { label: '灾难', tooltip: '总数'+number1, fontColor: color1, fontSize: size1, url: '#', target: '_top' },
  { label: '奇幻', tooltip: '总数'+number2, fontColor: color2, fontSize: size2, url: '#', target: '_top' },
  { label: '励志', tooltip: '总数'+number3, fontColor: color3, fontSize: size3, url: '#', target: '_top' },
  { label: '历史', tooltip: '总数'+number1, fontColor: color1, fontSize: size1, url: '#', target: '_top' },
  { label: '青春', tooltip: '总数'+number2, fontColor: color2, fontSize: size2, url: '#', target: '_top' },
  { label: '动画', tooltip: '总数'+number3, fontColor: color3, fontSize: size3, url: '#', target: '_top' },
  { label: '音乐', tooltip: '总数'+number1, fontColor: color1, fontSize: size1, url: '#', target: '_top' },
  { label: '家庭', tooltip: '总数'+number2, fontColor: color2, fontSize: size2, url: '#', target: '_top' },
  { label: '西部', tooltip: '总数'+number3, fontColor: color3, fontSize: size3, url: '#', target: '_top' },
  { label: '传记', tooltip: '总数'+number1, fontColor: color1, fontSize: size1, url: '#', target: '_top' },
  { label: '记录', tooltip: '总数'+number2, fontColor: color2, fontSize: size2, url: '#', target: '_top' },
  { label: '科幻', tooltip: '总数'+number3, fontColor: color3, fontSize: size3, url: '#', target: '_top' },
  { label: '武侠', tooltip: '总数'+number1, fontColor: color1, fontSize: size1, url: '#', target: '_top' },
  { label: '剧情', tooltip: '总数'+number2, fontColor: color2, fontSize: size2, url: '#', target: '_top' },
  { label: '犯罪', tooltip: '总数'+number3, fontColor: color3, fontSize: size3, url: '#', target: '_top' },
  { label: '伦理', tooltip: '总数'+number2, fontColor: color2, fontSize: size2, url: '#', target: '_top' },
  { label: '悬疑', tooltip: '总数'+number3, fontColor: color3, fontSize: size3, url: '#', target: '_top' },
  { label: '歌舞', tooltip: '总数'+number2, fontColor: color2, fontSize: size2, url: '#', target: '_top' },
  { label: '惊悚', tooltip: '总数'+number3, fontColor: color3, fontSize: size3, url: '#', target: '_top' },
];
var settings = {
  entries: entries, // 数据
  width: 700, // 宽度
  height: 700, // 高度
  radius: '55%',
  radiusMin: 75,
  bgDraw: true, // 是否显示背景
  bgColor: 'rgba(0,0,0,0)', // 背景颜色
  opacityOver: 1.00,
  opacityOut: 0.05,
  opacitySpeed: 6,
  fov: 800,
  speed: 0.5, // 旋转的速度
  fontFamily: 'Oswald, Arial, sans-serif',
  fontSize: '16', // 默认字体大小
  fontColor: '#fff', // 默认字体颜色
  fontWeight: 'normal', // bold
  fontStyle: 'normal', // italic
  fontStretch: 'normal', // wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
  fontToUpperCase: true,
  tooltipDiffY: 30
};

// $('#tag-cloud').svg3DTagCloud(settings);
var svg3DTagCloud = new SVG3DTagCloud( document.getElementById("cloud"), settings);
