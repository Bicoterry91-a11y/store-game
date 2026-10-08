"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

export function ProductCard({ product }: { product: { id: string; name: string; slug: string; price: number; image: string; platform: string; category: string } }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <article className="card overflow-hidden">
      <Link href={`/produit/${product.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 hover:scale-105" />
        </div>
      </Link>
      <div className="p-4">
        <div className="text-xs uppercase tracking-widest text-cyan-400">{product.platform}</div>
        <Link href={`/produit/${product.slug}`}><h3 className="mt-2 font-bold hover:text-cyan-300">{product.name}</h3></Link>
        <p className="mt-1 text-xs text-slate-500">{product.category}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <strong>{product.price.toLocaleString("fr-FR")} XAF</strong>
          <button onClick={() => addItem({ id: product.id, name: product.name, slug: product.slug, price: product.price, image: product.image })} className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 p-3" aria-label="Ajouter au panier">
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
