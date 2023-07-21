<template>
  <table>
    <tr>
      <th>name</th>
      <th>age</th>
      <th>phone</th>
      <th>email</th>
    </tr>
    <tr>
      <td>{{user.name}}</td>
      <td>{{user.age}}</td>
      <td>{{user.phone}}</td>
      <td>{{user.email}}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {AuthStore} from "@/stores/authStore";
const authStore = new AuthStore()
const { user } = storeToRefs(authStore)
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
})
</script>

<style scoped>

</style>
