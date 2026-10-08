# Store Game

Boutique e-commerce de produits gaming et numériques, en français et en XAF.

## Ce qui est inclus

- Next.js App Router + TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- Panier Zustand persistant
- Comptes clients avec NextAuth Credentials
- Commandes
- Checkout
- Architecture PayFusion isolée côté serveur
- Webhook PayFusion
- Espace client
- Téléchargements après paiement
- Dashboard admin protégé par rôle
- Seed de produits de démonstration

## 1. Installation locale

```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

Ouvrir http://localhost:3000

## Compte admin de démonstration

Email: admin@storegame.com
Mot de passe: ChangeMe123!

Changez immédiatement ce mot de passe avant toute utilisation réelle.

## 2. Base de données

Le projet utilise PostgreSQL. Pour Vercel, utilisez une base PostgreSQL managée (par exemple Neon ou Supabase) et placez son `DATABASE_URL` dans les variables d'environnement.

## 3. PayFusion

Le fichier `lib/payfusion.ts` isole l'intégration.

Les noms et le format exacts des endpoints doivent être adaptés à la documentation/API réellement fournie par votre compte marchand PayFusion. Le projet ne contient aucune vraie clé.

Variables:
- PAYFUSION_CLIENT_ID
- PAYFUSION_CLIENT_SECRET
- PAYFUSION_BASE_URL
- PAYFUSION_PAYMENT_PATH
- PAYFUSION_WEBHOOK_SECRET
- PAYFUSION_WEBHOOK_URL

Ne mettez jamais les secrets dans le code ou dans GitHub.

## 4. Déploiement Vercel

1. Importer le dépôt GitHub dans Vercel.
2. Ajouter toutes les variables d'environnement.
3. Ajouter une base PostgreSQL.
4. Déployer.
5. Configurer l'URL du webhook PayFusion vers `/api/webhooks/payfusion`.
6. Vérifier le format de signature du webhook avec la documentation PayFusion avant d'accepter des paiements réels.

## 5. Avant les vrais paiements

Cette version est une base propre de production, mais il faut encore:
- brancher le format exact de l'API PayFusion de votre compte;
- valider cryptographiquement les webhooks selon PayFusion;
- utiliser un stockage de fichiers avec URLs signées pour les téléchargements;
- remplacer les images et produits de démonstration;
- définir les CGV, confidentialité et support;
- tester un paiement réel/sandbox de bout en bout.
