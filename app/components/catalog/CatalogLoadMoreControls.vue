<script setup lang="ts">
interface Props {
  hasError: boolean;
  isLoading: boolean;
  canLoadMore: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'load-more'): void;
}>();

const btnText = computed(() => {
  if (props.hasError && !props.isLoading) {
    return 'Повторить';
  } else if (props.isLoading) {
    return 'Загрузка...';
  } else {
    return 'Показать еще';
  }
});
</script>

<template>
  <div class="controls">
    <p v-if="hasError && !isLoading" class="controls__error">
      Произошла ошибка, попробуйте позже
    </p>

    <button
      v-if="canLoadMore"
      :class="isLoading ? 'controls__loading' : 'controls__button'"
      :disabled="isLoading"
      type="button"
      @click="emit('load-more')"
    >
      {{ btnText }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.controls {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: fit-content;

  &__error {
    text-wrap: nowrap;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }

  &__loading,
  &__button {
    width: fit-content;
    height: fit-content;
    opacity: 1;
    padding: 10px 24px;
    background-color: var(--color-bg-main);
    border: 1px solid transparent;
    font-size: 14px;

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      opacity: 1;
      color: var(--color-text-primary);
      border: 1px solid transparent;
      -webkit-text-fill-color: var(--color-text-primary);
    }
  }

  &__button {
    border-color: var(--color-text-primary);
    &:disabled {
      border-color: var(--color-text-primary);
    }
  }
}
</style>
