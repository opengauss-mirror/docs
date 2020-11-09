# SEQUENCE Functions<a name="EN-US_TOPIC_0242370443"></a>

The sequence functions provide a simple method to ensure security of multiple users for users to obtain sequence values from sequence objects.

-   nextval\(regclass\)

    Description: Specifies an increasing sequence and returns a new value.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >To avoid blocking of concurrent transactions that obtain numbers from the same sequence, a nextval operation is never rolled back; that is, once a value has been fetched it is considered used, even if the transaction that did the nextval later aborts. This means that aborted transactions may leave unused "holes" in the sequence of assigned values. Therefore, openGauss sequences cannot be used to obtain sequence without gaps.  

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >The  **nextval**  function can be executed only on the primary node. It is not supported on standby nodes.  

    Return type: bigint

    The  **nextval**  function can be invoked in either of the following ways: \(In example 2, the sequence name cannot contain a dot.\)

    Example 1:

    ```
    postgres=# select nextval('seqDemo'); 
     nextval
    ---------
           2
    (1 row)
    ```

    Example 2:

    ```
    postgres=# select seqDemo.nextval; 
     nextval
    ---------
           2
    (1 row)
    ```

-   currval\(regclass\)

    Returns the last value of  **nextval**  for a specified sequence in the current session. If  **nextval**  has not been invoked for the specified sequence in the current session, an error is reported when  **currval**  is invoked.

    Return type: bigint

    The  **currval**  function can be invoked in either of the following ways: \(In example 2, the sequence name cannot contain a dot.\)

    Example 1:

    ```
    postgres=# select currval('seq1'); 
     currval
    ---------
           2
    (1 row)
    ```

    Example 2:

    ```
    postgres=# select seq1.currval; 
     currval
    ---------
           2
    (1 row)
    ```

-   lastval\(\)

    Description: Returns the last value of  **nextval**  in the current session. This function is equivalent to  **currval**, but  **lastval**  does not have a parameter. If  **nextval**  has not been invoked in the current session, invoking  **lastval**  will report an error.

    Return type: bigint

    Example:

    ```
    postgres=# select lastval(); 
     lastval
    ---------
           2
    (1 row)
    ```

-   setval\(regclass, bigint\)

    Description: Sets the current value of a sequence.

    Return type: bigint

    Example:

    ```
    postgres=# select setval('seqDemo',1);
     setval
    --------
          1
    (1 row)
    ```

-   setval\(regclass, bigint, Boolean\)

    Description: Sets the current value of a sequence and the is\_called sign.

    Return type: bigint

    Example:

    ```
    postgres=# select setval('seqDemo',1,true);
     setval
    --------
          1
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The current session will take effect immediately after  **setval**  is performed. If other sessions have buffered sequence values,  **setval**  will take effect only after the values are used up. Therefore, to prevent sequence value conflicts, you are advised to use  **setval**  with caution.  
    >Because the sequence is non-transactional, the change caused by  **setval**  will not be undone by transaction rollback.  

    >![](public_sys-resources/icon-notice.gif) **NOTICE:**   
    >The  **nextval**  function can be executed only on the primary node. It is not supported on standby nodes.  


