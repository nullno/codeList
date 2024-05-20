#字符元素组成判定 检查两个字符串的组成元素是不是一样的
from collections import Counter
def anagram(first, second):
return Counter(first) == Counter(second)
anagram("abcd3", "3acdb") # True
