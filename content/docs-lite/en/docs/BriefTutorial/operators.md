# Operators<a name="EN-US_TOPIC_0000001255341783"></a>

An operator in openGauss is a reserved keyword or character, and it is generally used in the WHERE statement as a filter condition. Common operators are as follows:

## Arithmetic Operators<a name="section168844437515"></a>

-   +

    Description: Addition

    Example:

    ```
    openGauss=# SELECT 2+3 AS RESULT;
     result 
    --------
          5
    (1 row)
    ```

-   -

    Description: Subtraction

    Example:

    ```
    openGauss=# SELECT 2-3 AS RESULT;
     result 
    --------
         -1
    (1 row)
    ```

-   \*

    Description: Multiplication

    Example:

    ```
    openGauss=# SELECT 2*3 AS RESULT;
     result 
    --------
          6
    (1 row)
    ```

-   /

    Description: Division \(The result is not rounded.\)

    Example:

    ```
    openGauss=# SELECT 4/2 AS RESULT;
     result 
    --------
          2
    (1 row)
    ```

    ```
    openGauss=# SELECT 4/3 AS RESULT;
          result      
    ------------------
     1.33333333333333
    (1 row)
    ```

-   +/-

    Description: Positive/Negative

    Example:

    ```
    openGauss=# SELECT -2 AS RESULT;
     result 
    --------
         -2
    (1 row)
    ```

-   %

    Description: Model \(to obtain the remainder\)

    Example:

    ```
    openGauss=# SELECT 5%4 AS RESULT;
     result 
    --------
          1
    (1 row)
    ```

-   @

    Description: Absolute value

    Example:

    ```
    openGauss=# SELECT @ -5.0 AS RESULT;
     result 
    --------
        5.0
    (1 row)
    ```

-   ^

    Description: Power \(exponent calculation\)

    Example:

    ```
    openGauss=# SELECT 2.0^3.0 AS RESULT;
           result       
    --------------------
     8.0000000000000000
    (1 row)
    ```

-   |/

    Description: Square root

    Example:

    ```
    openGauss=# SELECT |/ 25.0 AS RESULT;
     result 
    --------
          5
    (1 row)
    ```

-   ||/

    Description: Cubic root

    Example:

    ```
    openGauss=# SELECT ||/ 27.0 AS RESULT;
     result 
    --------
          3
    (1 row)
    ```

-   !

    Description: Factorial

    Example:

    ```
    openGauss=# SELECT 5! AS RESULT;
     result 
    --------
        120
    (1 row)
    ```

-   !!

    Description: Factorial \(prefix operator\)

    Example:

    ```
    openGauss=# SELECT !!5 AS RESULT;
     result 
    --------
        120
    (1 row)
    ```

-   &

    Description: Binary AND

    Example:

    ```
    openGauss=# SELECT 91&15  AS RESULT;
     result 
    --------
         11
    (1 row)
    ```

-   |

    Description: Binary OR

    Example:

    ```
    openGauss=# SELECT 32|3  AS RESULT;
     result 
    --------
         35
    (1 row)
    ```

-   \#

    Description: Binary XOR

    Example:

    ```
    openGauss=# SELECT 17#5  AS RESULT;
     result 
    --------
         20
    (1 row)
    ```

-   \~

    Description: Binary NOT

    Example:

    ```
    openGauss=# SELECT ~1 AS RESULT;
     result 
    --------
         -2
    (1 row)
    ```

-   <<

    Description: Binary shift left

    Example:

    ```
    openGauss=# SELECT 1<<4 AS RESULT;
     result 
    --------
         16
    (1 row)
    ```

-   \>\>

    Description: Binary shift right

    Example:

    ```
    openGauss=# SELECT 8>>2 AS RESULT;
     result 
    --------
          2
    (1 row)
    ```


## Comparison Operators<a name="section06105235531"></a>

Comparison operators are available for the most data types and return Boolean values.

All comparison operators are binary operators. Only data types that are the same or that can be implicitly converted can be compared by using comparison operators.

