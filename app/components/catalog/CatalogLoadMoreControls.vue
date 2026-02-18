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
  if (props.isLoading) {
    return 'Загрузка...';
  } else if (props.hasError) {
    return 'Повторить';
  } else {
    return 'Показать еще';
  }
});
</script>

<template>
  <div class="controls">
    <p v-if="hasError" class="controls__error">Произошла ошибка, попробуйте позже</p>

    <button
      v-if="canLoadMore"
      :class="isLoading ? 'controls__loading' : 'controls__btn'"
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
  &__btn,
  &__loading {
    width: fit-content;
    height: fit-content;
    opacity: 1;
    padding: 10px 24px;
    background-color: var(--color-bg-main);
    border: 1px solid transparent;
    font-size: 14px;
  }

  &__btn {
    border-color: var(--color-text-primary);
    &:hover {
      opacity: 0.8;
    }
  }

  &__btn:disabled,
  &__loading:disabled {
    opacity: 1;
    color: var(--color-text-primary);
    background-color: var(--color-bg-main);
    -webkit-text-fill-color: var(--color-text-primary);
  }
  &__btn:disabled {
    border-color: var(--color-text-primary);
  }
  &__loading:disabled {
    border-color: transparent;
  }
}
</style>
