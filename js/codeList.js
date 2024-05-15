import Share from "./share.js";
import { Types } from "./type.js";

async function copyTextToClipboard(file) {
  try {
    const content = await Spark.axios.get(file);
    await navigator.clipboard.writeText(content.data);
    Share.Toast("Copied successfully!");
  } catch (err) {
    Share.Toast("Failed to copy, please copy manually!");
  }
}
function getFileExtension(fileName) {
  const extension = fileName.match(/\.([^.]+)$/);
  return extension ? extension[1] : "";
}

const listStyle = Spark.Css(
  "width:33.3%;height:365px;float:left;padding:10px;overflow:hidden;cursor: unset;"
);

export const RenderItem = (item, index) => {
  // const itemColor = Types[item.language].color || "#7396F3";
  // const Title = Spark.Text(Types[item.language].icon + " " + item.title, {
  //   tag: "h2",
  //   style: `color:${itemColor};line-height:20px;font-weight:normal;border-radius:3px;font-size:14px;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;`,
  //   on: {
  //     hover() {
  //       this.$el.title = item.title;
  //     },
  //   },
  // });
  const codeHeader = Spark.Box({
    style:
      "width:100%;height: 30px;padding:0 8px; align-items:center;background-color: #343541;display: flex;flex-direction: row;flex-shrink: 0;justify-content: space-between;border-radius:6px 6px 0 0;",
    child: [
      Spark.Text(getFileExtension(item.name), {
        style: "font-size: 14px;color:hsla(0, 0%, 100%, .7);padding-left:10px;",
      }),
      Spark.Box({
        tag: "button",
        style:
          "width: 16px;height: 16px;background-image:url(./assets/icon-copy.svg);border:none;cursor:pointer;",
        on: {
          click() {
            copyTextToClipboard(item.code);
            this.style = "background-image:url(./assets/icon-right.svg);";
            setTimeout(() => {
              this.style = "background-image:url(./assets/icon-copy.svg);";
            }, 1500);
          },
        },
      }),
    ],
  });
  const codePre = Spark.Box({
    style:
      "width:100%;height:calc(100% - 30px);color:#fff;overflow:hidden;border-radius:0 0 6px 6px;padding:2px;",
    created() {
      this.$el.innerHTML = `<pre data-src="${item.path}"></pre>`;
      Prism.highlightAll();
    },
  });

  const codeView = Spark.Box({
    style: `width:100%;height:${
      index === "noTalk" ? "480px" : "325px"
    };background-color:#12131b;border-radius:6px;`,
    child: [codeHeader, codePre],
  });
  const talkBtn = Spark.Box({
    tag: "button",
    style: {
      width: "25px",
      height: "25px",
      background: "url(./assets/icon-talk.svg)",
      backgroundSize: "100%",
      position: "absolute",
      bottom: "15px",
      right: "15px",
      border: "0",
      cursor: "pointer",
    },
    on: {
      click() {
        Share.Talk(item);
      },
    },
  });
  const codeItem = Spark.Box({
    style: `position:relative;width:100%;height:100%;padding:10px;background-color:#fff;border-radius:10px;box-shadow:${
      index === "noTalk" ? "unset" : "0 0 3px rgba(0, 0, 0, .2"
    });`,
    child: [codeView, index !== "noTalk" ? talkBtn : null],
  });
  if (index === "noTalk") {
    return codeItem;
  }

  return Spark.Box({
    tag: "li",
    className: listStyle,
    // showAni: { ani: "fadeIn 500ms  both" },
    child: [codeItem],
  });
};

const CodeList = Spark.List({
  data: [],
  search: {
    page: 1,
    pageSize: 10,
    keyword: "",
  },
  style:
    "width:100%;max-width:1330px;margin:0 auto;overflow:hidden;padding:10px;",
  item(item, index) {
    return RenderItem(item, index);
  },
  created() {
    this.resizeList();
    this.getCodeFile();
  },
  resizeList() {
    Spark.Util.screen.resize((screen) => {
      if (screen.width > 900) {
        listStyle.style = "width:33.3%;";
      }
      if (screen.width < 900) {
        listStyle.style = "width:50%;";
      }
      if (screen.width < 600) {
        listStyle.style = "width:100%;";
      }
    });
  },
  onTypeChange() {
    this.search.page = 1;
    this.getCodeFile(true);
  },
  onSearchChange(keyword) {
    this.search.keyword = keyword;
    this.getCodeFile(true);
  },
  async getCodeFile(isFlush) {
    try {
      const lan = localStorage.language
        ? Types[localStorage.language].skey
        : "";

      const query = encodeURIComponent(
        `${this.search.keyword} path:codeFiles/${lan} ${
          lan & (lan != "normal") ? "language:" + lan : ""
        } repo:nullno/codeList`
      );
      const Authorization = {
        headers: {
          Authorization:
            "token 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",
        },
      };
      const Res = await Spark.axios.get(
        `https://api.github.com/search/code?page=${this.search.page}&per_page=${this.search.pageSize}&q=${query}`,
        Authorization
      );
      if (!Res.data.items) {
        throw "failed";
      }
      isFlush && this.clear();
      this.insertLast(Res.data.items);
    } catch (err) {
      Share.Toast("Query failed!");
    }
  },
});

Share.CodeList = CodeList;

export default CodeList;
