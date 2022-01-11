# ALTER SUBSCRIPTION

## 功能说明

ALTER SUBSCRIPTION可以修改大部分可以在CREATE SUBSCRIPTION中指定的订阅属性。订阅的所有者才能执行ALTER SUBSCRIPTION。

## 语法格式
```
ALTER SUBSCRIPTION name CONNECTION 'conninfo'
ALTER SUBSCRIPTION name SET PUBLICATION publication_name [, ...]
ALTER SUBSCRIPTION name ENABLE
ALTER SUBSCRIPTION name SET ( subscription_parameter [= value] [, ... ] )
ALTER SUBSCRIPTION name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
ALTER SUBSCRIPTION name RENAME TO new_name
```

要改变所有者，你也必须是新所有者的直接或间接成员，并且新的所有者必须是超级用户。（目前，所有的订阅所有者必须是超级用户，所以所有者的检查将在实践中被绕过，但这可能在未来发生变化。）

## 参数说明

- name

  要修改属性的订阅的名称。

- CONNECTION 'conninfo'

  该子句修改最初由CREATE SUBSCRIPTION设置的连接属性。

- SET ( subscription_parameter [= value] [, ... ] )

  该子句修改原先由CREATE SUBSCRIPTION设置的参数。允许的选项是slot_name和synchronous_commit。

  - **注意**

    - 如果创建订阅时设置enabled为false，则slot_name将被强制设置为NULL，即使用户指定了slot_name的值，表示复制槽不存在。

    - 将enabled参数的值由false改为true，即启用订阅时，将会连接发布端创建复制槽，此时如果用户未指定slot_name参数的值，则会使用默认值，即对应的订阅的名称。

    - 当enabled为true，即订阅处于正常使用状态，不能修改slot_name为NULL，但可以修改复制槽的名称为其他非空合法名称。

- new_owner

  订阅的新所有者的用户名。

- new_name

  订阅的新名称。
