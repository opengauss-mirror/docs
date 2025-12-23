# ALTER SEQUENCE<a name="ZH-CN_TOPIC_0289900494"></a>

## 功能描述<a name="zh-cn_topic_0283137303_zh-cn_topic_0237122071_zh-cn_topic_0062358310_s806d414edb004fa89cd50a1166d1136e"></a>

修改一个现有的序列的参数。

## 注意事项<a name="zh-cn_topic_0283137303_zh-cn_topic_0237122071_zh-cn_topic_0062358310_sfccb497f01564edb804ecee58fe2698c"></a>

-   在修改序列的某些属性（如最小值和最大值）时，需要确保新设置的值在逻辑上是合理的，例如最小值应该小于最大值。
-   如果序列已经达到了其最大值并且设置为循环（CYCLE），则在下次获取值时将从最小值重新开始。如果未设置循环且达到最大值，再获取值时会报错。

## 语法格式<a name="zh-cn_topic_0283137303_zh-cn_topic_0237122071_zh-cn_topic_0062358310_s794bdb8d97844eb7aa7d1d6cdf896ac9"></a>

-   修改序列属性

    ```
    ALTER SEQUENCE [schema.]sequence_name [ INCREMENT BY increment ]
        [ MINVALUE minvalue | NOMINVALUE ] [ MAXVALUE maxvalue | NOMAXVALUE ]
        [ CACHE cachevalue | NOCACHE ] [ CYCLE | NOCYCLE ];
    ```


## 参数说明<a name="zh-cn_topic_0283137303_zh-cn_topic_0237122071_zh-cn_topic_0062358310_s8277cc73aecc4f20845d2ddf456a20e7"></a>

-   schema
    
    用户名。默认是当前用户。

-   sequence_name

    将要修改的序列名称。

-   INCREMENT

    指定序列的步长。当设置的步长大于0，则序列递增；步长小于0，则序列递减。默认值为1。

-   MINVALUE minvalue | NOMINVALUE

    指定序列的最小值。如果没有声明minvalue或者声明了NOMINVALUE，则递增序列的默认值为1，递减序列的默认值为-2<sup>63</sup>+1。

-   MAXVALUE maxvalue | NOMAXVALUE

    指定序列的最大值。如果没有声明maxvalue或者声明了NOMAXVALUE，则递减序列的默认值为-1，递增序列的默认值为2<sup>63</sup>-1。

-   CACHE cachevalue | NOCACHE

    为了快速访问，而在内存中预先存储序列号的个数。如果没有指定，默认值为NOCACHE，默认序列号个数为1。

-   CYCLE | NOCYCLE

    用于使序列达到maxvalue或者minvalue后可循环并继续下去。

    如果声明了NOCYCLE，则在序列达到其最大值后任何对nextval的调用都会返回一个错误。

    若修改序列为CYCLE，则不能保证序列的唯一性。

    默认值为NOCYCLE。


## 示例<a name="zh-cn_topic_0283137303_zh-cn_topic_0237122071_zh-cn_topic_0062358310_sd7a0dca78f6844d79a0ec70fb4213769"></a>

```
--创建一个名为serial的递增序列，从101开始。
SQL> CREATE SEQUENCE serial START WITH 101;

--修改序列步长为2
SQL> ALTER SEQUENCE serial INCREMENT BY 2;

--修改序列最小值为90
SQL> ALTER SEQUENCE serial MINVALUE 90;

--修改序列最大值为200
SQL> ALTER SEQUENCE serial MAXVALUE 200;

--修改序列缓冲值为10
SQL> ALTER SEQUENCE serial CACHE 10;

--修改序列循环
SQL> ALTER SEQUENCE serial CYCLE;

--删除序列
SQL> DROP SEQUENCE serial;
```



