/**
 * 去除文本两端空格|全部空格
 * @param {InputElement} el 数据
 */
const trim = {
  all: function (str) {
    return str.replace(/\s*/g, "");
  },
  both: function (str) {
    if (!str) return "";
    return str.replace(/^\s*|\s*$/g, "");
  },
};
