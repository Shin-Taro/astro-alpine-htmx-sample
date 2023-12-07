import { sleep } from "@shared/modules/sleep"

import type { AstroCookies } from "astro"

export const isLoggedIn = async (cookies: AstroCookies): Promise<boolean> => {
  await sleep(500) // Simulate a network request
  const user = cookies.get("user")

  return Boolean(user)
}
