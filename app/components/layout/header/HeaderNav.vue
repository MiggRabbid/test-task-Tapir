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
  background-color: var(--color-bg-header);
  box-sizing: border-box;
  width: 590px;
  height: 40px;
  padding: 10px 24px;
  backdrop-filter: blur(100px);
}

.header-nav__menu {
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  white-space: nowrap;
}

.header-nav__link {
  color: #000;
  font-family: 'Golos Text', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
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
    max-width: 590px;
    overflow-x: auto;
    padding: 12px 16px;
  }

  .header-nav__menu {
    gap: 24px;
    width: max-content;
  }
}
</style>
