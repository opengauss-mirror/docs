# Using PostGIS<a name="EN-US_TOPIC_0000001201277572"></a>

## Creating PostGIS Extension<a name="section21088306113"></a>

Run the  **CREATE EXTENSION**  command to create PostGIS Extension.

```
openGauss=# CREATE EXTENSION postgis;
```

## Using PostGIS Extension<a name="section107391050141118"></a>

Use the following function to invoke PostGIS Extension:

```
openGauss=# SELECT GisFunction (Param1, Param2,......);
```

**GisFunction**  is the function, and  **Param1**  and  **Param2**  are function parameters. The following SQL statements are a simple illustration for PostGIS use. For details about related functions, see  [PostGIS 2.4.2 Manual](https://download.osgeo.org/postgis/docs/postgis-2.4.2.pdf).

Example 1: Create a geometry table.

```
openGauss=# CREATE TABLE cities ( id integer, city_name varchar(50) );
openGauss=# SELECT AddGeometryColumn('cities', 'position', 4326, 'POINT', 2);
```

Example 2: Insert geometry data.

```
openGauss=# INSERT INTO cities (id, position, city_name) VALUES (1,ST_GeomFromText('POINT(-9.5 23)',4326),'CityA');
openGauss=# INSERT INTO cities (id, position, city_name) VALUES (2,ST_GeomFromText('POINT(-10.6 40.3)',4326),'CityB');
openGauss=# INSERT INTO cities (id, position, city_name) VALUES (3,ST_GeomFromText('POINT(20.8 30.3)',4326), 'CityC');
```

Example 3: Calculate the distance between any two cities among three cities.

```
openGauss=# SELECT p1.city_name,p2.city_name,ST_Distance(p1.position,p2.position) FROM cities AS p1, cities AS p2 WHERE p1.id > p2.id;
```

## Deleting PostGIS Extension<a name="section1587441381220"></a>

Run the following command to delete a PostGIS extension from openGauss:

```
openGauss=# DROP EXTENSION postgis [CASCADE];
```

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>If PostGIS Extension is the dependee of other objects \(for example, geometry tables\), you need to add the  **CASCADE**  keyword to delete all these objects.

To completely delete PostGIS extension, run  **gs\_om**  as user  **omm**  to delete PostGIS and the dynamic link libraries it depends on.

```
gs_om -t postgis -m rmlib
```

