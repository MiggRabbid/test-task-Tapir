export interface FooterSectionItem {
  id: string;
  label: string;
  href: string;
}

export interface FooterSection {
  id: string;
  title: string;
  items: FooterSectionItem[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    id: 'catalog',
    title: 'Каталог',
    items: [
      { id: 'brands', label: 'Все бренды', href: '#' },
      { id: 'nike', label: 'Nike', href: '#' },
      { id: 'adidas', label: 'Adidas', href: '#' },
      { id: 'puma', label: 'Puma', href: '#' },
      { id: 'new-balance', label: 'New Balance', href: '#' },
    ],
  },
  {
    id: 'help',
    title: 'Помощь',
    items: [
      { id: 'delivery', label: 'Доставка', href: '#' },
      { id: 'payment', label: 'Заказ и оплата', href: '#' },
      { id: 'returns', label: 'Обмен и Возврат', href: '#' },
      { id: 'faq', label: 'F. A. Q.', href: '#' },
    ],
  },
  {
    id: 'information',
    title: 'Информация',
    items: [
      { id: 'advantages', label: 'Преимущества', href: '#' },
      { id: 'security', label: 'Гарантия и безопасность', href: '#' },
      { id: 'custom-order', label: 'Индивидуальный заказ', href: '#' },
      { id: 'sale', label: 'Акции', href: '#' },
    ],
  },
  {
    id: 'company',
    title: 'Компания',
    items: [
      { id: 'about', label: 'О нас', href: '#' },
      { id: 'blog', label: 'Блог', href: '#' },
      { id: 'reviews', label: 'Отзывы', href: '#' },
      { id: 'contacts', label: 'Контакты', href: '#' },
    ],
  },
];
