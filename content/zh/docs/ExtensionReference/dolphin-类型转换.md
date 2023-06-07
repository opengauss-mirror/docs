# 类型转换

相比原始的openGauss，dolphin插件补全了以下数据类型间相互转换的规则，这些类型包括：
- BIT/TINYINT/SMALLINT/INT/BIGINT
- UINT1/UINT2/UINT4/UINT8
- NUMERIC/FLOAT/DOUBLE
- DATE/DATETIME/TIMESTAMP/TIME/YEAR
- CHAR/VARCHAR/TEXT/BINARY/VARBINARY/TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB
- ENUM/SET/JSON

其中，两个类型间的转换规则存在隐式（IMPLICIT, i）、赋值（ASSIGNMENT, a）、显式（EXPLICIT, e），三个级别，可通过系统表 pg_cast 的 castcontext 字段进行查看。三个级别的转换规则适用范围如下：

- 'e'：表示只支持显式转换（使用CAST或::语法）。
- 'a'：表示支持给目标列赋值时转换，同时支持显式转换。
- 'i'：表示支持表达式（函数、操作符等）隐式转化，同时支持赋值、显式转换。

### 转换规则

下列转换规则需GUC参数dolphin.b_compatibility_mode为on

#### 源类型：BIT

|目标类型|转换规则描述|备注|
|--|--|--|
|TINYINT/SMALLINT/INT/BIGINT<br>UINT1/UINT2/UINT4/UINT8<br>NUMERIC/FLOAT/DOUBLE|BIT转换数值类型可视作BIT转换UINT8后，再转换到目标类型，超出目标类型范围则溢出，严格模式下报错，非严格模式取目标类型最大值|BIT转换UINT8不存在负数，因此例如b'11111111'::tinyint不为-1，而是255::tinyint，溢出<br>到UINT4/UINT8/NUMERIC/FLOAT/DOUBLE的转换为隐式，其它为赋值|
|DATE/DATETIME/TIMESTAMP/TIME|BIT转换时间日期类型，按当前字符集将BIT二进制编码转换为字符串后，转换为时间日期类型|转换级别为赋值|
|YEAR|将二进制数值转换为十进制后，与数值类型转YEAR规则相同|YEAR类型的取值范围为0、1901~2155<br>转换级别为赋值|
|CHAR/VARCHAR/TEXT|按当前字符集将BIT二进制编码转换为字符串|转换级别为赋值|
|BINARY/VARBINARY|将二进制数值转换为十进制后，逐位数字按字符集转换|如b'11111'::binary，二进制11111转换十进制为31，3编码/x33，1编码/x31，结果为/x3331<br>转换级别为赋值|
|TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB|BIT二进制与BLOB十六进制对应|如b'11111111'::blob，为/xff<br>转换级别为赋值|
|ENUM|按二进制数值，对应ENUM编号进行转换|转换级别为赋值|
|SET|按二进制数值，对应SET编号进行转换|SET编号顺序为1、2、4、8...与二进制各位对应，可叠加，如b'101'转换为set第一、第三项的集合<br>转换级别为赋值|
|JSON|显示为"base64:type16:xxx"，其中xxx为BIT二进制转换为十六进制，"0x"格式字符串的base64编码|如b'1111'::json，结果为"base64:type16:Dw=="，其中Dw==按base64解码为0x0F<br>转换级别为显式|

#### 源类型：数值类型
#### TINYINT/SMALLINT/INT/BIGINT
#### UINT1/UINT2/UINT4/UINT8
#### NUMERIC/FLOAT/DOUBLE

