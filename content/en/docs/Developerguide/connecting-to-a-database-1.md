# Connecting to a Database<a name="EN-US_TOPIC_0000001080369734"></a>

1.  Use the .ini file \(the  **configparser**  package of Python can parse this type of configuration file\) to save the configuration information about the database connection.
2.  Use the  **psycopg2.connect**  function to obtain the connection object.
3.  Use the connection object to create a cursor object.

