import Share from "./share.js";

const TipText = Spark.Text("");
const Toast = Spark.Modal({
  style: {
    fontSize: "16px",
    lineHeight: "20px",
    color: "#fff",
    padding: "5px 10px",
    backgroundColor: "#198ce7",
    borderRadius: "5px",
    overflow: "hidden",
    display: "flex",
  },
  showAni: { ani: "fadeInUp 100ms  both" },
  hideAni: { ani: "fadeOutDown 100ms both", time: 100 },
  bgClose: true, //点击任意可关闭 默认false
  // bgColor:'rgba(255,255,255,0.5)',//背景颜色 默认rgba(0,0,0,0.5)
  bgShow: false, //是否有背景 默认false
  drag: false, //是否可拖动 默认false
  position: "bottomcenter", //topcener/topleft/topright/bottomcenter/bottomleft/bottomright 默认center
  // positionMargin:'3%', //距离边距间距 默认3%
  autoClose: 1500, //设置毫秒延时自动关闭，默认不false
  child: [TipText],
});

Share.Toast = function (text) {
  TipText.text = text;
  Toast.open();
};

export default Toast;
