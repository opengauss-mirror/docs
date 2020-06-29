# Security Functions<a name="EN-US_TOPIC_0242370448"></a>

## Security Functions<a name="en-us_topic_0237121984_en-us_topic_0059778224_s8faac65b21ea4e438009735298c2c8d1"></a>

-   gs\_encrypt\_aes128\(encryptstr,keystr\)

    Description: Encrypts  **encryptstr**  strings using  **keystr**  as the key and returns encrypted strings. The length of  **keystr**  ranges from 1 to 16 bytes. Currently, the following types of data can be encrypted: numerals supported in the database; character type; RAW in binary type; and DATE, TIMESTAMP, and SMALLDATETIME in date/time type.

    Return type: text

    Length of the return value: At least 92 bytes and no more than \(4\*\[_Len_/3\]+68\) bytes, where  _Len_  indicates the length of the data before encryption \(unit: byte\).

    Example:

    ```
    postgres=# SELECT gs_encrypt_aes128('MPPDB','1234');
    
                                   gs_encrypt_aes128
    -------------------------------------------------------------------------------------
    gwditQLQG8NhFw4OuoKhhQJoXojhFlYkjeG0aYdSCtLCnIUgkNwvYI04KbuhmcGZp8jWizBdR1vU9CspjuzI0lbz12A=
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >A decryption password is required during the execution of this function. For security purposes, the  **gsql**  tool does not record the function in the execution history. That is, the execution history of this function cannot be found in  **gsql**  by paging up and down.  

-   gs\_decrypt\_aes128\(decryptstr,keystr\)

    Description: Decrypts  **decrypt**  strings using  **keystr**  as the key and returns decrypted strings. The  **keystr**  used for decryption must be consistent with that used for encryption.  **keystr**  cannot be empty.

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >This parameter needs to be used with the  **gs\_encrypt\_aes128**  encryption function.  

    Return type: text

    Example:

    ```
    postgres=# SELECT gs_decrypt_aes128('gwditQLQG8NhFw4OuoKhhQJoXojhFlYkjeG0aYdSCtLCnIUgkNwvYI04KbuhmcGZp8jWizBdR1vU9CspjuzI0lbz12A=','1234');
     gs_decrypt_aes128 
    -------------------
     MPPDB
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >A decryption password is required during the execution of this function. For security purposes, the  **gsql**  tool does not record the function in the execution history. That is, the execution history of this function cannot be found in  **gsql**  by paging up and down.  

-   gs\_password\_deadline

    Description: Indicates the number of remaining days before the password of the current user expires.

    Return type: interval

    Example:

    ```
    postgres=# SELECT gs_password_deadline();
      gs_password_deadline   
    -------------------------
     83 days 17:44:32.196094
    (1 row)
    ```

-   login\_audit\_messages

    Description: Queries login information about a login user.

    Return type: tuple

    Example:

    -   Checking the date, time, and IP address successfully authenticated during the last login.

        ```
        postgres=# SELECT * FROM login_audit_messages(true);
          username  | database |       logintime        |     type      | result |  client_conninfo   
        ------------+----------+------------------------+---------------+--------+--------------------
             omm    | postgres | 2017-06-02 15:28:34+08 | login_success | ok     | gsql@[local]
        (1 row)
        ```

    -   Checking the date, time, and IP address that failed to be authenticated during the last login.

        ```
        postgres=# SELECT * FROM login_audit_messages(false) ORDER BY logintime desc limit 1;
          username  | database |       logintime        |     type     | result |     client_conninfo     
        ------------+----------+------------------------+--------------+--------+-------------------------
        (0 rows)
        ```

    -   Checking the number of failed attempts, date, and time since the previous successful authentication.

        ```
        postgres=# SELECT * FROM login_audit_messages(false);
          username  | database |       logintime        |     type     | result |     client_conninfo     
        ------------+----------+------------------------+--------------+--------+-------------------------
        (0 rows)
        ```


