/**
 * [deepCopyObj 对象深拷贝]
 * @param     {[type]}                 obj [description]
 * @return    {[type]}                     [description]
 */
const deepCopyObj = function (obj) {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        result[key] = deepCopyObj(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
};
