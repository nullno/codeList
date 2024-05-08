const MD = window.markdownit({
  html: true,
  linkify: true,
  typographer: true,
});

const MarkdownContent = Spark.Box({
  style: "width:100%;",
  async init() {
    const Res = await Spark.axios.get("README.md");
    this.$el.innerHTML = `<div class="markdown-content">
    ${MD.render(Res.data)}</div>`;
    Prism.highlightAll();
  },
});
const BackButton = Spark.Box({
  tag: "button",
  style:
    "width:30px;height:30px;position:absolute;top:40px;right:10px;background:url(./assets/icon-back.svg)  no-repeat 100% / cover;;border:none;cursor:pointer;",
  on: {
    click() {
      Spark.router.go(-1);
    },
  },
});
const Help = Spark.Box({
  style:
    "width:100%;max-width:1000px;margin:0 auto;overflow:hidden;padding:10px;position:relative;",
  child: [MarkdownContent, BackButton],
});

export default Help;
