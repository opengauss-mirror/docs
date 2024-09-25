# SUBTYPE

## Brief
OpenGauss supprt subtype in PLSQL. Subtype allow user to build subtype from exists type, and use subtype as exits type. There are Uncontrained Subtype amd Contrained Subtype in OpenGauss.
- Uncontrained Subtype: An unconstrained subtype has the same set of values as its base type, so it is only another name for the base type.
  - Unconstrained subtypes of the same base type are interchangeable with each other and with the base type. No data type conversion occurs.
- Contrained Subtype: A constrained subtype has only a subset of the values of its base type. 
  - A constrained subtype can be implicitly converted to its base type, but the base type can be implicitly converted to the constrained subtype only if the value does not violate a constraint of the subtype.
  - A constrained subtype can be implicitly converted to another constrained subtype with the same base type only if the source value does not violate a constraint of the target subtype.

## Syntax
### Uncontrained Subtype
```
    SUBTYPE subtype_name IS base_type
```
- subtype_name: name of created subtype 
- base_type: base type of created subtype

### Contrained Subtype
```
    SUBTYPE subtype_name IS base_type [precision [, scale ] [ NOT NULL ] ]
```
- subtype_name: name of created subtype 
- base_type: base type of created subtype
- If the base type lets you specify size, precision and scale, then you can specify them for its subtypes


## Examples
```
-- Uncontrained Subtype
DECLARE
    SUBTYPE Balance IS NUMBER;
    a Balance(6,2); --NUMBER(6,2)
    b Balance; --NUMBER
BEGIN
    a := 1000.1234;
    b := 100000.1234;
END;

-- Contrained Subtype
DECLARE
    SUBTYPE Balance is NUMBER(15,2);
    a Balance;
BEGIN
    a := 1000.1234;
END;
```
