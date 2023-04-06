# Usage Guide<a name="EN-US_TOPIC_0000001368034617"></a>

On the live network, use hints to enable the plan adaptation management capability for queries with cache plan problems.

```
select /*+ choose_adaptive_gplan */ * from tab where c1 = xxx;
```

By default, the JDBC client converts the preceding SQL statements with hints to the PBE model and creates a query template. In addition to directly modifying SQL statements, hints can be added through SQL patches.

In the gsql environment, you can manually create a query template.

```
prepare test_stmt as select /*+ choose_adaptive_gplan */ * from tab where c1 = $1;
```
