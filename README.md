# submarin-converter-plugin-cjp

[submarin-converter](https://github.com/souhait0614/submarin-converter)のプラグインです。
日本語を正レい日本语に変換します。

## Example

```typescript
import { Converter, Plugin } from "submarin-converter"
import type { ConvertFunction } from "submarin-converter"
import { cjpPlugin } from "submarin-converter-plugin-cjp"

const converter = new Converter({
  plugins: {
    cjp: cjpPlugin,
  } as const,
})

const input = "おはようございます"

const [output, details] = await converter.convert(input, [
  {
    id: "cjp",
  },
] as const)

console.log(output) // "おはよラございまず"
console.log(details)
/*
[
  {
    id: "cjp",
    ok: true,
    output: "おはよラございまず",
    args: {
      input: "おはようございます",
    },
    error: [],
  },
]
*/
```

## Installation

```shell
npm install submarin-converter-plugin-cjp
# or yarn add submarin-converter-plugin-cjp
# or pnpm add submarin-converter-plugin-cjp
```
