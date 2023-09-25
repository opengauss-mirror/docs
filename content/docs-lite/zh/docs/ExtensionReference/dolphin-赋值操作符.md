# 赋值操作符

相比于原始的openGauss，dolphin对于赋值操作符的修改主要为:
 新增支持通过```:=```的方式赋值。如 ```UPDATE table_name SET col_name := new_val;```。