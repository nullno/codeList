const MD = window.markdownit({
  html: true,
  linkify: true,
  typographer: true,
});

const Title = Spark.Text("✏️ 提交代码", {
  tag: "h2",
  style: "width:100%;",
});
const BackButton = Spark.Box({
  tag: "button",
  style:
    "width:30px;height:30px;position:absolute;top:26px;right:15px;background:url(./assets/icon-back.svg)  no-repeat 100% / cover;;border:none;cursor:pointer;",
  on: {
    click() {
      Spark.router.back();
    },
  },
});

const codeHeader = Spark.Box({
  style:
    "width:100%;height: 30px;padding:0 8px; align-items:center;background-color: #343541;display: flex;flex-direction: row;flex-shrink: 0;justify-content: space-between;border-radius:6px 6px 0 0;",
  child: [
    Spark.Text("html", {
      style: "font-size: 14px;color:hsla(0, 0%, 100%, .7);padding-left:10px;",
    }),
    Spark.Text("提交", {
      tag: "button",
      style:
        " font-size:14px;background:#2590F1; color:#fff;padding:0 10px;border:none;cursor:pointer;border-radius:4px;",
    }),
  ],
});

const codeInput = Spark.Box({
  tag: "textarea",
  style: "width:100%;height:100%;position:absolute;left:0;top:0;",

  on: {
    input() {
      console.log(12121);
    },
  },
});
const codePre = Spark.Box({
  tag: "pre",
  style: "width:100%;height:100%;cursor:unset;overflow:auto;",
  attributes: "contenteditable=true",
  className: "language-css ",
  //   child: [
  //     Spark.Box({
  //       tag: "code",
  //       className: "language-html ",
  //       attributes: "class='language-html' contenteditable=true",

  //     }),
  //   ],
  created() {},
  on: {
    input(e) {
      console.log();
      const selection = window.getSelection();
      const range = document.createRange();
      // 保存光标位置
      range.setStart(selection.anchorNode, selection.anchorOffset);
      range.setEnd(selection.focusNode, selection.focusOffset);
      this.$el.innerHTML = `${Prism.highlight(
        this.$el.innerText,
        Prism.languages.html,
        "html"
      )}`;
      // 恢复光标位置
      this.autofocus();
    },
  },
  autofocus() {
    var obj = this.$el;
    if (window.getSelection) {
      obj.focus();
      var range = window.getSelection();
      range.selectAllChildren(obj);
      range.collapseToEnd();
      console.log(555);
    } else if (document.selection) {
      //ie10 9 8 7 6 5
      var range = document.selection.createRange();
      range.moveToElementText(obj);
      range.collapse(false);
      range.select();
    }
  },
});
const codeEdit = Spark.Box({
  style:
    "position:relative; width:100%;height:calc(100% - 30px);color:#fff;overflow:hidden;border-radius:0 0 6px 6px;padding:5px;",
  child: [codePre],
});
const codeView = Spark.Box({
  style: `width:100%;height:600px;background-color:#12131b;border-radius:6px;margin-top:50px;`,
  child: [codeHeader, codeEdit],
});
const submitCode = Spark.Box({
  style:
    "width:100%;max-width:1000px;margin:0 auto;overflow:hidden;padding:25px 15px 50px 15px;position:relative;",
  child: [Title, codeView, BackButton],
});

export default submitCode;
