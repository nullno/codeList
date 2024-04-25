const listStyle = Spark.Css(
  "width:400px;height:400px;margin:10px;float:left; background-color:#fff;padding:10px;overflow:hidden;border-radius:5px;box-shadow:0 0 5px #ccc;"
);

const codeList = Spark.List({
  data: [
    { a: "item", b: "hello world" },
    { a: "item", b: "hello spark" },
    { a: "item", b: "hello CS" },
    { a: "item", b: "hello world" },
    { a: "item", b: "hello spark" },
    { a: "item", b: "hello CS" },
  ],
  style: "width:100%;padding:0 20px;",
  item(item, index) {
    var template = Spark.Box({
      tag: "li",
      className: listStyle,
      style: "background-color:#fff;",
      showAni: { ani: "fadeIn 500ms  both" },
      child: [
        Spark.Text(index, { listIndex: true }),
        Spark.Text("---" + item.b),
        Spark.Text("删除", {
          style: "float:right;",
          on: {
            click() {
              template.remove(); //{ ani: "bounceOutRight 500ms both", time: 500 }
            },
          },
        }),
      ],
      init() {
        // if(this.listIndex== 1){
        //     this.style='background-color:#7566F9;color:#fff;';
        // }else{
        //     this.style='background-color:#fff;color:#666;';
        // }
      },
      on: {
        click() {
          alert(item.b);
        },
      },
    });

    return template;
  },
});
export default codeList;
