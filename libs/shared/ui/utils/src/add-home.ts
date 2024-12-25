import { NavbarItem } from '@bt-libs/shared/ui/models';
export const addHome = (items: NavbarItem[]): NavbarItem[] => {
  return [{ label: 'home', route: '/' }, ...items];
};
