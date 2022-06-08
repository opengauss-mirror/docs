# Restrictions<a name="EN-US_TOPIC_0289900513"></a>

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>-   When an autonomous transaction is executed, an autonomous transaction session is started in the background. You can use  **max\_concurrent\_autonomous\_transactions**  to set the maximum number of concurrent autonomous transactions. The value range is 0 to 1024, and the default value is  **10**.
>-   When  **max\_concurrent\_autonomous\_transactions**  is set to  **0**, autonomous transactions cannot be executed.
>-   After a new session is started for an autonomous transaction, the default session parameters are used and objects \(including session-level variables, local temporary variables, and global temporary table data\) of the primary session are not shared.

-   A trigger function does not support autonomous transactions.

    ```
    CREATE TABLE test_trigger_des_tbl(id1 INT, id2 INT, id3 INT);
    
    CREATE OR REPLACE FUNCTION tri_insert_func() RETURNS TRIGGER AS
    $$
    DECLARE
     PRAGMA AUTONOMOUS_TRANSACTION;
    BEGIN
    INSERT INTO test_trigger_des_tbl VALUES(NEW.id1, NEW.id2, NEW.id3);
    RETURN NEW;
    END
    $$ LANGUAGE PLPGSQL;
    ```

-   Autonomous transactions cannot be invoked by non-top-layer anonymous blocks \(but can only be invoked by top-layer autonomous transactions, including stored procedures, functions, and anonymous blocks\).
-   In an autonomous transaction, the  **ref cursor**  parameter can be passed only through the  **PROCEDURE OUT**  parameter. The  **ref cursor**  parameter cannot be passed through the  **IN**,  **INOUT**, or  **FUNCTION**  parameter.

    ```
    create table sections(section_ID int);
    insert into sections values(1);
    insert into sections values(1);
    insert into sections values(1);
    insert into sections values(1);
    
    1. The PROCEDURE OUT output parameter passes the ref cursor parameter (supported).
    CREATE OR REPLACE PROCEDURE proc_sys_ref(OUT c1 refcursor)
    IS
    declare
      PRAGMA AUTONOMOUS_TRANSACTION;
    BEGIN
     OPEN c1 FOR SELECT section_ID FROM sections ORDER BY section_ID;
     
    END;
    /
    
    CREATE OR REPLACE PROCEDURE proc_sys_call() AS 
    DECLARE
      c1 SYS_REFCURSOR;
      TEMP NUMBER(4);
    BEGIN
      proc_sys_ref(c1);
      if c1%isopen then
        raise notice '%','ok';
     end if;
    
      LOOP
        FETCH C1 INTO TEMP;
        raise notice '%',C1%ROWCOUNT;
        EXIT WHEN C1%NOTFOUND;
      END LOOP;
    END;
    /
    
    2. The PROCEDURE IN or INOUT output parameter passes the ref cursor parameter (not supported).
    CREATE OR REPLACE PROCEDURE proc_sys_ref(IN c1 refcursor)
    IS
    declare
      PRAGMA AUTONOMOUS_TRANSACTION;
    BEGIN
      if c1%isopen then
        raise notice '%','ok';
      end if;
    
      LOOP
        FETCH C1 INTO TEMP;
        raise notice '%',C1%ROWCOUNT;
        EXIT WHEN C1%NOTFOUND;
      END LOOP;
    END;
    /
    
    CREATE OR REPLACE PROCEDURE proc_sys_call() AS 
    DECLARE
      c1 SYS_REFCURSOR;
      TEMP NUMBER(4);
    BEGIN
      OPEN c1 FOR SELECT section_ID FROM sections ORDER BY section_ID;
      proc_sys_ref(c1);
    END;
    /
    
    3. FUNCTION RETURN passes the ref cursor parameter (not supported)
    CREATE OR REPLACE function proc_sys_ref()
    return SYS_REFCURSOR
    IS
    declare
      PRAGMA AUTONOMOUS_TRANSACTION;
            C1 SYS_REFCURSOR;
    BEGIN
     OPEN C1 FOR SELECT section_ID FROM sections ORDER BY section_ID;
     return C1;
    END;
    /
    
    4. The FUNCTION OUT output parameter passes the ref cursor parameter (not supported).
    CREATE OR REPLACE function proc_sys_ref(C1 out SYS_REFCURSOR)
    return SYS_REFCURSOR
    IS
    declare
      PRAGMA AUTONOMOUS_TRANSACTION;
    BEGIN
     OPEN C1 FOR SELECT section_ID FROM sections ORDER BY section_ID;
     return 1;
    END;
    /
    ```

-   Autonomous transaction functions only return records in the out format.
-   The isolation level of an autonomous transaction cannot be changed.
-   Autonomous transactions do not support the  **setof**  return type.

    ```
    create table test_in (id int,a date);
    create table test_main (id int,a date);
    insert into test_main values (1111,'2021-01-01'),(2222,'2021-02-02');
    truncate test_in,test_main;
    CREATE OR REPLACE FUNCTION autonomous_f_022(num1  int) RETURNS SETOF test_in
    LANGUAGE plpgsql AS $$
    DECLARE
    count int :=3;
    test_row test_in%ROWTYPE;
    PRAGMA AUTONOMOUS_TRANSACTION;
    BEGIN
        while true
        loop
        if count=3 then
        null;
        else 
        if count=2 then
            insert into test_main values (count,'2021-03-03');
            goto pos1;
        end if;                
        end if;
        count=count-1;
        end loop;
        insert into test_main values (1000,'2021-04-04');
         <<pos1>>
         for test_row in select * from test_main
         loop
            return next test_row;
           end loop;
          return;
    END;
    $$
    ;
    ```


