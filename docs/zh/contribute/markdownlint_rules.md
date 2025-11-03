# markdownlint 检查规则

本文介绍了 markdownlint v0.12.0 版本规则以及 openGauss Docs 仓的规则设置，参照依据 <https://github.com/markdownlint/markdownlint/blob/v0.12.0/docs/RULES.md> 。对 markdownlint 规则有任何疑问或交流，请联系 wu-donger[@Evawudonger](https://gitcode.com/Evawudonger)。

## markdownlint 介绍

markdownlint 是一款检查 Markdown 文件格式的工具，可以根据设置的规则对 Markdown 文件进行全面的检查。文档写作时可以借助 VSCode 等工具的 markdownlint 插件修复格式问题。

## openEuler docs 仓规则设置

- openEuler 规则采用如下方案：

    - MD003 (标题样式) 规则将参数 `style`设置为`atx`。
    - MD029（有序列表的前缀序号）规则将参数`style`设置为`ordered`。
    - 屏蔽 MD004（无序列表）这条规则。
    - 屏蔽 MD007（无序列表缩进）这条规则。
    - 屏蔽 MD009（行尾空格）这条规则。
    - 屏蔽 MD013（行的长度）这条规则。
    - 屏蔽 MD014（命令前使用\$而不显示输出）这条规则。
    - 屏蔽 MD020（closed atx样式的标题内没有空格）这条规则。
    - 屏蔽 MD021（closed atx样式的标题内有多个空格）这条规则。
    - 屏蔽 MD024（不能有重复内容的标题）这条规则。
    - 屏蔽 MD025 （文档中有多个顶级标题）这条规则。
    - 屏蔽 MD027（块引用符号后的多个空格）这条规则。
    - 屏蔽 MD033（内联HTML）这条规则。
    - 屏蔽 MD036（使用强调标记代替标题）这条规则。
    - 屏蔽 MD046（代码块样式）这条规则。

- ruby 文件的书写方式如下：

   ```bash
   all
   rule 'MD003', :style => :atx
   rule 'MD029', :style => :ordered
   exclude_rule 'MD004'
   exclude_rule 'MD007'
   exclude_rule 'MD009'
   exclude_rule 'MD013'
   exclude_rule 'MD014'
   exclude_rule 'MD020'
   exclude_rule 'MD021'
   exclude_rule 'MD024'
   exclude_rule 'MD025'
   exclude_rule 'MD027'
   exclude_rule 'MD033'
   exclude_rule 'MD036'
   exclude_rule 'MD046'
   ```

## 规则介绍

### MD001 - 标题级别一次只能增加一个级别

- **错误示例**

  ```text
  # Header1

  ### Header3
  ```

- **正确示例**

  ```text
  # Header1

  ## Header2

  ### Header3

  #### Header4
  ```

### MD002 - 第一个标题应该是顶层标题

- **参数**

    - `level`：指定最高级标题的级数，默认值是1。
- **错误示例**

  ```text
  ## This is not a H1 header

  ### Another header
  ```

- **正确示例**

  ```text
  # Start with a H1 header

  ## Then use a H2 for subsections
  ```

### MD003 - 标题样式

- **参数**

    - `style`：指定文档标题的样式，有 `consistent`、`atx`、`atx_closed`、`setext`、`setext_with_atx`五种。**本仓已设置为 `atx`**。

- **错误示例**

  ```text
  # ATX style H1

  ## Closed ATX style H2 ##

  Setext style H1
  ===============
  ```

- **正确示例**

  ```text
  # ATX style H1

  ## ATX style H2
  ```

### MD004 - 无序列表样式

**本仓已屏蔽这条规则。**

- **参数**

    - `style`：指定无序列表的样式，有 `consistent(定义时符号前后保持一致)`、`asterisk(用星号定义)`、`plus(用加号定义)`、`dash(用减号定义)`、`sublist(定义多重列表的时候用不同的符号定义)`五种，默认为 `consistent`。
- **错误示例**

  ```text
  * Item 1
  + Item 2
  ```

- **正确示例**

  ```text
  * Item 1
  * Item 2
  ```

### MD005 - 同一级别的列表项缩进不一致

- **错误示例**

  ```text
  * Item1
      * nested item 1
      * nested item 2
     * A misaligned item
  ```

- **正确示例**

  ```text
  * Item1
      * nested item 1
      * nested item 2
      * nested item 3
  ```

