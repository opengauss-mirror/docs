# BFILE类型函数

-   bfilename\(location text, filename text\)

    描述：根据目录对象名和文件名生成一个bfile类型对象。location的值必须是DIRECTORY对象名，filename的值为文件名。

    参数类型：text

    返回值类型：bfile

    示例：
    ```
    CREATE or REPLACE DIRECTORY "sdf sfa" AS '/tmp';
    select bfilename('sdf sfa', 'as df .txt');
                 bfilename              
    ------------------------------------
     bfilename('sdf sfa', 'as df .txt')
    (1 row)

    ```


-   bfilein\(cstring\)

    描述：解析传入的字符串，生成一个bfile类型对象。传入的字符串有固定格式要求，必须是'bfilename(str1, str2)'。

    参数类型：cstring

    返回值类型：bfile

    示例：
    ```
    --参数格式不对
    select bfilein('bfilenamell(sdf,asdf)');
    ERROR:  invalid input syntax for bfile: "bfilenamell(sdf,asdf)"
    CONTEXT:  referenced column: bfilein

    --参数格式正确
    CREATE or REPLACE DIRECTORY "bfile_test_dir" AS '/tmp';
    select bfilein('bfilename(bfile_test_dir,regress_bfile.txt)');
                         bfilein                      
    --------------------------------------------------
     bfilename('bfile_test_dir', 'regress_bfile.txt')
    (1 row)

    ```


-   bfileout\(bfile\)

    描述：将传入的bfile类型对象转换成一个cstring类型的字符串。

    参数类型：bfile

    返回值类型：cstring

    示例：
    ```
    CREATE or REPLACE DIRECTORY "bfile_test_dir" AS '/tmp';
    select bfileout(bfilename('bfile_test_dir','regress_bfile.txt'));
                         bfileout                     
    --------------------------------------------------
     bfilename('bfile_test_dir', 'regress_bfile.txt')
    (1 row)

    ```


-   bfilerecv\(internal\)

    描述：将内部类型internal转换成一个bfile类型对象。因为internal类型是一个内部类型，无法通过外部传值，所以bfilerecv函数无法通过外部调用。

    参数类型：internal

    返回值类型：bfile

    示例：
    ```
    select bfilerecv(' ');
    ERROR:  cannot accept a value of type internal
    LINE 1: select bfilerecv(' ');
                             ^

    ```


-   bfilesend\(bfile\)

    描述：将传入的bfile类型对象一个internal类型对象。

    参数类型：bfile

    返回值类型：internal

    示例：
    ```
    CREATE or REPLACE DIRECTORY "bfile_test_dir" AS '/tmp';
    select bfilesend(bfilename('bfile_test_dir','regress_bfile.txt'));
                                      bfilesend                                       
    --------------------------------------------------------------------------------------
     \x0000000f000000126266696c655f746573745f64697200726567726573735f6266696c652e74787400
    (1 row)

    ```
