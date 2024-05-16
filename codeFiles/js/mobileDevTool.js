/**
 * [devTool 开发调试工具]
 */
const devTool = function (url) {
  this.loadScript(
    url || "https://cdn.bootcss.com/eruda/1.5.8/eruda.min.js",
    function () {
      console.info("mobile dev tool init ok");
      eruda.init();
    }
  );
};
