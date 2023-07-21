
// @ts-ignore
import {AuthStore} from "@/stores/authStore";

export function requireNoAuth(to, from, next) {
  const authStore = new AuthStore()
  if (!authStore.loggedIn) next()
  else next('/dashboard')
}
