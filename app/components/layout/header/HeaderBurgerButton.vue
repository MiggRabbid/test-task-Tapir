<template>
  <button class="header-burger" type="button" aria-label="Открыть меню">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1_2896"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_2896)">
        <path
          d="M3.5 17.6345V16.1348H20.5V17.6345H3.5ZM3.5 12.75V11.25H20.5V12.75H3.5ZM3.5 7.86525V6.3655H20.5V7.86525H3.5Z"
          fill="black"
        />
      </g>
    </svg>
  </button>
</template>

<style scoped lang="scss">
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

.header-burger__line {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--color-text-primary);
}

.header-burger__line:nth-child(1) {
  transform: translateY(-16px);
}

.header-burger__line:nth-child(3) {
  transform: translateY(16px);
}

@media (max-width: 968px) {
  .header-burger {
    display: block;
  }
}
</style>
