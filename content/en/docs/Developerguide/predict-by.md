# PREDICT BY<a name="EN-US_TOPIC_0000001117479700"></a>

## Function<a name="section1596413142510"></a>

**PREDICT BY**  uses a trained model to perform inference tasks.

## Precautions<a name="section766913421659"></a>

The name of the invoked model can be viewed in the  **gs\_model\_warehouse**  system catalog.

## Syntax<a name="section74427451052"></a>

```
PREDICT BY model_name [ (FEATURES attribute [, attribute] +]) ]
```

## Parameter Description<a name="section1885554716517"></a>

-   model\_name

    Name of the model of a speculative task.

    Value range: a string. It must comply with the identifier naming convention.

-   attribute

    Name of the input feature column of a speculative task.

    Value range: a string. It must comply with the identifier naming convention.


## Examples<a name="section9624150554"></a>

```
SELECT id, PREDICT BY price_model (FEATURES size,lot), price
FROM houses;
```

## Helpful Links<a name="section998105215517"></a>

[CREATE MODEL](create-model.md)  and  [DROP MODEL](drop-model.md)

