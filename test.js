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
    tab_width: 4,
    indent_size: "tab"
  }),
  {
    tabWidth: 4,
    useTabs: true
  }
);

assert.deepStrictEqual(
  editorconfigToPrettier({
    indent_size: "tab"
  }),
  {
    useTabs: true
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

assert.deepStrictEqual(
  editorconfigToPrettier({
    quote_type: "double",
    max_line_length: "off"
  }),
  {
    singleQuote: false
  }
);

assert.deepStrictEqual(
  editorconfigToPrettier({
    end_of_line: "cr"
  }),
  {
    endOfLine: "cr"
  }
);

assert.deepStrictEqual(
  editorconfigToPrettier({
    end_of_line: "crlf"
  }),
  {
    endOfLine: "crlf"
  }
);

assert.deepStrictEqual(
  editorconfigToPrettier({
    end_of_line: "lf"
  }),
  {
    endOfLine: "lf"
  }
);

assert.deepStrictEqual(
  editorconfigToPrettier({
    endOfLine: 123
  }),
  {}
);

assert.deepStrictEqual(
  editorconfigToPrettier({
    indent_style: "space",
    indent_size: 2,
    max_line_length: "unset"
  }),
  {
    useTabs: false,
    tabWidth: 2
  }
);

assert.deepStrictEqual(editorconfigToPrettier({}), null);
assert.deepStrictEqual(editorconfigToPrettier(null), null);
