<script setup lang="ts">
import { HEADER_LINKS } from '@app/constants/header-links';
</script>

<template>
  <header class="header">
    <div class="header__content">
      <HeaderLogo />
      <HeaderNav :links="HEADER_LINKS" />
      <HeaderBurgerButton />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '~/assets/scss/abstracts/breakpoints' as bp;

.header {
  background-color: transparent;
  padding-left: var(--container-padding-desktop);
  padding-right: var(--container-padding-desktop);
  padding-top: var(--container-padding-mobile);
  padding-bottom: var(--container-padding-mobile);
}

.header__content {
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: var(--container-padding-mobile);
}

@include bp.tablet-down {
  .header {
    padding-left: var(--container-padding-tablet);
    padding-right: var(--container-padding-tablet);
  }

  .header__content {
    grid-template-columns: 1fr auto;
  }
}

@include bp.mobile-down {
  .header {
    padding-left: var(--container-padding-mobile);
    padding-right: var(--container-padding-mobile);
  }
}
</style>
