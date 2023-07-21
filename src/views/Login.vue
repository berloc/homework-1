<template>
  <form @submit.prevent>
    <div>
      <label for="username">{{t('login.username')}}</label>
      <input id="username" type="text" v-model="authStore.userLogin.username">
    </div>
    <div>
      <label for="password">{{t('login.password')}}</label>
      <input id="password" type="password" v-model="authStore.userLogin.password">
    </div>

    <button @click="authStore.login">Login</button>
  </form>
</template>

<script setup lang="ts">

import {useI18n} from "vue-i18n";
import {AuthStore} from "@/stores/authStore";

const authStore = new AuthStore()
const { t } = useI18n()
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
})
</script>


<style scoped>

</style>
