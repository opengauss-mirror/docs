# CREATE EXTENSION<a name="ZH-CN_TOPIC_0000001080534638"></a>

## 功能描述<a name="section173831846163116"></a>

安装一个扩展。

## 注意事项<a name="section786041713618"></a>

-   CREATE EXTENSION命令安装一个新的扩展到一个数据库中，必须保证没有同名的扩展已经被安装。
-   安装一个扩展意味着执行一个扩展的脚本文件，这个脚本会创建一个新的SQL实体，例如函数,、数据类型、操作符、和索引支持的方法。
-   安装扩展需要有和创建他的组件对象相同的权限。对于大多数扩展这意味着需要超户或者数据库所有者的权限，对于后续的权限检查和该扩展脚本所创建的实体，运行CREATE EXTENSION命令的角色将变为扩展的所有者。

## 语法格式<a name="section1374719912321"></a>

```
CREATE EXTENSION [ IF NOT EXISTS ] extension_name
[ WITH ] [ SCHEMA schema_name ]
[ VERSION version ]
[ FROM old_version ]
```

## 参数说明<a name="section62781959163314"></a>

-   **IF NOT EXISTS**

    如果系统已经存在一个同名的扩展，不会报错。这种情况下会给出一个提示。请注意该参数不保证系统存在的扩展和现在脚本创建的扩展相同。


-   **extension\_name**

    将被安装扩展的名字。


-   **schema\_name**

    扩展的实例被安装在该模式下，扩展的内容可以被重新安装。指定的模式必须已经存在，如果没有指定，扩展的控制文件也不指定一个模式，这样将使用默认模式。

    >![](public_sys-resources/icon-caution.gif) **注意：** 
    >扩展不认为它在任何模式里面：扩展在一个数据库范围内的名字是不受限制的，但是一个扩展的实例是属于一个模式的。


-   **version**

    安装扩展的版本，可以写为一个标识符或者字符串.默认的版本在扩展的控制文件中指定。


-   **old\_version**

    当你想升级安装"old style" 模块中没有的内容时,你必须指定FROM old\_version。这个选项使CREATE EXTENSION 运行一个安装脚本将新的内容安装到扩展中，而不是创建一个新的实体.注意SCHEMA指定了包括这些已存在实体的模式。


## 示例<a name="section14411351193419"></a>

在当前数据库安装hstore扩展：

```
CREATE EXTENSION hstore;
```

