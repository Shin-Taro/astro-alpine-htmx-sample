import { sleep } from "@shared/modules/sleep"

import type { AstroCookies } from "astro"

export const isLoggedIn = async (cookies: AstroCookies): Promise<boolean> => {
  await sleep(1500)
  const user = cookies.get("user")

  return Boolean(user)
}
