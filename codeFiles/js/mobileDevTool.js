/**
 * [devTool 开发调试工具]
 */
function devTool(url) {
  loadScript(
    url || "https://cdn.bootcss.com/eruda/1.5.8/eruda.min.js",
    function () {
      console.info("mobile dev tool init ok");
      eruda.init();
    }
  );
  function loadScript(jsurl, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
      //IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      //Others
      script.onload = function () {
        callback(script);
      };
    }
    script.src = jsurl;
    document.body.appendChild(script);
  }
}
