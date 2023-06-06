import { Converter } from "submarin-converter"
import { expect, test } from "vitest"
import { cjpPlugin } from "../src"

test("Basic Usage", async () => {
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

  const expectedOutput = "おはよラございまず"
  const expectedDetails: typeof details = [
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

  expect(output).toEqual(expectedOutput)
  expect(details).toEqual(expectedDetails)
})
