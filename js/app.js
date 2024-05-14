import Header from "./header.js";
import CodeList from "./codeList.js";
import ScrollTop from "./scrollTop.js";
import Toast from "./toast.js";
import Help from "./help.js";
import Talk from "./talk.js";
import Copyright from "./copyright.js";

const HelpBtn = Spark.Fixed({
  style: {
    width: "50px",
    height: "50px",
    bottom: "20px",
    right: "20px",
    background: "url(./assets/icon-submit.svg) no-repeat",
    backgroundSize: "100% 100%;",
  },
  shover: { transform: "scale(1.2)" },
  on: {
    click() {
      Spark.router.push("/help");
    },
  },
});
const PageStyle = Spark.Css({
  width: "100%",
  paddingBottom: "70px",
  backgroundColor: "#fff",
  background: "#fff url(./assets/mountain.png) repeat-x",
  overflow: "hidden",
  animation: "bgMove 300s linear infinite",
  minHeight: "100vh",
});
Spark.Page({
  link: { name: "home", path: "/" },
  className: PageStyle,
  child: [Header, CodeList, Talk, Copyright, Toast, HelpBtn, ScrollTop],
  created() {},
});
Spark.Page({
  link: {
    name: "help",
    path: "/help",
    meta: {
      title: "CodeList-help",
    },
    recordLastPosition: false,
  },
  className: PageStyle,
  child: [Help, Copyright, ScrollTop],
});
Spark.Page({
  link: {
    name: "no-page",
    path: "*",
    meta: {
      title: "404 Not Found",
    },
  },
  style: {
    color: "#34495e",
    textAlign: "center",
    lineHeight: "100px",
    fontSize: "30px",
  },
  child: [Spark.Text("404 Not Found")],
});