|目标类型|转换规则描述|备注|
|--|--|--|
|BIT|数值类型转换BIT可视作数值类型转换BIT(64)后，再转换到目标BIT(n)，超长在严格模式下报错，非严格模式下为最大值（全1）。小数存在四舍五入|BIT(64)最高位可为符号位，因此-1::bit(8)不为'11111111'，而是64位1导致超长；<br>-1与UINT8_MAX均为64位1<br>到INT/BIGINT/UINT4/UINT8的转换级别为显式，其他为赋值|
|TINYINT/SMALLINT/INT/BIGINT<br>UINT1/UINT2/UINT4/UINT8<br>NUMERIC/FLOAT/DOUBLE|数值类型间相互转换，存在四舍五入、精度丢失、溢出等情况|转换级别为隐式|
|DATE|三位数为2000-0x-xx<br>四位数为2000-xx-xx<br>五位数为200x-xx-xx<br>六位数为20xx-xx-xx<br>七位数为0xxx-xx-xx<br>八位数为xxxx-xx-xx<br>小数部分忽略，无四舍五入|TINYINT/SMALLINT/INT到DATE的转换级别为隐式，UINT4到DATE的转换级别为显式，其他为赋值|
|DATETIME/TIMESTAMP|八位数及以下日期部分与DATE相同，时间为00:00:00；九位数及以上优先时间：<br>九位数为2000-0x-xx xx:xx:xx<br>十位数为200x-xx-xx xx:xx:xx<br>十一位数为20xx-xx-xx xx:xx:xx<br>十二位数为0xxx-xx-xx xx:xx:xx<br>十三位数为xxxx-xx-xx xx:xx:xx<br>小数部分忽略，无四舍五入<br>|TINYINT/SMALLINT/INT/BIGINT/NUMERIC到DATETIME/TIMESTAMP的转换级别为隐式，UINT4/UINT8为显式，其他为赋值|
|TIME|从秒开始逐位对应|B兼容性下的TIME类型取值范围为-838:59:59~838:59:59；<br>'12:34'::time，结果为12::34::00，也更符合日常使用习惯，但1234::time，结果为00::12::34，注意区分。关于字符类型更多转换规则详见具体介绍<br>TINYINT/SMALLINT/INT/BIGINT/NUMERIC到TIME的转换级别为隐式，UINT4为显式，其他为赋值|
|YEAR|0为0<br>一位数200x<br>两位数20xx<br>四位数xxxx<br>小数存在四舍五入|YEAR类型的取值范围为0、1901~2155<br>TINYINT/SMALLINT/INT到YEAR的转换级别为隐式，UINT4为显式，其他为赋值|
|CHAR/VARCHAR/TEXT|按数值转换为字符串|到TEXT的转换级别均为隐式<br>UINT1/UINT2/UINT4/UINT8到CHAR/VARCHAR的转换级别为赋值，其他为隐式|
|BINARY/VARBINARY<br>TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB|按数值转换为字符串，以/x格式的十六进制当前字符集编码显示|转换级别为赋值|
|ENUM|按数值对应ENUM编号进行转换<br>小数部分忽略，无四舍五入|转换级别为赋值|
|SET|按数值对应SET编号进行转换<br>小数部分忽略，无四舍五入|SET编号顺序为1、2、4、8...，可叠加，如5转换为set第一、第三项的集合<br>SMALLINT/INT/BIGINT/NUMERIC/FLOAT/DOUBLE到SET的转换为隐式，其他为赋值|
|JSON|按数值转换，与字符串类似|转换级别为显式|

#### 源类型：DATE

|目标类型|转换规则描述|备注|
|--|--|--|
|BIT|按字面数值逐位转换为十进制数值后，再转换为二进制数值。参考数值类型转换BIT规则|转换级别为赋值|
|TINYINT/SMALLINT/INT/BIGINT<br>UINT1/UINT2/UINT4/UINT8<br>NUMERIC/FLOAT/DOUBLE|按字面数值逐位转换为十进制数值|到TINYINT/SMALLINT/UINT1/UINT2的转换级别为赋值，其他为隐式|
|DATETIME/TIMESTAMP|日期不变，时间为00:00:00|转换级别为隐式|
|TIME|00::00::00|转换级别为赋值|
|YEAR|按字面数值进行转换，规则与数值类型转YEAR规则相同|YEAR类型的取值范围为0、1901~2155<br>转换级别为赋值|
|CHAR/VARCHAR/TEXT|按对应显示格式转换为字符串|转换级别为隐式|
|BINARY/VARBINARY<br>TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB|按对应显示格式转换为字符串，以/x格式的十六进制当前字符集编码显示|转换级别为赋值|
|ENUM|按对应显示格式字符串转换，转换为ENUM对应Lable的项|转换级别为赋值|
|SET|按对应显示格式字符串转换，转换为SET对应Lable的项|转换级别为赋值|
|JSON|按对应显示格式字符串转换，双引号包裹|转换级别为显式|

