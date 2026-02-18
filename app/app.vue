<script setup lang="ts">
import AppFooter from '@app/components/layout/AppFooter.vue';
import AppHeader from '@app/components/layout/AppHeader.vue';
import PageContainer from '@app/components/layout/PageContainer.vue';
</script>

<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <PageContainer>
      <NuxtPage />
    </PageContainer>
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
