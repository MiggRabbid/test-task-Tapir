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
}

.header__content {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: start;
  gap: var(--space-lg);
}

.header__content > :first-child {
  justify-self: start;
}

.header__content > :nth-child(2) {
  justify-self: center;
}

@media (max-width: 1200px) {
  .header__content {
    grid-template-columns: auto 1fr;
    align-items: center;
  }

  .header__content > :nth-child(2) {
    justify-self: end;
  }
}
</style>
