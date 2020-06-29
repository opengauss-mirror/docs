# pg\_config<a name="EN-US_TOPIC_0249632265"></a>

## Function<a name="en-us_topic_0237152437_section88358281478"></a>

**pg\_config**  is used to print the configuration parameters of the installed database, which helps find the header file and library corresponding to the software package connected to the database.

## Syntax<a name="en-us_topic_0237152437_section1370013416265"></a>

```
pg_config [option...]
```

## Parameter Description<a name="en-us_topic_0237152437_section527434312916"></a>

The  **pg\_config**  tool supports one or more of the following options. If more than one option is provided, the information is printed in sequence. Each line contains one option. If no option is given, all available information is printed with the label.

-   --bindir

    Prints the path of the executable file of a user. For example, you can use this option to find the  **psql**  program. Generally, this is the path of the  **pg\_config**  program.


-   --docdir

    Prints the location of a document.


-   --htmldir

    Prints the location of the HTML file.


-   --includedir

    Prints the path of the C header file of the client interface.


-   --pkgincludedir

    Prints the location of other C header files.


-   --includedir-server

    Prints the location of the C header files used for server programming.


-   --libdir

    Prints the path of the target code library.


-   --pkglibdir

    Prints the location of dynamically loaded modules, or where the server looks for them. Data files related to other systems may also be stored in this directory.


-   --localedir

    Prints the location of the locale support file. If the locale support is not configured when the database is compiled, the value is an empty string.


-   --mandir

    Prints the location of the manual page.


-   --sharedir

    Prints the location of system-independent support files.


-   --sysconfdir

    Prints the location of the system-wide configuration file.


-   --pgxs

    Prints the location of the extended makefiles file.


-   --configure

    Prints the options passed to the configure script during configuration and database compilation. The options are used to copy the same configuration or find out which options are used to compile the binary package. However, note that binary packages usually contain vendor-provided patches.


-   --cc

    Prints the values of the CC variables used to compile the database. This option displays the C compiler in use.


-   --cppflags

    Prints the value of the  _CPPFLAGS_  variable used to compile the database. This option displays the C compiler switch \(usually  **-I**\) needed for preprocessing.


-   --cflags

    Prints the value of the  _CFLAGS_  variable used during database compilation. This option displays the C compiler switch.


-   --cflags\_sl

    Prints the value of the  _CFLAGS\_SL_  variable used during database compilation. This option shows the additional C compiler switch for compiling the shared library.


-   --ldflags

    Prints the value of the  _LDFLAGS_  variable used during database compilation. It shows the linker's switch.


-   --ldflags\_ex

    Prints the value of the  _LDFLAGS\_EX_  variable used to create the database. This shows the linker switch for building executable files.


-   --ldflags\_sl

    Prints the value of the  _LDFLAGS\_SL_  variable used during database compilation. It shows the switch of the linker used to compile the shared library.


-   --libs

    Prints the value of the  _LIBS_  variable used during database compilation. It usually contains the  **-l**  switch of the external library connected to the database.


-   --version

    Prints the database version.


-   -?, --help

    Displays help information about  **pg\_config**  command parameters and exits.


