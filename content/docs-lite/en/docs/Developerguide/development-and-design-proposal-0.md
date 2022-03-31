# Development and Design Proposal<a name="EN-US_TOPIC_0000001149427911"></a>

This section describes the design specifications for database modeling and application development. Modeling based on these specifications can better fit the distributed processing architecture of openGauss and output more efficient service SQL code.

The meaning of "Proposal" and "Notice" in this section is as follows:

-   **Proposal**: Design rules. Services complying with the rules can run efficiently, and those violating the rules may have low performance or logic errors.
-   **Notice**: Details requiring attention during service development. This term identifies SQL behavior that complies with SQL standards but users may have misconceptions about, and default behavior that users may be unaware of in a program.

