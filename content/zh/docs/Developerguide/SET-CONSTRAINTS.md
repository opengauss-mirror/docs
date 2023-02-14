# SET CONSTRAINTS

## 功能描述<a name="zh-cn_topic_0283136774_zh-cn_topic_0237122187_zh-cn_topic_0059779017_s016571300554457884633ea16394654e"></a>

SET CONSTRAINTS设置当前事务检查行为的约束条件。

IMMEDIATE约束是在每条语句后面进行检查。DEFERRED约束一直到事务提交时才检查。每个约束都有自己的模式。

从创建约束条件开始，一个约束总是设定为DEFERRABLE INITIALLY DEFERRED、DEFERRABLE INITIALLY IMMEDIATE、NOT DEFERRABLE三个特性之一。第三种总是IMMEDIATE，并且不会受SET CONSTRAINTS影响。前两种以指定的方式启动每个事务，但是其行为可以在事务里用SET CONSTRAINTS改变。

带着一个约束名列表的SET CONSTRAINTS改变这些约束的模式（都必须是可推迟的）。如果有多个约束匹配某个名称，则所有都会被影响。SET CONSTRAINTS ALL改变所有可推迟约束的模式。

当SET CONSTRAINTS把一个约束从DEFERRED改成IMMEDIATE的时候，新模式反作用式地起作用：任何将在事务结束准备进行的数据修改都将在SET CONSTRAINTS的时候执行检查。如果违反了任何约束，SET CONSTRAINTS都会失败（并且不会修改约束模式）。因此，SET CONSTRAINTS可以用于强制在事务中某一点进行约束检查。

检查约束总是不可推迟的。

## 注意事项<a name="zh-cn_topic_0283136774_zh-cn_topic_0237122187_zh-cn_topic_0059779017_s321677998664492982aeded9dee52787"></a>

SET CONSTRAINTS只在当前事务里设置约束的行为。因此，如果用户在事务块之外（START TRANSACTION/COMMIT对）执行这个命令，它将没有任何作用。

## 语法格式<a name="zh-cn_topic_0283136774_zh-cn_topic_0237122187_zh-cn_topic_0059779017_s8d239b808d544e6cbfdbf0be45ed052c"></a>

```
SET CONSTRAINTS  { ALL  |  { name  }  [, ...]  }  { DEFERRED  | IMMEDIATE  } ;
```

## 参数说明<a name="zh-cn_topic_0283136774_zh-cn_topic_0237122187_zh-cn_topic_0059779017_sce8e8c2751c740879354a5adb7da996e"></a>

-   **name**

    约束名。

    取值范围：已存在的约束名。可以在系统表pg\_constraint中查到。

-   **ALL**

    所有约束。

-   **DEFERRED**

    约束一直到事务提交时才检查。

-   **IMMEDIATE**

    约束在每条语句后进行检查。


## 示例<a name="zh-cn_topic_0283136774_zh-cn_topic_0237122187_zh-cn_topic_0059779017_s1a9e95b23ffc4ba9b8873c7352f3d1f5"></a>

```
--设置所有约束在事务提交时检查。
openGauss=# SET CONSTRAINTS ALL DEFERRED;
```
