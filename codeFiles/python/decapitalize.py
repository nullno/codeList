# 首字母小写 如下方法将令给定字符串的第一个字符统一为小写
def decapitalize(string):
return str[:1].lower() + str[1:]
decapitalize('FooBar') # 'fooBar'
decapitalize('FooBar') # 'fooBar