[Table 1](#en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_table65067702)  describes the comparison operators provided by openGauss.

**Table  1**  Comparison operators

<a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_table65067702"></a>
<table><thead align="left"><tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row57729408"><th class="cellrowborder" valign="top" width="35.870000000000005%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p36425933"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p36425933"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p36425933"></a>Operator</p>
</th>
<th class="cellrowborder" valign="top" width="64.13%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p221995"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p221995"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p221995"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row17981635"><td class="cellrowborder" valign="top" width="35.870000000000005%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p48852739"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p48852739"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p48852739"></a>&lt;</p>
</td>
<td class="cellrowborder" valign="top" width="64.13%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p128641"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p128641"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p128641"></a>Less than</p>
</td>
</tr>
<tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row1157773"><td class="cellrowborder" valign="top" width="35.870000000000005%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p45904346"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p45904346"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p45904346"></a>&gt;</p>
</td>
<td class="cellrowborder" valign="top" width="64.13%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p12848571"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p12848571"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p12848571"></a>Greater than</p>
</td>
</tr>
<tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row48528279"><td class="cellrowborder" valign="top" width="35.870000000000005%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p25310177"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p25310177"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p25310177"></a>&lt;=</p>
</td>
<td class="cellrowborder" valign="top" width="64.13%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p29593866"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p29593866"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p29593866"></a>Less than or equal to</p>
</td>
</tr>
<tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row65018208"><td class="cellrowborder" valign="top" width="35.870000000000005%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p31983518"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p31983518"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p31983518"></a>&gt;=</p>
</td>
<td class="cellrowborder" valign="top" width="64.13%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p40528140"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p40528140"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p40528140"></a>Greater than or equal to</p>
</td>
</tr>
<tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row29208940"><td class="cellrowborder" valign="top" width="35.870000000000005%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p17113958"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p17113958"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p17113958"></a>=</p>
</td>
<td class="cellrowborder" valign="top" width="64.13%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p44053348"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p44053348"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p44053348"></a>Equal to</p>
</td>
</tr>
<tr id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_row60935816"><td class="cellrowborder" valign="top" width="35.870000000000005%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p36854088"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p36854088"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p36854088"></a>&lt;&gt;, !=, or ^=</p>
</td>
<td class="cellrowborder" valign="top" width="64.13%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p32391169"><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p32391169"></a><a name="en-us_topic_0283137685_en-us_topic_0237121966_en-us_topic_0059777421_en-us_topic_0058965550_p32391169"></a>Not equal to</p>
</td>
</tr>
</tbody>
</table>

Comparison operators are available for all relevant data types. All comparison operators are binary operators that returned values of Boolean type. The calculation priority of the inequality sign is higher than that of the equality sign. If the entered data is different and cannot be implicitly converted, the comparison fails. For example, an expression such as 1<2<3 is invalid because the less-than sign \(<\) cannot be used to compare Boolean values and 3.

Example:

```
openGauss=# select 1<2;
 ?column?
----------
 t
(1 row)

openGauss=# select 1>2;
 ?column?
----------
 f
(1 row)

openGauss=# select 1>=2;
 ?column?
----------
 f
(1 row)

openGauss=# select 1<=2;
 ?column?
----------
 t
(1 row)

openGauss=# select 1=2;
 ?column?
----------
 f
(1 row)

openGauss=# select 1!=2;
 ?column?
----------
 t
(1 row)
```

## Logical Operators<a name="section2075011374558"></a>

Common logical operators include AND, OR, and NOT. The operation result can be TRUE, FALSE, or NULL \(which means unknown\). Their priorities are NOT \> AND \> OR.

The operators AND and OR are commutative. That is, you can switch the left and right operand without affecting the result.

[Table 2](#en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_table261968)  lists the calculation rules, where a and b represent logical expressions.

**Table  2**  Operation rules

<a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_table261968"></a>
<table><thead align="left"><tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row14174287"><th class="cellrowborder" valign="top" width="17.858214178582145%" id="mcps1.2.6.1.1"><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p15580856"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p15580856"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p15580856"></a>a</p>
</th>
<th class="cellrowborder" valign="top" width="16.91830816918308%" id="mcps1.2.6.1.2"><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p11570636"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p11570636"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p11570636"></a>b</p>
</th>
<th class="cellrowborder" valign="top" width="22.187781221877813%" id="mcps1.2.6.1.3"><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p53894476"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p53894476"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p53894476"></a>a <strong id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_b28106029"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_b28106029"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_b28106029"></a>AND</strong> b Result</p>
</th>
<th class="cellrowborder" valign="top" width="24.047595240475953%" id="mcps1.2.6.1.4"><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p56705893"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p56705893"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p56705893"></a>a <strong id="b3349416365226"><a name="b3349416365226"></a><a name="b3349416365226"></a>OR</strong> b Result</p>
</th>
<th class="cellrowborder" valign="top" width="18.988101189881014%" id="mcps1.2.6.1.5"><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p671108162345"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p671108162345"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p671108162345"></a><strong id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a5f16416fb0014e5db6e88d3f9e0a0bdf"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a5f16416fb0014e5db6e88d3f9e0a0bdf"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a5f16416fb0014e5db6e88d3f9e0a0bdf"></a>NOT</strong> a Result</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row35808814"><td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p63803972"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p63803972"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p63803972"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91830816918308%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p12900098"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p12900098"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p12900098"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p24844601"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p24844601"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p24844601"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="24.047595240475953%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p64852782"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p64852782"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p64852782"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="18.988101189881014%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a8afb8ac1c16840f9aa53175db421414c"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a8afb8ac1c16840f9aa53175db421414c"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a8afb8ac1c16840f9aa53175db421414c"></a>FALSE</p>
</td>
</tr>
<tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row11193076"><td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p21665674"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p21665674"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p21665674"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91830816918308%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p61636999"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p61636999"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p61636999"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p42824655"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p42824655"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p42824655"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="24.047595240475953%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p61070791"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p61070791"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p61070791"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="18.988101189881014%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_ae8646e7d4ff44b708c577f0c5a1e68cb"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_ae8646e7d4ff44b708c577f0c5a1e68cb"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_ae8646e7d4ff44b708c577f0c5a1e68cb"></a>FALSE</p>
</td>
</tr>
<tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row34418071"><td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p8195406"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p8195406"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p8195406"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91830816918308%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p44074598"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p44074598"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p44074598"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p59440254"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p59440254"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p59440254"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="24.047595240475953%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p4884189"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p4884189"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p4884189"></a>TRUE</p>
</td>
<td class="cellrowborder" valign="top" width="18.988101189881014%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a652a1aa5a32e4dcf897629c160222703"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a652a1aa5a32e4dcf897629c160222703"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a652a1aa5a32e4dcf897629c160222703"></a>FALSE</p>
</td>
</tr>
<tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row43573962"><td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p63694367"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p63694367"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p63694367"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91830816918308%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p23143541"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p23143541"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p23143541"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p48685036"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p48685036"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p48685036"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="24.047595240475953%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p59584160"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p59584160"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p59584160"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="18.988101189881014%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a9d89f7ed8c13412e8c66633341826620"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a9d89f7ed8c13412e8c66633341826620"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a9d89f7ed8c13412e8c66633341826620"></a>TRUE</p>
</td>
</tr>
<tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row13720756"><td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p18452325"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p18452325"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p18452325"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="16.91830816918308%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p23390658"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p23390658"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p23390658"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p29014962"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p29014962"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p29014962"></a>FALSE</p>
</td>
<td class="cellrowborder" valign="top" width="24.047595240475953%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p48768158"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p48768158"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p48768158"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="18.988101189881014%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a7af404da2fa74b5294e52f6572a2f0a9"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a7af404da2fa74b5294e52f6572a2f0a9"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a7af404da2fa74b5294e52f6572a2f0a9"></a>TRUE</p>
</td>
</tr>
<tr id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_row28321591"><td class="cellrowborder" valign="top" width="17.858214178582145%" headers="mcps1.2.6.1.1 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p16697147"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p16697147"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p16697147"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="16.91830816918308%" headers="mcps1.2.6.1.2 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p34610504"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p34610504"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p34610504"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="22.187781221877813%" headers="mcps1.2.6.1.3 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p38558574"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p38558574"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p38558574"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="24.047595240475953%" headers="mcps1.2.6.1.4 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p57704564"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p57704564"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_en-us_topic_0058966260_p57704564"></a>NULL</p>
</td>
<td class="cellrowborder" valign="top" width="18.988101189881014%" headers="mcps1.2.6.1.5 "><p id="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a4c963086817f4d7c864b735cfb81c8d0"><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a4c963086817f4d7c864b735cfb81c8d0"></a><a name="en-us_topic_0283137740_en-us_topic_0237121965_en-us_topic_0059778733_a4c963086817f4d7c864b735cfb81c8d0"></a>NULL</p>
</td>
</tr>
</tbody>
</table>

For details, see  [Examples](where-clause.md#en-us_topic_0000001225258419_section36861642133019).

