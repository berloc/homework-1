
// @ts-ignore
import {AuthStore} from "@/stores/authStore";

export function requireAuth(to, from, next) {
  const authStore = AuthStore()
  console.log(authStore.user.token);
  if (authStore.loggedIn && authStore.user.token !== undefined) next()
  else next('/login')
}