-   login\_audit\_messages\_pid

    Description: Queries login information about a login user. Different from  **login\_audit\_messages**, this function queries login information based on  **backendid**. Information about subsequent logins of the same user does not alter the query result of previous logins and cannot be found using this function.

    Return type: tuple

    Example:

    -   Checking the date, time, and IP address successfully authenticated during the last login.

        ```
        postgres=# SELECT * FROM login_audit_messages(true);
          username  | database |       logintime        |     type      | result |  client_conninfo | backendid
        ------------+----------+------------------------+---------------+--------+--------------------
             omm    | postgres | 2017-06-02 15:28:34+08 | login_success | ok     | gsql@[local] | 140311900702464
        (1 row)
        ```

    -   Checking the date, time, and IP address that failed to be authenticated during the last login.

        ```
        postgres=# SELECT * FROM login_audit_messages(false) ORDER BY logintime desc limit 1;
          username  | database |       logintime        |     type     | result |     client_conninfo   | backendid
        ------------+----------+------------------------+--------------+--------+-------------------------
        (0 rows)
        ```

    -   Checking the number of failed attempts, date, and time since the previous successful authentication.

        ```
        postgres=# SELECT * FROM login_audit_messages(false);
          username  | database |       logintime        |     type     | result |     client_conninfo    | backendid
        ------------+----------+------------------------+--------------+--------+-------------------------
        (0 rows)
        ```


-   inet\_server\_addr

    Description: Displays the server IP address.

    Return type: inet

    Example:

    ```
    postgres=# SELECT inet_server_addr();
     inet_server_addr
    ------------------
     10.10.0.13
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   The client IP address 10.10.0.50 and server IP address 10.10.0.13 are used as an example.  
    >-   If the database is connected to the local PC, the value is empty.  

-   inet\_client\_addr

    Description: Displays the client IP address.

    Return type: inet

    Example:

    ```
    postgres=# SELECT inet_client_addr();
     inet_client_addr
    ------------------
     10.10.0.50
    (1 row)
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   The client IP address 10.10.0.50 and server IP address 10.10.0.13 are used as an example.  
    >-   If the database is connected to the local PC, the value is empty.  

