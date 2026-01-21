# PostGIS

## Overview<a name="EN-US_TOPIC_0000001246077429"></a>

openGauss provides PostGIS Extension \(PostGIS-2.4.2\). PostGIS Extension is a spatial database extender for PostgreSQL. It provides the following spatial information services: spatial objects, spatial indexes, spatial functions, and spatial operators. PostGIS Extension complies with the OpenGIS specifications.

PostGIS Extension depends on the following third-party open-source software:

-   Geos 3.6.2
-   Proj 4.9.2
-   Json 0.12.1
-   Libxml2 2.7.1
-   Gdal 1.11.0

## PostGIS Support and Constraints<a name="EN-US_TOPIC_0000001201437540"></a>

### Supported Data Types<a name="section59521232327"></a>

PostGIS extension of openGauss supports the following data types:

-   box2d
-   box3d
-   geometry\_dump
-   geometry
-   geography

### Supported Operators and Functions<a name="section1198813519310"></a>

**Table  1**  Operators and functions supported by PostGIS Extension

<a name="table18970162111535"></a>
<table><thead align="left"><tr id="row99711021145319"><th class="cellrowborder" valign="top" width="21.15%" id="mcps1.2.3.1.1"><p id="p149718214536"><a name="p149718214536"></a><a name="p149718214536"></a>Category</p>
</th>
<th class="cellrowborder" valign="top" width="78.85%" id="mcps1.2.3.1.2"><p id="p1897112175318"><a name="p1897112175318"></a><a name="p1897112175318"></a>Function</p>
</th>
</tr>
</thead>
<tbody><tr id="row14971152165319"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p203181644115312"><a name="p203181644115312"></a><a name="p203181644115312"></a>Management Functions</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p497162116533"><a name="p497162116533"></a><a name="p497162116533"></a>AddGeometryColumn, DropGeometryColumn, DropGeometryTable, PostGIS_Full_Version, PostGIS_GEOS_Version, PostGIS_Liblwgeom_Version, PostGIS_Lib_Build_Date, PostGIS_Lib_Version, PostGIS_PROJ_Version, PostGIS_Scripts_Build_Date, PostGIS_Scripts_Installed, PostGIS_Version, PostGIS_LibXML_Version, PostGIS_Scripts_Released, Populate_Geometry_Columns, UpdateGeometrySRID</p>
</td>
</tr>
<tr id="row1797192135316"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p1055125895312"><a name="p1055125895312"></a><a name="p1055125895312"></a>Geometry Constructors</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p7971321155318"><a name="p7971321155318"></a><a name="p7971321155318"></a>ST_BdPolyFromText, ST_BdMPolyFromText, ST_Box2dFromGeoHash, ST_GeogFromText, ST_GeographyFromText, ST_GeogFromWKB, ST_GeomCollFromText, ST_GeomFromEWKB, ST_GeomFromEWKT, ST_GeometryFromText, ST_GeomFromGeoHash, ST_GeomFromGML, ST_GeomFromGeoJSON, ST_GeomFromKML, ST_GMLToSQL, ST_GeomFromText, ST_GeomFromWKB, ST_LineFromMultiPoint, ST_LineFromText, ST_LineFromWKB, ST_LinestringFromWKB, ST_MakeBox2D, ST_3DMakeBox, ST_MakeEnvelope, ST_MakePolygon, ST_MakePoint, ST_MakePointM, ST_MLineFromText, ST_MPointFromText, ST_MPolyFromText, ST_Point, ST_PointFromGeoHash, ST_PointFromText, ST_PointFromWKB, ST_Polygon, ST_PolygonFromText, ST_WKBToSQL, ST_WKTToSQL</p>
</td>
</tr>
<tr id="row297113213531"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p749821415413"><a name="p749821415413"></a><a name="p749821415413"></a>Geometry Accessors</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p697142115532"><a name="p697142115532"></a><a name="p697142115532"></a>GeometryType, ST_Boundary, ST_CoordDim, ST_Dimension, ST_EndPoint, ST_Envelope, ST_ExteriorRing, ST_GeometryN, ST_GeometryType, ST_InteriorRingN, ST_IsClosed, ST_IsCollection, ST_IsEmpty, ST_IsRing, ST_IsSimple, ST_IsValid, ST_IsValidReason, ST_IsValidDetail, ST_M, ST_NDims, ST_NPoints, ST_NRings, ST_NumGeometries, ST_NumInteriorRings, ST_NumInteriorRing, ST_NumPatches, ST_NumPoints, ST_PatchN, ST_PointN, ST_SRID, ST_StartPoint, ST_Summary, ST_X, ST_XMax, ST_XMin, ST_Y, ST_YMax, ST_YMin, ST_Z, ST_ZMax, ST_Zmflag, ST_ZMin</p>
</td>
</tr>
<tr id="row1997102165319"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p796118260543"><a name="p796118260543"></a><a name="p796118260543"></a>Geometry Editors</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p1097115214532"><a name="p1097115214532"></a><a name="p1097115214532"></a>ST_AddPoint, ST_Affine, ST_Force2D, ST_Force3D, ST_Force3DZ, ST_Force3DM, ST_Force4D, ST_ForceCollection, ST_ForceSFS, ST_ForceRHR, ST_LineMerge, ST_CollectionExtract, ST_CollectionHomogenize, ST_Multi, ST_RemovePoint, ST_Reverse, ST_Rotate, ST_RotateX, ST_RotateY, ST_RotateZ, ST_Scale, ST_Segmentize, ST_SetPoint, ST_SetSRID, ST_SnapToGrid, ST_Snap, ST_Transform, ST_Translate, ST_TransScale</p>
</td>
</tr>
<tr id="row1297132115534"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p3121194017543"><a name="p3121194017543"></a><a name="p3121194017543"></a>Geometry Outputs</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p197132120536"><a name="p197132120536"></a><a name="p197132120536"></a>ST_AsBinary, ST_AsEWKB, ST_AsEWKT, ST_AsGeoJSON, ST_AsGML, ST_AsHEXEWKB, ST_AsKML, ST_AsLatLonText, ST_AsSVG, ST_AsText, ST_AsX3D, ST_GeoHash</p>
</td>
</tr>
<tr id="row19971182117536"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p41350135414"><a name="p41350135414"></a><a name="p41350135414"></a>Operators</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p1297142155317"><a name="p1297142155317"></a><a name="p1297142155317"></a>&amp;&amp;, &amp;&amp;&amp;, &amp;&lt;, &amp;&lt;|, &amp;&gt;, &lt;&lt;, &lt;&lt;|, =, &gt;&gt;, @ , |&amp;&gt; , |&gt;&gt;, ~, ~=, &lt;-&gt;, &lt;#&gt;</p>
</td>
</tr>
<tr id="row12971182115314"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p149711221175319"><a name="p149711221175319"></a><a name="p149711221175319"></a>Spatial Relationships and Measurements</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p6971421155314"><a name="p6971421155314"></a><a name="p6971421155314"></a>ST_3DClosestPoint, ST_3DDistance, ST_3DDWithin, ST_3DDFullyWithin, ST_3DIntersects, ST_3DLongestLine, ST_3DMaxDistance, ST_3DShortestLine, ST_Area, ST_Azimuth, ST_Centroid, ST_ClosestPoint, ST_Contains, ST_ContainsProperly, ST_Covers, ST_CoveredBy, ST_Crosses, ST_LineCrossingDirection, ST_Disjoint, ST_Distance, ST_HausdorffDistance, ST_MaxDistance, ST_DistanceSphere, ST_DistanceSpheroid, ST_DFullyWithin, ST_DWithin, ST_Equals, ST_HasArc, ST_Intersects, ST_Length, ST_Length2D, ST_3DLength, ST_Length_Spheroid, ST_Length2D_Spheroid, ST_3DLength_Spheroid, ST_LongestLine, ST_OrderingEquals, ST_Overlaps, ST_Perimeter, ST_Perimeter2D, ST_3DPerimeter, ST_PointOnSurface, ST_Project, ST_Relate, ST_RelateMatch, ST_ShortestLine, ST_Touches, ST_Within</p>
</td>
</tr>
<tr id="row2971112115316"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p620562615557"><a name="p620562615557"></a><a name="p620562615557"></a>Geometry Processing</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p15971421115310"><a name="p15971421115310"></a><a name="p15971421115310"></a>ST_Buffer, ST_BuildArea, ST_Collect, ST_ConcaveHull, ST_ConvexHull, ST_CurveToLine, ST_DelaunayTriangles, ST_Difference, ST_Dump, ST_DumpPoints, ST_DumpRings, ST_FlipCoordinates, ST_Intersection, ST_LineToCurve, ST_MakeValid, ST_MemUnion, ST_MinimumBoundingCircle, ST_Polygonize, ST_Node, ST_OffsetCurve, ST_RemoveRepeatedPoints, ST_SharedPaths, ST_Shift_Longitude, ST_Simplify, ST_SimplifyPreserveTopology, ST_Split, ST_SymDifference, ST_Union, ST_UnaryUnion</p>
</td>
</tr>
<tr id="row697122195317"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p1511184455511"><a name="p1511184455511"></a><a name="p1511184455511"></a>Linear Referencing</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p9971921165313"><a name="p9971921165313"></a><a name="p9971921165313"></a>ST_LineInterpolatePoint, ST_LineLocatePoint, ST_LineSubstring, ST_LocateAlong, ST_LocateBetween, ST_LocateBetweenElevations, ST_InterpolatePoint, ST_AddMeasure</p>
</td>
</tr>
<tr id="row2971172165312"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p1397118218530"><a name="p1397118218530"></a><a name="p1397118218530"></a>Miscellaneous Functions</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p1697182135318"><a name="p1697182135318"></a><a name="p1697182135318"></a>ST_Accum, Box2D, Box3D, ST_Expand, ST_Extent, ST_3Dextent, Find_SRID, ST_MemSize</p>
</td>
</tr>
<tr id="row6971721205312"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p797162111538"><a name="p797162111538"></a><a name="p797162111538"></a>Exceptional Functions</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p5971102115535"><a name="p5971102115535"></a><a name="p5971102115535"></a>PostGIS_AddBBox, PostGIS_DropBBox, PostGIS_HasBBox</p>
</td>
</tr>
</tbody>
</table>

