# workload级别索引推荐<a name="ZH-CN_TOPIC_0296549248"></a>

对于workload级别的索引推荐，用户可通过运行数据库外的脚本使用此功能，本功能将包含有多条DML语句的workload作为输入，最终生成一批可对整体workload的执行表现进行优化的索引。

## 前提条件<a name="section18679102695014"></a>

-   数据库状态正常、客户端能够正常连接。
-   当前执行用户下安装有gsql工具，该工具路径已被加入到PATH环境变量中。
-   具备Python3.6+的环境。

## 使用步骤<a name="section174995305018"></a>

1.  准备好包含有多条DML语句的文件作为输入的workload，文件中每条语句占据一行。用户可从数据库的离线日志中获得历史的业务语句。
2.  运行python脚本index\_advisor\_workload.py，命令如下：

    ```
    python index_advisor_workload.py [p PORT] [d DATABASE] [f FILE] [--h HOST] [-U USERNAME] [-W PASSWORD]
    [--max_index_num MAX_INDEX_NUM] [--multi_iter_mode] 
    ```

    其中的输入参数依次为：

    -   PORT：连接数据库的端口号。
    -   DATABASE：连接数据库的名字。
    -   FILE：包含workload语句的文件路径。
    -   HOST：（可选）连接数据库的主机号。
    -   USERNAME：（可选）连接数据库的用户名。
    -   PASSWORD：（可选）连接数据库用户的密码。
    -   MAX\_INDEX\_NUM：（可选）最大的索引推荐数目。
    -   multi\_iter\_mode：（可选）算法模式，可通过是否设置该参数来切换算法。例如：

        ```
        python index_advisor_workload.py 6001 postgres tpcc_log.txt --max_index_num 10 --multi_iter_mode
        ```

    推荐结果为一批索引，以多个创建索引语句的格式显示在屏幕上，结果示例。

    ```
    create index ind0 on bmsql_stock(s_i_id,s_w_id);
    create index ind1 on bmsql_customer(c_w_id,c_id,c_d_id);
    create index ind2 on bmsql_order_line(ol_w_id,ol_o_id,ol_d_id);
    create index ind3 on bmsql_item(i_id);
    create index ind4 on bmsql_oorder(o_w_id,o_id,o_d_id);
    create index ind5 on bmsql_new_order(no_w_id,no_d_id,no_o_id);
    create index ind6 on bmsql_customer(c_w_id,c_d_id,c_last,c_first);
    create index ind7 on bmsql_new_order(no_w_id);
    create index ind8 on bmsql_oorder(o_w_id,o_c_id,o_d_id);
    create index ind9 on bmsql_district(d_w_id);
    ```


