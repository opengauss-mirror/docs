# PostGIS Extension

## PostGIS概述

openGauss提供PostGIS Extension（版本为PostGIS-2.4.2）。PostGIS Extension是PostgreSQL的空间数据库扩展，提供如下空间信息服务功能：空间对象、空间索引、空间操作函数和空间操作符。PostGIS Extension完全遵循OpenGIS规范。

PostGIS Extension依赖第三方开源软件如下：

- Geos 3.6.2
- Proj 4.9.2
- Json 0.12.1
- Libxml2 2.7.1
- Gdal 1.11.0

## PostGIS安装

PostGIS Extension源码包可通过网站[https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz](https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz)获取。该Extension需使用GCC-7.3（GNU编译器套件）进行编译安装。

- 在整个安装过程中，可使用make    -sj和make install -sj命令并行加速编译，-sj命令极低概率性出现安装错误，如果安装失败则请使用make和make install进行串行安装。
- 对于ARM物理机，在configure时增加如下编译参数：--build=aarch64-unknown-linux-gnu。

### 操作步骤<a name="section193783420183"></a>

1. GCC-7.3（GNU编译器套件）编译器安装。若数据库实例中已经安装GCC-7.3编译器，可直接跳过本步骤。

    PostGIS安装依赖GCC-7.3编译器。GCC-7.3编译器推荐使用源码由低版本的gcc和g++编译器进行升级安装。若数据库实例中没有低版本gcc和g++编译器，可以通过挂载操作系统镜像等方法进行安装，这里不做赘述。GCC-7.3编译器相关依赖软件包，包括gcc-7.3.0、gmp-6.1.0、mpfr-3.1.4、mpc-1.0.3，安装包下载地址分别为：

    <https://ftp.gnu.org/gnu/gcc/gcc-7.3.0/gcc-7.3.0.tar.gz>

    <https://ftp.gnu.org/gnu/gmp/gmp-6.1.0.tar.xz>

    <https://ftp.gnu.org/gnu/mpfr/mpfr-3.1.4.tar.gz>

    <https://ftp.gnu.org/gnu/mpc/mpc-1.0.3.tar.gz>

    为了校验安装包的完整性，请同时下载安装包的同名的.sig文件和keyring文件：

    <https://ftp.gnu.org/gnu/gcc/gcc-7.3.0/gcc-7.3.0.tar.gz.sig>

    <https://ftp.gnu.org/gnu/gmp/gmp-6.1.0.tar.xz.sig>

    <https://ftp.gnu.org/gnu/mpfr/mpfr-3.1.4.tar.gz.sig>

    <https://ftp.gnu.org/gnu/mpc/mpc-1.0.3.tar.gz.sig>

    <https://ftp.gnu.org/gnu/gnu-keyring.gpg>

    并使用以下命令验证安装包完整性。

    ```
    gpg --verify --keyring ./gnu-keyring.gpg your_package_name.sig
    ```

    如果提示信息中出现Good signature from XXX则说明安装包完整。

    1).  以操作系统用户omm登录数据库任一主机。

    2).  创建GCC安装主目录`$GAUSSHOME/gcc`和代码下载目录`$GAUSSHOME/gcc/packages`，并下载软件包gcc-7.3.0.tar.gz、gmp-6.1.0.tar.xz、mpc-1.0.3.tar.gz、mpfr-3.1.4.tar.gz至`$GAUSSHOME/gcc/packages`目录。

    ```
    mkdir $GAUSSHOME/gcc
    mkdir $GAUSSHOME/gcc/packages
    ```

    3).  解压下载软件。

    ```
    cd $GAUSSHOME/gcc/packages
    tar -xzf gcc-7.3.0.tar.gz
    tar -xvJf gmp-6.1.0.tar.xz
    tar -xzf mpc-1.0.3.tar.gz
    tar -xzf mpfr-3.1.4.tar.gz
    ```

    4).  创建GCC安装目录。

    ```
    mkdir $GAUSSHOME/gcc/gcc-7.3.0
    mkdir $GAUSSHOME/gcc/gcc-7.3.0/depend
    mkdir $GAUSSHOME/gcc/gcc-7.3.0/depend/gmp-6.1.0
    mkdir $GAUSSHOME/gcc/gcc-7.3.0/depend/mpfr-3.1.4
    mkdir $GAUSSHOME/gcc/gcc-7.3.0/depend/mpc-1.0.3
    mkdir $GAUSSHOME/gcc/gcc-7.3.0/depend/gcc
    ```

    5).  安装gmp-6.1.0。

    进入$GAUSSHOME/gcc/packages/gmp-6.1.0目录，执行下列命令完成gmp安装操作:

    ```
    cd $GAUSSHOME/gcc/packages/gmp-6.1.0
    ./configure --prefix $GAUSSHOME/gcc/gcc-7.3.0/depend/gmp-6.1.0
    make -sj
    make install -sj
    ```

    6).  安装mpfr-3.1.4。

    进入$GAUSSHOME/gcc/packages/mpfr-3.1.4目录，执行以下命令完成mpfr安装操作:

     ```
    cd $GAUSSHOME/gcc/packages/mpfr-3.1.4
    ./configure --prefix $GAUSSHOME/gcc/gcc-7.3.0/depend/mpfr-3.1.4 --with-gmp=$GAUSSHOME/gcc/gcc-7.3.0/depend/gmp-6.1.0
    make -sj
    make install -sj
     ```

    7).  安装mpc-1.0.3。

    进入$GAUSSHOME/gcc/packages/mpc-1.0.3目录，执行下列命令完成mpc安装操作:

    ```
    cd $GAUSSHOME/gcc/packages/mpc-1.0.3
    ./configure --prefix=$GAUSSHOME/gcc/gcc-7.3.0/depend/mpc-1.0.3  --with-gmp=$GAUSSHOME/gcc/gcc-7.3.0/depend/gmp-6.1.0 --with-mpfr=$GAUSSHOME/gcc/gcc-7.3.0/depend/mpfr-3.1.4 
    make -sj 
    make install -sj
    ```

    8).  安装gcc-7.3.0。

    i\) 添加lib路径至\~/.bashrc。

    在vim编辑器中打开\~/.bashrc文档。

    ```
    vim ~/.bashrc
    ```

    添加以下内容：

    ```
    export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$GAUSSHOME/gcc/gcc-7.3.0/depend/gmp-6.1.0/lib:$GAUSSHOME/gcc/gcc-7.3.0/depend/mpfr-3.1.4/lib:$GAUSSHOME/gcc/gcc-7.3.0/depend/mpc-1.0.3/lib
    ```

    执行如下命令使设置生效。

    ```
    source ~/.bashrc
    ```

    ii\)进入$GAUSSHOME/gcc/packages/gcc-7.3.0目录，执行下列命令完成gcc安装操作。

    ```
    cd $GAUSSHOME/gcc/packages/gcc-7.3.0
    ./configure --prefix=$GAUSSHOME/gcc/gcc-7.3.0/depend/gcc -disable-multilib --with-gmp=$GAUSSHOME/gcc/gcc-7.3.0/depend/gmp-6.1.0 -enable-languages=c,c++ --with-mpfr=$GAUSSHOME/gcc/gcc-7.3.0/depend/mpfr-3.1.4 --with-mpc=$GAUSSHOME/gcc/gcc-7.3.0/depend/mpc-1.0.3
    make -sj
    make install -sj
    ```

    iii\) 设置环境变量。

    在vim编辑器中打开\~/.bashrc文档。

    ```
    vim ~/.bashrc
    ```

    加入以下内容：

    ```
    export CC=$GAUSSHOME/gcc/gcc-7.3.0/depend/gcc/bin/gcc
    export CXX=$GAUSSHOME/gcc/gcc-7.3.0/depend/gcc/bin/g++
    export LD_LIBRARY_PATH=$GAUSSHOME/gcc/gcc-7.3.0/depend/gcc/lib64:$LD_LIBRARY_PATH
    export PATH=$GAUSSHOME/gcc/gcc-7.3.0/depend/gcc/bin:$PATH
    ```

    执行如下命令使设置生效。

    ```
    source ~/.bashrc
    ```

