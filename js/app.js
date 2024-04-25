import Header from "./header.js";
import CodeList from "./codeList.js";
import ScrollTop from "./scrollTop.js";

Spark.Page({
  //定义路由信息
  link: {
    name: "page1",
    path: "/",
  },
  style:
    "width:100%;min-height:" +
    Spark.screen.height() +
    "px;background-color:#fff;color:#34495e;",
  child: [Header, CodeList, ScrollTop],
  // keepalive:false,
  created() {},
});
Spark.Page({
  link: {
    name: "no-page",
    path: "*",
    meta: {
      title: "404 Not Found",
    },
  },
  style: "color:#34495e;text-align:center;line-height:100px;font-size:30px;",
  child: [Spark.Text("404 Not Found")],
});
