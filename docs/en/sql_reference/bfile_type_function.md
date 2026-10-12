# BFILE Type Functions

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:18:43.294Z -->

- bfilename(location text, filename text)

    Description: Generates a bfile type object based on a directory object name and a file name. The value of location must be a DIRECTORY object name, and the value of filename is the file name.

    Parameter type: text

    Return type: bfile

    Example:

    ```
    CREATE or REPLACE DIRECTORY "sdf sfa" AS '/tmp';
    select bfilename('sdf sfa', 'as df .txt');
                 bfilename              
    ------------------------------------
     bfilename('sdf sfa', 'as df .txt')
    (1 row)

    ```

- bfilein\(cstring\)

    Description: Parses the input string and generates a bfile type object. The input string must follow a fixed format: bfilename(str1, str2).

    Parameter type: cstring

    Return type: bfile

    Example:

    ```
    --Incorrect parameter format.
    select bfilein('bfilenamell(sdf,asdf)');
    ERROR:  invalid input syntax for bfile: "bfilenamell(sdf,asdf)"
    CONTEXT:  referenced column: bfilein

    --Correct parameter format.
    CREATE or REPLACE DIRECTORY "bfile_test_dir" AS '/tmp';
    select bfilein('bfilename(bfile_test_dir,regress_bfile.txt)');
                         bfilein                      
    --------------------------------------------------
     bfilename('bfile_test_dir', 'regress_bfile.txt')
    (1 row)

    ```

- bfileout(bfile)

    Description: Converts the input bfile type object into a cstring type string.

    parameter type: bfile

    return type: cstring

    Example:

    ```
    CREATE or REPLACE DIRECTORY "bfile_test_dir" AS '/tmp';
    select bfileout(bfilename('bfile_test_dir','regress_bfile.txt'));
                         bfileout                     
    --------------------------------------------------
     bfilename('bfile_test_dir', 'regress_bfile.txt')
    (1 row)

    ```

- bfilerecv\(internal\)

    Description: Converts an internal type value into a bfile type object. Since the internal type is an internal type and cannot be passed in from outside, the bfilerecv function cannot be called externally.

    Parameter type: internal

    Return type: bfile

    Example:

    ```
    select bfilerecv(' ');
    ERROR:  cannot accept a value of type internal
    LINE 1: select bfilerecv(' ');
                             ^

    ```

- bfilesend\(bfile\)

    Description: Converts the input bfile type object into an internal type object.

    Parameter type: bfile

    Return type: internal

    Example:

    ```
    CREATE or REPLACE DIRECTORY "bfile_test_dir" AS '/tmp';
    select bfilesend(bfilename('bfile_test_dir','regress_bfile.txt'));
                                      bfilesend                                       
    --------------------------------------------------------------------------------------
     \x0000000f000000126266696c655f746573745f64697200726567726573735f6266696c652e74787400
    (1 row)

    ```
    