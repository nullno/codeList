/**
 * 自动聚焦|粘贴后移动光标至末尾
 * @param {InputElement} el 数据
 */
function autofocus(el) {
  if (window.getSelection) {
    el.focus();
    var range = window.getSelection();
    range.selectAllChildren(el);
    range.collapseToEnd();
  } else if (document.selection) {
    // ie10 9 8 7 6 5
    var range = document.selection.createRange();
    range.moveToElementText(el);
    range.collapse(false);
    range.select();
  }
}
2332323