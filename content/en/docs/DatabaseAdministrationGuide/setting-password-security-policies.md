

# Setting Password Security Policy

## Procedure<a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_s3a1d8e5070044faa84acbb053ba19602"></a>

User passwords are stored in the system catalog **pg\_authid**. To prevent password leakage, openGauss encrypts user passwords before storing them. The encryption algorithm is determined by the configuration parameter **password\_encryption\_type**.

-   If parameter **password\_encryption\_type** is set to **0**, passwords are encrypted using MD5. The MD5 encryption algorithm is not recommended because it has lower security and poses security risks.
-   If parameter **password\_encryption\_type** is set to **1**, passwords are encrypted using SHA-256 and MD5. The MD5 encryption algorithm is not recommended because it has lower security and poses security risks.
-   If parameter **password\_encryption\_type** is set to **2**, passwords are encrypted using SHA-256. This is the default configuration.
-   If parameter **password\_encryption\_type** is set to **3**, passwords are encrypted using SM3.

1. Log in as the OS user **omm** to the primary node of the database.

2.  Run the following command to connect to the database:

    ```
    gsql -d postgres -p 8000
    ```

    **postgres** is the name of the database to be connected, and **8000** is the port number of the database primary node.

    If information similar to the following is displayed, the connection succeeds:

    ```
    gsql ((openGauss x.x.x build 50dc16a6) compiled at 2020-11-29 05:49:21 commit 1071 last mr 1373)
    Non-SSL connection (SSL connection is recommended when requiring high-security)
    Type "help" for help.
    
    openGauss=# 
    ```

3.  View the configured encryption algorithm.

    ```
    openGauss=# SHOW password_encryption_type;
     password_encryption_type
    --------------------------
     2
    (1 row)
    ```

    If the command output is **0** or **1**, run the **\\q** command to exit the database.

4.  Set **gs\_guc reload -Z coordinator -D** using a secure encryption algorithm:

    ```
    gs_guc reload -N all -I all -c "password_encryption_type=2"
    ```

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >When running **CREATE USER/ROLE** to create a database user, do not specify the properties of **UNENCRYPTED** to prevent password leakage. By doing so, only the password of the newly created user can be encrypted and stored.

