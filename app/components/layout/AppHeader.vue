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

@media (max-width: 968px) {
  .header {
    justify-content: space-between;
    padding-left: var(--container-padding-tablet);
    padding-right: var(--container-padding-tablet);
  }

  .header__content {
    grid-template-columns: 1fr auto;
  }
}

@media (max-width: 640px) {
  .header {
    padding-left: var(--container-padding-mobile);
    padding-right: var(--container-padding-mobile);
  }
}
</style>
