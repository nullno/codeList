// 将文件中的数据读取到数组中
#include <iostream>
#include <fstream>
#include <vector>

int main() {
    std::ifstream inFile("data.txt");  // 替换为你的文件路径

    if (!inFile.is_open()) {
        std::cout << "无法打开文件" << std::endl;
        return 1;
    }

    std::vector<int> data;  // 存储数据的数组

    int value;
    while (inFile >> value) {
        data.push_back(value);
    }

    inFile.close();

    // 这里可以对读取到的数据进行处理

    return 0;
}