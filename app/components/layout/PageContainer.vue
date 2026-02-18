<template>
  <main class="page-container">
    <slot />
  </main>
</template>

<style scoped lang="scss">
@use '~/assets/scss/abstracts/breakpoints' as bp;

.page-container {
  display: flex;
  min-height: calc(100dvh - 82px);
  margin: 0 auto;
  max-width: var(--container-max-width);
  padding-left: var(--container-padding-desktop);
  padding-right: var(--container-padding-desktop);
  padding-top: var(--container-padding-desktop-y);
  padding-bottom: var(--container-padding-desktop-y);
}

@include bp.tablet-down {
  .page-container {
    padding-left: var(--container-padding-tablet);
    padding-right: var(--container-padding-tablet);
    padding-top: var(--container-padding-tablet);
    padding-bottom: var(--container-padding-tablet-y);
  }
}

@include bp.mobile-down {
  .page-container {
    padding-left: var(--container-padding-mobile);
    padding-right: var(--container-padding-mobile);
    padding-top: var(--container-padding-mobile);
    padding-bottom: var(--container-padding-mobile-y);
  }
}
</style>
