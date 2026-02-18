<script setup lang="ts">
import PageContainer from '@app/components/layout/PageContainer.vue';
</script>

<template>
  <PageContainer>
    <div class="home">
      <section class="home__hero">
        <h1 class="home__title">ТЕСТОВОЕ ЗАДАНИЕ</h1>
        <NuxtLink class="home__catalog-link" to="/catalog">в каталог</NuxtLink>
      </section>
    </div>
  </PageContainer>
</template>

<style scoped lang="scss">
.home {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.home__hero {
  height: fit-content;
  flex-direction: column;
  max-width: 680px;
  gap: 20px;
  display: flex;
}

.home__title {
  margin: 0 0 28px;
  color: var(--color-text-primary);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: 1;
}

.home__catalog-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 128px;
  width: fit-content;
  min-height: 38px;
  padding: 6px 18px;
  background-color: var(--color-accent-danger);
  color: var(--color-text-inverse);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-regular);
  line-height: 1;
  text-decoration: none;
  text-transform: lowercase;
}

.home__catalog-link:hover {
  opacity: 0.85;
}

@media (max-width: 960px) {
  .home__title {
    font-size: var(--font-size-3xl);
  }
}

@media (max-width: 640px) {
  .home__title {
    font-size: var(--font-size-xl);
  }
}
</style>
