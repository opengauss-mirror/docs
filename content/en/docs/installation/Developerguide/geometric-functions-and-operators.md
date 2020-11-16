# Geometric Functions and Operators<a name="EN-US_TOPIC_0242370438"></a>

## Geometric Operators<a name="en-us_topic_0237121974_en-us_topic_0059778617_sf6144d7c3ed34b8c801ec2d86e2dea63"></a>

-   +

    Description: Translation

    For example:

    ```
    postgres=# SELECT box '((0,0),(1,1))' + point '(2.0,0)' AS RESULT;
       result    
    -------------
     (3,1),(2,0)
    (1 row)
    ```

-   -

    Description: Translation

    For example:

    ```
    postgres=# SELECT box '((0,0),(1,1))' - point '(2.0,0)' AS RESULT;
        result     
    ---------------
     (-1,1),(-2,0)
    (1 row)
    ```

-   \*

    Description: Scaling out/rotation

    For example:

    ```
    postgres=# SELECT box '((0,0),(1,1))' * point '(2.0,0)' AS RESULT;
       result    
    -------------
     (2,2),(0,0)
    (1 row)
    ```

-   /

    Description: Scaling in/rotation

    For example:

    ```
    postgres=# SELECT box '((0,0),(2,2))' / point '(2.0,0)' AS RESULT;
       result    
    -------------
     (1,1),(0,0)
    (1 row)
    ```

-   \#

    Description: Box of intersection

    For example:

    ```
    postgres=# SELECT box '((1,-1),(-1,1))' # box '((1,1),(-2,-2))' AS RESULT;
     result 
    ---------------
     (1,1),(-1,-1)
    (1 row)
    ```

-   \#

    Description: Number of paths or polygon vertexes

    For example:

    ```
    postgres=# SELECT # path'((1,0),(0,1),(-1,0))' AS RESULT;
     result 
    --------
          3
    (1 row)
    ```

-   @-@

    Description: Length or circumference

    For example:

    ```
    postgres=# SELECT @-@ path '((0,0),(1,0))' AS RESULT;
     result 
    --------
          2
    (1 row)
    ```

-   @@

    Description: Center of box

    For example:

    ```
    postgres=# SELECT @@ circle '((0,0),10)' AS RESULT;
     result 
    --------
     (0,0)
    (1 row)
    ```

-   <-\>

    Description: Distance between the two figures.

    For example:

    ```
    postgres=# SELECT circle '((0,0),1)' <-> circle '((5,0),1)' AS RESULT;
     result 
    --------
          3
    (1 row)
    ```

-   &&

    Description: Overlaps? \(One point in common makes this true.\)

    For example:

    ```
    postgres=# SELECT box '((0,0),(1,1))' && box '((0,0),(2,2))' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <<

    Description: Is strictly left of \(no common horizontal coordinate\)?

    For example:

    ```
    postgres=# SELECT circle '((0,0),1)' << circle '((5,0),1)' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \>\>

    Description: Is strictly right of \(no common horizontal coordinate\)?

    For example:

    ```
    postgres=# SELECT circle '((5,0),1)' >> circle '((0,0),1)' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   &<

    Description: Does not extend to the right of?

    For example:

    ```
    postgres=# SELECT box '((0,0),(1,1))' &< box '((0,0),(2,2))' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   &\>

    Description: Does not extend to the left of?

    For example:

    ```
    postgres=# SELECT box '((0,0),(3,3))' &> box '((0,0),(2,2))' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <<|

    Description: Is strictly below \(no common horizontal coordinate\)?

    For example:

    ```
    postgres=# SELECT box '((0,0),(3,3))' <<| box '((3,4),(5,5))' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   |\>\>

    Description: Is strictly above \(no common horizontal coordinate\)?

    For example:

    ```
    postgres=# SELECT box '((3,4),(5,5))' |>> box '((0,0),(3,3))' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   &<|

    Description: Does not extend above?

    For example:

    ```
    postgres=# SELECT box '((0,0),(1,1))' &<| box '((0,0),(2,2))' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   |&\>

    Description: Does not extend below?

    For example:

    ```
    postgres=# SELECT box '((0,0),(3,3))' |&> box '((0,0),(2,2))' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <^

    Description: Is below \(allows touching\)?

    For example:

    ```
    postgres=# SELECT box '((0,0),(-3,-3))' <^ box '((0,0),(2,2))' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \>^

    Description: Is above \(allows touching\)?

    For example:

    ```
    postgres=# SELECT box '((0,0),(2,2))' >^ box '((0,0),(-3,-3))'  AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   ?\#

    Description: Intersect?

    For example:

    ```
    postgres=# SELECT lseg '((-1,0),(1,0))' ?# box '((-2,-2),(2,2))' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   ?-

    Description: Is horizontal?

    For example:

    ```
    postgres=# SELECT ?- lseg '((-1,0),(1,0))' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   ?-

    Description: Are horizontally aligned?

    For example:

    ```
    postgres=# SELECT point '(1,0)' ?- point '(0,0)' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   ?|

    Description: Is vertical?

    For example:

    ```
    postgres=# SELECT ?| lseg '((-1,0),(1,0))' AS RESULT;
     result 
    --------
     f
    (1 row)
    ```

