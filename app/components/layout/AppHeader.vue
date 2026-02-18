<script setup lang="ts">
import { HEADER_LINKS } from '@app/constants/header-links';
</script>

<template>
  <header class="header">
    <AppContainer>
      <div class="header__content">
        <HeaderLogo />
        <HeaderNav :links="HEADER_LINKS" />
      </div>
    </AppContainer>
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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: var(--container-padding-mobile);
}

.header__content > :first-child {
  justify-self: start;
}

.header__content > :nth-child(2) {
  justify-self: center;
}

@media (max-width: 960px) {
  .footer__grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
    justify-content: stretch;
    gap: 28px;
    padding-left: var(--container-padding-tablet);
    padding-right: var(--container-padding-tablet);
  }
}

@media (max-width: 560px) {
  .footer__grid {
    grid-template-columns: 1fr;
    padding-left: var(--container-padding-mobile);
    padding-right: var(--container-padding-mobile);
  }
}
</style>
