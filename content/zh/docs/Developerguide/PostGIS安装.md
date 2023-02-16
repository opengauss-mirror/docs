# PostGIS安装<a name="ZH-CN_TOPIC_0000001201117578"></a>

PostGIS Extension源码包可通过网站[https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz](https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz)获取。该Extension需使用GCC-7.3（GNU编译器套件）进行编译安装。

-   在整个安装过程中，可使用make    -sj和make install -sj命令并行加速编译，-sj命令极低概率性出现安装错误，如果安装失败则请使用make和make install进行串行安装。
-   对于ARM物理机，在configure时增加如下编译参数：--build=aarch64-unknown-linux-gnu。

## 操作步骤<a name="section193783420183"></a>

1.  GCC-7.3（GNU编译器套件）编译器安装。若数据库实例中已经安装GCC-7.3编译器，可直接跳过本步骤。

    PostGIS安装依赖GCC-7.3编译器。GCC-7.3编译器推荐使用源码由低版本的gcc和g++编译器进行升级安装。若数据库实例中没有低版本gcc和g++编译器，可以通过挂载操作系统镜像等方法进行安装，这里不做赘述。GCC-7.3编译器相关依赖软件包，包括gcc-7.3.0、gmp-6.1.0、mpfr-3.1.4、mpc-1.0.3，安装包下载地址分别为：

    https://ftp.gnu.org/gnu/gcc/gcc-7.3.0/gcc-7.3.0.tar.gz

    https://ftp.gnu.org/gnu/gmp/gmp-6.1.0.tar.xz

    https://ftp.gnu.org/gnu/mpfr/mpfr-3.1.4.tar.gz

    https://ftp.gnu.org/gnu/mpc/mpc-1.0.3.tar.gz

    为了校验安装包的完整性，请同时下载安装包的同名的.sig文件和keyring文件：

    https://ftp.gnu.org/gnu/gcc/gcc-7.3.0/gcc-7.3.0.tar.gz.sig

    https://ftp.gnu.org/gnu/gmp/gmp-6.1.0.tar.xz.sig

    https://ftp.gnu.org/gnu/mpfr/mpfr-3.1.4.tar.gz.sig

    https://ftp.gnu.org/gnu/mpc/mpc-1.0.3.tar.gz.sig

    https://ftp.gnu.org/gnu/gnu-keyring.gpg

    并使用以下命令验证安装包完整性。

    ```
    gpg --verify --keyring ./gnu-keyring.gpg your_package_name.sig
    ```

    如果提示信息中出现Good signature from XXX则说明安装包完整。

    1).  以操作系统用户omm登录数据库任一主机。

    2).  创建GCC安装主目录$GAUSSHOME/gcc和代码下载目录$GAUSSHOME/gcc/packages，并下载软件包gcc-7.3.0.tar.gz、gmp-6.1.0.tar.xz、mpc-1.0.3.tar.gz、mpfr-3.1.4.tar.gz至\$GAUSSHOME/gcc/packages目录。

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

    5).  安装gmp-4.3.2。

    进入$GAUSSHOME/gcc/packages/gmp-6.1.0目录，执行下列命令完成gmp安装操作:

    ```
    cd $GAUSSHOME/gcc/packages/gmp-6.1.0
    ./configure --prefix $GAUSSHOME/gcc/gcc-7.3.0/depend/gmp-4.3.2
    make -sj
    make install -sj
    ```

    6).  安装mpfr-2.4.2。

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

