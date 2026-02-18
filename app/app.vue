<script setup lang="ts">
import AppFooter from '@app/components/layout/AppFooter.vue';
import AppHeader from '@app/components/layout/AppHeader.vue';
</script>

<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 100dvh;
  background-color: var(--color-bg-main);
  color: var(--color-text-primary);
  font-family: var(--font-family-base);
}
</style>
