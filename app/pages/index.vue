<template>
  <main class="home">
    <AppContainer>
      <section class="home__hero">
        <h1 class="home__title">Главная страница</h1>
      </section>
    </AppContainer>
  </main>
</template>

<style scoped lang="scss">
.home {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-3xl);
}

.home__hero {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl);
  background-color: var(--color-bg-surface);
}

.home__title {
  margin: 0;
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-tight);
}
</style>
