import { data } from './src/app/shared/Models/Food';
import { Tags } from './src/app/shared/Models/Tags'

export const sample_food: data[] = [
  {
    id: 1,
    name: 'Burger',
    imageUrl: './assets/image/Burger.jpg',
    Price: 60,
    origins: ['India', 'UK'],
    cooktime: '10-15',
    favorite: false,
    tag:['Burger','FastFood']
  },
  {
    id: 2,
    name: 'Chocolate Cake',
    imageUrl: './assets/image/chocolate-cake.jpg',
    Price: 250,
    origins: ['india', 'Pune'],
    cooktime: '26-30',
    favorite: true,
    tag:['Ice Product','Sweets']
  },
  {
    id: 3,
    name: 'Egg Roll',
    imageUrl: './assets/image/egg-roll.jpg',
    Price: 50,
    origins: ['India', 'Pune'],
    cooktime: '10-15',
    favorite: true,
    tag:['Roll','Non-Veg']
  },
  {
    id: 4,
    name: 'Meet Sandwich',
    imageUrl: './assets/image/meet-sandwich.jpg',
    Price: 120,
    origins: ['India', 'Itly'],
    cooktime: '26-30',
    favorite: true,
    tag:['Non-Veg']
  },
  {
    id: 5,
    name: 'Onion Pakoda',
    imageUrl: './assets/image/onion-pakoda.jpg',
    Price: 40,
    origins: ['India', 'Pune'],
    cooktime: '10-15',
    favorite: true,
    tag:['Snacks']
  },
  {
    id: 6,
    name: 'Pakoda',
    imageUrl: './assets/image/pakoda.jpg',
    Price: 30,
    origins: ['India', 'Pune', 'Kerla'],
    cooktime: '10-15',
    favorite: true,
    tag:['Snacks']
  },
  {
    id: 7,
    name: 'Pan Cake',
    imageUrl: './assets/image/pan-cake.jpg',
    Price: 60,
    origins: ['Ancient Greece'],
    cooktime: '26-30',
    favorite: true,
    tag:['IceProduct','Sweets']
  },

  {
    id: 8,
    name: 'Red Velvet Cake',
    imageUrl: './assets/image/red-velvate-cake.jpg',
    Price: 300,
    origins: ['New York', 'India'],
    cooktime: '25-30',
    favorite: true,
    tag:['IceProduct','Sweets','Cake']
  },

  {
    id: 9,
    name: 'Sabudana Khichdi',
    imageUrl: './assets/image/sabudana-khichdi.jpg',
    Price: 30,
    origins: ['India'],
    cooktime: '10-15',
    favorite: false,

  },

  {
    id: 10,
    name: 'Sabudana Vada',
    imageUrl: './assets/image/sabudana-vada.jpg',
    Price: 25,
    origins: ['Ancient Greece'],
    cooktime: '10-15',
    favorite: true,
    tag:['FastFood']
  },
  {
    id: 11,
    name: 'Samosa',
    imageUrl: './assets/image/samosa.jpg',
    Price: 30,
    origins: ['India', 'Middle East'],
    cooktime: '10-15',
    favorite: false,
    tag:['Fast Food']
  },
];

export const Sample_tags:Tags[] = [
  {name:'All',count:11},
  {name:'FastFood',count:2},
  {name:'Burger',count:1},
  {name:'Non-Veg',count:3},
  {name:'Snacks',count:4},
  {name:'IceProduct',count:2},
  {name:'Cake',count:2},

]