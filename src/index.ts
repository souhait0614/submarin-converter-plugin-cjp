import { Plugin, type PluginConvertFunction } from "submarin-converter"

interface ConvertFunctionOption {
  prefix: string
}
const mainConvertFunction: PluginConvertFunction<ConvertFunctionOption> = ({ input, option }) =>
  `${option?.prefix ?? ""}${input}`

const templatePlugin = new Plugin({
  convertFunction: [mainConvertFunction],
})

export { templatePlugin }

export type { ConvertFunctionOption }
