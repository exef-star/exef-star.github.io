---
title: Python简易计算器
type: Python
tags: Python
categories: Python
description: Python简易计算器
top_img: 'https://pic.imgdb.cn/item/665c4146d9c307b7e9586fb5.png'
cover: 'https://pic.imgdb.cn/item/665c4146d9c307b7e9586fb5.png'
copyright: false
abbrlink: 8b2c
date: 2024-06-02 17:45:59
---

# 白色

```python
import tkinter
import tkinter.font

class Calculator(object):
    def __init__(self):
        self.root = tkinter.Tk()
        self.all_press_lists = []  # 保存运算数字和符号的列表
        self.is_press_compute = False  # 判断是否按下运算按钮,默认没有按下
        self.result = tkinter.StringVar()  # 显示输入的数字及结果
        self.record = tkinter.StringVar()  # 显示计算过程

    def main(self):
        self.root.minsize(300, 550)  # 显示框的最小长宽
        self.root.title('计算器')  # 标题
        self.root.resizable(False,False)
        

        input_bg, num_fg, btn_fg, btn_bg = "#ffffff", "#000000", "#000000", "#ffffff"  # 各种颜色
        btn_w, btn_h = 75, 70  # 按钮的长宽

        my_font = tkinter.font.Font(family='微软雅黑', size=20)  # 设置字体
        self.result.set(0)
        self.record.set('')
        # 显示版
        label = tkinter.Label(self.root, font=my_font, bg=input_bg, bd='9', fg=num_fg, anchor='se',
                              textvariable=self.record)
        label.place(width=300, height=120)
        label2 = tkinter.Label(self.root, font=my_font, bg=input_bg, bd='9', fg=num_fg, anchor='se',
                               textvariable=self.result)
        label2.place(y=120, width=300, height=80)

        # 第一行
        btn_ac = tkinter.Button(self.root, text='c', font=my_font, bg=btn_bg, fg=btn_fg, bd=0,
                                command=lambda: self.press_compute('AC'))
        btn_ac.place(x=btn_w * 0, y=200 + btn_h * 0, width=btn_w, height=btn_h)
        btn_back = tkinter.Button(self.root, text='←', font=my_font, bg=btn_bg, fg=btn_fg, bd=0,
                                  command=lambda: self.press_compute('b'))
        btn_back.place(x=btn_w * 1, y=200 + btn_h * 0, width=btn_w, height=btn_h)
        btn_per = tkinter.Button(self.root, text='%', font=my_font, bg=btn_bg, fg=btn_fg, bd=0,
                                 command=lambda: self.press_compute('%'))
        btn_per.place(x=btn_w * 2, y=200 + btn_h * 0, width=btn_w, height=btn_h)
        btn_divi = tkinter.Button(self.root, text='÷', font=my_font, bg=btn_bg, fg=btn_fg, bd=0,
                                  command=lambda: self.press_compute('/'))
        btn_divi.place(x=btn_w * 3, y=200 + btn_h * 0, width=btn_w, height=btn_h)

        # 第二行
        btn7 = tkinter.Button(self.root, text='7', font=my_font, bg=btn_bg, fg=num_fg, bd=0,
                              command=lambda: self.press_num('7'))
        btn7.place(x=btn_w * 0, y=200 + btn_h * 1, width=btn_w, height=btn_h)
        btn8 = tkinter.Button(self.root, text='8', font=my_font, bg=btn_bg, fg=num_fg, bd=0,
                              command=lambda: self.press_num('8'))
        btn8.place(x=btn_w * 1, y=200 + btn_h * 1, width=btn_w, height=btn_h)
        btn9 = tkinter.Button(self.root, text='9', font=my_font, bg=btn_bg, fg=num_fg, bd=0,
                              command=lambda: self.press_num('9'))
        btn9.place(x=btn_w * 2, y=200 + btn_h * 1, width=btn_w, height=btn_h)
        btn_mul = tkinter.Button(self.root, text='×', font=my_font, bg=btn_bg, fg=btn_fg, bd=0,
                                 command=lambda: self.press_compute('*'))
        btn_mul.place(x=btn_w * 3, y=200 + btn_h * 1, width=btn_w, height=btn_h)

        # 第三行
        btn4 = tkinter.Button(self.root, text='4', font=my_font, bg=btn_bg, fg=num_fg, bd=0,
                              command=lambda: self.press_num('4'))
        btn4.place(x=btn_w * 0, y=200 + btn_h * 2, width=btn_w, height=btn_h)
        btn5 = tkinter.Button(self.root, text='5', font=my_font, bg=btn_bg, fg=num_fg, bd=0,
                              command=lambda: self.press_num('5'))
        btn5.place(x=btn_w * 1, y=200 + btn_h * 2, width=btn_w, height=btn_h)
        btn6 = tkinter.Button(self.root, text='6', font=my_font, bg=btn_bg, fg=num_fg, bd=0,
                              command=lambda: self.press_num('6'))
        btn6.place(x=btn_w * 2, y=200 + btn_h * 2, width=btn_w, height=btn_h)
        btn_sub = tkinter.Button(self.root, text='-', font=my_font, bg=btn_bg, fg=btn_fg, bd=0,
                                 command=lambda: self.press_compute('-'))
        btn_sub.place(x=btn_w * 3, y=200 + btn_h * 2, width=btn_w, height=btn_h)

        # 第四行
        btn1 = tkinter.Button(self.root, text='1', font=my_font, bg=btn_bg, fg=num_fg, bd=0,
                              command=lambda: self.press_num('1'))
        btn1.place(x=btn_w * 0, y=200 + btn_h * 3, width=btn_w, height=btn_h)
        btn2 = tkinter.Button(self.root, text='2', font=my_font, bg=btn_bg, fg=num_fg, bd=0,
                              command=lambda: self.press_num('2'))
        btn2.place(x=btn_w * 1, y=200 + btn_h * 3, width=btn_w, height=btn_h)
        btn3 = tkinter.Button(self.root, text='3', font=my_font, bg=btn_bg, fg=num_fg, bd=0,
                              command=lambda: self.press_num('3'))
        btn3.place(x=btn_w * 2, y=200 + btn_h * 3, width=btn_w, height=btn_h)
        btn_add = tkinter.Button(self.root, text='+', font=my_font, bg=btn_bg, fg=btn_fg, bd=0,
                                 command=lambda: self.press_compute('+'))
        btn_add.place(x=btn_w * 3, y=200 + btn_h * 3, width=btn_w, height=btn_h)

        # 第五行
        btn0 = tkinter.Button(self.root, text='0', font=my_font, bg=btn_bg, fg=num_fg, bd=0,
                              command=lambda: self.press_num('0'))
        btn0.place(x=btn_w * 0, y=200 + btn_h * 4, width=btn_w * 2, height=btn_h)
        btn_point = tkinter.Button(self.root, text='.', font=my_font, bg=btn_bg, fg=num_fg, bd=0,
                                   command=lambda: self.press_num('.'))
        btn_point.place(x=btn_w * 2, y=200 + btn_h * 4, width=btn_w, height=btn_h)
        btn_equ = tkinter.Button(self.root, text='=', bg='#982425', font=my_font, fg=num_fg, bd=0,
                                 command=lambda: self.press_equal())
        btn_equ.place(x=btn_w * 3, y=200 + btn_h * 4, width=btn_w, height=btn_h)
        self.root.mainloop()

    # 按下数字
    def press_num(self, num):
        if self.is_press_compute is True:  # 如果判断运算按键被按下
            self.result.set(0)  # 清空self.result
            self.is_press_compute = False
        # 判断界面的数字是否为0
        old_num = self.result.get()
        if old_num == '0':
            self.result.set(num)
        else:
            new_num = old_num + num
            self.result.set(new_num)

    # 按下运算符
    def press_compute(self, sign):
        num = self.result.get()
        self.all_press_lists.append(num)
        self.all_press_lists.append(sign)
        self.is_press_compute = True

        if sign == 'AC':  # 按下'C',清空列表内容,显示0
            self.all_press_lists.clear()
            self.result.set(0)
        if sign == 'b':  # 按下退格，当前数字逐步减一
            a = num[0:-1]
            self.all_press_lists.clear()
            self.result.set(a)

    # 获取运算结果
    def press_equal(self):
        cur_num = self.result.get()
        self.all_press_lists.append(cur_num)
        compute_str = ''.join(self.all_press_lists)
        try:
            calculate_result = eval(compute_str)
        except:
            calculate_result = 'bad parameter'
        self.result.set(calculate_result)  # 显示结果
        self.record.set(compute_str + "=")  # 显示运算过程
        self.all_press_lists.clear()  # 清空列表内容


if __name__ == '__main__':
    my_calculator = Calculator()
    my_calculator.main()
```

![效果图](https://pic.imgdb.cn/item/665c4146d9c307b7e9586fb5.png)