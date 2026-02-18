<script setup lang="ts">
import type { HeaderLink } from '../../../constants/header-links.ts';

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
  justify-self: center;
  background-color: #e9e9e9;
  padding: 14px 24px;
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
  font-size: 30px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
}

.header-nav__link:hover {
  opacity: 0.7;
}

@media (max-width: 1200px) {
  .header-nav {
    width: 100%;
    overflow-x: auto;
    padding: 12px 16px;
  }

  .header-nav__menu {
    gap: 24px;
    width: max-content;
  }

  .header-nav__link {
    font-size: 20px;
  }
}
</style>
