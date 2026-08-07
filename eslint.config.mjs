import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Build/deploy artifacts, not source:
    ".open-next/**",
    ".wrangler/**",
    // Reference site kept for inspiration, not part of this app:
    "ref/**",
    // Claude Code plugin skill templates, not site source:
    ".agents/**",
  ]),
]);

export default eslintConfig;
