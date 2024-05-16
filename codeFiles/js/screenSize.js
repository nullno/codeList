/**
 * 屏幕尺寸 滚动值 滚动高度
 */
var screen = {
  width: function () {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  },
  height: function () {
    return (
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    );
  },
  scrollTop: function () {
    return document.documentElement.scrollTop || document.body.scrollTop;
  },
  scrollHeight: function () {
    return document.documentElement.scrollHeight || document.body.scrollHeight;
  },
};
