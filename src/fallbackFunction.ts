import { apiUrl } from "./constants.ts";

export const fallbackFunction = async (text: string) => {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: text }),
  });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json() as object;
  if (!("output" in data) || typeof data.output !== "string") {
    throw new Error("Invalid response from API");
  }
  return data.output;
};
