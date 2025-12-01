# ANYDATA类型

ANYTYPE、ANYDATA 和 ANYDATASET 是用于处理不确定数据类型的一组类型，包含类型的实际数据，以及对该类型的描述，可以用于动态地处理各种数据类型。

## 规格描述

1. ANYTYPE、ANYDATA 和 ANYDATASET 类型可处理的普通数据类型范围限定在binary_double、blob、char、date、nchar、number、nvarchar2、raw、timestamp、timestamptz、varchar、varchar2，共12种类型内。
2. 对于以上12种对应类型的CONVERT方法构建的ANYDATA、ANYDATASET，类型描述部分即ANYTYPE属性为NULL，详见下述GETTYPE存储过程。
3. 三种类型均创建于public shcema下，类型所包含的存储过程需通过类型名.存储过程名进行调用，包含self参数的存储过程也可通过对象名.存储过程名的方式调用，仅有self参数的存储过程使用时不可省略括号。使用方式与面向对象语法类似，详见下述对应类型的SQL语句示例。

## ANYTYPE

ANYTYPE类型可存储其他类型的类型描述，如类型名、数值类型的精度、字符串类型的长度等。

### 存储过程

#### BEGINCREATE

```sql
STATIC PROCEDURE BEGINCREATE(
   typecode       IN          INTEGER,
   atype          OUT         ANYTYPE);
```
创建一个新的 ANYTYPE 实例，用于创建类型描述。

|参数|类型|说明|
|--|--|--|
|typecode|int|入参，整数代表对应类型|
|atype|anytype|出参，初始化的anytype|

这里给出以上12种类型对应的typecode

|typecode|类型|
|--|--|
|101|binary_double|
|113|blob|
|96|char|
|12|date|
|286|nchar|
|2|number|
|287|nvarchar2|
|95|raw|
|187|timestamp|
|188|timestamptz|
|1|varchar|
|9|varchar2|

#### SETINFO

```sql
MEMBER PROCEDURE SETINFO(
   self          IN OUT NOCOPY ANYTYPE,
   prec          IN INTEGER,
   scale         IN INTEGER,
   len           IN INTEGER,
   csid          IN INTEGER,
   csfrm         IN INTEGER,
   atype         IN ANYTYPE DEFAULT NULL,
   elem_tc       IN INTEGER DEFAULT NULL,
   elem_count    IN INTEGER DEFAULT 0);
```
设置ANTYPE的各属性。

|参数|类型|说明|
|--|--|--|
|self|ANYTYPE|self|
|prec|int|数字类型精度|
|scale|int|数字类型刻度，与精度一起使用|
|len|int|字符串类型长度|
|csid|int|字符集id|
|csfrm|int|字符格式|
|atype|ANYTYPE|object类型入参，未使用|
|elem_tc|int|collection类型的typecode，未使用|
|elem_count|int|table或数组类型的长度，未使用|

#### ENDCREATE

```sql
MEMBER PROCEDURE ENDCREATE(
   self           IN OUT NOCOPY ANYTYPE);
```
结束创建一个ANYTYPE。在此调用后，其他SET函数不能被调用。

|参数|类型|说明|
|--|--|--|
|self|ANYTYPE|self|

#### GETINFO

```sql
MEMBER FUNCTION GETINFO (
   self        IN ANYTYPE,
   prec        OUT INTEGER, 
   scale       OUT INTEGER,
   len         OUT INTEGER, 
   csid        OUT INTEGER,
   csfrm       OUT INTEGER,
   schema_name OUT VARCHAR2, 
   type_name   OUT VARCHAR2, 
   version     OUT varchar2,
   numelems    OUT INTEGER)
   RETURN      INTEGER;
```
获取ANYTYPE类型中的属性值，需要在ENDCREATE后调用。

|参数|类型|说明|
|--|--|--|
|self|ANYTYPE|self|
|prec|int|数字类型精度|
|scale|int|数字类型刻度，与精度一起使用|
|len|int|字符串类型长度|
|csid|int|字符集id|
|csfrm|int|字符格式|
|schema_name|varchar|类型所在schema|
|type_name|varchar|类型名|
|version|varchar|类型的版本|
|numelems|int|数组类型的元素数量，object类型的属性数量|

