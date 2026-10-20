---
description: 本文介绍 openGauss 为MOT创建索引 的相关内容与操作方法。
keywords: [openGauss, 为MOT创建索引, 数据库管理]
---

# 为MOT创建索引

支持标准的openGauss创建和删除索引语句。

例如：

```
create index  text_index1 on test(x) ;
```

创建一个用于TPC-C的ORDER表，并创建索引：

```
create FOREIGN table bmsql_oorder ( 
  o_w_id       integer      not null, 
  o_d_id       integer      not null, 
  o_id         integer      not null, 
  o_c_id       integer not null, 
  o_carrier_id integer,          
  o_ol_cnt     integer, 
  o_all_local  integer, 
  o_entry_d    timestamp, 
  primary key (o_w_id, o_d_id, o_id) 
); 
create index  bmsql_oorder_index1 on bmsql_oorder(o_w_id, o_d_id, o_c_id, o_id) ;
```

>[!NOTE]说明 
>在MOT名字之前不需要指定FOREIGN关键字，因为它仅用于创建和删除表的命令。

有关MOT索引限制，请参见“MOT SQL覆盖和限制”的索引部分内容。
