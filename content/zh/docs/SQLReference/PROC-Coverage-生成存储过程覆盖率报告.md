# 生成存储过程覆盖率报告

基于coverage.proc_coverage数据包汇总，生成存储过程覆盖率报告。

## 前提条件

参数[enable_proc_coverage](../DatabaseReference/%E5%85%B6%E5%AE%83%E9%80%89%E9%A1%B9.md#section14683125861213)为on时。

## 操作步骤

1. 设置[enable_proc_coverage](../DatabaseReference/%E5%85%B6%E5%AE%83%E9%80%89%E9%A1%B9.md#section14683125861213)参数为on，参数为SUSET类型，参照[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)方式设置。
2. 执行需要测试覆盖率的存储过程，会在postgres库下的[coverage.proc_coverage](./coverage-proc_coverage.md)表中记录覆盖率相关信息。schema pg_catalog下的存储过程不会被记录覆盖率。
3. 执行如下命令，可在本地生成HTML格式的存储过程覆盖率报告。
   1. 连接postgres库。
   2. 设置[enable_proc_coverage](../DatabaseReference/%E5%85%B6%E5%AE%83%E9%80%89%E9%A1%B9.md#section14683125861213)参数为on，参数为SUSET类型，参照[表1](../DatabaseAdministrationGuide/重设参数.md#zh-cn_topic_0237121562_zh-cn_topic_0059777490_t91a6f212010f4503b24d7943aed6d846)方式设置。
   3. 执行如下命令，设置报告格式。\a: 不显示表行列符号， \t: 不显示列名 ，\o: 指定输出文件。
      ```sql
      gsql> \a      
      gsql> \t 
      gsql> \o /home/om/coverage.html
      ```
   4. 执行函数[generate_procoverage_report](./%E5%85%B6%E5%AE%83%E5%87%BD%E6%95%B0.md#section14683125861213)函数，生成HTML格式的存储过程覆盖率报告。
      ```sql
      gsql> select generate_procoverage_report(begin_id, en_id);
      ```
      |参数|说明|取值范围|
      |--|--|--|
      |begin_id|生成存储过程覆盖率报告的起始id（包含）|bigint，大于0，begin_id大于end_id；begin_id与end_id同为-1时，生  成所有记录的存储过程覆盖率报告|
      |end_id|生成存储过程覆盖率报告的结束id（包含）|bigint，大于0，begin_id大于end_id；begin_id与end_id同为-1时，生成  所有记录的存储过程覆盖率报告|
   5. 执行如下命令关闭输出选项及格式化输出命令。
       ```sql
      gsql> \o     
      gsql> \a
      gsql> \t
      ```
4. 根据需要在输出位置查看html文件。



   
