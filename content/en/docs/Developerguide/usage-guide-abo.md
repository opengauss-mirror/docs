# Usage Guide<a name="EN-US_TOPIC_0000001316625936"></a>

1.  Set the GUC parameter default\_statistics\_target to an integer ranging from \[-100, -1\], which indicates the sampling rate.
2.  Use ANALYZE\(\(\[column\_name,\]\)\) to collect data statistics and create models.
3.  Enter a query. If a statistical model is created on the equality query column involved in the query, the statistical model is automatically used to estimate the selection rate.
4.  When the intelligent statistics model is no longer needed, you can use ALTER TABLE \[table\_name\] DELETE STATISTICS \(\(\[column\_name,\]\)\) to collect statistics and delete the model.

For details about other methods, see sections [ALTER TABLE](en-us_topic_0289899912.md) and [ANALYZE | ANALYSE](en-us_topic_0289900881.md).
