# 方案 1
file = open('example.txt', 'r')
content = file.read()
print(content)
file.close()

# 方案 2 自动管理文件资源
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)