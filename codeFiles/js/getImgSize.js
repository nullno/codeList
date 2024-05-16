/**
 * 获取图片宽高
 */
function getImgSize(url, callback) {
  var img = new Image();
  img.src = url;
  // 加载完成执行
  img.onload = function () {
    callback({ width: img.width, height: img.height });
  };
}
