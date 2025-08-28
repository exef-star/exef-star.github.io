---
title: C++の学习笔记
tags: C++
categories: C++
description: 一个略显潦草的C++学习笔记。
top_img: 'https://i.p-i.vip/68/20250615-684e8b2a3c97e.webp'
cover: 'https://i.p-i.vip/68/20250615-684e8b2a3c97e.webp'
abbrlink: aef6
date: 2025-06-15 15:00:03
---

> 纯新手，大佬轻喷つ﹏⊂
> 注：文章里的`a`为变量，注意识别

# 基础语法

## 头, cout, cin, int

C++与Python语法最大的不同的是包含了一些头文件以及入口函数。

以下就是一个最基本的C++程序，包含了引入头文件及创建入口：

```cpp
#include <iostream>
using namespace std;

int main() {
	cout << "Hello, world!" << endl;

    return 0;
}
```

`#include <iostream>` 引入了iostream头文件，其中包含了输入输出相关的函数。

`using namespace std;` 告诉编译器使用std命名空间中的函数。如果不写的话，需要使用`std::cout、std::cin`等。

`int main()` 是入口函数，程序从这里开始执行。

`cout << "Hello, world!" << endl;` 输出字符串"**Hello, world!**"。

`return 0;` 结束程序，并返回0。

`cout`则是C++中的输出函数，相当于Python中的`print()`。在此之前，后面还可以加入一个`endl`来表示结束换行。

如果你执行了这个代码，你应该会看到输出了Hello, world!。就像这样：

![](https://i.p-i.vip/68/20250615-684e7604b65f3.webp)

`int`是`C++`中用来设置变量的一个函数，类似于`Python`中的`a = 0`，在`C++`中就是`int a;`，由于我们没有设置变量的初始值，所以它默认就是一个`0`，当然，你可以写成`int a = 0;`来达到一样的效果，一般可以将它设为`int a = 114514;`等任意数字

`cin`则是`C++`中的输入函数，相当于`Python`中的`input()`。与Python不同，`Python`中的`input()`函数是接入到变量的前面，如`a = input("xxx")`。而C++的函数则是直接`cin >> a;`就完事儿了，而且要想提示用户的话，需要在它的前面接上`cout`函数，并且如果这个`cin`函数的前面有一个`endl`的东西，那么`输入框`就会换行。因此，如果想要做到不换行的效果，就要去掉`endl`。就像这样：

```cpp
#include <iostream>
using namespace std;

int main() {
    int a;
	cout << "input:";
    cin >> a;
    cout << "a = " << a << endl;
	
	return 0;
}
```

![](https://i.p-i.vip/68/20250615-684e7808098e1.webp)

而且这个办法似乎有一个缺点：输入不了中文，如果你输入了中文，就会像这样：

![](https://i.p-i.vip/68/20250615-684e78a7e1a36.webp)

这个等一下再说，我们可以利用这些来写一个小学生也会写的`C++`程序。

```cpp
#include <iostream>
using namespace std;

int main() {
	int a, b;
	cout << "input1:";
	cin >> a;
	cout << "input2:";
	cin >> b;
	cout << a + b << endl;
	
	return 0;
}
```

我们就可以得到以下效果：
![](https://i.p-i.vip/68/20250615-684e7c535b24d.webp)

布兑！，是下面这个：

![](https://i.p-i.vip/68/20250615-684e7cb861082.webp)

## string, getline, stof, float

`string`是`C++`中用来处理字符串的一种数据类型，它可以存储任意的字符，包括中文。这就解决了前面的问题。与`int`函数使用方法较为类似，可以搭配`cin`函数食用，一般的用法就是这样：

```cpp
string a;
```

`getline`是`C++`中用来从输入流中读取一行的函数，它可以读取到换行符之前的所有字符。t它的一般用法如下：
```cpp
getline(cin, a);
```

`stof`是`C++`中用来将字符串转换为浮点数的函数，它可以将字符串转换为浮点数。一般搭配`float`函数食用，它的一般用法如下：
```cpp
float a = stof(b);
```

如果你想要求一个双精度浮点数，那么你只需要将`float`改为`double`即可，就像这样：
```cpp
double a = stod(b);
```

# 后记（碎碎念）

`AList`最近被卖了，好像被卖给了一个有黑历史的公司，现在已经少了好几千的`star`，`issue`里面也是被大量的机器人刷屏，甚至还被植入了一些恶意代码，真是可怕。不过好在已经有大佬`fork`了原项目，正在去掉这些恶意代码，现在就蹲着`Openlist`的Docker镜像发布，静候佳音~