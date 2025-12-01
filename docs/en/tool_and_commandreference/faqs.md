# FAQs<a name="EN-US_TOPIC_0249632272"></a>

## An Error Is Reported Displaying "Failed to obtain the GPHOME" When a Command Is Executed<a name="EN-US_TOPIC_0249632274"></a>

### Symptom<a name="en-us_topic_0237152452_en-us_topic_0059779180_s9068f5a3fa2545e483455c23e895c088"></a>

The following information is displayed if user  **root**  runs a command.

```
Failed to obtain the GPHOME.
```

### Possible Cause<a name="en-us_topic_0237152452_en-us_topic_0059779180_s1f781026f255460893d4a31199a5aa3d"></a>

The  _GPHOME_  environment variable is not correctly configured. You need to check whether the  _GPHOME_  environment variable contains  **gaussdbToolPath**  in the XML file of the cluster.

### Procedure<a name="en-us_topic_0237152452_en-us_topic_0059779180_s14e2709c0b7440f1a11c5c0d58d05885"></a>

Check the  _$GPHOME_  path.

```
echo $GPHOME
```

Modify the  _$GPHOME_  path in the configuration file if it is not the default installation path.

```
vim /etc/profile
```

## Restoration Method for Incomplete Key Files Caused by Interruption During Standby Instance Rebuilding Using gs\_ctl<a name="EN-US_TOPIC_0255515980"></a>

### Symptom<a name="en-us_topic_0237152452_en-us_topic_0059779180_s9068f5a3fa2545e483455c23e895c088"></a>

The standby instance fails to be rebuilt because the rebuilding process is interrupted. The following error information is displayed:

```
CRC checksum does not match value stored in file, maybe the cipher file is corrupt
non obs cipher file or random parameter file is invalid.
read cipher file or random parameter file failed.
2020-06-18 20:58:12.080 5eeb64e3.1 [unknown] 140697304617088 [unknown] 0 dn_6001_6002 F0000 0 [BACKEND] FATAL:  could not load server certificate file "server.crt": no start line
[2020-06-18 20:58:12.086][24066][dn_6001_6002][gs_ctl]:  waitpid 24446 failed, exitstatus is 256, ret is 2
```

### Possible Cause<a name="en-us_topic_0237152452_en-us_topic_0059779180_s1f781026f255460893d4a31199a5aa3d"></a>

The certificate file is incomplete when the rebuilding is interrupted. The rebuilding fails again due to the incomplete certificate file.

### Procedure<a name="en-us_topic_0237152452_en-us_topic_0059779180_s14e2709c0b7440f1a11c5c0d58d05885"></a>

1. Check the size of the certificate file in the data directory.

   ```
   ll
   Check the size of the key file.
   -rw------- 1 omm omm       0 Jun 18 20:58 server.crt
   -rw------- 1 omm omm       0 Jun 18 20:58 server.key
   -rw------- 1 omm omm       0 Jun 18 20:58 server.key.cipher
   -rw------- 1 omm omm       0 Jun 18 20:58 server.key.rand
   ```

2. If the certificate file size is 0, delete the certificate file.

   ```
   rm -rf server.crt server.key server.key.cipher server.key.rand
   ```

3. Rebuild the standby instance.

   ```
   gs_ctl build -D data_dir
   ```


   >![](public_sys-resources/icon-note.gif) **NOTE:**   
   >If the database on the standby node is stopped, you need to regenerate a certificate file or copy the certificate file \(in  _$GAUSSHOME_**/share**\) to the data directory, start the standby node, and rebuild the standby instance. For details about how to generate a certificate file, see the  _Developer Guide_.  

## No Response Is Returned for a Long Time When gs\_om -t status -\-all Is Used to Query Database Status<a name="EN-US_TOPIC_0289899236"></a>

### Symptom<a name="en-us_topic_0287275985_section434872073818"></a>

The system does not respond for a long time after the  **gs\_om -t status -\-all**  command is executed.

### Cause Analysis<a name="en-us_topic_0287275985_section14354141874411"></a>

The possible cause is that the GaussDB process is hung. The query operation calls the  **gsql**  or  **gs\_ctl**  tool to query the database status. After the process is hung, no response is returned until the query times out.

### Procedure<a name="en-us_topic_0287275985_section10173163494516"></a>

1. Check whether  **gsql**  can access the database. If the following information is displayed, the GaussDB process is hung and the database is abnormal.

   ```
   gsql -d postgres -p 29776        
   gsql: wait (null):29776 timeout expired, errno: Success
   ```

2. Check whether the  **postgresql-\*.log**  file contains error information. If yes, rectify the fault based on the error information.

   ```
   cd $GAUSSLOG/pg_log/dn_6001;grep "ERROR\|FATAL" postgresql-*.log   
   ```

3. If the database has been hung, and the  **gs\_om**  command does not take effect, search for the process ID on each node and kill the process.

   ```
   ps -ef|grep $GAUSSHOME/bin/gaussdb|grep -v grep       
   kill -9 $pid
   ```

4. After the processes on all nodes are killed, run the following command on a node to start the processes: In the test environment, directly restart the database. In the manufacturer environment, contact Huawei technical support.

   ```
   gs_om -t start
   ```

## gs\_sshexkey Reports an Error When the Same User Has Different Passwords<a name="EN-US_TOPIC_0309176033"></a>

### Symptom<a name="section147641250161616"></a>

In the openEuler environment, gs\_sshexkey supports mutual trust between different passwords of the same user. However, the authentication fails after the correct password is entered.

### Cause Analysis<a name="section232313361171"></a>

Open the system log file  **/var/log/secure**  and check whether the \*\*pam\_faillock\(sshd:auth\): Consecutive login failures for user\*\* log exists. If yes, the user account is locked because the number of incorrect password attempts exceeds the upper limit.

### Procedure<a name="section952412551818"></a>

In the  **/etc/pam.d**  directory, modify the  **system-auth**,  **password-auth**, and  **password-auth-crond**  configuration files, increase the value of deny=3 in the files, and restore the value after the mutual trust relationships are established.

