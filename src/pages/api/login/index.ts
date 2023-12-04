import type { APIRoute } from "astro"

import fs from "node:fs"

const ErrorDialog = fs.readFileSync("src/domain/user/components/features/LoginForm/components/elements/ErrorDialog/index.html", "utf8")

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const email = data.get("email")
  const password = data.get("password")
  if (!email || !password) {
    return new Response(ErrorDialog)
  }
  return new Response("Success!", { headers: { location: "/mypage" } })
}
