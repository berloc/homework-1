import { defineStore } from 'pinia'
import type {UserLogin} from "@/types/UserLogin";
import type {User} from "@/types/User";

export const AuthStore = defineStore({
  id: 'authStore',
  state: () => ({
    loggedIn: false,
    userLogin: {} as UserLogin,
    user: {} as User
  }),
  actions: {
    async login() {
      this.user = {
        name: this.userLogin.username,
        token: Math.random().toString(36).substring(2,10),
        age: 23,
        email: "email@email.com",
        phone: "23232323"
      }
      localStorage.setItem("token", this.user.token)
      this.loggedIn = true
      this.userLogin = {}
      await this.$router.push('/dashboard')
    },
    async logout() {
      localStorage.removeItem("token")
      this.loggedIn = false
      this.user = {}
      await this.$router.push('/login')
    }
  },
})
