/**
 * [BrowserEnv 浏览器环境]
 * @type {Object}
 */
const inBrowser = typeof window !== "undefined";
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const env = {
  inBrowser: inBrowser,
  UA: UA,
  isMobile:
    UA && /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),
  isIE: UA && /msie|trident/.test(UA),
  isIE9: UA && UA.indexOf("msie 9.0") > 0,
  isEdge: UA && UA.indexOf("Edge/") > 0,
  isAndroid: UA && UA.indexOf("android") > 0,
  isIOS: UA && /iphone|ipad|ipod|ios/.test(UA),
  isChrome: UA && /chrome\/\d+/.test(UA),
  isFF: UA && UA.match(/firefox\/(\d+)/),
  isWeixin: UA && UA.match(/MicroMessenger\/[0-9]/i),
  isQQ: UA && UA.match(/QQ\/[0-9]/i),
};
