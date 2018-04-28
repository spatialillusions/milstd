import json from "rollup-plugin-json";

export default [
  {
    // Generate JSON for all standards
    input: "JSON/milstd.js",
    output: [
      {
        file: "milstd.js",
        format: "umd",
        name: "milstd"
      },
      {
        file: "es6.js",
        format: "es"
      }
    ],
    plugins: [json()]
  }
];
