# Installing PostGIS<a name="EN-US_TOPIC_0000001201117578"></a>

You can obtain the PostGIS Extension source code package from  [https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz](https://opengauss.obs.cn-south-1.myhuaweicloud.com/dependency/postgis-xc-master-2020-09-17.tar.gz). PostGIS Extension needs to be compiled and installed by using GCC 7.3. GCC is short for GNU Compiler Collection.

-   During the installation, you can run the  **make    -sj**  and  **make install -sj**  commands to accelerate the compilation. There is a low probability that an installation error occurs when you run the  **-sj**  command. If such an error occurs and the installation fails, run the  **make**  and  **make install**  commands to perform serial installation.
-   Add the following compilation parameter when configuring an ARM-based physical machine:  **--build=aarch64-unknown-linux-gnu**.

## Procedure<a name="section193783420183"></a>

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

    2.  Download the patch file from https://gitee.com/opengauss/openGauss-third\_party/blob/master/gpl\_dependency/postgis/postgis\_2.4.2-2.patch. Save the patch file to the *$GAUSSHOME* directory and install the patch.

        ```
        cd $GAUSSHOME/postgis-xc/
        patch -p1 < $GAUSSHOME/postgis_2.4.2-2.patch 
        ```

    3.  Download the header file on which PostGIS depends from https://gitee.com/opengauss/openGauss-third\_party/blob/master/gpl\_dependency/postgis/extension\_dependency.h. Save the header file to *$GAUSSHOME***/include/postgresql/server/**.

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

            If make-sj reports a missing openGauss header, For details, see the postgis installation document in the third_party repository https://gitee.com/opengauss/openGauss-third_party/tree/master/gpl_dependency/postgis, such as lack of: h storage/file/fio_device.h storage/file/fio_device_com.h ddes/dms/ss_aio.h ddes/dms/ss_dms_recovery.h h ddes/dms/ss_common_attr.h ddes/dms/ss_init.h storage/dss/dss_api_def.h) Names of the seven header files. Copy it to the compiled and installed database in the dest/include directory.

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
