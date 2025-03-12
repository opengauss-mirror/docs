# 使用gsql元命令导入数据

gsql工具提供了元命令\\copy进行数据导入。

## \\copy命令<a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_section58856731203635"></a>

\\copy命令格式以及说明参见[表 1 \\copy元命令说明](#zh-cn_topic_0237121136_zh-cn_topic_0117407672_table65007762203657)。

**表 1**  \\copy元命令说明

<a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_table65007762203657"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_row12923480203657"><th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.1"><p id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p25975961203657"><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p25975961203657"></a><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p25975961203657"></a>语法</p>
</th>
<th class="cellrowborder" valign="top" width="50%" id="mcps1.2.3.1.2"><p id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p23678091203657"><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p23678091203657"></a><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p23678091203657"></a>说明</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_row11776229203657"><td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.1 "><p id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p17687276203715"><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p17687276203715"></a><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p17687276203715"></a>\copy { table [ ( column_list ) ] |</p>
<p id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p24967761203715"><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p24967761203715"></a><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p24967761203715"></a>( query ) } { from | to } { filename |</p>
<p id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p23383257203715"><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p23383257203715"></a><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p23383257203715"></a>stdin | stdout | pstdin | pstdout }</p>
<p id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p9122727203715"><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p9122727203715"></a><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p9122727203715"></a>[parallel integer] [ with ] [ binary ] [ delimiter</p>
<p id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p14995683203715"><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p14995683203715"></a><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p14995683203715"></a>[ as ] 'character' ] [without escaping] [ null [ as ] 'string' ]</p>
<p id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p743422203715"><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p743422203715"></a><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p743422203715"></a>[ csv [ header ] [ quote [ as ]</p>
<p id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p6690801203715"><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p6690801203715"></a><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p6690801203715"></a>'character' ] [ escape [ as ] 'character' ]</p>
<p id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p60217213203715"><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p60217213203715"></a><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p60217213203715"></a>[ force quote column_list | * ] [ force</p>
<p id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p5084012203715"><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p5084012203715"></a><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p5084012203715"></a>not null column_list ] ]</p>[compatible _illegal_chars]
</td>
<td class="cellrowborder" valign="top" width="50%" headers="mcps1.2.3.1.2 "><p id="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p4223544411233"><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p4223544411233"></a><a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_p4223544411233"></a>在任何gsql客户端登录数据库成功后，可以使用该命令进行数据的导入/导出。但是与SQL的COPY命令不同，该命令读取/写入的文件是本地文件，而非数据库服务器端文件；所以，要操作的文件的可访问性、权限等，都是受限于本地用户的权限。</p>
<div class="note" id="zh-cn_topic_0237121136_note1924115273417"><a name="zh-cn_topic_0237121136_note1924115273417"></a><a name="zh-cn_topic_0237121136_note1924115273417"></a><span class="notetitle"> 说明： </span><div class="notebody"><p id="zh-cn_topic_0237121136_p1925145210348"><a name="zh-cn_topic_0237121136_p1925145210348"></a><a name="zh-cn_topic_0237121136_p1925145210348"></a>\COPY只适合小批量、格式良好的数据导入，不会对非法字符做预处理，也无容错能力，无法适用于含有异常数据的场景。导入数据应优先选择COPY。</p>
<p id="p156755320558"><a name="p156755320558"></a><a name="p156755320558"></a>\COPY 可以指定数据导入时的客户端数量，从而实现数据文件的并行导入，目前并发数范围为[1, 8]。</p>
<p id="p65691446135618"><a name="p65691446135618"></a><a name="p65691446135618"></a>\COPY并行导入目前存在以下约束：临时表的并行导入不支持、在事务内的并行导入不支持、对二进制文件的并行导入不支持、数据导入支持AES128加密时不支持以及COPY选项中存在EOL。在这些情况下，即使指定了parallel参数，仍然会走非并行流程。</p>
<p id="p65691446135619"><a name="p65691446135619"></a><a name="p65691446135619"></a>\COPY支持并行导入INTERVAL分区表，但受自治事务并发参数影响，如max_concurrent_autonomous_transactions为0，或自治事务并发数已全部占满时，根据插入数据量和分区数可能会执行成功或发生锁等待卡住。</p>
</div></div>
</td>
</tr>
</tbody>
</table>

## 参数说明<a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_section5126610110100"></a>

-   table

    表的名称（可以有模式修饰）。

    取值范围：已存在的表名。

-   column\_list

    可选的待拷贝字段列表。

    取值范围：任意字段。如果没有声明字段列表，将使用所有字段。

-   query

    其结果将被拷贝。

    取值范围：一个必须用圆括弧包围的SELECT或VALUES命令。

-   filename

    文件的绝对路径。执行copy命令的用户必须有此路径的写权限。

-   stdin

    声明输入是来自标准输入。

-   stdout

    声明输出打印到标准输出。

-   pstdin

    声明输入是来自gsql的标准输入。

-   pstout
-   声明输出打印到gsql的标准输出。
-   binary

    使用二进制格式存储和读取，而不是以文本的方式。在二进制模式下，不能声明DELIMITER、NULL、CSV选项。指定binary类型后，不能再通过option或copy\_option指定CSV、FIXED、TEXT等类型。

-   delimiter \[ as \] 'character'

    指定数据文件行数据的字段分隔符。

    取值范围：支持多字符分隔符，但分隔符长度不能超过10个字节。

    默认值：

    -   TEXT格式的默认分隔符是水平制表符（tab）。
    -   CSV格式的默认分隔符为逗号字符“,”。
    -   FIXED格式没有分隔符。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-   分隔符中不能包含\\r或\\n。
        >-   分隔符不能和null参数相同。
        >-   CSV格式数据的分隔符不能和quote参数相同。
        >-   TEXT格式数据的分隔符不能包含如下字符中任意字符： \\.abcdefghijklmnopqrstuvwxyz0123456789。
        >-   数据文件中单行数据长度需<1GB，如果分隔符较长且数据列较多的情况下，会影响导出有效数据的长度。
        >-   分隔符推荐使用多字符和不可见字符。多字符例如'\$^&'，设置方法为delimiter '$^&'；不可见字符例如0x07，0x08，0x1b等，设置方法为 delimiter E'\\x1b'。

-   null \[ as \] 'string'

    用来指定数据文件中空值的表示。

     取值范围：支持指定多字符，最大为100个字符。

    默认值：

    -   CSV格式下默认值是一个没有引号的空字符串。
    -   在TEXT格式下默认值是\\N（包括'\\\\'和'N'两个字符）。

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >-   null值不能包含\\r或\\n。
        >-   null值不能和分隔符、quote参数相同。
        >-   在CSV格式下，COPY TO导出模式下，为避免数据混淆，当null值与字段内的取值相同时，会将字段数据用quote字符包裹，以作区分。

-   header

    指定导出数据文件是否包含标题行，标题行一般用来描述表中每个字段的信息。header只能用于CSV，FIXED格式的文件中。

    在导入数据时，如果header选项为on，则数据文本第一行会被识别为标题行，会忽略此行。如果header为off，而数据文件中第一行会被识别为数据。

    在导出数据时，如果header选项为on，则需要指定fileheader。fileheader是指定导出数据包含标题行的定义文件。如果header为off，则导出数据文件不包含标题行。

    取值范围：true/on，false/off。

    默认值：false

-   quote \[ as \] 'character'

    CSV格式文件下的引号字符。

    默认值：""。

    >![](public_sys-resources/icon-note.png) **说明：**
    >   
    >-   quote参数不能和分隔符、null参数相同。  
    >-   quote参数只能是单字节的字符。  
    >-   推荐不可见字符作为quote，例如0x07、0x08、0x1b等。

-   escape \[ as \] 'character'

    CSV格式下，用来指定逃逸字符，逃逸字符后的字符会被当作字段内容处理。逃逸字符只能指定为单字节字符。

    默认值：双引号。当与quote值相同时，会被替换为'\\0'。

-   force quote column\_list | \*

    在CSV COPY TO模式下，强制在每个声明的字段周围对所有非NULL值都使用引号包围。NULL输出不会被引号包围。

    取值范围：已存在的字段。

-   force not null column\_list

    在CSV COPY FROM模式下，指定的字段输入不能为空。

    取值范围：已存在的字段。

-   force null column\_list

    在CSV COPY FROM模式下，指定的字段输入表示空值的字符串设为空。

    取值范围：已存在的字段。

-   without escaping

    在TEXT格式中，不对'\\'和后面的字符进行转义。

    取值范围：仅支持TEXT格式。

-   compatible \_illegal\_chars

    导入非法字符容错参数。此语法仅对COPY FROM导入有效。

    取值范围：true/on，false/off。

    -   参数为true/on，则导入时遇到非法字符进行容错处理，非法字符转换后入库，不报错，不中断导入。
    -   参数为false/off，导入时遇到非法字符进行报错，中断导入。

    缺省值：false/off

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >导入非法字符容错规则如下：
    >
    >（1）对于'\\0'，容错后转换为空格；
    >
    >（2）对于其他非法字符，容错后转换为问号；
    >
    >（3）若compatible\_illegal\_chars为true/on标识导入时对于非法字符进行容错处理，则若NULL、DELIMITER、QUOTE、ESCAPE设置为空格或问号则会通过如"illegal chars conversion may confuse COPY escape 0x20"等报错信息提示用户修改可能引起混淆的参数以避免导入错误。
## 任务示例<a name="zh-cn_topic_0237121136_zh-cn_topic_0117407672_section49087436203946"></a>

1. 创建目标表a。

   ```
   CREATE TABLE a(a int);
   ```

2. 导入数据。

   从stdin拷贝数据到目标表a。

   ```
   \copy a from stdin;
   ```

   出现\>\>符号提示时，输入数据，输入\\.时结束。

   ```
   Enter data to be copied followed by a newline.
   End with a backslash and a period on a line by itself.
   >> 1
   >> 2
   >> \.
   ```

   查询导入目标表a的数据。

   ```
   openGauss=# SELECT * FROM a;
    a 
   ---
    1
    2
   (2 rows)
   ```

   从本地文件拷贝数据到目标表a。假设存在本地文件/home/omm/2.csv。

   -   分隔符为“，”。
   -   在导入过程中，若数据源文件比外表定义的列数多，则忽略行尾多出来的列。

   ```
   \copy a FROM '/home/omm/2.csv' WITH (delimiter',',IGNORE_EXTRA_DATA 'on');
   ```



