import { generate } from "cjp"
import { Plugin, type ConvertFunction } from "submarin-converter"

const mainConvertFunction: ConvertFunction<void> = ({ input }) => generate(input)

const cjpPlugin = new Plugin({
  convertFunction: [mainConvertFunction],
})

export { cjpPlugin }
