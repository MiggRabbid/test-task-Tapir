<script setup lang="ts">
import AppContainer from '@app/components/layout/AppContainer.vue';
</script>

<template>
  <main class="home">
    <AppContainer>
      <section class="home__hero">
        <h1 class="home__title">ТЕСТОВОЕ ЗАДАНИЕ</h1>
        <NuxtLink class="home__catalog-link" to="/catalog">в каталог</NuxtLink>
      </section>
    </AppContainer>
  </main>
</template>

<style scoped lang="scss">
.home {
  min-height: 700px;
  padding-top: 220px;
  padding-bottom: 120px;
}

.home__hero {
  max-width: 680px;
}

.home__title {
  margin: 0 0 28px;
  color: #000;
  font-size: 64px;
  font-weight: 700;
  line-height: 1;
}

.home__catalog-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 128px;
  min-height: 38px;
  padding: 6px 18px;
  background-color: #fb1313;
  color: #fff;
  font-size: 14px;
  line-height: 1;
  text-decoration: none;
  text-transform: lowercase;
}

.home__catalog-link:hover {
  opacity: 0.85;
}

@media (max-width: 1200px) {
  .home {
    min-height: 560px;
    padding-top: 150px;
    padding-bottom: 96px;
  }

  .home__title {
    font-size: 48px;
  }
}

@media (max-width: 720px) {
  .home {
    min-height: 440px;
    padding-top: 96px;
    padding-bottom: 72px;
  }

  .home__title {
    margin-bottom: 18px;
    font-size: 34px;
  }
}
</style>
