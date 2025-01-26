import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    "prettier",
    "plugin:tailwindcss/recommended"
  ),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn", // Changes the error to a warning
        {
          argsIgnorePattern: "^_", // Ignore unused function arguments starting with "_"
          varsIgnorePattern: "^_", // Ignore unused variables starting with "_"
        },
      ],
    },
  },
];

export default eslintConfig;
