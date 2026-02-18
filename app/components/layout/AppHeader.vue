<script setup lang="ts">
import { HEADER_LINKS } from '@app/constants/header-links';
</script>

<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <HeaderLogo />
      </div>
      <div class="header__nav">
        <HeaderNav :links="HEADER_LINKS" />
      </div>
      <div class="header__burger">
        <HeaderBurgerButton />
      </div>
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

.header__logo {
  justify-self: start;
}

.header__nav {
  justify-self: center;
}

.header__burger {
  justify-self: end;
  display: none;
}

@media (max-width: 968px) {
  .header {
    padding-left: var(--container-padding-tablet);
    padding-right: var(--container-padding-tablet);
  }
}

@media (max-width: 698px) {
  .header {
    padding-left: var(--container-padding-mobile);
    padding-right: var(--container-padding-mobile);
  }

  .header__content {
    grid-template-columns: 1fr auto;
  }

  .header__nav {
    display: none;
  }

  .header__burger {
    display: block;
  }
}
</style>
