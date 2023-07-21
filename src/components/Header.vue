<template>
  <div style="display: inline">

  <select name="lang" id="lang" v-model="locale">
    <option value="hu" >magyar</option>
    <option value="en">english</option>
  </select>
  <button v-if="authStore.loggedIn" @click="authStore.logout">Logout</button>
  </div>

</template>
<script setup lang="ts">
import {AuthStore} from "@/stores/authStore";

import {useI18n} from "vue-i18n";
const { locale } = useI18n({ useScope: 'global' })
const authStore = new AuthStore()

</script>

<style scoped>

</style>
