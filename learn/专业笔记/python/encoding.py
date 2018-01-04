#!/usr/bin/env python3
#-*- coding:utf-8 -*-
print("中文测试正常")
s1 = 72 
s2 = 85
print('grade growth is %.2f' % (((s2 - s1)/s1)))
# s = 'python-中文'
# print(s)
# b = s.encode('utf-8')
# print(b)
# print(b.decode('utf-8'))
print('\n')
age = 3
if age > 18:
	print('your age is', age)
	print('adult')
elif age > 6:
	print('teenager')
else:
	print('your age is',age)
	print('kid')
print("\n")
print("if、else和elif执行顺序问题")
age = 18	
if age > 0 :
	print('your age is', age)
	print('kid')
elif age > 10:
	print('teenager')
else:
	print('your age is',age)
	print('adult')
print('\n')
print('请输入你的年龄：')
age = input()
age = int(age)
if 2016 - age >= 2000:
	print('Hi00后')
elif 2016- age >= 1990:
	print('Hello90后')
else:
	print("你好，80后")
print('\n')
print('请输入你的体重：')
s = input()
weight = int(s)
print('请输入你的身高：')
s1 = input()
height = float(s1)
if weight/(height*height) < 18.5:
	print("过轻")
elif weight/(height*height) < 25:
	print("正常")
elif weight/(height*height) < 28:
	print("过重")
elif weight/(height*height) < 32:
	print("肥胖")
else:
	print("严重肥胖")
	