-   ?|

    Description: Are vertically aligned?

    For example:

    ```
    postgres=# SELECT point '(0,1)' ?| point '(0,0)' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   ?-|

    Description: Are perpendicular?

    For example:

    ```
    postgres=# SELECT lseg '((0,0),(0,1))' ?-| lseg '((0,0),(1,0))' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   ?||

    Description: Are parallel?

    For example:

    ```
    postgres=# SELECT lseg '((-1,0),(1,0))' ?|| lseg '((-1,2),(1,2))' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   @\>

    Description: Contains?

    For example:

    ```
    postgres=# SELECT circle '((0,0),2)' @> point '(1,1)' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   <@

    Description: Contained in or on?

    For example:

    ```
    postgres=# SELECT point '(1,1)' <@ circle '((0,0),2)' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   \~=

    Description: Same as?

    For example:

    ```
    postgres=# SELECT polygon '((0,0),(1,1))' ~= polygon '((1,1),(0,0))' AS RESULT;
     result 
    --------
     t
    (1 row)
    ```


## Geometric Functions<a name="en-us_topic_0237121974_en-us_topic_0059778617_s7307c979b2ab48129cda400b52255f0b"></a>

-   area\(object\)

    Description: Area calculation

    Return type: double precision

    For example:

    ```
    postgres=# SELECT area(box '((0,0),(1,1))') AS RESULT;
     result 
    --------
          1
    (1 row)
    ```

-   center\(object\)

    Description: Figure center calculation

    Return type: point

    For example:

    ```
    postgres=# SELECT center(box '((0,0),(1,2))') AS RESULT;
     result  
    ---------
     (0.5,1)
    (1 row)
    ```

-   diameter\(circle\)

    Description: Circle diameter calculation

    Return type: double precision

    For example:

    ```
    postgres=# SELECT diameter(circle '((0,0),2.0)') AS RESULT;
     result 
    --------
          4
    (1 row)
    ```

-   height\(box\)

    Description: Vertical size of box

    Return type: double precision

    For example:

    ```
    postgres=# SELECT height(box '((0,0),(1,1))') AS RESULT;
     result 
    --------
          1
    (1 row)
    ```

-   isclosed\(path\)

    Description: A closed path?

    Return type: Boolean

    For example:

    ```
    postgres=# SELECT isclosed(path '((0,0),(1,1),(2,0))') AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   isopen\(path\)

    Description: An open path?

    Return type: Boolean

    For example:

    ```
    postgres=# SELECT isopen(path '[(0,0),(1,1),(2,0)]') AS RESULT;
     result 
    --------
     t
    (1 row)
    ```

