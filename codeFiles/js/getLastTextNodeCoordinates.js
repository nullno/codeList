 /*
获取元素最后最后一个文本节点的坐标，ai回复打字机使用
*/
getLastTextNodeCoordinates(element) {
      if (!element) return;

      const lastNode = element.children[element.children.length - 1];
      const blinker = this.$refs.blinker;
      const textNodes = [];
      function traverseNodes(node) {
        if (node.nodeType === Node.TEXT_NODE && node.data != '\n') {
          textNodes.push(node);
        } else {
          for (let child of node.childNodes) {
            traverseNodes(child);
          }
        }
      }
      traverseNodes(lastNode);
      const lastTextNode = textNodes[textNodes.length - 1];
      if (lastTextNode && blinker) {
        const blinkerTextNode = document.createTextNode('|');
        lastTextNode.parentElement.appendChild(blinkerTextNode);
        let range = document.createRange();
        range.selectNodeContents(blinkerTextNode);
        let rect = range.getBoundingClientRect();
        const parent = blinker.parentElement.getBoundingClientRect();
        blinker.style.left = rect.x - parent.x + 'px';
        blinker.style.top = rect.y - parent.y + rect.height - 20 + 'px';
        blinkerTextNode && blinkerTextNode.remove();
        return {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        };
      }

      return null;
    }