#### 源类型：DATETIME/TIMESTAMP

|目标类型|转换规则描述|备注|
|--|--|--|
|BIT|按字面数值逐位转换为十进制数值后，再转换为二进制数值。参考数值类型转换BIT规则|转换级别为赋值|
|TINYINT/SMALLINT/INT/BIGINT<br>UINT1/UINT2/UINT4/UINT8<br>NUMERIC/FLOAT/DOUBLE|按字面数值逐位转换为十进制数值|到TINYINT/SMALLINT/INT/UINT1/UINT2/UINT4的转换级别为赋值，BIGINT/UINT8/NUMERIC/FLOAT/DOUBLE的转换级别为隐式|
|DATE|保留日期部分|转换级别为赋值|
|TIMESTAMP/DATETIME|DATETIME与TIMESTAMP的区别为前者不带时区(timezone)信息，后者带|DATETIME到TIMESTAMP转换级别为隐式，TIMESTAMP到DATETIME转换级别为赋值|
|TIME|保留时间部分|DATETIME到TIME转换级别为隐式，TIMESTAMP到TIME转换级别为赋值|
|YEAR|按字面数值进行转换，规则与数值类型转YEAR规则相同|YEAR类型的取值范围为0、1901~2155<br>转换级别为赋值|
|CHAR/VARCHAR/TEXT|按对应显示格式转换为字符串|转换级别为隐式|
|BINARY/VARBINARY<br>TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB|按对应显示格式转换为字符串，以/x格式的十六进制当前字符集编码显示|转换级别为赋值|
|ENUM|按对应显示格式字符串转换，转换为ENUM对应Lable的项|转换级别为赋值|
|SET|按对应显示格式字符串转换，转换为SET对应Lable的项|转换级别为赋值|
|JSON|按对应显示格式字符串转换，双引号包裹|转换级别为显式|

#### 源类型：TIME

|目标类型|转换规则描述|备注|
|--|--|--|
|BIT|按字面数值逐位转换为十进制数值后，再转换为二进制数值。参考数值类型转换BIT规则|转换级别为赋值|
|TINYINT/SMALLINT/INT/BIGINT<br>UINT1/UINT2/UINT4/UINT8<br>NUMERIC/FLOAT/DOUBLE|按字面数值逐位转换为十进制数值|到TINYINT/SMALLINT/UINT1/UINT2的转换级别为赋值，其他为隐式|
|DATE|当前日期加减（TIME类型存在负时间）后的日期|转换级别为赋值|
|DATETIME/TIMESTAMP|DATETIME与TIMESTAMP的区别为前者不带时区(timezone)信息，后者带|转换级别为赋值|
|YEAR|按字面数值进行转换，规则与数值类型转YEAR规则相同|YEAR类型的取值范围为0、1901~2155<br>转换级别为赋值|
|CHAR/VARCHAR/TEXT|按对应显示格式转换为字符串|转换级别为隐式|
|BINARY/VARBINARY<br>TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB|按对应显示格式转换为字符串，以/x格式的十六进制当前字符集编码显示|转换级别为赋值|
|ENUM|按对应显示格式字符串转换，转换为ENUM对应Lable的项|转换级别为赋值|
|SET|按对应显示格式字符串转换，转换为SET对应Lable的项|转换级别为赋值|
|JSON|按对应显示格式字符串转换，双引号包裹|转换级别为显式|

#### 源类型：YEAR

