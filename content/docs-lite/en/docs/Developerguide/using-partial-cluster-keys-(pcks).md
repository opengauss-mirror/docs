# Using Partial Cluster Keys \(PCKs\)<a name="EN-US_TOPIC_0000001119812466"></a>

PCK is a column-store technology. It can minimize or maximize sparse indexes to quickly filter base tables. PCKs can be used to specify multiple columns. However, it is recommended that a maximum of two columns be specified. Use the following principles to specify PCKs:

1.  The specified PCKs must be restricted by simple expressions in base tables. Such constraints are usually represented by  _col op const_, in which  _col_  indicates the column name,  _op_  indicates operators \(including =, \>, \>=, <=, and <\), and  _const_  indicates constants.
2.  Select columns that are frequently selected \(to filter much more undesired data\) in simple expressions.
3.  List the most frequently selected columns at the top.
4.  List the columns of the enumerated type at the top.

