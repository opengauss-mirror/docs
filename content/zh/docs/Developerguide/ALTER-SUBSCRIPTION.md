# ALTER SUBSCRIPTION

## 功能描述<a name="section13387758133316"></a>

ALTER SUBSCRIPTION可以修改在CREATE SUBSCRIPTION中指定的订阅属性。

## 注意事项<a name="section9949646113519"></a>

订阅的所有者才能执行ALTER SUBSCRIPTION，并且新的所有者必须是系统管理员。

## 语法格式<a name="section14225141693411"></a>

- 更新订阅的连接信息。

  ```
  ALTER SUBSCRIPTION name CONNECTION 'conninfo'
  ```

- 更新订阅的发布端的发布名称。

  ```
  ALTER SUBSCRIPTION name SET PUBLICATION publication_name [, ...]
  ```

- 更新订阅的发布端的发布名称。

  ```
  ALTER SUBSCRIPTION name REFRESH PUBLICATION [ WITH ( refresh_option [= value] [, ... ] ) ]
  ```

- 激活订阅。

  ```
  ALTER SUBSCRIPTION name ENABLE
  ```

- 更新CREATE SUBSCRIPTION中定义的属性。

  ```
  ALTER SUBSCRIPTION name SET ( subscription_parameter [= value] [, ... ] )
  ```

- 更新订阅的属主。

  ```
  ALTER SUBSCRIPTION name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
  ```

- 修改订阅的名称。

  ```
  ALTER SUBSCRIPTION name RENAME TO new_name
  ```

## 参数说明<a name="section5772125023414"></a>

- **name**

    要修改属性的订阅的名称。

- **CONNECTION 'conninfo'**

    该子句修改最初由CREATE SUBSCRIPTION设置的连接属性。

- **ENABLE \(boolean\)**

    指定订阅是否应该主动复制，或者是否应该只是设置，但尚未启动。默认值是true。

- **SET \( subscription\_parameter \[= value\] \[, ... \] \)**

  该子句修改原先由CREATE SUBSCRIPTION设置的参数。允许的选项是slot\_name和synchronous\_commit。

  -   如果创建订阅时设置enabled为false，则slot\_name将被强制设置为NONE，即空值，即使用户指定了slot\_name的值，复制槽也不存在。
  -   将enabled参数的值由false改为true，即启用订阅时，将会连接发布端创建复制槽，此时如果用户未指定slot\_name参数的值，则会使用默认值，即对应的订阅的名称。
  -   当enabled为true，即订阅处于正常使用状态，不能修改slot\_name为空，但可以修改复制槽的名称为其他非空合法名称。

- **REFRESH PUBLICATION**

    从发布端获取缺少的表信息。这将开始复制自上次调用REFRESH PUBLICATION或从CREATE SUBSCRIPTION以来添加到订阅发布中的表。

    refresh\_option指定了刷新操作的附加选项。支持的选项有：
    
    copy\_data (boolean)
          指定在复制启动后是否应复制正在订阅的发布中的现有数据。默认值是true。（以前订阅的表不会被复制）

- **new\_owner**

    订阅的新所有者的用户名。

- **new\_name**

    订阅的新名称。

## 示例<a name="section985314309401"></a>

请参见[示例](CREATE-SUBSCRIPTION.md#section1399192015610)。

## 相关链接<a name="section773423484017"></a>

[CREATE SUBSCRIPTION](CREATE-SUBSCRIPTION.md)，[DROP SUBSCRIPTION](DROP-SUBSCRIPTION.md)

