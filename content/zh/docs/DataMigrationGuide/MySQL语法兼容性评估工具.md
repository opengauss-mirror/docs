# MySQL语法兼容性评估工具

#### 工具介绍

openGauss兼容性评估工具，支持从多个场景下获取sql语句进行兼容性评估，并输出评估报告。

- 支持从mysql端采集sql语句，支持从mysql端采集以下几种sql类型：

  - 对象定义语句（DDL）。

  - 慢sql语句。此类sql通过查询mysql.slow_log表获得，需要用户开启慢sql记录至该表中。

  -  全量sql语句。此类sql通过查询mysql.general_log表获得，同样需要用户开启general log记录至该表中。

- 支持从文件中获取sql语句，支持以下几种文件类型：

  - sql文件。

  - mysql数据库生成的general log日志。

  -  mysql数据库生成的slow log日志。

  -  mybatis映射文件。

评估报告中会展示每条sql语句的兼容性详情，包括完全兼容、语法兼容、不兼容、不支持评估。具体介绍参考兼容性评估插件：
 https://gitee.com/opengauss/Plugin/tree/master/contrib/assessment

社区提供兼容性评估工具软件包地址：
https://opengauss.obs.cn-south-1.myhuaweicloud.com/latest/tools/compatibility-assessment-5.1.0.tar.gz

#### 源码安装

通过git命令下载源代码：

```
git clone https://gitee.com/opengauss/compatibility-assessment.git
```

进入compatibility-assessment目录，执行sh build.sh进行编译获得可执行jar包compatibility-assessment-5.1.0-exec.jar。

java版本：open JDK11及以上

maven版本：3.6.3及以上

#### 评估前准备

在进行评估前，需要安装openGauss数据库节点，并保证该节点能加载到assessment插件，可选插件为dolphin插件。

若在评估时指定评估库，则需要提前创建好评估库。创建评估库的步骤示例：

```
create database assessment_db dbcompatibility 'B';
\c assessment_db;
create extension assessment;
```

社区提供的数据库二进制包中已包含对应插件。若需要手动编译插件，可参考

https://gitee.com/opengauss/Plugin/tree/master/contrib/assessment

#### 注意事项

1、评估sql文件，文件中的sql以分号加回车分隔。若sql本身包含分号，限制在sql语句前后加上delimiter //和delimiter ;以保证正确解析sql语句。示例：

```
select * from t1;
select * from
t2;
delimiter //
create procedure showWebsite1() begin select * from website; end
delimiter ;
```

2、从mybatis的mapper文件中提取sql，原始xml文件中占位符#{}使用$1,$2...进行替换，占位符${field}直接替换为filed。对于动态sql标签，沿用mybatis原本的提取规则，但并不对动态标签属性进行类型的校验，仅提取静态sql片段。提取规则及举例如下：

- #####  foreach标签

```
<select id="queryDataByIds" resultType="com.wang.test.demo.entity.User">
   select * from user where id in
    <foreach collection="list" item="item" open="(" separator="," close=")">
        #{item}
    </foreach>
</select>
提取结果：select * from user where id in ($0)
```

- #####  if标签

对if标签的提取规则为：将每个if标签中的sql片段提取后进行拼接得到最终的sql。

```
<select id="queryDataBySearch" resultType="com.wang.test.demo.entity.User">
   select * from user
   where stage = 'A'
   <if test="age != null and age != ''">
       and age =#{age}
   </if>
   <if test="name != null and name != ''">
       and name =#{name}
   </if>
</select>
提取结果：select * from user where stage = 'A' and age = $0 and name = $1
```

- ##### choose、when、otherwise标签

提取choose标签中首个when标签的内容。

```
<select id="queryDataBySearchNew" resultType="com.wang.test.demo.entity.User">
    select * from user
    <where>
        <choose>
            <when test="age != null and age != ''">
                and age =#{age}
            </when>
            <when test="name != null and name != ''">
                and name =#{name}
            </when>
            <otherwise>
                stage = 'A'
            </otherwise>
        </choose>
    </where>
</select>
提取结果：select * from user where age = $1
```

