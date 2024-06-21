import { Converter, type Plugin } from "@submarin-converter/core";
import cjp from "../src/index.ts";
import { assertEquals } from "@std/assert";
import { fallbackFunction } from "../src/fallbackFunction.ts";
import { generate } from "cjp";
import cjpDynamic from "../src/dynamic.ts";

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

Deno.test("dynamic convert", async () => {
  const converter = new Converter({ cjpDynamic });
  const { text } = await converter.convert("怪しい日本語", ["cjpDynamic"]);
  assertEquals(text, "怪レい日本语");
});

Deno.test("dynamic convert function", async () => {
  const plugin: Plugin<undefined> = {
    convertFunctions: [async (text: string) => {
      const { generate } = await import("cjp");
      return generate(text);
    }],
  };
  const converter = new Converter({ plugin });
  const { text } = await converter.convert("怪しい日本語", ["plugin"]);
  assertEquals(text, "怪レい日本语");
});

Deno.test("dynamic fallback function", async () => {
  const plugin: Plugin<undefined> = {
    convertFunctions: [async (text: string) => {
      const { fallbackFunction } = await import("../src/fallbackFunction.ts");
      return fallbackFunction(text);
    }],
  };
  const converter = new Converter({ plugin });
  const { text } = await converter.convert("怪しい日本語", ["plugin"]);
  assertEquals(text, "怪レい日本语");
});
