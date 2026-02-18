<script setup lang="ts">
import type { HeaderAction } from '../../../constants/header-links.ts';

interface HeaderActionsProps {
  actions: HeaderAction[];
}

defineProps<HeaderActionsProps>();
</script>

<template>
  <div class="header-actions">
    <a
      v-for="action in actions"
      :key="action.id"
      class="header-actions__link"
      :href="action.href"
    >
      {{ action.label }}
    </a>
  </div>
</template>

<style scoped lang="scss">
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.header-actions__link {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
}

.header-actions__link:hover {
  color: var(--color-text-primary);
}
</style>