### Spatial Indexes<a name="section2993751311"></a>

PostGIS extension of openGauss supports Generalized Search Tree \(GIST\) spatial indexes \(except for partitioned tables\). Different from B-tree indexes, GiST indexes are adaptable to all kinds of irregular data structures, which can effectively improve the retrieval efficiency for geometry and geographic data.

Run the following command to create a GiST index:

```
openGauss=# CREATE INDEX indexname ON tablename USING GIST ( geometryfield );
```

### Extension Constraints<a name="section13902113312416"></a>

-   Only row-store tables are supported.
-   Topology \(object management module\) and Raster \(grid data processing module\) are not supported.
-   BRIN indexes are not supported.
-   The  **spatial\_ref\_sys**  table can only be queried during scale-out.

## Installing PostGIS<a name="EN-US_TOPIC_0000001201117578"></a>

You can obtain the PostGIS Extension source code package from  [https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz](https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz). PostGIS Extension needs to be compiled and installed by using GCC 7.3. GCC is short for GNU Compiler Collection.

-   During the installation, you can run the  **make    -sj**  and  **make install -sj**  commands to accelerate the compilation. There is a low probability that an installation error occurs when you run the  **-sj**  command. If such an error occurs and the installation fails, run the  **make**  and  **make install**  commands to perform serial installation.
-   Add the following compilation parameter when configuring an ARM-based physical machine:  **--build=aarch64-unknown-linux-gnu**.

