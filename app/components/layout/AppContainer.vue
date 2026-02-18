<template>
  <div class="app-container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.app-container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding-right: var(--container-padding-mobile);
  padding-left: var(--container-padding-mobile);
}

@media (min-width: 768px) {
  .app-container {
    padding-right: var(--container-padding-tablet);
    padding-left: var(--container-padding-tablet);
  }
}

@media (min-width: 1200px) {
  .app-container {
    padding-right: var(--container-padding-desktop);
    padding-left: var(--container-padding-desktop);
  }
}
</style>
