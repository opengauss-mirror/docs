# Restrictions<a name="EN-US_TOPIC_0274781306"></a>

>![](public_sys-resources/icon-caution.gif) **Caution:**
> When an autonomous transaction is executed, an autonomous transaction session is started in the background. You can use **max\_concurrent\_autonomous\_transactions** to set the maximum number of concurrent autonomous transactions. The value range is 0 to 1024, and the default value is **10**. When **max\_concurrent\_autonomous\_transactions** is set to **0**, autonomous transactions cannot be executed.

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

-   Autonomous transactions cannot be invoked by non-top-layer anonymous blocks (but can only be invoked by top-layer autonomous transactions, including stored procedures, functions, and anonymous blocks).

    ```
    create table t1(a int ,b text);
    
    DECLARE 
    	--PRAGMA AUTONOMOUS_TRANSACTION;
    BEGIN
    	DECLARE 
    		PRAGMA AUTONOMOUS_TRANSACTION;
    	BEGIN
    		insert into t1 values(1,'can you rollback!');
    	END;
    	insert into t1 values(2,'I will rollback!');
    	rollback;
    END;
    /
    
    select * from t1;
    
    ```

-   Autonomous transactions do not support **ref\_cursor** parameter transfer.

    ```
    create table sections(section_ID int);
    insert into sections values(1);
    insert into sections values(1);
    insert into sections values(1);
    insert into sections values(1);
    
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
    
    CREATE OR REPLACE PROCEDURE proc_sys_call() AS 
    DECLARE
    	 C1 SYS_REFCURSOR;
    	 TEMP NUMBER(4);
    BEGIN
    	 c1 = proc_sys_ref();
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
    
    select proc_sys_call();
    
    CREATE OR REPLACE function proc_sys_ref(OUT C2 SYS_REFCURSOR, OUT a int)
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
    
    CREATE OR REPLACE PROCEDURE proc_sys_call() AS 
    DECLARE
    	 C1 SYS_REFCURSOR;
    	 TEMP NUMBER(4);
    	 a int;
    BEGIN
    	 OPEN C1 FOR SELECT section_ID FROM sections ORDER BY section_ID;
    	 c1 = proc_sys_ref(C1,a);
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
    
    select proc_sys_call();
    ```

-   Autonomous transaction functions only return records in the out format.
-   The isolation level of an autonomous transaction cannot be changed.
-   Autonomous transactions do not support the setof return type.
