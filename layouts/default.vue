<template>
  <v-app dark>
    <h1>DEFAULT LAYOUT PAGE</h1>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
defineNuxtComponent({
  name: "DefaultLayout",
});
</script>
