
<?php
// 连接数据库mysql
$servername = "localhost";
$dbusername = "username";
$dbpassword = "password";
$dbname = "database_name";

// 创建连接
$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

// 检查连接是否成功
if ($conn->connect_error) {
    die("连接失败: ". $conn->connect_error);
}

echo "数据库连接成功";

// 关闭连接
$conn->close();
?>