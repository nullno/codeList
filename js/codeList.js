import Share from "./share.js";
async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    Share.Toast("Copied successfully!");
  } catch (err) {
    Share.Toast("Failed to copy, please copy manually!");
  }
}

const listStyle = Spark.Css(
  "width:33.3%;height:400px;float:left;padding:10px;overflow:hidden;cursor: unset;"
);

const RenderItem = (item, index) => {
  const codeHeader = Spark.Box({
    style:
      "width:;100%;height: 30px;padding:0 8px; align-items:center;background-color: #343541;display: flex;flex-direction: row;flex-shrink: 0;justify-content: space-between;border-radius:6px 6px 0 0;",
    child: [
      Spark.Text(item.language, {
        style: "font-size: 14px;color:hsla(0, 0%, 100%, .7);padding-left:10px;",
      }),
      Spark.Box({
        tag: "button",
        style:
          "width: 16px;height: 16px;background-image:url(./assets/icon-copy.svg);border:none;cursor:pointer;",
        on: {
          click() {
            copyTextToClipboard(item.code);
            this.style = "background-image:url(./assets/icon-right.svg);";
            setTimeout(() => {
              this.style = "background-image:url(./assets/icon-copy.svg);";
            }, 1500);
          },
        },
      }),
    ],
  });
  const codePre = Spark.Box({
    style:
      "width:100%;height:calc(100% - 30px);color:#fff;overflow:hidden;border-radius:0 0 6px 6px;padding:2px;",
    created() {
      this.$el.innerHTML =
        '<pre><code class="language-' +
        item.language +
        '">' +
        item.code +
        "</code></pre>";
      Prism.highlightAll();
    },
  });

  const codeView = Spark.Box({
    style:
      "width:100%;height:300px;margin:10px 0;background-color:#12131b;border-radius:6px;",
    child: [codeHeader, codePre],
  });

  const codeItem = Spark.Box({
    style:
      "width:100%;height:100%;padding:15px;background-color:#fff;border-radius:10px;box-shadow:0 0 3px rgba(0, 0, 0, .2);",
    child: [
      Spark.Text(item.title, {
        tag: "h2",
        style:
          "line-height:20px;font-weight:normal; color:#343541;font-size:16px;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;",
        on: {
          hover() {
            this.$el.title = item.title;
          },
        },
      }),
      codeView,
    ],
  });

  return Spark.Box({
    tag: "li",
    className: listStyle,
    showAni: { ani: "fadeIn 500ms  both" },
    child: [codeItem],
    on: {
      click() {
        // alert(item.b);
      },
    },
  });
};

const CodeList = Spark.List({
  data: [
    {
      title: "js获取链接参数",
      language: "javascript",
      code: `
      /**
 * 类型检测
 * @param {*} data 数据
 * @param {string} type 检测类型
 * @returns {String}
 */
function _typeof(data, type) {
  return Object.prototype.toString.call(data) === "[object " + type + "]";
};
      `,
    },
    {
      title: "防抖函数",
      language: "css",
      code: `
    /* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #12131b;
}
    `,
    },
    { title: "数据库模糊匹配查找", language: "php", code: `` },
  ],
  style:
    "width:100%;max-width:1330px;margin:0 auto;overflow:hidden;padding:10px;",
  item(item, index) {
    return RenderItem(item, index);
  },
  resizeList() {
    Spark.Util.screen.resize((screen) => {
      if (screen.width > 900) {
        listStyle.style = "width:33.3%;";
      }
      if (screen.width < 900) {
        listStyle.style = "width:50%;";
      }
      if (screen.width < 600) {
        listStyle.style = "width:100%;";
      }
    });
  },
  created() {
    this.resizeList();
  },
});

export default CodeList;
