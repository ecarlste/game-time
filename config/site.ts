import { NavItem } from '@/types/nav';

interface SiteConfig {
  name: string;
  description: string;
  mainNav: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: 'Game Time',
  description:
    'A beautifully simple video game time tracker to help you be your best self!',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
};
