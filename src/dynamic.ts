/**
 * @module
 *
 * submarin-converterのPluginとして設定することで文章を怪レい日本语に変換できます
 *
 * @example
 * ```typescript
 * import { Converter } from "@submarin-converter/core";
 * import cjp from "@submarin-converter/plugin-cjp";
 *
 * const converter = new Converter({ cjp });
 *
 * const { text } = await converter.convert("怪しい日本語", ["cjp"]);
 *
 * console.log(text) // "怪レい日本语"
 * ```
 */

import type { Plugin } from "@submarin-converter/core";

const dynamicGenerate = async (text: string) => {
  const { generate } = await import("cjp");
  return generate(text);
};
const dynamicFallbackFunction = async (text: string) => {
  const { fallbackFunction } = await import("./fallbackFunction.ts");
  return fallbackFunction(text);
};

/** submarin-converterのPluginとして設定できるPlugin */
const plugin: Plugin<undefined> = {
  convertFunctions: [dynamicGenerate, dynamicFallbackFunction],
  metaData: {
    displayName: "怪レい日本语",
    description: "日本語を怪レい日本语に変換します",
    homepage: "https://github.com/Submarinonline/cjp.js",
    repository: "https://github.com/souhait0614/submarin-converter-plugin-cjp",
    author: "すえ",
  },
};

export default plugin;