返回值：type_name对应的typecode

### 示例
```sql
declare
   v_anytype    anytype;
   prec         int;
   scale        int;
   len          int; 
   csid         int;
   csfrm        int;
   schema_name  VARCHAR2(20); 
   type_name    VARCHAR2(20); 
   version      varchar2(20);
   numelems     int;
   result       int;
begin
    anytype.BeginCreate(101, v_anytype);
    v_anytype.setinfo(255, 127, 2147483647, 65535, 33);
	anytype.endcreate(v_anytype);
    result := v_anytype.getinfo(prec,scale,len,csid,csfrm,schema_name,type_name,version,numelems);
    RAISE NOTICE 'Output values are: %, %, %, %, %, %', prec, scale, len, csid, csfrm, schema_name;
	RAISE NOTICE 'More output values are: %, %, %, %', type_name, version, numelems, result;
end;
/
NOTICE:  Output values are: <NULL>, <NULL>, <NULL>, <NULL>, <NULL>, <NULL>
NOTICE:  More output values are: <NULL>, <NULL>, <NULL>, 101
ANONYMOUS BLOCK EXECUTE
```

## ANYDATA

ANYDATA用于处理不确定类型数据，包含类型的实际数据，以及对该类型的描述。其类型描述部分可以看作一个ANYTYPE。

### 存储过程

#### CONVERT
```sql
STATIC FUNCTION ConvertBDouble(dbl IN BINARY_DOUBLE) return ANYDATA;
STATIC FUNCTION ConvertBlob(b IN BLOB) RETURN ANYDATA;
STATIC FUNCTION ConvertChar(c IN CHAR) RETURN ANYDATA;
STATIC FUNCTION ConvertDate(dat IN DATE) RETURN ANYDATA;
STATIC FUNCTION ConvertNchar(nc IN NCHAR) return ANYDATA;
STATIC FUNCTION ConvertNVarchar2(nc IN NVARCHAR2) return ANYDATA;
STATIC FUNCTION ConvertNumber(num IN NUMBER) RETURN ANYDATA;
STATIC FUNCTION ConvertRaw(r IN RAW) RETURN ANYDATA;
STATIC FUNCTION ConvertTimestamp(ts IN TIMESTAMP) return ANYDATA;
STATIC FUNCTION ConvertTimestampTZ(ts IN TIMESTAMP WITH TIMEZONE) return ANYDATA;
STATIC FUNCTION ConvertVarchar(c IN VARCHAR) RETURN ANYDATA;
STATIC FUNCTION ConvertVarchar2(c IN VARCHAR2) RETURN ANYDATA;
```
创建一个新的ANYDATA实例。对于以上12种CONVERT方法构建的ANYDATA，类型描述部分即ANYTYPE属性为NULL。

|参数|类型|说明|
|--|--|--|
|-|-|12种类型对应的入参|

返回值：ANYDATA

#### ACCESS
```sql
MEMBER FUNCTION AccessBDouble(self IN ANYDATA) return BINARY_DOUBLE;
MEMBER FUNCTION AccessBlob(self IN ANYDATA) return BLOB;
MEMBER FUNCTION AccessChar(self IN ANYDATA) return CHAR;
MEMBER FUNCTION AccessDate(self IN ANYDATA) return DATE;
MEMBER FUNCTION AccessNchar(self IN ANYDATA) return NCHAR;
MEMBER FUNCTION AccessNumber(self IN ANYDATA) return NUMBER;
MEMBER FUNCTION AccessNVarchar2(self IN ANYDATA) return NVARCHAR2;
MEMBER FUNCTION AccessRaw(self IN ANYDATA) return RAW;
MEMBER FUNCTION AccessTimestamp(self IN ANYDATA) return TIMESTAMP;
MEMBER FUNCTION AccessTimestampTZ(self IN ANYDATA) return TIMESTAMP WITH TIMEZONE;
MEMBER FUNCTION AccessVarchar(self IN ANYDATA) return VARCHAR;
MEMBER FUNCTION AccessVarchar2(self IN ANYDATA) return VARCHAR2;
```
返回ANYDATA中的数据。首先需要与ANYDATA中存储的数据类型匹配，若不匹配，返回NULL。

