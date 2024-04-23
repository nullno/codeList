import Hi from "./Hi.js";
/*返回顶部*/
var scrollTop = Spark.Fixed({
  style:
    "width:50px;height:50px;border-radius:50px;padding:9px; background:blue;right:20px;bottom:20px;color:#fff;font-size:12px; text-align:center; line-height:15px;",
  child: [Spark.Text("回到<br>顶部")],
  on: {
    click: function () {
      Spark.scrollTop("top", 300, () => {}).then(() => {
        console.log("scroll success");
      });
    },
  },
});

Spark.Page({
  //定义路由信息
  link: {
    name: "page1",
    path: "/",
    meta: {
      title: "你好",
    },
  },
  style:
    "width:100%;height:10000px; min-height:" +
    Spark.screen.height() +
    "px;background-color:#fff;color:#34495e;",
  child: [Hi, scrollTop],
  // keepalive:false,
  created() {
    console.log("page1 created");
  },
  on: {
    click() {
      if (Hi.text == "hello spark!") {
        Hi.text = "hello word!";
        this.style = "background-color:#34495e;color:#fff;";
      } else {
        Hi.text = "hello spark!";
        this.style = "background-color:#fff;color:#34495e;";
      }
    },
  },
});
