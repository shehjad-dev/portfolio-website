import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // "@typescript-eslint/no-unused-vars": "off", // Disable unused variables check
      "@typescript-eslint/no-explicit-any": "off", // Disable no-explicit-any check
      // "@typescript-eslint/no-empty-object-type": [
      //   "error",
      //   { allowObjectTypes: true }, // Allow empty object types
      // ],
      // // Disable problematic React rule
      // "react/no-unescaped-entities": "off", // Disable unescaped entities check
    },
  },
];

export default eslintConfig;
