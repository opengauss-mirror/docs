# CREATE MODEL<a name="EN-US_TOPIC_0000001117639598"></a>

## Function<a name="section94489231810"></a>

**CREATE MODEL**  trains a machine learning model and saves the model.

## Precautions<a name="section428216371487"></a>

-   The model name must be unique. Pay attention to the naming format.
-   The AI training duration fluctuates greatly, and in some cases, the training duration is long. If the duration specified by the GUC parameter  **statement\_timeout**  is too long, the training will be interrupted. You are advised to set  **statement\_timeout**  to  **0**  so that the statement execution duration is not limited.

## Syntax<a name="section187451047882"></a>

```
CREATE MODEL model_name USING algorithm_name 
[FEATURES { {expression [ [ AS ] output_name ]} [, ...] }]
[TARGET { {expression [ [ AS ] output_name ]} [, ...] }]
FROM { table_name | select_query }
WITH hyperparameter_name = { hyperparameter_value | DEFAULT } [, ...] }
```

## Parameter Description<a name="section19493195215818"></a>

-   **model\_name**

    Name of the training model, which must be unique.

    Value range: a string. It must comply with the identifier naming convention.

-   **architecture\_name**

    Algorithm type of the training model.

    Value range: a string. Currently, the value can be  **logistic\_regression**,  **linear\_regression**,  **svm\_classification**, or  **kmeans**.

-   **attribute\_list**

    Enumerated input column name of the training model.

    Value range: a string. It must comply with the naming convention of data attributes.

-   **attribute\_name**

    Target column name of the retraining model in a supervised learning task \(simple expression processing can be performed\).

    Value range: a string. It must comply with the naming convention of data attributes.

-   **subquery**

    Data source.

    Value range: a string. It must comply with the SQL syntax of databases.

-   **hyper\_parameter\_name**

    Hyperparameter name of the machine learning model.

    Value range: a string. The value range varies depending on the algorithms. For details, see  [Table 2](../AIFeatureGuide/db4ai-query-for-model-training-and-prediction.md#table15985527185615).

-   **hp\_value**

    Hyperparameter value.

    Value range: a string. The value range varies depending on the algorithms. For details, see  [Table 3](../AIFeatureGuide/db4ai-query-for-model-training-and-prediction.md#table86881521502).


## Examples<a name="section10367355883"></a>

```
CREATE MODEL price_model USING logistic_regression
 FEATURES size, lot
 TARGET price
 FROM HOUSES
 WITH learning_rate=0.88, max_iterations=default;
```

## Helpful Links<a name="section084411512195"></a>

[DROP MODEL](drop-model.md)  and  [PREDICT BY](predict-by.md)

