# workload级别索引推荐<a name="ZH-CN_TOPIC_0000002259758112"></a>

对于workload级别的索引推荐，用户可通过运行数据库外的脚本使用此功能，本功能将包含有多条DML语句的workload作为输入，最终生成一批可对整体workload的执行表现进行优化的索引。同时，本功能提供从日志中抽取业务数据SQL流水的功能。

## 前提条件<a name="zh-cn_topic_0000001714829281_section18679102695014"></a>

-   数据库状态正常、客户端能够正常连接。
-   当前执行用户下安装有gsql工具，该工具路径已被加入到PATH环境变量中。
-   具备Python3.7的环境。
-   若使用本功能提供的业务数据抽取功能，需提前将要收集的节点的GUC参数按如下设置：
    -   log\_min\_duration\_statement = 0
    -   log\_statement = 'all'

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >业务数据抽取完毕后，建议将上述GUC参数复原，否则容易导致日志文件膨胀。

## 业务数据抽取脚本使用步骤<a name="zh-cn_topic_0000001714829281_section183663372522"></a>

1.  <a name="zh-cn_topic_0000001714829281_li541620573521"></a>按前提条件中要求设置相关GUC参数。
2.  运行命令如下：

    ```
    gs_dbmind component extract_log [-h] [-d DATABASE] [-U DB_USER] [--start-time START_TIME] [--sql-amount SQL_AMOUNT] [--statement] [--max-reserved-period MAX_RESERVED_PERIOD] [--max-template-num MAX_TEMPLATE_NUM] [--json] log_dir file line_prefix
    ```

    其中的输入参数依次为：

    -   DATABASE：（可选）数据库名称，不指定时默认抽取所有数据库的数据。
    -   DB\_USER：（可选）用户名称，不指定时默认抽取所有用户的数据。
    -   START\_TIME：（可选）日志收集的开始时间，不指定时默认收集所有日志文件。
    -   SQL\_AMOUNT：（可选）收集日志中SQL数量的最大值，不指定时默认收集所有SQL。
    -   statement：（可选）表示收集gs\_log日志中statement标识开头的SQL，不指定时默认不收集。
    -   MAX\_RESERVED\_PERIOD：（可选）指定json模式下，增量收集日志中保留的模板的最大的更新时长，不指定时默认都保留，单位：天。
    -   MAX\_TEMPLATE\_NUM：（可选）指定json模式下保留的最大模板数量，不指定时默认都保留。
    -   json：（可选）指定收集日志的文件存储格式为SQL归一化后的json，不指定时默认为每条SQL占一行。
    -   log\_dir：gs\_log的存放目录。
    -   file：输出SQL流水文件的保存路径，即抽取出的业务数据存放的文件路径。
    -   line\_prefix：指定每条日志信息的前缀格式，可通过show log\_line\_prefix查询。

    使用示例：

    ```
    gs_dbmind component extract_log $GAUSSLOG/gs_log/dn_6001 sql_log.txt '%m %c %d %p %a %x %n %e' -d testdb -U omm --start_time '2021-07-06 00:00:00' --statement
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >若指定-d/-U参数，日志打印每条日志信息的前缀格式需包含%d、%u，若需要抽取事务，必须指定%p，详见log\_line\_prefix参数。max\_template\_num参数设置建议不超5000条，避免workload索引推荐执行时间过长。

3.  将[1](#zh-cn_topic_0000001714829281_li541620573521)中设置的GUC参数还原为设置前的值。

## 索引推荐脚本使用步骤<a name="zh-cn_topic_0000001714829281_section174995305018"></a>

1.  准备好包含有多条DML语句的文件作为输入的workload，文件中每条语句占据一行。用户可从数据库的离线日志中获得历史的业务语句。
2.  运行命令如下：

    ```
    gs_dbmind component index_advisor [-h] [--db-host DB_HOST] [-U DB_USER, --db-user DB_USER] [--schema SCHEMA] [--max-index-num MAX_INDEX_NUM] [--max-index-storage MAX_INDEX_STORAGE] [--multi-iter-mode] [--max-n-distinct MAX_N_DISTINCT] [--min-improved-rate MIN_IMPROVED_RATE] [--max-index-columns MAX_INDEX_COLUMNS] [--min-reltuples MIN_RELTUPLES] [--multi-node] [--json] [--driver] [--show-detail] [--show-benefits] [--advise_gsi] [--multi_thread_num MULTI_THREAD_NUM] db_port database file
    ```

    密码通过管道输入或交互式输入，对于免密用户，任意输入都可通过检验。命令行参数如[表1](#zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_table628178124515)所示：

    **表 1**  命令行参数

    <a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_table628178124515"></a>
    <table><thead align="left"><tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row162968174512"><th class="cellrowborder" valign="top" width="30.59305930593059%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1129138144517"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1129138144517"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1129138144517"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="55.285528552855276%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p2029181454"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p2029181454"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p2029181454"></a>参数说明</p>
    </th>
    <th class="cellrowborder" valign="top" width="14.12141214121412%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p6291382451"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p6291382451"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p6291382451"></a>取值范围</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row162915844513"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p132968134510"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p132968134510"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p132968134510"></a>-h</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p13822133894714"><a name="zh-cn_topic_0000001714829281_p13822133894714"></a><a name="zh-cn_topic_0000001714829281_p13822133894714"></a>（可选）返回帮助信息。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p8723124284716"><a name="zh-cn_topic_0000001714829281_p8723124284716"></a><a name="zh-cn_topic_0000001714829281_p8723124284716"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row1949293216101"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p493265764711"><a name="zh-cn_topic_0000001714829281_p493265764711"></a><a name="zh-cn_topic_0000001714829281_p493265764711"></a>--db-host DB_HOST</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p867441895310"><a name="zh-cn_topic_0000001714829281_p867441895310"></a><a name="zh-cn_topic_0000001714829281_p867441895310"></a>（可选）连接数据库的主机号。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p192324411812"><a name="zh-cn_topic_0000001714829281_p192324411812"></a><a name="zh-cn_topic_0000001714829281_p192324411812"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row19291888452"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p16296874513"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p16296874513"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p16296874513"></a>-U DB_USER</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p1624963015539"><a name="zh-cn_topic_0000001714829281_p1624963015539"></a><a name="zh-cn_topic_0000001714829281_p1624963015539"></a>（可选）连接数据库的用户名。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p322194491819"><a name="zh-cn_topic_0000001714829281_p322194491819"></a><a name="zh-cn_topic_0000001714829281_p322194491819"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row18298818455"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p82912864518"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p82912864518"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p82912864518"></a>--schema SCHEMA</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p22917874513"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p22917874513"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p22917874513"></a>（必选）模式名称。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p92194419180"><a name="zh-cn_topic_0000001714829281_p92194419180"></a><a name="zh-cn_topic_0000001714829281_p92194419180"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row9294819456"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p39132164912"><a name="zh-cn_topic_0000001714829281_p39132164912"></a><a name="zh-cn_topic_0000001714829281_p39132164912"></a>--max-index-num MAX_INDEX_NUM</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1429208164510"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1429208164510"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1429208164510"></a>（可选）最大的索引推荐数目。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p420154491810"><a name="zh-cn_topic_0000001714829281_p420154491810"></a><a name="zh-cn_topic_0000001714829281_p420154491810"></a>&gt;=1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row1020015014713"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p752083184913"><a name="zh-cn_topic_0000001714829281_p752083184913"></a><a name="zh-cn_topic_0000001714829281_p752083184913"></a>--max-index-storage MAX_INDEX_STORAGE</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p6457721145417"><a name="zh-cn_topic_0000001714829281_p6457721145417"></a><a name="zh-cn_topic_0000001714829281_p6457721145417"></a>（可选）最大的索引集合空间大小。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p1419744151813"><a name="zh-cn_topic_0000001714829281_p1419744151813"></a><a name="zh-cn_topic_0000001714829281_p1419744151813"></a>&gt;=1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row1836561411475"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p83111044104919"><a name="zh-cn_topic_0000001714829281_p83111044104919"></a><a name="zh-cn_topic_0000001714829281_p83111044104919"></a>--multi-iter-mode</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1236541444719"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1236541444719"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1236541444719"></a>（可选）算法模式，可通过是否设置该参数来切换算法。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p19191442186"><a name="zh-cn_topic_0000001714829281_p19191442186"></a><a name="zh-cn_topic_0000001714829281_p19191442186"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row1773402524719"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p13734825204719"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p13734825204719"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p13734825204719"></a>--max-n-distinct MAX_N_DISTINCT</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p104171118385"><a name="zh-cn_topic_0000001714829281_p104171118385"></a><a name="zh-cn_topic_0000001714829281_p104171118385"></a>（可选）（1/distinct数）的最大值，默认为0.01。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p618154471812"><a name="zh-cn_topic_0000001714829281_p618154471812"></a><a name="zh-cn_topic_0000001714829281_p618154471812"></a>0-1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row12794175884716"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p1579291385017"><a name="zh-cn_topic_0000001714829281_p1579291385017"></a><a name="zh-cn_topic_0000001714829281_p1579291385017"></a>--min-improved-rate MIN_IMPROVED_RATE</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p2041718181784"><a name="zh-cn_topic_0000001714829281_p2041718181784"></a><a name="zh-cn_topic_0000001714829281_p2041718181784"></a>（可选）索引的最大提升幅度，默认为0.1，即提升10%。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p15171344161817"><a name="zh-cn_topic_0000001714829281_p15171344161817"></a><a name="zh-cn_topic_0000001714829281_p15171344161817"></a>0-1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row124653514117"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p17529162695015"><a name="zh-cn_topic_0000001714829281_p17529162695015"></a><a name="zh-cn_topic_0000001714829281_p17529162695015"></a>--max-index-columns MAX_INDEX_COLUMNS</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p194173189810"><a name="zh-cn_topic_0000001714829281_p194173189810"></a><a name="zh-cn_topic_0000001714829281_p194173189810"></a>（可选）联合索引的最大列数（默认为4）。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p10161044111814"><a name="zh-cn_topic_0000001714829281_p10161044111814"></a><a name="zh-cn_topic_0000001714829281_p10161044111814"></a>&gt;=1</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_row1068864085011"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1568814095019"><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1568814095019"></a><a name="zh-cn_topic_0000001714829281_zh-cn_topic_0283137279_p1568814095019"></a>--min-reltuples MIN_RELTUPLES</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p44171018688"><a name="zh-cn_topic_0000001714829281_p44171018688"></a><a name="zh-cn_topic_0000001714829281_p44171018688"></a>（可选）表的最小行数，默认为10000。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p499654318184"><a name="zh-cn_topic_0000001714829281_p499654318184"></a><a name="zh-cn_topic_0000001714829281_p499654318184"></a>&gt;0</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row53226562502"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p7323195620503"><a name="zh-cn_topic_0000001714829281_p7323195620503"></a><a name="zh-cn_topic_0000001714829281_p7323195620503"></a>--multi-node</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p0323756105018"><a name="zh-cn_topic_0000001714829281_p0323756105018"></a><a name="zh-cn_topic_0000001714829281_p0323756105018"></a>（可选）指定是否为分布式数据库。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p10323185695017"><a name="zh-cn_topic_0000001714829281_p10323185695017"></a><a name="zh-cn_topic_0000001714829281_p10323185695017"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row182011217518"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p1282091275112"><a name="zh-cn_topic_0000001714829281_p1282091275112"></a><a name="zh-cn_topic_0000001714829281_p1282091275112"></a>--json</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p982014129514"><a name="zh-cn_topic_0000001714829281_p982014129514"></a><a name="zh-cn_topic_0000001714829281_p982014129514"></a>（可选）指定workload语句的文件路径格式为SQL归一化后的json。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p1982013128516"><a name="zh-cn_topic_0000001714829281_p1982013128516"></a><a name="zh-cn_topic_0000001714829281_p1982013128516"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row622616207516"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p82266208515"><a name="zh-cn_topic_0000001714829281_p82266208515"></a><a name="zh-cn_topic_0000001714829281_p82266208515"></a>--driver</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p3226202014514"><a name="zh-cn_topic_0000001714829281_p3226202014514"></a><a name="zh-cn_topic_0000001714829281_p3226202014514"></a>（可选）指定是否使用python驱动器连接数据库，默认gsql连接。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p1822611201517"><a name="zh-cn_topic_0000001714829281_p1822611201517"></a><a name="zh-cn_topic_0000001714829281_p1822611201517"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row11902162495115"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p9903102414516"><a name="zh-cn_topic_0000001714829281_p9903102414516"></a><a name="zh-cn_topic_0000001714829281_p9903102414516"></a>--show-detail</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p1290352415519"><a name="zh-cn_topic_0000001714829281_p1290352415519"></a><a name="zh-cn_topic_0000001714829281_p1290352415519"></a>（可选）是否显示当前推荐索引集合的详细优化信息。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p1490316246517"><a name="zh-cn_topic_0000001714829281_p1490316246517"></a><a name="zh-cn_topic_0000001714829281_p1490316246517"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row1829610291512"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p15296629165113"><a name="zh-cn_topic_0000001714829281_p15296629165113"></a><a name="zh-cn_topic_0000001714829281_p15296629165113"></a>--show-benefits</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p4296029175116"><a name="zh-cn_topic_0000001714829281_p4296029175116"></a><a name="zh-cn_topic_0000001714829281_p4296029175116"></a>（可选）是否显示收益信息。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p182961229105111"><a name="zh-cn_topic_0000001714829281_p182961229105111"></a><a name="zh-cn_topic_0000001714829281_p182961229105111"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row29153530312"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p182188579314"><a name="zh-cn_topic_0000001714829281_p182188579314"></a><a name="zh-cn_topic_0000001714829281_p182188579314"></a>--advise_gsi</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p152186578311"><a name="zh-cn_topic_0000001714829281_p152186578311"></a><a name="zh-cn_topic_0000001714829281_p152186578311"></a>（可选）集中式不支持。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p1621815571432"><a name="zh-cn_topic_0000001714829281_p1621815571432"></a><a name="zh-cn_topic_0000001714829281_p1621815571432"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row14417105611314"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p1621819573318"><a name="zh-cn_topic_0000001714829281_p1621819573318"></a><a name="zh-cn_topic_0000001714829281_p1621819573318"></a>--multi_thread_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p72180571317"><a name="zh-cn_topic_0000001714829281_p72180571317"></a><a name="zh-cn_topic_0000001714829281_p72180571317"></a>（可选）以多线程运行脚本，指定线程数。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p5218057638"><a name="zh-cn_topic_0000001714829281_p5218057638"></a><a name="zh-cn_topic_0000001714829281_p5218057638"></a>[1,64]</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row237933317518"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p12379133335120"><a name="zh-cn_topic_0000001714829281_p12379133335120"></a><a name="zh-cn_topic_0000001714829281_p12379133335120"></a>db_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p737919334519"><a name="zh-cn_topic_0000001714829281_p737919334519"></a><a name="zh-cn_topic_0000001714829281_p737919334519"></a>（必选）连接数据库的端口号。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p2379203317514"><a name="zh-cn_topic_0000001714829281_p2379203317514"></a><a name="zh-cn_topic_0000001714829281_p2379203317514"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row1981317361516"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p1981413363511"><a name="zh-cn_topic_0000001714829281_p1981413363511"></a><a name="zh-cn_topic_0000001714829281_p1981413363511"></a>database</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p98141360511"><a name="zh-cn_topic_0000001714829281_p98141360511"></a><a name="zh-cn_topic_0000001714829281_p98141360511"></a>（必选）连接数据库的名字。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p181412365518"><a name="zh-cn_topic_0000001714829281_p181412365518"></a><a name="zh-cn_topic_0000001714829281_p181412365518"></a>-</p>
    </td>
    </tr>
    <tr id="zh-cn_topic_0000001714829281_row1777318387521"><td class="cellrowborder" valign="top" width="30.59305930593059%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0000001714829281_p477393875212"><a name="zh-cn_topic_0000001714829281_p477393875212"></a><a name="zh-cn_topic_0000001714829281_p477393875212"></a>file</p>
    </td>
    <td class="cellrowborder" valign="top" width="55.285528552855276%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0000001714829281_p17773163865211"><a name="zh-cn_topic_0000001714829281_p17773163865211"></a><a name="zh-cn_topic_0000001714829281_p17773163865211"></a>（必选）包含workload语句的文件路径。</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.12141214121412%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0000001714829281_p16773153811522"><a name="zh-cn_topic_0000001714829281_p16773153811522"></a><a name="zh-cn_topic_0000001714829281_p16773153811522"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

    例如：

    ```
    gs_dbmind component index_advisor 6001 testdb tpcds_log.txt --schema public --max_index_num 10
    ```

    结果在屏幕输出，包含候选索引、推荐索引、已创建索引、无用索引（该给定的workload里面没有用到系统中的索引列表）、冗余索引（当前系统中重复创建的索引）以及历史有效索引，如下：

    ```
    ########################## Generate candidate indexes(FQS GSI) ###########################
    No candidate indexes generated!
    ############################### Generate candidate indexes ###############################
    table:  public.catalog_returns columns:  cr_return_amount
    table:  public.catalog_sales columns:  cs_item_sk
    table:  public.catalog_sales columns:  cs_sold_date_sk
    table:  public.customer_address columns:  ca_city type:  global
    table:  public.customer_address columns:  ca_state, ca_county type:  global
    table:  public.customer_demographics columns:  cd_demo_sk type:  local
    table:  public.date_dim columns:  d_month_seq type:  global
    table:  public.date_dim columns:  d_year type:  global
    table:  public.date_dim columns:  d_date_sk type:  local
    table:  public.date_dim columns:  d_month_seq type:  local
    table:  public.date_dim columns:  d_year type:  local
    table:  public.item columns:  i_class type:  global
    table:  public.item columns:  i_manager_id, i_brand_id type:  global
    table:  public.item columns:  i_manager_id, i_category_id type:  global
    table:  public.item columns:  i_manufact_id type:  global
    table:  public.item columns:  i_product_name type:  global
    table:  public.store_returns columns:  sr_cdemo_sk
    table:  public.store_returns columns:  sr_reason_sk
    table:  public.store_returns columns:  sr_return_amt
    table:  public.store_sales columns:  ss_item_sk, ss_sold_date_sk
    table:  public.store_sales columns:  ss_store_sk
    table:  public.time_dim columns:  t_time_sk type:  local
    table:  public.web_returns columns:  wr_return_amt
    table:  public.web_sales columns:  ws_item_sk
    table:  public.web_sales columns:  ws_web_page_sk, ws_ship_hdemo_sk, ws_sold_time_sk
    ############################### Determine optimal indexes ###############################
    CREATE INDEX idx_catalog_sales_cs_item_sk ON public.catalog_sales(cs_item_sk);
    CREATE INDEX idx_catalog_sales_cs_sold_date_sk ON public.catalog_sales(cs_sold_date_sk);
    CREATE INDEX idx_customer_demographics_local_cd_demo_sk ON public.customer_demographics(cd_demo_sk) local;
    CREATE INDEX idx_item_global_i_manufact_id ON public.item(i_manufact_id) global;
    CREATE INDEX idx_store_returns_sr_cdemo_sk ON public.store_returns(sr_cdemo_sk);
    CREATE INDEX idx_store_sales_ss_item_sk_ss_sold_date_sk ON public.store_sales(ss_item_sk, ss_sold_date_sk);
    CREATE INDEX idx_store_sales_ss_store_sk ON public.store_sales(ss_store_sk);
    CREATE INDEX idx_web_sales_ws_web_page_sk_ws_ship_hdemo_sk_ws_sold_time_sk ON public.web_sales(ws_web_page_sk, ws_ship_hdemo_sk, ws_sold_time_sk);
    ################################# Created indexes ###############################
    public: CREATE UNIQUE INDEX ship_mode_pkey ON ship_mode USING btree (sm_ship_mode_sk) LOCAL(PARTITION p_list_15_sm_ship_mode_sk_idx, PARTITION p_list_14_sm_ship_mode_sk_idx, PARTITION p_list_13_sm_ship_mode_sk_idx, PARTITION p_list_12_sm_ship_mode_sk_idx, PARTITION p_list_11_sm_ship_mode_sk_idx, PARTITION p_list_10_sm_ship_mode_sk_idx, PARTITION p_list_9_sm_ship_mode_sk_idx, PARTITION p_list_8_sm_ship_mode_sk_idx, PARTITION p_list_7_sm_ship_mode_sk_idx, PARTITION p_list_6_sm_ship_mode_sk_idx, PARTITION p_list_5_sm_ship_mode_sk_idx, PARTITION p_list_4_sm_ship_mode_sk_idx, PARTITION p_list_3_sm_ship_mode_sk_idx, PARTITION p_list_2_sm_ship_mode_sk_idx, PARTITION p_list_1_sm_ship_mode_sk_idx)  TABLESPACE pg_default;
    public: CREATE INDEX temptable_int2_int3_int4_idx ON temptable USING btree (int2, int3, int4) TABLESPACE pg_default;
    public: CREATE INDEX temptable_int2_int3_idx ON temptable USING btree (int2, int3) TABLESPACE pg_default;
    public: CREATE INDEX temptable_int1_int2_int3_idx ON temptable USING btree (int1, int2, int3) TABLESPACE pg_default;
    public: CREATE INDEX temptable_int1_int2_idx ON temptable USING btree (int1, int2) TABLESPACE pg_default;
    public: CREATE INDEX temptable_int1_idx ON temptable USING btree (int1) TABLESPACE pg_default;
    ############################### Current workload useless indexes ###############################
    DROP INDEX temptable_int2_int3_int4_idx;
    DROP INDEX temptable_int2_int3_idx;
    DROP INDEX temptable_int1_int2_int3_idx;
    DROP INDEX temptable_int1_int2_idx;
    DROP INDEX temptable_int1_idx;
    ############################### Redundant indexes ###############################
    DROP INDEX public.test1_age_idx;(CREATE INDEX test1_age_idx ON test1 USING btree (age) TABLESPACE pg_default)
    Related indexes:
            CREATE INDEX test1_age_id_idx ON test1 USING btree (age, id) TABLESPACE pg_default
    
    DROP INDEX public.test1_id_idx;(CREATE INDEX test1_id_idx ON test1 USING btree (id) TABLESPACE pg_default)
    Related indexes:
            CREATE INDEX test1_id_age_idx ON test1 USING btree (id, age) TABLESPACE pg_default
    ############################### Historical effective indexes ###############################
    CREATE INDEX idx_temptable_int2 ON ztt_test.temptable(int2);
    CREATE INDEX idx_item_i_manufact_id ON public.item(i_manufact_id);
    CREATE INDEX idx_item_i_color ON public.item(i_color);
    ```

>![](public_sys-resources/icon-note.gif) **说明：** 
>-   如前文所述，“Current workload useless indexes”、“Redundant indexes”分别表示无用索引和冗余索引，判断依据是给定的workload。由于workload中的SQL语句可能出现缺失（例如由日志报错、没有捕获到等原因导致的），故该结论仅供提示，用户需要根据自己的业务逻辑进行排查，防止错误删除。
>-   与单query索引推荐相同，本功能暂不支持段页式表、普通视图、物化视图、全局临时表、二级分区表以及密态数据库。

