export interface Menu {
  path: string;
  name: string;
}

export const menuList: Menu[] = [
  {
    path: '/products',
    name: 'Doctors'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/contact',
    name: 'Contact'
  },
  {
    path: '/dashboard',
    name: 'Dashboard'
  },
  // {
  //   path: '/doc',
  //   name: 'Doc'
  // }
];
