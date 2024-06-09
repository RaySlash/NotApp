import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      {
        name: "Work",
      },
      {
        name: "Personal",
      },
    ],
  });

  await prisma.note.createMany({
    data: [
      {
        title: "First Note",
        content: "This is the content of the first note.",
        categoryId: 1,
      },
      {
        title: "Second Note",
        content: "This is the content of the second note.",
        categoryId: 1,
      },
      {
        title: "Third Note",
        content: "This is the content of the third note.",
        categoryId: 1,
      },
      {
        title: "Fourth Note",
        content: "This is the content of the fourth note.",
        categoryId: 1,
      },
      {
        title: "Fifth Note",
        content: "This is the content of the fifth note.",
        categoryId: 2,
      },
      {
        title: "Sixth Note",
        content: "This is the content of the sixth note.",
        categoryId: 2,
      },
    ],
  });

  console.log("Seed data created");
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
