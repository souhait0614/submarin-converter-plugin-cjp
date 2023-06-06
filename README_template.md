# submarin-converter-plugin-template

[submarin-converter](https://github.com/souhait0614/submarin-converter)のプラグインです。
文字に指定した接頭語を付けます。

## Example

```typescript
import { Converter, Plugin } from "submarin-converter"
import type { ConvertFunction } from "submarin-converter"
import { templatePlugin } from "submarin-converter-plugin-template"

const converter = new Converter({
  plugins: {
    plugins: {
      template: templatePlugin,
    } as const,
  } as const,
})

const input = "subway"

const [output, details] = await converter.convert(input, [
  {
    id: "template",
    option: {
      prefix: "hi",
    },
  },
] as const)

console.log(output) // "hisubway"
console.log(details)
/*
[
  {
    id: "template",
    ok: true,
    output: "hisubway",
    args: {
      input: "subway",
      option: {
        prefix: "hi",
      },
    },
    error: [],
  },
]
*/
```

## Installation

```shell
npm install submarin-converter-plugin-template
# or yarn add submarin-converter-plugin-template
# or pnpm add submarin-converter-plugin-template
```
