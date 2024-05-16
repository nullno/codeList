/**
 * [loadScript 动态加载js脚本]
 * @param     {[type]}                 jsurl    [description]
 * @param     {Function}               callback [description]
 * @return    {[type]}                          [description]
 */
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
