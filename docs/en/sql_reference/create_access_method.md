---
description: This document describes CREATE ACCESS METHOD in openGauss, covering topics such as Description, Notes.
keywords: [openGauss, CREATE ACCESS METHOD, SQL, Description, Notes]
---

# CREATE ACCESS METHOD

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:20:24.044Z -->

## Description<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s0867185fef0f4a228532d432b598cb26"></a>

A new access method is created in the current database. The access method name must be unique within the database, and only superusers can define new access methods.

## Notes<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_sb04dbf08cbd848649163edbff21254a1"></a>

- Currently, the access method supports only the INDEX type.
- The handler function of an index access method must be declared as accepting a single argument of type internal and returning the pseudo-type index_am_handler. The argument is only used to prevent the handler function from being called directly from SQL commands. The result of the function must be a palloc'd IndexAmRoutine type structure, which contains all the information required by the core code to use this index access method. The fields in the IndexAmRoutine structure (also referred to as the API structure of the access method) specify various fixed properties of the access method, such as whether it supports multicolumn indexes. In addition, it contains pointers to the support functions of the access method, which perform the actual work of accessing the index (support functions are pure C functions).
- To add a custom access method, you need to refer to the built-in access methods and add method support in `index.h` and `transformIndexStmt` (therefore, it is not recommended to execute in user SQL commands).

## Syntax<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_sc7a49d08f8ac43189f0e7b1c74f877eb"></a>

Creates a custom access method.

```
CREATE ACCESS METHOD name TYPE INDEX HANDLER handler_function
```

## Parameter Description<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s99cf2ac11c79436c93385e4efd7c4428"></a>

- **name**

    Name of the newly created access method.

- **handler_function**

    Name (possibly schema-qualified) of a previously registered function that represents the access method to be created. The handler function must be declared to accept a single parameter of the internal type, and its return type depends on the type of the access method (for an INDEX access method, it must be index_am_handler). The C-level API that the handler function must implement depends on the type of the access method.

## Example<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_s86758dcf05d442d2a9ebd272e76ed1b8"></a>

```
-   Create an index access method ivfflat using the handler function ivfflathandler:
CREATE ACCESS METHOD ivfflat TYPE INDEX HANDLER ivfflathandler;
```

## Related Links<a name="zh-cn_topic_0283137629_zh-cn_topic_0237122117_zh-cn_topic_0059778169_scd5caca899f849f697cb50d76c49de4c"></a>

[DROP ACCESS METHOD](drop_access_method.md)
