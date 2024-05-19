import { Types, TypesList, gtoken } from "./type.js";
import Share from "./share.js";
import { Base64 } from "https://cdn.jsdelivr.net/npm/js-base64@3.7.7/base64.mjs";

const Title = Spark.Text("✏️ 提交代码", {
  tag: "h2",
  style: "width:100%;",
});
const BackButton = Spark.Box({
  tag: "button",
  style:
    "width:30px;height:30px;position:absolute;top:26px;right:15px;background:url(./assets/icon-back.svg)  no-repeat 100% / cover;;border:none;cursor:pointer;",
  on: {
    click() {
      Spark.router.back();
    },
  },
});

const tagStyle = Spark.Css("width:100%;padding:5px 20px;display:inline-block;");

const typeSelect = Spark.Box({
  style: "position:relative;",
  curLanguage: "js",
  child: [
    Spark.Text("js", {
      style:
        "font-size: 14px;color:hsla(0, 0%, 100%, .7);padding-left:10px;user-select:none;",
      on: {
        click() {
          const List = typeSelect.getChild(1);
          List.show = !List.show;
        },
      },
    }),
    Spark.List({
      data: TypesList,
      style:
        "position:absolute;top:30px;color:#fff;background:#343541;border-radius:3px;z-index:3;overflow:hidden;",
      show: false,
      init() {
        this.selected(1);
        document.body.addEventListener("click", () => {
          this.show = false;
        });
      },
      selected(activeIndex) {
        TypesList.forEach((e, index) => {
          const curItem = this.getChild(index);
          curItem.style = `background:transparent;`;
          if (activeIndex === index) {
            curItem.style = `background:#2590F1;`;
          }
        });
      },

      item(item, index) {
        const _scope = this;
        return Spark.Box({
          tag: "li",
          className: tagStyle,
          shover: "background:#2590F1;",
          child: [Spark.Text(item)],

          on: {
            click() {
              const useLanagaue = typeSelect.getChild(0);
              useLanagaue.text = typeSelect.curLanguage = Types[item].skey;
              _scope.selected(index);
              _scope.show = false;
            },
          },
        });
      },
    }),
  ],
});
const submitBtn = Spark.Text("submit", {
  tag: "button",
  style:
    "font-size:14px;background:#2590F1; color:#fff;padding:3px 12px;border:none;cursor:pointer;border-radius:4px;",
  on: {
    click() {
      codeEdit.submitContent();
    },
  },
});
const codeHeader = Spark.Box({
  style:
    "width:100%;height: 30px;padding:0 8px; align-items:center;background-color: #343541;display: flex;flex-direction: row;flex-shrink: 0;justify-content: space-between;border-radius:6px 6px 0 0;",
  child: [typeSelect, submitBtn],
});

const codePre = Spark.Box({
  tag: "pre",
  style:
    "position:relative;z-index:1;min-width:960px;min-height:560px;height:auto !important; cursor:unset;overflow:hidden !important;pointer-events:none;background:transparent !important;",
  // attributes: "contenteditable=true",
  className: "language-*",
  init() {
    this.$el.innerHTML = ">> Please paste the code.";
  },
});
const codeTextarea = Spark.Box({
  tag: "textarea",
  style:
    "position:absolute;z-index:0;width:100%;height:100%;cursor:unset;padding:1em;border:0;overflow:hidden;color:#fff;opacity: 0.5;",
  className: "language-*",
  on: {
    input(e) {
      try {
        const isExist = Prism.languages[typeSelect.curLanguage];
        codePre.$el.innerHTML = `${Prism.highlight(
          this.$el.value,
          isExist
            ? Prism.languages[typeSelect.curLanguage]
            : Prism.languages.text,
          isExist ? typeSelect.curLanguage : "text"
        )}`;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

const codeEdit = Spark.Box({
  style: "width:100%;height:calc(100% - 30px);overflow:hidden;padding:2px;",

  child: [
    Spark.Box({
      idName: "code-edit",
      style: "width:100%;height:100%;color:#fff;overflow:auto;",
      child: [
        Spark.Box({
          style: "position:relative;overflow:hidden;width:fit-content;",
          child: [codeTextarea, codePre],
        }),
      ],
    }),
  ],
  clear() {
    codeTextarea.$el.value = "";
    codePre.$el.innerHTML = ">> Please paste the code.";
    this.submitting = false;
    submitBtn.text = "submit";
  },
  submitting: false,
  async submitContent() {
    try {
      if (this.submitting) return;
      const content = codeTextarea.$el.value;
      const language = typeSelect.curLanguage;
      if (content.length < 100) {
        Share.Toast("It may not be useful content!");
        return;
      }
      this.submitting = true;
      submitBtn.text = "submitting";
      const fileName = `u_${Date.now()}.${language}`;
      const Base64Data = Base64.encode(content);
      const Res = await Spark.axios.put(
        `https://api.github.com/repos/nullno/codeList/contents/codeFiles/${language}/${fileName}`,
        {
          message: "created " + fileName,
          content: Base64Data,
        },
        {
          headers: {
            Authorization: "token " + gtoken.join(""),
          },
        }
      );
      console.log(Res);
      if (!Res.data.content) throw "failed";
      Share.Toast("submit success!");
      this.clear();
    } catch (err) {
      Share.Toast("submit rejected!");
      this.clear();
    }
  },
});

const codeView = Spark.Box({
  style: `width:100%;height:600px;background-color:#12131b;border-radius:6px;margin-top:50px;`,
  child: [codeHeader, codeEdit],
});
const submitCode = Spark.Box({
  style:
    "width:100%;max-width:1000px;margin:0 auto;overflow:hidden;padding:25px 15px 50px 15px;position:relative;",
  child: [Title, codeView, BackButton],
});

export default submitCode;
