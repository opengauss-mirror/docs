# ALTER SUBSCRIPTION

## Function Description<a name="section13387758133316"></a>

**ALTER SUBSCRIPTION** alters the attributes of a subscription specified in **CREATE SUBSCRIPTION**.

## Precautions<a name="section9949646113519"></a>

Only the owner of a subscription can execute **ALTER SUBSCRIPTION**, and the new owner must be a system administrator.

## Syntax<a name="section14225141693411"></a>

- Update the connection information of a subscription.

  ```
  ALTER SUBSCRIPTION name CONNECTION 'conninfo'
  ```

- Update the name of the publication on the publisher side.

  ```
  ALTER SUBSCRIPTION name SET PUBLICATION publication_name [, ...]
  ```

- Update the subscription list on the subscriber.

  ```
  ALTER SUBSCRIPTION name REFRESH PUBLICATION [ WITH ( refresh_option [= value] [, ... ] ) ]
  ```

- Enable a subscription.

  ```
  ALTER SUBSCRIPTION name ENABLE
  ```

- Update the attributes defined in **CREATE SUBSCRIPTION**.

  ```
  ALTER SUBSCRIPTION name SET ( subscription_parameter [= value] [, ... ] )
  ```

- Update the owner of a subscription.

  ```
  ALTER SUBSCRIPTION name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
  ```

- Change the name of a subscription.

  ```
  ALTER SUBSCRIPTION name RENAME TO new_name
  ```

## Parameter Description<a name="section5772125023414"></a>

- **name**

    Specifies the name of the subscription whose attributes are to be altered.

- **CONNECTION 'conninfo'**

    Alters the connection attributes initially set by **CREATE SUBSCRIPTION**.

- **ENABLE \(boolean\)**

    Specifies whether a subscription should be actively replicated, or whether it should be just set but not started. The default value is **true**.

- **SET \( subscription\_parameter \[= value\] \[, ... \] \)**

  Modifies the parameters set by **CREATE SUBSCRIPTION**. The allowed parameters are **slot\_name** and **synchronous\_commit**.

  -   If **enabled** is set to **false** during subscription creation, **slot\_name** is forcibly set to **NONE**, that is, null. In this case, the replication slot does not exist even if the value of **slot\_name** is specified.
  -   Change the value of **enabled** from **false** to **true**. When the subscription is enabled, the publication side is connected to create a replication slot. If you do not specify the value of **slot\_name**, the default value (subscription name) is used.
  -   If **enabled** is set to **true**, the subscription is in the normal state. In this case, **slot\_name** cannot be left empty, but the name of the replication slot can be changed to a valid name.

- **REFRESH PUBLICATION**

    Obtains the missing table information from the publisher. Tables added to the subscription publication are copied since the last REFRESH PUBLICATION or CREATE SUBSCRIPTION call.

    The refresh\_option specifies additional options for the refresh operation. The options are as follows:
    
    copy\_data (boolean)
          Determines whether to copy existing data in the publication that is being subscribed to after copy starts. The default value is **true**. (Tables previously subscribed to will not be copied.)

- **new\_owner**

    Specifies the username of the new owner of a subscription.

- **new\_name**

    Specifies the new name of a subscription.

## Example<a name="section985314309401"></a>

For details, see [Examples](create-subscription.md#section1399192015610).

## Helpful Links<a name="section773423484017"></a>

[CREATE SUBSCRIPTION](create-subscription.md), [DROP SUBSCRIPTION](drop-subscription.md)
