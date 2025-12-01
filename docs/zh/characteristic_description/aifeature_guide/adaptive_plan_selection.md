# 自适应计划选择

## 概述

自适应计划选择作用于使用通用缓存计划进行计划执行的场景。通过使用范围线性扩张进行缓存计划探索，通过范围覆盖匹配进行计划选择。自适应计划选择弥补了传统单一缓存计划无法根据查询条件参数进行变化带来的性能问题，并且避免了频繁调用查询优化。

## 前置条件

数据库运行正常，GUC参数"enable\_cachedplan\_mgr"为on，启动自适应计划选择功能。

## 使用指导

**现网环境下**，对存在缓存计划问题的query使用hint开启计划自适应管理能力：

```
select /*+ choose_adaptive_gplan */ * from tab where c1 = xxx；
```

JDBC客户端默认会将以上带hint的SQL转换为PBE模型，并建立查询模板。除直接修改SQL外，hint还可通过sqlpatch能力进行添加。

**gsql环境下**，可以使用手动创建查询模板的模式进行：

```
prepare test_stmt as select /*+ choose_adaptive_gplan */ * from tab where c1 = $1；
```

## 最佳实践

**多索引自适应选择支持，举例如下：**

```
create table t1(c1 int, c2 int, c3 int, c4 varchar(32), c5 text);
create index t1_idx2 on t1(c1,c2,c3,c4);
create index t1_idx1 on t1(c1,c2,c3);

insert into t1( c1, c2, c3, c4, c5) SELECT (random()*(2*10^9))::integer , (random()*(2*10^9))::integer,  (random()*(2*10^9))::integer, (random()*(2*10^9))::integer,  repeat('abc', i%10) ::text from generate_series(1,1000000) i;
insert into t1( c1, c2, c3, c4, c5) SELECT (random()*1)::integer, (random()*1)::integer, (random()*1)::integer, (random()*(2*10^9))::integer, repeat('abc', i%10) ::text from generate_series(1,1000000) i;
```

**性能对比：**

随机参数：c1\~ random\(1, 20\); c2\~ random\(1, 20\); c3\~ random\(1, 20\); c4 \~ random\(2, 10000\)

线程数50，客户端50，执行时长60s

<a name="table6759144874117"></a>
<table><tbody><tr id="row3782174844119"><td class="cellrowborder" valign="top" width="17.48%"><p id="p1878244813413"><a name="p1878244813413"></a><a name="p1878244813413"></a><strong id="b1378244884113"><a name="b1378244884113"></a><a name="b1378244884113"></a>方法</strong></p>
</td>
<td class="cellrowborder" valign="top" width="53.949999999999996%"><p id="p1678311483417"><a name="p1678311483417"></a><a name="p1678311483417"></a><strong id="b17783548144116"><a name="b17783548144116"></a><a name="b17783548144116"></a>语句</strong></p>
</td>
<td class="cellrowborder" valign="top" width="28.57%"><p id="p778384815418"><a name="p778384815418"></a><a name="p778384815418"></a><strong id="b1878314486412"><a name="b1878314486412"></a><a name="b1878314486412"></a>tps</strong></p>
</td>
</tr>
<tr id="row478394819418"><td class="cellrowborder" valign="top" width="17.48%"><p id="p1078315489415"><a name="p1078315489415"></a><a name="p1078315489415"></a>gplan</p>
</td>
<td class="cellrowborder" valign="top" width="53.949999999999996%"><p id="p8783154864112"><a name="p8783154864112"></a><a name="p8783154864112"></a>prepare k as select * from t1 where c1=$1 and c2=$2 and c3=$3 and c4=$4;</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%"><p id="p137831148104112"><a name="p137831148104112"></a><a name="p137831148104112"></a>35126</p>
</td>
</tr>
<tr id="row978394834114"><td class="cellrowborder" valign="top" width="17.48%"><p id="p1778316481415"><a name="p1778316481415"></a><a name="p1778316481415"></a>cplan</p>
</td>
<td class="cellrowborder" valign="top" width="53.949999999999996%"><p id="p478314834116"><a name="p478314834116"></a><a name="p478314834116"></a>prepare k as select /*+ use_cplan */ * from t1 where c1=$1 and c2=$2 and c3=$3 and c4=$4;</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%"><p id="p0783184812414"><a name="p0783184812414"></a><a name="p0783184812414"></a>75817</p>
</td>
</tr>
<tr id="row878324810415"><td class="cellrowborder" valign="top" width="17.48%"><p id="p19783204884113"><a name="p19783204884113"></a><a name="p19783204884113"></a>gplan选择</p>
</td>
<td class="cellrowborder" valign="top" width="53.949999999999996%"><p id="p778354834119"><a name="p778354834119"></a><a name="p778354834119"></a>prepare k as select /*+ choose_adaptive_gplan */ * from t1 where c1=$1 and c2=$2 and c3=$3 and c4=$4;</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%"><p id="p16783174894111"><a name="p16783174894111"></a><a name="p16783174894111"></a>175681</p>
</td>
</tr>
</tbody>
</table>

## 常见问题处理

对于过于复杂的慢查询由于特征范围限制，可能无法使用本特性正确进行计划选择，建议直接使用CPLAN进行查询计划生成。
