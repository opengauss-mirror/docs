# Overview<a name="EN-US_TOPIC_0000001367634813"></a>

Adaptive plan selection applies to scenarios where a general cache plan is used for plan execution. Cache plan exploration is performed by using range linear expansion, and plan selection is performed by using range coverage matching. Adaptive plan selection makes up for the performance problem caused by the traditional single cache plan that cannot change according to the query condition parameter, and avoids frequent calling of query optimization.
