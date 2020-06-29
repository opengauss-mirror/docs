# Restoration Method for Incomplete Key Files Caused by Interruption During Standby Instance Rebuilding Using gs\_ctl<a name="EN-US_TOPIC_0255515980"></a>

## Symptom<a name="en-us_topic_0237152452_en-us_topic_0059779180_s9068f5a3fa2545e483455c23e895c088"></a>

The standby instance fails to be rebuilt because the rebuilding process is interrupted. The following error information is displayed:

```
CRC checksum does not match value stored in file, maybe the cipher file is corrupt
non obs cipher file or random parameter file is invalid.
read cipher file or random parameter file failed.
2020-06-18 20:58:12.080 5eeb64e3.1 [unknown] 140697304617088 [unknown] 0 dn_6001_6002 F0000 0 [BACKEND] FATAL:  could not load server certificate file "server.crt": no start line
[2020-06-18 20:58:12.086][24066][dn_6001_6002][gs_ctl]:  waitpid 24446 failed, exitstatus is 256, ret is 2
```

## Possible Cause<a name="en-us_topic_0237152452_en-us_topic_0059779180_s1f781026f255460893d4a31199a5aa3d"></a>

The certificate file is incomplete when the rebuilding is interrupted. The rebuilding fails again due to the incomplete certificate file.

## Procedure<a name="en-us_topic_0237152452_en-us_topic_0059779180_s14e2709c0b7440f1a11c5c0d58d05885"></a>

1.  Check the size of the certificate file in the data directory.

    ```
    ll
    Check the size of the key file.
    -rw------- 1 omm omm       0 Jun 18 20:58 server.crt
    -rw------- 1 omm omm       0 Jun 18 20:58 server.key
    -rw------- 1 omm omm       0 Jun 18 20:58 server.key.cipher
    -rw------- 1 omm omm       0 Jun 18 20:58 server.key.rand
    ```

2.  If the certificate file size is 0, delete the certificate file.

    ```
    rm -rf server.crt server.key server.key.cipher server.key.rand
    ```

3.  Rebuild the standby instance.

    ```
    gs_ctl build -D data_dir
    ```


>![](public_sys-resources/icon-note.gif) **NOTE:**   
>If the database on the standby node is stopped, you need to regenerate a certificate file or copy the certificate file \(in  _$GAUSSHOME_**/share**\) to the data directory, start the standby node, and rebuild the standby instance. For details about how to generate a certificate file, see the  _Developer Guide_.  

