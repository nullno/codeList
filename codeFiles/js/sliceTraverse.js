/**
 * 大数据切片遍历，解决数据一次性渲染过多卡死
 * @param {Array Number} data 数据
 * @param {function} callback 回调
 */
function traverse(data, callback) {
  var _typeof = function (data, type) {
    return Object.prototype.toString.call(data) === "[object " + type + "]";
  };
  if (_typeof(data, "Array")) {
    var allLength = data.length;
    var maxEveryLength = 40;
    var currentIndex = 0;
    if (allLength <= maxEveryLength) {
      for (var i = currentIndex; i < allLength; i++) {
        callback(data[i], i, i == allLength - 1);
      }
    } else {
      // 多数据切片
      var ArrayHandle = function () {
        for (
          var i = currentIndex;
          i < currentIndex + maxEveryLength && i < allLength;
          i++
        ) {
          callback(data[i], i, i == allLength - 1);
        }
        currentIndex = i;
        if (currentIndex < allLength) {
          ArrayHandle();
        }
      };
      ArrayHandle();
    }
  }
  if (_typeof(data, "Object")) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        callback(key);
      }
    }
  }
  if (_typeof(data, "Number")) {
    var allLength = data;
    var maxEveryLength = 40;
    var currentIndex = 0;
    if (allLength <= maxEveryLength) {
      for (var i = currentIndex; i < allLength; i++) {
        callback(i, i == allLength - 1);
      }
    } else {
      // 数字切片
      var NumberHandle = function () {
        for (
          var i = currentIndex;
          i < currentIndex + maxEveryLength && i < allLength;
          i++
        ) {
          callback(i, i == allLength - 1);
        }
        currentIndex = i;
        if (currentIndex < allLength) {
          NumberHandle();
        }
      };
      NumberHandle();
    }
  }
}
