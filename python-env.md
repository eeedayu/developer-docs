Markdown
# Python 编译/运行环境搭建

Linux 系统通常预装了 Python，但为了更好的开发隔离性，建议使用包管理和虚拟环境。

### 📦 安装 Python 及包管理工具
```bash
sudo apt install python3 python3-pip python3-venv
🌐 创建并激活虚拟环境
Bash
python3 -m venv my_env
source my_env/bin/activate
🔍 验证安装
Bash
python3 --version
pip3 --version
