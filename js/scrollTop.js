/*返回顶部*/
export default Spark.Fixed({
  style:
    "background:transparent;right:28px;bottom:80px;font-size:30px;text-align:center;transform:rotate(-45deg);",
  child: [Spark.Text("🚀")],
  show: false,
  created() {
    document.addEventListener("scroll", () => {
      this.show = Spark.Util.screen.scrollTop() > 10;
    });
  },
  on: {
    click() {
      Spark.scrollTop("top", 300);
    },
  },
});
