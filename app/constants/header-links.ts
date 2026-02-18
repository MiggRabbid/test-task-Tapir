export interface HeaderLink {
  id: string;
  label: string;
  href: string;
}

export const HEADER_LINKS: HeaderLink[] = [
  { id: 'men', label: 'Мужчинам', href: '#' },
  { id: 'women', label: 'Женщинам', href: '#' },
  { id: 'catalog', label: 'Каталог', href: '#' },
  { id: 'delivery', label: 'Доставка', href: '#' },
  { id: 'blog', label: 'Блог', href: '#' },
  { id: 'about', label: 'О нас', href: '#' },
];