|参数|类型|说明|
|--|--|--|
|self|ANYDATA|self|

返回值：12种对应类型

#### GETTYPE
```sql
MEMBER FUNCTION GETTYPE(
   self          IN ANYDATA,
   typ           OUT NOCOPY AnyType)
   RETURN        INTEGER;
```
将ANYDATA的类型描述，即ANYTYPE部分赋给出参typ，并返回对应的类型的typecode。在限定的12种类型下，获取的typ均为NULL，typcode为实际类型。

|参数|类型|说明|
|--|--|--|
|self|ANYDATA|self|
|typ|AnyType|类型信息|

返回值：类型对应的typecode

#### GETTYPENAME
```sql
MEMBER FUNCTION GETTYPENAME(
   self         IN ANYDATA)
   RETURN       VARCHAR2;
```
返回ANYDATA中存储的数据类型名称。

|参数|类型|说明|
|--|--|--|
|self|ANYDATA|self|

返回值：类型名

### 示例
```sql
declare
    v_anydata anydata;
    typecode int;
    v_char nchar(10);
    type_name    VARCHAR2(20);
begin
    v_anydata := anydata.convertnchar('abc123,?');
    v_char := v_anydata.accessnchar();
    typecode = v_anydata.gettype();
    type_name = v_anydata.gettypename();
    raise notice '%, %, %', v_char, type_name, typecode;
end;
/
NOTICE:  abc123,?  , NChar, 286
ANONYMOUS BLOCK EXECUTE
```

## ANYDATASET

ANYDATASET用于处理一组不确定类型数据，可看作ANYDATA的集合，单个集合中的类型需要相同。

### 存储过程

#### BEGINCREATE
```sql
STATIC PROCEDURE BeginCreate(
   typecode     IN INTEGER,
   rtype        IN OUT NOCOPY AnyType,
   aset         OUT NOCOPY ANYDATASET);
```
函数接收typecode确定集合中元素的类型，创建一个新的ANYDATASET实例。此处的typecode对应关系与ANYTYPE相同。

|参数|类型|说明|
|--|--|--|
|typecode|int|集合类型的typecode|
|rtype|AnyType|集合类型的类型属性|
|aset|ANYDATASET|出参，初始化函数的返回值|

|typecode|类型|
|--|--|
|101|binary_double|
|113|blob|
|96|char|
|12|date|
|286|nchar|
|2|number|
|287|nvarchar2|
|95|raw|
|187|timestamp|
|188|timestamptz|
|1|varchar|
|9|varchar2|

#### ADDINSTANCE
```sql
MEMBER PROCEDURE AddInstance(
   self          IN OUT NOCOPY ANYDATASET);
```
在ANYDATASET中创建一个新的数据元素，每次新增元素时均需要调用该存储过程。

|参数|类型|说明|
|--|--|--|
|self|ANYDATASET|self|

