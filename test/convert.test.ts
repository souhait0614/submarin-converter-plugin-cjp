import { Converter, type Plugin } from "@submarin-converter/core";
import cjp from "../src/index.ts";
import { assertEquals } from "@std/assert";
import { fallbackFunction } from "../src/fallbackFunction.ts";
import { generate } from "cjp";

Deno.test("convert", async () => {
  const converter = new Converter({ cjp });
  const { text } = await converter.convert("怪しい日本語", ["cjp"]);
  assertEquals(text, "怪レい日本语");
});

Deno.test("convert function", async () => {
  const plugin: Plugin<undefined> = {
    convertFunctions: [generate],
  };
  const converter = new Converter({ plugin });
  const { text } = await converter.convert("怪しい日本語", ["plugin"]);
  assertEquals(text, "怪レい日本语");
});

Deno.test("fallback function", async () => {
  const plugin: Plugin<undefined> = {
    convertFunctions: [fallbackFunction],
  };
  const converter = new Converter({ plugin });
  const { text } = await converter.convert("怪しい日本語", ["plugin"]);
  assertEquals(text, "怪レい日本语");
});
