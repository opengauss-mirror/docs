# Transaction Management<a name="EN-US_TOPIC_0289899855"></a>

Calling a stored procedure automatically starts a transaction. When the calling is complete, the transaction is automatically submitted, or rolled back upon an exception. In addition to automatic transaction control, you can also use COMMIT/ROLLBACK to control transactions in stored procedures. Running the COMMIT/ROLLBACK commands in a stored procedure will commit or roll back the current transaction and automatically starts a new transaction. All subsequent operations will be performed in the new transaction.

## Usage Scenarios<a name="section20572131544216"></a>

COMMIT/ROLLBACK can be used in the following contexts:

-   COMMIT/ROLLBACK can be used in PLSQL stored procedures.
-   COMMIT/ROLLBACK can be used in stored procedures that contain EXCEPTION.
-   COMMIT/ROLLBACK can be used in EXCEPTION statements of stored procedures.
-   A stored procedure that contains COMMIT/ROLLBACK \(which means the stored procedure is controled by /BEGIN/START/END\) can be called in a transaction block.
-   COMMIT/ROLLBACK, including IF, FOR, CURSOR LOOP, and WHILE, can be called in most PLSQL contexts and statements.

The following content can be submitted or rolled back:

-   DDL statements after COMMIT/ROLLBACK can be submitted or rolled back.
-   DML statements after COMMIT/ROLLBACK can be submitted.
-   GUC parameters in stored procedures can be submitted or rolled back.

## Usage Restrictions<a name="section816411381184"></a>

COMMIT/ROLLBACK cannot be used in the following contexts:

-   COMMIT/ROLLBACK cannot be called in stored procedures other than PLSQL, such as PLJAVA and PLPYTHON.
-   COMMIT/ROLLBACK and stored procedures that contain COMMIT/ROLLBACK cannot be called in functions.
-   After SAVEPOINT is called in a transaction block, stored procedures that contain COMMIT/ROLLBACK cannot be called.
-   Stored procedures that contain COMMIT/ROLLBACK cannot be called in TRIGGER.
-   COMMIT/ROLLBACK cannot be invoked in EXECUTE statements.
-   Stored procedures that contain COMMIT/ROLLBACK cannot be called in CURSOR statements.
-   Stored procedures that contain IMMUTABLE or SHIPPABLE cannot call COMMIT/ROLLBACK or another stored procedure that contain COMMIT/ROLLBACK.
-   Stored procedures that contain COMMIT/ROLLBACK cannot be called in SQL statements other than SELECT PROC and CALL PROC.
-   COMMIT/ROLLBACK cannot be called in a stored procedure whose header contains GUC parameters.
-   COMMIT/ROLLBACK cannot be called in expressions or CURSOR/EXECUTE statements.
-   Return values and expression calculation of stored procedures are not supported.

The following content cannot be committed or rolled back:

-   Variables declared or imported in stored procedures cannot be submitted or rolled back.
-   In stored procedures, GUC parameters that take effect only after a restart cannot be submitted or rolled back.

## Examples<a name="section819214534171"></a>

-   Example 1: COMMIT/ROLLBACK can be used in PLSQL stored procedures.

    ```
    CREATE TABLE EXAMPLE1(COL1 INT);
    
    CREATE OR REPLACE PROCEDURE TRANSACTION_EXAMPLE()
    AS
    BEGIN
        FOR i IN 0..20 LOOP
            INSERT INTO EXAMPLE1(COL1) VALUES (i);
            IF i % 2 = 0 THEN
                COMMIT;
            ELSE
                ROLLBACK;
            END IF;
        END LOOP;
    END;
    /
    ```


-   Example 2:

    COMMIT/ROLLBACK can be used in stored procedures that contain EXCEPTION.

    COMMIT/ROLLBACK can be used in EXCEPTION statements of stored procedures.

    DDL statements after COMMIT/ROLLBACK can be submitted or rolled back.

    ```
    CREATE OR REPLACE PROCEDURE TEST_COMMIT_INSERT_EXCEPTION_ROLLBACK()
    AS
    BEGIN
    	DROP TABLE IF EXISTS TEST_COMMIT; 
    	CREATE TABLE TEST_COMMIT(A INT, B INT);
    	INSERT INTO TEST_COMMIT SELECT 1, 1;
    	COMMIT;
            CREATE TABLE TEST_ROLLBACK(A INT, B INT);
    	RAISE EXCEPTION 'RAISE EXCEPTION AFTER COMMIT';
    EXCEPTION
        WHEN OTHERS THEN
    	INSERT INTO TEST_COMMIT SELECT 2, 2;
    	ROLLBACK;
    END;
    /
    
    ```


