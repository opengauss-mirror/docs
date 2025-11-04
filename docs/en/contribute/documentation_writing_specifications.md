# Documentation Writing Specifications

This writing specification outlines the requirements for the structure, content elements, and language style of documents in the openGauss docs repository to ensure a consistent style across openGauss documentation.

Before starting to write openGauss documentation, familiarize yourself with this specification. **Improvement suggestions are welcome**.

## Content Element Specifications

### Naming

When creating new documents, add a MarkDown file (with the `.md` extension) to the appropriate directory.

- **Rule**: Ensure the document name is unique and does not conflict with existing files. Rename if necessary.
- **Rule**: Use **English** for all document names.
- **Rule**: Avoid parentheses in file names, as they can disrupt directory display. Replace them with underscores (`_`) or hyphens (`-`).

**Example**:

```text
installation_and_deployment.md  # Document for "Installation and Deployment"
```

### Headings

- **Rule**: Headings should clearly and concisely summarize the section content without omitting key details.
- **Rule**: For procedural documents, use verb-object structures (for example, "Requesting Permissions"). Ensure consistency in heading structures for the same level and type.
- **Rule**: Avoid ending headings with punctuation. Use parentheses for additional context and exclude special characters like `?`.
- **Rule**: Separate headings from body text with a blank line.
- **Rule**: Format headings with `#` followed by a space and the heading text. Increment heading levels one at a time, starting with the top-level heading.

**Example**:

```markdown
# Level 1 Heading
## Level 2 Heading
### Level 3 Heading
#### Level 4 Heading
##### Level 5 Heading
###### Level 6 Heading
```

### Body

**Formatting instructions**:

- *Italic*: Enclose text in single asterisks (`*`) for italic formatting.

    ```txt
    *italic text*
    ```

- **Bold**: Enclose text in double asterisks (`**`) for bold formatting.

    ```txt
    **bold text**
    ```

- ***Bold italic***: Enclose text in triple asterisks (`***`) for bold italic formatting.

    ```txt
    ***bold italic text***
    ```