5. Configure password security parameters.

   - Password complexity

     You must specify your password when initializing a database, creating a user, or modifying a user. The password must meet the complexity check rules (see [password\_policy](../DatabaseReference/security-and-authentication_postgresql-conf.md#en-us_topic_0237124696_en-us_topic_0059778664_s3db9d0a21a4d48b98ea4afc1f2e44626)). Otherwise, you are prompted to enter the password again. 

     -   If parameter **password\_policy** is set to **1**, the default password complexity rule is used to check passwords.
     -   If parameter **password\_policy** is set to **0**, the password complexity rule is not used. However, the password cannot be empty and must contain only valid characters, including uppercase letters \(A–Z\), lowercase letters \(a–z\), digits \(0–9\), and special characters \(see [Table 1](#en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_t850059f5d3e64bc78857b77fc8ffbba8)\). You are not advised to set this parameter to **0** because this operation poses security risks. Even if the setting is required, you must set **password\_policy** to **0** on all openGauss nodes.

     Configure the **password\_policy** parameter.

     1. Run the following command to connect to the database:

        ```
        gsql -d postgres -p 8000
        ```

        **postgres** is the name of the database to be connected, and **8000** is the port number of the database primary node.

        If information similar to the following is displayed, the connection succeeds:

        ```
        gsql ((openGauss x.x.x build 50dc16a6) compiled at 2020-11-29 05:49:21 commit 1071 last mr 1373)
        Non-SSL connection (SSL connection is recommended when requiring high-security)
        Type "help" for help.
        
        openGauss=# 
        ```

     2. View the current value.

        ```
        openGauss=# SHOW password_policy;
         password_policy
        ---------------------
         1
        (1 row)
        ```

        If the command output is not **1**, run the **\\q** command to exit the database.

     3. Run the following command to set the parameter to its default value **1**:

        ```
        gs_guc reload -N all -I all -c "password_policy=1"
        ```

     > ![](public_sys-resources/icon-note.gif) **NOTE:** 
     >
     > The password complexity requirements are as follows:
     >
     > - Minimum number of uppercase letters \(A-Z\) \(**password\_min\_uppercase**\)
     > - Minimum number of lowercase letters \(a-z\) \(**password\_min\_lowercase**\)
     > - Minimum number of digits \(0-9\) \(**password\_min\_digital**\)
     > - Minimum number of special characters \(**password\_min\_special**\) \([Table 1](#en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_t850059f5d3e64bc78857b77fc8ffbba8) lists special characters.\)
     > - Minimum password length \(**password\_min\_length**\)
     > - Maximum password length \(**password\_max\_length**\)
     > - A password must contain at least three types of the characters \(uppercase letters, lowercase letters, digits, and special characters\).
     > - A password is case insensitive and cannot be the username or the username spelled backwards.
     > - A new password cannot be the current password and the current password spelled backwards.
     > - A password cannot be a weak password.
     > - Weak passwords are easy to crack. The definition of weak passwords may vary with users or user groups. Users can define their own weak passwords.
     > - Passwords in the weak password dictionary are stored in the **gs\_global\_config** system catalog. When a user is created or modified, the password set by the user is compared with that stored in the weak password dictionary. If the password is matched, a message is displayed, indicating that the password is weak and password setting fails.
     > - The weak password dictionary is empty by default. You can add or delete weak passwords using the following syntax:
     >
     > ```
     > openGauss=# CREATE WEAK PASSWORD DICTIONARY WITH VALUES ('password1'), ('password2');
     > openGauss=# DROP WEAK PASSWORD DICTIONARY;
     > ```

   - Password reuse

     An old password can be reused only when it meets the requirements on reuse days \([password\_reuse\_time](security-and-authentication-(postgresql-conf).md#en-us_topic_0237124696_en-us_topic_0059778664_s36625909efc14a42af3e142435ae9794)\) and reuse times \([password\_reuse\_max](security-and-authentication-(postgresql-conf).md#en-us_topic_0237124696_en-us_topic_0059778664_scad28ae18dfc4557b10f51bf147a9e53)\). [Table 2](#en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_t2013c9d251bc4cf5be274ef279c4faee) lists the parameter configurations.

     >![](public_sys-resources/icon-note.gif) **NOTE:** 
     >The default values of the **password_reuse_time** and **password_reuse_max** parameters are **60** and **0**, respectively. Large parameter values ensure high security, but they may also cause operation inconvenience. The default values meet security standards. You can keep them or change the values as needed to improve the security level.

     Configure the **password\_reuse\_time** parameter.

     1. Run the following command to connect to the database:

        ```
        gsql -d postgres -p 8000
        ```

        **postgres** is the name of the database to be connected, and **8000** is the port number of the database primary node.

        If information similar to the following is displayed, the connection succeeds:

        ```
        gsql ((openGauss x.x.x build 50dc16a6) compiled at 2020-11-29 05:49:21 commit 1071 last mr 1373)
        Non-SSL connection (SSL connection is recommended when requiring high-security)
        Type "help" for help.
        
        openGauss=# 
        ```

     2. View the current value.

        ```
        openGauss=# SHOW password_reuse_time;
         password_reuse_time
        ---------------------
         60
        (1 row)
        ```

        If the command output is not **60**, run the **\\q** command to exit the database.

     3. Run the following command to set the parameter to its default value **60**:

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >You are not advised to set the parameter to **0**. This value is valid only when **password\_reuse\_time** for all openGauss nodes is set to **0**.

        ```
        gs_guc reload -N all -I all -c "password_reuse_time=60"
        ```

     Configure the **password\_reuse\_max** parameter.

     1. Run the following command to connect to the database:

        ```
        gsql -d postgres -p 8000
        ```

        **postgres** is the name of the database to be connected, and **8000** is the port number of the database primary node.

        If information similar to the following is displayed, the connection succeeds:

        ```
        gsql ((openGauss x.x.x build 50dc16a6) compiled at 2020-11-29 05:49:21 commit 1071 last mr 1373)
        Non-SSL connection (SSL connection is recommended when requiring high-security)
        Type "help" for help.
            
        openGauss=# 
        ```

     2. View the current value.

        ```
        openGauss=# SHOW password_reuse_max;
        password_reuse_max
        --------------------
        0
        (1 row)
        ```

        If the command output is not **0**, run the **\\q** command to exit the database.

     3. Run the following command to set the parameter to its default value **0**:

        ```
        gs_guc reload -N all -I all -c "password_reuse_max = 0"
        ```

   - Password validity period

     A validity period ([password\_effect\_time](security-and-authentication-(postgresql-conf).md#en-us_topic_0237124696_en-us_topic_0059778664_sfcc6124115734728917a548a8bd8f0d4)) is set for each database user password. If the password is about to expire ([password\_notify\_time](security-and-authentication-(postgresql-conf).md#en-us_topic_0237124696_en-us_topic_0059778664_s1beab889ab8d49848ef28bf60c10d8f7)), the system displays a message to remind the user to change it upon login.

     >![](public_sys-resources/icon-note.gif) **NOTE:** 
     >Considering the usage and service continuity of a database, the database still allows a user to log in after the password expires. A password change notification is displayed every time the user logs in to the database until the password is changed.

     Configure the **password\_effect\_time** parameter.

     1. Run the following command to connect to the database:

        ```
        gsql -d postgres -p 8000
        ```

        **postgres** is the name of the database to be connected, and **8000** is the port number of the database primary node.

        If information similar to the following is displayed, the connection succeeds:

        ```
        gsql ((openGauss x.x.x build 50dc16a6) compiled at 2020-11-29 05:49:21 commit 1071 last mr 1373)
        Non-SSL connection (SSL connection is recommended when requiring high-security)
        Type "help" for help.
        
        openGauss=# 
        ```

     2. View the current value.

        ```
        openGauss=# SHOW password_effect_time;
         password_effect_time
        ----------------------
         90
        (1 row)
        ```

        If the command output is not **90**, run the **\\q** command to exit the database.

     3. Run the following command to set the parameter to **90** \(**0** is not recommended\):

        ```
        gs_guc reload -N all -I all -c "password_effect_time = 90"
        ```

     Configure the **password_notify_time** parameter.

     1. Run the following command to connect to the database:

        ```
        gsql -d postgres -p 8000
        ```

        **postgres** is the name of the database to be connected, and **8000** is the port number of the database primary node.

        If information similar to the following is displayed, the connection succeeds:

        ```
        gsql ((openGauss x.x.x build 50dc16a6) compiled at 2020-11-29 05:49:21 commit 1071 last mr 1373)
        Non-SSL connection (SSL connection is recommended when requiring high-security)
        Type "help" for help.
            
        openGauss=# 
        ```

     2. View the current value.

        ```
        openGauss=# SHOW password_notify_time;
        password_notify_time
        ----------------------
        7
        (1 row)
        ```

     3. If **7** is not displayed, run the following command to set the parameter to **7** \(**0** is not recommended\):

        ```
        gs_guc reload -N all -I all -c "password_notify_time = 7"
        ```

   - Password change

     - During database installation, an OS user with the same name as the initial user is created. The password of the OS user needs to be periodically changed for account security.

       To change the password of user **user1**, run the following command:

       ```
       passwd user1
       ```

       Change the password as prompted.

     - System administrators and common users need to periodically change their passwords to prevent the accounts from being stolen.

       For example, to change the password of user **user1**, connect to the database as the system administrator and run the following commands:

       ```
       openGauss=# ALTER USER user1 IDENTIFIED BY "1234@abc" REPLACE "5678@def";
       ALTER ROLE
       ```

       >![](public_sys-resources/icon-note.gif) **NOTE:** 
       >**1234@abc** and **5678@def** represent the new password and the original password of the user **user1**, respectively. If the new password does not have the required complexity, the change will not take effect.

     - Administrators can change their own and common users' passwords. If common users forget their passwords, they can ask administrators to change the passwords.

       To change the password of user **joe**, run the following command:

       ```
       openGauss=# ALTER USER joe IDENTIFIED BY "abc@1234";
       ALTER ROLE
       ```

       >![](public_sys-resources/icon-note.gif) **NOTE:** 
       >
       >-   System administrators are not allowed to change passwords for each other.
       >-   A system administrator can change the password of a common user without being required to provide the common user's old password.
       >-   A system administrator can change their own password but is required to provide the old password.

   - Password verification

     Password verification is required when you set the user or role in the current session. If the entered password is inconsistent with the stored password of the user, an error is reported.

     If user **joe** needs to be set, run the following command:

     ```
     openGauss=# SET ROLE joe PASSWORD "abc@1234";
     ERROR: Invalid username/password,set role denied.
     ```

   **Table 1** Special characters

   <a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_t850059f5d3e64bc78857b77fc8ffbba8"></a>

   <table><thead align="left"><tr id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_rdf02e4567e944c199e4e0bb8d8bd0c48"><th class="cellrowborder" valign="top" width="10.068993100689932%" id="mcps1.2.9.1.1"><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a27be12a867314ab7a377a8bfccd6180b"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a27be12a867314ab7a377a8bfccd6180b"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a27be12a867314ab7a377a8bfccd6180b"></a>No.</p>
   </th>
   <th class="cellrowborder" valign="top" width="10.898910108989101%" id="mcps1.2.9.1.2"><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ad29c87ca942d4632ba2fe4ccc44ea639"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ad29c87ca942d4632ba2fe4ccc44ea639"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ad29c87ca942d4632ba2fe4ccc44ea639"></a>Character</p>
   </th>
   <th class="cellrowborder" valign="top" width="12.90870912908709%" id="mcps1.2.9.1.3"><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aed05a71008d447f9a5b1b3bc6c761d9a"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aed05a71008d447f9a5b1b3bc6c761d9a"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aed05a71008d447f9a5b1b3bc6c761d9a"></a>No.</p>
   </th>
   <th class="cellrowborder" valign="top" width="12.088791120887912%" id="mcps1.2.9.1.4"><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a2ce1b3e3cbf74a87a5090e963855bf1d"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a2ce1b3e3cbf74a87a5090e963855bf1d"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a2ce1b3e3cbf74a87a5090e963855bf1d"></a>Character</p>
   </th>
   <th class="cellrowborder" valign="top" width="13.828617138286173%" id="mcps1.2.9.1.5"><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_af6f21cb45dff4f7c8e36caa1623a018e"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_af6f21cb45dff4f7c8e36caa1623a018e"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_af6f21cb45dff4f7c8e36caa1623a018e"></a>No.</p>
   </th>
   <th class="cellrowborder" valign="top" width="11.998800119988001%" id="mcps1.2.9.1.6"><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p591318294727"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p591318294727"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p591318294727"></a>Character</p>
   </th>
   <th class="cellrowborder" valign="top" width="15.108489151084893%" id="mcps1.2.9.1.7"><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p920573394727"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p920573394727"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p920573394727"></a>No.</p>
   </th>
   <th class="cellrowborder" valign="top" width="13.0986901309869%" id="mcps1.2.9.1.8"><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p746690094727"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p746690094727"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p746690094727"></a>Character</p>
   </th>
   </tr>
   </thead>
   <tbody><tr id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_r1ac1b9a609404eae8653c3054cd5fe65"><td class="cellrowborder" valign="top" width="10.068993100689932%" headers="mcps1.2.9.1.1 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p86542194727"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p86542194727"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p86542194727"></a>1</p>
   </td>
   <td class="cellrowborder" valign="top" width="10.898910108989101%" headers="mcps1.2.9.1.2 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p299024694727"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p299024694727"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p299024694727"></a>~</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.90870912908709%" headers="mcps1.2.9.1.3 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a649f7cc2f865457d8f8bb4cc3dd855dc"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a649f7cc2f865457d8f8bb4cc3dd855dc"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a649f7cc2f865457d8f8bb4cc3dd855dc"></a>9</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.088791120887912%" headers="mcps1.2.9.1.4 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a548048b2591d46f1b668fdc0db203fd0"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a548048b2591d46f1b668fdc0db203fd0"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a548048b2591d46f1b668fdc0db203fd0"></a>*</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.828617138286173%" headers="mcps1.2.9.1.5 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p143430794727"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p143430794727"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p143430794727"></a>17</p>
   </td>
   <td class="cellrowborder" valign="top" width="11.998800119988001%" headers="mcps1.2.9.1.6 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a5a69fcd039c949658ee44d8c0f57125e"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a5a69fcd039c949658ee44d8c0f57125e"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a5a69fcd039c949658ee44d8c0f57125e"></a>|</p>
   </td>
   <td class="cellrowborder" valign="top" width="15.108489151084893%" headers="mcps1.2.9.1.7 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a0463707378984f3faaa53087d653d48a"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a0463707378984f3faaa53087d653d48a"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a0463707378984f3faaa53087d653d48a"></a>25</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.0986901309869%" headers="mcps1.2.9.1.8 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a443e2a113faf461db960f1a24bb30f2b"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a443e2a113faf461db960f1a24bb30f2b"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a443e2a113faf461db960f1a24bb30f2b"></a>&lt;</p>
   </td>
   </tr>
   <tr id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_r182287f066e84b69b11c7f27932acec3"><td class="cellrowborder" valign="top" width="10.068993100689932%" headers="mcps1.2.9.1.1 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a7e2787c822b3424f924ab22cdb5d84c8"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a7e2787c822b3424f924ab22cdb5d84c8"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a7e2787c822b3424f924ab22cdb5d84c8"></a>2</p>
   </td>
   <td class="cellrowborder" valign="top" width="10.898910108989101%" headers="mcps1.2.9.1.2 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a7626f8433f9e4544aa2dca491f16e36e"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a7626f8433f9e4544aa2dca491f16e36e"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a7626f8433f9e4544aa2dca491f16e36e"></a>! The integral part of a positive number indicates the number of days and its decimal part can be converted into hours, minutes, and seconds.</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.90870912908709%" headers="mcps1.2.9.1.3 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a33170122b3264b39a37ef2537834d824"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a33170122b3264b39a37ef2537834d824"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a33170122b3264b39a37ef2537834d824"></a>10</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.088791120887912%" headers="mcps1.2.9.1.4 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a3fa5edead7344851a631d80ac9404600"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a3fa5edead7344851a631d80ac9404600"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a3fa5edead7344851a631d80ac9404600"></a>(</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.828617138286173%" headers="mcps1.2.9.1.5 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aa7d75bc83ea44346be1daf8006900108"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aa7d75bc83ea44346be1daf8006900108"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aa7d75bc83ea44346be1daf8006900108"></a>18</p>
   </td>
   <td class="cellrowborder" valign="top" width="11.998800119988001%" headers="mcps1.2.9.1.6 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a3325137ad9834d27818b15263ba0e944"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a3325137ad9834d27818b15263ba0e944"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a3325137ad9834d27818b15263ba0e944"></a>[</p>
   </td>
   <td class="cellrowborder" valign="top" width="15.108489151084893%" headers="mcps1.2.9.1.7 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a0e93dc728da5498b934a54c039b5eb47"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a0e93dc728da5498b934a54c039b5eb47"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a0e93dc728da5498b934a54c039b5eb47"></a>26</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.0986901309869%" headers="mcps1.2.9.1.8 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ab247867557aa40c6a35e76db48d25ee2"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ab247867557aa40c6a35e76db48d25ee2"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ab247867557aa40c6a35e76db48d25ee2"></a>.</p>
   </td>
   </tr>
   <tr id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_r8a00ebc835394364885ce164dc5202b6"><td class="cellrowborder" valign="top" width="10.068993100689932%" headers="mcps1.2.9.1.1 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a9d7dc924f8bb4e3f88185723d105d56e"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a9d7dc924f8bb4e3f88185723d105d56e"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a9d7dc924f8bb4e3f88185723d105d56e"></a>3</p>
   </td>
   <td class="cellrowborder" valign="top" width="10.898910108989101%" headers="mcps1.2.9.1.2 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a01d9d259984f409e94e0d810912049e7"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a01d9d259984f409e94e0d810912049e7"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a01d9d259984f409e94e0d810912049e7"></a>@</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.90870912908709%" headers="mcps1.2.9.1.3 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aeefa2177adaa4db5a84f792d109fa1fd"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aeefa2177adaa4db5a84f792d109fa1fd"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aeefa2177adaa4db5a84f792d109fa1fd"></a>11</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.088791120887912%" headers="mcps1.2.9.1.4 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a62a16e09c3ff4445a39eb957147fa4e5"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a62a16e09c3ff4445a39eb957147fa4e5"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a62a16e09c3ff4445a39eb957147fa4e5"></a>)</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.828617138286173%" headers="mcps1.2.9.1.5 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a7670e043b687459a8fd827f342c73236"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a7670e043b687459a8fd827f342c73236"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a7670e043b687459a8fd827f342c73236"></a>19</p>
   </td>
   <td class="cellrowborder" valign="top" width="11.998800119988001%" headers="mcps1.2.9.1.6 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p874207694727"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p874207694727"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p874207694727"></a>{</p>
   </td>
   <td class="cellrowborder" valign="top" width="15.108489151084893%" headers="mcps1.2.9.1.7 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ae484be272fa94f9eb339737761dba58b"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ae484be272fa94f9eb339737761dba58b"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ae484be272fa94f9eb339737761dba58b"></a>27</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.0986901309869%" headers="mcps1.2.9.1.8 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a08cb505556e04097a9fc8261e4a3a787"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a08cb505556e04097a9fc8261e4a3a787"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a08cb505556e04097a9fc8261e4a3a787"></a>&gt;</p>
   </td>
   </tr>
   <tr id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_r55de0dc81ec84e9192c1efbf452bc69d"><td class="cellrowborder" valign="top" width="10.068993100689932%" headers="mcps1.2.9.1.1 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a617df133d91a43c0ab8643baa5464d56"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a617df133d91a43c0ab8643baa5464d56"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a617df133d91a43c0ab8643baa5464d56"></a>4</p>
   </td>
   <td class="cellrowborder" valign="top" width="10.898910108989101%" headers="mcps1.2.9.1.2 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a751e688c083444718980ac541ef844fa"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a751e688c083444718980ac541ef844fa"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a751e688c083444718980ac541ef844fa"></a>#</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.90870912908709%" headers="mcps1.2.9.1.3 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a705418903c8544e7b1bd8381cf0cf470"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a705418903c8544e7b1bd8381cf0cf470"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a705418903c8544e7b1bd8381cf0cf470"></a>12</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.088791120887912%" headers="mcps1.2.9.1.4 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_afc01b5f1ce0f4e6eb15ca46f8896c6cd"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_afc01b5f1ce0f4e6eb15ca46f8896c6cd"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_afc01b5f1ce0f4e6eb15ca46f8896c6cd"></a>-</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.828617138286173%" headers="mcps1.2.9.1.5 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a79810c5a5aac446db9e726aad7fa4796"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a79810c5a5aac446db9e726aad7fa4796"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a79810c5a5aac446db9e726aad7fa4796"></a>20</p>
   </td>
   <td class="cellrowborder" valign="top" width="11.998800119988001%" headers="mcps1.2.9.1.6 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a93a730b9b7fc44aaac4d56a463f39458"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a93a730b9b7fc44aaac4d56a463f39458"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a93a730b9b7fc44aaac4d56a463f39458"></a>}</p>
   </td>
   <td class="cellrowborder" valign="top" width="15.108489151084893%" headers="mcps1.2.9.1.7 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a1c5a13a714a74e04b28c27af683c7763"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a1c5a13a714a74e04b28c27af683c7763"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a1c5a13a714a74e04b28c27af683c7763"></a>28</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.0986901309869%" headers="mcps1.2.9.1.8 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_af8816a75ac9c46e28d9c63721026e69e"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_af8816a75ac9c46e28d9c63721026e69e"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_af8816a75ac9c46e28d9c63721026e69e"></a>/</p>
   </td>
   </tr>
   <tr id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ra59e1c08c35d4e4db3db4bae49a81b99"><td class="cellrowborder" valign="top" width="10.068993100689932%" headers="mcps1.2.9.1.1 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a4506f057612149dab045b9be45ada398"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a4506f057612149dab045b9be45ada398"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a4506f057612149dab045b9be45ada398"></a>5</p>
   </td>
   <td class="cellrowborder" valign="top" width="10.898910108989101%" headers="mcps1.2.9.1.2 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ac4140cfbf4fd4b229f1c44c5d25f5d88"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ac4140cfbf4fd4b229f1c44c5d25f5d88"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ac4140cfbf4fd4b229f1c44c5d25f5d88"></a>$</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.90870912908709%" headers="mcps1.2.9.1.3 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_af2dde0482ec74d22bd132fd961888f90"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_af2dde0482ec74d22bd132fd961888f90"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_af2dde0482ec74d22bd132fd961888f90"></a>13</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.088791120887912%" headers="mcps1.2.9.1.4 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_abd842db8738c4bc0b77d86fa451b4597"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_abd842db8738c4bc0b77d86fa451b4597"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_abd842db8738c4bc0b77d86fa451b4597"></a>_</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.828617138286173%" headers="mcps1.2.9.1.5 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a17b3768de53c4a5688e354494703fa41"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a17b3768de53c4a5688e354494703fa41"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a17b3768de53c4a5688e354494703fa41"></a>21</p>
   </td>
   <td class="cellrowborder" valign="top" width="11.998800119988001%" headers="mcps1.2.9.1.6 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a1749435e8ac44e8d8143ca95e667e0ff"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a1749435e8ac44e8d8143ca95e667e0ff"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a1749435e8ac44e8d8143ca95e667e0ff"></a>]</p>
   </td>
   <td class="cellrowborder" valign="top" width="15.108489151084893%" headers="mcps1.2.9.1.7 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a1cb04948ae114f63b059df9cf364a201"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a1cb04948ae114f63b059df9cf364a201"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a1cb04948ae114f63b059df9cf364a201"></a>29</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.0986901309869%" headers="mcps1.2.9.1.8 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a21496f785fa2410aa1bd37313f6eac0d"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a21496f785fa2410aa1bd37313f6eac0d"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a21496f785fa2410aa1bd37313f6eac0d"></a>? The integral part of a positive number indicates the number of days and its decimal part can be converted into hours, minutes, and seconds.</p>
   </td>
   </tr>
   <tr id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_rf07ecf171b274834bb8e5233562d200f"><td class="cellrowborder" valign="top" width="10.068993100689932%" headers="mcps1.2.9.1.1 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p420416794727"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p420416794727"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p420416794727"></a>6</p>
   </td>
   <td class="cellrowborder" valign="top" width="10.898910108989101%" headers="mcps1.2.9.1.2 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p499321294727"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p499321294727"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p499321294727"></a>%</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.90870912908709%" headers="mcps1.2.9.1.3 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p179700594727"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p179700594727"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p179700594727"></a>14</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.088791120887912%" headers="mcps1.2.9.1.4 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a6d2a192f84c145bda6e50042fd3b3b9e"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a6d2a192f84c145bda6e50042fd3b3b9e"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a6d2a192f84c145bda6e50042fd3b3b9e"></a>=</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.828617138286173%" headers="mcps1.2.9.1.5 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a9a23862d117348949841d6ddf8b05559"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a9a23862d117348949841d6ddf8b05559"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a9a23862d117348949841d6ddf8b05559"></a>22</p>
   </td>
   <td class="cellrowborder" valign="top" width="11.998800119988001%" headers="mcps1.2.9.1.6 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ac936df9213654a22bdf9afc44f826c4f"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ac936df9213654a22bdf9afc44f826c4f"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ac936df9213654a22bdf9afc44f826c4f"></a>;</p>
   </td>
   <td class="cellrowborder" valign="top" width="15.108489151084893%" headers="mcps1.2.9.1.7 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a3066a2eaf0304c70a5b9cd495c61b9a4"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a3066a2eaf0304c70a5b9cd495c61b9a4"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a3066a2eaf0304c70a5b9cd495c61b9a4"></a>-</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.0986901309869%" headers="mcps1.2.9.1.8 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a9384812c3c394edebaeaf70eae878c36"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a9384812c3c394edebaeaf70eae878c36"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a9384812c3c394edebaeaf70eae878c36"></a>-</p>
   </td>
   </tr>
   <tr id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_rf96ac90693ab4fb5b4c43ec50a8ccde2"><td class="cellrowborder" valign="top" width="10.068993100689932%" headers="mcps1.2.9.1.1 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_abe0356a994e5424e9c6cea83637bda5e"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_abe0356a994e5424e9c6cea83637bda5e"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_abe0356a994e5424e9c6cea83637bda5e"></a>7</p>
   </td>
   <td class="cellrowborder" valign="top" width="10.898910108989101%" headers="mcps1.2.9.1.2 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a706cc964f0f645ad9f6581977f37a049"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a706cc964f0f645ad9f6581977f37a049"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a706cc964f0f645ad9f6581977f37a049"></a>^</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.90870912908709%" headers="mcps1.2.9.1.3 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a71649384253d45cd8013f073695fc473"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a71649384253d45cd8013f073695fc473"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a71649384253d45cd8013f073695fc473"></a>15</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.088791120887912%" headers="mcps1.2.9.1.4 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ac133b57136d749b29aacb4d3ba46fdb5"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ac133b57136d749b29aacb4d3ba46fdb5"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ac133b57136d749b29aacb4d3ba46fdb5"></a>+</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.828617138286173%" headers="mcps1.2.9.1.5 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a790678506e8c4fd59f93f0aebbcc7dba"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a790678506e8c4fd59f93f0aebbcc7dba"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a790678506e8c4fd59f93f0aebbcc7dba"></a>23</p>
   </td>
   <td class="cellrowborder" valign="top" width="11.998800119988001%" headers="mcps1.2.9.1.6 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a882f77b6b6ce416b9f264cdf57be7052"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a882f77b6b6ce416b9f264cdf57be7052"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a882f77b6b6ce416b9f264cdf57be7052"></a>:</p>
   </td>
   <td class="cellrowborder" valign="top" width="15.108489151084893%" headers="mcps1.2.9.1.7 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a0a712aa5bf6148869f7a806561ca9b84"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a0a712aa5bf6148869f7a806561ca9b84"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a0a712aa5bf6148869f7a806561ca9b84"></a>-</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.0986901309869%" headers="mcps1.2.9.1.8 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aadd157e9eba242d38889fcbfde889595"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aadd157e9eba242d38889fcbfde889595"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aadd157e9eba242d38889fcbfde889595"></a>-</p>
   </td>
   </tr>
   <tr id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_r4e373fb2ddd34697a9e949ab6d5f63dd"><td class="cellrowborder" valign="top" width="10.068993100689932%" headers="mcps1.2.9.1.1 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a37671220fe3a4ce6b66e937997c0b391"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a37671220fe3a4ce6b66e937997c0b391"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a37671220fe3a4ce6b66e937997c0b391"></a>8</p>
   </td>
   <td class="cellrowborder" valign="top" width="10.898910108989101%" headers="mcps1.2.9.1.2 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a474b0e86b4eb4385828c094542206f5b"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a474b0e86b4eb4385828c094542206f5b"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a474b0e86b4eb4385828c094542206f5b"></a>&amp;</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.90870912908709%" headers="mcps1.2.9.1.3 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a0ca9a948e08a4638afba2668514c8251"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a0ca9a948e08a4638afba2668514c8251"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a0ca9a948e08a4638afba2668514c8251"></a>16</p>
   </td>
   <td class="cellrowborder" valign="top" width="12.088791120887912%" headers="mcps1.2.9.1.4 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p147006994727"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p147006994727"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p147006994727"></a>\</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.828617138286173%" headers="mcps1.2.9.1.5 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a12c5c9a116b3468390644c25d179be00"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a12c5c9a116b3468390644c25d179be00"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a12c5c9a116b3468390644c25d179be00"></a>24</p>
   </td>
   <td class="cellrowborder" valign="top" width="11.998800119988001%" headers="mcps1.2.9.1.6 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ad6928dc12c7146c89f849c3cd7387c94"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ad6928dc12c7146c89f849c3cd7387c94"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ad6928dc12c7146c89f849c3cd7387c94"></a>,</p>
   </td>
   <td class="cellrowborder" valign="top" width="15.108489151084893%" headers="mcps1.2.9.1.7 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a551cb5da467b4a05b4d9fd9717540f85"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a551cb5da467b4a05b4d9fd9717540f85"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a551cb5da467b4a05b4d9fd9717540f85"></a>-</p>
   </td>
   <td class="cellrowborder" valign="top" width="13.0986901309869%" headers="mcps1.2.9.1.8 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ae84ca9e06de24317b5c23e5c42ba03d5"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ae84ca9e06de24317b5c23e5c42ba03d5"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ae84ca9e06de24317b5c23e5c42ba03d5"></a>-</p>
   </td>
   </tr>
   </tbody>
   </table>

   **Table 2** Parameter description for reuse days and reuse times

   <a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_t2013c9d251bc4cf5be274ef279c4faee"></a>

   <table><thead align="left"><tr id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_r3b0d8f9c19e74880b6db34e52ecce9b2"><th class="cellrowborder" valign="top" width="21.05%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p765380794727"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p765380794727"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p765380794727"></a>Parameter</p>
   </th>
   <th class="cellrowborder" valign="top" width="25.75%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_acd5bec9313cd4c3083ef549a2a6736f3"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_acd5bec9313cd4c3083ef549a2a6736f3"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_acd5bec9313cd4c3083ef549a2a6736f3"></a>Value Range</p>
   </th>
   <th class="cellrowborder" valign="top" width="53.2%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aade16638fa4f453d938380600483f505"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aade16638fa4f453d938380600483f505"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aade16638fa4f453d938380600483f505"></a>Description</p>
   </th>
   </tr>
   </thead>
   <tbody><tr id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_r09980779c6e04971857619b99e87d843"><td class="cellrowborder" valign="top" width="21.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a2ee15e6afe43479a95d2d6285a7ff4d9"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a2ee15e6afe43479a95d2d6285a7ff4d9"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a2ee15e6afe43479a95d2d6285a7ff4d9"></a>Number of days during which a password cannot be reused (<strong id="b12771935174315"><a name="b12771935174315"></a><a name="b12771935174315"></a>password_reuse_time</strong>)</p>
   </td>
   <td class="cellrowborder" valign="top" width="25.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aa966c9a1127f46868ef9e8775c709e21"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aa966c9a1127f46868ef9e8775c709e21"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aa966c9a1127f46868ef9e8775c709e21"></a>Positive number or <strong id="b167991758144318"><a name="b167991758144318"></a><a name="b167991758144318"></a>0</strong>. The integral part of a positive number indicates the number of days and its decimal part can be converted into hours, minutes, and seconds.</p>
   <p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a9947002243e94f05ab23f1b969f34840"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a9947002243e94f05ab23f1b969f34840"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_a9947002243e94f05ab23f1b969f34840"></a>The default value is <strong>60</strong>. The integral part of a positive number indicates the number of days and its decimal part can be converted into hours, minutes, and seconds.</p>
   </td>
   <td class="cellrowborder" valign="top" width="53.2%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_u70f52b4e7ce64d1793435c03328e5b2a"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_u70f52b4e7ce64d1793435c03328e5b2a"></a><ul id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_u70f52b4e7ce64d1793435c03328e5b2a"><li>If the parameter value is changed to a smaller one, new password will be checked based on the new parameter value. </li><li>If the parameter value is changed to a larger one (for example, changed from **a** to **b**), the historical passwords before **b** days probably can be reused because these historical passwords may have been deleted. passwords that are changed later are checked based on the new parameter value. <div class="note" id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_n35c0f22786ef4fa895529a5144bab98a"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_n35c0f22786ef4fa895529a5144bab98a"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_n35c0f22786ef4fa895529a5144bab98a"></a><span class="notetitle"> Note: </span><div class="notebody"><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ad9b5d3b4c7b745f19e0832026e5e0b47"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ad9b5d3b4c7b745f19e0832026e5e0b47"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ad9b5d3b4c7b745f19e0832026e5e0b47"></a>The absolute time is used. Historical passwords are recorded using absolute time and do not recognize time changes. The integral part of a positive number indicates the number of days and its decimal part can be converted into hours, minutes, and seconds.</p>
   </div></div>
   </li></ul>
   </td>
   </tr>
   <tr id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_r6db7a8b1298d4839a195f76b7466777b"><td class="cellrowborder" valign="top" width="21.05%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ac4934c12f3854a938c196a119731596a"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ac4934c12f3854a938c196a119731596a"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_ac4934c12f3854a938c196a119731596a"></a>Number of consecutive times that a password cannot be reused (<strong id="b163384334475"><a name="b163384334475"></a><a name="b163384334475"></a>password_reuse_max</strong>)</p>
   </td>
   <td class="cellrowborder" valign="top" width="25.75%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p190167594727"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p190167594727"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_en-us_topic_0058967680_p190167594727"></a>Positive integer or 0. The integral part of a positive number indicates the number of days and its decimal part can be converted into hours, minutes, and seconds.</p>
   <p id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aa129f63f92c448f2b89793d781bec3b3"><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aa129f63f92c448f2b89793d781bec3b3"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_aa129f63f92c448f2b89793d781bec3b3"></a>The value <strong>0</strong> indicates that the number of consecutive times that a password cannot be reused is not checked. The integral part of a positive number indicates the number of days and its decimal part can be converted into hours, minutes, and seconds.</p>
   </td>
   <td class="cellrowborder" valign="top" width="53.2%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_u430461f661044758b2299bc2a81f02c0"></a><a name="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_u430461f661044758b2299bc2a81f02c0"></a><ul id="en-us_topic_0283137010_en-us_topic_0237121110_en-us_topic_0151096202_en-us_topic_0085033092_en-us_topic_0059779155_u430461f661044758b2299bc2a81f02c0"><li>If the parameter value is changed to a smaller one, new password will be checked based on the new parameter value. </li><li>If the parameter value is changed to a larger one (for example, changed from **a** to **b**), the historical passwords before the last **b** passwords probably can be reused because these historical passwords may have been deleted. passwords that are changed later are checked based on the new parameter value. </li></ul>
   </td>
   </tr>
   </tbody>
   </table>

6. Set user password expiration.

   When creating a user, a user with the **CREATEROLE** permission can force the user password to expire. After logging in to the database for the first time, a new user can perform query operations only after changing the password. The command format is as follows:

   ```
   openGauss=# CREATE USER joe PASSWORD "abc@1234" EXPIRED;
   CREATE ROLE
   ```

   A user with the **CREATEROLE** permission can force a user password to expire or force a user to change the forcibly expired password. The command format is as follows:

   ```
   openGauss=# ALTER USER joe PASSWORD EXPIRED;
   ALTER ROLE
   ```

   ```
   openGauss=# ALTER USER joe PASSWORD "abc@2345" EXPIRED;
   ALTER ROLE
   ```

   >![](public_sys-resources/icon-note.gif) **NOTE:** 
   >
   >-   After a user whose password is invalid logs in to the database, the system prompts the user to change the password when the user performs a simple or extended query. The user can then execute statements after changing the password.
   >
   >-   Only initial users, system administrators (with the **sysadmin** permission), and users who have the permission to create users (with the **CREATEROLE** permission) can invalidate user passwords. System administrators can invalidate their own passwords or the passwords of other system administrators. The password of initial users cannot be invalidated.