-   Example 3: A stored procedure that contains COMMIT/ROLLBACK \(which means the stored procedure is controled by /BEGIN/START/END\) can be called in a transaction block.

    ```
    BEGIN;
        CALL TEST_COMMIT_INSERT_EXCEPTION_ROLLBACK();
    END;
    ```


-   Example 4: COMMIT/ROLLBACK, including IF, FOR, CURSOR LOOP, and WHILE, can be called in most PLSQL contexts and statements.

    ```
    CREATE OR REPLACE PROCEDURE TEST_COMMIT2()
    IS
    BEGIN
        DROP TABLE IF EXISTS TEST_COMMIT;
        CREATE TABLE TEST_COMMIT(A INT);
        FOR I IN REVERSE 3..0 LOOP
    	INSERT INTO TEST_COMMIT SELECT I;
    	COMMIT;
        END LOOP;
        FOR I IN REVERSE 2..4 LOOP
    	UPDATE TEST_COMMIT SET A=I;
    	COMMIT;
        END LOOP;
    EXCEPTION
    WHEN OTHERS THEN   
    	INSERT INTO TEST_COMMIT SELECT 4;
        COMMIT;
    END;
    /
    ```


-   Example 5: GUC parameters in stored procedures can be submitted or rolled back.

    ```
    SHOW explain_perf_mode;
    SHOW enable_force_vector_engine;
    
    CREATE OR REPLACE PROCEDURE GUC_ROLLBACK()
    AS
    BEGIN
        SET enable_force_vector_engine = on;
        COMMIT;
        SET explain_perf_mode TO pretty;
        ROLLBACK;
    END;
    /
    
    call GUC_ROLLBACK();
    SHOW explain_perf_mode;
    SHOW enable_force_vector_engine;
    SET enable_force_vector_engine = off;
    ```

-   Example 6: COMMIT/ROLLBACK and stored procedures that contain COMMIT/ROLLBACK cannot be called in functions.

    ```
    CREATE OR REPLACE FUNCTION FUNCTION_EXAMPLE1() RETURN INT
    AS
    EXP INT;
    BEGIN
        FOR i IN 0..20 LOOP
            INSERT INTO EXAMPLE1(col1) VALUES (i);
            IF i % 2 = 0 THEN
                COMMIT;
            ELSE
                ROLLBACK;
            END IF;
        END LOOP;
        SELECT COUNT(*) FROM EXAMPLE1 INTO EXP;
        RETURN EXP;
    END;
    /
    ```

-   Example 7: Stored procedures that contain COMMIT/ROLLBACK cannot be called in functions.

    ```
    CREATE OR REPLACE FUNCTION FUNCTION_EXAMPLE2() RETURN INT
    AS
    EXP INT;
    BEGIN
        -- transaction_example is a stored procedure and contains the COMMIT/ROLLBACK statement.
        CALL transaction_example();
        SELECT COUNT(*) FROM EXAMPLE1 INTO EXP;
        RETURN EXP;
    END;
    /
    ```

-   Example 8: A TRIGGER stored procedure cannot contain COMMIT/ROLLBACK or called another stored procedure that contains COMMIT/ROLLBACK.

    ```
    CREATE OR REPLACE FUNCTION FUNCTION_TRI_EXAMPLE2() RETURN TRIGGER
    AS
    EXP INT;
    BEGIN
        FOR i IN 0..20 LOOP
            INSERT INTO EXAMPLE1(col1) VALUES (i);
            IF i % 2 = 0 THEN
                COMMIT;
            ELSE
                ROLLBACK;
            END IF;
        END LOOP;
        SELECT COUNT(*) FROM EXAMPLE1 INTO EXP;
    END;
    /
    
    CREATE TRIGGER TRIGGER_EXAMPLE AFTER DELETE ON EXAMPLE1 
    FOR EACH ROW EXECUTE PROCEDURE FUNCTION_TRI_EXAMPLE2();
    
    DELETE FROM EXAMPLE1;
    ```

