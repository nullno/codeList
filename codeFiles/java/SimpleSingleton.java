// 创建单实例Singleton
public class SimpleSingleton {  
    private static SimpleSingleton singleInstance =  new SimpleSingleton();  
 
    //Marking default constructor private  
    //to avoid direct instantiation.  
    private SimpleSingleton() {  
    }  
 
    //Get instance for class SimpleSingleton  
    public static SimpleSingleton getInstance() {  
 
        return singleInstance;  
    }  
}

// 另一种实现
public enum SimpleSingleton {  
    INSTANCE;  
    public void doSomething() {  
    }  
}  
 
//Call the method from Singleton:  
SimpleSingleton.INSTANCE.doSomething();