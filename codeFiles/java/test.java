import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    public static void main(String[] args) {
        // 数据库驱动
        String driver = "com.mysql.cj.jdbc.Driver";
        // 数据库 URL
        String url = "jdbc:mysql://localhost:3306/db_name";
        // 数据库用户名
        String username = "username";
        // 数据库密码
        String password = "password";

        try {
            // 加载驱动
            Class.forName(driver);
            // 获取连接
            Connection connection = DriverManager.getConnection(url, username, password);
            System.out.println("数据库连接成功！");
            connection.close();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }
}