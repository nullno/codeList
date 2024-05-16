// 发送代数据的HTTP请求
import java.io.BufferedReader;  
import java.io.InputStreamReader;  
import java.net.URL;  
 
public class Main {  
    public static void main(String[] args)  {  
        try {  
            URL my_url = new URL("http://coolshell.cn/");  
            BufferedReader br = new BufferedReader(new InputStreamReader(my_url.openStream()));  
            String strTemp = "";  
            while(null != (strTemp = br.readLine())){  
            System.out.println(strTemp);  
        }  
        } catch (Exception ex) {  
            ex.printStackTrace();  
        }  
    }  
}