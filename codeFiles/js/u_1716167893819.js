/**
*使用原生JS实现简单的ajax请求
*/
// 创建XMLHttpRequest对象
var xhr = new XMLHttpRequest();
// 配置请求参数
xhr.open('GET', 'https://api.example.com/data', true); // 使用GET方法从指定URL获取数据
// 设置请求完成后的回调函数
xhr.onreadystatechange = function() {
if (xhr.readyState === 4 && xhr.status === 200) {
// 请求成功，处理返回的数据
var response = xhr.responseText; // 获取返回的数据文本
// 在这里可以对返回的数据进行处理，例如解析JSON数据等。
} else {
// 请求失败或正在加载数据，处理错误或等待数据加载的情况。
}
};
// 发送请求（对于GET请求可以省略send()方法）
xhr.send(); // 对于GET请求，可以省略send()方法；对于POST请求，需要调用send()方法。