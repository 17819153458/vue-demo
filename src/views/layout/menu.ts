import type { Menus } from '@/common/type/menu'

export const menusData: Menus[] = [
  {
    id: 'demo',
    name: 'demo',
    index: 'demo',
    icon: 'Sugar',
    children: [
      {
        id: 'layout1',
        name: 'layout1',
        index: '/layout1',
      },
      {
        id: 'layout2',
        name: 'layout2',
        index: '/layout2',
      },
      {
        id: 'layout3',
        name: 'layout3',
        index: '/layout3',
      },
    ],
  },
  {
    id: 'demo2',
    name: 'demo2',
    index: 'demo2',
    icon: 'Watermelon',
    children: [
      {
        id: 'layout4',
        name: 'layout4',
        index: '/layout4',
      },
      {
        id: 'layout5',
        name: 'layout5',
        index: '/layout5',
      },
      {
        id: 'layout6',
        name: 'layout6',
        index: '/layout6',
      },
    ],
  },
]
