# Range<a name="EN-US_TOPIC_0310271760"></a>

A range type is a data type that represents the range of a value of an element type \(called the subtype of a range\). For example, the range of timestamp may be used to express a time range in which a conference room is reserved. In this case, the data type is tsrange and timestamp is the subtype. The subtype must have an overall order so that the element value can be clearly specified within a range, before, or after.

Range types are useful because they can express multiple element values in a single range value and can clearly express concepts such as range overlapping. The time and date range used for scheduling is the best example, as the range of an instrument are also examples of range type.

## Built-in Range<a name="section47171551173614"></a>

The following built-in ranges are available:

-   int4range: integer range.
-   int8range: bigint range.
-   numrange: numeric range.
-   tsrange: range of timestamp without the time zone.
-   tstzrange: range of timestamp with the time zone
-   daterange: date range.

In addition, you can define your own range types. For details, see  [CREATE TYPE](create-type.md).

## Example<a name="section19828134904116"></a>

```
CREATE TABLE reservation (room int, during tsrange); 
INSERT INTO reservation VALUES (1108, '[2010-01-01 14:30, 2010-01-01 15:30)');  
-- Inclusion
SELECT int4range(10, 20) @> 3;  
-- Overlapping
SELECT numrange(11.1, 22.2) && numrange(20.0, 30.0);  
-- Upper bound extraction
SELECT upper(int8range(15, 25));  
-- Intersection set
SELECT int4range(10, 20) * int4range(15, 25);  
-- Empty range
SELECT isempty(numrange(1, 5)); 
```

See the complete list of operators and functions on a range type in  [Range Functions and Operators](range-functions-and-operators.md).

## Including and Excluding Bounds<a name="section849616485445"></a>

Each non-empty range has two bounds, a lower bound and an upper bound. All values between the upper and lower bounds are included in the range. An inclusion bound means that the bound value itself is included in the range, while an exclusion bound means that the bound value is not included in the range.

