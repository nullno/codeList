 // C++中实现文件读取和写入

#include <iostream>
#include <fstream>

int main() {
    // 文件读取
    std::ifstream inFile("input.txt");
    if (inFile.is_open()) {
        std::string line;
        while (std::getline(inFile, line)) {
            std::cout << line << std::endl;
        }
        inFile.close();
    } else {
        std::cout << "无法打开文件" << std::endl;
    }

    // 文件写入
    std::ofstream outFile("output.txt");
    if (outFile.is_open()) {
        outFile << "写入的内容" << std::endl;
        outFile.close();
    } else {
        std::cout << "无法打开文件" << std::endl;
    }

    return 0;
}