### MD006 - 一级列表不能缩进

- **错误示例**

  ```text
  Some text

      * List item
      * List item
  ```

- **正确示例**

  ```text
  Some text

  * List item
  * List item
  ```

### MD007 - 无序列表缩进

**本仓已屏蔽这条规则。**

- **参数**

    - `ident`：指定无序列表嵌套时缩进的空格数，默认值是2。
- **错误示例**

  ```text
  * List item
    * Nested list item indented by 4 spaces
  ```

- **正确示例**

  ```text
  * List item
      * Nested list item indented by 2 spaces
  ```

### MD009 - 行尾空格

**本仓已屏蔽这条规则。**

- **参数**
    - `br_spaces`：指定在行尾可以添加的空格的数目，默认值为0，空格数目建议大于等于2，如果小于2，会默认为0。

### MD010 - 不能使用tab键缩进，要使用空格

- **参数**

    - `code_blocks`：指定本条规则在代码块里是否 (true or false) 生效,默认是 true。
- **错误示例**

  ```text
  Some text

      * hard tab character used to indent the list item
  ```

- **正确示例**

  ```text
  Some text

      * Spaces used to indent the list item instead
  ```

### MD011 - 反向链接语法

- **错误示例**

  ```text
  (Incorrect link syntax)[http://www.example.com]
  ```

- **正确示例**

  ```text
  [Correct link syntax](http://www.example.com)
  ```

### MD012 - 多个连续的空行

- **参数**

    - `maximum`：指定文档中可以连续的最多的空行数，默认值是1。
- **错误示例**

  ```text
  Some text here


  Some more text here
  ```

- **正确示例**

  ```text
  Some text here

  Some more text here
  ```

> [!NOTE]说明
> 如果代码块内有多个连续的空行，将不会触发此规则。

### MD013 - 行的长度

**本仓已屏蔽这条规则。**

- **参数**

    - `line_length`：指定行的最大长度，默认是80。
    - `heading_line_length`：指定标题行的最大的长度，默认是80。
    - `code_blocks`：指定规则是否(true or false)对代码块生效，默认是true。
    - `tables`：指定规则是否(true or false)对表格生效，默认是true。
    - `headings`：指定规则是否(true or false)对标题生效，默认是true。

### MD014 - 命令前使用$而不显示输出

**本仓已屏蔽这条规则。**

- **错误示例**

  ```text
  ls
  cat foo
  less bar
  ```

- **正确示例**

  ```text
  ls
  cat foo
  less bar
  ```

  ```text
  $ ls
  foo bar
  $ cat foo
  Hello world
  $ cat bar
  baz
  ```

  在代码块中，终端命令前不需要要有\$，但是如果代码中既有终端命令，也有命令的输出，则终端前可以有\$。

### MD018 - atx样式的标题后没有空格

- **错误示例**

  ```text
  #Header1

  ##Header2
  ```

- **正确示例**

  ```text
  # Header1

  ## Header2
  ```

### MD019 - atx样式的标题后有多个空格

- **错误示例**

  ```text
  #  Header1

  ##  Header2
  ```

- **正确示例**

  ```text
  # Header1

  ## Header2
  ```

### MD020 - closed atx样式的标题内没有空格

**本仓已屏蔽这条规则。**

- **错误示例**

  ```text
  #Header1#

  ##Header2##
  ```

- **正确示例**

  ```text
  # Header1 #

  ## Header2 ##
  ```

### MD021 - closed atx样式的标题内有多个空格

**本仓已屏蔽这条规则。**

- **错误示例**

  ```text
  #  Header1  #

  ##  Header2  ##
  ```

- **正确示例**

  ```text
  # Header1 #

  ## Header2 ##
  ```

### MD022 - 标题行的上下行应该都是空行

- **参数**

    - `lines_above`：指定标题行上方的空行数，默认值是1。
    - `lines_below`：指定标题行下方的空行数，默认值是1。
- **错误示例**

  ```text
  # Header1
  Some text

  Some more text
  ## Header2
  ```

- **正确示例**

  ```text
  # Header1

  Some text

  Some more text

  ## Header2
  ```

### MD023 - 标题必须从行首开始

- **错误示例**

  ```text
  Some text
    ## Indented header
  ```

- **正确示例**

  ```text
  Some text

  ## Header
  ```

