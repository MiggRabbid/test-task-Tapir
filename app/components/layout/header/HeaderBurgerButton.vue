<template>
  <button class="header-burger" type="button" aria-label="Открыть меню">
    <IconBurgerMenu class="header-burger__icon" />
  </button>
</template>

<style scoped lang="scss">
@use '~/assets/scss/abstracts/breakpoints' as bp;

.header-burger {
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 0;
  padding: 8px;
  background-color: var(--color-bg-second);
  cursor: pointer;
}

.header-burger__icon {
  width: 24px;
  height: 24px;
  fill: var(--color-text-primary);
}

@include bp.tablet-down {
  .header-burger {
    display: block;
  }
}
</style>