#### SET
```sql
MEMBER PROCEDURE SETBDOUBLE(
   self              IN OUT NOCOPY ANYDATASET, 
   dbl               IN BINARY_DOUBLE, 
   last_elem         IN BOOLEAN DEFAULT FALSE);

MEMBER PROCEDURE SETBLOB(
   self              IN OUT NOCOPY ANYDATASET,
   b                 IN BLOB,
   last_elem BOOLEAN DEFAULT FALSE);

MEMBER PROCEDURE SETCHAR(
   self              IN OUT NOCOPY ANYDATASET,
   c                 IN CHAR,
   last_elem BOOLEAN DEFAULT FALSE);

MEMBER PROCEDURE SETDATE(
   self              IN OUT NOCOPY ANYDATASET,
   dat               IN DATE,
   last_elem BOOLEAN DEFAULT FALSE);

MEMBER PROCEDURE SETNCHAR(
   self              IN OUT NOCOPY ANYDATASET,
   nc                IN NCHAR, 
   last_elem IN BOOLEAN DEFAULT FALSE);

MEMBER PROCEDURE SETNUMBER(
   self              IN OUT NOCOPY ANYDATASET,
   num               IN NUMBER,
   last_elem BOOLEAN DEFAULT FALSE);

MEMBER PROCEDURE SETNVARCHAR2(
   self             IN OUT NOCOPY ANYDATASET,
   nc               IN NVarchar2, 
   last_elem        IN BOOLEAN DEFAULT FALSE);

MEMBER PROCEDURE SETRAW(
   self              IN OUT NOCOPY ANYDATASET,
   r                 IN RAW,
   last_elem BOOLEAN DEFAULT FALSE);

MEMBER PROCEDURE SETTIMESTAMP(
   self              IN OUT NOCOPY ANYDATASET, 
   ts                IN TIMESTAMP,
   last_elem IN BOOLEAN DEFAULT FALSE);

MEMBER PROCEDURE SETTIMESTAMPTZ(
   self             IN OUT NOCOPY ANYDATASET, 
   ts               IN TIMESTAMP WITH TIME ZONE,
   last_elem        IN BOOLEAN DEFAULT FALSE);

MEMBER PROCEDURE SETVARCHAR(
   self              IN OUT NOCOPY ANYDATASET,
   c                 IN VARCHAR,
   last_elem BOOLEAN DEFAULT FALSE);

MEMBER PROCEDURE SETVARCHAR2(
   self              IN OUT NOCOPY ANYDATASET,
   c                 IN VARCHAR2,
   last_elem BOOLEAN DEFAULT FALSE);
```
为ANYDATASET中的单个数据元素实例设定值，在ADDINSTANSE后调用，需要和ANYDATASET创建时指定的类型一致。其他调用顺序将有以下表现：
- 进行过ADDINSTANSE但未设定值，正常调用SET赋值
- BEGINCREATE后未进行ADDINSTANSE，调用SET报错。
- 前向数据实例均已设定值，此时调用SET，覆盖最后一个数据实例。

|参数|类型|说明|
|--|--|--|
|self|ANYDATASET|self|
|-|-|12种对应类型参数|
|last_elem|BOOLEAN|是否是集合类型的最后一个元素，未使用|

#### ENDCREATE
```sql
MEMBER PROCEDURE ENDCREATE(
   self              IN OUT NOCOPY ANYDATASET);
```
结束ANYDATASET构建。ANYDATASET允许BEGINCREATE之后直接ENDCREATE，也就是空集。若有未设定值的元素，即ADDINSTANSE后未调用对应的SET，将报错。

|参数|类型|说明|
|--|--|--|
|self|ANYDATASET|self|

#### GET
```sql
MEMBER FUNCTION GETBDOUBLE(
   self        IN ANYDATASET, 
   index       IN int,
   dbl         OUT NOCOPY BINARY_DOUBLE)
 RETURN INTEGER;

MEMBER FUNCTION GETBLOB(
   self        IN ANYDATASET,
   index       IN int,
   b           OUT NOCOPY BLOB)
 RETURN      INTEGER;

MEMBER FUNCTION GETCHAR(
   self        IN ANYDATASET,
   index       IN int,
   c           OUT NOCOPY CHAR)
 RETURN INTEGER;

MEMBER FUNCTION GETDATE(
   self        IN ANYDATASET,
   index       IN int,
   dat         OUT NOCOPY DATE)
 RETURN INTEGER;

MEMBER FUNCTION GETNCHAR(
   self        IN ANYDATASET, 
   index       IN int,
   nc          OUT NOCOPY NCHAR)
 RETURN INTEGER;

MEMBER FUNCTION GETNUMBER(
   self        IN ANYDATASET,
   index       IN int,
   num         OUT NOCOPY NUMBER)
   RETURN INTEGER;

MEMBER FUNCTION GETNVARCHAR2(
   self        IN ANYDATASET, 
   index       IN int,
   nc          OUT NOCOPY NVARCHAR2)
 RETURN INTEGER;

MEMBER FUNCTION GETRAW(
   self        IN ANYDATASET,
   index       IN int,
   r           OUT NOCOPY RAW)
 RETURN INTEGER;

MEMBER FUNCTION GETTIMESTAMP(
   self        IN ANYDATASET, 
   index       IN int,
   ts          OUT NOCOPY TIMESTAMP)
 RETURN INTEGER;

MEMBER FUNCTION GETTIMESTAMPTZ(
   self        IN ANYDATASET, 
   index       IN int,
   ts          OUT NOCOPY TIMESTAMP WITH TIME ZONE) 
 RETURN INTEGER,

MEMBER FUNCTION GETVARCHAR(
   self        IN ANYDATASET,
   index       IN int,
   c           OUT NOCOPY VARCHAR)
 RETURN      INTEGER;

MEMBER FUNCTION GETVARCHAR2(
   self        IN ANYDATASET,
   index       IN int,
   c           OUT NOCOPY VARCHAR2)
 RETURN INTEGER;
```
根据index返回ANYDATASET中的元素