### MD024 - 不能有重复内容的标题

**本仓已屏蔽这条规则。**

- **错误示例**

  ```text
  # Some text

  ## Some text
  ```

- **正确示例**

  ```text
  # Some text

  ## Some more text
  ```

### MD025 - 文档中有多个顶级标题

**本仓已屏蔽这条规则。**

- **参数**

    - `level`：指定文档最高级的标题，默认值是1。
- **错误示例**

  ```text
  # Top level header

  # Another top level header
  ```

- **正确示例**

  ```text
  # Title

  ## Header

  ### Another header
  ```

### MD026 - 标题行尾的标点符号

- **参数**

    - `punctuation`：指定标题行尾不能有的标点符号，默认值是".,;:!?"。
- **错误示例**

  ```text
  # This is a header.
  ```

- **正确示例**

  ```text
  # This is a header
  ```

### MD027 - 块引用符号后的多个空格

**本仓已屏蔽这条规则。**

- **错误示例**

  ```text
  >  This is a block quote with bad indentation
  >  there should only be one
  ```

- **正确示例**

  ```text
  > This is a block quote with bad indentation
  > there should only be one
  ```

### MD028 - 块引用内的空行

- **错误示例**

  ```text
  > This is a blockquote
  > which is immediately followed by

  > this blockquote. Unfortunately
  > in some parsers, this are treated as the same blockquote.
  ```

- **正确示例**

  ```text
  > This is a blockquote.
  >
  > This is the same blockquote.
  ```

### MD029 - 有序列表的前缀序号

- **参数**

    - `style`：指定前缀序号的格式，有 `one`(只用1做前缀)，`ordered`(从1开始的加1递增数字做前缀)两种，默认值是 `one`。**本仓设置为`ordered`**。
- **错误示例**

  ```text
  1. Do this
  1. Do that
  1. Done
  ```

- **正确示例**

  ```text
  1. Do this
  2. Do that
  3. Done
  ```

### MD030 - 列表标记后的空格

- **参数**

    - `ul_single`：无序列表单个段落的前缀符号和文字之间的空格数，默认值是1。
    - `ol_single`：有序列表单个段落的前缀符号和文字之间的空格数，默认值是1。
    - `ul_multi`：无序列表多个段落的前缀符号和文字之间的空格数，默认值是1。
    - `ol_multi`：有序列表单个段落的前缀符号和文字之间的空格数，默认值是1。
- **错误示例**

  ```text
  *  Foo
  *  Bar
  *  Baz
  ```

- **正确示例**

  ```text
  * Foo
  * Bar
  * Baz
  ```

### MD031 - 单独的代码块前后需要用空格隔开（除非是在文档的开头或者结尾）

- **错误示例**

  ````text
  Some text
  ```

  Code block

  ```

  ```

  Another code block

  ```
  Some more text
  ````

- **正确示例**

  ````text
  Some text

  ```

  Code block

  ```

  ```

  Another code block

  ```

  Some more text
  ````

### MD032 - 列表前后需要用空格隔开（除非是在文档的开头或者结尾）

- **错误示例**

  ```text
  Some text
  * Some
  * List

  1. Some
  2. List
  Some text
  ```

- **正确示例**

  ```text
  Some text

  * Some
  * List

  1. Some
  2. List

  Some text
  ```

### MD033 - 内联HTML

**本仓已屏蔽这条规则。**

- **错误示例**

  ```text
  <h1>Inline HTML header</h1>
  ```

- **正确示例**

  ```text
  # Markdown header
  ```

### MD034 - 使用纯URL

- **错误示例**

  ```text
  For more information, see http://www.example.com/.
  ```

- **正确示例**

  ```text
  For more information, see <http://www.example.com/>.
  ```

### MD035 - 水平线样式

- **参数**

    - `style`：指定创建水平线的方式，有 `consistent`、`***`、`---`或其他指定水平线的字符串，默认值是 `consistent`。

### MD036 - 使用强调标记代替标题

**本仓已屏蔽这条规则。**

- **参数**

    - `punctuation`：指定用于结尾的标点符号，以此符号结尾的强调不会被视为以强调代替标题，默认值是".,;:!?"
- **错误示例**

  ```text
  **My document**

  Lorem ipsum dolor sit amet...

  _Another section_

  Consectetur adipiscing elit, sed to eiusmod
  ```

