# Best Practices<a name="EN-US_TOPIC_0300596395"></a>

This section describes how to use certain algorithms, including the classification, regression, clustering, gbdt, xgboost, and prohpet algorithms.

Create a database and install an algorithm.

```
create database test1 dbcompatibility='B';
./madpack -s madlib -p opengauss -c opg@127.0.0.1:7651/test1 install
```

## Classification Algorithm<a name="section75701018131510"></a>

Take the housing price prediction with the support vector machine \(SVM\) as an example:

1.  <a name="li9856428144310"></a>Prepare a dataset.

    ```
    DROP TABLE IF EXISTS houses;
    CREATE TABLE houses (id INT, tax INT, bedroom INT, bath FLOAT, price INT,  size INT, lot INT);
    INSERT INTO houses VALUES
    (1 ,  590 ,       2 ,    1 ,  50000 ,  770 , 22100),
    (2 , 1050 ,       3 ,    2 ,  85000 , 1410 , 12000),
    (3 ,   20 ,       3 ,    1 ,  22500 , 1060 ,  3500),
    (4 ,  870 ,       2 ,    2 ,  90000 , 1300 , 17500),
    (5 , 1320 ,       3 ,    2 , 133000 , 1500 , 30000),
    (6 , 1350 ,       2 ,    1 ,  90500 ,  820 , 25700),
    (7 , 2790 ,       3 ,  2.5 , 260000 , 2130 , 25000),
    (8 ,  680 ,       2 ,    1 , 142500 , 1170 , 22000),
    (9 , 1840 ,       3 ,    2 , 160000 , 1500 , 19000),
    (10 , 3680 ,       4 ,    2 , 240000 , 2790 , 20000),
    (11 , 1660 ,       3 ,    1 ,  87000 , 1030 , 17500),
    (12 , 1620 ,       3 ,    2 , 118600 , 1250 , 20000),
    (13 , 3100 ,       3 ,    2 , 140000 , 1760 , 38000),
    (14 , 2070 ,       2 ,    3 , 148000 , 1550 , 14000),
    (15 ,  650 ,       3 ,  1.5 ,  65000 , 1450 , 12000);
    ```

2.  Train the model.

    Configure the corresponding schema and compatibility parameters before training.

    ```
    SET search_path="$user",public,madlib;
    SET behavior_compat_options = 'bind_procedure_searchpath';
    ```

    Use default parameters for training. The classification condition is 'price < 100000'. The SQL statement is as follows:

    ```
    DROP TABLE IF EXISTS houses_svm, houses_svm_summary; 
    SELECT madlib.svm_classification('public.houses','public.houses_svm','price < 100000','ARRAY[1, tax, bath, size]');
    ```

3.  View the model.

    ```
    \x on
    SELECT * FROM houses_svm;
    \x off
    ```

    The results are displayed as follows:

    ```
    -[ RECORD 1 ]------+-----------------------------------------------------------------
    coef               | {.113989576847,-.00226133300602,-.0676303607996,.00179440841072}
    loss               | .614496714256667
    norm_of_gradient   | 108.171180769224
    num_iterations     | 100
    num_rows_processed | 15
    num_rows_skipped   | 0
    dep_var_mapping    | {f,t}
    ```

4.  Perform prediction.

    ```
    DROP TABLE IF EXISTS houses_pred; 
    SELECT madlib.svm_predict('public.houses_svm','public.houses','id','public.houses_pred');
    ```

    -   View the prediction result.

        ```
        SELECT *, price < 100000 AS actual FROM houses JOIN houses_pred USING (id) ORDER BY id;
        ```

        The results are displayed as follows:

        ```
         id | tax  | bedroom | bath | price  | size |  lot  | prediction | decision_function | actual
        ----+------+---------+------+--------+------+-------+------------+-------------------+--------
          1 |  590 |       2 |    1 |  50000 |  770 | 22100 | t          |      .09386721875 | t
          2 | 1050 |       3 |    2 |  85000 | 1410 | 12000 | t          |     .134445058042 | t
          3 |   20 |       3 |    1 |  22500 | 1060 |  3500 | t          |   1.9032054712902 | t
          4 |  870 |       2 |    2 |  90000 | 1300 | 17500 | t          |    .3441000739464 | t
          5 | 1320 |       3 |    2 | 133000 | 1500 | 30000 | f          |   -.3146180966186 | f
          6 | 1350 |       2 |    1 |  90500 |  820 | 25700 | f          |  -1.5350254452892 | t
          7 | 2790 |       3 |  2.5 | 260000 | 2130 | 25000 | f          |  -2.5421154971142 | f
          8 |  680 |       2 |    1 | 142500 | 1170 | 22000 | t          |    .6081106124962 | f
          9 | 1840 |       3 |    2 | 160000 | 1500 | 19000 | f          |   -1.490511259749 | f
         10 | 3680 |       4 |    2 | 240000 | 2790 | 20000 | f          |   -3.336577140997 | f
         11 | 1660 |       3 |    1 |  87000 | 1030 | 17500 | f          |  -1.8592129109042 | t
         12 | 1620 |       3 |    2 | 118600 | 1250 | 20000 | f          |  -1.4416201011046 | f
         13 | 3100 |       3 |    2 | 140000 | 1760 | 38000 | f          |   -3.873244660547 | f
         14 | 2070 |       2 |    3 | 148000 | 1550 | 14000 | f          |  -1.9885277913972 | f
         15 |  650 |       3 |  1.5 |  65000 | 1450 | 12000 | t          |   1.1445697772786 | t
        (15 rows)
        ```

    -   View the false positive rate.

        ```
        SELECT COUNT(*) FROM houses_pred JOIN houses USING (id) WHERE houses_pred.prediction != (houses.price < 100000);
        ```

        The results are displayed as follows:

        ```
        count
        -------
             3
        (1 row)
        ```

5.  Use other SVM cores for training.

    ```
    DROP TABLE IF EXISTS houses_svm_gaussian, houses_svm_gaussian_summary, houses_svm_gaussian_random; 
    SELECT madlib.svm_classification( 'public.houses','public.houses_svm_gaussian','price < 100000','ARRAY[1, tax, bath, size]','gaussian','n_components=10', '', 'init_stepsize=1, max_iter=200' );
    ```

    Perform prediction and view the training result.

    ```
    DROP TABLE IF EXISTS houses_pred_gaussian; 
    SELECT madlib.svm_predict('public.houses_svm_gaussian','public.houses','id', 'public.houses_pred_gaussian');
    SELECT COUNT(*) FROM houses_pred_gaussian JOIN houses USING (id) WHERE houses_pred_gaussian.prediction != (houses.price < 100000);
    ```

    The result is as follows:

    ```
     count 
    -------+    
    0 
    (1 row)
    ```

6.  Use other parameters.

    In addition to specifying different kernel methods, you can specify the number of training steps and initial parameters, such as  **init\_stepsize**,  **max\_iter**, and  **class\_weight**.


>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>```
>SET search_path="$user",public,madlib;
>SET behavior_compat_options = 'bind_procedure_searchpath';
>```
>Before executing the algorithm, you need to set the schema in  **search\_path **and set the  **bind\_procedure\_searchpath**. Otherwise, the table cannot be found. All machine learning methods are installed in a schema, and user tables are installed in user's schemas. In this example, the algorithm is installed in  **madlib**, and user tables are stored in  **public**. If schema is not set, the table may not be found when the algorithm is executed. When executing the algorithm, you are advised to add the scheme of the input table.

## Regression Algorithm<a name="section1358933811168"></a>

Use the Boston housing price prediction with the linear regression as an example:

