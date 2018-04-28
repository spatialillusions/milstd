import json from "rollup-plugin-json";

export default [
  {
    // Generate JSON for all standards
    input: "milstd.js",
    output: [
      /*{
        file: "milstd.js",
        format: "es"
      },*/
      {
        file: "milstd-umd.js",
        format: "umd",
        name: "milstd"
      }
    ],
    plugins: [json()]
  }
];
