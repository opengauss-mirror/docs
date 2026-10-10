# Huge Page Memory

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:18:47.629Z pushedAt=2026-09-22T11:12:32.666Z -->

## Availability<a name="section3480125215575"></a>

This feature has been available since openGauss 5.1.0.

## Feature Overview<a name="section5814521587"></a>

By using the operating system huge page memory, the database shared memory is optimized, improving database performance in large-memory environments.

## Customer Benefits<a name="section148987345811"></a>

Improves database performance in large-memory production environments.

## Feature Description<a name="section117041846581"></a>

The space required by the operating system page table increases as the total memory of the running environment grows. In an environment with hundreds of GB of memory, using 4K memory pages causes the database process page table space to become larger and increases the probability of TLB miss, which slows down database queries and wastes main memory space. To avoid performance degradation caused by overly small system memory pages in a large-memory running environment, openGauss introduces the Huge Page Memory feature. When `enable_huge_pages` is set to on in the configuration file, the openGauss database creates shared memory from the huge pages pre-allocated by the operating system at startup.

Users can decide whether to enable Huge Page Memory based on the running environment. In practice, in an environment with hundreds of GB of memory, if the system memory page size is 4K, enabling Huge Page Memory can improve database performance. Generally, in an environment with hundreds of GB of memory, huge pages of 2MB can be considered; if the environment memory reaches the TB level, larger huge pages can be selected.

## Feature Enhancements<a name="section21149265913"></a>

None.

## Feature Constraints<a name="section51513617597"></a>

When the Huge Page Memory feature is enabled for the database, the shared memory used by the buffer pool depends on the huge page memory settings of the operating system. After Huge Page Memory is enabled, if the system is not configured properly, the database will fail to start. For detailed practices, see [Huge Page Memory](../database_reference/huge_page_memory.md)

## Dependencies<a name="section20491151513592"></a>

None.