2. 确认zlib已安装。

    Libxml2软件包编译安装依赖zlib无损数据压缩库。omm用户可执行find /usr/ -name libz.a（或者执行find $GAUSSHOME/ -name libz.so）查看zlib是否安装\(如果libz.a存在则zlib已安装\)。

    zlib在数据库安装时已默认安装。若查看到zlib未安装，可从网站[https://sourceforge.net/projects/libpng/files/zlib/1.2.8/zlib-1.2.8.tar.gz/download](https://sourceforge.net/projects/libpng/files/zlib/1.2.8/zlib-1.2.8.tar.gz/download)下载并安装。

    安装成功后，可以在/usr/local/lib下找到libz.a。

3. autoconf和automake安装。JSON-C软件包编译安装依赖autoconf和automake工具。若数据库实例中没有autoconf和automake工具，可以通过挂载操作系统镜像等方法进行安装，这里不做赘述。
4. PostGIS依赖库安装。

    1).  从网站[https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz](https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz)获取PostGIS源码至$GAUSSHOME目录，下载压缩包，解压后需将文件夹重命名为postgis-xc。

    2).  从网站[https://gitcode.com/opengauss/openGauss-third_party/blob/master/gpl_dependency/postgis/postgis_2.4.2-2.patch](https://gitcode.com/opengauss/openGauss-third_party/blob/master/gpl_dependency/postgis/postgis_2.4.2-2.patch)下载补丁文件到$GAUSSHOME目录，并打入补丁。

    ```
    cd $GAUSSHOME/postgis-xc/
    # 由于raster插件相关的文件非Linux格式，所以在patch之前，需要先进行格式转换，若无dos2unix则先安装此工具
    dos2unix postgis-2.4.2/postgis_raster--2.4.2.sql
    patch -p1 < $GAUSSHOME/postgis_2.4.2-2.patch 
    ```

    3).  从网站[https://gitcode.com/opengauss/openGauss-third_party/blob/master/gpl_dependency/postgis/extension_dependency.h](https://gitcode.com/opengauss/openGauss-third_party/blob/master/gpl_dependency/postgis/extension_dependency.h)下载postgis依赖头文件到$GAUSSHOME/include/postgresql/server/。

    4).  分别编译Geos、Proj、JSON-C、Libxml2、PostGIS并生成相关动态链接库。编译命令为：

    - Geos

        ```
        cd $GAUSSHOME/postgis-xc/geos-3.6.2
        chmod +x ./configure
        ./configure --prefix=$GAUSSHOME/install/geos
        make -sj
        make install -sj
        ```

    - Proj

        ```
        cd $GAUSSHOME/postgis-xc/proj-4.9.2
        chmod +x ./configure
        ./configure --prefix=$GAUSSHOME/install/proj
        make -sj
        make install -sj
        ```

    - JSON-C

        ```
        cd $GAUSSHOME/postgis-xc/json-c-json-c-0.12.1-20160607
        chmod +x ./configure
        ./configure --prefix=$GAUSSHOME/install/json
        make -sj
        make install -sj
        ```

    - Libxml2

        ```
        cd $GAUSSHOME/postgis-xc/libxml2-2.7.1
        chmod +x ./configure
        ./configure --prefix=$GAUSSHOME/install/libxml2
        make -sj
        make install -sj
        ```

        对于ARM操作系统，则需使用如下configure命令：

        ```
        ./configure --prefix=$GAUSSHOME/install/libxml2 --build=aarch64-unknown-linux-gnu 
        ```

    - Gdal

        ```
        cd $GAUSSHOME/postgis-xc/gdal-1.11.0
        chmod +x ./configure
        chmod +x ./install-sh
        ./configure --prefix=$GAUSSHOME/install/gdal --with-xml2=$GAUSSHOME/install/libxml2/bin/xml2-config --with-geos=$GAUSSHOME/install/geos/bin/geos-config --with-static_proj4=$GAUSSHOME/install/proj CFLAGS='-O2 -fpermissive -pthread'
        make -sj
        make install -sj
        ```

        如果编译出现类似/home/carrot/data/openGauss-server/third\_party/buildtools/gcc/res/lib64/libstdc++.la 找不到，可以自建目录，将libstdc++.la拷贝进去，然后再make -sj（如果libstdc++.so出现类似问题，按同样方法处理）。

    - PostGIS

        ```
        cd $GAUSSHOME/postgis-xc/postgis-2.4.2
        chmod +x ./configure
        # 以下配置包含raster、topology等部分，如不需要可以删除，具体配置可以参考postgis相关文档，若移除则后面的文件拷贝中不需要拷贝相关文件
        ./configure --prefix=$GAUSSHOME/install/postgis2.4.2 --with-pgconfig=$GAUSSHOME/bin/pg_config --with-projdir=$GAUSSHOME/install/proj --with-geosconfig=$GAUSSHOME/install/geos/bin/geos-config --with-jsondir=$GAUSSHOME/install/json \
                     --with-xml2config=$GAUSSHOME/install/libxml2/bin/xml2-config --with-raster --with-gdalconfig=$GAUSSHOME/install/gdal/bin/gdal-config --with-topology --without-address-standardizer \
                     CFLAGS='-O2 -fpermissive -DPGXC -pthread -D_THREAD_SAFE -D__STDC_FORMAT_MACROS -DMEMORY_CONTEXT_CHECKING -w' CC=g++
        make -sj
        make install -sj
        ```

        如果make -sj报错缺少openGauss头文件，需要从其源码中拷贝到数据库对应的include目录下，详情请参考third_party仓库下的postgis安装文档 <https://gitcode.com/opengauss/openGauss-third_party/tree/master/gpl_dependency/postgis>

        例如缺少如下头文件：
        ```
        storage/file/fio_device.h
        storage/file/fio_device_com.h
        ddes/dms/ss_aio.h
        ddes/dms/ss_dms_recovery.h
        ddes/dms/ss_common_attr.h
        ddes/dms/ss_init.h
        storage/dss/dss_api_def.h
        ```

        这些头文件在openGauss-server仓库的src/include目录下，将其复制到$GAUSSHOME/include/postgresql/server下即可，但要注意目录层级必须与src/include目录保持一致。

        比如缺少的头文件是storage/file/fio_device.h，那需要创建的文件就是$GAUSSHOME/include/postgresql/server/storage/file/fio_device.h。

        当然，有一个更加直接简单的方法，即执行下面的命令($CODE_BASE为openGauss-server的源代码目录)

        ```
        mkdir -p $GAUSSHOME/include/postgresql/server/storage/file/
        mkdir -p $GAUSSHOME/include/postgresql/server/storage/dss/
        mkdir -p $GAUSSHOME/include/postgresql/server/ddes/dms/
        cp -r $CODE_BASE/src/include/storage/file/* $GAUSSHOME/include/postgresql/server/storage/file/
        cp -r $CODE_BASE/src/include/storage/dss/* $GAUSSHOME/include/postgresql/server/storage/dss/
        cp -r $CODE_BASE/src/include/ddes/dms/* $GAUSSHOME/include/postgresql/server/ddes/dms/
        ```

        这样就能一下子把所有缺失的头文件都补全进去。

        若出现 postgis_topology.c:249:54: error:base operand of '->' has non-pointer type  'FormData_pg_attribute' ...的报错，则将 postgis-2.4.2/topology/postgis_topology.c 下249行的最后一个箭头操作符“->”改为点操作符“.”，然后重新编译。

        ```cpp
          topo->geometryOID = SPI_tuptable->tupdesc->attrs[3]->atttypid;
        ```

        改为：

        ```cpp
          topo->geometryOID = SPI_tuptable->tupdesc->attrs[3].atttypid;
        ```

    5).  omm用户执行下面的语句，完成PostGIS相关动态链接库在数据库实例节点中的分发。

    ```
    mv $GAUSSHOME/lib/postgresql/postgis-2.4.so $GAUSSHOME/install/postgis-2.4.so
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/postgis-2.4.so $GAUSSHOME/lib/postgresql/postgis-2.4.so
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/json/lib/libjson-c.so.2 $GAUSSHOME/lib/libjson-c.so.2
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/geos/lib/libgeos_c.so.1 $GAUSSHOME/lib/libgeos_c.so.1
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/proj/lib/libproj.so.9 $GAUSSHOME/lib/libproj.so.9
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/geos/lib/libgeos-3.6.2.so $GAUSSHOME/lib/libgeos-3.6.2.so
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/gdal/lib/libgdal.so.1.18.0 $GAUSSHOME/lib/libgdal.so.1
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/postgis2.4.2/lib/liblwgeom-2.4.so.0 $GAUSSHOME/lib/liblwgeom-2.4.so.0 
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/postgis-xc/postgis-2.4.2/postgis--2.4.2.sql $GAUSSHOME/share/postgresql/extension/postgis--2.4.2.sql
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/postgis-xc/postgis-2.4.2/postgis.control $GAUSSHOME/share/postgresql/extension/postgis.control
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/bin/pgsql2shp $GAUSSHOME/bin/pgsql2shp
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/bin/shp2pgsql $GAUSSHOME/bin/shp2pgsql
    
    # 若未编译raster和topology部件，则不执行以下指令
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/postgis-xc/postgis-2.4.2/postgis_raster--2.4.2.sql $GAUSSHOME/share/postgresql/extension/postgis_raster--2.4.2.sql
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/postgis-xc/postgis-2.4.2/postgis_raster.control $GAUSSHOME/share/postgresql/extension/postgis_raster.control
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/postgis-xc/postgis-2.4.2/extensions/postgis_topology/sql/postgis_topology--2.4.2.sql $GAUSSHOME/share/postgresql/extension/postgis_topology--2.4.2.sql
    python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/postgis-xc/postgis-2.4.2/extensions/postgis_topology/postgis_topology.control $GAUSSHOME/share/postgresql/extension/postgis_topology.control
    
    ```

    动态链接库分发脚本执行完毕后，可执行下列命令删除$GAUSSHOME/postgis安装目录。

    ```
    rm -rf $GAUSSHOME/postgis-xc
    ```

    若用户不想保留GCC7.3.0编译器，可删除GCC7.3.0安装目录并在\~/.bashrc文件中删除安装GCC7.3.0时添加的环境配置信息。

    ```
    rm -rf $GAUSSHOME/gcc
    ```

    6).  重启数据库实例。

    ```
    gs_om -t stop && gs_om -t start
    ```

