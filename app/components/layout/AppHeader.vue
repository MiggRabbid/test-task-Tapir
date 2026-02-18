<script setup lang="ts">
import { HEADER_LINKS } from '../../constants/header-links.ts';
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
  background-color: #e9e9e9;
}

.header__content {
  display: grid;
  align-items: center;
  grid-template-columns: 96px 1fr 96px;
  gap: var(--space-lg);
  min-height: 112px;
}

@media (max-width: 1200px) {
  .header__content {
    grid-template-columns: auto 1fr;
    min-height: 88px;
  }
}
</style>
