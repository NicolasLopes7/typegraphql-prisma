import { PrismaClient } from "./generated/client";

const prisma = new PrismaClient({});

async function main() {
  await prisma.$connect();

  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      name: "Johnny Bravo",
      age: 55,
      address: {
        street: "5th Avenue",
        city: "Los Angeles",
      },
    },
  });

  console.log("All data inserted!");
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
