# JIT \(MOT\)<a name="EN-US_TOPIC_0260488063"></a>

-   enable\_mot\_codegen = true

    Specifies whether to use JIT query compilation and execution for planned queries.

    JIT query execution enables JIT-compiled code to be prepared for a prepared query during its planning phase. The resulting JIT-compiled function is executed whenever the prepared query is invoked. JIT compilation usually takes place in the form of LLVM. On platforms where LLVM is not natively supported, MOT provides a software-based fallback called Tiny Virtual Machine \(TVM\).

-   force\_mot\_pseudo\_codegen = false

    Specifies whether to use TVM \(pseudo-LLVM\) even though LLVM is supported on the current platform.

    On platforms where LLVM is not natively supported, MOT automatically defaults to TVM.

    On platforms where LLVM is natively supported, LLVM is used by default. This configuration item enables the use of TVM for JIT compilation and execution on platforms on which LLVM is supported.

-   enable\_mot\_codegen\_print = false

    Specifies whether to print emitted LLVM/TVM IR code for JIT-compiled queries.

-   mot\_codegen\_limit = 100

    Limits the number of JIT queries allowed per user session.


