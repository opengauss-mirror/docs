# 开发流程<a name="ZH-CN_TOPIC_0000001166619840"></a>

编译并且链接一个libpq的源程序，需要做下面的一些事情：

1.  解压相应的发布包（如openGauss-\*.\*.0-\*\*\*-64bit-Libpq.tar.gz）文件，其中include文件夹下的头文件为所需的头文件，lib文件夹中为所需的libpq库文件。

    >![](public_sys-resources/icon-note.png) **说明：** 
    >除libpq-fe.h外，include文件夹下默认还存在头文件postgres\_ext.h，gs\_thread.h，gs\_threadlocal.h，这三个头文件是libpq-fe.h的依赖文件。

2.  包含libpq-fe.h头文件：

    ```
    #include <libpq-fe.h>
    ```

3.  通过-I_ directory_选项，提供头文件的安装位置（有些时候编译器会查找缺省的目录，因此可以忽略这些选项）。如：

    ```
    gcc -I (头文件所在目录) -L (libpq库所在目录) testprog.c -lpq
    ```

4.  如果要使用制作文件\(makefile\)，向CPPFLAGS、LDFLAGS、LIBS变量中增加如下选项：

    ```
    CPPFLAGS += -I (头文件所在目录)
    LDFLAGS += -L (libpq库所在目录)
    LIBS += -lpq
    ```


