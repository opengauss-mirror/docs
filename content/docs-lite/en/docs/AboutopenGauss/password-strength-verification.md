# Password Strength Verification<a name="EN-US_TOPIC_0000001152075189"></a>

## Availability<a name="section17746747"></a>

This feature is available since openGauss 1.1.0.

## Introduction<a name="section25503003"></a>

The password strength is verified when users access the database.

## Benefits<a name="section28200442"></a>

Users cannot set passwords with low strength to enhance customer data security.

## Description<a name="section52477394"></a>

You need to specify a password when initializing a database, creating a user, or modifying a user. The password must meet the strength requirements. Otherwise, the system prompts you to enter the password again. Password complexity requirements:

-   Minimum number of uppercase letters \(A-Z\) \(**password\_min\_uppercase**\)
-   Minimum number of lowercase letters \(a-z\) \(**password\_min\_lowercase**\)
-   Minimum number of digits \(0-9\) \(**password\_min\_digital**\)
-   Minimum number of special characters \(**password\_min\_special**\)
-   Minimum password length \(**password\_min\_length**\)
-   Maximum password length \(**password\_max\_length**\)
-   A password must contain at least three types of the characters \(uppercase letters, lowercase letters, digits, and special characters\).
-   A password is case insensitive and cannot be the username or the username spelled backwards.
-   A new password cannot be the current password and the current password spelled backwards.
-   It must be a strong password.

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >Weak passwords are weak passwords that are easy to crack. The definition of weak passwords may vary with users or user groups. Users can define their own weak passwords.


If parameter  **password\_policy**  is set to  **1**, the default password complexity rule is used to check passwords.

Passwords in the weak password dictionary are stored in the  **gs\_global\_config**  system catalog \(the record whose name field is  **weak\_password**  is the stored weak password\). When a user is created or modified, the password set by the user is compared with the password stored in the weak password dictionary. If the password is matched, a message is displayed, indicating that the password is weak and the password fails to be set.

The weak password dictionary is empty by default. You can add or delete weak passwords using the following syntax:

```
CREATE WEAK PASSWORD DICTIONARY WITH VALUES ('password1'), ('password2');
DROP WEAK PASSWORD DICTIONARY;
```

In the preceding statement,  **password1**  and  **password2**  are weak passwords prepared by users. After the statement is executed successfully, the passwords are saved to the weak password system catalog.

When a user attempts to run the CREATE WEAK PASSWORD DICTIONARY statement to insert a weak password that already exists in the table, only one weak password is retained in the table.

The DROP WEAK PASSWORD DICTIONARY statement clears weak passwords in the entire system catalog.

The gs\_global\_config system catalog does not have a unique index. You are not advised to use the COPY FROM statement to copy the same data to the gs\_global\_config system catalog.

To audit weak password operations, set the third bit of the value of the  **audit\_system\_object**  parameter to  **1**.

## Enhancements<a name="section181698654211"></a>

The weak password dictionary function is supported.

## Constraints<a name="section06531946143616"></a>

-   Initial users, system administrators, and security administrators can view, add, and delete weak password dictionaries.
-   Common users can view but cannot add or delete weak password dictionaries.

## Dependencies<a name="section22810484"></a>

None.

