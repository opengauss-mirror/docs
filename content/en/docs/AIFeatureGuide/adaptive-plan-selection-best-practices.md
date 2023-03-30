# Best Practice<a name="EN-US_TOPIC_0000001316146580"></a>

**Adaptive selection of multiple indexes is supported. The following is an example:**

```
create table t1(c1 int, c2 int, c3 int, c4 varchar(32), c5 text);
create index t1_idx2 on t1(c1,c2,c3,c4);
create index t1_idx1 on t1(c1,c2,c3);

insert into t1( c1, c2, c3, c4, c5) SELECT (random()*(2*10^9))::integer , (random()*(2*10^9))::integer,  (random()*(2*10^9))::integer, (random()*(2*10^9))::integer,  repeat('abc', i%10) ::text from generate_series(1,1000000) i;
insert into t1( c1, c2, c3, c4, c5) SELECT (random()*1)::integer, (random()*1)::integer, (random()*1)::integer, (random()*(2*10^9))::integer, repeat('abc', i%10) ::text from generate_series(1,1000000) i;
```

**Performance comparison:**

Random parameters: c1\~ random\(1, 20\); c2\~ random\(1, 20\); c3\~ random\(1, 20\); c4 \~ random\(2, 10000\)

The number of threads is 50, the number of clients is 50, and the execution duration is 60s.

<a name="table6759144874117"></a>
<table><tbody><tr id="row3782174844119"><td class="cellrowborder" valign="top" width="17.48%"><p id="p1878244813413"><a name="p1878244813413"></a><a name="p1878244813413"></a><strong id="b1378244884113"><a name="b1378244884113"></a><a name="b1378244884113"></a>Method</strong></p>
</td>
<td class="cellrowborder" valign="top" width="53.949999999999996%"><p id="p1678311483417"><a name="p1678311483417"></a><a name="p1678311483417"></a><strong id="b17783548144116"><a name="b17783548144116"></a><a name="b17783548144116"></a>Statement</strong></p>
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
<tr id="row878324810415"><td class="cellrowborder" valign="top" width="17.48%"><p id="p19783204884113"><a name="p19783204884113"></a><a name="p19783204884113"></a>gplan selection</p>
</td>
<td class="cellrowborder" valign="top" width="53.949999999999996%"><p id="p778354834119"><a name="p778354834119"></a><a name="p778354834119"></a>prepare k as select /*+ choose_adaptive_gplan */ * from t1 where c1=$1 and c2=$2 and c3=$3 and c4=$4;</p>
</td>
<td class="cellrowborder" valign="top" width="28.57%"><p id="p16783174894111"><a name="p16783174894111"></a><a name="p16783174894111"></a>175681</p>
</td>
</tr>
</tbody>
</table>
