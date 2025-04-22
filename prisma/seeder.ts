import { PrismaClient } from "./client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("password", 10);
  await prisma.user.createMany({
    data: [
      { email: "sukundev@example.com", name: "Sukundev", password: password },
    ],
  });
}

main()
  .then(() => {
    console.log("✅ Seeding complete!");
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    return prisma.$disconnect();
  });
