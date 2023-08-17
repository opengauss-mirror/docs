# MySQL Syntax Compatibility Assessment Tool<a name="EN-US_TOPIC_0000001245957397"></a>

This tool can use the existing openGauss node to assess the compatibility of data SQL text in openGauss. The restrictions include but are not limited to the following:
- Only SQL text files are supported, and SQL statements are separated by semicolons (;).

- If compatible plug-ins such as Dolphin and Whale are not used, the error information about incompatible statements may be inaccurate. If the corresponding plug-in is used, comply with the plug-in usage restrictions.

- The comment tag (#) is not supported currently. Replace the comment tag (#) in the text with `--` or delete it.

- Stored procedures and function statements support only the validity check of the creation body and the syntax compatibility check of the function body.

- Accuracy of assessment results:
   - Fully compatible: openGauss fully supports this syntax. The compatibility result may depend on the pre-processing result of the input SQL statement. Therefore, the statements may not be fully compatible when being executed in openGauss.

   - Syntax compatible: openGauss supports this syntax. However, in actual use, problems may occur, for example, the column type is not supported or the function does not exist.

   - Statement incompatible: openGauss does not support this syntax.

   - Assessment not supported: Statements are not considered. Statement assessment (for example, cross-database impact statements such as CREATE DATABASE) will be supported in the future.

   - Ignored statements: such as comments.
   
<font color='red'>For an A-compatible database, you are advised to perform the following settings in advance when exporting SQL statements: </font>
```sql
EXECUTE DBMS_METADATA.SET_TRANSFORM_PARAM(DBMS_METADATA.SESSION_TRANSFORM,'SEGMENT_ATTRIBUTES',false);
EXECUTE DBMS_METADATA.SET_TRANSFORM_PARAM(DBMS_METADATA.SESSION_TRANSFORM,'SQLTERMINATOR',true);
EXECUTE DBMS_METADATA.SET_TRANSFORM_PARAM(DBMS_METADATA.SESSION_TRANSFORM,'STORAGE',false);
EXECUTE DBMS_METADATA.SET_TRANSFORM_PARAM(DBMS_METADATA.SESSION_TRANSFORM,'TABLESPACE',false);
```

### Obtaining Code

- Path of the openGauss source code:

> https://gitee.com/opengauss/openGauss-server

- Path of the openGauss plug-in repository:

> https://gitee.com/opengauss/Plugin

### Compiling Plug-ins

- Mandatory Plug-ins

| Mandatory Plug-in          | Description                            |
| ------------------ | -------------------------------- |
| contrib/assessment | Assessment plug-in, including the plug-in SO and executable files|

- The following plug-in can be used to improve the overall compatibility when the database is running:

| Optional Plug-in (Compatibility Plug-in)| Description           |
| -------------------------------- | --------------- |
| contrib/dolphin             | B-compatible database plug-in|

1. Download the openGauss source code and compile the openGauss source code according to the READMD.md file.
2. Copy the preceding plug-ins to the `contrib` directory in the openGauss source code path. Run the `cd` command to go to the corresponding directory and run the `make install -sj` command.
3. Copy the files required by the plug-in to the corresponding binary path. Generally, the files are `extesion.so`, `extension.sql`, and `extension.control`. The `assessment` plug-in contains the executable file `gs_assessment`. In this example, the following files are involved: <font color='red'>If the binary in step 1 is used, skip this step.</font>

**Dependency files of assessment**

```
Binary path
├── bin
│   └── ***gs_assessment***
├── lib
│   └── postgresql
│       └── ***assessment.so***
└── share
    └── postgresql
        └── extension
            ├── ***assessment--1.0.sql***
            └── ***assessment.control***
```
**Dependency files of Dolphin**

```
Binary path
├── lib
│   └── postgresql
│       └── ***dolphin.so***
└── share
    └── postgresql
        └── extension
            ├── ***dolphin--1.0.sql***
            └── ***dolphin.control***
```

### Running

1. Ensure that a database is running and can be connected using the gsql command.

2. Run the `gs_assessment [args]` command, where **args** contains the following parameters:

|          | Parameter| Description                                    | Usage                                  |
| -------- | ---- |  ---------------------------------------- | -------------------------------------- |
| Connection parameters| p    |  (Mandatory) Port                            | `-p 5432`                              |
|          | d    | (Optional) Database                          | `-d evaluation` |
|          | U    |(Optional) User name. If local connection is supported, leave this parameter blank.| `-U user`                |
|          | W | (Optional) Password. If local connection is supported, leave this parameter blank.| `-W ******` |
| Compatibility assessment| c | Specifies the compatibility type (A\B\C\PG). If the **d** parameter is specified, this parameter cannot be set.| `-c B` |
| File parameters| f | (Mandatory) Assesses the SQL file.| `-f intput.sql` |
|  | o | (Mandatory) Output file. Generally, an HTML file is entered.| `-o result.html` |

### Examples

#### Case 1:

Use gs\_initdb to initialize the database and start it. Assume that the startup port is 5432. In this case, you can run the `gsql -dpostgres -p5432` command to connect to the database. Assume that the input file is `test.sql`, the output report path is `result.html`, and the source database to be assessed is B. The command used for evaluation is as follows:

```shell
gs_assessment -p5432 -cB -ftest.sql -oresult.html
```

The following information is displayed:

```shell
gs_assessment: create database "assessment_197561" automatically.
gs_assessment: Create plugin[dolphin] automatically.
gs_assessment: Create extension[assessment] automatically.
gs_assessment: parse[100.00%]:35/35
gs_assessment: Create database assessment_197561 automatically, clear it manually!
```

#### Case 2:

Assume that a database node already exists remotely. You can connect to the database through **gsql -dpostgres -p5432 -h127.0.0.2 -Utest -W*** on the compatibility assessment node. Assume that the input file is **test.sql**, the output report path is **result.html**, and the source database to be assessed is B. The command used for assessment is as follows:

```shell
gs_assessment -p5432 -cB -h127.0.0.2 -Utest -W***** -ftest.sql -oresult.html
```

#### case 3:

Assume that a remote database node exists and the **evaluation** database has been created for compatibility assessment. On the compatibility assessment node, you can connect to the database through **gsql -devalution -p5432 -h127.0.0.2 -Utest -W***. Assume that the input file is **test.sql** and the output report path is **result.html**. The assessment command is as follows:

```shell
gs_assessment -p5432 -devaluation -h127.0.0.2 -Utest -W***** -ftest.sql -oresult.html
```

That is, replace **-cB** in case 2 with **-devaluation** to specify the database.

### Results

The assessment tool generates an assessment report in HTML format. The information includes the statement, compatibility type, and failure cause. The compatibility types include syntax compatible, fully compatible, syntax incompatible, and assessment not supported. The details are as follows:

- Fully compatible: openGauss fully supports this syntax. The execution result depends on the existing tables, functions, and stored procedures in the database.

- Syntax compatible: openGauss supports this syntax. However, in actual use, problems may occur, for example, the column type is not supported or the function does not exist.

- Statement incompatible: openGauss does not support this syntax.
 
- Assessment not supported: Statements are not considered. Statement assessment (for example, cross-database impact statements such as CREATE DATABASE) will be supported in the future.

### Principle

1. A database node is running properly and can be initialized using gs\_initdb.
2. The connection parameters are configured. The connection parameters are the same as those of the gsql connection mode of openGauss.
3. If the **-c** compatibility type is specified, the tool uses the preceding connection parameters to connect to the database. You need to manually create the corresponding compatibility assessment database, and then run the CREATE EXTENSION command to create necessary plug-ins (such as `assessment` and `dolphin`).
4. If **-d database** is specified, the tool creates a plug-in in the corresponding database.
5. The assessment is performed in the corresponding assessment database. The assessment types include syntax tree compatibility assessment and statement compatibility assessment.
