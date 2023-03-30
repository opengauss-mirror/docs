# Using MOT Overview<a name="EN-US_TOPIC_0270171536"></a>

MOT is automatically deployed as part of openGauss. You may refer to the  [MOT Preparation](mot-preparation.md)  section for a description of how to estimate and plan required memory and storage resources in order to sustain your workload. The  [MOT Deployment](mot-deployment.md)  section describes all the configuration settings in MOT, as well as non-mandatory options for server optimization.

Using MOT tables is quite simple. The syntax of all MOT commands is the same as for disk-based tables and includes support for most of standard PostgreSQL SQL, DDL and DML commands and features, such as Stored Procedures. Only the create and drop table statements in MOT differ from the statements for disk-based tables in openGauss. You may refer to the  [MOT Usage](mot-usage.md)  section for a description of these two simple commands, to learn how to convert a disk-based table into an MOT table, to get higher performance using Query Native Compilation and PREPARE statements and for a description of external tool support and the limitations of the MOT engine.

The  [MOT Administration](mot-administration.md)  section describes how to perform database maintenance, monitoring and analysis of logs and reported errors. Lastly, the  [MOT Sample TPC-C Benchmark](mot-sample-tpc-c-benchmark.md)  section describes how to perform a standard TPC-C benchmark.

-   Read the following topics to learn how to use MOT –

    <a name="table16769368"></a>
    <table><tbody><tr id="row32398645"><td class="cellrowborder" valign="top" width="100%"><p id="p7044574"><a name="p7044574"></a><a name="p7044574"></a><a name="image63401170"></a><a name="image63401170"></a><span><img id="image63401170" src="figures/en-us_image_0270171686.png" width="219.45000000000002" height="221.44500000000002"></span></p>
    </td>
    </tr>
    </tbody>
    </table>


