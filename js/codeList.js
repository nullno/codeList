const listStyle = Spark.Css(
  "width:33.3%;height:400px;float:left;padding:10px;overflow:hidden;cursor: unset;"
);

const codeList = Spark.List({
  data: [
    {
      title: "js获取链接参数",
    },
    { title: "防抖函数" },
    { title: "数据库模糊匹配查找" },
  ],
  style:
    "width:100%;max-width:1330px;margin:0 auto;overflow:hidden;padding:10px;",
  item(item, index) {
    const codeView = Spark.Box({
      style:
        "width:100%;height:300px;margin:10px 0;padding:3px;background-color:#343541;border-radius:6px;",
      created() {
        this.$el.innerHTML =
          '<pre><code class="language-css">' +
          `/* PrismJS 1.29.0
          https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+c+cpp+git+go+java+kotlin+markup-templating+nginx+php+plsql+python+r+ruby+sql+swift+typescript */
          /**
           * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
           * Based on https://github.com/chriskempson/tomorrow-theme
           * @author Rose Pritchard
           */
          ` +
          "</code></pre>";
        Prism.highlightAll();
      },
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
              // listStyle.style = "background-color:#fff;color:#666;";
              this.$el.title = item.title;
            },
          },
        }),
        codeView,
      ],
    });

    var template = Spark.Box({
      tag: "li",
      className: listStyle,
      style: "background-color:#fff;",
      showAni: { ani: "fadeIn 500ms  both" },
      child: [codeItem],
      init() {},
      on: {
        click() {
          // alert(item.b);
        },
      },
    });

    return template;
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
export default codeList;
