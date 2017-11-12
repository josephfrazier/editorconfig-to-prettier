module.exports = editorConfigToPrettier;

function editorConfigToPrettier(editorConfig) {
  editorConfig = editorConfig || {};
  const result = {};

  if (editorConfig.indent_style) {
    result.useTabs = editorConfig.indent_style === "tab";
  }

  const tabWidth = editorConfig.tab_width || editorConfig.indent_size;

  if (result.useTabs && editorConfig.tab_width) {
    result.tabWidth = editorConfig.tab_width;
  } else if (
    editorConfig.indent_style === "space" &&
    editorConfig.indent_size &&
    editorConfig.indent_size !== "tab"
  ) {
    result.tabWidth = editorConfig.indent_size;
  } else if (tabWidth !== undefined) {
    result.tabWidth = tabWidth;
  }

  if (editorConfig.max_line_length) {
    result.printWidth = editorConfig.max_line_length;
  }

  if (editorConfig.quote_type === "single") {
    result.singleQuote = true;
  } else if (editorConfig.quote_type === "double") {
    result.singleQuote = false;
  }

  return result;
}
