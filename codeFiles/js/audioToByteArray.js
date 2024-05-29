// 音频转字节数组 
audioToByteArray(url) {
    return new Promise((resolve, reject) => {
      const context = new AudioContext();
      fetch(url)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
        .then((audioBuffer) => {
          // 获取音频缓冲区的样本数据
          const data = audioBuffer.getChannelData(0);
          // 创建一个新数组并复制样本数据
          const byteArray = new Uint8Array(data.length * 2);
          for (let i = 0; i < data.length; i++) {
            const sample = Math.max(-1, Math.min(1, data[i]));
            byteArray[i * 2] = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
            byteArray[i * 2 + 1] = (sample * 0x8000) & 0x8000;
          }
          resolve(byteArray);
        })
        .catch((error) => {
          reject();
          console.error("Audio conversion error:", error);
        });
    });
  },