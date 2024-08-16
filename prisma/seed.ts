import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';
import { categories, ingredients, products } from './constants';

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User',
        email: 'user@test.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'admin@test.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Пепперони фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Сырная',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Чоризо фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони фреш"
      { productId: pizza1.id, pizzaType: 1, price: randomNumber(190, 600), size: 20 },
      { productId: pizza1.id, pizzaType: 2, price: randomNumber(190, 600), size: 30 },
      { productId: pizza1.id, pizzaType: 2, price: randomNumber(190, 600), size: 40 },

      // Пицца "Сырная"
      { productId: pizza2.id, pizzaType: 1, price: randomNumber(190, 600), size: 20 },
      { productId: pizza2.id, pizzaType: 1, price: randomNumber(190, 600), size: 30 },
      { productId: pizza2.id, pizzaType: 1, price: randomNumber(190, 600), size: 40 },
      { productId: pizza2.id, pizzaType: 2, price: randomNumber(190, 600), size: 20 },
      { productId: pizza2.id, pizzaType: 2, price: randomNumber(190, 600), size: 30 },
      { productId: pizza2.id, pizzaType: 2, price: randomNumber(190, 600), size: 40 },

      // Пицца "Чоризо фреш"
      { productId: pizza3.id, pizzaType: 1, price: randomNumber(190, 600), size: 20 },
      { productId: pizza3.id, pizzaType: 2, price: randomNumber(190, 600), size: 30 },
      { productId: pizza3.id, pizzaType: 2, price: randomNumber(190, 600), size: 40 },

      // Остальные продукты
      { productId: 1, price: randomNumber(190, 600) },
      { productId: 2, price: randomNumber(190, 600) },
      { productId: 3, price: randomNumber(190, 600) },
      { productId: 4, price: randomNumber(190, 600) },
      { productId: 5, price: randomNumber(190, 600) },
      { productId: 6, price: randomNumber(190, 600) },
      { productId: 7, price: randomNumber(190, 600) },
      { productId: 8, price: randomNumber(190, 600) },
      { productId: 9, price: randomNumber(190, 600) },
      { productId: 10, price: randomNumber(190, 600) },
      { productId: 11, price: randomNumber(190, 600) },
      { productId: 12, price: randomNumber(190, 600) },
      { productId: 13, price: randomNumber(190, 600) },
      { productId: 14, price: randomNumber(190, 600) },
      { productId: 15, price: randomNumber(190, 600) },
      { productId: 16, price: randomNumber(190, 600) },
      { productId: 17, price: randomNumber(190, 600) },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