-   Example 9: Stored procedures that contain IMMUTABLE or SHIPPABLE cannot call COMMIT/ROLLBACK or another stored procedure that contain COMMIT/ROLLBACK.

    ```
    CREATE OR REPLACE PROCEDURE TRANSACTION_EXAMPLE1()
    IMMUTABLE
    AS
    BEGIN
        FOR i IN 0..20 LOOP
            INSERT INTO EXAMPLE1 (col1) VALUES (i);
            IF i % 2 = 0 THEN
                COMMIT;
            ELSE
                ROLLBACK;
            END IF;
        END LOOP;
    END;
    /
    ```

-   Example 10: Variables declared or imported in stored procedures cannot be submitted or rolled back.

    ```
    CREATE OR REPLACE PROCEDURE TRANSACTION_EXAMPLE2(EXP_OUT OUT INT)
    AS
    EXP INT;
    BEGIN
        EXP_OUT := 0;
        COMMIT;
        DBE_OUTPUT.PRINT_LINE('EXP IS:'||EXP);
        EXP_OUT := 1;
        ROLLBACK;
        DBE_OUTPUT.PRINT_LINE('EXP IS:'||EXP);
    END;
    /
    ```

-   Example 11: Calling in SQL statements \(other than Select Procedure\) is not supported.

    ```
    CREATE OR REPLACE PROCEDURE TRANSACTION_EXAMPLE3()
    AS
    BEGIN
        FOR i IN 0..20 LOOP
            INSERT INTO EXAMPLE1 (col1) VALUES (i);
            IF i % 2 = 0 THEN
                EXECUTE IMMEDIATE 'COMMIT';
            ELSE
                EXECUTE IMMEDIATE 'ROLLBACK';
            END IF;
        END LOOP;
    END;
    /
    ```

-   Example 12: COMMIT/ROLLBACK cannot be called in a stored procedure whose header contains GUC parameters.

    ```
    CREATE OR REPLACE PROCEDURE TRANSACTION_EXAMPLE4()
    SET ARRAY_NULLS TO "ON"
    AS
    BEGIN
        FOR i IN 0..20 LOOP
            INSERT INTO EXAMPLE1 (col1) VALUES (i);
            IF i % 2 = 0 THEN
                COMMIT;
            ELSE
                ROLLBACK;
            END IF;
        END LOOP;
    END;
    /
    ```

-   Example 13: A stored procedure object whose cursor is open cannot contain COMMIT/ROLLBACK.

    ```
    CREATE OR REPLACE PROCEDURE TRANSACTION_EXAMPLE5(INTIN IN INT, INTOUT OUT INT)
    AS
    BEGIN
    INTOUT := INTIN + 1;
    COMMIT;
    END;
    /
    
    CREATE OR REPLACE PROCEDURE TRANSACTION_EXAMPLE6()
    AS
    CURSOR CURSOR1(EXPIN INT)
    IS SELECT TRANSACTION_EXAMPLE5(EXPIN);
    INTEXP INT;
    BEGIN
        FOR i IN 0..20 LOOP
            OPEN CURSOR1(i);
            FETCH CURSOR1 INTO INTEXP;
            INSERT INTO EXAMPLE1(COL1) VALUES (INTEXP);
            IF i % 2 = 0 THEN
                COMMIT;
            ELSE
                ROLLBACK;
            END IF;
            CLOSE CURSOR1;
        END LOOP;
    END; 
    /
    ```

-   Example 14: COMMIT/ROLLBACK cannot be called in expressions or CURSOR/EXECUTE statements.

    ```
    CREATE OR REPLACE PROCEDURE exec_func1()
    AS
    BEGIN
        CREATE TABLE TEST_exec(A INT);
    COMMIT;
    END;
    /
    CREATE OR REPLACE PROCEDURE exec_func2()
    AS
    BEGIN
    EXECUTE exec_func1();
    COMMIT;
    END;
    /
    ```

-   Example 15: Return values and expression calculation of stored procedures are not supported.

    ```
    CREATE OR REPLACE PROCEDURE exec_func3(RET_NUM OUT INT)
    AS
    BEGIN
        RET_NUM := 1+1;
    COMMIT;
    END;
    /
    CREATE OR REPLACE PROCEDURE exec_func4(ADD_NUM IN INT)
    AS
    SUM_NUM INT;
    BEGIN
    SUM_NUM := ADD_NUM + exec_func3();
    COMMIT;
    END;
    /
    
    ```


