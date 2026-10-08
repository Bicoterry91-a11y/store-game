"use client";

import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

export function Header() {
  const count = useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#070A12]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">
        <Link href="/" className="text-2xl font-black tracking-tight">
          Store <span className="text-cyan-400">Game</span>
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          <Link href="/boutique" className="text-sm text-slate-300 hover:text-white">Boutique</Link>
          <Link href="/contact" className="text-sm text-slate-300 hover:text-white">Contact</Link>
          <Link href="/connexion" className="text-sm text-slate-300 hover:text-white">Connexion</Link>
        </nav>
        <form action="/recherche" className="ml-auto hidden max-w-md flex-1 items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3 md:flex">
          <Search className="h-4 w-4 text-slate-500" />
          <input name="q" className="w-full bg-transparent py-2 text-sm outline-none" placeholder="Rechercher un produit..." />
        </form>
        <Link href="/panier" className="relative rounded-xl border border-slate-700 bg-slate-900 p-3">
          <ShoppingCart className="h-5 w-5" />
          {count > 0 && <span className="absolute -right-2 -top-2 rounded-full bg-cyan-400 px-2 py-0.5 text-xs font-bold text-black">{count}</span>}
        </Link>
      </div>
    </header>
  );
}
