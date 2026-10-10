# Support for Special Floating-Point Numbers<a name="ZH-CN_TOPIC_0000001152195135"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:34:07.681Z pushedAt=2026-09-22T11:12:32.716Z -->

## Availability<a name="section56086982"></a>

This feature has been available since openGauss 6.0.0.

## Feature Overview<a name="section35020791"></a>

This feature allows floating-point numbers ending with f or d to be used in numeric representation and supports processing special values of floating-point numbers. This feature is supported only in A-compatible databases.

## Customer Benefits<a name="section46751668"></a>

1. More intuitive data representation: Users can intuitively identify the data type of floating-point numbers, improving data readability and comprehensibility.
2. Enhanced data processing capability: Supports the processing of special floating-point values, enabling users to operate on and process floating-point data more flexibly.

## Feature Description<a name="section18111828"></a>

1. Support for floating-point numbers ending with f or d: Allows users to append f or d to a floating-point number to indicate single-precision and double-precision floating-point numbers.
2. Special floating-point values: Provides recognition and processing of special floating-point values (such as positive infinity, negative infinity, and NaN).

## Feature Enhancements<a name="section28788730"></a>

None.

## Feature Constraints<a name="section06531946143616"></a>

The database is in normal state and clients can connect to it normally.

The GUC parameter `float_suffix_acceptance` must be enabled to allow receiving floating-point numbers ending with f or d.

The GUC parameter `enable_binary_special_a_format` must be enabled to correctly display special floating-point values. To avoid receiving exceptions, this parameter does not take effect in JDBC.

## Dependencies<a name="section57771982"></a>

None.
