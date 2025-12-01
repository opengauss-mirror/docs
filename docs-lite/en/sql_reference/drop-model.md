# DROP MODEL<a name="EN-US_TOPIC_0000001148169736"></a>

## Function<a name="section201561822201319"></a>

**DROP MODEL**  deletes a model object that has been trained and saved.

## Precautions<a name="section1463163201612"></a>

The deleted model can be viewed in the  **gs\_model\_warehouse**  system catalog.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>
>In the Lite scenario, openGauss provides this syntax, but the AI capabilities are unavailable.

## Syntax<a name="section15925137181918"></a>

```
DROP MODEL model_name;
```

## Parameter Description<a name="section14540175161916"></a>

model\_name

Specifies a model name.

Value range: a string. It must comply with the identifier naming convention.

## Helpful Links<a name="section3791104752012"></a>

[CREATE MODEL](create-model.md)  and  [PREDICT BY](predict-by.md)