-   length\(object\)

    Description: Length calculation

    Return type: double precision

    For example:

    ```
    postgres=# SELECT length(path '((-1,0),(1,0))') AS RESULT;
     result 
    --------
          4
    (1 row)
    ```

-   npoints\(path\)

    Description: Number of points in path

    Return type: int

    For example:

    ```
    postgres=# SELECT npoints(path '[(0,0),(1,1),(2,0)]') AS RESULT;
     result 
    --------
          3
    (1 row)
    ```

-   npoints\(polygon\)

    Description: Number of points in polygon

    Return type: int

    For example:

    ```
    postgres=# SELECT npoints(polygon '((1,1),(0,0))') AS RESULT;
     result 
    --------
          2
    (1 row)
    ```

-   pclose\(path\)

    Description: Converts path to closed.

    Return type: path

    For example:

    ```
    postgres=# SELECT pclose(path '[(0,0),(1,1),(2,0)]') AS RESULT;
           result        
    ---------------------
     ((0,0),(1,1),(2,0))
    (1 row)
    ```

-   popen\(path\)

    Description: Converts path to open.

    Return type: path

    For example:

    ```
    postgres=# SELECT popen(path '((0,0),(1,1),(2,0))') AS RESULT;
           result        
    ---------------------
     [(0,0),(1,1),(2,0)]
    (1 row)
    ```

-   radius\(circle\)

    Description: Circle diameter calculation

    Return type: double precision

    For example:

    ```
    postgres=# SELECT radius(circle '((0,0),2.0)') AS RESULT;
     result 
    --------
          2
    (1 row)
    ```

-   width\(box\)

    Description: Horizontal size of box

    Return type: double precision

    For example:

    ```
    postgres=# SELECT width(box '((0,0),(1,1))') AS RESULT;
     result 
    --------
          1
    (1 row)
    ```


## Geometric Type Conversion Functions<a name="en-us_topic_0237121974_en-us_topic_0059778617_s7e4c712738474adbb63addaa69fe43e4"></a>

-   box\(circle\)

    Description: Circle to box

    Return type: box

    For example:

    ```
    postgres=# SELECT box(circle '((0,0),2.0)') AS RESULT;
                                      result                                   
    ---------------------------------------------------------------------------
     (1.41421356237309,1.41421356237309),(-1.41421356237309,-1.41421356237309)
    (1 row)
    ```

-   box\(point, point\)

    Description: Points to box

    Return type: box

    For example:

    ```
    postgres=# SELECT box(point '(0,0)', point '(1,1)') AS RESULT;
       result    
    -------------
     (1,1),(0,0)
    (1 row)
    ```

-   box\(polygon\)

    Description: Polygon to box

    Return type: box

    For example:

    ```
    postgres=# SELECT box(polygon '((0,0),(1,1),(2,0))') AS RESULT;
       result    
    -------------
     (2,1),(0,0)
    (1 row)
    ```

-   circle\(box\)

    Description: Box to circle

    Return type: circle

    For example:

    ```
    postgres=# SELECT circle(box '((0,0),(1,1))') AS RESULT;
                result             
    -------------------------------
     <(0.5,0.5),0.707106781186548>
    (1 row)
    ```

-   circle\(point, double precision\)

    Description: Center and radius to circle

    Return type: circle

    For example:

    ```
    postgres=# SELECT circle(point '(0,0)', 2.0) AS RESULT;
      result   
    -----------
     <(0,0),2>
    (1 row)
    ```

-   circle\(polygon\)

    Description: Polygon to circle

    Return type: circle

    For example:

    ```
    postgres=# SELECT circle(polygon '((0,0),(1,1),(2,0))') AS RESULT;
                      result                   
    -------------------------------------------
     <(1,0.333333333333333),0.924950591148529>
    (1 row)
    ```

-   lseg\(box\)

    Description: Box diagonal to line segment

    Return type: lseg

    For example:

    ```
    postgres=# SELECT lseg(box '((-1,0),(1,0))') AS RESULT;
         result     
    ----------------
     [(1,0),(-1,0)]
    (1 row)
    ```

