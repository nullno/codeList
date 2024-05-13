import Share from "./share.js";
import { RenderItem } from "./codeList.js";
const CodeView = Spark.Box({
  style: {
    width: "50%",
    height: "100%",
  },
});
const Comment = Spark.Box({
  style: {
    width: "49%",
    height: "455px",
    padding: "0 5px",
    overflow: "auto",
    marginTop: "35px",
  },
});
const CloseBtn = Spark.Box({
  tag: "button",
  style: {
    width: "15px",
    height: "15px",
    background: "url(./assets/icon-close.svg)",
    backgroundSize: "100%",
    position: "absolute",
    top: "15px",
    right: "15px",
    border: "0",
    cursor: "pointer",
    zIndex: "9",
  },
  on: {
    click() {
      Talk.close();
    },
  },
});
const Talk = Spark.Modal({
  style: {
    width: "1000px",
    height: "500px",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#fff",
    backgroundColor: "#fff",
    borderRadius: "5px",
    overflow: "hidden",
    display: "flex",
  },
  bgClose: true, //点击任意可关闭 默认false
  bgShow: true, //是否有背景 默认false
  child: [CodeView, Comment, CloseBtn],
  onClose() {
    Spark.remove(CodeView, 0);
    Comment.$el.innerHTML = "";
  },
});

Share.Talk = function (codeItem) {
  console.log(codeItem);
  CodeView.append(RenderItem(codeItem, "noTalk"));
  const gitalk = new Gitalk({
    clientID: "Ov23liHNXv3FkH36LYSy",
    clientSecret: "ab6cee3a544cab16e397218b77b39b92cee01dc2",
    repo: "codeList", // The repository of store comments,
    owner: "nullno",
    admin: ["nullno"],
    id: codeItem.code, // Ensure uniqueness and length less than 50
    distractionFreeMode: false, // Facebook-like distraction free mode
  });
  //   Comment;
  gitalk.render(Comment.$el);
  Talk.open();
};

export default Talk;
