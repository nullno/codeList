import Header from "./header.js";
import CodeList from "./codeList.js";
import ScrollTop from "./scrollTop.js";
//
Spark.Page({
  //定义路由信息
  link: {
    name: "page1",
    path: "/",
  },
  style:
    "width:100%;padding-bottom:50px; background-color:#fff;background:#fff url(./assets/mountain.png) repeat-x;overflow:hidden;animation: bgMove 100s linear infinite;",
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
