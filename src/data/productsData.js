import './productsData.css';
import steel_sword from '../assets/steel_sword.png';
import steel_armor from '../assets/steel_armor.png';
import steel_dagger from '../assets/steel_dagger.png';
import steel_shield from '../assets/steel_shield.png';
import steel_helmet from '../assets/steel_helmet.png';
import bronze_armor from '../assets/bronze_armor.png';
import bronze_dagger from '../assets/bronze_dagger.png';
import bronze_helmet from '../assets/bronze_helmet.png';
import bronze_shield from '../assets/bronze_shield.png';
import bronze_sword from '../assets/bronze_sword.png';
import iron_armor from '../assets/iron_armor.png';
import iron_dagger from '../assets/iron_dagger.png';
import iron_helmet from '../assets/iron_helmet.png';
import iron_shield from '../assets/iron_shield.png';
import iron_sword from '../assets/iron_sword.png';
import titanium_armor from '../assets/titanium_armor.png';
import titanium_dagger from '../assets/titanium_dagger.png';
import titanium_helmet from '../assets/titanium_helmet.png';
import titanium_shield from '../assets/titanium_shield.png';
import titanium_sword from '../assets/titanium_sword.png';

export const productsData = [
  { 
    id: 1, 
    name: 'Steel Sword',
    type: 'sword', 
    material: 'steel', 
    price: 800, 
    rating: 4.5,
    craftedBy: 'Kristine, Master Blacksmith',
    description: 'Forged for power and precision, this steel sword offers sharp performance and a polished, battle-ready look. A must-have for collectors, cosplayers, or anyone seeking a timeless weapon with serious edge.',
    stock: 9,
    image: steel_sword
  },
  { 
    id: 2, 
    name: 'Iron Shield', 
    type: 'shield', 
    material: 'iron', 
    price: 900, 
    rating: 4.0,
    craftedBy: 'Marcus, Elite Armorer',
    description: 'A sturdy shield designed for royal guards.',
    stock: 5,
    image: iron_shield
  },
  { 
    id: 3, 
    name: 'Steel Armor', 
    type: 'armor', 
    material: 'steel', 
    price: 900, 
    rating: 4.8,
    craftedBy: 'Elaine, Armor Specialist',
    description: 'Full plate armor for maximum protection.',
    stock: 3,
    image: steel_armor
  },
  { 
    id: 4, 
    name: 'Bronze Dagger', 
    type: 'dagger', 
    material: 'bronze', 
    price: 1000, 
    rating: 3.5,
    craftedBy: 'Silas, Weaponsmith',
    description: 'Concealable dagger for stealth operations.',
    stock: 12,
    image: bronze_dagger
  },
  { 
    id: 5, 
    name: 'Titanium Helmet', 
    type: 'helmet', 
    material: 'titanium', 
    price: 1800, 
    rating: 4.2,
    craftedBy: 'Garrick, Armorer',
    description: 'Lightweight yet durable battle helmet.',
    stock: 7,
    image: titanium_helmet
  },
  { 
    id: 6, 
    name: 'Titanium Sword', 
    type: 'sword', 
    material: 'titanium', 
    price: 2000, 
    rating: 5.0,
    craftedBy: 'Kristine, Master Blacksmith',
    description: 'The ultimate weapon against draconic foes.',
    stock: 2,
    image: titanium_sword
  },
  { 
    id: 7, 
    name: 'Bronze Shield', 
    type: 'shield', 
    material: 'bronze', 
    price: 1200, 
    rating: 3.8,
    craftedBy: 'Marcus, Elite Armorer',
    description: 'Small but sturdy round shield.',
    stock: 8,
    image: bronze_shield
  },
  { 
    id: 8, 
    name: 'Steel Dagger', 
    type: 'dagger', 
    material: 'steel', 
    price: 500, 
    rating: 4.6,
    craftedBy: 'Silas, Weaponsmith',
    description: 'Razor-sharp blade for precision strikes.',
    stock: 6,
    image: steel_dagger
  },
  { 
    id: 9, 
    name: 'Iron Helmet', 
    type: 'helmet', 
    material: 'iron', 
    price: 800, 
    rating: 3.9,
    craftedBy: 'Garrick, Armorer',
    description: 'Classic iron helmet with nose guard.',
    stock: 10,
    image: iron_helmet
  },
  { 
    id: 10, 
    name: 'Bronze Sword', 
    type: 'sword', 
    material: 'bronze', 
    price: 1300, 
    rating: 4.3,
    craftedBy: 'Kristine, Master Blacksmith',
    description: 'Ornate sword for formal occasions.',
    stock: 4,
    image: bronze_sword
  },
  { 
    id: 11, 
    name: 'Iron Armor', 
    type: 'armor', 
    material: 'iron', 
    price: 1200, 
    rating: 4.7,
    craftedBy: 'Elaine, Armor Specialist',
    description: 'Complete set of plate armor.',
    stock: 3,
    image: iron_armor
  },
  { 
    id: 12, 
    name: 'Titanium Shield', 
    type: 'shield', 
    material: 'titanium', 
    price: 1900, 
    rating: 4.9,
    craftedBy: 'Marcus, Elite Armorer',
    description: 'Premium shield for elite guards.',
    stock: 7,
    image: titanium_shield
  },
  {
    id: 13,
    name: 'Iron Sword',
    type: 'sword',
    material: 'iron',
    price: 1000,
    rating: 4.6,
    craftedBy: 'Kristine, Master Blacksmith',
    description: 'Crafted for strength and durability, this iron sword is a reliable blade for beginners and seasoned warriors alike. Perfect for display, cosplay, or training use. Simple, sturdy, and battle-ready.',
    stock: 6,
    image: iron_sword
  },
  {
    id: 14, 
    name: 'Steel Shield', 
    type: 'shield', 
    material: 'steel', 
    price: 700, 
    rating: 4.6,
    craftedBy: 'Silas, Weaponsmith',
    description: 'Razor-sharp blade for precision strikes.',
    stock: 6,
    image:steel_shield
  },
  {
    id: 15, 
    name: 'Bronze Armor', 
    type: 'armor', 
    material: 'bronze', 
    price: 1500, 
    rating: 4.3,
    craftedBy: 'Kristine, Master Blacksmith',
    description: 'Ornate sword for formal occasions.',
    stock: 4,
    image: bronze_armor
  },
  {
    id: 16, 
    name: 'Titanium Armor', 
    type: 'armor', 
    material: 'titanium', 
    price: 2500, 
    rating: 4.9,
    craftedBy: 'Marcus, Elite Armorer',
    description: 'Premium shield for elite guards.',
    stock: 7,
    image: titanium_armor
  },
  {
    id: 17,
    name: 'Iron Dagger',
    type: 'dagger',
    material: 'iron',
    price: 700,
    rating: 4.6,
    craftedBy: 'Kristine, Master Blacksmith',
    description: 'A nice product',
    stock: 6,
    image: iron_dagger
  },
  {
    id: 18, 
    name: 'Titanium Dagger', 
    type: 'dagger', 
    material: 'titanium', 
    price: 1700, 
    rating: 4.9,
    craftedBy: 'Marcus, Elite Armorer',
    description: 'Premium shield for elite guards.',
    stock: 7,
    image: titanium_dagger
  },
  {
    id: 19, 
    name: 'Steel Helmet', 
    type: 'helmet', 
    material: 'steel', 
    price: 600, 
    rating: 4.6,
    craftedBy: 'Silas, Weaponsmith',
    description: 'Razor-sharp blade for precision strikes.',
    stock: 6,
    image: steel_helmet
  },
  {
    id: 20, 
    name: 'Bronze Helmet', 
    type: 'helmet', 
    material: 'bronze', 
    price: 1100, 
    rating: 4.3,
    craftedBy: 'Kristine, Master Blacksmith',
    description: 'Ornate sword for formal occasions.',
    stock: 4,
    image: bronze_helmet
  }
];