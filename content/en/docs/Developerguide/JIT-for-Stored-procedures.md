# JIT for Stored procedures

JIT for Stored Procedures (JIT SP) is supported by the openGauss MOT engine (starting from 5.0 version), and its goal is deliver even higher performance and lower latency. 

JIT SP refers to code generation, compiling and execution of stored procedures (SP) by LLVM runtime code generation and execution library. JIT SP is available to SPs accessing MOT tables (only) and is completely transparent to users. SPs with Cross-Tx usage will be executed by standard PLSQL. Acceleration level depends on the SP logic complexity. For example, a real customer application achieved acceleration of 20%, 44%, 300% and 500% for different SPs, shaving microseconds to tens of milliseconds of the SP latency.

During the PREPARE phase of a query invoking an SP, or the first SP execution, the JIT module performs an attempt to translate the SP SQL into a C-based function and compile it in runtime (using LLVM). If successful, the consecutive SP invocations the MOT will execute a compiled function, leading to performance gains. In case of failure to produce a compiled function, the SP will be executed by standard PLSQL. Both scenarios are fully transparent to users.

You may refer to [JIT Diagnostics](MOT JIT functions useful for diagnostics.md) for useful diagnostics information.