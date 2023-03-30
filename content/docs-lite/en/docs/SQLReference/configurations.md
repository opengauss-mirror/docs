# Configurations<a name="EN-US_TOPIC_0289900037"></a>

Full text search functionality includes the ability to do many more things: skip indexing certain words \(stop words\), process synonyms, and use sophisticated parsing, for example, parse based on more than just white space. This functionality is controlled by text search configurations. openGauss comes with predefined configurations for many languages, and you can easily create your own configurations. \(The  **\\dF**  command of  **gsql**  shows all available configurations.\)

During installation an appropriate configuration is selected and  **default\_text\_search\_config**  is set accordingly in  **postgresql.conf**. If you are using the same text search configuration for openGauss, you can use the value in  **postgresql.conf**. To use different configurations throughout openGauss but the same configuration within any one database, use  **ALTER DATABASE ...** **SET**. Otherwise, you can set  **default\_text\_search\_config**  in each session.

Each text search function that depends on a configuration has an optional argument, so that the configuration to use can be specified explicitly.  **default\_text\_search\_config**  is used only when this argument is omitted.

To make it easier to build custom text search configurations, a configuration is built up from simpler database objects. openGauss's text search facility provides the following types of configuration-related database objects:

-   Text search parsers break documents into tokens and classify each token \(for example, as words or numbers\).
-   Text search dictionaries convert tokens to normalized form and reject stop words.
-   Text search templates provide the functions underlying dictionaries. \(A dictionary simply specifies a template and a set of parameters for the template.\)
-   Text search configurations select a parser and a set of dictionaries to use to normalize the tokens produced by the parser.

