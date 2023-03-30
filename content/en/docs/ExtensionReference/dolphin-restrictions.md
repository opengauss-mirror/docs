# Dolphin Restrictions<a name="EN-US_TOPIC_0000001201437540"></a>

-   The lite edition is not supported.
-   The Dolphin plug-in cannot be deleted.
-   The Dolphin plug-in can be created only in the B-compatible database.
-   The Dolphin plug-in needs to create data types and functions in schemas such as pg_catalog. Therefore, loading the Dolphin plug-in requires initial user permissions. openGauss automatically loads the Dolphin plug-in when the initial user or a user with the initial user permissions connects to B-compatible database for the first time. If a B-compatible database has never been connected by an initial user or a user with initial user permissions, it will not load the Dolphin plug-in.
-   All added or modified syntaxes in Dolphin cannot be viewed by running `\h` on the gsql client, and cannot be automatically supplemented on the gsql client.
-   The creation of the Dolphin plug-in deletes the functions and types with the same name required by the plug-in that exists in the database and the objects that previously depend on the plug-in.
