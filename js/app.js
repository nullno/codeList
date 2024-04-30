import Header from "./header.js";
import CodeList from "./codeList.js";
import ScrollTop from "./scrollTop.js";
import Toast from "./toast.js";
import Help from "./help.js";

const Add = Spark.Fixed({
  style:
    "width:50px;height:50px; bottom:20px;right:20px;background:url(./assets/icon-submit.svg) no-repeat;background-size:100% 100%;",
  shover: "transform:scale(1.2);",
  on: {
    click() {
      Spark.router.push("/help");
    },
  },
});
Spark.Page({
  //定义路由信息
  link: {
    name: "home",
    path: "/",
  },
  style:
    "width:100%;padding-bottom:50px; background-color:#fff;background:#fff url(./assets/mountain.png) repeat-x;overflow:hidden;animation: bgMove 300s linear infinite;",
  child: [Header, CodeList, Toast, Add, ScrollTop],
  // keepalive:false,
  created() {},
});
Spark.Page({
  //定义路由信息
  link: {
    name: "help",
    path: "/help",
    meta: {
      title: "CodeList-help",
    },
  },
  style:
    "width:100%;min-height:100vh; padding-bottom:50px; background-color:#fff;background:#fff url(./assets/mountain.png) repeat-x;overflow:hidden;animation: bgMove 300s linear infinite;",
  child: [Help, ScrollTop],
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
