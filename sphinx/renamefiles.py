#  Copyright (c) 2023.
#  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
#  Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
#  Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
#  Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
#  Vestibulum commodo. Ut rhoncus gravida arcu.
import os
import re
import sys


def renameall(path):
    filemap = {}

    # 待修改文件夹
    fileList = os.listdir(path)
    # print("修改前：" + str(fileList))

    # 当前工作目录
    currentpath = os.getcwd()

    # 切换当前工作目录为待修改文件夹的位置
    os.chdir(path)
    name_num = 1
    for fileName in fileList:
        if fileName.split('.')[0].encode('utf-8').isalpha():
            continue
            
        if '.md' in fileName:
            os.rename(fileName, (str(name_num) + '_new.md'))
            filemap.update({fileName.split('.')[0]: str(name_num) + '_new'})
            name_num = name_num + 1

        if '.rst' in fileName:
            os.rename(fileName, (str(name_num) + '_new.rst'))
            filemap.update({fileName.split('.')[0]: str(name_num) + '_new'})
            name_num = name_num + 1
    print("---------------------------------------------------")

    # 切换为程序运行前的工作目录
    os.chdir(currentpath)
    # 刷新
    sys.stdin.flush()
    # print("修改后：" + str(os.listdir(path)))
    return filemap


def replace_md_name(file, filemap):
    file_data = ""
    with open(file, "r", encoding="utf-8") as f:
        for line in f:
            oldname = line.split('/')[-1].strip()
            if line.strip().startswith('../') and oldname in filemap:
                line = line.replace(oldname, filemap.get(oldname))

            file_data += line

    with open(file, "w", encoding="utf-8") as f:
        f.write(file_data)


def replace_rst_name(file, rstfilemap):
    file_data = ""
    flag = 0
    with open(file, "r", encoding="utf-8") as f:
        for line in f:
            if 'toctree' in line:
                flag = 1
            oldname = line.split('/')[-1].strip()
            if flag and oldname in rstfilemap and not line.strip().startswith('../'):
                line = line.replace(oldname, rstfilemap.get(oldname))

            file_data += line

    with open(file, "w", encoding="utf-8") as f:
        f.write(file_data)


def alter_md(path, filemap):
    fileList = os.listdir(path)

    os.chdir(path)
    for fileName in fileList:
        if '.rst' in fileName:
            replace_md_name(fileName, filemap)


def alter_rst(path, rstfilemap):
    fileList = os.listdir(path)

    os.chdir(path)
    for fileName in fileList:
        if '.rst' in fileName:
            replace_rst_name(fileName, rstfilemap)


if __name__ == "__main__":
    arg = sys.argv[1]
    current_directory = os.path.dirname(os.path.abspath(__file__))

    md_path = current_directory + '/source/content/zh/docs/%s' % arg
    filemap = renameall(md_path)
    print('修改前后文件名映射：', filemap)

    rst_path = current_directory + '/source/%s' % arg
    alter_md(rst_path, filemap)

    rstfilemap = renameall(rst_path)
    print('修改前后文件名映射：', rstfilemap)
    alter_rst(rst_path, rstfilemap)
