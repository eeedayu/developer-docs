内容：

# C++开发环境搭建


## 1. 安装编译工具


Ubuntu:

```bash
sudo apt update

sudo apt install build-essential gdb

验证:

g++ --version

make --version
2. 第一个C++程序

创建:

vim main.cpp

代码：

#include<iostream>

int main()
{
    std::cout<<"hello cpp";
    return 0;
}

编译：

g++ main.cpp -o main

运行：

./main

如果输出：

hello cpp

说明环境成功。
