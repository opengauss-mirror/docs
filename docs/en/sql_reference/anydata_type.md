# ANYDATA Type

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:19:48.549Z -->

ANYTYPE, ANYDATA, and ANYDATASET are a set of types used for handling dynamic data types. They contain the actual data of a type as well as the description of that type, and can be used to dynamically process various data types.

## Description

1. The ordinary data types that can be processed by the ANYTYPE, ANYDATA, and ANYDATASET types are limited to the following 12 types: binary_double, blob, char, date, nchar, number, nvarchar2, raw, timestamp, timestamptz, varchar, and varchar2.
2. For ANYDATA and ANYDATASET objects constructed by the CONVERT method of the above 12 corresponding types, the type description part, that is, the ANYTYPE attribute, is NULL. For details, see the GETTYPE stored procedure below.
3. All three types are created under the `public` schema. The stored procedures contained in these types must be called using the format "type_name.stored_procedure_name". Stored procedures that include the `self` parameter can also be called using the format "object_name.stored_procedure_name". For stored procedures that have only the `self` parameter, the parentheses cannot be omitted when calling them. The usage is similar to object-oriented syntax. For details, see the SQL statement examples for the corresponding types below.

## ANYTYPE

The ANYTYPE type can store type descriptions of other types, such as type names, precision of numeric types, and length of string types.

### Stored Procedure

#### BEGINCREATE

```sql
STATIC PROCEDURE BEGINCREATE(
   typecode       IN          INTEGER,
   atype          OUT         ANYTYPE);
```

Creates a new ANYTYPE instance for creating a type description.

|Name|Type|Description|
|--|--|--|
|typecode|int|Input parameter, an integer representing the corresponding type|
|atype|anytype|Output parameter, the initialized anytype|

The following lists the typecode values corresponding to the 12 types above:

|Typecode|Type|
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

Sets the attributes of ANYTYPE.

|Name|Type|Description|
|--|--|--|
|self|ANYTYPE|self|
|prec|int|Numeric type precision|
|scale|int|Numeric type scale, used together with precision|
|len|int|String type length|
|csid|int|Character set ID|
|csfrm|int|Character format|
|atype|ANYTYPE|Object type input parameter, unused|
|elem_tc|int|Collection type typecode, unused|
|elem_count|int|Length of table or array type, unused|

#### ENDCREATE

```sql
MEMBER PROCEDURE ENDCREATE(
   self           IN OUT NOCOPY ANYTYPE);
```

Ends the creation of an ANYTYPE. After this call, other SET functions cannot be called.

|Name|Type|Description|
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

Obtains the attribute value of the ANYTYPE type. This procedure must be called after ENDCREATE.

|Name|Type|Description|
|--|--|--|
|self|ANYTYPE|self|
|prec|int|Numeric type precision|
|scale|int|Numeric type scale, used together with precision|
|len|int|String type length|
|csid|int|Character set ID|
|csfrm|int|Character format|
|schema_name|varchar|Schema where the type resides|
|type_name|varchar|Type name|
|version|varchar|Version of the type|
|numelems|int|Number of elements for array types, number of attributes for object types|

Return value: typecode corresponding to type_name

### Examples

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

ANYDATA is used to handle dynamic data types. It contains the actual data of the type as well as the description of that type. Its type description part can be regarded as an ANYTYPE.

### Stored Procedures

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

Creates a new ANYDATA instance. For ANYDATA constructed using the above 12 CONVERT methods, the type description part, i.e., the ANYTYPE attribute, is NULL.

|Name|Type|Description|
|--|--|--|
|-|-|Input parameters corresponding to the 12 types|

Return value: ANYDATA

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

Returns the data in ANYDATA. The data type must first match the data type stored in ANYDATA. If they do not match, NULL is returned.

|Name|Type|Description|
|--|--|--|
|self|ANYDATA|self|

Return value: 12 corresponding types

#### GETTYPE

```sql
MEMBER FUNCTION GETTYPE(
   self          IN ANYDATA,
   typ           OUT NOCOPY AnyType)
   RETURN        INTEGER;
```

