# DROP RESOURCE POOL<a name="EN-US_TOPIC_0000001193987659"></a>

## Function<a name="en-us_topic_0059778399_sa24aa65d84e94a079fb987b25652dd8d"></a>

**DROP RESOURCE POOL**  deletes a resource pool.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The resource pool cannot be deleted if it is associated with a role.

## Precautions<a name="en-us_topic_0059778399_sac7b2d84ed1a4b7fba5c5a6497f822c1"></a>

Only SYSADMIN and VCADMIN users can delete resource pools.

## Syntax<a name="en-us_topic_0059778399_s147ae6d344a249e1b923eedde3ba326a"></a>

```
DROP RESOURCE POOL [ IF EXISTS ] pool_name;
```

## Parameter Description<a name="en-us_topic_0059778399_sb1f56ab4e3824ce58d2657a5745749f4"></a>

-   **IF EXISTS**

    Reports a notice instead of an error if a specified resource pool does not exist.


-   **pool\_name**

    Specifies the name of a created resource pool.

    Value range: a string. It must comply with the identifier naming convention.


## Examples<a name="en-us_topic_0059778399_s9b7c315e99ba4a41bfdb1f841109dda9"></a>

See  [Examples](create-resource-pool.md#en-us_topic_0059777569_s44181f6d005b4da1952aaeff4ef66e0e)  in  **CREATE RESOURCE POOL**.

## Helpful Links<a name="en-us_topic_0059778399_s41faee269a414537919479fb56fc5a4d"></a>

[ALTER RESOURCE POOL](alter-resource-pool.md)  and  [CREATE RESOURCE POOL](create-resource-pool.md)

