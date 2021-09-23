# Adding Monitoring Parameters<a name="EN-US_TOPIC_0303986185"></a>

The tool performs trend prediction and threshold exception detection only for metrics in  **os\_exporter**. You can add new monitoring parameters. The procedure is as follows:

1.  Compile a function for obtaining metrics in  **os\_exporter**  of  **task/os\_exporter.py**, and add the function to the output result list. For example:

    ```
    @staticmethod
    def new_metric():
        return metric_value
        
    def output(self):
        result = [self.cpu_usage(), self.io_wait(), self.io_read(),
                  self.io_write(), self.memory_usage(), self.disk_space(), self.new_metric()]
        return result
    
    ```

2.  In  **os\_exporter**  of  **table.json**, add the  **new\_metric**  field to  **CREATE table**  and add the field type information to  **INSERT**. For example:

    ```
    "os_exporter": {
      "create_table": "create table  os_exporter(timestamp bigint, cpu_usage text, io_wait text, io_read text, io_write text, memory_usage text, disk_space text, new_metric text);",
      "insert": "insert into os_exporter values(%d, \"%s\", \"%s\", \"%s\", \"%s\", \"%s\", \"%s\", \"%s\");",
    ```

3.  Add the upper or lower limit of the metric to the  **task/metric\_task.conf**  file. For example:

    ```
    [os_exporter]
    new_metric_minimum = 0
    new_metric_maximum = 10
    ```


