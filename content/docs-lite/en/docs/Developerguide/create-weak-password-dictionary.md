# CREATE WEAK PASSWORD DICTIONARY<a name="EN-US_TOPIC_0000001197229715"></a>

## Function<a name="en-us_topic_0283137390_en-us_topic_0237122128_en-us_topic_0059778820_sf3fcf0507ea74a0ba4c4b4cbf0a0a8ba"></a>

**CREATE WEAK PASSWORD DICTIONARY**  inserts one or more weak passwords into the  **gs\_global\_config**  table.

## Precautions<a name="en-us_topic_0283137390_en-us_topic_0237122128_en-us_topic_0059778820_s8f58e1ff1b9849b2845f196df6352f13"></a>

-   Only the initial user, system administrator, and security administrator have the permission to execute this syntax.
-   Passwords in the weak password dictionary are stored in the  **gs\_global\_config**  system catalog.
-   The weak password dictionary is empty by default. You can use this syntax to add one or more weak passwords.
-   When a user attempts to execute this syntax to insert a weak password that already exists in the  **gs\_global\_config**  table, only one weak password is retained in the table.

## Syntax<a name="en-us_topic_0283137390_en-us_topic_0237122128_en-us_topic_0059778820_s77068dc6043742e086ef7bfea9075223"></a>

```
CREATE WEAK PASSWORD DICTIONARY        
       [WITH VALUES] ( {'weak_password'} [, ...] );
```

## Parameter Description<a name="en-us_topic_0283137390_en-us_topic_0237122128_en-us_topic_0059778820_safdd83ccfa754a3188de60962295adad"></a>

weak\_password

Specifies a weak password.

Value range: a character string

## Examples<a name="en-us_topic_0283137390_en-us_topic_0237122128_en-us_topic_0059778820_s5587dfafbfee44509237e4eb718ccc55"></a>

```
-- Insert a single weak password into the gs_global_config system catalog.
openGauss=# CREATE WEAK PASSWORD DICTIONARY WITH VALUES ('password1');  

-- Insert multiple weak passwords into the gs_global_config system catalog.
openGauss=# CREATE WEAK PASSWORD DICTIONARY WITH VALUES ('password2'),('password3');  

-- Clear all weak passwords in the gs_global_config system catalog.
openGauss=# DROP WEAK PASSWORD DICTIONARY;  

-- View existing weak passwords.
openGauss=# SELECT * FROM gs_global_config WHERE NAME LIKE 'weak_password';
```

## Helpful Links<a name="en-us_topic_0283137390_en-us_topic_0237122128_en-us_topic_0059778820_sb9bc0f8b2b464231a9dc551fa79f0485"></a>

[DROP WEAK PASSWORD DICTIONARY](drop-weak-password-dictionary.md)

