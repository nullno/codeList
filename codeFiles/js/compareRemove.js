/**
 * 删除数组中指定数据
 * @param {array} data 数据
 * @param {a:key,b:value} compare 数据
 */
function compareRemove(data, compare) {
  if (_typeof(data, "Array") && compare) {
    for (var i = 0; i < data.length; i++) {
      (function (index) {
        if (
          (compare["a"] ? data[index][compare["a"]] : data[index]) ==
          compare["b"]
        ) {
          data.splice(index, 1);
          i--;
        }
      })(i);
    }
  }
}