|目标类型|转换规则描述|备注|
|--|--|--|
|BIT|按数值逐位转换为十进制数值后，再转换为二进制数值。参考数值类型转换BIT规则|转换级别为赋值|
|TINYINT/SMALLINT/INT/BIGINT<br>UINT1/UINT2/UINT4/UINT8<br>NUMERIC/FLOAT/DOUBLE|按数值转换|到INT的转换级别为隐式，到UINT4/UINT8/NUMERIC/DOUBLE的转换级别为显式，其他为赋值|
|DATE|与数值类型转DATE规则相同|转换级别为赋值|
|DATETIME/TIMESTAMP|与数值类型转DATETIME/TIMESTAMP规则相同|转换级别为赋值|
|TIME|与数值类型转TIME规则相同|转换级别为赋值|
|CHAR/VARCHAR/TEXT|按对应显示格式转换为字符串|转换级别为赋值|
|BINARY/VARBINARY<br>TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB|按对应显示格式转换为字符串，以/x格式的十六进制当前字符集编码显示|转换级别为赋值|
|ENUM|按数值对应ENUM编号进行转换|转换级别为赋值|
|SET|按数值对应SET编号进行转换|转换级别为赋值|
|JSON|按数值转换，与字符串类似|转换级别为显式|

#### 源类型：CHAR/VARCHAR/TEXT

|目标类型|转换规则描述|备注|
|--|--|--|
|BIT|将字符串转换为对应字符集十六进制编码后，再转换为二进制编码|转换级别为显式|
|TINYINT/SMALLINT/INT/BIGINT<br>UINT1/UINT2/UINT4/UINT8<br>NUMERIC/FLOAT/DOUBLE|按字符串字面数值转换|转换级别为隐式|
|DATE/DATETIME/TIMESTAMP/TIME|按对应格式进行转换，格式规则较多|TEXT到TIMESTAMP/TIME转换级别为显式，其他为隐式|
|YEAR|按字符串字面数值进行转换，规则与数值类型转YEAR规则相同|YEAR类型的取值范围为0、1901~2155<br>转换级别为赋值|
|CHAR/VARCHAR/TEXT|字符串类型互转|转换级别为隐式|
|BINARY/VARBINARY<br>TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB|以/x格式的十六进制当前字符集编码显示|转换级别为赋值|
|ENUM|按字符串转换为ENUM对应Lable的项|转换级别为赋值|
|SET|按字符串转换为SET对应Lable的项|转换级别为隐式|
|JSON|按合法的JSON字符串格式进行转换|转换级别为显式|

#### 源类型：BINARY/VARBINARY<br>TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB

|目标类型|转换规则描述|备注|
|--|--|--|
|BIT|将对应字符集的十六进制编码转换为二进制编码|转换级别为赋值|
|TINYINT/SMALLINT/INT/BIGINT<br>UINT1/UINT2/UINT4/UINT8<br>NUMERIC/FLOAT/DOUBLE|用对应字符集解码后，按字符串字面数值转换|到DOUBLE的转换级别为隐式，其他为赋值|
|DATE/DATETIME/TIMESTAMP/TIME|用对应字符集解码后，按对应格式进行转换，格式规则较多|转换级别为赋值|
|YEAR|用对应字符集解码后，按字符串字面数值进行转换，规则与数值类型转YEAR规则相同|YEAR类型的取值范围为0、1901~2155<br>转换级别为赋值|
|CHAR/VARCHAR/TEXT|用对应字符集解码|转换级别为赋值|
|BINARY/VARBINARY<br>TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB|相似类型互转|BINARY/VARBINARY间转换级别为隐式，TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB间转换级别为隐式，其他为赋值|
|ENUM|用对应字符集解码后，按字符串转换为ENUM对应Lable的项|转换级别为赋值|
|SET|用对应字符集解码后，按字符串转换为SET对应Lable的项|转换级别为赋值|
|JSON|BANARY转JSON显示为"base64:type254:xxx"<br>VARBANARY转JSON显示为"base64:type15:xxx"<br>TINYBLOB转JSON显示为"base64:type249:xxx"<br>MEDIUMBLOB转JSON显示为"base64:type250:xxx"<br>BLOB转JSON显示为"base64:type252:xxx"<br>LONGBLOB转JSON显示为"base64:type251:xxx"<br>其中xxx为"0x"格式字符串的base64编码|如x'5C'::blob::json，结果为"base64:type252:XA=="，其中XA==按base64解码为0x5C<br>转换级别为显式|

