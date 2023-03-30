# Encrypted Equality Functions<a name="EN-US_TOPIC_0299864759"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the Lite scenario, openGauss provides this API, but the encrypted equality functions are unavailable.

-   byteawithoutorderwithequalcolin\(cstring\)

    Description: Converts input data to the internal byteawithoutorderwithequalcol format.

    Parameter type: cstring

    Return type: byteawithoutorderwithequalcol


-   byteawithoutorderwithequalcolout\(byteawithoutorderwithequalcol\)

    Description: Converts internal data of the byteawithoutorderwithequalcol type to data of the cstring type.

    Parameter type: byteawithoutorderwithequalcol

    Return type: cstring


-   byteawithoutorderwithequalcolsend\(byteawithoutorderwithequalcol\)

    Description: Converts data of the byteawithoutorderwithequalcol type to data of the bytea type.

    Parameter type: byteawithoutorderwithequalcol

    Return type: bytea

-   byteawithoutorderwithequalcolrecv\(internal\)

    Description: Converts data of the byteawithoutorderwithequalcol type to data of the byteawithoutorderwithequalcol type.

    Parameter type: internal

    Return type: byteawithoutorderwithequalcol

-   byteawithoutorderwithequalcoltypmodin\(\_cstring\)

    Description: Converts data of the byteawithoutorderwithequalcol type to data of the byteawithoutorderwithequalcol type.

    Parameter type: \_cstring

    Return type: int4

-   byteawithoutorderwithequalcoltypmodout\(int4\)

    Description: Converts data of the int4 type into data of the cstring type.

    Parameter type: int4

    Return type: cstring

-   byteawithoutordercolin\(cstring\)

    Description: Converts input data to the internal byteawithoutordercolin format.

    Parameter type: cstring

    Return type: byteawithoutordercol

-   byteawithoutordercolout\(byteawithoutordercol\)

    Description: Converts internal data of the byteawithoutordercol type to data of the cstring type.

    Parameter type: byteawithoutordercol

    Return type: cstring

-   byteawithoutordercolsend\(byteawithoutordercol\)

    Description: Converts data of the byteawithoutordercol type to data of the bytea type.

    Parameter type: byteawithoutordercol

    Return type: bytea

-   byteawithoutordercolrecv\(internal\)

    Description: Converts data of the byteawithoutordercol type to data of the byteawithoutordercol type.

    Parameter type: internal

    Return type: byteawithoutordercol

-   byteawithoutorderwithequalcolcmp\(byteawithoutorderwithequalcol, byteawithoutorderwithequalcol\)

    Description: Compares two byteawithoutorderwithequalcol data sizes. If the first data size is smaller than the second one,  **–1**  is returned. If the first data size is equal to the second one,  **0**  is returned. If the first data size is larger than the second one,  **1**  is returned.

    Parameter type: byteawithoutorderwithequalcol, byteawithoutorderwithequalcol

    Return type: int4

-   byteawithoutorderwithequalcolcmpbytear\(byteawithoutorderwithequalcol, bytea\)

    Description: Compares the byteawithoutorderwithequalcol and bytea data sizes. If the first data size is smaller than the second one,  **–1**  is returned. If the first data size is equal to the second one,  **0**  is returned. If the first data size is larger than the second one,  **1**  is returned.

    Parameter type: byteawithoutorderwithequalcol, bytea

    Return type: int4

-   byteawithoutorderwithequalcolcmpbyteal\(bytea, byteawithoutorderwithequalcol\)

    Description: Compares the bytea and byteawithoutorderwithequalcol data sizes. If the first data size is smaller than the second one,  **–1**  is returned. If the first data size is equal to the second one,  **0**  is returned. If the first data size is larger than the second one,  **1**  is returned.

    Parameter type: byteawithoutorderwithequalcol, bytea

    Return type: int4

-   byteawithoutorderwithequalcoleq\(byteawithoutorderwithequalcol, byteawithoutorderwithequalcol\)

    Description: Compares two byteawithoutorderwithequalcol data records. If they are the same,  **true **is returned. Otherwise,  **false **is returned.

    Parameter type: byteawithoutorderwithequalcol, bytea

    Return type: Boolean

-   byteawithoutorderwithequalcoleqbyteal\(bytea, byteawithoutorderwithequalcol\)

    Description: Compares the bytea and byteawithoutorderwithequalcol data records. If they are the same,  **true **is returned. Otherwise,  **false **is returned.

    Parameter type: bytea, byteawithoutorderwithequalcol

    Return type: Boolean

-   byteawithoutorderwithequalcoleqbytear\(byteawithoutorderwithequalcol, bytea\)

    Description: Compares the byteawithoutorderwithequalcol and bytea data records. If they are the same,  **true **is returned. Otherwise,  **false **is returned.

    Parameter type: byteawithoutorderwithequalcol, bytea

    Return type: Boolean

-   byteawithoutorderwithequalcolne\(byteawithoutorderwithequalcol, byteawithoutorderwithequalcol\)

    Description: Compares two byteawithoutorderwithequalcol data records. If they are different,  **true **is returned. Otherwise,  **false **is returned.

    Parameter type: byteawithoutorderwithequalcol, byteawithoutorderwithequalcol

    Return type: Boolean

-   byteawithoutorderwithequalcolnebyteal\(bytea, byteawithoutorderwithequalcol\)

    Description: Compares the bytea and byteawithoutorderwithequalcol data records. If they are the same,  **true **is returned. Otherwise,  **false **is returned.

    Parameter type: bytea, byteawithoutorderwithequalcol

    Return type: Boolean

-   byteawithoutorderwithequalcolnebytear\(byteawithoutorderwithequalcol, bytea\)

    Description: Compares the byteawithoutorderwithequalcol and bytea data records. If they are the same,  **true **is returned. Otherwise,  **false **is returned.

    Parameter type: byteawithoutorderwithequalcol, bytea

    Return type: Boolean

-   hll\_hash\_byteawithoutorderwithequalcol\(byteawithoutorderwithequalcol\)

    Description: Returns the hll hash value of byteawithoutorderwithequalcol.

    Parameter type: byteawithoutorderwithequalcol

    Return type: hll\_hashval

    The implementation of byteawithoutorderwithequalcolin searches for CEK and determines whether it is a normal encrypted data type. Therefore, if the format of the data entered by the user is not the encrypted data format and the corresponding CEK does not exist on the local host, an error is returned.

    ```
    openGauss=# SELECT * FROM byteawithoutorderwithequalcolsend('\x907219912381298461289346129'::byteawithoutorderwithequalcol);
    ERROR:  cek with OID 596711794 not found
    LINE 1: SELECT * FROM byteawithoutorderwithequalcolsend('\x907219912...
                                                            ^
    openGauss=# SELECT * FROM byteawithoutordercolout('\x90721901999999999999912381298461289346129');
    ERROR:  cek with OID 2566986098 not found
    LINE 1: SELECT * FROM byteawithoutordercolout('\x9072190199999999999...
       
    SELECT * FROM byteawithoutorderwithequalcolrecv('\x90721901999999999999912381298461289346129'::byteawithoutorderwithequalcol);
    ERROR:  cek with OID 2566986098 not found
                                               ^
    openGauss=# SELECT * FROM byteawithoutorderwithequalcolsend('\x90721901999999999999912381298461289346129'::byteawithoutorderwithequalcol);
    ERROR:  cek with OID 2566986098 not found
    LINE 1: SELECT * FROM byteawithoutorderwithequalcolsend('\x907219019...
                                                            ^
    ```


