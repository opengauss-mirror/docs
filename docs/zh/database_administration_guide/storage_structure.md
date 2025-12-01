# 存储结构

## 数据库逻辑结构图

openGauss的数据库节点负责存储数据，其存储介质也是磁盘，本节主要从逻辑视角介绍数据库节点都有哪些对象，以及这些对象之间的关系。数据库逻辑结构如[图1](#zh-cn_topic_0237120245_zh-cn_topic_0059779316_fb2fa3b3cc8824dea95318504e0537913)。

**图 1**  数据库逻辑结构图<a name="zh-cn_topic_0237120245_zh-cn_topic_0059779316_fb2fa3b3cc8824dea95318504e0537913"></a>  
![](figures/Database-logical-structure-diagram.png)

>[!NOTE]说明
>
> 1. Tablespace，即表空间，是一个目录，可以存在多个，里面存储的是它所包含的数据库的各种物理文件。每个表空间可以对应多个Database。  
> 2. Database，即数据库，用于管理各类数据对象，各数据库间相互隔离。数据库管理的对象可分布在多个Tablespace上。  
> 3. Datafile Segment，即数据文件，通常每张表只对应一个数据文件。如果某张表的数据大于1GB，则会分为多个数据文件存储。  
> 4. Table，即表，每张表只能属于一个数据库，也只能对应到一个Tablespace。每张表对应的数据文件必须在同一个Tablespace中。  
> 5. Block，即数据块，是数据库管理的基本单位，默认大小为8KB。  

## 段页式存储结构

本节主要从逻辑视角介绍数据库段页式存储结构，段页式存储结构如图1。

**图 1**  段页式存储结构图  
![](figures/Database-segment-structure.png)  

>[!NOTE]说明
>
> 1. Tablespace，即表空间，是一个目录，可以存在多个，里面存储的是它所包含的数据库的各种物理文件。每个表空间可以对应多个Database。  
> 2. Database，即数据库，用于管理各类数据对象，各数据库间相互隔离。数据库管理的对象可分布在多个Tablespace上。  
> 3. Segment space，段空间，每个database有且仅有一个段空间，创建数据库同时会创建该数据库对应的段空间。每个段空间有5个文件，命名为1、2、3、4、5；文件1存储段页式相关的元数据，文件2至文件5存储用户数据和一些段页式相关的元数据。  
> 4. Table，即表，每张表只能属于一个数据库，也只能对应到一个Tablespace。每张表对应的数据文件必须在同一个Tablespace中。  
> 5. Segment，即段，用于存储table的数据，每个table都有一个逻辑上的segment。  
> 6. extent，即区，一个段的全部数据以区为单位存储在段空间的5个文件中，有64KB/1M/8M/64M四种类型，相同类型的extent存放在同一个物理文件中。extent在segment中的分布如图2所示。  

**图 2**  一个segment的extent分布结构图  
![](figures/Database-segment-extent.png)  

>[!NOTE]说明
>
>每个segment会挂载多个extent，extent之间不一定连续，但同一个extent中的页面（block，大小为8KB）连续。