1.  Prepare a dataset.

    The dataset is the same as that of the SVM. For details, see  [1](#li9856428144310).

2.  Train a model.

    ```
    SET search_path="$user",public,madlib;
    SET behavior_compat_options = 'bind_procedure_searchpath';
    
    DROP TABLE IF EXISTS houses_linregr, houses_linregr_summary;
    SELECT madlib.linregr_train( 'public.houses', 'public.houses_linregr',  'price', 'ARRAY[1, tax, bath, size]');
    ```

3.  View the model content.

    ```
    \x ON
    SELECT * FROM houses_linregr;
    \x OFF
    ```

    The returned result is as follows:

    ```
    -[ RECORD 1 ]------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    coef                     | {-12849.4168959872,28.9613922651775,10181.6290712649,50.516894915353}
    r2                       | .768577580597462
    std_err                  | {33453.0344331377,15.8992104963991,19437.7710925915,32.9280231740856}
    t_stats                  | {-.384103179688204,1.82156166004197,.523806408809163,1.53416118083608}
    p_values                 | {.708223134615411,.0958005827189556,.610804093526516,.153235085548177}
    condition_no             | 9002.50457069858
    num_rows_processed       | 15
    num_missing_rows_skipped | 0
    variance_covariance      | {{1119105512.7847,217782.067878005,-283344228.394538,-616679.693190829},{217782.067878005,252.784894408806,-46373.1796964038,-369.864520095145},{-283344228.394538,-46373.1796964038,377826945.047986,-209088.217319699},{-616679.693190829,-369.864520095145,-209088.217319699,1084.25471015312}}
    ```

4.  Predict and compare the results.

    ```
    SELECT houses.*,
        madlib.linregr_predict( m.coef, ARRAY[1,tax,bath,size]) as predict,
        price - madlib.linregr_predict( m.coef, ARRAY[1,tax,bath,size]) as residual
    FROM public.houses, public.houses_linregr AS m 
    ORDER BY id;
    ```

    The returned result is as follows:

    ```
     id | tax  | bedroom | bath | price  | size |  lot  |     predict      |     residual
    ----+------+---------+------+--------+------+-------+------------------+-------------------
      1 |  590 |       2 |    1 |  50000 |  770 | 22100 | 53317.4426965543 | -3317.44269655428
      2 | 1050 |       3 |    2 |  85000 | 1410 | 12000 | 109152.124955627 | -24152.1249556268
      3 |   20 |       3 |    1 |  22500 | 1060 |  3500 | 51459.3486308555 | -28959.3486308555
      4 |  870 |       2 |    2 |  90000 | 1300 | 17500 |  98382.215907206 | -8382.21590720599
      5 | 1320 |       3 |    2 | 133000 | 1500 | 30000 | 121518.221409606 |  11481.7785903935
      6 | 1350 |       2 |    1 |  90500 |  820 | 25700 | 77853.9455638568 |  12646.0544361432
      7 | 2790 |       3 |  2.5 | 260000 | 2130 | 25000 | 201007.926371722 |  58992.0736282778
      8 |  680 |       2 |    1 | 142500 | 1170 | 22000 | 76130.7259665615 |  66369.2740334385
      9 | 1840 |       3 |    2 | 160000 | 1500 | 19000 | 136578.145387499 |  23421.8546125013
     10 | 3680 |       4 |    2 | 240000 | 2790 | 20000 | 255033.901596231 | -15033.9015962306
     11 | 1660 |       3 |    1 |  87000 | 1030 | 17500 | 97440.5250982859 | -10440.5250982859
     12 | 1620 |       3 |    2 | 118600 | 1250 | 20000 | 117577.415360321 |  1022.58463967856
     13 | 3100 |       3 |    2 | 140000 | 1760 | 38000 | 186203.892319614 | -46203.8923196141
     14 | 2070 |       2 |    3 | 148000 | 1550 | 14000 | 155946.739425522 | -7946.73942552213
     15 |  650 |       3 |  1.5 |  65000 | 1450 | 12000 | 94497.4293105374 | -29497.4293105374
    (15 rows)
    ```


## Clustering Algorithm<a name="section652264210184"></a>

Use kmeans as an example:

1.  Prepare the data.

    ```
    DROP TABLE IF EXISTS km_sample; 
    CREATE TABLE km_sample(pid int, points double precision[]); 
    INSERT INTO km_sample VALUES 
    (1,  '{14.23, 1.71, 2.43, 15.6, 127, 2.8, 3.0600, 0.2800, 2.29, 5.64, 1.04, 3.92, 1065}'), 
    (2,  '{13.2, 1.78, 2.14, 11.2, 1, 2.65, 2.76, 0.26, 1.28, 4.38, 1.05, 3.49, 1050}'), 
    (3,  '{13.16, 2.36,  2.67, 18.6, 101, 2.8,  3.24, 0.3, 2.81, 5.6799, 1.03, 3.17, 1185}'), 
    (4,  '{14.37, 1.95, 2.5, 16.8, 113, 3.85, 3.49, 0.24, 2.18, 7.8, 0.86, 3.45, 1480}'), 
    (5,  '{13.24, 2.59, 2.87, 21, 118, 2.8, 2.69, 0.39, 1.82, 4.32, 1.04, 2.93, 735}'), 
    (6,  '{14.2, 1.76, 2.45, 15.2, 112, 3.27, 3.39, 0.34, 1.97, 6.75, 1.05, 2.85, 1450}'), 
    (7,  '{14.39, 1.87, 2.45, 14.6, 96, 2.5, 2.52, 0.3, 1.98, 5.25, 1.02, 3.58, 1290}'), 
    (8,  '{14.06, 2.15, 2.61, 17.6, 121, 2.6, 2.51, 0.31, 1.25, 5.05, 1.06, 3.58, 1295}'), 
    (9,  '{14.83, 1.64, 2.17, 14, 97, 2.8, 2.98, 0.29, 1.98, 5.2, 1.08, 2.85, 1045}'), 
    (10, '{13.86, 1.35, 2.27, 16, 98, 2.98, 3.15, 0.22, 1.8500, 7.2199, 1.01, 3.55, 1045}');
    ```

2.  Run the kmeans algorithm.

    Use kmeans++ and Euclidean distance function for calculation.

    ```
    SET search_path="$user",public,madlib;
    SET behavior_compat_options = 'bind_procedure_searchpath';
    
    DROP TABLE IF EXISTS km_result; 
    CREATE TABLE km_result AS SELECT * FROM madlib.kmeanspp( 'public.km_sample',   -- Table of source data                              
                                                             'points',      -- Column containing point co-ordinates                              
                                                             2,             -- Number of centroids to calculate                              
                                                             'madlib.squared_dist_norm2',   -- Distance function                              
                                                             'madlib.avg',  -- Aggregate function                              
                                                             20,            -- Number of iterations                             
                                                             0.001          -- Fraction of centroids reassigned to keep iterating
    );
    ```

    After kmeans is executed, no table is automatically created to save the content. Therefore, you need to create a table.

    ```
    \x on
     select * from km_result;
    \x off
    ```

    The returned result is as follows:

    ```
    -[ RECORD 1 ]----+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    centroids        | {{14.0333333333333,1.84111111111111,2.41,15.5111111111111,96.2222222222222,2.91666666666667,3.01111111111111,.282222222222222,1.95444444444444,5.88553333333333,1.02222222222222,3.38222222222222,1211.66666666667},{13.24,2.59,2.87,21,118,2.8,2.69,.39,1.82,4.32,1.04,2.93,735}}
    cluster_variance | {257041.999707571,0}
    objective_fn     | 257041.999707571
    frac_reassigned  | 0
    num_iterations   | 2
    ```

3.  Apply the clustering result.

    Execute the following function to calculate the adjacent node and the corresponding distance of each node:

    ```
    DROP TABLE IF EXISTS km_points_silh; 
    SELECT * FROM madlib.simple_silhouette_points('public.km_sample',          -- Input points table
                                                  'public.km_points_silh',      -- Output table
                                                  'pid',                 -- Point ID column in input table
                                                  'points',              -- Points column in input table
                                                  'public.km_result',           -- Centroids table
                                                  'centroids',           -- Column in centroids table containing centroids
                                                  'madlib.squared_dist_norm2'   -- Distance function
    ); 
    SELECT * FROM km_points_silh ORDER BY pid;
    ```

    The returned result is as follows:

    ```
     pid | centroid_id | neighbor_centroid_id |       silh
    -----+-------------+----------------------+------------------
       1 |           0 |                    1 | .793983543638996
       2 |           0 |                    1 | .688301735667703
       3 |           0 |                    1 | .996324103148159
       4 |           0 |                    1 | .869765755931474
       5 |           1 |                    0 |                1
       6 |           0 |                    1 | .888416176253661
       7 |           0 |                    1 | .980107240092519
       8 |           0 |                    1 | .975880363039906
       9 |           0 |                    1 | .712384473959954
      10 |           0 |                    1 | .712198411442872
    (10 rows)
    ```


## gbdt Algorithm<a name="section183271318197"></a>

Although the gdbt base learner is a regression tree, the algorithm itself supports both classification and regression operations. The following describes the implementation of the two types of tasks. It is worth noting that this method does not support NULL values in the label column.

**Classification**

1.  Prepare the data.

    ```
    DROPTABLEIFEXISTS dt_golf CASCADE;
    DROPTABLEIFEXISTS train_output,train_output_summary;
    CREATETABLE dt_golf (
        id integerNOTNULL,
    "OUTLOOK"text,
        temperature double precision,
        humidity double precision,
    "Cont_features"double precision[],
        cat_features text[],
        windy boolean,
        class integer
    ) ;
    INSERTINTO dt_golf (id,"OUTLOOK",temperature,humidity,"Cont_features",cat_features, windy,class) VALUES
    (1, 'sunny', 85, 85,ARRAY[85, 85], ARRAY['a', 'b'], false, 0),
    (2, 'sunny', 80, 90, ARRAY[80, 90], ARRAY['a', 'b'], true, 0),
    (3, 'overcast', 83, 78, ARRAY[83, 78], ARRAY['a', 'b'], false, 1),
    (4, 'rain', 70, NULL, ARRAY[70, 96], ARRAY['a', 'b'], false, 1),
    (5, 'rain', 68, 80, ARRAY[68, 80], ARRAY['a', 'b'], false, 1),
    (6, 'rain', NULL, 70, ARRAY[65, 70], ARRAY['a', 'b'], true, 0),
    (7, 'overcast', 64, 65, ARRAY[64, 65], ARRAY['c', 'b'], NULL , 1),
    (8, 'sunny', 72, 95, ARRAY[72, 95], ARRAY['a', 'b'], false, 0),
    (9, 'sunny', 69, 70, ARRAY[69, 70], ARRAY['a', 'b'], false, 1),
    (10, 'rain', 75, 80, ARRAY[75, 80], ARRAY['a', 'b'], false, 1),
    (11, 'sunny', 75, 70, ARRAY[75, 70], ARRAY['a', 'd'], true, 1),
    (12, 'overcast', 72, 90, ARRAY[72, 90], ARRAY['c', 'b'], NULL, 1),
    (13, 'overcast', 81, 75, ARRAY[81, 75], ARRAY['a', 'b'], false, 1),
    (15, NULL, 81, 75, ARRAY[81, 75], ARRAY['a', 'b'], false, 1),
    (16, 'overcast', NULL, 75, ARRAY[81, 75], ARRAY['a', 'd'], false,1),
    (14, 'rain', 71, 80, ARRAY[71, 80], ARRAY['c', 'b'], true, 0);
    ```

2.  Train a model.

    ```
    select madlib.gbdt_train('dt_golf',         -- source table
                      'train_output',    -- output model table
                      'id'  ,            -- id column
                      'class',           -- response
                      '"OUTLOOK", temperature',          -- features
                      NULL,        -- exclude columns
                      1,       --weight
                      10,                -- num of trees
                      NULL,                 -- num of random features
                      10,       -- max depth
                      1,        -- min split
                      1,        -- min bucket
                      8,        -- number of bins per continuous variable
                      'max_surrogates=0',
                      TRUE
    );
    ```

    After the model training is complete, two tables are generated. The  **train\_output **table stores the regression tree model in gdbt, including the parameter records of each base learner.

    ```
           Column       |     Type      | Modifiers | Storage  | Stats target | Description
    --------------------+---------------+-----------+----------+--------------+-------------
     iteration          | integer       |           | plain    |              |
     tree               | madlib.bytea8 |           | external |              |
     cat_levels_in_text | text[]        |           | extended |              |
     cat_n_levels       | integer[]     |           | extended |              |
     tree_depth         | integer       |           | plain    |              |
    ```

    ```
     iteration |  cat_levels_in_text   | cat_n_levels | tree_depth
    -----------+-----------------------+--------------+------------
             0 | {sunny,rain,overcast} | {3}          |          4
             1 | {sunny,rain,overcast} | {3}          |          5
             2 | {sunny,rain,overcast} | {3}          |          6
             3 | {sunny,rain,overcast} | {3}          |          4
             4 | {sunny,rain,overcast} | {3}          |          5
             5 | {sunny,rain,overcast} | {3}          |          5
             6 | {sunny,rain,overcast} | {3}          |          5
             7 | {sunny,rain,overcast} | {3}          |          5
             8 | {sunny,rain,overcast} | {3}          |          4
             9 | {sunny,rain,overcast} | {3}          |          3
    (10 rows)
    ```

    The  **train\_output\_summary **table describes the gdbt training.

    ```
    select * from train_output_summary;
     method | cat_features | con_features | source_table | model_table  | null_proxy | learning_rate | is_classification | predict_dt_prob | num_trees
    --------+--------------+--------------+--------------+--------------+------------+---------------+-------------------+-----------------+-----------
     GBDT   | "OUTLOOK"    | temperature  | dt_golf      | train_output |            |           .01 | t                 | response        |        10
    (1 row)
    ```

3.  Perform prediction.

    ```
    select madlib.gbdt_predict('dt_golf2','train_output','test_output','id');
    ```

    View the prediction result.

    ```
    select test_output.id, test_prediction,class from test_output join dt_golf using (id);
    id | test_prediction | class
    ----+-----------------+-------
      1 |             1.0 |     0
      2 |             1.0 |     0
      3 |             1.0 |     1
      4 |             1.0 |     1
      5 |             1.0 |     1
      6 |             1.0 |     0
      7 |             1.0 |     1
      8 |             0.0 |     0
      9 |             1.0 |     1
     10 |             1.0 |     1
     11 |             1.0 |     1
     12 |             1.0 |     1
     13 |             1.0 |     1
     15 |             0.0 |     1
     16 |             1.0 |     1
     14 |             0.0 |     0
    (16 rows)
    ```


## **Regression**<a name="section731842104010"></a>

1.  Prepare the data.

    ```
    DROP TABLE IF EXISTS crime;
    CREATE TABLE crime (
    	id SERIAL NOT NULL,
        CrimeRat DOUBLE PRECISION,
        MaleTeen INTEGER,
        South SMALLINT,
        Educ DOUBLE PRECISION,
        Police60 INTEGER,
        Police59 INTEGER,
        Labor INTEGER,
        Males INTEGER,
        Pop   INTEGER,
        NonWhite INTEGER,
        Unemp1  INTEGER,
        Unemp2  INTEGER,
        Median  INTEGER,
        BelowMed INTEGER
    );
    
    INSERT INTO crime(
        CrimeRat, MaleTeen, South, Educ, Police60, Police59, Labor, Males, Pop,
        NonWhite, Unemp1, Unemp2, Median, BelowMed
    ) VALUES
    (79.1, 151, 1, 9.1, 58, 56, 510, 950, 33, 301, 108, 41, 394, 261),
    (163.5, 143, 0, 11.3, 103, 95, 583, 1012, 13, 102, 96, 36, 557, 194),
    (57.8, 142, 1, 8.9, 45, 44, 533, 969, 18, 219, 94, 33, 318, 250),
    (196.9, 136, 0, 12.1, 149, 141, 577, 994, 157, 80, 102, 39, 673, 167),
    (123.4, 141, 0, 12.1, 109, 101, 591, 985, 18, 30, 91, 20, 578, 174),
    (68.2, 121, 0, 11.0, 118, 115, 547, 964, 25, 44, 84, 29, 689, 126),
    (96.3, 127, 1, 11.1, 82, 79, 519, 982, 4, 139, 97, 38, 620, 168),
    (155.5, 131, 1, 10.9, 115, 109, 542, 969, 50, 179, 79, 35, 472, 206),
    (85.6, 157, 1, 9.0, 65, 62, 553, 955, 39, 286, 81, 28, 421, 239),
    (70.5, 140, 0, 11.8, 71, 68, 632, 1029, 7, 15, 100, 24, 526, 174),
    (167.4, 124, 0, 10.5, 121, 116, 580, 966, 101, 106, 77, 35, 657, 170),
    (84.9, 134, 0, 10.8, 75, 71, 595, 972, 47, 59, 83, 31, 580, 172),
    (51.1, 128, 0, 11.3, 67, 60, 624, 972, 28, 10, 77, 25, 507, 206),
    (66.4, 135, 0, 11.7, 62, 61, 595, 986, 22, 46, 77, 27, 529, 190),
    (79.8, 152, 1, 8.7, 57, 53, 530, 986, 30, 72, 92, 43, 405, 264),
    (94.6, 142, 1, 8.8, 81, 77, 497, 956, 33, 321, 116, 47, 427, 247),
    (53.9, 143, 0, 11.0, 66, 63, 537, 977, 10, 6, 114, 35, 487, 166),
    (92.9, 135, 1, 10.4, 123, 115, 537, 978, 31, 170, 89, 34, 631, 165),
    (75.0, 130, 0, 11.6, 128, 128, 536, 934, 51, 24, 78, 34, 627, 135),
    (122.5, 125, 0, 10.8, 113, 105, 567, 985, 78, 94, 130, 58, 626, 166),
    (74.2, 126, 0, 10.8, 74, 67, 602, 984, 34, 12, 102, 33, 557, 195),
    (43.9, 157, 1, 8.9, 47, 44, 512, 962, 22, 423, 97, 34, 288, 276),
    (121.6, 132, 0, 9.6, 87, 83, 564, 953, 43, 92, 83, 32, 513, 227),
    (96.8, 131, 0, 11.6, 78, 73, 574, 1038, 7, 36, 142, 42, 540, 176),
    (52.3, 130, 0, 11.6, 63, 57, 641, 984, 14, 26, 70, 21, 486, 196),
    (199.3, 131, 0, 12.1, 160, 143, 631, 1071, 3, 77, 102, 41, 674, 152),
    (34.2, 135, 0, 10.9, 69, 71, 540, 965, 6, 4, 80, 22, 564, 139),
    (121.6, 152, 0, 11.2, 82, 76, 571, 1018, 10, 79, 103, 28, 537, 215),
    (104.3, 119, 0, 10.7, 166, 157, 521, 938, 168, 89, 92, 36, 637, 154),
    (69.6, 166, 1, 8.9, 58, 54, 521, 973, 46, 254, 72, 26, 396, 237),
    (37.3, 140, 0, 9.3, 55, 54, 535, 1045, 6, 20, 135, 40, 453, 200),
    (75.4, 125, 0, 10.9, 90, 81, 586, 964, 97, 82, 105, 43, 617, 163),
    (107.2, 147, 1, 10.4, 63, 64, 560, 972, 23, 95, 76, 24, 462, 233),
    (92.3, 126, 0, 11.8, 97, 97, 542, 990, 18, 21, 102, 35, 589, 166),
    (65.3, 123, 0, 10.2, 97, 87, 526, 948, 113, 76, 124, 50, 572, 158),
    (127.2, 150, 0, 10.0, 109, 98, 531, 964, 9, 24, 87, 38, 559, 153),
    (83.1, 177, 1, 8.7, 58, 56, 638, 974, 24, 349, 76, 28, 382, 254),
    (56.6, 133, 0, 10.4, 51, 47, 599, 1024, 7, 40, 99, 27, 425, 225),
    (82.6, 149, 1, 8.8, 61, 54, 515, 953, 36, 165, 86, 35, 395, 251),
    (115.1, 145, 1, 10.4, 82, 74, 560, 981, 96, 126, 88, 31, 488, 228),
    (88.0, 148, 0, 12.2, 72, 66, 601, 998, 9, 19, 84, 20, 590, 144),
    (54.2, 141, 0, 10.9, 56, 54, 523, 968, 4, 2, 107, 37, 489, 170),
    (82.3, 162, 1, 9.9, 75, 70, 522, 996, 40, 208, 73, 27, 496, 224),
    (103.0, 136, 0, 12.1, 95, 96, 574, 1012, 29, 36, 111, 37, 622, 162),
    (45.5, 139, 1, 8.8, 46, 41, 480, 968, 19, 49, 135, 53, 457, 249),
    (50.8, 126, 0, 10.4, 106, 97, 599, 989, 40, 24, 78, 25, 593, 171),
    (84.9, 130, 0, 12.1, 90, 91, 623, 1049, 3, 22, 113, 40, 588, 160);
    ```

2.  Train a model.

    ```
    select madlib.gbdt_train('crime',         -- source table
                      'train_output',    -- output model table
                      'id'  ,            -- id column
                      'CrimeRat',           -- response
                     '*',          -- features
                      NULL,        -- exclude columns
                      1,       --weight
                      20,                -- num of trees
                      4,                 -- num of random features
                      10,       -- max depth
                      1,        -- min split
                      1,        -- min bucket
                      8,        -- number of bins per continuous variable
                      'max_surrogates=0',
                      FALSE
    );
    ```

    When  **is\_classification **is set to  **FALSE**, the model is a regression task. By default, gbdt provides the regression calculation function. The method generates two tables. One table records the collective information of each tree and the binary of the model. The other table records the parameter information of the method.

3.  Perform prediction.

    ```
    select madlib.gbdt_predict('crime','train_output','test_output','id');
    ```

    View the prediction result.

    ```
    select test_output.id, test_prediction,CrimeRat  from test_output join crime using (id);
    
     id |  test_prediction   | crimerat
    ----+--------------------+----------
      1 |               79.1 |     79.1
      2 |              163.5 |    163.5
      3 |               57.8 |     57.8
      4 |              196.9 |    196.9
      5 |              123.4 |    123.4
      6 |               68.2 |     68.2
      7 |   96.2999999992251 |     96.3
      8 | 155.49842087765936 |    155.5
      9 |              84.35 |     85.6
     10 |  70.50157912234037 |     70.5
     11 |  167.4000000007749 |    167.4
     12 |               84.9 |     84.9
     13 |               51.1 |     51.1
     14 |               66.4 |     66.4
     15 |               79.8 |     79.8
     16 |               94.6 |     94.6
     17 |               53.9 |     53.9
     18 |               92.9 |     92.9
     19 |               75.0 |       75
     20 |              122.5 |    122.5
     21 |               74.2 |     74.2
     22 |               43.9 |     43.9
     23 |              121.6 |    121.6
     24 |               96.8 |     96.8
     25 |               52.3 |     52.3
     26 |              199.3 |    199.3
     27 |               34.2 |     34.2
     28 |              121.6 |    121.6
     29 |              104.3 |    104.3
     30 |               69.6 |     69.6
     31 |               37.3 |     37.3
     32 |               75.4 |     75.4
     33 |              107.2 |    107.2
     34 |               92.3 |     92.3
     35 |   65.2999999992251 |     65.3
     36 | 127.19842087765963 |    127.2
     37 |  84.35000000002215 |     83.1
     38 |  56.60155638297881 |     56.6
     39 |  82.45000000075257 |     82.6
     40 | 115.10002273936168 |    115.1
     41 |               88.0 |       88
     42 |  54.19997726063828 |     54.2
     43 |  82.44999999999999 |     82.3
     44 | 103.00002273936173 |      103
     45 | 45.500000000000156 |     45.5
     46 |               50.8 |     50.8
     47 |               84.9 |     84.9
    (47 rows)
    ```


## xgboost Algorithm<a name="section17622712161914"></a>

The new xgboost supports classification and regression. The following uses the iris flower classification as an example to describe the xgboost algorithm.

The xgboost supports grid search mode and can train multiple groups of parameters at the same time.

1.  Prepare the data.

    ```
    DROP TABLE IF EXISTS iris;
    create table iris (id serial, a float, d float, c float, b float, label int);
    
    INSERT into iris (a, b, c, d, label) values 
    (5.1, 3.5, 1.4, 0.2, 0),(4.9, 3.0, 1.4, 0.2, 0),(4.7, 3.2, 1.3, 0.2, 0),(4.6, 3.1, 1.5, 0.2, 0),
    (5.0, 3.6, 1.4, 0.2, 0),(5.4, 3.9, 1.7, 0.4, 0),(4.6, 3.4, 1.4, 0.3, 0),(5.0, 3.4, 1.5, 0.2, 0),
    (4.4, 2.9, 1.4, 0.2, 0),(4.9, 3.1, 1.5, 0.1, 0),(5.4, 3.7, 1.5, 0.2, 0),(4.8, 3.4, 1.6, 0.2, 0),
    (4.8, 3.0, 1.4, 0.1, 0),(4.3, 3.0, 1.1, 0.1, 0),(5.8, 4.0, 1.2, 0.2, 0),(5.7, 4.4, 1.5, 0.4, 0),
    (5.4, 3.9, 1.3, 0.4, 0),(5.1, 3.5, 1.4, 0.3, 0),(5.7, 3.8, 1.7, 0.3, 0),(5.1, 3.8, 1.5, 0.3, 0),
    (5.4, 3.4, 1.7, 0.2, 0),(5.1, 3.7, 1.5, 0.4, 0),(4.6, 3.6, 1.0, 0.2, 0),(5.1, 3.3, 1.7, 0.5, 0),
    (4.8, 3.4, 1.9, 0.2, 0),(5.0, 3.0, 1.6, 0.2, 0),(5.0, 3.4, 1.6, 0.4, 0),(5.2, 3.5, 1.5, 0.2, 0),
    (5.2, 3.4, 1.4, 0.2, 0),(4.7, 3.2, 1.6, 0.2, 0),(4.8, 3.1, 1.6, 0.2, 0),(5.4, 3.4, 1.5, 0.4, 0),
    (5.2, 4.1, 1.5, 0.1, 0),(5.5, 4.2, 1.4, 0.2, 0),(4.9, 3.1, 1.5, 0.2, 0),(5.0, 3.2, 1.2, 0.2, 0),
    (5.5, 3.5, 1.3, 0.2, 0),(4.9, 3.6, 1.4, 0.1, 0),(4.4, 3.0, 1.3, 0.2, 0),(5.1, 3.4, 1.5, 0.2, 0),
    (5.0, 3.5, 1.3, 0.3, 0),(4.5, 2.3, 1.3, 0.3, 0),(4.4, 3.2, 1.3, 0.2, 0),(5.0, 3.5, 1.6, 0.6, 0),
    (5.1, 3.8, 1.9, 0.4, 0),(4.8, 3.0, 1.4, 0.3, 0),(5.1, 3.8, 1.6, 0.2, 0),(4.6, 3.2, 1.4, 0.2, 0),
    (5.3, 3.7, 1.5, 0.2, 0),(5.0, 3.3, 1.4, 0.2, 0),(7.0, 3.2, 4.7, 1.4, 1),(6.4, 3.2, 4.5, 1.5, 1),
    (6.9, 3.1, 4.9, 1.5, 1),(5.5, 2.3, 4.0, 1.3, 1),(6.5, 2.8, 4.6, 1.5, 1),(5.7, 2.8, 4.5, 1.3, 1),
    (6.3, 3.3, 4.7, 1.6, 1),(4.9, 2.4, 3.3, 1.0, 1),(6.6, 2.9, 4.6, 1.3, 1),(5.2, 2.7, 3.9, 1.4, 1),
    (5.0, 2.0, 3.5, 1.0, 1),(5.9, 3.0, 4.2, 1.5, 1),(6.0, 2.2, 4.0, 1.0, 1),(6.1, 2.9, 4.7, 1.4, 1),
    (5.6, 2.9, 3.6, 1.3, 1),(6.7, 3.1, 4.4, 1.4, 1),(5.6, 3.0, 4.5, 1.5, 1),(5.8, 2.7, 4.1, 1.0, 1),
    (6.2, 2.2, 4.5, 1.5, 1),(5.6, 2.5, 3.9, 1.1, 1),(5.9, 3.2, 4.8, 1.8, 1),(6.1, 2.8, 4.0, 1.3, 1),
    (6.3, 2.5, 4.9, 1.5, 1),(6.1, 2.8, 4.7, 1.2, 1),(6.4, 2.9, 4.3, 1.3, 1),(6.6, 3.0, 4.4, 1.4, 1),
    (6.8, 2.8, 4.8, 1.4, 1),(6.7, 3.0, 5.0, 1.7, 1),(6.0, 2.9, 4.5, 1.5, 1),(5.7, 2.6, 3.5, 1.0, 1),
    (5.5, 2.4, 3.8, 1.1, 1),(5.5, 2.4, 3.7, 1.0, 1),(5.8, 2.7, 3.9, 1.2, 1),(6.0, 2.7, 5.1, 1.6, 1),
    (5.4, 3.0, 4.5, 1.5, 1),(6.0, 3.4, 4.5, 1.6, 1),(6.7, 3.1, 4.7, 1.5, 1),(6.3, 2.3, 4.4, 1.3, 1),
    (5.6, 3.0, 4.1, 1.3, 1),(5.5, 2.5, 4.0, 1.3, 1),(5.5, 2.6, 4.4, 1.2, 1),(6.1, 3.0, 4.6, 1.4, 1),
    (5.8, 2.6, 4.0, 1.2, 1),(5.0, 2.3, 3.3, 1.0, 1),(5.6, 2.7, 4.2, 1.3, 1),(5.7, 3.0, 4.2, 1.2, 1),
    (5.7, 2.9, 4.2, 1.3, 1),(6.2, 2.9, 4.3, 1.3, 1),(5.1, 2.5, 3.0, 1.1, 1),(5.7, 2.8, 4.1, 1.3, 1),
    (6.3, 3.3, 6.0, 2.5, 2),(5.8, 2.7, 5.1, 1.9, 2),(7.1, 3.0, 5.9, 2.1, 2),(6.3, 2.9, 5.6, 1.8, 2),
    (6.5, 3.0, 5.8, 2.2, 2),(7.6, 3.0, 6.6, 2.1, 2),(4.9, 2.5, 4.5, 1.7, 2),(7.3, 2.9, 6.3, 1.8, 2),
    (6.7, 2.5, 5.8, 1.8, 2),(7.2, 3.6, 6.1, 2.5, 2),(6.5, 3.2, 5.1, 2.0, 2),(6.4, 2.7, 5.3, 1.9, 2),
    (6.8, 3.0, 5.5, 2.1, 2),(5.7, 2.5, 5.0, 2.0, 2),(5.8, 2.8, 5.1, 2.4, 2),(6.4, 3.2, 5.3, 2.3, 2),
    (6.5, 3.0, 5.5, 1.8, 2),(7.7, 3.8, 6.7, 2.2, 2),(7.7, 2.6, 6.9, 2.3, 2),(6.0, 2.2, 5.0, 1.5, 2),
    (6.9, 3.2, 5.7, 2.3, 2),(5.6, 2.8, 4.9, 2.0, 2),(7.7, 2.8, 6.7, 2.0, 2),(6.3, 2.7, 4.9, 1.8, 2),
    (6.7, 3.3, 5.7, 2.1, 2),(7.2, 3.2, 6.0, 1.8, 2),(6.2, 2.8, 4.8, 1.8, 2),(6.1, 3.0, 4.9, 1.8, 2),
    (6.4, 2.8, 5.6, 2.1, 2),(7.2, 3.0, 5.8, 1.6, 2),(7.4, 2.8, 6.1, 1.9, 2),(7.9, 3.8, 6.4, 2.0, 2),
    (6.4, 2.8, 5.6, 2.2, 2),(6.3, 2.8, 5.1, 1.5, 2),(6.1, 2.6, 5.6, 1.4, 2),(7.7, 3.0, 6.1, 2.3, 2),
    (6.3, 3.4, 5.6, 2.4, 2),(6.4, 3.1, 5.5, 1.8, 2),(6.0, 3.0, 4.8, 1.8, 2),(6.9, 3.1, 5.4, 2.1, 2),
    (6.7, 3.1, 5.6, 2.4, 2),(6.9, 3.1, 5.1, 2.3, 2),(5.8, 2.7, 5.1, 1.9, 2),(6.8, 3.2, 5.9, 2.3, 2),
    (6.7, 3.3, 5.7, 2.5, 2),(6.7, 3.0, 5.2, 2.3, 2),(6.3, 2.5, 5.0, 1.9, 2),(6.5, 3.0, 5.2, 2.0, 2),
    (6.2, 3.4, 5.4, 2.3, 2),(5.9, 3.0, 5.1, 1.8, 2);
    ```

2.  Perform the classification training.

    ```
    SET search_path="$user",public,madlib;
    SET behavior_compat_options = 'bind_procedure_searchpath';
    select madlib.xgboost_sk_Classifier('public.iris', 'public.iris_model_xgbc', 'id', 'label', 'a,b,c,d', NULL, 
    $${'booster': ['gbtree'], 'eta':   (0.1, 0.9), 'max_depth': (5,1), 'objective': ('multi:softmax',)}$$,   -- Training parameter combination. If there are multiple parameters, input them in tuple or list mode.
    TRUE);                                  -- Whether to evaluate the model. The multi-classification evaluation metrics are the accuracy and kappa value. The binary classification evaluation metrics are precision, recall, fscore, and support. The regression evaluation metrics are mae, mse, R2squared, and rmse.
    ```

    The xgboost supports parallel training of multiple groups of parameters. For example, the  **eta **values in the case are  **0.1**  and  **0.9**, and the maximum depth is  **5**  or  **1**.

    ```
    select id, train_timestamp, source_table, y_type, metrics, features, params from iris_model_xgbc;
    ```

    The following shows the model result.

    ```
     id |        train_timestamp        | source_table | y_type  |          metrics           | features  |                                     params
    ----+-------------------------------+--------------+---------+----------------------------+-----------+---------------------------------------------------------------------------------
      1 | 2020-12-14 20:15:05.904184+08 | public.iris  | integer | {'acc': 1.0, 'kappa': 1.0} | {a,b,c,d} | ('objective = multi:softmax', 'eta = 0.1', 'max_depth = 5', 'booster = gbtree')
      2 | 2020-12-14 20:15:05.904184+08 | public.iris  | integer | {'acc': 1.0, 'kappa': 1.0} | {a,b,c,d} | ('objective = multi:softmax', 'eta = 0.1', 'max_depth = 1', 'booster = gbtree')
      3 | 2020-12-14 20:15:05.904184+08 | public.iris  | integer | {'acc': 1.0, 'kappa': 1.0} | {a,b,c,d} | ('objective = multi:softmax', 'eta = 0.9', 'max_depth = 5', 'booster = gbtree')
      4 | 2020-12-14 20:15:05.904184+08 | public.iris  | integer | {'acc': 1.0, 'kappa': 1.0} | {a,b,c,d} | ('objective = multi:softmax', 'eta = 0.9', 'max_depth = 1', 'booster = gbtree')
    (4 rows)
    ```

    The result table records the training time, features, result types, and used parameters.

    In this example, two types of eta and two types of max\_depth are selected. Therefore, there are a total of four parameter combinations displayed on four rows in the result. In the  **metrics **column, the training evaluation results of the four parameter combinations are recorded. You can enter multiple parameter combinations and select a proper model after training.

3.  View the prediction result.

    ```
    select madlib.xgboost_sk_predict('public.iris', 'public.iris_model_xgbc', 'public.iris_xgbc_out', 'id');
    select t1.id, prediction, label from iris as t1, iris_xgbc_out as t2 where t1.id = t2.id and prediction <> label;
    ```

    The comparison between the prediction result and the training result shows that the number of unmatched rows is 0, indicating that the classification accuracy is high.

    ```
     id | prediction | label
    ----+------------+-------
    (0 rows)
    ```


## prophet Algorithm<a name="section7372832141917"></a>

The prophet time series forecasting algorithm for Facebook is added. The following uses time series data as an example to describe how to use the prophet algorithm.

1.  Prepare the data.

    ```
    DROP TABLE IF EXISTS ts_data;
    CREATE TABLE ts_data(date date, value float);
    
    INSERT into ts_data (date, value) values 
    ('2016-11-29 21:20:00', 5.6),('2016-11-29 21:30:00', 5.2),('2016-11-29 21:40:00', 5.3),('2016-11-29 21:50:00', 5.3),
    ('2016-11-29 22:00:00', 5.1),('2016-11-29 22:10:00', 5.8),('2016-11-29 22:20:00', 5.6),('2016-11-29 22:30:00', 5.4),
    ('2016-11-29 22:40:00', 5.4),('2016-11-29 22:50:00', 5.1),('2016-11-29 23:00:00', 5.2),('2016-11-29 23:10:00', 5.9),
    ('2016-11-29 23:20:00', 5.9),('2016-11-29 23:30:00', 5.1),('2016-11-29 23:40:00', 5.8),('2016-11-29 23:50:00', 6.0),
    ('2016-11-30 00:00:00', 5.9),('2016-11-30 00:10:00', 5.3),('2016-11-30 00:20:00', 5.4),('2016-11-30 00:30:00', 5.1),
    ('2016-11-30 00:40:00', 5.6),('2016-11-30 00:50:00', 5.7),('2016-11-30 01:00:00', 5.8),('2016-11-30 01:10:00', 5.4),
    ('2016-11-30 01:20:00', 5.8),('2016-11-30 01:30:00', 5.1),('2016-11-30 01:40:00', 5.6),('2016-11-30 01:50:00', 5.6),
    ('2016-11-30 02:00:00', 5.6),('2016-11-30 02:10:00', 5.9),('2016-11-30 02:20:00', 5.7),('2016-11-30 02:30:00', 5.4),
    ('2016-11-30 02:40:00', 5.6),('2016-11-30 02:50:00', 5.4),('2016-11-30 03:00:00', 5.1),('2016-11-30 03:10:00', 5.0),
    ('2016-11-30 03:20:00', 5.9),('2016-11-30 03:30:00', 5.8),('2016-11-30 03:40:00', 5.4),('2016-11-30 03:50:00', 5.7),
    ('2016-11-30 04:00:00', 5.6),('2016-11-30 04:10:00', 5.9),('2016-11-30 04:20:00', 5.1),('2016-11-30 04:30:00', 5.8),
    ('2016-11-30 04:40:00', 5.5),('2016-11-30 04:50:00', 5.1),('2016-11-30 05:00:00', 5.8),('2016-11-30 05:10:00', 5.5),
    ('2016-11-30 05:20:00', 5.7),('2016-11-30 05:30:00', 5.2),('2016-11-30 05:40:00', 5.7),('2016-11-30 05:50:00', 6.0),
    ('2016-11-30 06:00:00', 5.8),('2016-11-30 06:10:00', 5.6),('2016-11-30 06:20:00', 5.2),('2016-11-30 06:30:00', 5.8),
    ('2016-11-30 06:40:00', 5.3),('2016-11-30 06:50:00', 5.4),('2016-11-30 07:00:00', 5.8),('2016-11-30 07:10:00', 5.2),
    ('2016-11-30 07:20:00', 5.3),('2016-11-30 07:30:00', 5.3),('2016-11-30 07:40:00', 5.8),('2016-11-30 07:50:00', 5.9),
    ('2016-11-30 08:00:00', 5.6),('2016-11-30 08:10:00', 5.2),('2016-11-30 08:20:00', 5.4),('2016-11-30 08:30:00', 5.6),
    ('2016-11-30 08:40:00', 6.0),('2016-11-30 08:50:00', 5.4),('2016-11-30 09:00:00', 6.0),('2016-11-30 09:10:00', 5.1),
    ('2016-11-30 09:20:00', 5.1),('2016-11-30 09:30:00', 5.5),('2016-11-30 09:40:00', 5.6),('2016-11-30 09:50:00', 5.0),
    ('2016-11-30 10:00:00', 5.1),('2016-11-30 10:10:00', 5.7),('2016-11-30 10:20:00', 5.4),('2016-11-30 10:30:00', 5.4),
    ('2016-11-30 10:40:00', 5.7),('2016-11-30 10:50:00', 5.2),('2016-11-30 11:00:00', 5.4),('2016-11-30 11:10:00', 5.3),
    ('2016-11-30 11:20:00', 5.6),('2016-11-30 11:30:00', 5.0),('2016-11-30 11:40:00', 5.2),('2016-11-30 11:50:00', 5.2),
    ('2016-11-30 12:00:00', 5.5),('2016-11-30 12:10:00', 5.1),('2016-11-30 12:20:00', 5.7),('2016-11-30 12:30:00', 5.4),
    ('2016-11-30 12:40:00', 5.2),('2016-11-30 12:50:00', 5.5),('2016-11-30 13:00:00', 5.0),('2016-11-30 13:10:00', 5.5),
    ('2016-11-30 13:20:00', 5.6),('2016-11-30 13:30:00', 5.3),('2016-11-30 13:40:00', 5.5),('2016-11-30 13:50:00', 5.9),
    ('2016-11-30 14:00:00', 10.9),('2016-11-30 14:10:00', 10.6),('2016-11-30 14:20:00', 10.3),('2016-11-30 14:30:00', 11.0),
    ('2016-11-30 14:40:00', 10.0),('2016-11-30 14:50:00', 10.1),('2016-11-30 15:00:00', 10.2),('2016-11-30 15:10:00', 10.2),
    ('2016-11-30 15:20:00', 10.3),('2016-11-30 15:30:00', 10.1),('2016-11-30 15:40:00', 10.9),('2016-11-30 15:50:00', 10.1),
    ('2016-11-30 16:00:00', 11.0),('2016-11-30 16:10:00', 10.2),('2016-11-30 16:20:00', 10.7),('2016-11-30 16:30:00', 10.2),
    ('2016-11-30 16:40:00', 10.2),('2016-11-30 16:50:00', 10.2),('2016-11-30 17:00:00', 10.8),('2016-11-30 17:10:00', 10.6),
    ('2016-11-30 17:20:00', 10.5),('2016-11-30 17:30:00', 10.7),('2016-11-30 17:40:00', 10.9),('2016-11-30 17:50:00', 10.9),
    ('2016-11-30 18:00:00', 10.1),('2016-11-30 18:10:00', 10.3),('2016-11-30 18:20:00', 10.1),('2016-11-30 18:30:00', 10.6),
    ('2016-11-30 18:40:00', 10.3),('2016-11-30 18:50:00', 10.8),('2016-11-30 19:00:00', 10.9),('2016-11-30 19:10:00', 10.8),
    ('2016-11-30 19:20:00', 10.6),('2016-11-30 19:30:00', 11.0),('2016-11-30 19:40:00', 10.3),('2016-11-30 19:50:00', 10.9),
    ('2016-11-30 20:00:00', 10.6),('2016-11-30 20:10:00', 10.6),('2016-11-30 20:20:00', 10.5),('2016-11-30 20:30:00', 10.4),
    ('2016-11-30 20:40:00', 10.9),('2016-11-30 20:50:00', 10.9),('2016-11-30 21:00:00', 10.7),('2016-11-30 21:10:00', 10.6),
    ('2016-11-30 21:20:00', 10.5),('2016-11-30 21:30:00', 10.8),('2016-11-30 21:40:00', 10.4),('2016-11-30 21:50:00', 10.0),
    ('2016-11-30 22:00:00', 10.6),('2016-11-30 22:10:00', 10.6),('2016-11-30 22:20:00', 10.6),('2016-11-30 22:30:00', 10.1),
    ('2016-11-30 22:40:00', 10.4),('2016-11-30 22:50:00', 10.8),('2016-11-30 23:00:00', 10.4),('2016-11-30 23:10:00', 10.6),
    ('2016-11-30 23:20:00', 10.1),('2016-11-30 23:30:00', 10.2),('2016-11-30 23:40:00', 10.6),('2016-11-30 23:50:00', 10.8),
    ('2016-12-01 00:00:00', 10.6),('2016-12-01 00:10:00', 10.2),('2016-12-01 00:20:00', 10.9),('2016-12-01 00:30:00', 10.3),
    ('2016-12-01 00:40:00', 10.3),('2016-12-01 00:50:00', 10.1),('2016-12-01 01:00:00', 10.7),('2016-12-01 01:10:00', 10.5),
    ('2016-12-01 01:20:00', 10.4),('2016-12-01 01:30:00', 10.7),('2016-12-01 01:40:00', 10.5),('2016-12-01 01:50:00', 10.7),
    ('2016-12-01 02:00:00', 10.8),('2016-12-01 02:10:00', 10.9),('2016-12-01 02:20:00', 10.9),('2016-12-01 02:30:00', 10.1),
    ('2016-12-01 02:40:00', 10.4),('2016-12-01 02:50:00', 10.7),('2016-12-01 03:00:00', 10.7),('2016-12-01 03:10:00', 10.5),
    ('2016-12-01 03:20:00', 10.2),('2016-12-01 03:30:00', 10.2),('2016-12-01 03:40:00', 10.8),('2016-12-01 03:50:00', 10.2),
    ('2016-12-01 04:00:00', 10.9),('2016-12-01 04:10:00', 10.4),('2016-12-01 04:20:00', 10.6),('2016-12-01 04:30:00', 11.0),
    ('2016-12-01 04:40:00', 10.4),('2016-12-01 04:50:00', 10.3),('2016-12-01 05:00:00', 10.7),('2016-12-01 05:10:00', 10.6),
    ('2016-12-01 05:20:00', 10.9),('2016-12-01 05:30:00', 11.0),('2016-12-01 05:40:00', 10.9),('2016-12-01 05:50:00', 10.0),
    ('2016-12-01 06:00:00', 10.8),('2016-12-01 06:10:00', 10.0),('2016-12-01 06:20:00', 10.1),('2016-12-01 06:30:00', 10.5),
    ('2016-12-01 06:40:00', 15.5),('2016-12-01 06:50:00', 15.7),('2016-12-01 07:00:00', 15.1),('2016-12-01 07:10:00', 15.6),
    ('2016-12-01 07:20:00', 15.5),('2016-12-01 07:30:00', 15.4),('2016-12-01 07:40:00', 15.7),('2016-12-01 07:50:00', 15.6),
    ('2016-12-01 08:00:00', 15.3),('2016-12-01 08:10:00', 15.6),('2016-12-01 08:20:00', 15.1),('2016-12-01 08:30:00', 15.6),
    ('2016-12-01 08:40:00', 15.9),('2016-12-01 08:50:00', 16.0),('2016-12-01 09:00:00', 15.4),('2016-12-01 09:10:00', 15.0),
    ('2016-12-01 09:20:00', 15.0),('2016-12-01 09:30:00', 15.4),('2016-12-01 09:40:00', 15.9),('2016-12-01 09:50:00', 15.6),
    ('2016-12-01 10:00:00', 15.7),('2016-12-01 10:10:00', 15.4),('2016-12-01 10:20:00', 15.2),('2016-12-01 10:30:00', 15.2),
    ('2016-12-01 10:40:00', 15.8),('2016-12-01 10:50:00', 15.4),('2016-12-01 11:00:00', 16.0),('2016-12-01 11:10:00', 15.9),
    ('2016-12-01 11:20:00', 15.1),('2016-12-01 11:30:00', 15.0),('2016-12-01 11:40:00', 15.0),('2016-12-01 11:50:00', 15.4),
    ('2016-12-01 12:00:00', 15.5),('2016-12-01 12:10:00', 15.3),('2016-12-01 12:20:00', 16.0),('2016-12-01 12:30:00', 15.1),
    ('2016-12-01 12:40:00', 15.5),('2016-12-01 12:50:00', 16.0),('2016-12-01 13:00:00', 15.7),('2016-12-01 13:10:00', 15.9),
    ('2016-12-01 13:20:00', 15.4),('2016-12-01 13:30:00', 15.3),('2016-12-01 13:40:00', 15.9),('2016-12-01 13:50:00', 15.8),
    ('2016-12-01 14:00:00', 15.4),('2016-12-01 14:10:00', 15.9),('2016-12-01 14:20:00', 15.3),('2016-12-01 14:30:00', 16.0),
    ('2016-12-01 14:40:00', 15.5),('2016-12-01 14:50:00', 15.0),('2016-12-01 15:00:00', 15.1),('2016-12-01 15:10:00', 16.0),
    ('2016-12-01 15:20:00', 15.8),('2016-12-01 15:30:00', 15.9),('2016-12-01 15:40:00', 15.4),('2016-12-01 15:50:00', 15.1),
    ('2016-12-01 16:00:00', 15.8),('2016-12-01 16:10:00', 15.2),('2016-12-01 16:20:00', 15.4),('2016-12-01 16:30:00', 15.8),
    ('2016-12-01 16:40:00', 15.8),('2016-12-01 16:50:00', 15.1),('2016-12-01 17:00:00', 15.3),('2016-12-01 17:10:00', 15.6),
    ('2016-12-01 17:20:00', 15.3),('2016-12-01 17:30:00', 15.8),('2016-12-01 17:40:00', 15.0),('2016-12-01 17:50:00', 15.3),
    ('2016-12-01 18:00:00', 15.5),('2016-12-01 18:10:00', 15.4),('2016-12-01 18:20:00', 15.3),('2016-12-01 18:30:00', 15.8),
    ('2016-12-01 18:40:00', 15.2),('2016-12-01 18:50:00', 15.9),('2016-12-01 19:00:00', 15.4),('2016-12-01 19:10:00', 15.3),
    ('2016-12-01 19:20:00', 15.1),('2016-12-01 19:30:00', 15.3),('2016-12-01 19:40:00', 15.9),('2016-12-01 19:50:00', 15.3),
    ('2016-12-01 20:00:00', 15.3),('2016-12-01 20:10:00', 15.2),('2016-12-01 20:20:00', 15.0),('2016-12-01 20:30:00', 15.3),
    ('2016-12-01 20:40:00', 15.1),('2016-12-01 20:50:00', 15.1),('2016-12-01 21:00:00', 15.6),('2016-12-01 21:10:00', 15.8),
    ('2016-12-01 21:20:00', 15.4),('2016-12-01 21:30:00', 15.2),('2016-12-01 21:40:00', 16.0),('2016-12-01 21:50:00', 15.5),
    ('2016-12-01 22:00:00', 15.4),('2016-12-01 22:10:00', 15.7),('2016-12-01 22:20:00', 15.3),('2016-12-01 22:30:00', 15.9),
    ('2016-12-01 22:40:00', 15.9),('2016-12-01 22:50:00', 15.2),('2016-12-01 23:00:00', 15.8),('2016-12-01 23:10:00', 15.9),
    ('2016-12-01 23:20:00', 20.9),('2016-12-01 23:30:00', 20.4),('2016-12-01 23:40:00', 20.3),('2016-12-01 23:50:00', 20.1),
    ('2016-12-02 00:00:00', 20.7),('2016-12-02 00:10:00', 20.7),('2016-12-02 00:20:00', 20.5),('2016-12-02 00:30:00', 20.4),
    ('2016-12-02 00:40:00', 20.4),('2016-12-02 00:50:00', 20.1),('2016-12-02 01:00:00', 20.2),('2016-12-02 01:10:00', 20.9),
    ('2016-12-02 01:20:00', 20.6),('2016-12-02 01:30:00', 20.0),('2016-12-02 01:40:00', 20.4),('2016-12-02 01:50:00', 20.2),
    ('2016-12-02 02:00:00', 20.6),('2016-12-02 02:10:00', 20.4),('2016-12-02 02:20:00', 20.5),('2016-12-02 02:30:00', 20.4),
    ('2016-12-02 02:40:00', 20.5),('2016-12-02 02:50:00', 20.7),('2016-12-02 03:00:00', 20.2),('2016-12-02 03:10:00', 20.2),
    ('2016-12-02 03:20:00', 20.1),('2016-12-02 03:30:00', 20.5),('2016-12-02 03:40:00', 20.5),('2016-12-02 03:50:00', 20.0),
    ('2016-12-02 04:00:00', 20.7),('2016-12-02 04:10:00', 20.8),('2016-12-02 04:20:00', 20.6),('2016-12-02 04:30:00', 20.4),
    ('2016-12-02 04:40:00', 20.5),('2016-12-02 04:50:00', 20.8),('2016-12-02 05:00:00', 20.1),('2016-12-02 05:10:00', 20.9),
    ('2016-12-02 05:20:00', 20.5),('2016-12-02 05:30:00', 20.4),('2016-12-02 05:40:00', 20.2),('2016-12-02 05:50:00', 20.4),
    ('2016-12-02 06:00:00', 20.8),('2016-12-02 06:10:00', 20.7),('2016-12-02 06:20:00', 20.9),('2016-12-02 06:30:00', 20.1),
    ('2016-12-02 06:40:00', 20.3),('2016-12-02 06:50:00', 20.2),('2016-12-02 07:00:00', 20.4),('2016-12-02 07:10:00', 20.7),
    ('2016-12-02 07:20:00', 20.4),('2016-12-02 07:30:00', 20.8),('2016-12-02 07:40:00', 20.8),('2016-12-02 07:50:00', 20.1),
    ('2016-12-02 08:00:00', 20.3),('2016-12-02 08:10:00', 20.7),('2016-12-02 08:20:00', 20.9),('2016-12-02 08:30:00', 21.0),
    ('2016-12-02 08:40:00', 20.2),('2016-12-02 08:50:00', 20.5),('2016-12-02 09:00:00', 20.2),('2016-12-02 09:10:00', 20.8),
    ('2016-12-02 09:20:00', 20.9),('2016-12-02 09:30:00', 20.5),('2016-12-02 09:40:00', 20.9),('2016-12-02 09:50:00', 20.7),
    ('2016-12-02 10:00:00', 20.3),('2016-12-02 10:10:00', 21.0),('2016-12-02 10:20:00', 20.5),('2016-12-02 10:30:00', 20.3),
    ('2016-12-02 10:40:00', 20.2),('2016-12-02 10:50:00', 20.3),('2016-12-02 11:00:00', 20.4),('2016-12-02 11:10:00', 20.4),
    ('2016-12-02 11:20:00', 21.0),('2016-12-02 11:30:00', 20.3),('2016-12-02 11:40:00', 20.3),('2016-12-02 11:50:00', 20.9),
    ('2016-12-02 12:00:00', 20.8),('2016-12-02 12:10:00', 20.9),('2016-12-02 12:20:00', 20.7),('2016-12-02 12:30:00', 20.7);
    ```

2.  Perform training.

    ```
    SET search_path="$user",public,madlib;
    SET behavior_compat_options = 'bind_procedure_searchpath';
    select madlib.prophet_fit('public.ts_data', 'public.prophet_model', 
    $${'ds': 'date', 'y': 'value'}$$, -- Column name mapping. The prophet requires that the time column name be 'ds' and the time series value column name be 'y'.
    $${'growth': 'linear', 'changepoints': ['2016-11-30 05:40:00']}$$ -- Training parameter combination. If there are multiple parameters, input them in tuple mode.
    );
    ```

    Query the model table.

    ```
     select id, y_type, params from public.prophet_model;
    
     id |      y_type      |                            params
    ----+------------------+---------------------------------------------------------------
      1 | double precision | {'changepoints': ['2016-11-30 05:40:00'], 'growth': 'linear'}
    ```

    The model table records the training time, result types, and used parameters.

3.  Perform the prediction.

    ```
    select madlib.prophet_predict('public.prophet_model','public.prophet_output', 10, '10T');
    ```

    View the prediction result.

    ```
    select ds, yhat, yhat_lower, yhat_upper from public.prophet_output;
    
         ds     |     yhat      |  yhat_lower   |  yhat_upper
    ------------+---------------+---------------+---------------
     2016-12-02 | 20.6943848045 | 17.7671496048 | 23.4160694837
     2016-12-02 | 20.7408355633 | 17.9264413164 | 23.6426403933
     2016-12-02 | 20.7872863221 | 17.9298207895 | 23.4548814727
     2016-12-02 |  20.833737081 |  18.234443228 | 23.5317342873
     2016-12-02 | 20.8801878398 | 18.2471709649 | 23.8345735574
     2016-12-02 | 20.9266385986 | 18.1780101465 |  23.696087927
     2016-12-02 | 20.9730893575 | 18.4292088648 | 23.7209823631
     2016-12-02 | 21.0195401163 | 18.2623494126 | 23.7341427068
     2016-12-02 | 21.0659908751 | 18.1173966769 | 23.7919478206
     2016-12-02 |  21.112441634 | 18.5018042056 | 23.9508963879
    (10 rows)
    ```


