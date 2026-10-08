"use client";

import { useCartStore } from "@/store/cart-store";

export function AddToCartButton({ product }: { product: { id: string; name: string; slug: string; price: number; image: string } }) {
  const add = useCartStore((s) => s.addItem);
  return <button onClick={() => add({ ...product })} className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 font-bold">Ajouter au panier</button>;
}