- **正确示例**

  ```text
  # My document

  Lorem ipsum dolor sit amet...

  ## Another section

  Consectetur adipiscing elit, sed to eiusmod
  ```

### MD037 - 强调标记内强调的符号和强调的文字之间不能有空格

- **错误示例**

  ```text
  Here is some ** bold ** text

  Here is some * italic * text

  Here is some more __ bold __ text

  Here is some more _ italic _ text
  ```

- **正确示例**

  ```text
  Here is some **bold** text

  Here is some *italic* text

  Here is some more __bold__ text

  Here is some more _italic_ text
  ```

### MD038 - 单反引号和之间的内容不能有空格

- **错误示例**

  ```text
  ` some text `
  `some text `
  ` some text`
  ```

- **正确示例**

  ```text
  `some text`
  ```

### MD039 - 链接文本和包围它的中括号之间内容不能有空格

- **错误示例**

  ```text
  [ a link ](http://www.example.com/)
  ```

- **正确示例**

  ```text
  [a link](http://www.example.com/)
  ```

### MD040 - 代码块应指定代码块的编程语言

- **错误示例**

  ````text
  ```
  #!/bin/bash
  echo Hello world
  ```
  ````

- **正确示例**

  ````text
  ```bash
  #!/bin/bash
  echo Hello world
  ```
  ````

- **常用的代码块编程语言**

  | 语言支持         | 关键字   |
  | ---------------- | -------- |
  | Python           | python   |
  | C                | cpp      |
  | Java             | java     |
  | Shell            | bash     |
  | Markdown         | markdown |
  | JavaScript       | js       |
  | CSS              | css      |
  | SQL              | sql      |
  | PHP              | php      |
  | Text             | text     |
  | XML              | html     |
  | Bat              | bat      |
  | Protocol Buffers | protobuf |

### MD041 - 文件中的第一行应该是顶级标题

- **参数**

    - `level`：指定文档最高级的标题，默认值是1。
- **错误示例**

  ```text
  This is a file without a header
  ```

- **正确示例**

  ```text
  # File with header

  This is a file with a top level header
  ```

### MD046 - 代码块样式

**本仓已屏蔽这条规则。**

- **参数**

    - `style`：指定代码块定义格式，有 `fenced（使用三个反引号）`，`indented（使用缩进）`，`consistent（上下文一致）`三种，默认值是 `fenced`。
- **错误示例**

  ```text
  Some text.

      Code block

  Some more text.
  ```

- **正确示例**

  ````text
  Some text.

  ```ruby
  Code block
  ```

  Some more text.
  ````

### MD047 - 文件应以单个换行符结尾

- **错误示例**

  ```text
  # Header

  This file ends without a newline.[EOF]
  ```

- **正确示例**

  ````text
  # Header

  This file ends with a newline.
  [EOF]
  ````

## VSCode 中 Markdown 插件

markdownlint 扩展库包含 markdown 文件规则库，以保证 markdown 文件与其标准保持一致。添加配置后，markdownlint 可以自动检查文档错误。

### 安装

- 按下 `Ctrl_Shift+X`以打开扩展选项卡。
- 输入 `markdownlint` 以找到扩展。
- 点击 `Install` 按钮，然后再点击`Enable`按钮。

### 配置

注意：VSCode 中 markdownlint 参照的版本是 David Anson 拟定的，与 openEuler 仓使用的 markdownlint 官方 v0.12.0 版本有差异。为了与 openEuler 仓配置的规则保持一致，可参考下方配置项。

- 在命令面板（`Ctrl+Shift+P`）中输入`Open Settings (JSON)`命令。
- 在 Json 对象中添加如下配置：

   ```bash
   "markdownlint.config":{
      "default":true,
      "MD003":{"style":"atx"},
      "MD029":{"style":"ordered"},
      "MD004":false,
      "MD007":false,
      "MD009":false,
      "MD013":false,
      "MD014":false,
      "MD020":false,
      "MD021":false,
      "MD024":false,
      "MD025":false,
      "MD033":false,
      "MD036":false,
      "MD042":false,
      "MD043":false,
      "MD044":false,
      "MD045":false,
      "MD046":false,
      "MD048":false,
      "MD049":false,
      "MD050":false,
      "MD051":false,
      "MD052":false,
      "MD053":false,
      "MD055":false,
      "MD056":false,
      "MD057":false
   }
   ```
