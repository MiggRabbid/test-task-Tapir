<script setup lang="ts">
import { FOOTER_SECTIONS } from '../../constants/footer-content.ts';
</script>

<template>
  <footer class="footer">
    <AppContainer>
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
    </AppContainer>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 72px 0 84px;
  background-color: #000;
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 48px;
}

.footer__title {
  margin: 0;
  color: #5a5a5a;
  font-size: 42px;
  font-weight: 500;
  line-height: 1.2;
}

.footer__list {
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.footer__item + .footer__item {
  margin-top: 20px;
}

.footer__link {
  color: #f7f7f7;
  font-size: 46px;
  font-weight: 400;
  line-height: 1.2;
  text-decoration: none;
}

.footer__link:hover {
  opacity: 0.72;
}

@media (max-width: 1400px) {
  .footer__title {
    font-size: 28px;
  }

  .footer__link {
    font-size: 32px;
  }
}

@media (max-width: 960px) {
  .footer {
    padding: 40px 0 52px;
  }

  .footer__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;
  }

  .footer__title {
    font-size: 22px;
  }

  .footer__list {
    margin-top: 16px;
  }

  .footer__item + .footer__item {
    margin-top: 12px;
  }

  .footer__link {
    font-size: 20px;
  }
}

@media (max-width: 560px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}
</style>