-   lseg\(point, point\)

    Description: Points to line segment

    Return type: lseg

    For example:

    ```
    postgres=# SELECT lseg(point '(-1,0)', point '(1,0)') AS RESULT;
         result     
    ----------------
     [(-1,0),(1,0)]
    (1 row)
    ```

-   path\(polygon\)

    Description: Polygon to path

    Return type: path

    For example:

    ```
    postgres=# SELECT path(polygon '((0,0),(1,1),(2,0))') AS RESULT;
           result        
    ---------------------
     ((0,0),(1,1),(2,0))
    (1 row)
    ```

-   point\(double precision, double precision\)

    Description: Points

    Return type: point

    For example:

    ```
    postgres=# SELECT point(23.4, -44.5) AS RESULT;
        result    
    --------------
     (23.4,-44.5)
    (1 row)
    ```

-   point\(box\)

    Description: Center of box

    Return type: point

    For example:

    ```
    postgres=# SELECT point(box '((-1,0),(1,0))') AS RESULT;
     result 
    --------
     (0,0)
    (1 row)
    ```

-   point\(circle\)

    Description: Center of circle

    Return type: point

    For example:

    ```
    postgres=# SELECT point(circle '((0,0),2.0)') AS RESULT;
     result 
    --------
     (0,0)
    (1 row)
    ```

-   point\(lseg\)

    Description: Center of line segment

    Return type: point

    For example:

    ```
    postgres=# SELECT point(lseg '((-1,0),(1,0))') AS RESULT;
     result 
    --------
     (0,0)
    (1 row)
    ```

-   point\(polygon\)

    Description: Center of polygon

    Return type: point

    For example:

    ```
    postgres=# SELECT point(polygon '((0,0),(1,1),(2,0))') AS RESULT;
            result         
    -----------------------
     (1,0.333333333333333)
    (1 row)
    ```

-   polygon\(box\)

    Description: Box to 4-point polygon

    Return type: polygon

    For example:

    ```
    postgres=# SELECT polygon(box '((0,0),(1,1))') AS RESULT;
              result           
    ---------------------------
     ((0,0),(0,1),(1,1),(1,0))
    (1 row)
    ```

-   polygon\(circle\)

    Description: Circle to 12-point polygon

    Return type: polygon

    For example:

    ```
    postgres=# SELECT polygon(circle '((0,0),2.0)') AS RESULT;
                                                                                                                                                    result                                                                                      
    
    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     ((-2,0),(-1.73205080756888,1),(-1,1.73205080756888),(-1.22464679914735e-16,2),(1,1.73205080756888),(1.73205080756888,1),(2,2.44929359829471e-16),(1.73205080756888,-0.999999999999999),(1,-1.73205080756888),(3.67394039744206e-16,-2),(-0.999999999999999,-1.73205080756888),(-1.73205080756888,-1))
    (1 row)
    ```

-   polygon\(npts, circle\)

    Description: Circle to  **npts**-point polygon

    Return type: polygon

    For example:

    ```
    postgres=# SELECT polygon(12, circle '((0,0),2.0)') AS RESULT;
                                                                                                                                                    result                                                                                      
    
    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     ((-2,0),(-1.73205080756888,1),(-1,1.73205080756888),(-1.22464679914735e-16,2),(1,1.73205080756888),(1.73205080756888,1),(2,2.44929359829471e-16),(1.73205080756888,-0.999999999999999),(1,-1.73205080756888),(3.67394039744206e-16,-2),(-0.999999999999999,-1.73205080756888),(-1.73205080756888,-1))
    (1 row)
    ```

-   polygon\(path\)

    Description: Path to polygon

    Return type: polygon

    For example:

    ```
    postgres=# SELECT polygon(path '((0,0),(1,1),(2,0))') AS RESULT;
           result        
    ---------------------
     ((0,0),(1,1),(2,0))
    (1 row)
    ```


