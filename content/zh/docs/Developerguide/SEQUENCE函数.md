# SEQUENCE函数<a name="ZH-CN_TOPIC_0289899881"></a>

序列函数为用户从序列对象中获取后续的序列值提供了简单的多用户安全的方法。

- nextval\(regclass\)

  描述：递增序列并返回新值。

  >![](public_sys-resources/icon-note.gif) **说明：** 
  >
  >为了避免从同一个序列获取值的并发事务被阻塞，nextval操作不会回滚；也就是说，一旦一个值已经被抓取，那么就认为它已经被用过了，并且不会再被返回。即使该操作处于事务中，当事务之后中断，或者如果调用查询结束不使用该值，也是如此。这种情况将在指定值的顺序中留下未使用的“空洞”。因此，openGauss序列对象不能用于获得“无间隙”序列。

  >![](public_sys-resources/icon-notice.gif) **须知：** 
  >
  >nextval函数只能在主机上执行，备机不支持执行此函数。

  返回类型：numeric

  nextval函数有两种调用方式（其中第二种调用方式目前不支持Sequence命名中有特殊字符"."的情况），如下：

  示例1：

  ```
  openGauss=# select nextval('seqDemo'); 
   nextval
  ---------
         2
  (1 row)
  ```

  示例2：

  ```
  openGauss=# select seqDemo.nextval; 
   nextval
  ---------
         2
  (1 row)
  ```

-   currval\(regclass\)

    返回当前会话里最近一次nextval返回的指定的sequence的数值。如果当前会话还没有调用过指定的sequence的nextval，那么调用currval将会报错。

    返回类型：numeric

    currval函数有两种调用方式（其中第二种调用方式目前不支持Sequence命名中有特殊字符"."的情况），如下：

    示例1：

    ```
    openGauss=# select currval('seq1'); 
     currval
    ---------
           2
    (1 row)
    ```

    示例2：

    ```
    openGauss=# select seq1.currval; 
     currval
    ---------
           2
    (1 row)
    ```

-   lastval\(\)

    描述：返回当前会话里最近一次nextval返回的数值。这个函数等效于currval，只是它不用序列名为参数，它抓取当前会话里面最近一次nextval使用的序列。如果当前会话还没有调用过nextval，那么调用lastval将会报错。

    返回类型：numeric

    示例：

    ```
    openGauss=# select lastval(); 
     lastval
    ---------
           2
    (1 row)
    ```

-   setval\(regclass,numeric\)

    描述：设置序列的当前数值。

    返回类型：numeric

    示例：

    ```
    openGauss=# select setval('seqDemo',1);
     setval
    --------
          1
    (1 row)
    ```

-   setval\(regclass, numeric, Boolean\)

    描述：设置序列的当前数值以及is\_called标志。

    返回类型：numeric

    示例：

    ```
    openGauss=# select setval('seqDemo',1,true);
     setval
    --------
          1
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >+ Setval后当前会话会立刻生效，但如果其他会话有缓存的序列值，只能等到缓存值用尽才能感知Setval的作用。所以为了避免序列值冲突，setval要谨慎使用。
    >
    >+ 因为序列是非事务的，setval造成的改变不会由于事务的回滚而撤销。
>![](public_sys-resources/icon-notice.gif) **须知：** 
>
>nextval函数只能在主机上执行，备机不支持执行此函数。

- pg_sequence_last_value(sequence_oid oid, OUT cache_value int16, OUT last_value int16)

  描述：获取指定sequence的参数，包含缓存值，当前值。

  返回类型：int16，int16