import type { Options } from "tsup";

export const tsup: Options = {
  sourcemap: true,
  clean: true,
  entryPoints: ["index.js"],
  target: "es5",
  format: ["cjs", "esm", "iife"],
  minify: true,
};