|参数|类型|说明|
|--|--|--|
|self|ANYDATASET|self|
|index|int|需要取的元素下标|
|--|--|12种对应类型出参|

返回值：SUCCESS(0)

#### GETCOUNT 
```sql
MEMBER FUNCTION GetCount(
   self        IN ANYDATASET) 
 RETURN INTEGER;
```

|参数|类型|说明|
|--|--|--|
|self|ANYDATASET|self|

返回值：ANYDATASET中元素的个数

#### GETTYPE
```sql
MEMBER FUNCTION GETTYPE(
   self           IN ANYDATASET,
   typ            OUT NOCOPY AnyType)
RETURN INTEGER;
```

将ANYDATASET的类型描述，即ANYTYPE部分赋给出参typ，并返回对应的类型的typecode。在限定的12种类型下，获取的typ均为NULL，typcode为实际类型。

|参数|类型|说明|
|--|--|--|
|self|ANYDATA|self|
|typ|AnyType|类型信息|

返回值：类型对应的typecode

#### GETTYPENAME
```sql
MEMBER FUNCTION GETTYPENAME(
   self         IN ANYDATASET)
   RETURN       VARCHAR2;
```

返回ANYDATA中存储的数据类型名称。

|参数|类型|说明|
|--|--|--|
|self|ANYDATA|self|

返回值：类型名

### 示例
```sql
declare
    v_anytype    anytype;
    v_anydataset anydataset;
    v_string float8;
    v_type int;
    v_typname varchar2;
    v_count int;
    v_typecode int;
begin
    anydataset.BeginCreate(1, v_anytype, v_anydataset);
    RAISE notice '%, %', array_length(v_anydataset.data, 1), v_anydataset.count;

    v_anydataset.addInstance();
    v_anydataset.SETvarchar('100.80');
    v_anydataset.addInstance();
    v_anydataset.SETvarchar('0.90');
    anydataset.EndCreate(v_anydataset);

    RAISE notice '%, %', array_length(v_anydataset.data, 1), v_anydataset.count;

    v_typname = v_anydataset.GetTypename();
    v_count = v_anydataset.GetCount();
    v_typecode = v_anydataset.GetType();

    RAISE notice 'name %, count %, type %', v_typname, v_count, v_typecode;
    
    v_type := v_anydataset.getvarchar(v_string,1);
    raise notice '%, %', v_string, v_type;
    v_type := v_anydataset.getvarchar(v_string,2);
    raise notice '%, %', v_string, v_type;
    v_type := v_anydataset.getvarchar(v_string,3);
    raise notice '%, %', v_string, v_type;  
end;
/
NOTICE:  0, 0
NOTICE:  2, 2
NOTICE:  name Varchar, count 2, type 1
NOTICE:  <NULL>, 0
NOTICE:  <NULL>, 0
NOTICE:  <NULL>, 0
ANONYMOUS BLOCK EXECUTE
```