-   pg\_query\_audit

    Description: Views audit logs of the primary database node.

    Return type: record

    The following table describes return fields.

    <a name="en-us_topic_0237121984_t8f0334486f934453827d563b90c86711"></a>
    <table><thead align="left"><tr id="en-us_topic_0237121984_r2a0276b542d54fd0808927c2c54b0fc6"><th class="cellrowborder" valign="top" width="19.09%" id="mcps1.1.4.1.1"><p id="en-us_topic_0237121984_a5579cdd06a5645b3862144b2131a8649"><a name="en-us_topic_0237121984_a5579cdd06a5645b3862144b2131a8649"></a><a name="en-us_topic_0237121984_a5579cdd06a5645b3862144b2131a8649"></a>Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="21%" id="mcps1.1.4.1.2"><p id="en-us_topic_0237121984_a1f7bf547d07e4656a132c0e34ba635ca"><a name="en-us_topic_0237121984_a1f7bf547d07e4656a132c0e34ba635ca"></a><a name="en-us_topic_0237121984_a1f7bf547d07e4656a132c0e34ba635ca"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.91%" id="mcps1.1.4.1.3"><p id="en-us_topic_0237121984_a8447f6b31ba54199a8224fea8463c23d"><a name="en-us_topic_0237121984_a8447f6b31ba54199a8224fea8463c23d"></a><a name="en-us_topic_0237121984_a8447f6b31ba54199a8224fea8463c23d"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237121984_rf8b75b68e6a24e29931035876b3c3dfb"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121984_a8f18d3f0e5cd44d096020df47ca28e00"><a name="en-us_topic_0237121984_a8f18d3f0e5cd44d096020df47ca28e00"></a><a name="en-us_topic_0237121984_a8f18d3f0e5cd44d096020df47ca28e00"></a>time</p>
    </td>
    <td class="cellrowborder" valign="top" width="21%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121984_aecd744296d7d4b0397b2fe1fd923b6bf"><a name="en-us_topic_0237121984_aecd744296d7d4b0397b2fe1fd923b6bf"></a><a name="en-us_topic_0237121984_aecd744296d7d4b0397b2fe1fd923b6bf"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121984_a8579d68414bb40968ecb2f54fd50bfa3"><a name="en-us_topic_0237121984_a8579d68414bb40968ecb2f54fd50bfa3"></a><a name="en-us_topic_0237121984_a8579d68414bb40968ecb2f54fd50bfa3"></a>Operation time</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121984_r685dd7e8104e4020b260711d0d1cf9a9"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121984_ad7f3b45edf4748ef8bf45be74968b4ac"><a name="en-us_topic_0237121984_ad7f3b45edf4748ef8bf45be74968b4ac"></a><a name="en-us_topic_0237121984_ad7f3b45edf4748ef8bf45be74968b4ac"></a>type</p>
    </td>
    <td class="cellrowborder" valign="top" width="21%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121984_a0b778f8c6817439484fd5f0cb1d91e8b"><a name="en-us_topic_0237121984_a0b778f8c6817439484fd5f0cb1d91e8b"></a><a name="en-us_topic_0237121984_a0b778f8c6817439484fd5f0cb1d91e8b"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121984_abd4a7662d8784ec1890fd6e25a2ce17d"><a name="en-us_topic_0237121984_abd4a7662d8784ec1890fd6e25a2ce17d"></a><a name="en-us_topic_0237121984_abd4a7662d8784ec1890fd6e25a2ce17d"></a>Operation</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121984_r45542ef0924c49f2a21c540acd3c90e3"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121984_a09bb26374b104b3fb29bbe2a80ef226a"><a name="en-us_topic_0237121984_a09bb26374b104b3fb29bbe2a80ef226a"></a><a name="en-us_topic_0237121984_a09bb26374b104b3fb29bbe2a80ef226a"></a>result</p>
    </td>
    <td class="cellrowborder" valign="top" width="21%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121984_abe1aa36777e444c48c10c68dea6d28bd"><a name="en-us_topic_0237121984_abe1aa36777e444c48c10c68dea6d28bd"></a><a name="en-us_topic_0237121984_abe1aa36777e444c48c10c68dea6d28bd"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121984_a08d938eccee84d42b9018a66f6b6784c"><a name="en-us_topic_0237121984_a08d938eccee84d42b9018a66f6b6784c"></a><a name="en-us_topic_0237121984_a08d938eccee84d42b9018a66f6b6784c"></a>Operation result</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121984_ra3bccb8528cd408aa54f8e30557c0359"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121984_ac1f1c391b720448fb6cff2861dc151b6"><a name="en-us_topic_0237121984_ac1f1c391b720448fb6cff2861dc151b6"></a><a name="en-us_topic_0237121984_ac1f1c391b720448fb6cff2861dc151b6"></a>username</p>
    </td>
    <td class="cellrowborder" valign="top" width="21%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121984_p84741447191914"><a name="en-us_topic_0237121984_p84741447191914"></a><a name="en-us_topic_0237121984_p84741447191914"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121984_a83dfda58a9ac418fab57f167cd4a8244"><a name="en-us_topic_0237121984_a83dfda58a9ac418fab57f167cd4a8244"></a><a name="en-us_topic_0237121984_a83dfda58a9ac418fab57f167cd4a8244"></a>Name of the user who performs the operation</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121984_rd7538143f1a648d2ae003ee563237226"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121984_adad82d644319412cb3a8d9cb60daa836"><a name="en-us_topic_0237121984_adad82d644319412cb3a8d9cb60daa836"></a><a name="en-us_topic_0237121984_adad82d644319412cb3a8d9cb60daa836"></a>database</p>
    </td>
    <td class="cellrowborder" valign="top" width="21%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121984_a0a0c18f59f1a47bdb17413bbe1716f3a"><a name="en-us_topic_0237121984_a0a0c18f59f1a47bdb17413bbe1716f3a"></a><a name="en-us_topic_0237121984_a0a0c18f59f1a47bdb17413bbe1716f3a"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121984_a2fe293248c694ffd9fe3f04bdf3a3f6d"><a name="en-us_topic_0237121984_a2fe293248c694ffd9fe3f04bdf3a3f6d"></a><a name="en-us_topic_0237121984_a2fe293248c694ffd9fe3f04bdf3a3f6d"></a>Database name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121984_ra831355d65f64e7b92f51f84021f4947"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121984_a71cd5950d6ef4ea888015a515726ccf1"><a name="en-us_topic_0237121984_a71cd5950d6ef4ea888015a515726ccf1"></a><a name="en-us_topic_0237121984_a71cd5950d6ef4ea888015a515726ccf1"></a>client_conninfo</p>
    </td>
    <td class="cellrowborder" valign="top" width="21%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121984_a9193af9c57084a81b157fec2c2935f90"><a name="en-us_topic_0237121984_a9193af9c57084a81b157fec2c2935f90"></a><a name="en-us_topic_0237121984_a9193af9c57084a81b157fec2c2935f90"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121984_a8900dd32319f4d53937621db1727f5cf"><a name="en-us_topic_0237121984_a8900dd32319f4d53937621db1727f5cf"></a><a name="en-us_topic_0237121984_a8900dd32319f4d53937621db1727f5cf"></a>Client connection information</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121984_rdb4c5c3a41fb4325a8c11787c3af82b1"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121984_ab44539456dc4418bbfdc32a89a1f2851"><a name="en-us_topic_0237121984_ab44539456dc4418bbfdc32a89a1f2851"></a><a name="en-us_topic_0237121984_ab44539456dc4418bbfdc32a89a1f2851"></a>object_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="21%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121984_a17a7c300ce604cd380d8340e5bfa63c3"><a name="en-us_topic_0237121984_a17a7c300ce604cd380d8340e5bfa63c3"></a><a name="en-us_topic_0237121984_a17a7c300ce604cd380d8340e5bfa63c3"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121984_aad54cacd015d4619bf9acb9cb4736cd3"><a name="en-us_topic_0237121984_aad54cacd015d4619bf9acb9cb4736cd3"></a><a name="en-us_topic_0237121984_aad54cacd015d4619bf9acb9cb4736cd3"></a>Object name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121984_r47bd7dff24334c239af7266eeeb52c2b"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121984_a97cfc7c8c5c8412aa7b03489d5df0b8a"><a name="en-us_topic_0237121984_a97cfc7c8c5c8412aa7b03489d5df0b8a"></a><a name="en-us_topic_0237121984_a97cfc7c8c5c8412aa7b03489d5df0b8a"></a>detail_info</p>
    </td>
    <td class="cellrowborder" valign="top" width="21%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121984_ac0400ce695b945b89702ff50805ac554"><a name="en-us_topic_0237121984_ac0400ce695b945b89702ff50805ac554"></a><a name="en-us_topic_0237121984_ac0400ce695b945b89702ff50805ac554"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121984_a04d603fa66434a178026e29847b76f40"><a name="en-us_topic_0237121984_a04d603fa66434a178026e29847b76f40"></a><a name="en-us_topic_0237121984_a04d603fa66434a178026e29847b76f40"></a>Operation details</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121984_row5504610171814"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121984_p105051710131812"><a name="en-us_topic_0237121984_p105051710131812"></a><a name="en-us_topic_0237121984_p105051710131812"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="21%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121984_p20505010181817"><a name="en-us_topic_0237121984_p20505010181817"></a><a name="en-us_topic_0237121984_p20505010181817"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121984_p25051510141815"><a name="en-us_topic_0237121984_p25051510141815"></a><a name="en-us_topic_0237121984_p25051510141815"></a>Node name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121984_row15968121961816"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121984_p149683193188"><a name="en-us_topic_0237121984_p149683193188"></a><a name="en-us_topic_0237121984_p149683193188"></a>thread_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="21%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121984_p14968519121811"><a name="en-us_topic_0237121984_p14968519121811"></a><a name="en-us_topic_0237121984_p14968519121811"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121984_p19681196183"><a name="en-us_topic_0237121984_p19681196183"></a><a name="en-us_topic_0237121984_p19681196183"></a>Thread ID</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121984_row17581057101415"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121984_p185821957171412"><a name="en-us_topic_0237121984_p185821957171412"></a><a name="en-us_topic_0237121984_p185821957171412"></a>local_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="21%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121984_p185831157161413"><a name="en-us_topic_0237121984_p185831157161413"></a><a name="en-us_topic_0237121984_p185831157161413"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121984_p1558315714148"><a name="en-us_topic_0237121984_p1558315714148"></a><a name="en-us_topic_0237121984_p1558315714148"></a>Local port</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121984_row11677166201512"><td class="cellrowborder" valign="top" width="19.09%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121984_p1767716611159"><a name="en-us_topic_0237121984_p1767716611159"></a><a name="en-us_topic_0237121984_p1767716611159"></a>remote_port</p>
    </td>
    <td class="cellrowborder" valign="top" width="21%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121984_p667876121518"><a name="en-us_topic_0237121984_p667876121518"></a><a name="en-us_topic_0237121984_p667876121518"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.91%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121984_p1367813615159"><a name="en-us_topic_0237121984_p1367813615159"></a><a name="en-us_topic_0237121984_p1367813615159"></a>Remote port</p>
    </td>
    </tr>
    </tbody>
    </table>

    For details about how to use the function and details about function examples, see  [Querying Audit Results](querying-audit-results.md).

-   pg\_delete\_audit

    Description: Deletes audit logs in a specified period.    
     
    Return value type: void  
     
    For details about how to use the function and details about function examples, see  [Maintaining Audit Logs](maintaining-audit-logs.md).


