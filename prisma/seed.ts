import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.note.createMany({
    data: [
      {
        title: "First Note",
        content: "This is the content of the first note.",
      },
      {
        title: "Second Note",
        content: "This is the content of the second note.",
      },
      {
        title: "Third Note",
        content: "This is the content of the third note.",
      },
      {
        title: "Fourth Note",
        content: "This is the content of the fourth note.",
      },
      {
        title: "Fifth Note",
        content: "This is the content of the fifth note.",
      },
      {
        title: "Sixth Note",
        content: "This is the content of the sixth note.",
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
