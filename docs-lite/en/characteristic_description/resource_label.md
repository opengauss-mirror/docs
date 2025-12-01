# Resource Label<a name="EN-US_TOPIC_0000001105395248"></a>

## Availability<a name="section17746747"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section25503003"></a>

Database resources refer to database objects, such as databases, schemas, tables, columns, views, and triggers. The more the database objects are, the more complex the classification management of database resources is. The resource label mechanism is a technology that classifies and labels database resources with certain features to implement resource classification management. After adding labels to some resources in a database, administrators can perform operations such as data audit or anonymization using the labels to implement security management on labeled database resources.

## Benefits<a name="section28200442"></a>

Proper resource labels can be used to effectively classify data objects, improve management efficiency, and simplify security policy configuration. To perform unified audit or data anonymization on a group of database resources, the administrator can allocate a resource label to these resources first. The label indicates that the database resources have a certain feature or require unified configuration of a certain policy. The administrator can directly perform operations on the resource label, which greatly reduces the complexity of policy configuration and information redundancy as well as improves management efficiency.

## Description<a name="section3730161075314"></a>

The resource label mechanism selectively classifies resources in the current database. Administrators can use the following SQL syntax to create a resource label and add the label to a group of database resources:

```
CREATE RESOURCE LABEL schm_lb ADD SCHEMA(schema_for_label);
CREATE RESOURCE LABEL tb_lb ADD TABLE(schema_for_label.table_for_label);
CREATE RESOURCE LABEL col_lb ADD COLUMN(schema_for_label.table_for_label.column_for_label);
CREATE RESOURCE LABEL multi_lb ADD SCHEMA(schema_for_label), TABLE(table_for_label);
```

**schema\_for\_label**,  **table\_for\_label**, and  **column\_for\_label**  indicate the schema, table, and column to be labeled, respectively. The  **schm\_lb**  label is added to schema  **schm\_for\_label**,  **tb\_lb**  is added to table  **table\_for\_label**,  **col\_lb**  is added to column  **column\_for\_label**, and  **multi\_lb**  is added to schema  **schm\_for\_label**  and table  **table\_for\_label**. You can perform unified audit or dynamic data anonymization using the configured resource labels, that is, manage all labeled database resources.

Currently, resource labels support the following database resource types: schema, table, column, view, and function.

## Enhancements<a name="section2534498"></a>

None.

## Constraints<a name="section06531946143616"></a>

-   Resource labels can be created only by a user with the  **POLADMIN**  and  **SYSADMIN**  attributes or an initial user.
-   Resource labels cannot be created for temporary tables.
-   Columns in the same basic table can belong to only one resource tag.

## Dependencies<a name="section22810484"></a>

None.