#### 源类型：ENUM

|目标类型|转换规则描述|备注|
|--|--|--|
|BIT|将对应项的编号数值转换为二进制|如存在test_enum(a enum('a', 'b', 'c')), 则其中第二项转换为BIT(4)结果为b'0010'<br>转换级别为赋值|
|TINYINT/SMALLINT/INT/BIGINT<br>UINT1/UINT2/UINT4/UINT8<br>NUMERIC/FLOAT/DOUBLE|按对应项编号数值转换|ENUM转换DOUBLE级别为隐式，其他为赋值|
|DATE/DATETIME/TIMESTAMP/TIME|取对应项Lable字符串，按对应格式进行转换，格式规则较多|转换级别为赋值|
|YEAR|按对应项编号数值，规则与数值类型转YEAR规则相同|YEAR类型的取值范围为0、1901~2155<br>转换级别为赋值|
|CHAR/VARCHAR/TEXT|对应项的Label字符串|转换级别为赋值|
|BINARY/VARBINARY<br>TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB|取对应项Lable字符串，以/x格式的十六进制当前字符集编码显示|转换级别为赋值|
|SET|转换为Label字符串相同的项|转换级别为赋值|
|JSON|取对应项Lable字符串，按合法的JSON字符串格式进行转换|转换级别为显式|

#### 源类型：SET

|目标类型|转换规则描述|备注|
|--|--|--|
|BIT|将对应项的编号数值转换为二进制|如存在test_set(a set('a', 'b', 'c')), 则其中第一、第三项集合转换为BIT(4)结果为b'0101'<br>转换级别为赋值|
|TINYINT/SMALLINT/INT/BIGINT<br>UINT1/UINT2/UINT4/UINT8<br>NUMERIC/FLOAT/DOUBLE|按对应项编号数值转换|到SMALLINT/INT/BIGINT/NUMERIC/FLOAT/DOUBLE的转换级别为隐式，到TINYINT/UINT1/UINT2/UINT4/UINT8的转换级别为赋值|
|DATE/DATETIME/TIMESTAMP/TIME|取对应项Lable字符串，按对应格式进行转换，格式规则较多|转换级别为赋值|
|YEAR|按对应项编号数值，规则与数值类型转YEAR规则相同|YEAR类型的取值范围为0、1901~2155<br>转换级别为赋值|
|CHAR/VARCHAR/TEXT|对应项的Label字符串|转换级别为隐式|
|BINARY/VARBINARY<br>TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB|取对应项Lable字符串，以/x格式的十六进制当前字符集编码显示|转换级别为赋值|
|ENUM|转换为Label字符串相同的项|转换级别为赋值|
|JSON|取对应项Lable字符串，按合法的JSON字符串格式进行转换|转换级别为显式|

#### 源类型：JSON

|目标类型|转换规则描述|备注|
|--|--|--|
|BIT|将JSON字符串转换为对应字符集十六进制编码后，再转换为二进制编码|转换级别为赋值|
|TINYINT/SMALLINT/INT/BIGINT<br>UINT1/UINT2/UINT4/UINT8<br>NUMERIC/FLOAT/DOUBLE|按JSON字符串字面数值转换|转换级别为赋值|
|DATE/DATETIME/TIMESTAMP/TIME|JSON字符串按对应格式进行转换，格式规则较多|转换级别为赋值|
|YEAR|按JSON字符串字面数值进行转换，规则与数值类型转YEAR规则相同|YEAR类型的取值范围为0、1901~2155<br>转换级别为赋值|
|CHAR/VARCHAR/TEXT|JSON字符串转换为字符串|转换级别为赋值|
|BINARY/VARBINARY<br>TINYBLOB/MEDIUMBLOB/BLOB/LONGBLOB|以/x格式的十六进制当前字符集编码显示|转换级别为显式|
|ENUM|按字符串转换为ENUM对应Lable的项|转换级别为赋值|
|SET|按字符串转换为SET对应Lable的项|转换级别为隐式|


