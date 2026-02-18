<template>
  <button class="header-burger" type="button" aria-label="Открыть меню">
    <span class="header-burger__line" />
    <span class="header-burger__line" />
    <span class="header-burger__line" />
  </button>
</template>

<style scoped lang="scss">
.header-burger {
  display: none;
  grid-template-rows: repeat(3, 2px);
  gap: 5px;
  width: 36px;
  border: 0;
  padding: 8px 0;
  background: transparent;
  cursor: pointer;
}

.header-burger__line {
  display: block;
  width: 100%;
  height: 2px;
  border-radius: var(--radius-round);
  background-color: var(--color-text-primary);
}

@media (max-width: 960px) {
  .header-burger {
    display: inline-grid;
    justify-self: end;
  }
}
</style>
