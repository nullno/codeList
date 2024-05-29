// 文件转base64
 file2base64(src) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", src, true);
      xhr.responseType = "arraybuffer";

      xhr.onload = function () {
        if (this.status == 200) {
          var blob = new Blob([this.response], { type: "audio/mp3" }); // 或者相应的MIME类型
          const file = new FileReader();
          file.readAsDataURL(blob);
          file.onload = function () {
            console.log(file.result);
            resolve(file.result);
          };
        }
      };

      xhr.send();
    });
  }