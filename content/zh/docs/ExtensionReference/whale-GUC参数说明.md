# GUC参数说明

## whale.a\_compatibility\_mode<a name="section203671436825"></a>

**参数说明**：参数值为布尔类型，该参数影响whale插件中的部分冲突的函数和操作符等，参数开启时这些函数和操作符会执行兼容性逻辑，关闭时则保持openGauss原有的逻辑。

该参数目前暂时无作用，考虑到openGauss在对dolphin进行开发时的开发经验进行了保留。

**取值范围**：布尔型

-   on表示使用新增兼容性功能。
-   off表示关闭兼容性功能，使用内核原有功能。

**默认值**：off

## whale.timezone<a name="section203671436825"></a>

**参数说明**：用于指定sysdate的时间区域。

**取值范围**：字符串

**默认值**：GMT

## whale.nls\_date\_format<a name="section203671436825"></a>

**参数说明**：设置日期输出格式，模拟A兼容数据库的日期输出行为。

**取值范围**：字符串

**默认值**：NULL

## whale.varchar2\_null\_safe\_concat<a name="section203671436825"></a>

**参数说明**：用于控制orafce.orafce_concat2以及||操作符的行为。

**取值范围**：布尔型

-   on表示当其中一个字符串为NULL时，返回NULL。
-   off表示当其中一个字符串为NULL时，返回另一个字符串。

**默认值**：off
