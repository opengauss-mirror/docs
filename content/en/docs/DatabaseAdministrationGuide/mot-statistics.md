# MOT Statistics<a name="EN-US_TOPIC_0270171504"></a>

Statistics are intended for performance analysis or debugging. It is uncommon to turn them ON in a production environment \(by default, they are OFF\). Statistics are primarily used by database developers and to a lesser degree by database users.

There is some impact on performance, particularly on the server. Impact on the user is negligible.

The statistics are saved in the database server log. The log is located in the data folder and named  **postgresql-DATE-TIME.log**.

Refer to  [STATISTICS \(MOT\)](mot-configuration-settings.md#section659861612477)  for detailed configuration options.