Returns the type description of ANYDATA, that is, the ANYTYPE portion, to the output parameter typ, and returns the corresponding typecode. Among the 12 limited types, the obtained typ is NULL, and typcode is the actual type.

|Name|Type|Description|
|--|--|--|
|self|ANYDATA|self|
|typ|AnyType|Type information|

Return value: typecode corresponding to the type

#### GETTYPENAME

```sql
MEMBER FUNCTION GETTYPENAME(
   self         IN ANYDATA)
   RETURN       VARCHAR2;
```

Returns the name of the data type stored in ANYDATA.

|Name|Type|Description|
|--|--|--|
|self|ANYDATA|self|

Return value: Type name

### Example

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

ANYDATASET is used to handle a set of data of dynamic types. It can be regarded as a collection of ANYDATA, and the types within a single collection must be the same.

### Stored Procedures

#### BEGINCREATE

```sql
STATIC PROCEDURE BeginCreate(
   typecode     IN INTEGER,
   rtype        IN OUT NOCOPY AnyType,
   aset         OUT NOCOPY ANYDATASET);
```

The function receives a typecode to determine the type of elements in the collection, and creates a new ANYDATASET instance. The typecode mapping here is the same as that of ANYTYPE.

|Name|Type|Description|
|--|--|--|
|typecode|int|Typecode of the collection type|
|rtype|AnyType|Type attribute of the collection type|
|aset|ANYDATASET|Output parameter, return value of the initialization function|

|typecode|Type|
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

Creates a new data element in the ANYDATASET. This stored procedure must be called each time a new element is added.

|Name|Type|Description|
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

Sets the value for a single data element instance in ANYDATASET. It is called after ADDINSTANSE and must be consistent with the type specified when ANYDATASET was created. Other call sequences will exhibit the following behaviors:

- If ADDINSTANSE has been performed but no value has been set, SET is called normally to assign the value.
- If ADDINSTANSE has not been performed after BEGINCREATE, calling SET reports an error.
- If all preceding data instances have been set with values, calling SET at this point overwrites the last data instance.

|Name|Type|Description|
|--|--|--|
|self|ANYDATASET|self|
|-|-|12 corresponding type parameters|
|last_elem|BOOLEAN|Whether it is the last element of the collection type. Not used.|

#### ENDCREATE

```sql
MEMBER PROCEDURE ENDCREATE(
   self              IN OUT NOCOPY ANYDATASET);
```

Ends the construction of ANYDATASET. ANYDATASET allows ENDCREATE directly after BEGINCREATE, which results in an empty set. If there are elements with unset values, that is, if the corresponding SET is not called after ADDINSTANSE, an error will be reported.

|Name|Type|Description|
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

Returns the element in ANYDATASET based on index.

|Name|Type|Description|
|--|--|--|
|self|ANYDATASET|self|
|index|int|Subscript of the element to be retrieved|
|--|--|12 corresponding types as output parameters|

Return value: SUCCESS(0)

#### GETCOUNT

```sql
MEMBER FUNCTION GetCount(
   self        IN ANYDATASET) 
 RETURN INTEGER;
```

|Name|Type|Description|
|--|--|--|
|self|ANYDATASET|self|

Return value: Number of elements in the ANYDATASET.

#### GETTYPE

```sql
MEMBER FUNCTION GETTYPE(
   self           IN ANYDATASET,
   typ            OUT NOCOPY AnyType)
RETURN INTEGER;
```

Assigns the type description of ANYDATASET, that is, the ANYTYPE part, to the output parameter typ, and returns the typecode of the corresponding type. Under the 12 restricted types, the obtained typ is always NULL, and typcode is the actual type.

|Name|Type|Description|
|--|--|--|
|self|ANYDATA|self|
|typ|AnyType|Type information|

Return value: typecode corresponding to the type

#### GETTYPENAME

```sql
MEMBER FUNCTION GETTYPENAME(
   self         IN ANYDATASET)
   RETURN       VARCHAR2;
```

Returns the name of the data type stored in ANYDATA.

|Name|Type|Description|
|--|--|--|
|self|ANYDATA|self|

Return value: Type name

### Example

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
