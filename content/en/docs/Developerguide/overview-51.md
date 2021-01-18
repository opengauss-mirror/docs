# Overview<a name="EN-US_TOPIC_0295970207"></a>

Incremental materialized views can be incrementally refreshed. You need to manually execute statements to incrementally refresh materialized views in a period of time. The difference between the incremental and the full materialized views is that the incremental materialized view supports only a small number of scenarios. Currently, only base table scanning statements or UNION ALL can be used to create materialized views.

