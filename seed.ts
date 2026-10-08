import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const products = [
  ["Roblox 400 Robux", "roblox-400-robux", "Recharge Robux pour votre compte Roblox.", 2500, "Robux", "Roblox", "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80"],
  ["Free Fire Diamonds", "free-fire-diamonds", "Diamants Free Fire pour votre compte.", 1800, "Diamants", "Free Fire", "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80"],
  ["PlayStation Gift Card", "playstation-gift-card", "Carte cadeau numérique PlayStation.", 5000, "Cartes cadeaux", "PlayStation", "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80"],
  ["Xbox Gift Card", "xbox-gift-card", "Carte cadeau numérique Xbox.", 5200, "Cartes cadeaux", "Xbox", "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80"],
  ["Steam Gift Card", "steam-gift-card", "Carte cadeau Steam.", 6000, "Cartes cadeaux", "Steam", "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80"],
  ["EA FC Credits", "ea-fc-credits", "Crédits numériques pour EA FC.", 7000, "Crédits", "EA FC", "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80"],
  ["PUBG Mobile Credits", "pubg-mobile-credits", "Crédits PUBG Mobile.", 3000, "Crédits", "Mobile", "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80"],
  ["Minecraft", "minecraft", "Licence numérique Minecraft.", 6500, "Jeux", "PC", "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80"]
];

async function main() {
  const passwordHash = await bcrypt.hash("ChangeMe123!", 12);

  await prisma.user.upsert({
    where: { email: "admin@storegame.com" },
    update: {},
    create: {
      name: "Admin Store Game",
      email: "admin@storegame.com",
      passwordHash,
      role: "admin"
    }
  });

  for (const [name, slug, description, price, category, platform, image] of products) {
    await prisma.product.upsert({
      where: { slug: slug as string },
      update: {},
      create: {
        name: name as string,
        slug: slug as string,
        description: description as string,
        price: price as number,
        category: category as string,
        platform: platform as string,
        image: image as string,
        featured: true,
        isDigital: true
      }
    });
  }

  console.log("Store Game seed terminé.");
}

main().finally(() => prisma.$disconnect());
