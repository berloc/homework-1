<template>
  <div style="display: inline">

  <select name="lang" id="lang">
    <option @click="" value="hu">magyar</option>
    <option @click="" value="en">english</option>
  </select>
  <button v-if="authStore.loggedIn" @click="authStore.logout">Logout</button>
  </div>

</template>
<script setup lang="ts">
import {AuthStore} from "@/stores/authStore";

import {useI18n} from "vue-i18n";
const { t } = useI18n()

const authStore = new AuthStore()

</script>

<style scoped>

</style>
