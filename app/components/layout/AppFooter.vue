<script setup lang="ts">
import { FOOTER_SECTIONS } from '@app/constants/footer-content';
</script>

<template>
  <footer class="footer">
    <div class="footer__grid">
      <section
        v-for="section in FOOTER_SECTIONS"
        :key="section.id"
        class="footer__section"
        :aria-labelledby="`footer-title-${section.id}`"
      >
        <h2 :id="`footer-title-${section.id}`" class="footer__title">
          {{ section.title }}
        </h2>
        <ul class="footer__list">
          <li v-for="item in section.items" :key="item.id" class="footer__item">
            <a class="footer__link" :href="item.href">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '~/assets/scss/abstracts/breakpoints' as bp;

.footer {
  background-color: var(--color-bg-contrast);
}

.footer__grid {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  justify-content: space-between;
  column-gap: 20px;
  row-gap: 60px;
  width: 100%;
  max-width: var(--container-max-width);
  min-height: 390px;
  border-top: 1px solid var(--color-text-inverse);
  padding-left: var(--container-padding-desktop);
  padding-right: var(--container-padding-desktop);
  padding-top: var(--container-padding-desktop-y);
  padding-bottom: var(--container-padding-desktop-y);
  box-sizing: border-box;
}

.footer__section {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 100%;
  min-height: 190px;
}

.footer__title {
  margin: 0;
  color: var(--color-text-secondary);
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-base);
  letter-spacing: 0;
  vertical-align: bottom;
}

.footer__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer__item + .footer__item {
  margin-top: 14px;
}

.footer__link {
  color: var(--color-text-inverse);
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-base);
  letter-spacing: 0;
  vertical-align: bottom;
  text-decoration: none;
}

.footer__link:hover {
  opacity: 0.72;
}

@include bp.tablet-down {
  .footer__grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
    justify-content: stretch;
    gap: 28px;
    padding-left: var(--container-padding-tablet);
    padding-right: var(--container-padding-tablet);
    padding-top: var(--container-padding-tablet-y);
    padding-bottom: var(--container-padding-tablet-y);
  }
}

@include bp.mobile-down {
  .footer__grid {
    grid-template-columns: 1fr;
    padding-left: var(--container-padding-mobile);
    padding-right: var(--container-padding-mobile);
    padding-top: var(--container-padding-mobile-y);
    padding-bottom: var(--container-padding-mobile-y);
  }
}
</style>
