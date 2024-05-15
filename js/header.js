import Share from "./share.js";
import { Types, TypesList } from "./type.js";

const logo = Spark.Box({
  style:
    "width:120px;height:40px;position:relative;overflow:hidden;border-radius:6px;text-align:center;line-height:40px;font-weight:bold;font-size:20px;color:#fff;user-select:none;",
  child: [
    Spark.Box({
      style:
        "width:150%;height:250%;position:absolute;top:-50%;left:-25%;z-index:0;background-image:linear-gradient(90deg, #e037ff 0, #00F9E5 100%);background-size: 100% 100%; animation: gradientAnimation 3s linear infinite both;",
    }),
    Spark.Text("CodeList", {
      style: "position:relative;z-index:1;",
    }),
  ],
});

const searchButton = Spark.Text("🔍", {
  style: "font-size:20px;padding:0 10px; cursor:pointer;",
  shover: "transform:scale(1.1);",
  on: {
    click() {
      Share.CodeList.onSearchChange(searchInput.value);
    },
  },
});

const searchInput = Spark.Input({
  style:
    "width:70%;max-width:500px;height:100%;line-height:43px;border:0;padding:5px;color:#666;font-size:18px;font-weight:500;padding:0;",
  onStyle: "box-shadow:unset;color:#666;",
  placeholder: "Search code...",
  on: {
    keyEnter() {
      Share.CodeList.onSearchChange(searchInput.value);
    },
  },
});

const searchBox = Spark.Box({
  style:
    "width:95%;max-width:600px;height:50px;margin:40px auto;padding:3px;background:#fff; border-radius:6px;border:1px solid rgba(0,0,0,0.3); display:flex;justify-content:space-between;align-items:center;",
  child: [logo, searchInput, searchButton],
});

var tagStyle = Spark.Css(
  "padding:0 20px;margin-bottom:20px;display:inline-block;border-radius:20px;"
);

const codeTagList = Spark.List({
  data: TypesList,
  style: "text-align:center; margin:0 auto;",
  selected(activeIndex) {
    TypesList.forEach((e, index) => {
      const curItem = this.getChild(index);
      curItem.style = `background-color:transparent;color:${Types[e].color};`;
      if (activeIndex === index) {
        curItem.style = `background-color:${
          Types[localStorage.language].color
        }};color:#fff;`;
      }
    });
  },
  item(item, index) {
    const typeColor = Types[item].color;
    return Spark.Box({
      tag: "li",
      className: tagStyle,
      style: `color:${typeColor};`,
      child: [Spark.Text(item)],
      shover: "transform:scale(1.1);",
      init() {
        if (item === localStorage.language) {
          this.style = `background-color:${typeColor}};color:#fff;`;
        }
      },
      on: {
        click() {
          if (localStorage.language == TypesList[this.listIndex]) {
            localStorage.language = "";
            codeTagList.selected(-1);
          } else {
            localStorage.language = TypesList[this.listIndex];
            codeTagList.selected(this.listIndex);
          }

          Share.CodeList.onTypeChange(localStorage.language);
        },
      },
    });
  },
});

const header = Spark.Box({
  child: [searchBox, codeTagList],
});

export default header;
