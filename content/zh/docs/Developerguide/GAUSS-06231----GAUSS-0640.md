# GAUSS-06231 -- GAUSS-0640<a name="ZH-CN_TOPIC_0302073576"></a>

GAUSS-06231: "There is no exist vararrno with 0"

SQLSTATE: 22023

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-06232: "tle can not be found from targetlist"

SQLSTATE: 22004

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-06233: "No data node information for table: %s"

SQLSTATE: XX006

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-06234: "No data node found for u\_sess-\>pgxc\_cxt.gc\_fdw\_current\_idx: %d, u\_sess-\>pgxc\_cxt.gc\_fdw\_max\_idx: %d"

SQLSTATE: XX006

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-06235: "Unsupported Table Sample FOR TIMESERIES."

SQLSTATE: 0A000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-06236: "Unsupported Index Scan FOR TIMESERIES."

SQLSTATE: 0A000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-06237: "Unsupported Bitmap Heap Scan FOR TIMESERIES."

SQLSTATE: 0A000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-06238: "Unsupported Bitmap And FOR TIMESERIES."

SQLSTATE: 0A000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-06239: "Unsupported Bitmap OR FOR TIMESERIES."

SQLSTATE: 0A000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-06240: "Unsupported Bitmap Index Scan FOR TIMESERIES."

SQLSTATE: 0A000

错误原因：系统内部错误。

解决办法：请联系技术支持工程师提供技术支持。

GAUSS-06134: "'%s' is not a valid EOL string, EOL string must not be empty"

SQLSTATE：无

错误原因：自定义换行符不能为空。

解决办法：请检查指定的自定义换行符，确保自定义换行符不为空。

GAUSS-06135: "'%s' is not a valid EOL string, EOL string must not exceed the maximum length \(10 bytes\)"

SQLSTATE：无

错误原因：自定义换行符超出最大长度（10字节）。

解决办法：请检查指定的自定义换行符的长度，确保自定义换行符的长度不超出最大长度。

GAUSS-06136: "COPY delimiter cannot contain user-define EOL string"

SQLSTATE：无

错误原因：分隔符不能包含自定义换行符。

解决办法：请检查分隔符和换行符，确保分隔符不包含自定义换行符。

GAUSS-06137: "COPY null representation cannot contain user-define EOL string"

SQLSTATE：无

错误原因：NULL值不能包含自定义换行符。

解决办法：请检查NULL值，确保NULL值不包含自定义换行符。

GAUSS-06138: "EOL string '%s' cannot contain any characters in'%s'"

SQLSTATE：无

错误原因：自定义换行符不能包含任何字符。

解决办法：请检查自定义换行符，确保不包含任何字符。

GAUSS-06139: "EOL specification can not be used with non-text format using COPY FROM or READ ONLY foreign table"

SQLSTATE：无

错误原因：自定义换行符不能用于非TEXT格式的copy导入或只读外表。

解决办法：请检查copy导入或只读外表的设置的文件格式，确保为TEXT格式。

GAUSS-06140: "EOL specification can not be used with non-text format using COPY TO or WRITE ONLY foreign table except 0x0D0A and 0x0A"

SQLSTATE：无

错误原因：自定义换行符不能用于非TEXT格式的copy导出或只写外表，但是允许自定义换行符0x0D0A和0x0A。

解决办法：请检查copy导出或只写外表的设置的文件格式，确保为TEXT格式。
