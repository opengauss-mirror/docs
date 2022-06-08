# PostGIS使用<a name="ZH-CN_TOPIC_0000001201277572"></a>

## 创建Extension<a name="section21088306113"></a>

创建PostGIS Extension可直接使用CREATE EXTENSION命令进行创建：

```
openGauss=# CREATE EXTENSION postgis;
```

## 使用Extension<a name="section107391050141118"></a>

PostGIS Extension函数调用格式为：

```
openGauss=# SELECT GisFunction (Param1, Param2,......);
```

其中GisFunction为函数名，Param1、Param2等为函数参数名。下列SQL语句展示PostGIS的简单使用，对于各函数的具体使用，请参考[《PostGIS-2.4.2用户手册》](https://download.osgeo.org/postgis/docs/postgis-2.4.2.pdf)。

示例1：几何表的创建。

```
openGauss=# CREATE TABLE cities ( id integer, city_name varchar(50) );
openGauss=# SELECT AddGeometryColumn('cities', 'position', 4326, 'POINT', 2);
```

示例2：几何数据的插入。

```
openGauss=# INSERT INTO cities (id, position, city_name) VALUES (1,ST_GeomFromText('POINT(-9.5 23)',4326),'CityA');
openGauss=# INSERT INTO cities (id, position, city_name) VALUES (2,ST_GeomFromText('POINT(-10.6 40.3)',4326),'CityB');
openGauss=# INSERT INTO cities (id, position, city_name) VALUES (3,ST_GeomFromText('POINT(20.8 30.3)',4326), 'CityC');
```

示例3：计算三个城市间任意两个城市距离。

```
openGauss=# SELECT p1.city_name,p2.city_name,ST_Distance(p1.position,p2.position) FROM cities AS p1, cities AS p2 WHERE p1.id > p2.id;
```

## 删除Extension<a name="section1587441381220"></a>

在openGauss中删除PostGIS Extension的方法如下所示：

```
openGauss=# DROP EXTENSION postgis [CASCADE];
```

>![](public_sys-resources/icon-note.gif) **说明：** 
>如果Extension被其它对象依赖（如创建的几何表），需要加入CASCADE（级联）关键字，删除所有依赖对象。

若要完全删除PostGIS Extension，则需由omm用户使用gs\_om工具移除PostGIS及其依赖的动态链接库，格式如下：

```
gs_om -t postgis -m rmlib
```

