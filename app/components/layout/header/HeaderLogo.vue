<template>
  <NuxtLink class="header-logo" to="/" aria-label="На главную">
    <span class="header-logo__mark" aria-hidden="true" />
  </NuxtLink>
</template>

<style scoped lang="scss">
.header-logo {
  width: fit-content;
  height: fit-content;
  flex-shrink: 0;
  color: var(--color-text-primary);
  text-decoration: none;
}

.header-logo__mark {
  display: block;
  width: 42px;
  height: 42px;
  background-color: var(--color-accent-danger);
}

@media (max-width: 968px) {
  .header-logo__mark {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 640px) {
  .header-logo__mark {
    width: 28px;
    height: 28px;
  }
}
</style>
