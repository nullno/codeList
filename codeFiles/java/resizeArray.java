/** 
* Reallocates an array with a new size, and copies the contents 
* of the old array to the new array. 
* @param oldArray  the old array, to be reallocated. 
* @param newSize   the new array size. 
* @return          A new array with the same contents. 
*/
private static Object resizeArray (Object oldArray, int newSize) {  
    int oldSize = java.lang.reflect.Array.getLength(oldArray);  
    Class elementType = oldArray.getClass().getComponentType();  
    Object newArray = java.lang.reflect.Array.newInstance(  
          elementType,newSize);  
    int preserveLength = Math.min(oldSize,newSize);  
    if (preserveLength > 0)  
       System.arraycopy (oldArray,0,newArray,0,preserveLength);  
    return newArray;  
 }  
  
 // Test routine for resizeArray().  
 public static void main (String[] args) {  
    int[] a = {1,2,3};  
    a = (int[])resizeArray(a,5);  
    a[3] = 4;  
    a[4] = 5;  
    for (int i=0; i<a.length; i++)  
       System.out.println (a[i]);  
 }