### Procedure<a name="section193783420183"></a>

1.  Install the GCC 7.3 compiler. If the GCC 7.3 compiler has been installed in the database instance, skip this step.

    The installation of PostGIS requires the GCC 7.3 compiler. To install the GCC 7.3 compiler, you are advised to install a GCC \(containing gcc and g++\) in an earlier version and then update it using the GCC 7.3 source code package. If gcc and g++ in an earlier version do not exist in the database instance, you can install them by mounting the OS image. To install the GCC 7.3 compiler, you need to download the  **gcc-7.3.0**,  **gmp-6.1.0**,  **mpfr-3.1.4**, and  **mpc-1.0.3**  packages from:

    https://ftp.gnu.org/gnu/gcc/gcc-7.3.0/gcc-7.3.0.tar.gz

    https://ftp.gnu.org/gnu/gmp/gmp-6.1.0.tar.xz

    https://ftp.gnu.org/gnu/mpfr/mpfr-3.1.4.tar.gz

    https://ftp.gnu.org/gnu/mpc/mpc-1.0.3.tar.gz

    To verify the integrity of the installation package, download the .sig and keyring files with the same names as the installation package:

    https://ftp.gnu.org/gnu/gcc/gcc-7.3.0/gcc-7.3.0.tar.gz.sig

    https://ftp.gnu.org/gnu/gmp/gmp-6.1.0.tar.xz.sig

    https://ftp.gnu.org/gnu/mpfr/mpfr-3.1.4.tar.gz.sig

    https://ftp.gnu.org/gnu/mpc/mpc-1.0.3.tar.gz.sig

    https://ftp.gnu.org/gnu/gnu-keyring.gpg

    Run the following command to verify the integrity of the installation package.

    ```
    gpg --verify --keyring ./gnu-keyring.gpg your_package_name.sig
    ```

    If "Good signature from  *XXX*" is displayed, the installation package is complete.

    1.  Log in to any host of the database as the OS user  **omm**.
    2.  Create the root GCC installation directory *$GAUSSHOME***/gcc** and the code storage directory *$GAUSSHOME****/gcc/packages***, and download **gcc-7.3.0.tar.gz**, **gmp-6.1.0.tar.xz**, **mpc-1.0.3.tar.gz**, and **mpfr-3.1.4.tar.gz** to the *\$GAUSSHOME****/gcc/packages*** directory.

        ```
        mkdir $GAUSSHOME/gcc
        mkdir $GAUSSHOME/gcc/packages
        ```

    3.  Decompress the downloaded packages.

        ```
        cd $GAUSSHOME/gcc/packages
        tar -xzf gcc-7.3.0.tar.gz
        tar -xvJf gmp-6.1.0.tar.xz
        tar -xzf mpc-1.0.3.tar.gz
        tar -xzf mpfr-3.1.4.tar.gz
        ```

    4.  Create GCC installation directories.

        ```
        mkdir $GAUSSHOME/gcc/gcc-7.3.0
        mkdir $GAUSSHOME/gcc/gcc-7.3.0/depend
        mkdir $GAUSSHOME/gcc/gcc-7.3.0/depend/gmp-6.1.0
        mkdir $GAUSSHOME/gcc/gcc-7.3.0/depend/mpfr-3.1.4
        mkdir $GAUSSHOME/gcc/gcc-7.3.0/depend/mpc-1.0.3
        mkdir $GAUSSHOME/gcc/gcc-7.3.0/depend/gcc
        ```

    5.  Install  **gmp-4.3.2**.

        Go to the  *$GAUSSHOME***/gcc/packages/gmp-6.1.0**  directory and run the following command to install GMP:

        ```
        cd $GAUSSHOME/gcc/packages/gmp-6.1.0
        ./configure --prefix $GAUSSHOME/gcc/gcc-7.3.0/depend/gmp-4.3.2
        make -sj
        make install -sj
        ```

    6.  Install  **mpfr-2.4.2**.

        Go to the  *$GAUSSHOME***/gcc/packages/mpfr-3.1.4**  directory and run the following command to install MPFR:

        ```
        cd $GAUSSHOME/gcc/packages/mpfr-3.1.4
        ./configure --prefix $GAUSSHOME/gcc/gcc-7.3.0/depend/mpfr-3.1.4 --with-gmp=$GAUSSHOME/gcc/gcc-7.3.0/depend/gmp-6.1.0
        make -sj
        make install -sj
        ```

    7.  Install  **mpc-1.0.3**.

        Go to the  *$GAUSSHOME***/gcc/packages/mpc-1.0.3**  directory and run the following command to install MPC:

        ```
        cd $GAUSSHOME/gcc/packages/mpc-1.0.3
        ./configure --prefix=$GAUSSHOME/gcc/gcc-7.3.0/depend/mpc-1.0.3  --with-gmp=$GAUSSHOME/gcc/gcc-7.3.0/depend/gmp-6.1.0 --with-mpfr=$GAUSSHOME/gcc/gcc-7.3.0/depend/mpfr-3.1.4 
        make -sj 
        make install -sj
        ```

    8.  Install  **gcc-7.3.0**.

        a. Add  **lib**  to  **\~/.bashrc**.

        Open the  **\~/.bashrc**  file in the Vim editor.

        ```
        vim ~/.bashrc
        ```

        Add the following content:

        ```
        export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$GAUSSHOME/gcc/gcc-7.3.0/depend/gmp-6.1.0/lib:$GAUSSHOME/gcc/gcc-7.3.0/depend/mpfr-3.1.4/lib:$GAUSSHOME/gcc/gcc-7.3.0/depend/mpc-1.0.3/lib
        ```

        Run the following command to validate the addition:

        ```
        source ~/.bashrc
        ```

        b. Go to the  *$GAUSSHOME***/gcc/packages/gcc-7.3.0**  directory and run the following command to install GCC:

        ```
        cd $GAUSSHOME/gcc/packages/gcc-7.3.0
        ./configure --prefix=$GAUSSHOME/gcc/gcc-7.3.0/depend/gcc -disable-multilib --with-gmp=$GAUSSHOME/gcc/gcc-7.3.0/depend/gmp-6.1.0 -enable-languages=c,c++ --with-mpfr=$GAUSSHOME/gcc/gcc-7.3.0/depend/mpfr-3.1.4 --with-mpc=$GAUSSHOME/gcc/gcc-7.3.0/depend/mpc-1.0.3
        make -sj
        make install -sj
        ```

        c. Set environment variables.

        Open the  **\~/.bashrc**  file in the Vim editor.

        ```
        vim ~/.bashrc
        ```

        Add the following content:

        ```
        export CC=$GAUSSHOME/gcc/gcc-7.3.0/depend/gcc/bin/gcc
        export CXX=$GAUSSHOME/gcc/gcc-7.3.0/depend/gcc/bin/g++
        export LD_LIBRARY_PATH=$GAUSSHOME/gcc/gcc-7.3.0/depend/gcc/lib64:$LD_LIBRARY_PATH
        export PATH=$GAUSSHOME/gcc/gcc-7.3.0/depend/gcc/bin:$PATH
        ```

        Run the following command to validate the addition:

        ```
        source ~/.bashrc
        ```

