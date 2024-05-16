/**
 * [debounce 防抖函数]
 */
const debounce = function (fn, delay) {
  var timer = null;
  return function (e) {
    e.stopPropagation();
    var _this = this,
      args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
};
/**
 * [throttle 节流函数]
 */
const throttle = function (fn, delay) {
  var lastTime = 0;
  return function () {
    var nowTime = +new Date();
    if (nowTime - lastTime > delay) {
      fn.apply(this, arguments);
      lastTime = nowTime;
    }
  };
};
