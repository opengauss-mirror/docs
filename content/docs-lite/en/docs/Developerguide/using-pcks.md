# Using PCKs<a name="EN-US_TOPIC_0289900213"></a>

The PCK is the column-store-based technology. It can minimize or maximize sparse indexes to quickly filter base tables. You are advised to select a maximum of two columns as PCKs. Use the following principles to specify PCKs:

1.  The selected PCKs must be restricted by simple expressions in base tables. Such constraints are usually represented by  _col op const_, in which  _col_  indicates the column name,  _op_  indicates operators, \(including =, \>, \>=, <=, and <\), and  _const_  indicates constants.
2.  Select columns that are frequently selected \(to filter much more undesired data\) in simple expressions.
3.  List the less frequently selected columns on the top.
4.  List the columns of the enumerated type at the top.

