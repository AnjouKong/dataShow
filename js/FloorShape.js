// 生成 背景
function createBackground(color, bW, bH) {
  var back = new zrender.Rect({
    shape: {
      cx: 0,
      cy: 0,
      x: 0,
      y: 0,
      width: bW,
      height: bH,
    },
    style: {
      fill: color,
      stroke: color,
    }
  });
  return back;
}

// 生成 斜四边形   xy 表示  左下角坐标   xMove  yMove 表示左上角位移的距离
var SlantRect = zrender.Path.extend({
  type: 'SlantRect',
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    xMove: 0,
    yMove: 0,
    width: 0,
    height: 0
  },
  buildPath: function (path, shape) {
    var xMove = shape.xMove;
    var yMove = shape.yMove;
    path.moveTo(shape.x, shape.y);
    path.lineTo(shape.x + shape.xMove, shape.y - shape.height);
    path.lineTo(shape.x + shape.xMove + shape.width, shape.y - shape.height);
    path.lineTo(shape.x + shape.width, shape.y );

    path.closePath();
  }
});

// 楼层房间数据 二位数组array   楼基对应y坐标  每个房间大小  roomW， roomH ， 间隔
function renderRooms(floorRooms, roomW, roomH, roomBetwen, getStyleByData) {
  var tmp = {
    roomsGroup: new zrender.Group(),
    roomsData:floorRooms,
    roomsDataEl: [],
  };
  tmp.roomsData.forEach(function (arr, i) {
    if( arr instanceof Array){
      tmp.roomsDataEl[i] = [];
      arr.forEach(function (value, j) {
        if(value >= 0){
          var rect = new zrender.Rect({
            shape: {
              x: j * (roomW + roomBetwen),
              y: (tmp.roomsData.length - 1 - i) * (roomH + roomBetwen),
              width: roomW,
              height: roomH
            },
            style: getStyleByData(value),
          });
          var jt = j+1;
          // var nub = createRoomNumber((i+1).toString() + (jt < 10 ? "0"+jt:jt), j * (roomW + roomBetwen) + roomW*0.5,(tmp.roomsData.length - 1 - i) * (roomH + roomBetwen)+ roomH*0.5);
          tmp.roomsDataEl[i][j] = rect;
          tmp.roomsGroup.add(rect);
          // tmp.roomsGroup.add(nub);
        }
      })
    }
  });
  return tmp;
}

// 生成 大楼前面的轮廓
function createFloorFront(position, rect, roomBetwen, color) {
  console.log(rect);
  var floorFront = new zrender.Rect({
    shape: {
      cx: 0,
      cy: 0,
      x: position[0] + rect.x - roomBetwen,
      y: position[1] + rect.y - roomBetwen,
      width: rect.width + roomBetwen*2,
      height: rect.height+ roomBetwen*2,
    },
    style: {
      fill: 'none',
      stroke: color
    }
  });
  return floorFront;
};

// 生成 大楼上面
function createFloorAboveImage(position, rect, roomBetwen, imgObg) {
  var above = new zrender.Image({
    style: {
      image: imgObg.url,
      x: position[0] + rect.x - roomBetwen,
      y: position[1] + rect.y - roomBetwen - imgObg.height,
      width: rect.width + roomBetwen*2,
      height: imgObg.height,
    }
  });
  return above;
};
// 生成 大楼上面
function createFloorAbove(position, rect, roomBetwen, xMove, height,color) {
  var above = new SlantRect({
    shape: {
      x: position[0] + rect.x - roomBetwen,
      y: position[1] + rect.y - roomBetwen,
      xMove: xMove,
      width: rect.width + roomBetwen*2,
      height: height,
    },
    style: {
      fill: 'none',
      stroke: color
    },
  });
  return above;
};
function createFloorRight(position, rect, roomBetwen, width, yMove,color) {
  var front = {
    x: position[0] + rect.x - roomBetwen,
    y: position[1] + rect.y - roomBetwen,
    width: rect.width + roomBetwen*2,
    height: rect.height+ roomBetwen*2,
  };
  var right = new zrender.Polygon({
    shape:{
      points:[
        [(front.x + front.width), front.y],
        [(front.x + front.width + width), front.y + yMove],
        [(front.x + front.width + width), front.y + yMove + yMove*0.3 + front.height],
        [(front.x + front.width), front.y + front.height],
      ],
    },
    style: {
      fill: 'none',
      stroke: color
    },
  });
  return right;
}

// 生成 房间号
function createRoomNumber(text, x, y) {
  var t1 = new zrender.Text({
    style: {
      text: text,
      textAlign: 'middle',
      textVerticalAlign: 'middle',
      fontSize: 12,
      fontFamily: 'Lato',
      fontWeight: 'bolder',
      textFill: '#000000',
      blend: 'lighten'
    },
    position: [x, y]
  });
  return t1;
}

// 生成 标题
function createTitle(text, x, y) {
  var t1 = new zrender.Text({
    style: {
      text: text,
      textAlign: 'left',
      textVerticalAlign: 'top',
      fontSize: 28,
      fontFamily: 'Lato',
      fontWeight: 'bolder',
      textFill: '#ccffff',
      blend: 'lighten'
    },
    position: [x, y]
  });
  return t1;
}

// 生成 标题
function createTipText(text, x, y) {
  var t1 = new zrender.Text({
    style: {
      text: text,
      textAlign: 'left',
      textVerticalAlign: 'middle',
      fontSize: 16,
      fontFamily: 'Lato',
      fontWeight: 'bolder',
      textFill: '#b3b9c4',
      blend: 'lighten'
    },
    position: [x, y]
  });
  return t1;
}


