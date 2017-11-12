const assert = require("assert");

const editorconfigToPrettier = require("./");

assert.deepStrictEqual(
  editorconfigToPrettier({
    indent_style: "tab",
    tab_width: 8,
    indent_size: 2,
    max_line_length: 100
  }),
  {
    useTabs: true,
    tabWidth: 8,
    printWidth: 100
  }
);

assert.deepStrictEqual(
  editorconfigToPrettier({
    indent_style: "space",
    tab_width: 8,
    indent_size: 2,
    max_line_length: 100
  }),
  {
    useTabs: false,
    tabWidth: 2,
    printWidth: 100
  }
);

assert.deepStrictEqual(
  editorconfigToPrettier({
    indent_style: "space",
    tab_width: 8,
    indent_size: 8,
    max_line_length: 100
  }),
  {
    useTabs: false,
    tabWidth: 8,
    printWidth: 100
  }
);

assert.deepStrictEqual(
  editorconfigToPrettier({
    tab_width: 0,
    indent_size: 0
  }),
  {
    tabWidth: 0
  }
);

assert.deepStrictEqual(
  editorconfigToPrettier({
    quote_type: "single"
  }),
  {
    singleQuote: true
  }
);

assert.deepStrictEqual(
  editorconfigToPrettier({
    quote_type: "double"
  }),
  {
    singleQuote: false
  }
);
