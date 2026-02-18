<script setup lang="ts">
import AppFooter from '@app/components/layout/AppFooter.vue';
import AppHeader from '@app/components/layout/AppHeader.vue';
</script>

<template>
  <div class="app-shell">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.app-shell {
  min-height: 100vh;
  background-color: var(--color-bg-page);
  color: var(--color-text-primary);
  font-family: var(--font-family-base);
}
</style>
