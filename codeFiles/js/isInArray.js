/**
 *数组中是否存在元素,并返回索引 精确查找 模糊查找
 * @param {array} arr 数据
 * @param {a:key,b:value} compare 数据
 * @param {boolean} isExact 精确
 */
const isInArray = function (arr, compare, isExact) {
  for (var i = 0; i < arr.length; i++) {
    var value = compare["a"] ? arr[i][compare["a"]] : arr[i];
    if (isExact) {
      if (value == compare["b"]) {
        return i;
      }
    } else {
      if (value.includes(compare["b"])) {
        return i;
      }
    }
    if (i == arr.length - 1) {
      return -1;
    }
  }
};
