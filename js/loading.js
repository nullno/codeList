const spinner = Spark.Image("./assets/icon-loading.svg", {
  style: {
    width: "30px",
    height: "30px",
    margin: "30px auto",
    display: "block",
    animation: "spinner 1000ms linear infinite both",
  },
  show: true,
});
const tip = Spark.Text("no data");
const empty = Spark.Box({
  style: {
    margin: "100px auto",
    textAlign: "center",
    fontSize: "16px",
    color: "#00ACC1",
  },
  show: false,
  child: [
    Spark.Image("./assets/icon-empty.svg", {
      style: {
        width: "300px",
        height: "200px",
        margin: "0 auto",
        display: "block",
      },
    }),
    tip,
  ],
});
const Loading = Spark.Box({
  child: [spinner, empty],
  //state 0 默认,1 加载 2 完成消息
  set(state, text) {
    if (state === 0) {
      tip.text = "";
      spinner.show = false;
      empty.show = false;
    }
    if (state === 1) {
      spinner.show = true;
      empty.show = false;
    }
    if (state === 2) {
      tip.text = text;
      spinner.show = false;
      empty.show = true;
    }
  },
});

export default Loading;
