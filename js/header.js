const logo = Spark.Box({
  style:
    "width:120px;height:40px;position:relative;overflow:hidden;border-radius:6px;text-align:center;line-height:40px;font-weight:bold;font-size:20px;color:#fff;user-select:none;",
  child: [
    Spark.Box({
      style:
        "width:150%;height:250%;position:absolute;top:-50%;left:-25%;z-index:0;background-image:linear-gradient(90deg, #e037ff 0, #00F9E5 100%);background-size: 100% 100%; animation: gradientAnimation 3s linear infinite both;",
    }),
    Spark.Text("CodeList", {
      style: "position:relative;z-index:1;",
    }),
  ],
});

const searchButton = Spark.Text("🔍", {
  style: "font-size:20px;padding:0 10px; cursor:pointer;",
  shover: "transform:scale(1.1);",
});

const searchInput = Spark.Input({
  style:
    "width:70%;max-width:500px;height:100%;line-height:43px;border:0;padding:5px;color:#666;font-size:18px;font-weight:500;padding:0;",
  onStyle: "box-shadow:unset;color:#666;",
  placeholder: "Search code...",
});

const searchBox = Spark.Box({
  style:
    "width:95%;max-width:600px;height:50px;margin:40px auto;padding:3px;background:#fff; border-radius:6px;border:1px solid rgba(0,0,0,0.3); display:flex;justify-content:space-between;align-items:center;",
  child: [logo, searchInput, searchButton],
});

var tagStyle = Spark.Css(
  "padding:0 20px;margin-bottom:20px;display:inline-block; border-right:1px solid rgba(0,0,0,0.3);"
);

const codeTagList = Spark.List({
  data: [
    "html/css",
    "javascript",
    "java",
    "python",
    "c++",
    "go",
    "kotlin",
    "swift",
    "php",
    "dart",
    "ruby",
    "R",
    "数据库",
    "运维",
  ],
  style: "text-align:center; margin:0 auto;",
  item(item, index) {
    return Spark.Box({
      tag: "li",
      className: tagStyle,
      child: [Spark.Text(item)],
      shover: "color:#7566F9;",
      init() {
        if (this.listIndex === codeTagList.data.length - 1) {
          this.style = "border:0;";
        }
      },
      on: {
        click() {
          alert(item);
        },
      },
    });
  },
});

const header = Spark.Box({
  child: [searchBox, codeTagList],
});

export default header;
