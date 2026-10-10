# dssserver Port Number Error

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:43:08.016Z pushedAt=2026-09-11T08:16:05.446Z -->

## Symptom

The following occurs during database initialization with gs_initdb.
![!\[Alt text\]](../database_om_guide/image-4.png)
After navigating to the $DSS_HOME directory and then entering debug to view the dssinstance.dlog log, the following error is reported:
![!\[Alt text\]](../database_om_guide/image-5.png)

## Cause

The port number provided for dssserver in the dss_inst.ini file is incorrect or may be occupied.

## Solution

Modify the port number provided for dssserver after DSS_NODES_LIST in the dss_inst.ini file.

> [!NOTE]
>
> - The dss_inst.ini file is located in the $DSS_HOME/cfg directory.