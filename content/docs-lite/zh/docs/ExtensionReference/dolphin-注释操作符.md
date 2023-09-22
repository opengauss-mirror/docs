# 注释操作符

相比于原始的openGauss，dolphin对于注释操作符的修改主要为：

1. 新增支持通过```#```表示单行注释的开始。如 ```# select a from t1``` 表示一个注释。

- #开头的单行注释

  描述：将从# 开始到换行符以内视为注释信息。

  注意：此操作符针对B兼容数据库使用，与openGauss原有的#操作符语义不同。若想使用此语义，请创建B兼容模式数据库，启用MySQL兼容性SQL引擎插件，并将dolphin.b_compatibility_mode设置为TRUE.

  示例：

  ```
  openGauss=# SELECT lower('TOM') #1234;
  openGauss=# ;
  lower
  -------
  tom
  ```
