import { Converter, Plugin, Plugins } from "submarin-converter"
import { expect, test } from "vitest"
import { templatePlugin } from "../src"

test("Basic Usage", async () => {
  const converter = new Converter({
    plugins: {
      template: templatePlugin,
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

  const expectedOutput = "hisubway"
  const expectedDetails: typeof details = [
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

  expect(output).toEqual(expectedOutput)
  expect(details).toEqual(expectedDetails)
})
