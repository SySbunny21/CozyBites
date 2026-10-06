export type Recipe = {
  id: number

  name: string
  nameZh: string

  description: string
  descriptionZh: string

  category: 'meat' | 'vegetable' | 'dessert' | 'drink'

  meatType?: 'beef' | 'pork' | 'chicken' | 'lamb' | 'seafood'

  method:
    | 'stir-fry'
    | 'braised'
    | 'steamed'
    | 'grilled'
    | 'soup'
    | 'baked'
    | 'pan-fry'
    | 'boiled'
    | 'roasted'
    | 'cold-dish'
    | 'air-fryer'
    | 'slow-cook'

  time: number

  difficulty: 'Easy' | 'Medium' | 'Hard'

  image: string
}

export const recipes: Recipe[] = [
  {
    id: 1,

    name: 'Tomato Beef',
    nameZh: '番茄牛肉',

    description: 'Tender beef in a rich tomato sauce.',
    descriptionZh: '鲜嫩牛肉搭配浓郁番茄酱汁。',

    category: 'meat',
    meatType: 'beef',

    method: 'stir-fry',

    time: 30,

    difficulty: 'Easy',

    image: '/images/tomato-beef.jpg',
  },

  {
    id: 2,

    name: 'Honey Garlic Chicken',
    nameZh: '蜂蜜蒜香鸡',

    description: 'Sweet and savory chicken with garlic.',
    descriptionZh: '香甜浓郁的蜂蜜蒜香鸡肉。',

    category: 'meat',
    meatType: 'chicken',

    method: 'pan-fry',

    time: 35,

    difficulty: 'Easy',

    image: '/images/honey-garlic-chicken.jpg',
  },

  {
    id: 3,

    name: 'Garlic Vegetables',
    nameZh: '蒜香时蔬',

    description: 'Fresh vegetables tossed with fragrant garlic.',
    descriptionZh: '新鲜时蔬搭配浓郁蒜香。',

    category: 'vegetable',

    method: 'stir-fry',

    time: 15,

    difficulty: 'Easy',

    image: '/images/garlic-vegetables.jpg',
  },

  {
    id: 4,

    name: 'Strawberry Cream Cake',
    nameZh: '草莓奶油蛋糕',

    description: 'Soft cake layered with strawberries and cream.',
    descriptionZh: '松软蛋糕搭配草莓与轻盈奶油。',

    category: 'dessert',

    method: 'baked',

    time: 60,

    difficulty: 'Medium',

    image: '/images/strawberry-cake.jpg',
  },

  {
    id: 5,

    name: 'Matcha Latte',
    nameZh: '抹茶拿铁',

    description: 'Creamy matcha with smooth, warm milk.',
    descriptionZh: '细腻抹茶搭配香浓顺滑牛奶。',

    category: 'drink',

    method: 'boiled',

    time: 10,

    difficulty: 'Easy',

    image: '/images/matcha-latte.jpg',
  },

  {
    id: 6,

    name: 'Braised Pork',
    nameZh: '红烧肉',

    description: 'Slow-braised pork in a rich savory sauce.',
    descriptionZh: '慢火炖煮、酱香浓郁的红烧肉。',

    category: 'meat',
    meatType: 'pork',

    method: 'braised',

    time: 90,

    difficulty: 'Medium',

    image: '/images/braised-pork.jpg',
  },
]