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
        file: "milstd.esm.js",
        format: "es"
      }
    ],
    plugins: [json()]
  }
];
