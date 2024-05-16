const urlQuery = {
  /**
   * [objectToQueryString 对象转换为查询字符串]
   * @param     {[type]}                 obj  [description]
   * @return    {[type]}                 string[description]
   */
  objectToQueryString: function (obj) {
    var pairs = Object.entries(obj).map(
      ([key, value]) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(value)
    );
    return pairs.length > 0 ? "?" + pairs.join("&") : "";
  },
  /**
   * [getQueryParam 获取指url参数值]
   * @param     {[type]}                 name  [description]
   * @param     {[type]}                 url   [description]
   * @return    {[type]}                 string[description]
   */
  getQueryParam: function (name, url) {
    var reg = new RegExp("(\\?|&)" + name + "=([^&#]*)");
    var result = reg.exec(url ? url : location.href);
    return result != null ? decodeURIComponent(result[2]) : null;
  },
  /**
   * [urlQuery 获取链接所有query参数]
   * @param     {[type]}                 url  [description]
   * @return    {[type]}                 obj  [description]
   */
  urlQuery: function (urlString) {
    const url = new URL(urlString || location.href);
    if (!url.search && url.hash.indexOf("?") == -1) {
      return {};
    }
    var deParam = url.search
      ? /\?[^#]+/.exec(url.search)[0]
      : url.hash
      ? /\?[^#]+/.exec(url.hash)[0]
      : null;

    var params = new URLSearchParams(deParam.replace("?", ""));
    var queryParams = {};
    params.forEach((value, key) => {
      queryParams[key] = decodeURIComponent(value || "");
    });
    return queryParams;
  },
};
