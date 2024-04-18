# dolphin-操作符优先级

操作符从高到低排序如下（同一行的操作符拥有相同的优先级）：

```
COLLATE
OR_OR_SYM
^
*, /, %
+, -
IS
ISNULL
NOTNULL
Op, OPERATOR '@'
REGEXP, RLIKE
DIV, MOD
IN_P, NOT_IN
BETWEEN, NOT_BETWEEN
LIKE, NOT_LIKE
BINARY
'=', '<', '>', CmpOp ('!=', '<>', '<=', '>=', '^=')
CmpNullOp ('<=>'), COLON_EQUALS (':=')
NOT
AND
XOR
OR
```
-   当```dolphin.b_compatibility_mode```为```TRUE```时，```PIPES_AS_CONCAT```默认将开启,```||```则为```OR_OR_SYM```，作为字符串连接；当```PIPES_AS_CONCAT```关闭时，```||```则为逻辑```OR```操作符。