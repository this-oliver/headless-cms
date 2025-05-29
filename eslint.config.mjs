import antfu from "@antfu/eslint-config";

export default antfu(
  {
    typescript: true
  },
  {
    // Without `files`, they are general rules for all files
    rules: {
      "style/indent": ["error", 2],
      "style/semi": ["error", "always"],
      "style/quotes": ["error", "double"],
      "style/comma-dangle": ["error", "never"],
      "style/brace-style": ["error", "1tbs"]
    }
  }
);
