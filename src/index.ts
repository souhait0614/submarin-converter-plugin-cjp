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

import { generate } from "cjp";
import type { Plugin } from "@submarin-converter/core";
import { fallbackFunction } from "./fallbackFunction.ts";
import { apiUrl } from "./constants.ts";

/** submarin-converterのPluginとして設定できるPlugin */
const plugin: Plugin<undefined> = {
  convertFunctions: [generate, fallbackFunction],
  metaData: {
    displayName: "怪レい日本语",
    description: "日本語を怪レい日本语に変換します",
    homepage: [
      "https://github.com/Submarinonline/cjp.js",
      new URL(apiUrl).origin,
    ],
    repository: "https://github.com/souhait0614/submarin-converter-plugin-cjp",
    author: "すえ",
  },
};

export default plugin;
