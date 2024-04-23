var Hi = Spark.Text("hello spark!", {
  style:
    "font-size:50px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);min-width:300px;text-align:center;",
  stopProp: true,
  on: {
    click() {},
    press() {
      this.text = "不要摸我嘛~";
    },
    up() {
      this.text = "----SPARK----";
    },
  },
});

export default Hi;
