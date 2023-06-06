import { generate } from "cjp"
import { Plugin, type PluginConvertFunction } from "submarin-converter"

const mainConvertFunction: PluginConvertFunction<void> = ({ input }) => generate(input)

const cjpPlugin = new Plugin({
  convertFunction: [mainConvertFunction],
})

export { cjpPlugin }
