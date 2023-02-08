# Comment Operators <a name="EN-US_TOPIC_0289900280"></a>

Compared with the original openGauss, Dolphin modifies the comment operators as follows:

1. The number sign (`#`) can be used to indicate the beginning of a single-line comment. For example, `# select a from t1` indicates a comment.

- #Single-line Comment at the Beginning

  Description: The information from the number sign (#) to the newline character is regarded as comments.

  Note: This operator is used for B-compatible databases and has different semantics from the original # operator of openGauss. To use this semantics, create a B-compatible database, enable the B-compatible SQL engine plug-in, and set **dolphin.b_compatibility_mode** to **TRUE**.

  Example:

  ```
  openGauss=# SELECT lower('TOM') #1234;
  openGauss=# ;
  lower
  -------
  tom
  ```
