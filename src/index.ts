import { generate } from "cjp"
import { Plugin, type ConvertFunction } from "submarin-converter"

const mainConvertFunction: ConvertFunction<void> = ({ input }) => generate(input)

const cjpPlugin = new Plugin({
  convertFunction: [mainConvertFunction],
  metaData: {
    name: "怪しい日本語",
    description: "日本語を正レい日本语に変換します",
    author: "すえ"
  }
})

export { cjpPlugin }
