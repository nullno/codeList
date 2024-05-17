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
    "width:30px;height:30px;position:absolute;top:26px;right:15px;background:url(./assets/icon-back.svg)  no-repeat 100% / cover;;border:none;cursor:pointer;",
  on: {
    click() {
      Spark.router.back();
    },
  },
});
const Readme = Spark.Box({
  style:
    "width:100%;min-height:100vh;max-width:1000px;margin:0 auto;overflow:hidden;padding:0 15px 50px 15px;position:relative;",
  child: [MarkdownContent, BackButton],
});

export default Readme;