In a textual form of a range, the inclusion lower bound is expressed as "\[" and an exclusion lower bound is expressed as "\(". Similarly, one containing the upper bound is expressed as "\]" and one excluding the upper bound is expressed as "\)" \(for details, see  [Range Input/Output](#section14161182124817)\).

The lower\_inc and upper\_inc functions test the upper and lower bounds of a range value, respectively.

## Infinite \(Unbounded\) Range<a name="section614483524614"></a>

When the lower bound of a range is unbounded, it means that all values less than the upper bound are included in the range, for example, \(,3\] meaning all values less than the upper bound 3 are included in the range. Similarly, when the upper bound of a range is unbounded, all values greater than the upper bound are included in the range. When both the upper and lower bounds are unbounded, all values of the element type are considered within the range. The missing bounds are automatically converted to exclusions, for example, \[,\] is converted to \(,\). You can think of these missing values as positive infinity or negative infinity, but they are special range type values and are considered to be positive and negative infinity values that go beyond any range element type.

Element types with the infinity values can be used as explicit bound values. For example, in the timestamp range, \[today, infinity\) does not include a special timestamp value infinity.

The lower\_inf and upper\_inf functions test the infinite upper and lower bounds of a range, respectively.

## Range Input/Output<a name="section14161182124817"></a>

The input of a range value must follow one of the following formats:

```
(lower-bound, upper-bound)
(lower-bound, upper-bound]
[lower-bound, upper-bound)
[lower-bound, upper-bound]
Empty
```

Parentheses \(\) or square brackets \[\] indicate whether the upper and lower bounds are excluded or included. Note that the last format is empty, which represents an empty range \(a range that does not contain values\).

The value of  _lower-bound_  can be a valid input character string of the subtype or null, indicating that there is no lower bound. Similarly,  _upper-bound_  can be a valid input character string of the subtype or null, indicating that there is no upper bound.

Each bound value can be referenced using the quotation marks\(""\) character. This is necessary if the bounds value contains parentheses \(\), square brackets \[\], commas \(,\), quotation marks \(""\), or backslashes \(\\\), because otherwise those characters will be considered part of the range syntax. To put the quotation mark or backslash in a referenced bound value, put a backslash in front of it \(and a pair of double quotation marks in its quoted bound value represents one quotation mark character, which is similar to the single quotation mark rule in SQL character strings\). In addition, you can avoid referencing and use backslash escapes to protect all data characters, otherwise they will be used as part of the return syntax. Also, if you want to write a bound value that is an empty string, write  **""**, indicating infinite bounds.

Spaces are allowed before and after a range value, but any space between parentheses\(\) or square brackets\[\]  is used as part of the upper or lower bound value \(depending on the element type, the space may or may not represent a value\).

Examples:

```
-- 3 is included, 7 is not included, and all values between 3 and 7 are included.
SELECT '[3,7)'::int4range;  
-- Neither 3 nor 7 is included, but all values between them are included.
SELECT '(3,7)'::int4range;  
-- Only value 4 is included.
SELECT '[4,4]'::int4range;  
-- Exclude any value (and will be normalized to empty)
SELECT '[4,4)'::int4range; 
```

## Constructing Range<a name="section2063815595015"></a>

Each range type has a constructor function with the same name. Using constructor functions is often more convenient than writing a range literal constant because it avoids extra references to bound values. Constructor functions accept two or three parameters. Two parameters form a range in the standard form, where the lower bound is included and the upper bound is excluded, and three parameters form a range according to the bound specified by the third parameter. The third parameter must be one of the following character strings: \(\), \(\], \[\], or \[\]. For example:

```
-- The complete form is: lower bound, upper bound, and textual parameters indicating the inclusion/exclusion of bounds.
SELECT numrange(1.0, 14.0, '(]');  
-- If the third parameter is ignored, it is assumed to be '[)'.
SELECT numrange(1.0, 14.0);  
-- Although '(]' is specified here, the value will be converted to the standard format when displayed, because int8range is a discrete range type (see below).
SELECT int8range(1, 14, '(]');  
-- Using NULL for a bound causes the range to be unbounded on that side.
SELECT numrange(NULL, 2.2); 
```

## Discrete Range<a name="section1297495475517"></a>

A range element type has a well-defined "step" such as integer or date. In these types, if there is no valid value between two elements, they can be said to be adjacent. This is in contrast to a continuous range in which other element values can always be identified between two given values. For example, a range above the numeric type is continuous, and the range of timestamp is also continuous. \(Although timestamp has limited precision and can be considered as discrete in theory, it is better to consider it as continuous because the step is not normally considered.\)

Another way to consider discrete range types is to have a clear "next" or "previous" value for each element value. With this idea in mind, you can switch between inclusion and exclusion expressions of a range bound by replacing it with the original given next or previous element value. For example, in an integer range type, \[4,8\] and \(3,9\) represent the same set of values, but not for numeric ranges.

A discrete range type should have a  _regularization_  function that knows the expected step size of the element type. The regularization function can convert the equivalents of the range type to the same expression, in particular consistent with the inclusion or exclusion bounds. If you do not specify a regularization function, ranges with different formats will always be considered as unequal, even if they actually express the same set of values.

The built-in range types int4range, int8range, and daterange use a regularized form that includes the lower bound and excludes the upper bound, that is, \[\). However, user-defined range types can use other conventions.

## Defining New Range<a name="section1833113614573"></a>

Users can define their own range types. The most common reason is to use the range on the subtype that is not provided in the built-in range type. For example, to create the range type subtype float8, run the following command:

```
CREATE TYPE floatrange AS RANGE (
     subtype = float8,
     subtype_diff = float8mi 
);
SELECT '[1.234, 5.678]'::floatrange; 
```

Because float8 does not have a meaningful "step", we did not define a regularization function in this example.

Defining your own range type also allows you to specify a different subtype B-tree operator class or collection to change the sort order to determine which values fall within the given range.

If the subtype is considered to have a discrete value instead of a continuous value, the  **CREATE TYPE**  command should specify a canonical function. The regularization function receives an input range value and must return an equivalent range value that may have different bounds and formats. For two ranges, for example, \[1, 7\] and \[1, 8\) that represent the same value set, the output must be the same. There is no relationship between choosing which expression to use as the regularization function, as long as two values of equal value in different formats can always be mapped to the same value in the same format. In addition to adjusting the inclusion/exclusion bound format, if the expected compensation is larger than the subtype can store, a regularization function may round the bound value. For example, a range type above a timestamp might be defined as having a one-hour epoch, so the regularization function might need to round off bounds that are not multiples of an hour, or might throw an error directly.

In addition, any range type intended to be used with a GiST or SP-GiST index should define a subtype difference or subtype\_diff function \(the index can still work without subtype\_diff, but may be less efficient than when a difference function is provided\). The subtype difference function uses two subtype input values and returns a difference expressed as a float8 value \(X minus Y\). In the example above, we can use functions under the regular float8 subtraction operator. However, for any other subtype, some type conversion may be required. There may also be a need for innovative ideas on how to express differences as numbers. For maximum extensibility, the subtype\_diff function should agree with the sort order of the selected operator class and sort rules. That is, if the first parameter of the sort order is greater than the second parameter, the result should be a positive value.

The following is an example of a less simplified subtype\_diff function:

```
CREATE FUNCTION time_subtype_diff(x time, y time) RETURNS float8 AS 'SELECT EXTRACT(EPOCH FROM (x - y))' LANGUAGE sql STRICT IMMUTABLE;  
CREATE TYPE timerange AS RANGE (     
     subtype = time,     
     subtype_diff = time_subtype_diff
 );  
SELECT '[11:10, 23:00]'::timerange; 
```

For details about how to create a range type, see  [CREATE TYPE](create-type.md).

## Index<a name="section915193113217"></a>

GiST and SP-GiST indexes can be created for table columns of the range type. For example, to create a GiST index, run the following command:

```
CREATE INDEX reservation_idx ON reservation USING GIST (during); 
```

A GiST or SP-GiST index can accelerate queries involving the following range operators: =, &&, <@, @\>, <<, \>\>, -|-, &<, and &\> \(see  [Range Functions and Operators](range-functions-and-operators.md)\).

In addition, the B-tree and hash index can be created on table columns of the range type. For these index types, basically the only useful range operation is equivalence. Using the corresponding < and \> operators, there is a B-tree sort oder for range value definitions, but that order is fairly arbitrary and is often less useful in the reality. The B-tree and hash support for range types is primarily designed to allow sorting and hashing within a query, rather than creating an index.

