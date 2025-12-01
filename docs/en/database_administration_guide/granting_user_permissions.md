# Granting User Permissions<a name="EN-US_TOPIC_0270171477"></a>

The following describes how to assign a database user permission to access the MOT storage engine. This is performed only once per database user, and is usually done during the initial configuration phase.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>The granting of user permissions is required because MOT is integrated into the openGauss database by using and extending the Foreign Data Wrapper \(FDW\) mechanism, which requires granting user access permissions.

To enable a specific user to create and access MOT tables \(DDL, DML, SELECT\) –

Run the following statement only once –

```
GRANT USAGE ON FOREIGN SERVER mot_server TO <user>;
```

All keywords are not case sensitive.

