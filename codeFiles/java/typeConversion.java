// 整数类型之间转换
int intValue = 10;
long longValue = (long)intValue;

// 整数转字符串
int num = 5;
String str = String.valueOf(num); 

// 字符串转整数
String strNumber = "123";
int intNumber = Integer.parseInt(strNumber);

// 字符串转浮点数
String floatStr = "3.14";
float floatValue = Float.parseFloat(floatStr);

// 浮点数转字符串
float floatNumber = 3.14f;
String floatStr2 = String.valueOf(floatNumber);

// 转字符串到日期 1
SimpleDateFormat format = new SimpleDateFormat( "dd.MM.yyyy" );  
Date date = format.parse( myString );
// 转字符串到日期 2
java.util.Date = java.text.DateFormat.getDateInstance().parse(date String);

// 把 Java util.Date 转成 sql.Date
java.util.Date utilDate = new java.util.Date();  
java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());