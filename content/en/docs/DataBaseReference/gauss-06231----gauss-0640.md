# GAUSS-06231 -- GAUSS-0640<a name="EN-US_TOPIC_0302073576"></a>

GAUSS-06231: "There is no exist vararrno with 0"

SQLSTATE: 22023

Description:Internal system error.

Solution:Contact technical support.

GAUSS-06232: "tle can not be found from targetlist"

SQLSTATE: 22004

Description:Internal system error.

Solution:Contact technical support.

GAUSS-06233: "No data node information for table: %s"

SQLSTATE: XX006

Description:Internal system error.

Solution:Contact technical support.

GAUSS-06234: "No data node found for u\_sess-\>pgxc\_cxt.gc\_fdw\_current\_idx: %d, u\_sess-\>pgxc\_cxt.gc\_fdw\_max\_idx: %d"

SQLSTATE: XX006

Description:Internal system error.

Solution:Contact technical support.

GAUSS-06235: "Unsupported Table Sample FOR TIMESERIES."

SQLSTATE: 0A000

Description:Internal system error.

Solution:Contact technical support.

GAUSS-06236: "Unsupported Index Scan FOR TIMESERIES."

SQLSTATE: 0A000

Description:Internal system error.

Solution:Contact technical support.

GAUSS-06237: "Unsupported Bitmap Heap Scan FOR TIMESERIES."

SQLSTATE: 0A000

Description:Internal system error.

Solution:Contact technical support.

GAUSS-06238: "Unsupported Bitmap And FOR TIMESERIES."

SQLSTATE: 0A000

Description:Internal system error.

Solution:Contact technical support.

GAUSS-06239: "Unsupported Bitmap OR FOR TIMESERIES."

SQLSTATE: 0A000

Description:Internal system error.

Solution:Contact technical support.

GAUSS-06240: "Unsupported Bitmap Index Scan FOR TIMESERIES."

SQLSTATE: 0A000

Description:Internal system error.

Solution:Contact technical support.

GAUSS-06134: "'%s' is not a valid EOL string, EOL string must not be empty"

SQLSTATE: None

Description: A custom line break cannot be empty.

Solution: Ensure that the custom line break is not empty.

GAUSS-06135: "'%s' is not a valid EOL string, EOL string must not exceed the maximum length \(10 bytes\)"

SQLSTATE: None

Description: The custom line break exceeds the maximum length \(10 bytes\).

Solution: Shorten the custom line break.

GAUSS-06136: "COPY delimiter cannot contain user-define EOL string"

SQLSTATE: None

Description: A delimiter cannot contain custom line breaks.

Solution: Ensure that the delimiter does not contain custom line breaks.

GAUSS-06137: "COPY null representation cannot contain user-define EOL string"

SQLSTATE: None

Description: The  **NULL**  value cannot contain custom line breaks.

Solution: Ensure that the  **NULL**  value does not contain custom line breaks.

GAUSS-06138: "EOL string '%s' cannot contain any characters in'%s'"

SQLSTATE: None

Description: A custom line break cannot contain any characters.

Solution: Ensure that the custom line break does not contain any characters.

GAUSS-06139: "EOL specification can not be used with non-text format using COPY FROM or READ ONLY foreign table"

SQLSTATE: None

Description: Custom line breaks cannot be used for non-TEXT data import using  **COPY**  or for read-only non-TEXT foreign tables.

Solution: Ensure that the data to be imported using  **COPY**  and the read-only table are in TEXT format.

GAUSS-06140: "EOL specification can not be used with non-text format using COPY TO or WRITE ONLY foreign table except 0x0D0A and 0x0A"

SQLSTATE: None

Description: Custom line breaks \(excluding 0x0D0A and 0x0A\) cannot be used for non-TEXT export using  **COPY**  or for write-only foreign tables.

Solution: Ensure that the data to be exported using  **COPY**  and the write-only table are in TEXT format.
