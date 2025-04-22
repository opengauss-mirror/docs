# 兼容性评估

## 工具介绍

openGauss兼容性评估工具，支持从多个场景下获取sql语句进行兼容性评估，并输出评估报告。

1. SQL输入类型选择file，则上传.zip文件，文件类型包括：SQL文件、MySQL数据库生成的general log日志、MySQL数据库生成的slow log日志、mybatis的.xml映射文件。

2. SQL输入类型选择collect，则直接连接到待评估数据库上采集SQL，需要填写待评估数据库信息。

3. SQL输入类型选择Attach_Application，则需要选择被附着进程任务获取SQL。

## 使用指导

### 评估前准备

在进行评估前，需要安装openGauss数据库节点，并保证该节点能加载到assessment插件，可选插件为dolphin插件。

社区提供的数据库构建包中已包含对应插件。若需要手动编译插件，可参考

https://gitcode.com/opengauss/Plugin/tree/master/contrib/assessment


### 注意事项

1. 评估sql文件，文件中的sql以分号加回车分隔。若sql本身包含分号，限制在sql语句前后加上delimiter //和delimiter ;以保证正确解析sql语句。示例：

    ```
    select * from t1;
    select * from t2;
    delimiter //
    create procedure showWebsite1() begin select * from website; end
    delimiter ;
    ```

2. 从mybatis的mapper文件中提取sql，原始xml文件中占位符#{}使用$1,$2...进行替换，占位符${field}直接替换为filed。对于动态sql标签，沿用mybatis原本的提取规则，但并不对动态标签属性进行类型的校验，仅提取静态sql片段。提取规则及举例如下：

    1. foreach标签
    
       ```
       <select id="queryDataByIds" resultType="com.wang.test.demo.entity.User">
          select * from user where id in
           <foreach collection="list" item="item" open="(" separator="," close=")">
               #{item}
           </foreach>
       </select>
       ```
       
       ```
       提取结果：select * from user where id in ($0)
       ```
    
    2. if标签
    
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
       ```
       
       ```
       提取结果：select * from user where stage = 'A' and age = $0 and name = $1
       ```
    
   3. choose、when、otherwise标签
    
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
       ```
       
       ```
       提取结果：select * from user where age = $1
       ```
