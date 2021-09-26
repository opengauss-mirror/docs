# Ispell词典<a name="ZH-CN_TOPIC_0289900767"></a>

Ispell词典模板支持词法词典，它可以把一个词的各种语言学形式规范化成相同的词位。比如，一个Ispell英语词典可以匹配搜索词bank的词尾变化和词形变化，如banking、banked、banks、banks'和bank's等。

openGauss不提供任何预定义的Ispell类型词典或词典文件。dict文件和affix文件支持多种开源词典格式，包括Ispell、MySpell和Hunspell等。

## 操作步骤<a name="zh-cn_topic_0283136907_zh-cn_topic_0237122039_section737061503610"></a>

1.  获取词典定义文件和词缀文件。

    用户可以使用开源词典，直接获取的开源词典后缀名可能为.aff和.dic，此时需要将扩展名改为.affix和.dict。此外，对于某些词典文件，还需要使用下面的命令把字符转换成UTF-8编码，比如挪威语词典：

    ```
    iconv -f ISO_8859-1 -t UTF-8 -o nn_no.affix nn_NO.aff 
    iconv -f ISO_8859-1 -t UTF-8 -o nn_no.dict nn_NO.dic
    ```

2.  创建Ispell词典。

    ```
    openGauss=# CREATE TEXT SEARCH DICTIONARY norwegian_ispell (
        TEMPLATE = ispell,
        DictFile = nn_no,
        AffFile = nn_no,
        FilePath = 'file:///home/dicts'
    );
    ```

    其中，词典文件全名为nn\_no.dict和nn\_no.affix，所在目录为当前连接数据库主节点的/home/dicts/下 。关于创建词典的语法和更多参数，请参见[CREATE TEXT SEARCH DICTIONARY](CREATE-TEXT-SEARCH-DICTIONARY.md)。

3.  使用Ispell词典进行复合词拆分。

    ```
    openGauss=# SELECT ts_lexize('norwegian_ispell', 'sjokoladefabrikk');
          ts_lexize      
    ---------------------
     {sjokolade,fabrikk}
    (1 row)
    
    ```

    MySpell不支持复合词，Hunspell对复合词有较好的支持。openGauss仅支持Hunspell中基本的复合词操作。通常情况下，Ispell词典能够识别的词是一个有限集合，其后应该配置一个更广义的词典，例如一个可以识别所有词的Snowball词典。

