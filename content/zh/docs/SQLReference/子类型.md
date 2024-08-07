# 子类型

## 功能描述
openGauss在PLSQL中支持subtype子类型。Subtype支持用户基于已有的类型派生出子类型，可以当成是正常类型去使用。Subtype可以分为受约束的子类型和不受约束的子类型。
- 不受约束的子类型：和基类型的范围一样，相当于一个别名。
  - 不受约束的子类型可以和派生自同一基类型的子类型以及基类型进行内部转换。
- 受约束的子类型：在基类型允许的情况下，可以给子类型设置约束。
  - 受约束的子类型可以隐式转换成它的基类型，但基类型只能在满足约束的情况下转换成子类型。
  - 受约束的子类型可以转换成同一个基类型派生出来的受约束子类型，但是要满足目标受约束子类型的约束。

## 语法格式
### 不受约束的子类型
```
    SUBTYPE subtype_name IS base_type
```
- subtype_name：创建的子类型名。
- base_type：派生出子类型的基类型。

### 受约束的子类型
```
    SUBTYPE subtype_name IS base_type [ precision [, scale ] [ NOT NULL ] ]
```
- subtype_name：创建的子类型名。
- base_type：派生出子类型的基类型。
- 受约束的子类型在基类型支持的情况下可以指定精度，规模，not null约束。

## 示例
```
-- 不受约束的子类型
DECLARE
    SUBTYPE Balance IS NUMBER;
    a Balance(6,2); --相当于NUMBER(6,2)
    b Balance; --相当于NUMBER
BEGIN
    a := 1000.1234;
    b := 100000.1234;
END;

-- 受约束的子类型
DECLARE
    SUBTYPE Balance is NUMBER(15,2);
    a Balance;
BEGIN
    a := 1000.1234;
END;
```
