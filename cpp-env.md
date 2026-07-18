Markdown
# C++ 编译环境搭建

C++ 需要编译器将代码编译为机器码，最常用的组合是 `gcc/g++` 和 `make` 构建工具。

### 🛠 一键安装核心工具链
```bash
sudo apt update
sudo apt install build-essential gdb
🔍 验证安装
Bash
g++ --version
make --version
🚀 编译与运行命令
使用以下命令进行编译并运行：

Bash
g++ -o main main.cpp
./main

