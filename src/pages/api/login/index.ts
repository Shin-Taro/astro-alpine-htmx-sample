import type { APIRoute } from "astro"

import fs from "node:fs"

const ErrorDialog = fs.readFileSync("src/domain/user/components/features/LoginForm/components/elements/ErrorDialog/index.html", "utf8")
const SuccessDialog = fs.readFileSync("src/domain/user/components/features/LoginForm/components/elements/SuccessDialog/index.html", "utf8")

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const email = data.get("email")
  const password = data.get("password")
  const isValid = Boolean(email) && Boolean(password)
  return isValid ? new Response(SuccessDialog, { headers: { Location: "/mypage", "Set-Cookie": "user=dummy-user; Path=/;" } }) : new Response(ErrorDialog)
}
