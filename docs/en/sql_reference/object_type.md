---
description: This document describes Object Type in openGauss.
keywords: [openGauss, Object Type, SQL]
---

# Object Type

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:23:47.070Z -->

An object type consists of attributes and the methods that process these attributes. You can also use an object data type as a parent type and create subtypes based on it, allowing the subtypes to inherit the attributes and methods of the parent type. This provides object-oriented capabilities.

An object type contains attributes and the methods that process these attributes. The attributes and methods of an object type are declared in CREATE TYPE, and the methods of the object type are implemented in CREATE TYPE BODY.

For details about creating an OBJECT TYPE, see [CREATE TYPE](create_type.md).

>[!TIP]Caution
>
>- Object type-related features are only allowed in A compatibility mode.
>- The polymorphic feature (a parent type accepting subtype data or a subtype accepting parent type data) is not supported.
>- The use of nested collection types with object type functionality is not supported (that is, collection types of object types, such as table of object_type, are not supported).
>- The NEW keyword for constructing object instances is not supported. Only implicit construction using typename(param1, param2) is supported.
