# Generating Stored Procedure Coverage Report

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:25:12.658Z -->

A stored procedure coverage report is generated based on the `coverage.proc_coverage` package summary.

## Prerequisites

The parameter [enable_proc_coverage](../database_reference/miscellaneous_parameters.md) is set to on.

## Procedure

1. Set the [enable_proc_coverage](../database_reference/miscellaneous_parameters.md) parameter to on. The parameter is of the SUSET type. Set it by referring to [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).
2. Execute the stored procedure for which coverage needs to be tested. Coverage-related information will be recorded in the [coverage.proc_coverage](./coverage_proc_coverage.md) table under the postgres database. Coverage will not be recorded for stored procedures under the pg_catalog schema.
3. Execute the following command to generate a stored procedure coverage report in HTML format locally.
   1. Connect to the postgres database.
   2. Set the [enable_proc_coverage](../database_reference/miscellaneous_parameters.md) parameter to on. The parameter is of the SUSET type. Set it by referring to [Table 1](../database_administration_guide/reset_parameters.md#en-us_topic_0283137176_en-us_topic_0237121562_en-us_topic_0059777490_t91a6f212010f4503b24d7943aed6d846).
   3. Execute the following command to set the report format. `\a`: Do not display table row and column symbols. `\t`: Do not display column names. `\o`: Specify the output file.

      ```sql
      gsql> \a      
      gsql> \t 
      gsql> \o /home/om/coverage.html
      ```

   4. Execute the [generate_procoverage_report](./other_functions.md) function to generate a stored procedure coverage report in HTML format.

      ```sql
      gsql> select generate_procoverage_report(begin_id, en_id);
      ```

      |Name|Description|Value Range|
      |--|--|--|
      |begin_id|Start ID (inclusive) for generating the stored procedure coverage report|bigint, greater than 0; begin_id must be greater than end_id; when both begin_id and end_id are -1, a stored procedure coverage report for all records is generated|
      |end_id|End ID (inclusive) for generating the stored procedure coverage report|bigint, greater than 0; begin_id must be greater than end_id; when both begin_id and end_id are -1, a stored procedure coverage report for all records is generated|

   5. Execute the following command to disable output options and formatting output commands.

       ```sql
      gsql> \o     
      gsql> \a
      gsql> \t
      ```

4. View the HTML file at the output location as needed.
