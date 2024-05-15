# 新建文件夹
import os
folder_name = "new_folder"
os.makedirs(folder_name, exist_ok=True)

# 新建文件
file_name = "new_file.txt"
with open(file_name, 'w') as f:
    pass

# 指定目录新建文件
directory = '/path/to/directory'  # 替换为实际目录路径
file_name = 'new_file.txt'

# 确保目录存在
if not os.path.exists(directory):
    os.makedirs(directory)

# 创建文件
with open(os.path.join(directory, file_name), 'w') as f:
    f.write('This is a new file.')