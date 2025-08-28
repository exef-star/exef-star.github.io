---
title: 使用FittenCode来提升你的工作效率
type: AI
tags: AI
categories: AI
description: 使用FittenCode写代码来提升你的工作效率
top_img: 'https://i.p-i.vip/68/20241215-675e9f938c01e.png'
cover: 'https://i.p-i.vip/68/20241215-675e9f938c01e.png'
abbrlink: 66b7
date: 2024-08-17 19:58:55
---

# 序言
现在的AI动辄花费就几百块来换取使用次数，这样我这个{% psw 个位数的钱包 %} 无福消受。然后就在菜鸟教程上找到了`FittenCode`。
粽锁粥汁，现在的AI花样百出，因此喜提称号“{% psw 人工智障 %}”所以就先上手小试一下，不好反手给他卸了
![该来的还是得来](https://s1.imagehub.cc/images/2024/08/19/b0413e9c54dec192e62dc3bab1350bf7.png)
# 安装&使用
VSCode中直接打开侧边栏的扩展搜`Fitten Code`，出来的第一个就是，点击下载安装就可以了。
目前从主页来看是`个人免费使用`，企业也可以申请`企业授权`使用来私有化部署。估计个人使用应该是不限使用次数的。
界面与市面上的AI没有多大区别：
![7b60d65b6fb4b2d29bfb006d52cdd94c.png](https://s1.imagehub.cc/images/2024/08/19/7b60d65b6fb4b2d29bfb006d52cdd94c.png)
可以试一下生成一个简单的C++猜数字程序。

`😊You`：编写一个C++的猜数字程序

`😘Fitten Code`：好的，下面是一个简单的C++猜数字程序。这个程序会生成一个1到100之间的随机数，然后让用户猜这个数字，直到猜对为止。

```C++
#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
    // 设置随机数种子
    std::srand(std::time(0));
    
    // 生成1到100之间的随机数
    int secretNumber = std::rand() % 100 + 1;
    
    int guess;
    int attempts = 0;
    
    std::cout << "欢迎来到猜数字游戏！" << std::endl;
    std::cout << "我已经想好了一个1到100之间的数字，试着猜猜看吧！" << std::endl;
    
    do {
        std::cout << "请输入你的猜测: ";
        std::cin >> guess;
        attempts++;
        
        if (guess > secretNumber) {
            std::cout << "太大了！再试一次。" << std::endl;
        } else if (guess < secretNumber) {
            std::cout << "太小了！再试一次。" << std::endl;
        } else {
            std::cout << "恭喜你，猜对了！你用了" << attempts << "次猜中了数字。" << std::endl;
        }
    } while (guess != secretNumber);
    
    return 0;
}
```
>这个程序的工作原理如下：
>使用std::srand(std::time(0))设置随机数种子，确保每次运行程序时生成的随机数不同。
>生成一个1到100之间的随机数。
>提示用户输入猜测，并根据猜测的结果给出反馈，直到用户猜对为止。
>最后显示用户猜对所用的次数。
>你可以将这个代码复制到你的C++开发环境中运行，体验猜数字的乐趣！
效果：
![a8c5cdbdd27414a6eb2fdee1ee416028.png](https://s1.imagehub.cc/images/2024/08/19/a8c5cdbdd27414a6eb2fdee1ee416028.png)

------

既然C++的都能运行起来，那么就提高一点难度，用Python写一个Tkinter的猜数字程序。

`😊You`：编写一个PythonTkinter的猜数字程序

`😘Fitten Code`：好的，下面是一个使用Python和Tkinter编写的猜数字程序。
这个程序会生成一个1到100之间的随机数，然后让用户通过图形界面猜这个数字，直到猜对为止。
```python
import tkinter as tk
from tkinter import messagebox
import random

class GuessNumberApp:
    def __init__(self, root):
        self.root = root
        self.root.title("猜数字游戏")
        
        self.secret_number = random.randint(1, 100)
        self.attempts = 0
        
        self.label = tk.Label(root, text="我已经想好了一个1到100之间的数字，试着猜猜看吧！")
        self.label.pack(pady=10)
        
        self.entry = tk.Entry(root)
        self.entry.pack(pady=5)
        
        self.guess_button = tk.Button(root, text="猜猜看", command=self.check_guess)
        self.guess_button.pack(pady=5)
        
    def check_guess(self):
        try:
            guess = int(self.entry.get())
            self.attempts += **1**
            
            if guess < self.secret_number:
                messagebox.showinfo("提示", "太小了！再试一次。")
            elif guess > self.secret_number:
                messagebox.showinfo("提示", "太大了！再试一次。")
            else:
                messagebox.showinfo("恭喜", f"恭喜你，猜对了！你用了{self.attempts}次猜中了数字。")
                self.root.quit()
        except ValueError:
            messagebox.showwarning("警告", "请输入一个有效的数字。")

if __name__ == "__main__":
    root = tk.Tk()
    app = GuessNumberApp(root)
    root.mainloop()
```
>这个代码创建了一个简单的猜数字程序，包含一个标签、一个输入框和一个按钮。程序会随机生成一个1到100之间的数字，用户通过输入框输入猜测的数字，并点击按钮进行验证。程序会根据用户的猜测给出相应的提示，直到用户猜对数字为止。
>运行这个代码后，你会看到一个简单的猜数字游戏界面，可以输入猜测的数字并查看结果。你可以根据需要进一步扩展和美化这个猜数字程序。
效果：
![e925911c22d54ec2941415b87652907c.png](https://s1.imagehub.cc/images/2024/08/19/e925911c22d54ec2941415b87652907c.png)