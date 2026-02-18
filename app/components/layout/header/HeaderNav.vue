<script setup lang="ts">
import type { HeaderLink } from '@app/constants/header-links';

interface HeaderNavProps {
  links: HeaderLink[];
}

defineProps<HeaderNavProps>();
</script>

<template>
  <nav class="header-nav" aria-label="Основная навигация">
    <ul class="header-nav__menu">
      <li v-for="link in links" :key="link.id" class="header-nav__item">
        <a class="header-nav__link" :href="link.href">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.header-nav {
  background-color: var(--color-bg-second);
  box-sizing: border-box;
  width: 590px;
  max-width: 100%;
  padding: 10px 24px;
  backdrop-filter: blur(100px);
}

.header-nav__menu {
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;
  white-space: nowrap;
}

.header-nav__link {
  color: var(--color-text-primary);
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-base);
  letter-spacing: 0;
  vertical-align: bottom;
  text-decoration: none;
}

.header-nav__link:hover {
  opacity: 0.7;
}

@media (max-width: 1200px) {
  .header-nav {
    width: 100%;
    overflow-x: auto;
  }
}

@media (max-width: 968px) {
  .header-nav {
    display: none;
  }
}
</style>
