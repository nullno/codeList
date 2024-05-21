// 处理数据中的空格

#include <iostream>
#include <fstream>

int main() {
    std::ifstream inFile("data.txt");  // 替换为你的文件路径

    if (!inFile.is_open()) {
        std::cout << "无法打开文件" << std::endl;
        return 1;
    }

    char line[100];  // 用于存储读取的行

    // 使用 fgets 函数读取一行数据
    if (inFile.getline(line, sizeof(line))) {
        std::cout << "使用 fgets 读取的行: " << line << std::endl;
    } else {
        std::cout << "读取文件失败" << std::endl;
    }

    // 使用 getline 函数读取一行数据，并指定空格为分隔符
    if (inFile.getline(line, sizeof(line), ' ')) {
        std::cout << "使用 getline 读取的行: " << line << std::endl;
    } else {
        std::cout << "读取文件失败" << std::endl;
    }

    inFile.close();

    return 0;
}

// 首先打开文件，然后使用fgets函数和getline函数分别读取一行数据。fgets函数会将整行数据包括空格读取到缓冲区中，而getline函数会在遇到空格时停止读取，并将空格之前的数据存储在缓冲区中。