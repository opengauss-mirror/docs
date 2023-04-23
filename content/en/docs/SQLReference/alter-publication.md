# ALTER PUBLICATION

## Function<a name="section6411155412312"></a>

**ALTER PUBLICATION** alters the attributes of a publication.

## Precautions<a name="section20666031491"></a>

Only the owner of a publication and the system administrator can execute **ALTER PUBLICATION**. Only the direct or indirect members of the new owner role can change the owner. The new owner must have the **CREATE** permission on the current database. In addition, the new owner published by **FOR ALL TABLES** must be the system administrator. However, the system administrator can change the ownership of a publication while avoiding these restrictions.

## Syntax<a name="section8269651410"></a>

- Replace the currently published table with a specified table.

  ```
  ALTER PUBLICATION name SET TABLE table_name [, ...]
  ```

- Add one or more tables to a publication.

  ```
  ALTER PUBLICATION name ADD TABLE table_name [, ...]
  ```

- Delete one or more tables from a publication.

  ```
  ALTER PUBLICATION name DROP TABLE table_name [, ...]
  ```

- Change all publication attributes specified in **CREATE PUBLICATION**. Retain previous settings for attributes that are not mentioned.

  ```
  ALTER PUBLICATION name SET ( publication_parameter [= value] [, ... ] )
  ```

- Change the owner of a publication.

  ```
  ALTER PUBLICATION name OWNER TO { new_owner | CURRENT_USER | SESSION_USER }
  ```

- Change the name of a publication.

  ```
  ALTER PUBLICATION name RENAME TO new_name
  ```


## Parameter Description<a name="section1338317414277"></a>

- **name**

  Specifies the name of the publication to be modified.

- **table\_name**

  Specifies the name of an existing table.

- **SET \( publication\_parameter \[= value\] \[, ... \] \)**

  Modifies the publication parameters initially set by **CREATE PUBLICATION**.

- **new\_owner**

  Specifies the username of the new owner of a publication.

- **new\_name**

  Specifies the new name of a publication.


## Examples<a name="section5652932173112"></a>

For details, see [Examples](create-publication.md#section109371845154215).

## Helpful Links<a name="section1530717394317"></a>

[CREATE PUBLICATION](create-publication.md) and [DROP PUBLICATION](drop-publication.md)
