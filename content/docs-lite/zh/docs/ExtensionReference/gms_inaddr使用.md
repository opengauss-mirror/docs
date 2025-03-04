# gms_inaddr使用

## 创建Extension<a name="section21088306113"></a>

创建gms_inaddr Extension可直接使用CREATE Extension命令进行创建：

```
openGauss=# CREATE Extension gms_inaddr;
```

## 使用Extension<a name="section107391050141118"></a>

### 函数声明
- GET_HOST_ADDRESS(text name default 'localhost')
  描述：该函数根据参数指定ip获取对应主机名称。
  参数详解：name：需要获取地址的主机名；status：若获取成功，该参数返回对应地址，否则报错。
- GET_HOST_NAME(text ip default '127.0.0.1')
  描述：该函数根据参数指定主机名获取对应ip。
  参数详解：ip：用于获取主机名的地址；若获取成功，返回主机名，否则报错。
### 函数使用
测试get_host_name、get_host_addr函数

begin
gms_output.enable;
gms_output.put_line(gms_inaddr.get_host_address('localhost'));
gms_output.put_line(gms_inaddr.get_host_name('127.0.0.1'));
end
/

```sql
openGauss=# begin
openGauss$#   gms_output.enable;
openGauss$#   gms_output.put_line(gms_inaddr.get_host_address('localhost'));
openGauss$#   gms_output.put_line(gms_inaddr.get_host_name('127.0.0.1'));
openGauss$# end;
openGauss$# /
127.0.0.1
localhost
ANONYMOUS BLOCK EXECUTE
```

## 删除Extension<a name="section1587441381220"></a>

在openGauss中删除gms_inaddr Extension的方法如下所示：

```
openGauss=# DROP Extension gms_inaddr [CASCADE];
```



>![](public_sys-resources/icon-note.png) **说明：** 
>
>如果Extension被其它对象依赖，需要加入CASCADE（级联）关键字，删除所有依赖对象。
