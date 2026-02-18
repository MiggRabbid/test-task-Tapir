<template>
  <a class="header-logo" href="#" aria-label="Логотип">
    <span class="header-logo__mark" aria-hidden="true" />
  </a>
</template>

<style scoped lang="scss">
.header-logo {
  display: inline-block;
  flex-shrink: 0;
  color: var(--color-text-primary);
  text-decoration: none;
}

.header-logo__mark {
  display: block;
  width: 48px;
  height: 48px;
  background-color: #fb1313;
}
</style>