2.  Ensure that  **zlib**  has been installed.

    Compiling and installing  **Libxml2**  needs  **zlib**, a lossless data compression library. omm user can run the  **find /usr/ -name libz.a**  or  **find ***$GAUSSHOME***/ -name libz.so**  command to check whether zlib is installed. If  **libz.a**  exists,  **zlib**  is installed.

    **zlib**  is installed by default during database installation. If  **zlib**  is not installed, download it from  [https://sourceforge.net/projects/libpng/files/zlib/1.2.8/zlib-1.2.8.tar.gz/download](https://sourceforge.net/projects/libpng/files/zlib/1.2.8/zlib-1.2.8.tar.gz/download)  and install it.

    After the installation is successful, you can find  **libz.a**  in  **/usr/local/lib**.

3.  Install  **autoconf**  and  **automake**.  **autoconf**  and  **automake**  are required to compile and install the  **JSON-C**  package. If autoconf and automake do not exist in the database instance, you can install them by mounting the OS image.
4.  Install the libraries that PostGIS depends on.
    1.  Obtain the PostGIS source code from  [https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz](https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz). Save it to the  *$GAUSSHOME*  directory. Download the compressed package, decompress it, and rename the folder  **postgis-xc**.

    2.  Download the patch file from [https://gitcode.com/opengauss/openGauss-third\_party/blob/master/gpl\_dependency/postgis/postgis\_2.4.2-2.patch](https://gitcode.com/opengauss/openGauss-third\_party/blob/master/gpl\_dependency/postgis/postgis\_2.4.2-2.patch). Save the patch file to the *$GAUSSHOME* directory and install the patch.

        ```
        cd $GAUSSHOME/postgis-xc/
        patch -p1 < $GAUSSHOME/postgis_2.4.2-2.patch 
        ```

    3.  Download the header file on which PostGIS depends from [https://gitcode.com/opengauss/openGauss-third\_party/blob/master/gpl\_dependency/postgis/extension\_dependency.h](https://gitcode.com/opengauss/openGauss-third\_party/blob/master/gpl\_dependency/postgis/extension\_dependency.h). Save the header file to *$GAUSSHOME***/include/postgresql/server/**.

    4.  Separately compile GEOS, PROJ, JSON-C, Libxml2, and PostGIS, and generate the corresponding dynamic link libraries. Compiling commands are as follows:

        -   Geos

            ```
            cd $GAUSSHOME/postgis-xc/geos-3.6.2
            chmod +x ./configure
            ./configure --prefix=$GAUSSHOME/install/geos
            make -sj
            make install -sj
            ```

        -   Proj

            ```
            cd $GAUSSHOME/postgis-xc/proj-4.9.2
            chmod +x ./configure
            ./configure --prefix=$GAUSSHOME/install/proj
            make -sj
            make install -sj
            ```

        -   JSON-C

            ```
            cd $GAUSSHOME/postgis-xc/json-c-json-c-0.12.1-20160607
            chmod +x ./configure
            ./configure --prefix=$GAUSSHOME/install/json
            make -sj
            make install -sj
            ```

        -   Libxml2

            ```
            cd $GAUSSHOME/postgis-xc/libxml2-2.7.1
            chmod +x ./configure
            ./configure --prefix=$GAUSSHOME/install/libxml2
            make -sj
            make install -sj
            ```

            In an ARM OS, run the following  **configure**  command:

            ```
            ./configure --prefix=$GAUSSHOME/install/libxml2 --build=aarch64-unknown-linux-gnu 
            ```

        -   Gdal

            ```
            cd $GAUSSHOME/postgis-xc/gdal-1.11.0
            chmod +x ./configure
            chmod +x ./install-sh
            ./configure --prefix=$GAUSSHOME/install/gdal --with-xml2=$GAUSSHOME/install/libxml2/bin/xml2-config --with-geos=$GAUSSHOME/install/geos/bin/geos-config --with-static_proj4=$GAUSSHOME/install/proj CFLAGS='-O2 -fpermissive -pthread'
            make -sj
            make install -sj
            ```

            If a message similar to "/home/carrot/data/openGauss-server/third\_party/buildtools/gcc/res/lib64/libstdc++.la cannot be found" is displayed during compilation, create a directory, copy  **libstdc++.la**  to the directory, and run  **make -sj**. \(If similar problems occur in  **libstdc++.so**, use the same method.\)

        -   PostGIS

            ```
            cd $GAUSSHOME/postgis-xc/postgis-2.4.2
            chmod +x ./configure
            ./configure --prefix=$GAUSSHOME/install/postgis2.4.2 --with-pgconfig=$GAUSSHOME/bin/pg_config --with-projdir=$GAUSSHOME/install/proj --with-geosconfig=$GAUSSHOME/install/geos/bin/geos-config --with-jsondir=$GAUSSHOME/install/json  --with-xml2config=$GAUSSHOME/install/libxml2/bin/xml2-config   --without-raster --without-topology CFLAGS='-O2 -fpermissive -DPGXC  -pthread -D_THREAD_SAFE -D__STDC_FORMAT_MACROS -DMEMORY_CONTEXT_CHECKING -w'  CC=g++
            make -sj
            make install -sj
            ```

            If make-sj reports a missing openGauss header, For details, see the postgis installation document in the third_party repository https://gitcode.com/opengauss/openGauss-third_party/tree/master/gpl_dependency/postgis, such as lack of: h storage/file/fio_device.h storage/file/fio_device_com.h ddes/dms/ss_aio.h ddes/dms/ss_dms_recovery.h h ddes/dms/ss_common_attr.h ddes/dms/ss_init.h storage/dss/dss_api_def.h) Names of the seven header files. Copy it to the compiled and installed database in the dest/include directory.

    5.  Execute the script file  **PostGIS\_install.sh**  in the  *$GAUSSHOME***/share/postgis**  directory as user  **omm**  to distribute those dynamic link libraries to database instance nodes.

        ```
        mv $GAUSSHOME/lib/postgresql/postgis-2.4.so $GAUSSHOME/install/postgis-2.4.so python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/postgis-2.4.so $GAUSSHOME/lib/postgresql/postgis-2.4.so python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/json/lib/libjson-c.so.2 $GAUSSHOME/lib/libjson-c.so.2 python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/geos/lib/libgeos_c.so.1 $GAUSSHOME/lib/libgeos_c.so.1 python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/proj/lib/libproj.so.9 $GAUSSHOME/lib/libproj.so.9 python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/geos/lib/libgeos-3.6.2.so $GAUSSHOME/lib/libgeos-3.6.2.so python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/postgis2.4.2/lib/liblwgeom-2.4.so.0 $GAUSSHOME/lib/liblwgeom-2.4.so.0 python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/postgis-xc/postgis-2.4.2/postgis--2.4.2.sql $GAUSSHOME/share/postgresql/extension/postgis--2.4.2.sql python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/postgis-xc/postgis-2.4.2/postgis.control $GAUSSHOME/share/postgresql/extension/postgis.control python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/bin/pgsql2shp $GAUSSHOME/bin/pgsql2shp python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/bin/shp2pgsql $GAUSSHOME/bin/shp2pgsql
        ```

        After the script is executed, run the following command to delete the  *$GAUSSHOME***/postgis**  directory:

        ```
        rm -rf $GAUSSHOME/postgis-xc
        ```

        If the GCC 5.4 compiler is no longer necessary, delete the GCC 5.4 installation directory and remove the environment configuration information added during GCC 5.4 installation from the  **\~/.bashrc**  file.

        ```
        rm -rf $GAUSSHOME/gcc
        ```

    6.  Restart the database instance.

        ```
        gs_om -t stop && gs_om -t start
        ```

## Using PostGIS<a name="EN-US_TOPIC_0000001201277572"></a>

### Creating PostGIS Extension<a name="section21088306113"></a>

Run the  **CREATE EXTENSION**  command to create PostGIS Extension.

```
openGauss=# CREATE EXTENSION postgis;
```

### Using PostGIS Extension<a name="section107391050141118"></a>

Use the following function to invoke PostGIS Extension:

```
openGauss=# SELECT GisFunction (Param1, Param2,......);
```

**GisFunction**  is the function, and  **Param1**  and  **Param2**  are function parameters. The following SQL statements are a simple illustration for PostGIS use. For details about related functions, see  [PostGIS 2.4.2 Manual](https://download.osgeo.org/postgis/docs/postgis-2.4.2.pdf).

Example 1: Create a geometry table.

```
openGauss=# CREATE TABLE cities ( id integer, city_name varchar(50) );
openGauss=# SELECT AddGeometryColumn('cities', 'position', 4326, 'POINT', 2);
```

Example 2: Insert geometry data.

```
openGauss=# INSERT INTO cities (id, position, city_name) VALUES (1,ST_GeomFromText('POINT(-9.5 23)',4326),'CityA');
openGauss=# INSERT INTO cities (id, position, city_name) VALUES (2,ST_GeomFromText('POINT(-10.6 40.3)',4326),'CityB');
openGauss=# INSERT INTO cities (id, position, city_name) VALUES (3,ST_GeomFromText('POINT(20.8 30.3)',4326), 'CityC');
```

Example 3: Calculate the distance between any two cities among three cities.

```
openGauss=# SELECT p1.city_name,p2.city_name,ST_Distance(p1.position,p2.position) FROM cities AS p1, cities AS p2 WHERE p1.id > p2.id;
```

### Deleting PostGIS Extension<a name="section1587441381220"></a>

Run the following command to delete a PostGIS extension from openGauss:

```
openGauss=# DROP EXTENSION postgis [CASCADE];
```

>[!NOTE]NOTE 
>If PostGIS Extension is the dependee of other objects \(for example, geometry tables\), you need to add the  **CASCADE**  keyword to delete all these objects.

To completely delete PostGIS extension, run  **gs\_om**  as user  **omm**  to delete PostGIS and the dynamic link libraries it depends on.

```
gs_om -t postgis -m rmlib
```

