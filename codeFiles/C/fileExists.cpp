// 判断文件是否存在

#include <iostream>
#include <fstream>

bool fileExists(const std::string& filePath) {
    std::ifstream file(filePath);
    return file.good();
}

int main() {
    std::string filePath = "your_file_path";
    if (fileExists(filePath)) {
        std::cout << "文件存在" << std::endl;
    } else {
        std::cout << "文件不存在" << std::endl;
    }

    return 0;
}