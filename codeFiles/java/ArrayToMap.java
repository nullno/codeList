// 把 Array 转换成 Map 

import java.util.Map;  
import org.apache.commons.lang.ArrayUtils;  
 
public class Main {  
 
  public static void main(String[] args) {  
    String[][] countries = { { "United States", "New York" }, { "United Kingdom", "London" },  
        { "Netherland", "Amsterdam" }, { "Japan", "Tokyo" }, { "France", "Paris" } };  
 
    Map countryCapitals = ArrayUtils.toMap(countries);  
 
    System.out.println("Capital of Japan is " + countryCapitals.get("Japan"));  
    System.out.println("Capital of France is " + countryCapitals.get("France"));  
  }  
}