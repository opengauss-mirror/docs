# DROP TABLESPACE

## 功能描述

删除表空间

## 注意事项

- 删除表空间需要拥有DRIOP TABLESPACE权限
- MOUNT模式下不能删除表空间
- 不能删除system、unto、temp表空间
- 删除表空间保留数据文件时会将数据文件添加delete后缀，如需释放空间需要手动删除

## 语法格式

**stmt:**

```
DROP TABLESPACE name
    [INCLUDING CONTENTS
        [{AND|KEEP} DATAFILES [CASCADE CONSTRAINTS]]
    ]
```

## 参数说明

- 不指定INCLUDING：删除表空间时保留数据文件，如果待删除的表空间存在表索引等对象或者是用户默认表空间，删除会报错
- INCLUDING CONTENTS AND DATAFILES: 删除表空间时数据文件
- INCLUDING CONTENTS KEEP DATAFILES: 删除表空间时保留数据文件
- CASCADE CONSTRAINTS: 删除表空间时删除相关的级联

## 示例

```SQL
-- 1. 基本删除表空间（仅删除元数据，保留物理文件）
DROP TABLESPACE tbs1;

-- 2. 删除表空间、内容和数据文件
DROP TABLESPACE tbs2 INCLUDING CONTENTS;

-- 3. 删除表空间、内容和数据文件
DROP TABLESPACE tbs3 INCLUDING CONTENTS AND DATAFILES;

-- 4. 删除表空间、内容但保留数据文件
DROP TABLESPACE tbs4 INCLUDING CONTENTS KEEP DATAFILES;

-- 5. 删除表空间及其所有内容、数据文件和级联约束
DROP TABLESPACE tbs5 INCLUDING CONTENTS AND DATAFILES CASCADE CONSTRAINTS;

-- 6. 删除表空间、内容、保留数据文件但删除级联约束
DROP TABLESPACE tbs6 INCLUDING CONTENTS KEEP DATAFILES CASCADE CONSTRAINTS;
```
