import { NavigationItem } from '../models/navigation-item.model';
import { colors } from 'src/app/shared/colors/angular-material.color';

export const navigationitems: NavigationItem[] = [
  {
    name: 'Home',
    path: '',
    backgroundColor: colors.grey,
    color: colors.white,
  },
  {
    name: 'Products',
    path: 'products',
    backgroundColor: colors.pink,
    color: colors.white,
  },
  {
    name: 'Offers',
    path: 'offers',
    backgroundColor: colors.cyan,
    color: colors.black,
  },
  {
    name: 'Admin',
    path: 'admin',
    backgroundColor: colors.indigo,
    color: colors.white,
  },
];
