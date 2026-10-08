import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Telechargements() {
  const session=await getServerSession(authOptions); if(!session?.user?.id) redirect("/connexion");
  const orders=await prisma.order.findMany({where:{userId:session.user.id,paymentStatus:"paid"},include:{items:{include:{product:true}}}});
  const products=orders.flatMap(o=>o.items.map(i=>i.product));
  return <div className="mx-auto max-w-5xl px-4 py-12"><h1 className="text-4xl font-black">Mes téléchargements</h1><div className="mt-8 space-y-3">{products.length===0?<div className="card p-8 text-slate-400">Aucun produit débloqué.</div>:products.map(p=><div key={p.id} className="card flex items-center justify-between gap-4 p-5"><span className="font-bold">{p.name}</span>{p.downloadUrl?<a href={`/api/downloads/${p.id}`} className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-black">Télécharger</a>:<span className="text-sm text-slate-500">Lien à configurer</span>}</div>)}</div></div>;
}
