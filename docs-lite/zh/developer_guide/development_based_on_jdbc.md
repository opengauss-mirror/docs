# 基于JDBC开发<a name="ZH-CN_TOPIC_0289899900"></a>

JDBC（Java Database Connectivity，Java数据库连接）是一种用于执行SQL语句的Java API，可以为多种关系数据库提供统一访问接口，应用程序可基于它操作数据。openGauss库提供了对JDBC 4.0特性的支持，需要使用JDK1.8版本编译程序代码，不支持JDBC桥接ODBC方式。

- **[JDBC包、驱动类和环境类](jdbc_package_driver_class_and_environment_class.md)**  
- **[开发流程](development_process_jdbc.md)**  
- **[加载驱动](loading_the_driver_jdbc.md)**  
- **[连接数据库](connecting_to_a_database_jdbc.md)**  
- **[连接数据库（以SSL方式）](connecting_to_a_database_using_ssl_jdbc.md)**  
- **[连接数据库（以UDS方式）](connecting_to_a_database_using_uds.md)** 
- **[执行SQL语句](running_sql_statements_jdbc.md)**  
- **[处理结果集](processing_data_in_a_result_set_jdbc.md)**  
- **[关闭连接](closing_a_connection_jdbc.md)**  
- **[日志管理](log_management.md)**  
- **[示例：常用操作](example_common_operations_jdbc.md)**  
- **[示例：重新执行应用SQL](example_retrying_sql_queries_for_applications.md)**  
- **[示例：通过本地文件导入导出数据](example_importing_and_exporting_data_through_local_files.md)**  
- **[示例：从MY迁移数据](example_migrating_data_from_a_my_database_to_opengauss.md)**  
- **[示例：逻辑复制代码示例](example_logic_replication_code.md)**  
- **[示例：不同场景下连接数据库参数配置](example_parameters_for_connecting_to_the_database_in_different_scenarios.md)**  
- **[JDBC接口参考](jdbc_interface_reference.md)**  
- **[JDBC常用参数参考](common_jdbc_parameters.md)**  