## PostGIS使用

### 创建Extension<a name="section21088306113"></a>

创建PostGIS Extension可直接使用CREATE Extension命令进行创建：

```
openGauss=# CREATE Extension postgis;
```

### 使用Extension<a name="section107391050141118"></a>

PostGIS Extension函数调用格式为：

```
openGauss=# SELECT GisFunction (Param1, Param2,......);
```

其中GisFunction为函数名，Param1、Param2等为函数参数名。下列SQL语句展示PostGIS的简单使用，对于各函数的具体使用，请参考[《PostGIS-2.4.2用户手册》](https://download.osgeo.org/postgis/docs/postgis-2.4.2.pdf)。

示例1：几何表的创建。

```
openGauss=# CREATE TABLE cities ( id integer, city_name varchar(50) );
openGauss=# SELECT AddGeometryColumn('cities', 'position', 4326, 'POINT', 2);
```

示例2：几何数据的插入。

```
openGauss=# INSERT INTO cities (id, position, city_name) VALUES (1,ST_GeomFromText('POINT(-9.5 23)',4326),'CityA');
openGauss=# INSERT INTO cities (id, position, city_name) VALUES (2,ST_GeomFromText('POINT(-10.6 40.3)',4326),'CityB');
openGauss=# INSERT INTO cities (id, position, city_name) VALUES (3,ST_GeomFromText('POINT(20.8 30.3)',4326), 'CityC');
```

示例3：计算三个城市间任意两个城市距离。

```
openGauss=# SELECT p1.city_name,p2.city_name,ST_Distance(p1.position,p2.position) FROM cities AS p1, cities AS p2 WHERE p1.id > p2.id;
```

### 删除Extension<a name="section1587441381220"></a>

在openGauss中删除PostGIS Extension的方法如下所示：

```
openGauss=# DROP Extension postgis [CASCADE];
```

>[!NOTE]说明
>
>如果Extension被其它对象依赖（如创建的几何表），需要加入CASCADE（级联）关键字，删除所有依赖对象。

若要完全删除PostGIS Extension，则需由omm用户使用gs\_om工具移除PostGIS及其依赖的动态链接库，格式如下：

```
gs_om -t postgis -m rmlib
```

## PostGIS支持和限制

### 支持数据类型<a name="section59521232327"></a>

openGauss的PostGIS Extension支持如下数据类型：

- box2d
- box3d
- geometry\_dump
- geometry
- geography

### 支持的操作符和函数列表<a name="section1198813519310"></a>

**表 1** **PostGIS Extension支持的操作符和函数列表**

<a name="table18970162111535"></a>
<table><thead align="left"><tr id="row99711021145319"><th class="cellrowborder" valign="top" width="21.15%" id="mcps1.2.3.1.1"><p id="p149718214536"><a name="p149718214536"></a><a name="p149718214536"></a><b>函数分类</b></p>
</th>
<th class="cellrowborder" valign="top" width="78.85%" id="mcps1.2.3.1.2"><p id="p1897112175318"><a name="p1897112175318"></a><a name="p1897112175318"></a><b>包含函数</b></p>
</th>
</tr>
</thead>
<tbody><tr id="row14971152165319"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p203181644115312"><a name="p203181644115312"></a><a name="p203181644115312"></a>Management Functions</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p497162116533"><a name="p497162116533"></a><a name="p497162116533"></a>AddGeometryColumn、DropGeometryColumn、DropGeometryTable、PostGIS_Full_Version、PostGIS_GEOS_Version、PostGIS_Liblwgeom_Version、PostGIS_Lib_Build_Date、PostGIS_Lib_Version、PostGIS_PROJ_Version、PostGIS_Scripts_Build_Date、PostGIS_Scripts_Installed、PostGIS_Version、PostGIS_LibXML_Version、PostGIS_Scripts_Released、Populate_Geometry_Columns 、UpdateGeometrySRID</p>
</td>
</tr>
<tr id="row1797192135316"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p1055125895312"><a name="p1055125895312"></a><a name="p1055125895312"></a>Geometry Constructors</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p7971321155318"><a name="p7971321155318"></a><a name="p7971321155318"></a>ST_BdPolyFromText 、ST_BdMPolyFromText 、ST_Box2dFromGeoHash、ST_GeogFromText、ST_GeographyFromText、ST_GeogFromWKB、ST_GeomCollFromText、ST_GeomFromEWKB、ST_GeomFromEWKT、ST_GeometryFromText、ST_GeomFromGeoHash、ST_GeomFromGML、ST_GeomFromGeoJSON、ST_GeomFromKML、ST_GMLToSQL、ST_GeomFromText 、ST_GeomFromWKB、ST_LineFromMultiPoint、ST_LineFromText、ST_LineFromWKB、ST_LinestringFromWKB、ST_MakeBox2D、ST_3DMakeBox、ST_MakeEnvelope、ST_MakePolygon、ST_MakePoint、ST_MakePointM、ST_MLineFromText、ST_MPointFromText、ST_MPolyFromText、ST_Point、ST_PointFromGeoHash、ST_PointFromText、ST_PointFromWKB、ST_Polygon、ST_PolygonFromText、ST_WKBToSQL、ST_WKTToSQL</p>
</td>
</tr>
<tr id="row297113213531"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p749821415413"><a name="p749821415413"></a><a name="p749821415413"></a>Geometry Accessors</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p697142115532"><a name="p697142115532"></a><a name="p697142115532"></a>GeometryType、ST_Boundary、ST_CoordDim、ST_Dimension、ST_EndPoint、ST_Envelope、ST_ExteriorRing、ST_GeometryN、ST_GeometryType、ST_InteriorRingN、ST_IsClosed、ST_IsCollection、ST_IsEmpty、ST_IsRing、ST_IsSimple、ST_IsValid、ST_IsValidReason、ST_IsValidDetail、ST_M、ST_NDims、ST_NPoints、ST_NRings、ST_NumGeometries、ST_NumInteriorRings、ST_NumInteriorRing、ST_NumPatches、ST_NumPoints、ST_PatchN、ST_PointN、ST_SRID、ST_StartPoint、ST_Summary、ST_X、ST_XMax、ST_XMin、ST_Y、ST_YMax、ST_YMin、ST_Z、ST_ZMax、ST_Zmflag、ST_ZMin</p>
</td>
</tr>
<tr id="row1997102165319"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p796118260543"><a name="p796118260543"></a><a name="p796118260543"></a>Geometry Editors</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p1097115214532"><a name="p1097115214532"></a><a name="p1097115214532"></a>ST_AddPoint、ST_Affine、ST_Force2D、ST_Force3D、ST_Force3DZ、ST_Force3DM、ST_Force4D、ST_ForceCollection、ST_ForceSFS、ST_ForceRHR、ST_LineMerge、ST_CollectionExtract、ST_CollectionHomogenize、ST_Multi、ST_RemovePoint、ST_Reverse、ST_Rotate、ST_RotateX、ST_RotateY、ST_RotateZ、ST_Scale、ST_Segmentize、ST_SetPoint、ST_SetSRID、ST_SnapToGrid、ST_Snap、ST_Transform、ST_Translate、ST_TransScale</p>
</td>
</tr>
<tr id="row1297132115534"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p3121194017543"><a name="p3121194017543"></a><a name="p3121194017543"></a>Geometry Outputs</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p197132120536"><a name="p197132120536"></a><a name="p197132120536"></a>ST_AsBinary、ST_AsEWKB、ST_AsEWKT、ST_AsGeoJSON、ST_AsGML、ST_AsHEXEWKB、ST_AsKML、ST_AsLatLonText 、ST_AsSVG、ST_AsText、ST_AsX3D、ST_GeoHash</p>
</td>
</tr>
<tr id="row19971182117536"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p41350135414"><a name="p41350135414"></a><a name="p41350135414"></a>Operators</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p1297142155317"><a name="p1297142155317"></a><a name="p1297142155317"></a>&amp;&amp;、&amp;&amp;&amp;、&amp;&lt;、&amp;&lt;|、&amp;&gt;、&lt;&lt;、&lt;&lt;|、=、&gt;&gt;、@ 、|&amp;&gt; 、|&gt;&gt;、~、~=、&lt;-&gt;、&lt;#&gt;</p>
</td>
</tr>
<tr id="row12971182115314"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p149711221175319"><a name="p149711221175319"></a><a name="p149711221175319"></a>Spatial Relationships and Measurements</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p6971421155314"><a name="p6971421155314"></a><a name="p6971421155314"></a>ST_3DClosestPoint、ST_3DDistance、ST_3DDWithin、ST_3DDFullyWithin、ST_3DIntersects、ST_3DLongestLine、ST_3DMaxDistance、ST_3DShortestLine、ST_Area、ST_Azimuth、ST_Centroid、ST_ClosestPoint、ST_Contains、ST_ContainsProperly、ST_Covers、ST_CoveredBy、ST_Crosses、ST_LineCrossingDirection、ST_Disjoint、ST_Distance、ST_HausdorffDistance、ST_MaxDistance、ST_DistanceSphere、ST_DistanceSpheroid、ST_DFullyWithin、ST_DWithin、ST_Equals、ST_HasArc、ST_Intersects、ST_Length、ST_Length2D、ST_3DLength、ST_Length_Spheroid、ST_Length2D_Spheroid、ST_3DLength_Spheroid、ST_LongestLine、ST_OrderingEquals、ST_Overlaps、ST_Perimeter、ST_Perimeter2D、ST_3DPerimeter、ST_PointOnSurface、ST_Project、ST_Relate、ST_RelateMatch、ST_ShortestLine、ST_Touches、ST_Within</p>
</td>
</tr>
<tr id="row2971112115316"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p620562615557"><a name="p620562615557"></a><a name="p620562615557"></a>Geometry Processing</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p15971421115310"><a name="p15971421115310"></a><a name="p15971421115310"></a>ST_Buffer、ST_BuildArea、ST_Collect、ST_ConcaveHull、ST_ConvexHull、ST_CurveToLine、ST_DelaunayTriangles、ST_Difference、ST_Dump、ST_DumpPoints、ST_DumpRings、ST_FlipCoordinates、ST_Intersection、ST_LineToCurve、ST_MakeValid、ST_MemUnion、ST_MinimumBoundingCircle、ST_Polygonize、ST_Node、ST_OffsetCurve、ST_RemoveRepeatedPoints、ST_SharedPaths、ST_Shift_Longitude、ST_Simplify、ST_SimplifyPreserveTopology、ST_Split、ST_SymDifference、ST_Union、ST_UnaryUnion</p>
</td>
</tr>
<tr id="row697122195317"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p1511184455511"><a name="p1511184455511"></a><a name="p1511184455511"></a>Linear Referencing</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p9971921165313"><a name="p9971921165313"></a><a name="p9971921165313"></a>ST_LineInterpolatePoint、ST_LineLocatePoint、ST_LineSubstring、ST_LocateAlong、ST_LocateBetween、ST_LocateBetweenElevations、ST_InterpolatePoint、ST_AddMeasure</p>
</td>
</tr>
<tr id="row2971172165312"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p1397118218530"><a name="p1397118218530"></a><a name="p1397118218530"></a>Miscellaneous Functions</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p1697182135318"><a name="p1697182135318"></a><a name="p1697182135318"></a>ST_Accum、Box2D、Box3D、ST_Expand、ST_Extent、ST_3Dextent、Find_SRID、ST_MemSize</p>
</td>
</tr>
<tr id="row6971721205312"><td class="cellrowborder" valign="top" width="21.15%" headers="mcps1.2.3.1.1 "><p id="p797162111538"><a name="p797162111538"></a><a name="p797162111538"></a>Exceptional Functions</p>
</td>
<td class="cellrowborder" valign="top" width="78.85%" headers="mcps1.2.3.1.2 "><p id="p5971102115535"><a name="p5971102115535"></a><a name="p5971102115535"></a>PostGIS_AddBBox、PostGIS_DropBBox、PostGIS_HasBBox</p>
</td>
</tr>
</tbody>
</table>

### 空间索引<a name="section2993751311"></a>

openGauss数据库的PostGIS Extension支持GIST \(Generalized Search Tree\) 空间索引（分区表除外）。相比于B-tree索引，GIST索引适应于任意类型的非常规数据结构，可有效提高几何和地理数据信息的检索效率。

使用如下命令创建GIST索引：

```
openGauss=# CREATE INDEX indexname ON tablename USING GIST ( geometryfield );
```

### 扩展限制<a name="section13902113312416"></a>

- 只支持行存表。
- 不支持拓扑对象管理模块Topology和栅格数据处理模块Raster。
- 不支持BRIN索引。
- spatial\_ref\_sys表在扩容期间只支持查询操作。