3、配置文件中opengauss端的用户名不能为数据库初始用户，因为opengauss端禁止使用数据库初始用户进行远程连接。

#### 使用说明

社区提供的兼容性评估工具软件包解压后包含start.sh，compatibility-assessment-5.1.0.jar和assessment.properties三个文件，分别为工具启动脚本，可执行jar包以及配置模板文件。

评估使用如下命令启动：

```
sh start.sh -d [file|collect] -c assessment.properties -o report.html
```

上述命令中，-d用于指定sql语句来源。file表示sql以文件形式输入，collect表示从mysql端采集数据。两种输入形式均需要在配置文件中配置相关的信息。

-c用于指定配置文件路径，该参数为可选。若不指定，则默认使用当前目录下的assessment.properties作为配置文件。

-o用于指定输出报告文件，该参数为可选。报告文件必须为.html格式，若不指定，则默认在当前路径下生成report.html文件。

不同输入形式下，配置文件使用方法如下：

- 若sql以文件形式出入(-d file)，需要配置输入文件的目录，示例如下：

  ```
  filedir = /data/testfiles/
  
  #opengauss端数据库用户，禁止使用数据库初始用户
  opengauss.user = opengauss
  opengauss.password = **********
  opengauss.port = 5432
  opengauss.host = 127.0.0.1
  #指定评估库
  opengauss.dbname = assessment_db
  
  #指定评估库和提供操作系统用户名和密码二选一
  osuser = opengauss_init_user
  ospassword = ***********
  ```

  配置完成配置文件后，通过执行如下命令进行评估：

  ```
  sh start.sh -d file -c assessment.properties -o report.html
  ```

  工具支持四种类型的输入文件，将不同类型的文件放入指定的目录下，工具扫描目录并通过后缀对文件类型进行识别，sql文件、general log日志、slow log日志、mybatis映射文件对应的后缀分别为：.sql， .general，.slow，.xml。为了区分general log日志和slow log日志，目前需要手动修改文件后缀名以便工具自动识别。

- 若从mysql数据库端采集sql(-d collect)，需要在配置文件中指定评估类型，sql语句类型以及mysql数据库信息。示例如下：

  ```
  #评估类型，object:对象评估; sql：评估sql语句; all: 同时进行对象评估和sql语句评估。
  assessmenttype = sql
  #sql类型， slow：评估慢sql; general：评估全量sql。该参数仅需要在assessmenttype为sql或all时指定，用于表示需进行评估的sql语句类型
  sqltype = slow
  
  mysql.password = ********
  mysql.user = mysql
  mysql.port = 3389
  mysql.host = 127.0.0.1
  #通过mysql数据库端获取sql时，需指定mysql端的库名
  mysql.dbname = test
  
  opengauss.user = opengauss
  opengauss.password = ***********
  opengauss.port = 5432
  opengauss.host = 127.0.0.1
  opengauss.dbname = assessment_db
  
  #指定评估库和提供操作系统用户名和密码二选一
  osuser = omm
  ospassword = *********
  ```

  配置完成配置文件后，通过执行如下命令进行评估：

  ```
  sh start.sh -d collect -c assessment.properties -o report.html
  ```

  进行评估之前，用户可以手动创建好评估库，然后通过opengauss.dbname指定评估库；或者用户不指定评估库，通过提供数据库节点所在主机的操作系统用户名和密码，由工具自动创建评估库，工具自动创建评估库是通过ssh远程登陆到对应主机，并通过gsql连接到数据库节点，然后创建对应的评估库，所以使用这种方式进行评估时，用户需要保证osuser登录主机时能自动加载到数据库环境变量。当opengauss.dbname和(osuser, ospassword)同时指定时，会优先使用opengauss.dbname指定的库作为评估库。

