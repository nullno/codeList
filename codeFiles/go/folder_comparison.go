package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
)

func main() {
	// 定义文件夹路径
	dirA := "/Users/admin/code/A"
	dirB := "/Users/admin/code/B"

	// 获取文件夹 A 中的所有子文件夹
	subDirsA, err := os.ReadDir(dirA)
	if err != nil {
		log.Fatal(err)
	}

	// 获取文件夹 B 中的所有子文件夹
	subDirsB, err := os.ReadDir(dirB)
	if err != nil {
		log.Fatal(err)
	}

	// 创建一个 map 用于存储文件夹 B 中的子文件夹名字
	subDirsMap := make(map[string]bool)
	for _, dir := range subDirsB {
		if dir.IsDir() {
			subDirsMap[dir.Name()] = true
		}
	}

	// 匹配出在文件夹 A 中但不在文件夹 B 中的文件夹
	for _, dir := range subDirsA {
		if dir.IsDir() && !subDirsMap[dir.Name()] {
			fmt.Println(filepath.Join(dirA, dir.Name()))
		}
	}
}
