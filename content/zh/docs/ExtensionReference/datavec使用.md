# datavec使用

## 创建Extension<a name="section21088306113"></a>

创建datavec Extension可直接使用CREATE Extension命令进行创建：

```
openGauss=# CREATE Extension datavec;
```

## 使用Extension<a name="section107391050141118"></a>


示例1：创建一个带有3维向量的表。

```
openGauss=# CREATE TABLE items (val vector(3));

```

示例2：向量数据的插入。

```
openGauss=# INSERT INTO items (val) VALUES ('[1,2,3]'), ('[4,5,6]');

```

示例3：索引创建。

```
openGauss=# CREATE INDEX ON items USING ivfflat (val vector_l2_ops) WITH (lists = 100);
openGauss=# CREATE INDEX ON items USING ivfflat (val vector_ip_ops) WITH (lists = 100);
openGauss=# CREATE INDEX ON items USING ivfflat (val vector_cosine_ops) WITH (lists = 100);
```
>![](public_sys-resources/icon-note.png) **说明：** 
>
>索引最大支持2000维向量。

示例4：计算最近邻。

```
openGauss=# SELECT * FROM items ORDER BY val <-> '[3,1,2]' LIMIT 5;
openGauss=# SELECT * FROM items ORDER BY val <#> '[3,1,2]' LIMIT 5;
openGauss=# SELECT * FROM items ORDER BY val <=> '[3,1,2]' LIMIT 5;
```

## 删除Extension<a name="section1587441381220"></a>

在openGauss中删除datavec Extension的方法如下所示：

```
openGauss=# DROP Extension datavec [CASCADE];
```

>![](public_sys-resources/icon-note.png) **说明：** 
>
>如果Extension被其它对象依赖，需要加入CASCADE（级联）关键字，删除所有依赖对象。