2.  确认zlib已安装。

    Libxml2软件包编译安装依赖zlib无损数据压缩库。omm用户可执行find /usr/ -name libz.a（或者执行find $GAUSSHOME/ -name libz.so）查看zlib是否安装\(如果libz.a存在则zlib已安装\)。

    zlib在数据库安装时已默认安装。若查看到zlib未安装，可从网站[https://sourceforge.net/projects/libpng/files/zlib/1.2.8/zlib-1.2.8.tar.gz/download](https://sourceforge.net/projects/libpng/files/zlib/1.2.8/zlib-1.2.8.tar.gz/download)下载并安装。

    安装成功后，可以在/usr/local/lib下找到libz.a。

3.  autoconf和automake安装。JSON-C软件包编译安装依赖autoconf和automake工具。若数据库实例中没有autoconf和automake工具，可以通过挂载操作系统镜像等方法进行安装，这里不做赘述。
4.  PostGIS依赖库安装。

    1).  从网站[https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz](https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz)获取PostGIS源码至$GAUSSHOME目录，下载压缩包，解压后需将文件夹重命名为postgis-xc。

    2).  从网站https://gitee.com/opengauss/openGauss-third\_party/blob/master/gpl\_dependency/postgis/postgis\_2.4.2-2.patch 下载补丁文件到$GAUSSHOME目录，并打入补丁。

    ```
    cd $GAUSSHOME/postgis-xc/
    patch -p1 < $GAUSSHOME/postgis_2.4.2-2.patch 
    ```

    3).  从网站https://gitee.com/opengauss/openGauss-third\_party/blob/master/gpl\_dependency/postgis/extension\_dependency.h 下载postgis依赖头文件到$GAUSSHOME/include/postgresql/server/。 

    4).  分别编译Geos、Proj、JSON-C、Libxml2、PostGIS并生成相关动态链接库。编译命令为：

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

        对于ARM操作系统，则需使用如下configure命令：

        ```
        ./configure --prefix=$GAUSSHOME/install/libxml2 --build=aarch64-unknown-linux-gnu 
        ```

    -   PostGIS

        ```
        cd $GAUSSHOME/postgis-xc/postgis-2.4.2
        chmod +x ./configure
        ./configure --prefix=$GAUSSHOME/install/postgis2.4.2 --with-pgconfig=$GAUSSHOME/bin/pg_config --with-projdir=$GAUSSHOME/install/proj --with-geosconfig=$GAUSSHOME/install/geos/bin/geos-config --with-jsondir=$GAUSSHOME/install/json  --with-xml2config=$GAUSSHOME/install/libxml2/bin/xml2-config   --without-raster --without-topology CFLAGS='-O2 -fpermissive -DPGXC  -pthread -D_THREAD_SAFE -D__STDC_FORMAT_MACROS -DMEMORY_CONTEXT_CHECKING -w'  CC=g++
        make -sj
        make install -sj
        ```

        如果编译出现类似/home/carrot/data/openGauss-server/third\_party/buildtools/gcc/res/lib64/libstdc++.la 找不到，可以自建目录，将libstdc++.la拷贝进去，然后再make -sj（如果libstdc++.so出现类似问题，按同样方法处理）。

    5).  omm用户执行下面的语句，完成PostGIS相关动态链接库在数据库实例节点中的分发。

    ```
    mv $GAUSSHOME/lib/postgresql/postgis-2.4.so $GAUSSHOME/install/postgis-2.4.so python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/postgis-2.4.so $GAUSSHOME/lib/postgresql/postgis-2.4.so python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/json/lib/libjson-c.so.2 $GAUSSHOME/lib/libjson-c.so.2 python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/geos/lib/libgeos_c.so.1 $GAUSSHOME/lib/libgeos_c.so.1 python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/proj/lib/libproj.so.9 $GAUSSHOME/lib/libproj.so.9 python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/geos/lib/libgeos-3.6.2.so $GAUSSHOME/lib/libgeos-3.6.2.so python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/install/postgis2.4.2/lib/liblwgeom-2.4.so.0 $GAUSSHOME/lib/liblwgeom-2.4.so.0 python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/postgis-xc/postgis-2.4.2/postgis--2.4.2.sql $GAUSSHOME/share/postgresql/extension/postgis--2.4.2.sql python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/postgis-xc/postgis-2.4.2/postgis.control $GAUSSHOME/share/postgresql/extension/postgis.control python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/bin/pgsql2shp $GAUSSHOME/bin/pgsql2shp python $GAUSSHOME/bin/transfer.py 1 $GAUSSHOME/bin/shp2pgsql $GAUSSHOME/bin/shp2pgsql
    ```

    动态链接库分发脚本执行完毕后，可执行下列命令删除$GAUSSHOME/postgis安装目录。

    ```
    rm -rf $GAUSSHOME/postgis-xc
    ```

    若用户不想保留GCC5.4编译器，可删除GCC5.4安装目录并在\~/.bashrc文件中删除安装GCC5.4时添加的环境配置信息。

    ```
    rm -rf $GAUSSHOME/gcc
    ```

    6).  重启数据库实例。

    ```
    gs_om -t stop && gs_om -t start
    ```