- Escape: Use a backslash (`\`) to escape special characters.

    ```txt
    \<escaped markup symbol>
    ```

**Rule**: Always use the backslash (`\`) to escape characters as required.

**Rule**: Separate consecutive escape characters with a space, for example, `\{ \}`.

**Rule**: Maintain both Chinese and English versions of documentation. For translation support, contact <https://gitcode.com/Evawudonger>.

### Images

**Usage**:

```bash
![alt text](./path/to/image.png)

![alt text](./path/to/image.png "optional title")
```

**Rule**: Place all images in the **figures** subdirectory of the document folder. For example, the [Installation Guide](https://gitcode.com/opengauss/docs/tree/6.0.0/content/en/docs/InstallationGuide) stores its images in [this directory](https://gitcode.com/opengauss/docs/tree/6.0.0/content/en/docs/InstallationGuide/figures). Always use **relative paths** for references.

**Rule**: Only use original or properly licensed images to avoid copyright issues.

**Rule**: Position images adjacent to their relevant text sections.

**Rule**: The preferred image format is PNG, with JPG as an alternative. Images must not exceed 640 pixels in height or 393 pixels in width, and should ideally be under 150 KB in file size.

**Rule**: For screenshots, crop to focus on essential content within these dimensions. Use red borders or text labels to emphasize important details in graphics.

**Example**:

```markdown
![](./figures/ci_check_result.jpg)
```

The `./` prefix in the path is mandatory for proper online display.

### Code Blocks

Code examples illustrate how to implement specific features, serving as references for developers during coding and debugging.

**Rule**: Ensure the code is logically and syntactically correct.
**Rule**: Clearly separate input and output sections where applicable.
**Rule**: Include comments to explain critical steps in the code.
**Rule**: Enclose inline code and commands in single backticks (for example, `code snippet`).
**Rule**: Format block code with either triple backquotes or four-space indentation (no TABs), preceded and followed by blank lines.

**Examples**

- Inline code

    ```markdown
    The `printf()` function
    ```

- Block code

    ```python
    #!/usr/bin/env python3
    print("Hello, World!")
    ```

    ```c
    #include <stdio.h>
    int main(void)
    {
        printf("Hello world\n");
    }
    ```

### Lists

- **Unordered lists**: Represented by asterisks (`*`), plus signs (`+`), or hyphens (`-`), each followed by a space. Maintain uniform markers within a list.

    ```markdown
    * First item
    * Second item
    * Third item

    + First item
    + Second item
    + Third item


    - First item
    - Second item
    - Third item
    ```

- **Ordered lists**: Numbered items with a trailing period (`.`).

    ```markdown
    1. First item
    2. Second item
    3. Third item
    ```

- **Nested lists**: Sub-items indented by four spaces (no TABs).

    ```markdown
    1. First item:
        - Sub-item A
        - Sub-item B
    2. Second item:
        - Sub-item A
        - Sub-item B
    ```

**Rule**:Use ordered lists when items follow a clear sequence or logical order.

**Rule**:Use unordered lists for parallel relationships or multiple-choice options.

**Rule**:Omit punctuation for terms or phrases in list items.

**Rule**:Include periods for complete sentences in list items.

**Rule**:If mixing phrases and sentences is unavoidable, apply periods to all items.

**Rule**:Alternatively, separate items with semicolons, ending the final item with a period.

### Annotation Symbols

The following annotation symbols may appear in documentation to indicate different scenarios and levels of importance. Select the appropriate symbol based on the significance of the information being highlighted.

| Symbol | Purpose/Meaning | Usage |
|--------|----------------|-------|
| **Warning** | Failure to follow this warning may cause task interruption or unexpected results, though recovery is possible. | `> [!WARNING]Warning` <br> `> Content` |
| **Note** | Provides helpful tips or useful reference information. | `> [!NOTE]Note` <br> `> Content` |

> [!NOTE]Note
>
> - Choose the appropriate annotation symbol based on the documentation context and apply the correct styling.
> - Notes/Warnings can contain nested ordered/unordered lists, but avoid tables and code blocks.
> - To prevent style breaks, ensure `>` remains continuous.
> - Keep note/warning content concise. Consider placing lengthy explanations in the main text or splitting them into sections. Avoid excessive empty lines within styled blocks.

### Links

**Rule**: Verify link destinations exist to prevent navigation errors. Use standard Markdown syntax instead of HTML.

**Examples**:

```markdown
- Website link
This is the link to the [DataKit website](https://www.datakit.com).

- Relative path
[CI Pipeline Rules](./ci_rules.md)
```

### Tables

**Rule:** Use standard Markdown table syntax in documentation. Avoid HTML table formatting.

**Example:**

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

**Alignment options:**

- `-:` Right-aligned content
- `:-` Left-aligned content
- `:-:` Centered content

**Rule**: Omit punctuation when all cells in a column contain terms/phrases.

**Rule**: Use periods when all cells contain complete sentences.

**Rule**: Apply periods uniformly if mixed content cannot be avoided.

### Punctuation

**Rule:** For numbered/bulleted lists, use periods consistently if items are complete sentences. Omit punctuation if all items are phrases. **Maintain uniformity: either apply punctuation throughout or omit it entirely.**

**Rule:** Always use half-width (ASCII) numerals.

**Rule:** Reserve exclamation marks exclusively for warnings about critical consequences involving equipment safety or personal harm. Avoid exclamation marks in all other contexts.

## Language Style Specifications

**Rule:** Submissions must exclusively pertain to openGauss features.

**Rule:** Content must not include sensitive information or material exhibiting strong racial/gender discrimination.

**Rule:** All submissions must be original work without intellectual property infringement.

**Rule:** Content must remain factual and objective. Avoid exaggerated promotional language.

**Unacceptable documentation practices**

Submitting excessive pull requests in a short timeframe via automated tools to address trivial issues (such as typos, grammar errors, date inaccuracies, and awkward phrasing) without substantive value.
