import type { APIRoute } from "astro"

import fs from "node:fs"

const ErrorDialog = fs.readFileSync("src/domain/user/components/features/LogOutButton/components/elements/ErrorDialog/index.html", "utf8")
const SuccessDialog = fs.readFileSync("src/domain/user/components/features/LogOutButton/components/elements/SuccessDialog/index.html", "utf8")

const PastDate = "Thu, 01 Jan 1970 00:00:00 GMT"

export const POST: APIRoute = async ({ cookies }) => {
  const isValid = !cookies.get("user")
  return isValid ? new Response(ErrorDialog) : new Response(SuccessDialog, { headers: { "Set-Cookie": `user=dummy-user; Path=/; expires=${PastDate}` } })
}
