# FLASHBACK TABLE

## 功能描述
FLASHBACK即闪回功能，允许用户在不需要备份的情况下，快速恢复误删除或误修改的数据。

## 注意事项
- 执行需要有FLASHBACK权限，闪回其他用户的表需要申请FLASHBACK ANY TABLE权限
- FLASHBACK TABLE可以从回收站闪回和UNDO日志闪回。TRUNCATE/DROP的表从回收站闪回，新增更新的对象数据从UNDO闪回

## 语法格式
```
FLASHBACK TABLE [schema_name.]table_name
TO { 
    SCN scn_expr 
    | TIMESTAMP ts_expr 
    | BEFORE {DROP [RENAME TO table_name] | TRUNCATE FORCE}
}
```

## 参数说明
- [schema_name.]table_name： 需要闪回的表。物化视图、外部表、系统表、独立分区、子分区表无法闪回，DDL操作变更表结构后无法从UNDO闪回
- SCN scn_expr: 从UNDO闪回，scn_expr是要闪回的时间点对应的SCN号
- TIMESTAMP ts_expr: 从UNDO闪回，ts_expr是要闪回的时间点对应的时间戳
- BEFORE DROP: 闪回已删除的表
- BEFORE DROP RENAME TO： 闪回已删除的表并指定一个新的名称
- BEFORE TRUNCATE FORCE： 闪回到truncate之前, TRUNCATE PURGE/DROP STORAGE/REUSE STORAGE的表无法闪回

## 示例
```SQL

-- 恢复drop的表
flashback table tb1 to before drop;

-- 恢复drop的表并重命名
flashback table tb1 to before drop rename to new_tb1;

-- 恢复truncate的表
flashback table tb1 to before truncate force;

-- 查询回收站
SELECT * FROM SYS_RECYCLEBIN;

-- 通过SCN闪回
flashback table tb1 to scn 138953777287169;

-- 从指定时间闪回
flashback table tb1 to timestamp to_date('2025-12-23 21:11:29');

```

## 相关视图
### SYS_RECYCLEBIN
- ID：对象ID
- NAME： 对象名称
- USER#： 用户ID
- ORG_NAME：原始对象名称
- PARTITION_NAME：对象分区名称
- TYPE#：对象类型。0-5依次代表 表、索引、LOB、分区表、分区索引、分区LOB
- OPERATION#：操作类型
- SPACE#：表空间ID
- ENTRY：入口页面ID     
- FLAGS：0x0001：是否闪回，0x0010：是否purge，0x0100：是否约束，0x1000：是否encode
- ORG_SCN：对象创建SCN
- REC_SCN：对象回收SCN 
- TCHG_SCN：对象定义改变SCN 
- BASE_ID：基对象ID
- PURGE_ID：对象ID

